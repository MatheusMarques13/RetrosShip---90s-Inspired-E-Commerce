import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@getmocha/users-service/react";
import { Header } from "@/react-app/components/Header";
import { HeroBanner } from "@/react-app/components/HeroBanner";
import { CategoryBar } from "@/react-app/components/CategoryBar";
import { ProductCard } from "@/react-app/components/ProductCard";
import { Footer } from "@/react-app/components/Footer";
import { products } from "@/react-app/data/products";
import { useWishlist } from "@/react-app/hooks/useWishlist";
import { useLanguage } from "@/react-app/contexts/LanguageContext";
import { Star } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<string[]>([]);
  const { user } = useAuth();
  const { toggleWishlist, isWishlisted, wishlistCount } = useWishlist();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleToggleWishlist = async (productId: string) => {
    const result = await toggleWishlist(productId);
    if (result.requiresAuth) {
      navigate("/login");
    }
  };

  const addToCart = (productId: string) => {
    setCart(prev => [...prev, productId]);
  };

  return (
    <div className="min-h-screen bg-background relative scanlines">
      <Header 
        cartCount={cart.length}
        wishlistCount={wishlistCount}
        onCartClick={() => {}}
        onWishlistClick={() => {}}
      />
      
      <main className="container mx-auto px-4">
        <HeroBanner />
        
        {/* Products section */}
        <section className="py-8">
          {/* Section header panel */}
          <div className="panel-raised p-0 overflow-hidden mb-6">
            <div className="title-bar">
              <div className="flex items-center gap-2">
                <Star size={14} />
                <span>{t("home.featuredProducts")}</span>
              </div>
            </div>
            
            <div className="p-4 text-center">
              <h2 className="font-pixel text-3xl lg:text-4xl font-bold text-retro-black">
                {t("home.trendingNow")}
              </h2>
              <p className="text-sm text-retro-dark mt-2">
                {t("home.orderNow")}
              </p>
            </div>
            
            {/* Category filter */}
            <CategoryBar 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          
          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={isWishlisted(product.id)}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={addToCart}
              />
            ))}
          </div>
          
          {/* Load more */}
          <div className="text-center mt-8">
            <button className="btn-gold px-8 py-3 font-bold text-lg">
              {t("home.viewAllProducts")}
            </button>
          </div>
        </section>
        
        {/* Feature banner */}
        <section className="py-8">
          <div className="panel-raised p-0 overflow-hidden">
            <div className="title-bar text-center justify-center">
              <span>{t("home.specialOffer")}</span>
            </div>
            <div className="p-8 text-center bg-retro-gold">
              <h2 className="font-pixel text-3xl lg:text-5xl font-bold mb-4 text-retro-black">
                {t("home.readyToLaunch")}
              </h2>
              <div className="panel-raised inline-block p-4 mb-6">
                <p className="text-base lg:text-lg text-retro-black max-w-2xl">
                  {t("home.joinThousands")}
                </p>
              </div>
              <div>
                {!user && (
                  <button 
                    onClick={() => navigate("/login")}
                    className="btn-retro px-8 py-4 font-bold text-lg"
                  >
                    {t("home.createAccount")}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <div className="container mx-auto px-4 pb-8">
        <Footer />
      </div>
    </div>
  );
}
