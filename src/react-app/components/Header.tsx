import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, ShoppingCart, Heart, Menu, User, X, LogOut } from "lucide-react";
import { useAuth } from "@getmocha/users-service/react";
import { RocketMascot } from "./RocketMascot";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/react-app/contexts/LanguageContext";

interface HeaderProps {
  cartCount?: number;
  wishlistCount?: number;
  onCartClick?: () => void;
  onWishlistClick?: () => void;
}

export function Header({ 
  cartCount = 0, 
  wishlistCount = 0,
  onCartClick,
  onWishlistClick,
}: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { user, isPending, logout } = useAuth();
  const navigate = useNavigate();
  
  const navItems = [
    { key: "header.newArrivals", href: "#" },
    { key: "header.women", href: "#" },
    { key: "header.men", href: "#" },
    { key: "header.accessories", href: "#" },
    { key: "header.sale", href: "#", isSale: true },
  ];

  return (
    <header className="relative z-50">
      {/* Announcement bar - marquee style */}
      <div className="bg-retro-gold text-retro-black py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap font-bold tracking-wide">
          ★ {t("announcement.freeShipping")} ★ {t("announcement.useCode")} ★ {t("announcement.callNow")} ★ {t("announcement.freeShipping")} ★ {t("announcement.useCode")} ★
        </div>
      </div>
      
      {/* Main header panel */}
      <div className="panel-raised" style={{ background: 'hsl(330 80% 65%)' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Mobile menu button */}
            <button 
              className="lg:hidden btn-retro p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <RocketMascot size="sm" />
              <div>
                <h1 className="text-2xl lg:text-3xl font-pixel font-bold tracking-wider text-retro-black">
                  RETROSHIP
                </h1>
                <p className="text-xs hidden sm:block" style={{ color: 'hsl(330 60% 20%)' }}>{t("header.tagline")}</p>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a 
                  key={item.key}
                  href={item.href} 
                  className={`btn-retro px-4 py-2 text-sm font-bold ${item.isSale ? "btn-gold" : ""}`}
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
            
            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Language Selector */}
              <LanguageSelector />
              
              {/* Search */}
              <button 
                className="btn-retro p-2"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search size={18} />
              </button>
              
              {/* Wishlist */}
              <button 
                className="btn-retro p-2 relative"
                onClick={onWishlistClick}
              >
                <Heart size={18} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-retro-gold text-retro-black text-xs font-bold flex items-center justify-center border-2 border-retro-darker">
                    {wishlistCount}
                  </span>
                )}
              </button>
              
              {/* Cart */}
              <button 
                className="btn-retro p-2 relative"
                onClick={onCartClick}
              >
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-retro-gold text-retro-black text-xs font-bold flex items-center justify-center border-2 border-retro-darker">
                    {cartCount}
                  </span>
                )}
              </button>
              
              {/* Login/User button */}
              {isPending ? (
                <div className="hidden lg:flex btn-retro px-4 py-2 items-center gap-2 text-sm">
                  <div className="w-4 h-4 border-2 border-retro-dark border-t-transparent rounded-full animate-spin" />
                </div>
              ) : user ? (
                <div className="hidden lg:flex items-center gap-2">
                  <div className="relative group">
                    <button className="btn-retro px-3 py-2 flex items-center gap-2 text-sm">
                      {user.google_user_data.picture ? (
                        <img 
                          src={user.google_user_data.picture} 
                          alt="" 
                          className="w-5 h-5 rounded-full border border-retro-darker"
                        />
                      ) : (
                        <User size={16} />
                      )}
                      <span className="max-w-[100px] truncate font-bold">
                        {user.google_user_data.given_name || user.email.split("@")[0]}
                      </span>
                    </button>
                    
                    {/* User dropdown */}
                    <div className="absolute right-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                      <div className="panel-raised p-1 min-w-[150px]">
                        <div className="panel-inset p-1">
                          <div className="px-2 py-1 text-xs text-retro-dark border-b border-retro-darker mb-1 truncate">
                            {user.email}
                          </div>
                          <button
                            onClick={logout}
                            className="w-full text-left px-2 py-1.5 text-sm font-mono flex items-center gap-2 hover:bg-retro-light"
                          >
                            <LogOut size={14} />
                            {t("header.logout")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  className="hidden lg:flex btn-gold px-4 py-2 items-center gap-2 text-sm"
                  onClick={() => navigate("/login")}
                >
                  <User size={16} />
                  {t("header.login")}
                </button>
              )}
            </div>
          </div>
          
          {/* Search bar - expandable */}
          {searchOpen && (
            <div className="pb-4">
              <div className="panel-inset p-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={t("header.search")}
                    className="flex-1 px-3 py-2 bg-white border-2 border-retro-darker focus:outline-none font-mono text-sm"
                    autoFocus
                  />
                  <button className="btn-gold px-4 py-2 font-bold text-sm">
                    {t("header.search").split(" ")[0].toUpperCase()}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden panel-raised border-t-2 border-retro-darker">
          <nav className="container mx-auto px-4 py-2 flex flex-col gap-1">
            {navItems.map((item) => (
              <a 
                key={item.key}
                href={item.href} 
                className={`btn-retro py-3 px-4 font-bold text-sm ${item.isSale ? "btn-gold" : ""}`}
              >
                {t(item.key)}
              </a>
            ))}
            <hr className="my-2 border-retro-darker" />
            {user ? (
              <>
                <div className="py-2 px-4 text-sm text-retro-dark flex items-center gap-2">
                  {user.google_user_data.picture && (
                    <img 
                      src={user.google_user_data.picture} 
                      alt="" 
                      className="w-6 h-6 rounded-full border border-retro-darker"
                    />
                  )}
                  <span className="truncate">{user.email}</span>
                </div>
                <button 
                  className="btn-retro py-3 px-4 font-bold text-sm flex items-center gap-2"
                  onClick={logout}
                >
                  <LogOut size={16} />
                  {t("header.logout")}
                </button>
              </>
            ) : (
              <button 
                className="btn-gold py-3 px-4 font-bold text-sm flex items-center gap-2"
                onClick={() => navigate("/login")}
              >
                <User size={16} />
                {t("header.login")}
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
