import { ArrowRight, Volume2, Star } from "lucide-react";
import { RocketMascot } from "./RocketMascot";
import { useLanguage } from "@/react-app/contexts/LanguageContext";

export function HeroBanner() {
  const { t } = useLanguage();
  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Main hero panel */}
        <div className="panel-raised p-0 overflow-hidden">
          {/* Title bar like Windows 95 */}
          <div className="title-bar">
            <div className="flex items-center gap-2">
              <Volume2 size={14} />
              <span>{t("hero.titleBar")}</span>
            </div>
            <div className="flex gap-1">
              <button className="w-4 h-4 bg-retro-panel border border-retro-darker text-xs leading-none">_</button>
              <button className="w-4 h-4 bg-retro-panel border border-retro-darker text-xs leading-none">□</button>
              <button className="w-4 h-4 bg-retro-panel border border-retro-darker text-xs leading-none">×</button>
            </div>
          </div>
          
          {/* Content area */}
          <div className="p-6 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Text content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 btn-gold px-4 py-2 mb-6">
                  <Star size={16} />
                  <span className="text-sm font-bold">{t("hero.asSeenOnTv")}</span>
                </div>
                
                {/* Main heading */}
                <h1 className="font-pixel text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-retro-black">
                  {t("hero.blastOff")}
                  <br />
                  {t("hero.intoStyle")}
                </h1>
                
                {/* Subtitle in panel */}
                <div className="panel-inset p-4 mb-8">
                  <p className="text-sm lg:text-base text-retro-black">
                    {t("hero.discover")}
                  </p>
                </div>
                
                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button className="btn-gold px-8 py-4 font-bold text-lg flex items-center justify-center gap-2">
                    {t("hero.shopNow")}
                    <ArrowRight size={20} />
                  </button>
                  <button className="btn-retro px-8 py-4 font-bold text-lg">
                    {t("hero.viewLookbook")}
                  </button>
                </div>
                
                {/* Stats */}
                <div className="flex justify-center lg:justify-start gap-6 mt-8">
                  <div className="panel-inset p-3 text-center">
                    <p className="text-2xl lg:text-3xl font-pixel font-bold text-retro-black">500+</p>
                    <p className="text-xs text-retro-dark">{t("hero.products")}</p>
                  </div>
                  <div className="panel-inset p-3 text-center">
                    <p className="text-2xl lg:text-3xl font-pixel font-bold text-retro-black">50K+</p>
                    <p className="text-xs text-retro-dark">{t("hero.customers")}</p>
                  </div>
                  <div className="panel-inset p-3 text-center">
                    <p className="text-2xl lg:text-3xl font-pixel font-bold text-retro-black">4.9★</p>
                    <p className="text-xs text-retro-dark">{t("hero.rating")}</p>
                  </div>
                </div>
              </div>
              
              {/* Hero image area */}
              <div className="relative flex items-center justify-center">
                {/* Product showcase */}
                <div className="panel-inset p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="panel-raised p-1">
                      <img 
                        src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=300&h=300&fit=crop" 
                        alt="RGB Keyboard"
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                    <div className="panel-raised p-1">
                      <img 
                        src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=300&h=300&fit=crop" 
                        alt="Retro Console"
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                    <div className="panel-raised p-1">
                      <img 
                        src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=300&fit=crop" 
                        alt="Comics"
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                    <div className="panel-raised p-1">
                      <img 
                        src="https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=300&h=300&fit=crop" 
                        alt="D&D Dice"
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating rocket mascot */}
                <div className="absolute -top-4 -right-4 lg:-right-6">
                  <RocketMascot size="lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call now banner */}
        <div className="mt-6 panel-raised">
          <div className="title-bar text-center justify-center">
            <span className="animate-blink">📞</span>
            <span className="mx-4">{t("hero.callNow")}</span>
            <span className="animate-blink">📞</span>
          </div>
        </div>
      </div>
    </section>
  );
}
