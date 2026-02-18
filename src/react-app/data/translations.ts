export type Language = "en" | "es" | "fr" | "de" | "ja" | "pt-BR";

export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
  "pt-BR": "Português (Brasil)",
};

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "header.tagline": "Your Geek Culture Destination™",
    "header.search": "Search for products...",
    "header.login": "LOGIN",
    "header.logout": "Logout",
    "header.newArrivals": "New Arrivals",
    "header.women": "Women",
    "header.men": "Men",
    "header.accessories": "Accessories",
    "header.sale": "Sale",
    
    // Announcement
    "announcement.freeShipping": "FREE SHIPPING ON ORDERS OVER $50",
    "announcement.useCode": "USE CODE: ROCKET90",
    "announcement.callNow": "CALL NOW: 1-800-ROCKET",
    
    // Hero
    "hero.title": "BLAST OFF INTO RETRO STYLE!",
    "hero.subtitle": "Authentic 90s fashion delivered to your door in 3-5 business days!",
    "hero.shopNow": "SHOP NOW!",
    "hero.callToOrder": "CALL TO ORDER!",
    "hero.guarantee": "30-DAY MONEY BACK GUARANTEE!",
    
    // Products
    "products.addToCart": "ADD TO CART",
    "products.outOfStock": "OUT OF STOCK",
    "products.new": "NEW!",
    "products.sale": "SALE",
    
    // Categories
    "categories.shopBy": "★ SHOP BY CATEGORY ★",
    
    // Footer
    "footer.copyright": "© 1995-2024 RetroShip Inc. All Rights Reserved.",
    "footer.madeWith": "Made with retro love",
    "footer.quickLinks": "QUICK LINKS",
    "footer.customerService": "CUSTOMER SERVICE",
    "footer.connect": "CONNECT WITH US",
    "footer.shipping": "Shipping Info",
    "footer.returns": "Returns",
    "footer.faq": "FAQ",
    "footer.contact": "Contact Us",
    "footer.email": "Email Us",
    "footer.phone": "Call Us",
    "footer.titleBar": "RetroShip™ - © 2025 All Rights Reserved",
    "footer.brandDescription": "Your destination for gaming gear, collectibles, and geek culture essentials. Level up your life!",
    "footer.shop": "SHOP",
    "footer.newArrivals": "New Arrivals",
    "footer.bestSellers": "Best Sellers",
    "footer.sale": "Sale",
    "footer.collections": "Collections",
    "footer.help": "HELP",
    "footer.faqs": "FAQs",
    "footer.contactUs": "Contact Us",
    "footer.joinCrew": "JOIN OUR CREW",
    "footer.yourEmail": "Your email",
    "footer.go": "GO!",
    "footer.madeIn90s": "Made with ❤️ in the 90s • Powered by RocketTech™",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.cookies": "Cookies",
    
    // Home page
    "home.featuredProducts": "Featured Products - Hot Items!",
    "home.trendingNow": "TRENDING NOW",
    "home.orderNow": "Order now while supplies last!",
    "home.viewAllProducts": "VIEW ALL PRODUCTS →",
    "home.specialOffer": "★ SPECIAL OFFER ★",
    "home.readyToLaunch": "READY TO LAUNCH YOUR LOOK?",
    "home.joinThousands": "Join thousands of style explorers who've already discovered their perfect outfit. Sign up today and get 20% off your first order!",
    "home.createAccount": "CREATE ACCOUNT →",
    
    // Hero banner
    "hero.titleBar": "RetroShip - Geek Culture HQ!",
    "hero.asSeenOnTv": "AS SEEN ON TV!",
    "hero.blastOff": "LEVEL UP",
    "hero.intoStyle": "YOUR LIFE!",
    "hero.discover": "Discover our legendary collection of gaming gear, collectibles, retro tech, and geek essentials. For fans, by fans. ORDER NOW!",
    "hero.viewLookbook": "VIEW CATALOG",
    "hero.products": "Products",
    "hero.customers": "Customers",
    "hero.rating": "Rating",
    "hero.callNow": "CALL NOW: 1-800-ROCKET • OPERATORS ARE STANDING BY!",
    
    // Product card
    "product.addToCart": "ADD TO CART",
    
    // Categories
    "category.all": "All",
    "category.gaming": "Gaming",
    "category.collectibles": "Collectibles",
    "category.retroTech": "Retro Tech",
    "category.boardGames": "Board Games",
    "category.comics": "Comics",
    "category.decor": "Decor",
    
    // Language
    "language.select": "Language",
  },
  es: {
    // Header
    "header.tagline": "Tu Destino de Cultura Geek™",
    "header.search": "Buscar productos...",
    "header.login": "ENTRAR",
    "header.logout": "Cerrar Sesión",
    "header.newArrivals": "Novedades",
    "header.women": "Mujer",
    "header.men": "Hombre",
    "header.accessories": "Accesorios",
    "header.sale": "Ofertas",
    
    // Announcement
    "announcement.freeShipping": "ENVÍO GRATIS EN PEDIDOS +$50",
    "announcement.useCode": "USA CÓDIGO: ROCKET90",
    "announcement.callNow": "LLAMA: 1-800-ROCKET",
    
    // Hero
    "hero.title": "¡DESPEGA CON ESTILO RETRO!",
    "hero.subtitle": "¡Moda auténtica de los 90 entregada en 3-5 días hábiles!",
    "hero.shopNow": "¡COMPRAR AHORA!",
    "hero.callToOrder": "¡LLAMA PARA PEDIR!",
    "hero.guarantee": "¡GARANTÍA DE 30 DÍAS!",
    
    // Products
    "products.addToCart": "AÑADIR AL CARRITO",
    "products.outOfStock": "AGOTADO",
    "products.new": "¡NUEVO!",
    "products.sale": "OFERTA",
    
    // Categories
    "categories.shopBy": "★ COMPRAR POR CATEGORÍA ★",
    
    // Footer
    "footer.copyright": "© 1995-2024 RetroShip Inc. Todos los derechos reservados.",
    "footer.madeWith": "Hecho con amor retro",
    "footer.quickLinks": "ENLACES RÁPIDOS",
    "footer.customerService": "SERVICIO AL CLIENTE",
    "footer.connect": "CONÉCTATE CON NOSOTROS",
    "footer.shipping": "Info de Envío",
    "footer.returns": "Devoluciones",
    "footer.faq": "Preguntas Frecuentes",
    "footer.contact": "Contáctanos",
    "footer.email": "Envíanos Email",
    "footer.phone": "Llámanos",
    "footer.titleBar": "RetroShip™ - © 2025 Todos los Derechos Reservados",
    "footer.brandDescription": "Tu destino para gaming, coleccionables y cultura geek. ¡Sube de nivel!",
    "footer.shop": "TIENDA",
    "footer.newArrivals": "Novedades",
    "footer.bestSellers": "Más Vendidos",
    "footer.sale": "Ofertas",
    "footer.collections": "Colecciones",
    "footer.help": "AYUDA",
    "footer.faqs": "Preguntas Frecuentes",
    "footer.contactUs": "Contáctanos",
    "footer.joinCrew": "ÚNETE A LA TRIPULACIÓN",
    "footer.yourEmail": "Tu email",
    "footer.go": "¡IR!",
    "footer.madeIn90s": "Hecho con ❤️ en los 90s • Impulsado por RocketTech™",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.cookies": "Cookies",
    
    // Home page
    "home.featuredProducts": "Productos Destacados - ¡Artículos Populares!",
    "home.trendingNow": "TENDENCIAS",
    "home.orderNow": "¡Pide ahora mientras haya existencias!",
    "home.viewAllProducts": "VER TODOS LOS PRODUCTOS →",
    "home.specialOffer": "★ OFERTA ESPECIAL ★",
    "home.readyToLaunch": "¿LISTO PARA LANZAR TU LOOK?",
    "home.joinThousands": "Únete a miles de exploradores de estilo que ya han descubierto su outfit perfecto. ¡Regístrate hoy y obtén 20% de descuento en tu primer pedido!",
    "home.createAccount": "CREAR CUENTA →",
    
    // Hero banner
    "hero.titleBar": "RetroShip - ¡HQ de Cultura Geek!",
    "hero.asSeenOnTv": "¡VISTO EN TV!",
    "hero.blastOff": "¡SUBE DE",
    "hero.intoStyle": "NIVEL!",
    "hero.discover": "Descubre nuestra colección legendaria de gaming, coleccionables, tech retro y esenciales geek. Para fans, por fans. ¡PIDE AHORA!",
    "hero.viewLookbook": "VER CATÁLOGO",
    "hero.products": "Productos",
    "hero.customers": "Clientes",
    "hero.rating": "Calificación",
    "hero.callNow": "LLAMA AHORA: 1-800-ROCKET • ¡OPERADORES ESPERANDO!",
    
    // Product card
    "product.addToCart": "AÑADIR AL CARRITO",
    
    // Categories
    "category.all": "Todo",
    "category.gaming": "Gaming",
    "category.collectibles": "Coleccionables",
    "category.retroTech": "Tech Retro",
    "category.boardGames": "Juegos de Mesa",
    "category.comics": "Cómics",
    "category.decor": "Decoración",
    
    // Language
    "language.select": "Idioma",
  },
  fr: {
    // Header
    "header.tagline": "Votre Destination Culture Geek™",
    "header.search": "Rechercher des produits...",
    "header.login": "CONNEXION",
    "header.logout": "Déconnexion",
    "header.newArrivals": "Nouveautés",
    "header.women": "Femme",
    "header.men": "Homme",
    "header.accessories": "Accessoires",
    "header.sale": "Soldes",
    
    // Announcement
    "announcement.freeShipping": "LIVRAISON GRATUITE DÈS 50€",
    "announcement.useCode": "CODE: ROCKET90",
    "announcement.callNow": "APPELEZ: 1-800-ROCKET",
    
    // Hero
    "hero.title": "DÉCOLLAGE VERS LE STYLE RÉTRO!",
    "hero.subtitle": "Mode authentique des années 90 livrée en 3-5 jours ouvrés!",
    "hero.shopNow": "ACHETER!",
    "hero.callToOrder": "APPELER POUR COMMANDER!",
    "hero.guarantee": "GARANTIE 30 JOURS!",
    
    // Products
    "products.addToCart": "AJOUTER AU PANIER",
    "products.outOfStock": "RUPTURE DE STOCK",
    "products.new": "NOUVEAU!",
    "products.sale": "SOLDE",
    
    // Categories
    "categories.shopBy": "★ ACHETER PAR CATÉGORIE ★",
    
    // Footer
    "footer.copyright": "© 1995-2024 RetroShip Inc. Tous droits réservés.",
    "footer.madeWith": "Fait avec amour rétro",
    "footer.quickLinks": "LIENS RAPIDES",
    "footer.customerService": "SERVICE CLIENT",
    "footer.connect": "CONNECTEZ-VOUS",
    "footer.shipping": "Info Livraison",
    "footer.returns": "Retours",
    "footer.faq": "FAQ",
    "footer.contact": "Contactez-nous",
    "footer.email": "Email",
    "footer.phone": "Téléphone",
    "footer.titleBar": "RetroShip™ - © 2025 Tous Droits Réservés",
    "footer.brandDescription": "Votre destination pour le gaming, les objets de collection et la culture geek. Passez au niveau supérieur!",
    "footer.shop": "BOUTIQUE",
    "footer.newArrivals": "Nouveautés",
    "footer.bestSellers": "Meilleures Ventes",
    "footer.sale": "Soldes",
    "footer.collections": "Collections",
    "footer.help": "AIDE",
    "footer.faqs": "FAQ",
    "footer.contactUs": "Contactez-nous",
    "footer.joinCrew": "REJOIGNEZ L'ÉQUIPAGE",
    "footer.yourEmail": "Votre email",
    "footer.go": "GO!",
    "footer.madeIn90s": "Fait avec ❤️ dans les années 90 • Propulsé par RocketTech™",
    "footer.privacy": "Confidentialité",
    "footer.terms": "Conditions",
    "footer.cookies": "Cookies",
    
    // Home page
    "home.featuredProducts": "Produits Vedettes - Articles Populaires!",
    "home.trendingNow": "TENDANCES",
    "home.orderNow": "Commandez maintenant tant qu'il en reste!",
    "home.viewAllProducts": "VOIR TOUS LES PRODUITS →",
    "home.specialOffer": "★ OFFRE SPÉCIALE ★",
    "home.readyToLaunch": "PRÊT À LANCER VOTRE LOOK?",
    "home.joinThousands": "Rejoignez des milliers d'explorateurs de style qui ont déjà trouvé leur tenue parfaite. Inscrivez-vous aujourd'hui et obtenez 20% de réduction sur votre première commande!",
    "home.createAccount": "CRÉER UN COMPTE →",
    
    // Hero banner
    "hero.titleBar": "RetroShip - QG Culture Geek!",
    "hero.asSeenOnTv": "VU À LA TÉLÉ!",
    "hero.blastOff": "PASSEZ AU",
    "hero.intoStyle": "NIVEAU SUPÉRIEUR!",
    "hero.discover": "Découvrez notre collection légendaire de gaming, objets de collection, tech rétro et essentiels geek. Par des fans, pour des fans. COMMANDEZ!",
    "hero.viewLookbook": "VOIR CATALOGUE",
    "hero.products": "Produits",
    "hero.customers": "Clients",
    "hero.rating": "Note",
    "hero.callNow": "APPELEZ: 1-800-ROCKET • NOS OPÉRATEURS VOUS ATTENDENT!",
    
    // Product card
    "product.addToCart": "AJOUTER AU PANIER",
    
    // Categories
    "category.all": "Tout",
    "category.gaming": "Gaming",
    "category.collectibles": "Objets de Collection",
    "category.retroTech": "Tech Rétro",
    "category.boardGames": "Jeux de Société",
    "category.comics": "BD",
    "category.decor": "Déco",
    
    // Language
    "language.select": "Langue",
  },
  de: {
    // Header
    "header.tagline": "Ihr Geek-Kultur-Ziel™",
    "header.search": "Produkte suchen...",
    "header.login": "ANMELDEN",
    "header.logout": "Abmelden",
    "header.newArrivals": "Neuheiten",
    "header.women": "Damen",
    "header.men": "Herren",
    "header.accessories": "Accessoires",
    "header.sale": "Sale",
    
    // Announcement
    "announcement.freeShipping": "GRATIS VERSAND AB 50€",
    "announcement.useCode": "CODE: ROCKET90",
    "announcement.callNow": "ANRUFEN: 1-800-ROCKET",
    
    // Hero
    "hero.title": "STARTE IN DEN RETRO-STIL!",
    "hero.subtitle": "Authentische 90er Mode in 3-5 Werktagen geliefert!",
    "hero.shopNow": "JETZT KAUFEN!",
    "hero.callToOrder": "ANRUFEN ZUM BESTELLEN!",
    "hero.guarantee": "30-TAGE-GARANTIE!",
    
    // Products
    "products.addToCart": "IN DEN WARENKORB",
    "products.outOfStock": "AUSVERKAUFT",
    "products.new": "NEU!",
    "products.sale": "SALE",
    
    // Categories
    "categories.shopBy": "★ NACH KATEGORIE KAUFEN ★",
    
    // Footer
    "footer.copyright": "© 1995-2024 RetroShip Inc. Alle Rechte vorbehalten.",
    "footer.madeWith": "Mit Retro-Liebe gemacht",
    "footer.quickLinks": "SCHNELLLINKS",
    "footer.customerService": "KUNDENSERVICE",
    "footer.connect": "VERBINDEN SIE SICH",
    "footer.shipping": "Versandinfo",
    "footer.returns": "Rückgabe",
    "footer.faq": "FAQ",
    "footer.contact": "Kontakt",
    "footer.email": "E-Mail",
    "footer.phone": "Telefon",
    "footer.titleBar": "RetroShip™ - © 2025 Alle Rechte Vorbehalten",
    "footer.brandDescription": "Ihr Ziel für Gaming-Ausrüstung, Sammlerstücke und Geek-Kultur. Level up!",
    "footer.shop": "SHOP",
    "footer.newArrivals": "Neuheiten",
    "footer.bestSellers": "Bestseller",
    "footer.sale": "Sale",
    "footer.collections": "Kollektionen",
    "footer.help": "HILFE",
    "footer.faqs": "FAQ",
    "footer.contactUs": "Kontakt",
    "footer.joinCrew": "WERDE TEIL DER CREW",
    "footer.yourEmail": "Ihre E-Mail",
    "footer.go": "LOS!",
    "footer.madeIn90s": "Mit ❤️ in den 90ern gemacht • Powered by RocketTech™",
    "footer.privacy": "Datenschutz",
    "footer.terms": "AGB",
    "footer.cookies": "Cookies",
    
    // Home page
    "home.featuredProducts": "Ausgewählte Produkte - Heiße Artikel!",
    "home.trendingNow": "IM TREND",
    "home.orderNow": "Jetzt bestellen solange der Vorrat reicht!",
    "home.viewAllProducts": "ALLE PRODUKTE ANZEIGEN →",
    "home.specialOffer": "★ SONDERANGEBOT ★",
    "home.readyToLaunch": "BEREIT IHREN LOOK ZU STARTEN?",
    "home.joinThousands": "Schließen Sie sich Tausenden von Stil-Entdeckern an, die bereits ihr perfektes Outfit gefunden haben. Melden Sie sich heute an und erhalten Sie 20% Rabatt auf Ihre erste Bestellung!",
    "home.createAccount": "KONTO ERSTELLEN →",
    
    // Hero banner
    "hero.titleBar": "RetroShip - Geek-Kultur HQ!",
    "hero.asSeenOnTv": "BEKANNT AUS DEM TV!",
    "hero.blastOff": "LEVEL",
    "hero.intoStyle": "UP!",
    "hero.discover": "Entdecken Sie unsere legendäre Kollektion von Gaming-Ausrüstung, Sammlerstücken, Retro-Tech und Geek-Essentials. Von Fans, für Fans. JETZT BESTELLEN!",
    "hero.viewLookbook": "KATALOG ANSEHEN",
    "hero.products": "Produkte",
    "hero.customers": "Kunden",
    "hero.rating": "Bewertung",
    "hero.callNow": "JETZT ANRUFEN: 1-800-ROCKET • UNSERE MITARBEITER WARTEN!",
    
    // Product card
    "product.addToCart": "IN DEN WARENKORB",
    
    // Categories
    "category.all": "Alle",
    "category.gaming": "Gaming",
    "category.collectibles": "Sammlerstücke",
    "category.retroTech": "Retro-Tech",
    "category.boardGames": "Brettspiele",
    "category.comics": "Comics",
    "category.decor": "Deko",
    
    // Language
    "language.select": "Sprache",
  },
  ja: {
    // Header
    "header.tagline": "ギーク文化の目的地™",
    "header.search": "商品を検索...",
    "header.login": "ログイン",
    "header.logout": "ログアウト",
    "header.newArrivals": "新着",
    "header.women": "レディース",
    "header.men": "メンズ",
    "header.accessories": "アクセサリー",
    "header.sale": "セール",
    
    // Announcement
    "announcement.freeShipping": "$50以上で送料無料",
    "announcement.useCode": "コード: ROCKET90",
    "announcement.callNow": "電話: 1-800-ROCKET",
    
    // Hero
    "hero.title": "レトロスタイルへ発進！",
    "hero.subtitle": "本格90年代ファッションを3-5営業日でお届け！",
    "hero.shopNow": "今すぐ購入！",
    "hero.callToOrder": "電話で注文！",
    "hero.guarantee": "30日間返金保証！",
    
    // Products
    "products.addToCart": "カートに追加",
    "products.outOfStock": "在庫切れ",
    "products.new": "新着！",
    "products.sale": "セール",
    
    // Categories
    "categories.shopBy": "★ カテゴリで探す ★",
    
    // Footer
    "footer.copyright": "© 1995-2024 RetroShip Inc. All Rights Reserved.",
    "footer.madeWith": "レトロ愛を込めて",
    "footer.quickLinks": "クイックリンク",
    "footer.customerService": "カスタマーサービス",
    "footer.connect": "つながる",
    "footer.shipping": "配送情報",
    "footer.returns": "返品",
    "footer.faq": "よくある質問",
    "footer.contact": "お問い合わせ",
    "footer.email": "メール",
    "footer.phone": "電話",
    "footer.titleBar": "RetroShip™ - © 2025 全著作権所有",
    "footer.brandDescription": "ゲーミングギア、コレクターズアイテム、ギーク文化の目的地。レベルアップしよう！",
    "footer.shop": "ショップ",
    "footer.newArrivals": "新着",
    "footer.bestSellers": "ベストセラー",
    "footer.sale": "セール",
    "footer.collections": "コレクション",
    "footer.help": "ヘルプ",
    "footer.faqs": "よくある質問",
    "footer.contactUs": "お問い合わせ",
    "footer.joinCrew": "クルーに参加",
    "footer.yourEmail": "メールアドレス",
    "footer.go": "GO!",
    "footer.madeIn90s": "90年代に❤️を込めて作成 • RocketTech™提供",
    "footer.privacy": "プライバシー",
    "footer.terms": "利用規約",
    "footer.cookies": "Cookie",
    
    // Home page
    "home.featuredProducts": "注目商品 - 人気アイテム！",
    "home.trendingNow": "トレンド",
    "home.orderNow": "在庫がある今すぐ注文！",
    "home.viewAllProducts": "全商品を見る →",
    "home.specialOffer": "★ 特別オファー ★",
    "home.readyToLaunch": "あなたのルックを発進させる準備はできましたか？",
    "home.joinThousands": "すでに完璧な服装を見つけた何千人ものスタイル探検家に参加しましょう。今日登録して初回注文20%オフをゲット！",
    "home.createAccount": "アカウント作成 →",
    
    // Hero banner
    "hero.titleBar": "RetroShip - ギーク文化HQ！",
    "hero.asSeenOnTv": "テレビで話題！",
    "hero.blastOff": "レベル",
    "hero.intoStyle": "アップ！",
    "hero.discover": "ゲーミングギア、コレクターズアイテム、レトロテック、ギーク必需品の伝説的コレクションを発見。ファンによる、ファンのための商品。今すぐ注文！",
    "hero.viewLookbook": "カタログを見る",
    "hero.products": "商品",
    "hero.customers": "顧客",
    "hero.rating": "評価",
    "hero.callNow": "今すぐ電話: 1-800-ROCKET • オペレーターがお待ちしています！",
    
    // Product card
    "product.addToCart": "カートに追加",
    
    // Categories
    "category.all": "すべて",
    "category.gaming": "ゲーミング",
    "category.collectibles": "コレクション",
    "category.retroTech": "レトロテック",
    "category.boardGames": "ボードゲーム",
    "category.comics": "コミック",
    "category.decor": "インテリア",
    
    // Language
    "language.select": "言語",
  },
  "pt-BR": {
    // Header
    "header.tagline": "Seu Destino de Cultura Geek™",
    "header.search": "Buscar produtos...",
    "header.login": "ENTRAR",
    "header.logout": "Sair",
    "header.newArrivals": "Novidades",
    "header.women": "Feminino",
    "header.men": "Masculino",
    "header.accessories": "Acessórios",
    "header.sale": "Promoção",
    
    // Announcement
    "announcement.freeShipping": "FRETE GRÁTIS EM COMPRAS ACIMA DE R$200",
    "announcement.useCode": "USE O CÓDIGO: ROCKET90",
    "announcement.callNow": "LIGUE AGORA: 0800-ROCKET",
    
    // Hero
    "hero.title": "DECOLE NO ESTILO RETRÔ!",
    "hero.subtitle": "Moda autêntica dos anos 90 entregue em 3-5 dias úteis!",
    "hero.shopNow": "COMPRAR AGORA!",
    "hero.callToOrder": "LIGUE PARA PEDIR!",
    "hero.guarantee": "GARANTIA DE 30 DIAS!",
    
    // Products
    "products.addToCart": "ADICIONAR AO CARRINHO",
    "products.outOfStock": "ESGOTADO",
    "products.new": "NOVO!",
    "products.sale": "PROMOÇÃO",
    
    // Categories
    "categories.shopBy": "★ COMPRE POR CATEGORIA ★",
    
    // Footer
    "footer.copyright": "© 1995-2024 RetroShip Inc. Todos os direitos reservados.",
    "footer.madeWith": "Feito com amor retrô",
    "footer.quickLinks": "LINKS RÁPIDOS",
    "footer.customerService": "ATENDIMENTO AO CLIENTE",
    "footer.connect": "CONECTE-SE CONOSCO",
    "footer.shipping": "Info de Frete",
    "footer.returns": "Devoluções",
    "footer.faq": "Perguntas Frequentes",
    "footer.contact": "Fale Conosco",
    "footer.email": "E-mail",
    "footer.phone": "Telefone",
    "footer.titleBar": "RetroShip™ - © 2025 Todos os Direitos Reservados",
    "footer.brandDescription": "Seu destino para equipamentos de gaming, colecionáveis e cultura geek. Suba de nível!",
    "footer.shop": "LOJA",
    "footer.newArrivals": "Novidades",
    "footer.bestSellers": "Mais Vendidos",
    "footer.sale": "Promoção",
    "footer.collections": "Coleções",
    "footer.help": "AJUDA",
    "footer.faqs": "Perguntas Frequentes",
    "footer.contactUs": "Fale Conosco",
    "footer.joinCrew": "JUNTE-SE À TRIPULAÇÃO",
    "footer.yourEmail": "Seu e-mail",
    "footer.go": "IR!",
    "footer.madeIn90s": "Feito com ❤️ nos anos 90 • Powered by RocketTech™",
    "footer.privacy": "Privacidade",
    "footer.terms": "Termos",
    "footer.cookies": "Cookies",
    
    // Home page
    "home.featuredProducts": "Produtos em Destaque - Itens Populares!",
    "home.trendingNow": "EM ALTA",
    "home.orderNow": "Peça agora enquanto durar o estoque!",
    "home.viewAllProducts": "VER TODOS OS PRODUTOS →",
    "home.specialOffer": "★ OFERTA ESPECIAL ★",
    "home.readyToLaunch": "PRONTO PARA LANÇAR SEU LOOK?",
    "home.joinThousands": "Junte-se a milhares de exploradores de estilo que já descobriram seu look perfeito. Cadastre-se hoje e ganhe 20% de desconto no primeiro pedido!",
    "home.createAccount": "CRIAR CONTA →",
    
    // Hero banner
    "hero.titleBar": "RetroShip - QG da Cultura Geek!",
    "hero.asSeenOnTv": "VISTO NA TV!",
    "hero.blastOff": "SUBA DE",
    "hero.intoStyle": "NÍVEL!",
    "hero.discover": "Descubra nossa coleção lendária de equipamentos de gaming, colecionáveis, tech retrô e essenciais geek. De fãs, para fãs. PEÇA AGORA!",
    "hero.viewLookbook": "VER CATÁLOGO",
    "hero.products": "Produtos",
    "hero.customers": "Clientes",
    "hero.rating": "Avaliação",
    "hero.callNow": "LIGUE AGORA: 0800-ROCKET • OPERADORES AGUARDANDO!",
    
    // Product card
    "product.addToCart": "ADICIONAR AO CARRINHO",
    
    // Categories
    "category.all": "Todos",
    "category.gaming": "Gaming",
    "category.collectibles": "Colecionáveis",
    "category.retroTech": "Tech Retrô",
    "category.boardGames": "Jogos de Tabuleiro",
    "category.comics": "Quadrinhos",
    "category.decor": "Decoração",
    
    // Language
    "language.select": "Idioma",
  },
};
