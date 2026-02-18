import { Hono } from "hono";
import {
  exchangeCodeForSessionToken,
  getOAuthRedirectUrl,
  authMiddleware,
  deleteSession,
  MOCHA_SESSION_TOKEN_COOKIE_NAME,
} from "@getmocha/users-service/backend";
import { getCookie, setCookie } from "hono/cookie";

type Variables = {
  user: {
    id: string;
    email: string;
  };
};

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

// Obtain redirect URL from the Mocha Users Service
app.get("/api/oauth/google/redirect_url", async (c) => {
  const redirectUrl = await getOAuthRedirectUrl("google", {
    apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
    apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
  });

  return c.json({ redirectUrl }, 200);
});

// Exchange the code for a session token
app.post("/api/sessions", async (c) => {
  const body = await c.req.json();

  if (!body.code) {
    return c.json({ error: "No authorization code provided" }, 400);
  }

  const sessionToken = await exchangeCodeForSessionToken(body.code, {
    apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
    apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
  });

  setCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
    maxAge: 60 * 24 * 60 * 60, // 60 days
  });

  return c.json({ success: true }, 200);
});

// Get the current user object for the frontend
app.get("/api/users/me", authMiddleware, async (c) => {
  return c.json(c.get("user"));
});

// Log out the user
app.get("/api/logout", async (c) => {
  const sessionToken = getCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME);

  if (typeof sessionToken === "string") {
    await deleteSession(sessionToken, {
      apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
      apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
    });
  }

  setCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
    maxAge: 0,
  });

  return c.json({ success: true }, 200);
});

// ============ WISHLIST ENDPOINTS ============

// Get user's wishlist
app.get("/api/wishlist", authMiddleware, async (c) => {
  const user = c.get("user");
  
  const result = await c.env.DB.prepare(
    "SELECT product_id FROM wishlists WHERE user_id = ? ORDER BY created_at DESC"
  ).bind(user.id).all();
  
  const productIds = (result.results || []).map((row) => row.product_id as string);
  
  return c.json({ productIds });
});

// Add product to wishlist
app.post("/api/wishlist/:productId", authMiddleware, async (c) => {
  const user = c.get("user");
  const productId = c.req.param("productId");
  
  try {
    await c.env.DB.prepare(
      "INSERT INTO wishlists (user_id, product_id) VALUES (?, ?)"
    ).bind(user.id, productId).run();
    
    return c.json({ success: true });
  } catch (error: unknown) {
    // If it's a unique constraint error, the item is already in wishlist
    if (error instanceof Error && error.message.includes("UNIQUE constraint")) {
      return c.json({ success: true, message: "Already in wishlist" });
    }
    throw error;
  }
});

// Remove product from wishlist
app.delete("/api/wishlist/:productId", authMiddleware, async (c) => {
  const user = c.get("user");
  const productId = c.req.param("productId");
  
  await c.env.DB.prepare(
    "DELETE FROM wishlists WHERE user_id = ? AND product_id = ?"
  ).bind(user.id, productId).run();
  
  return c.json({ success: true });
});

export default app;
