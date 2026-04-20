/* ============================================
   NESCOLA – Main JavaScript
   ============================================ */

const I18N = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.ingredients': 'Ingredients',
    'nav.sustainability': 'Sustainability',
    'nav.contact': 'Contact Us',
    'nav.lang.en': 'EN',
    'nav.lang.ru': 'RU',
    'nav.lang.tk': 'TK',
    'loader.subtitle': 'Private ingredient house',
    'loader.metrics': 'Preparing experience',
    'footer.company': 'Company',
    'footer.ingredients': 'Ingredients',
    'footer.contact': 'Contact',
    'footer.link.about': 'About Us',
    'footer.link.sustain': 'Sustainability',
    'footer.link.careers': 'Careers',
    'footer.link.press': 'Press',
    'footer.link.investors': 'Investors',
    'footer.link.botanical': 'Botanical Extracts',
    'footer.link.flavor': 'Flavor Systems',
    'footer.link.functional': 'Functional Compounds',
    'footer.link.minerals': 'Mineral Blends',
    'footer.link.custom': 'Custom Solutions',
    'footer.link.touch': 'Get in Touch',
    'footer.link.sample': 'Request Sample',
    'footer.link.dist': 'Distributor Login',
    'footer.link.support': 'Technical Support',
    'footer.link.docs': 'Quality Documents',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookie Settings',
    'footer.copy': '© 2026 NesCola Beverage Ingredients. All rights reserved.',
    'home.hero.eyebrow': "Nature's Finest Ingredients",
    'home.hero.title_html': 'Crafting the<br /><em>Essence</em> of<br />Every Beverage',
    'home.hero.sub':
      'From botanical extracts to precision-engineered flavor compounds, NesCola supplies world-class beverage makers with the ingredients that define extraordinary taste.',
    'home.hero.cta.primary': 'Explore Ingredients',
    'home.hero.cta.secondary': 'Our Story',
    'home.hero.scroll': 'Scroll',
    'home.intro.label': 'Who We Are',
    'home.intro.title_html': 'Two Decades of <em>Botanical</em> Excellence',
    'home.intro.p1':
      'NesCola has been at the forefront of beverage ingredient innovation since 2004. We partner with distilleries, craft breweries, soft drink producers, and functional beverage brands to deliver ingredients that elevate every sip.',
    'home.intro.p2':
      'Our research and development team blends traditional botanical knowledge with cutting-edge extraction science, sourcing from over 40 countries to bring you unparalleled purity and complexity.',
    'home.intro.link': 'Discover Our Heritage',
    'home.stats.countries': 'Countries Sourced',
    'home.stats.ingredients': 'Active Ingredients',
    'home.stats.partners': 'Brand Partners',
    'home.stats.years': 'Expertise',
    'home.products.label': 'Our Portfolio',
    'home.products.title_html': 'Ingredient <em>Categories</em>',
    'home.products.link': 'Full Catalogue',
    'home.feature.label': 'Our Promise',
    'home.feature.title_html': 'Where <em>Science</em><br />Meets Nature',
    'home.feature.p':
      'Every ingredient we develop undergoes rigorous sensory evaluation, stability testing, and regulatory compliance review — so our partners can innovate with confidence.',
    'home.feature.cta': 'Request Samples',
    'home.sustain.label': 'Responsibility',
    'home.sustain.title_html': 'Sustainable by <em>Design</em>',
    'home.sustain.p1.title': 'Ethical Sourcing',
    'home.sustain.p1':
      'Direct relationships with 180+ certified farms across 40 nations, ensuring fair trade and biodiversity protection.',
    'home.sustain.p2.title': 'Carbon-Neutral Processing',
    'home.sustain.p2':
      'Our extraction facilities run on 100% renewable energy, targeting net-zero emissions by 2030.',
    'home.sustain.p3.title': 'Zero-Waste Extraction',
    'home.sustain.p3':
      'Proprietary cascade extraction processes repurpose 98% of raw botanical material into value-added byproducts.',
    'home.sustain.link': 'Our Sustainability Report',
    'home.sustain.badge': 'Botanical material<br />repurposed &amp; upcycled',
    'home.sustain.tag': 'Target 2030',
    'home.news.label': 'Latest News',
    'home.news.title_html': 'Insights &amp; <em>Innovations</em>',
    'home.news.all': 'View All',
    'home.partners': 'Trusted by leading beverage brands worldwide',
    'home.cta.label': 'Get Started',
    'home.cta.title_html': 'Ready to <em>Elevate</em><br />Your Beverage?',
    'home.cta.p':
      'Our ingredient specialists are ready to help you create the flavors your customers will never forget. Request a consultation or sample kit today.',
    'home.cta.primary': 'Request a Sample',
    'home.cta.secondary': 'Browse Ingredients',
    'home.footer.tagline':
      "Crafting premium beverage ingredients with nature's finest botanicals since 2004. Where science meets the art of flavor.",
    'home.intro.visual_tag': 'Est. 2004 · Premium Quality',
    'home.common.learn_more': 'Learn More',
    'home.common.read_more': 'Read More',
    'home.card1.tag': 'Category 01',
    'home.card1.desc':
      'Cold-pressed and CO₂-extracted botanicals preserving full-spectrum aromatic profiles and bioactive compounds.',
    'home.card2.tag': 'Category 02',
    'home.card2.title': 'Natural Flavor Systems',
    'home.card2.desc':
      'Complex flavor architectures built from natural sources — fruit, spice, herb, and smoke profiles for every application.',
    'home.card3.tag': 'Category 03',
    'home.card3.desc':
      'Adaptogens, nootropics, vitamins and minerals formulated for beverages — clean-label and efficacious.',
    'home.news1.date': 'March 2026 · Sustainability',
    'home.news1.title': 'NesCola Achieves Carbon-Neutral Certification Across All EU Processing Facilities',
    'home.news1.excerpt':
      'Following a three-year transformation of our energy infrastructure, all six European extraction sites now operate on 100% certified renewable energy, marking a significant milestone in our path to net-zero.',
    'home.news2.date': 'February 2026 · Innovation',
    'home.news2.title': 'Introducing AquaZen™ — Our New Functional Water Enhancement Series',
    'home.news2.excerpt':
      'A breakthrough mineral and adaptogen system designed specifically for premium still and sparkling waters.',
    'home.news3.date': 'January 2026 · Awards',
    'home.news3.title': 'NesCola Wins Best Supplier Award at BevTech Global Summit 2026',
    'home.news3.excerpt':
      'Recognized by 350+ industry peers for outstanding ingredient quality, innovation, and sustainability leadership.',
    'about.hero.breadcrumb_home': 'Home',
    'about.hero.breadcrumb_about': 'About',
    'about.hero.title_html': 'Our <em>Story</em>',
    'about.story.label': 'Since 2004',
    'about.story.title_html': 'A Passion for<br /><em>Pure Ingredients</em>',
    'about.story.p1':
      'NesCola was founded in 2004 by a team of beverage scientists and botanical foragers who believed that the future of great drinks lay in the quality of what goes into them. Starting from a single extraction laboratory in Vienna, we have grown into a global ingredient house trusted by some of the world\'s most celebrated beverage brands.',
    'about.story.p2':
      'Our philosophy is simple: nature provides extraordinary flavors. Our role is to capture, preserve, and deliver those flavors with uncompromising scientific precision and ethical responsibility.',
    'about.story.p3':
      'Today, NesCola operates five world-class processing facilities across Europe and Asia, employs over 800 specialists, and sources from more than 40 countries — always with the same devotion to quality that has defined us from day one.',
    'about.stats.team': 'Team Members',
    'about.stats.facilities': 'Global Facilities',
    'about.stats.countries': 'Source Countries',
    'about.stats.excellence': 'of Excellence',
    'about.values.label': 'Our Values',
    'about.values.title_html': 'What <em>Drives</em> Us',
    'about.values.precision.title': 'Precision',
    'about.values.precision.p':
      'Every batch is measured to the milligram. Our analytical laboratories set the standard for botanical extract quality — consistent batch after batch.',
    'about.values.resp.title': 'Responsibility',
    'about.values.resp.p':
      'We build relationships with farming communities, not just supply chains. Fair wages, biodiversity protection, and regenerative agriculture are non-negotiable.',
    'about.values.innov.title': 'Innovation',
    'about.values.innov.p':
      'Our R&D team files 12+ patents per year. We invest 8% of revenue into fundamental research so our partners stay ahead of tomorrow\'s consumer trends.',
    'about.feature.label': 'Our Mission',
    'about.feature.title_html': "To Inspire the World's <em>Greatest</em> Beverages",
    'about.feature.p':
      'We exist to give beverage makers the finest building blocks nature has to offer — empowering them to create products that delight, nourish, and connect people.',
    'about.feature.cta': 'Partner With Us',
    'about.team.label': 'Leadership',
    'about.team.title_html': 'The <em>Minds</em> Behind NesCola',
    'about.team.role1': 'CEO & Co-Founder',
    'about.team.role2': 'Chief Science Officer',
    'about.team.role3': 'Head of Sourcing',
    'about.team.role4': 'VP Global Partnerships',
    'about.cta.label': 'Join Our Journey',
    'about.cta.title_html': 'Become a <em>NesCola</em><br />Partner',
    'about.cta.p':
      "Whether you're a startup craft brewer or a global beverage giant, we have the ingredients and expertise to elevate your product.",
    'about.cta.primary': 'Get in Touch',
    'about.cta.secondary': 'View Products',
    'about.footer.tagline':
      "Crafting premium beverage ingredients with nature's finest botanicals since 2004.",
    'products.hero.breadcrumb_home': 'Home',
    'products.hero.breadcrumb_products': 'Ingredients',
    'products.hero.title_html': 'Our <em>Ingredient</em><br />Portfolio',
    'products.intro.label': '1,200+ Ingredients',
    'products.intro.title_html': 'Everything You Need to<br /><em>Perfect</em> Your Recipe',
    'products.intro.p':
      "From single-origin botanical extracts to precisely engineered multi-component flavor systems, NesCola's catalogue gives beverage developers an unrivalled toolkit for innovation.",
    'products.turnkey.label': 'Turnkey solutions',
    'products.turnkey.title_html': 'Turnkey <em>ingredients</em> for you',
    'products.turnkey.p':
      'Need speed without sacrificing quality? Our turnkey ingredient systems arrive application-ready — pre-balanced, stability-tested, and supported with documentation so your team can move from concept to pilot faster.',
    'products.turnkey.li1_html':
      '<strong>Ready-to-use blends</strong> for cola bases, citrus stacks, mineral profiles, and antioxidant complexes.',
    'products.turnkey.li2_html':
      '<strong>Stability &amp; regulatory support</strong> with usage rates, allergen statements, and region compliance notes.',
    'products.turnkey.li3_html':
      '<strong>Fast sampling</strong> for R&amp;D plus scalable supply with predictable lead times.',
    'products.turnkey.cta': 'Contact Us',
    'products.filter.all': 'All Categories',
    'products.filter.botanical': 'Botanical Extracts',
    'products.filter.flavor': 'Flavor Systems',
    'products.filter.functional': 'Functional',
    'products.filter.mineral': 'Minerals &amp; Salts',
    'products.filter.antioxidant': 'Antioxidants',
    'products.band.label': 'Custom R&amp;D',
    'products.band.title_html': "Can't Find Exactly<br />What You Need? <em>Let's Build It.</em>",
    'products.band.p':
      'Our R&amp;D team specialises in bespoke ingredient development — minimum quantities from 1kg for prototyping, full scale-up support.',
    'products.band.cta': 'Start a Custom Project',
    'products.request_sample': 'Request Sample',
    'products.card.nc100.title': 'Hop Flower Extract NC-100',
    'products.card.nc100.desc':
      'Full-spectrum liquid hop extract capturing alpha acids, beta acids, and essential oils. Ideal for craft beer, hop water, and botanical spirits.',
    'products.card.gt250.title': 'Green Tea Concentrate GT-250',
    'products.card.gt250.desc':
      'High-catechin green tea concentrate from single-estate Japanese cultivars. Clean, umami-forward profile with natural caffeine.',
    'products.card.hb80.title': 'Hibiscus Flower Extract HB-80',
    'products.card.hb80.desc':
      'Vivid deep-red hibiscus extract with tart, cranberry-like complexity. Clean-label natural colour and flavor in one ingredient.',
    'products.card.cf400.title': 'Citrus Cascade CF-400',
    'products.card.cf400.desc':
      'Six-citrus flavor system — lemon, lime, grapefruit, yuzu, bergamot, and blood orange — engineered for hard seltzers and RTD cocktails.',
    'products.card.bn320.title': 'Berry Noir BN-320',
    'products.card.bn320.desc':
      'Deep, jammy dark berry profile — elderberry, blackcurrant, and açaí — with natural tannin structure for premium soft drinks.',
    'products.card.gs150.title': 'Grain & Smoke GS-150',
    'products.card.gs150.desc':
      'Artisan malt and cold-smoked cereal flavor system for non-alcoholic spirits and craft cola — adds depth and authenticity.',
    'products.card.ab200.title': 'AdaptaBlend AB-200',
    'products.card.ab200.desc':
      'Clinically-dosed adaptogen complex — ashwagandha, rhodiola, and lion\'s mane — optimized for beverage stability and bioavailability.',
    'products.card.ff180.title': 'FocusFlow FF-180',
    'products.card.ff180.desc':
      'Nootropic blend featuring L-theanine, phosphatidylserine, and bacopa extract for cognitive-support beverages — tasteless and soluble.',
    'products.card.azmin.title': 'AquaZen™ Mineral Profile',
    'products.card.azmin.desc':
      'Precision mineral blend — magnesium, potassium, calcium, and trace elements — recreating the taste profile of legendary natural spring waters.',
    'products.card.aox300.title': 'PolyPlex AOX-300',
    'products.card.aox300.desc':
      'Stabilized polyphenol complex from grape seed, green tea, and pomegranate — high ORAC value, beverage-compatible, clean-tasting.',
    'products.card.og120.title': 'OleoGuard OG-120',
    'products.card.og120.desc':
      'Hydroxytyrosol-rich olive polyphenol extract for premium health beverages. Natural shelf-life extension and potent anti-inflammatory properties.',
    'products.card.ec240.title': 'ElectroCore EC-240',
    'products.card.ec240.desc':
      'Sports-optimized electrolyte system with coconut water solids, sea salt, and chelated minerals for superior hydration beverages.',
    'products.footer.tagline':
      "Crafting premium beverage ingredients with nature's finest botanicals since 2004.",
    'sus.hero.breadcrumb_home': 'Home',
    'sus.hero.breadcrumb_sus': 'Sustainability',
    'sus.hero.title_html': 'Our Planet,<br />Our <em>Responsibility</em>',
    'sus.intro.label': 'Our Commitment',
    'sus.intro.title_html': 'Regenerative<br /><em>At Every Step</em>',
    'sus.intro.p1':
      'Sustainability at NesCola is not a campaign — it is the operating model. From the farms where our botanicals are grown to the packaging that leaves our facilities, every decision is made with long-term planetary health in mind.',
    'sus.intro.p2':
      'We publish a full Annual Impact Report and have our carbon accounting independently verified by Bureau Veritas each year.',
    'sus.stats.renew': 'Renewable Energy',
    'sus.stats.waste': 'Waste Repurposed',
    'sus.stats.farms': 'Certified Farm Partners',
    'sus.stats.target': 'Net-Zero Target Year',
    'sus.pillars.label': 'Our Framework',
    'sus.pillars.title_html': 'Three Pillars of <em>Impact</em>',
    'sus.timeline.label': 'Our Journey',
    'sus.timeline.title_html': 'Sustainability <em>Milestones</em>',
    'sus.pillar1.title': 'Land & Biodiversity',
    'sus.pillar1.p':
      'We work exclusively with farmers practicing regenerative agriculture — cover cropping, no-till cultivation, and integrated pest management. We have committed $12M to habitat restoration projects through our Green Root Foundation.',
    'sus.pillar2.title': 'Climate & Energy',
    'sus.pillar2.p':
      'All five NesCola processing facilities transitioned to 100% renewable energy between 2021–2024. We measure and offset Scope 1, 2, and 3 emissions, with a verified 42% reduction since 2019 and a clear roadmap to net-zero by 2030.',
    'sus.pillar3.title': 'People & Communities',
    'sus.pillar3.p':
      'Our Farmer Partnership Programme guarantees above-market prices and provides technical training to 180+ growing cooperatives. In 2025 we funded clean water access for three rural communities in our sourcing regions.',
    'sus.timeline.2019': 'Launched our first sustainability audit and set science-based targets.',
    'sus.timeline.2021': 'First facility goes 100% renewable energy. Green Root Foundation established.',
    'sus.timeline.2023': 'Zero-waste extraction patent awarded. 150 farms certified regenerative.',
    'sus.timeline.2024': 'All five facilities carbon-neutral certified. 42% total Scope 1-3 reduction vs 2019.',
    'sus.timeline.2030': 'Target: Full net-zero value chain. 250+ regenerative farm partners.',
    'sus.cta.label': 'Impact Report',
    'sus.cta.title_html': 'Read Our Full<br /><em>Annual Impact Report</em>',
    'sus.cta.p':
      'Download our comprehensive 2025 sustainability report including third-party carbon verification, biodiversity metrics, and farmer wellbeing data.',
    'sus.cta.primary': 'Download Report',
    'sus.cta.secondary': 'Contact Us',
    'contact.hero.breadcrumb_home': 'Home',
    'contact.hero.breadcrumb_contact': 'Contact',
    'contact.hero.title_html': "Let's <em>Create</em><br />Something Great",
    'contact.info.label': 'Get in Touch',
    'contact.info.title_html': "We'd Love to<br />Hear From You",
    'contact.info.p':
      "Whether you're looking to source a specific ingredient, need a custom development project, or simply want to learn more about what NesCola can offer — our team of specialists is ready to help.",
    'contact.addr.title': 'Headquarters',
    'contact.phone.title': 'Phone',
    'contact.email.title': 'General Enquiries',
    'contact.form.title': 'Send Us a Message',
    'contact.form.fname': 'First Name',
    'contact.form.lname': 'Last Name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Enquiry Type',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending…',
    'contact.form.sent': 'Message sent!',
    'contact.form.ph_fname': 'Marcus',
    'contact.form.ph_lname': 'Hollander',
    'contact.form.ph_company': 'Your Beverage Brand',
    'contact.form.ph_email': 'you@company.com',
    'contact.form.ph_message':
      "Tell us about your project, the ingredients you're looking for, or any questions you have…",
    'contact.form.subject_ph': 'Select an enquiry type',
    'contact.form.opt.sample': 'Request Product Sample',
    'contact.form.opt.rd': 'Custom R&D Project',
    'contact.form.opt.pricing': 'Pricing & MOQ',
    'contact.form.opt.docs': 'Technical Documentation',
    'contact.form.opt.partner': 'Partnership Opportunities',
    'contact.form.opt.general': 'General Enquiry',
    'contact.map.kicker': 'Our Global Footprint',
    'contact.map.title_html': 'Supplying Ingredients to<br /><em style="color:var(--green-light);">60+ Countries</em> Worldwide',
    'contact.faq.label': 'FAQ',
    'contact.faq.title_html': 'Common <em>Questions</em>',
    'contact.faq.q1': 'What is your minimum order quantity?',
    'contact.faq.a1':
      'For standard catalogue ingredients, MOQ starts at 25kg. For custom developments and prototyping, we offer 1–5kg R&D quantities. Contact our sales team for exact pricing.',
    'contact.faq.q2': 'Do you offer sample kits?',
    'contact.faq.a2':
      'Yes — we offer complimentary sample kits (up to 5 ingredients, 100g each) to qualified beverage manufacturers. Use the contact form above or email samples@nescola.com.',
    'contact.faq.q3': 'Are your ingredients Organic/Non-GMO certified?',
    'contact.faq.a3':
      'Over 70% of our portfolio carries EU Organic, USDA Organic, or Non-GMO Project certification. Certificates are available on request through our quality portal.',
    'contact.faq.q4': 'How long does custom ingredient development take?',
    'contact.faq.a4':
      'Typical custom projects take 8–16 weeks from brief to pilot-scale sample approval, depending on complexity. Our R&D team will provide a detailed project timeline at kick-off.',
    'prefooter.kicker': 'NesCola'
  },
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.ingredients': 'Ингредиенты',
    'nav.sustainability': 'Устойчивость',
    'nav.contact': 'Связаться',
    'nav.lang.en': 'EN',
    'nav.lang.ru': 'RU',
    'nav.lang.tk': 'TK',
    'loader.subtitle': 'Частный ингредиентный дом',
    'loader.metrics': 'Подготовка интерфейса',
    'footer.company': 'Компания',
    'footer.ingredients': 'Ингредиенты',
    'footer.contact': 'Контакты',
    'footer.link.about': 'О компании',
    'footer.link.sustain': 'Устойчивость',
    'footer.link.careers': 'Карьера',
    'footer.link.press': 'Пресса',
    'footer.link.investors': 'Инвесторам',
    'footer.link.botanical': 'Ботанические экстракты',
    'footer.link.flavor': 'Вкусовые системы',
    'footer.link.functional': 'Функциональные соединения',
    'footer.link.minerals': 'Минеральные смеси',
    'footer.link.custom': 'Индивидуальные решения',
    'footer.link.touch': 'Связаться',
    'footer.link.sample': 'Запросить образец',
    'footer.link.dist': 'Вход для дистрибьюторов',
    'footer.link.support': 'Техподдержка',
    'footer.link.docs': 'Документы качества',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.cookies': 'Настройки cookie',
    'footer.copy': '© 2026 NesCola Beverage Ingredients. Все права защищены.',
    'home.hero.eyebrow': 'Лучшие ингредиенты природы',
    'home.hero.title_html': 'Создаём<br /><em>суть</em><br />каждого напитка',
    'home.hero.sub':
      'От ботанических экстрактов до точно сбалансированных вкусовых композиций — NesCola поставляет ингредиенты, которые определяют неповторимый вкус.',
    'home.hero.cta.primary': 'Смотреть ингредиенты',
    'home.hero.cta.secondary': 'Наша история',
    'home.hero.scroll': 'Вниз',
    'home.intro.label': 'Кто мы',
    'home.intro.title_html': 'Два десятилетия <em>ботанического</em> совершенства',
    'home.intro.p1':
      'С 2004 года NesCola задаёт стандарты инноваций в ингредиентах для напитков. Мы работаем с дистиллериями, крафтовыми пивоварнями, производителями безалкогольных напитков и функциональных брендов.',
    'home.intro.p2':
      'Наша R&D-команда сочетает традиционные знания о ботанике с современной экстракцией, закупая сырьё более чем из 40 стран ради чистоты и глубины профиля.',
    'home.intro.link': 'Узнать наследие',
    'home.stats.countries': 'Стран поставок',
    'home.stats.ingredients': 'Активных ингредиентов',
    'home.stats.partners': 'Партнёров',
    'home.stats.years': 'Опыта',
    'home.products.label': 'Портфель',
    'home.products.title_html': 'Категории <em>ингредиентов</em>',
    'home.products.link': 'Полный каталог',
    'home.feature.label': 'Наше обещание',
    'home.feature.title_html': 'Где <em>наука</em><br />встречается с природой',
    'home.feature.p':
      'Каждый ингредиент проходит сенсорную оценку, тесты стабильности и проверку соответствия — чтобы партнёры могли уверенно инновировать.',
    'home.feature.cta': 'Запросить образцы',
    'home.sustain.label': 'Ответственность',
    'home.sustain.title_html': 'Устойчивость <em>по замыслу</em>',
    'home.sustain.p1.title': 'Этичные закупки',
    'home.sustain.p1':
      'Прямые отношения с 180+ сертифицированными фермами в 40 странах — справедливая торговля и защита биоразнообразия.',
    'home.sustain.p2.title': 'Углеродно-нейтральная переработка',
    'home.sustain.p2':
      'Наши экстракционные площадки работают на 100% возобновляемой энергии с целью нулевых выбросов к 2030 году.',
    'home.sustain.p3.title': 'Экстракция без отходов',
    'home.sustain.p3':
      'Каскадные процессы перерабатывают до 98% ботанического сырья в ценные побочные продукты.',
    'home.sustain.link': 'Отчёт об устойчивости',
    'home.sustain.badge': 'Ботаническое сырьё<br />переработано и апсайклено',
    'home.sustain.tag': 'Цель 2030',
    'home.news.label': 'Новости',
    'home.news.title_html': 'Инсайты и <em>инновации</em>',
    'home.news.all': 'Смотреть все',
    'home.partners': 'Нам доверяют ведущие бренды напитков по всему миру',
    'home.cta.label': 'Начать',
    'home.cta.title_html': 'Готовы <em>усилить</em><br />ваш напиток?',
    'home.cta.p':
      'Наши специалисты помогут создать вкус, который запомнят. Запросите консультацию или набор образцов.',
    'home.cta.primary': 'Запросить образец',
    'home.cta.secondary': 'Смотреть ингредиенты',
    'home.footer.tagline':
      'Создаём премиальные ингредиенты для напитков с лучшими ботаническими с 2004 года. Где наука встречается с искусством вкуса.',
    'home.intro.visual_tag': 'Осн. 2004 · Премиальное качество',
    'home.common.learn_more': 'Подробнее',
    'home.common.read_more': 'Читать далее',
    'home.card1.tag': 'Категория 01',
    'home.card1.desc':
      'Холодный отжим и CO₂-экстракция ботаники с сохранением полного ароматического спектра и биоактивных соединений.',
    'home.card2.tag': 'Категория 02',
    'home.card2.title': 'Натуральные вкусовые системы',
    'home.card2.desc':
      'Сложные вкусовые архитектуры из натуральных источников — фрукт, специи, травы и дымные профили для любых задач.',
    'home.card3.tag': 'Категория 03',
    'home.card3.desc':
      'Адаптогены, ноотропы, витамины и минералы для напитков — чистая этикетка и доказанная эффективность.',
    'home.news1.date': 'Март 2026 · Устойчивость',
    'home.news1.title': 'NesCola получила сертификацию углеродной нейтральности на всех EU-площадках',
    'home.news1.excerpt':
      'За три года мы обновили энергоинфраструктуру: все шесть европейских экстракционных объектов работают на 100% сертифицированной возобновляемой энергии — важный шаг к net-zero.',
    'home.news2.date': 'Февраль 2026 · Инновации',
    'home.news2.title': 'Представляем AquaZen™ — новую линию для функциональной воды',
    'home.news2.excerpt':
      'Прорывная система минералов и адаптогенов для премиальной негазированной и газированной воды.',
    'home.news3.date': 'Январь 2026 · Награды',
    'home.news3.title': 'NesCola — лучший поставщик на BevTech Global Summit 2026',
    'home.news3.excerpt':
      '350+ отраслевых коллег отметили качество ингредиентов, инновации и лидерство в устойчивом развитии.',
    'about.hero.breadcrumb_home': 'Главная',
    'about.hero.breadcrumb_about': 'О нас',
    'about.hero.title_html': 'Наша <em>история</em>',
    'about.story.label': 'С 2004 года',
    'about.story.title_html': 'Страсть к<br /><em>чистым ингредиентам</em>',
    'about.story.p1':
      'NesCola основана в 2004 году командой beverage-учёных и ботаников, которые верили: будущее великих напитков — в качестве того, что в них входит. От одной экстракционной лаборатории в Вене мы выросли в глобальный ingredient house, которому доверяют известные бренды.',
    'about.story.p2':
      'Наша философия проста: природа даёт необыкайные вкусы. Наша задача — сохранить и доставить их с научной точностью и этической ответственностью.',
    'about.story.p3':
      'Сегодня у NesCola пять современных производственных площадок в Европе и Азии, более 800 специалистов и закупки в 40+ странах — с тем же стремлением к качеству, что было с первого дня.',
    'about.stats.team': 'Сотрудников',
    'about.stats.facilities': 'Глобальных площадок',
    'about.stats.countries': 'Стран поставок',
    'about.stats.excellence': 'совершенства',
    'about.values.label': 'Ценности',
    'about.values.title_html': 'Что нас <em>движет</em>',
    'about.values.precision.title': 'Точность',
    'about.values.precision.p':
      'Каждая партия измеряется до миллиграмма. Наши лаборатории задают стандарт качества ботанических экстрактов — стабильно, от партии к партии.',
    'about.values.resp.title': 'Ответственность',
    'about.values.resp.p':
      'Мы строим отношения с сообществами фермеров, а не только цепочки поставок. Справедливая оплата, биоразнообразие и регенеративное земледелие — без компромиссов.',
    'about.values.innov.title': 'Инновации',
    'about.values.innov.p':
      'Наша R&D команда подаёт 12+ патентов в год. 8% выручки идёт в фундаментальные исследования, чтобы партнёры опережали завтрашние тренды.',
    'about.feature.label': 'Миссия',
    'about.feature.title_html': 'Вдохновлять <em>величайшие</em> напитки мира',
    'about.feature.p':
      'Мы даём производителям лучшие строительные блоки природы — чтобы создавать продукты, которые радуют, питают и объединяют людей.',
    'about.feature.cta': 'Стать партнёром',
    'about.team.label': 'Команда',
    'about.team.title_html': 'Люди <em>за NesCola</em>',
    'about.team.role1': 'CEO и сооснователь',
    'about.team.role2': 'Директор по науке',
    'about.team.role3': 'Руководитель закупок',
    'about.team.role4': 'Вице-президент по глобальным партнёрствам',
    'about.cta.label': 'Присоединяйтесь',
    'about.cta.title_html': 'Станьте партнёром <em>NesCola</em>',
    'about.cta.p':
      'От крафтовой пивоварни до глобального бренда — у нас есть ингредиенты и экспертиза, чтобы усилить продукт.',
    'about.cta.primary': 'Связаться',
    'about.cta.secondary': 'Смотреть продукты',
    'about.footer.tagline':
      'Создаём премиальные ингредиенты для напитков с лучшими ботаническими с 2004 года.',
    'products.hero.breadcrumb_home': 'Главная',
    'products.hero.breadcrumb_products': 'Ингредиенты',
    'products.hero.title_html': 'Портфель<br /><em>ингредиентов</em>',
    'products.intro.label': '1200+ ингредиентов',
    'products.intro.title_html': 'Всё, чтобы<br /><em>идеально</em> собрать рецепт',
    'products.intro.p':
      'От монооригинальных экстрактов до точно спроектированных мультикомпонентных вкусовых систем — каталог NesCola даёт инструменты для инноваций.',
    'products.turnkey.label': 'Под ключ',
    'products.turnkey.title_html': '<em>Ингредиенты</em> под ключ',
    'products.turnkey.p':
      'Нужна скорость без компромиссов по качеству? Наши системы приходят готовыми к применению — сбалансированы, протестированы на стабильность и сопровождаются документацией.',
    'products.turnkey.li1_html':
      '<strong>Готовые смеси</strong> для колы, цитрусовых профилей, минералов и антиоксидантных комплексов.',
    'products.turnkey.li2_html':
      '<strong>Стабильность и регуляторика</strong> — нормы использования, аллергены и заметки по регионам.',
    'products.turnkey.li3_html':
      '<strong>Быстрые образцы</strong> для R&amp;D и масштабируемые поставки с прогнозируемыми сроками.',
    'products.turnkey.cta': 'Связаться',
    'products.filter.all': 'Все категории',
    'products.filter.botanical': 'Ботанические экстракты',
    'products.filter.flavor': 'Вкусовые системы',
    'products.filter.functional': 'Функциональные',
    'products.filter.mineral': 'Минералы и соли',
    'products.filter.antioxidant': 'Антиоксиданты',
    'products.band.label': 'Индивидуальная R&amp;D',
    'products.band.title_html': 'Не нашли<br />точное решение? <em>Создадим вместе.</em>',
    'products.band.p':
      'Наша R&amp;D команда разрабатывает ингредиенты под задачу — от 1 кг для прототипирования до масштабирования.',
    'products.band.cta': 'Запустить проект',
    'products.request_sample': 'Запросить образец',
    'products.card.nc100.title': 'Экстракт цветка хмеля NC-100',
    'products.card.nc100.desc':
      'Жидкий полноспектральный хмелевой экстракт с альфа- и бета-кислотами и эфирными маслами. Для крафтового пива, hop water и ботанических спиртных напитков.',
    'products.card.gt250.title': 'Концентрат зелёного чая GT-250',
    'products.card.gt250.desc':
      'Концентрат с высоким содержанием катехинов из японских сортов одного хозяйства. Чистый умами-профиль с натуральным кофеином.',
    'products.card.hb80.title': 'Экстракт цветка гибискуса HB-80',
    'products.card.hb80.desc':
      'Насыщенный рубиновый экстракт с кисло-клюквенной глубиной. Натуральный цвет и вкус в одном ингредиенте с чистой этикеткой.',
    'products.card.cf400.title': 'Цитрусовый каскад CF-400',
    'products.card.cf400.desc':
      'Шестикомпонентная цитрусовая система — лимон, лайм, грейпфрут, юдзу, бергамот и красный апельсин — для сильтзеров и RTD-коктейлей.',
    'products.card.bn320.title': 'Berry Noir BN-320',
    'products.card.bn320.desc':
      'Густой тёмно-ягодный профиль — бузина, смородина и асаи — с натуральной танинной структурой для премиальных безалкогольных напитков.',
    'products.card.gs150.title': 'Grain & Smoke GS-150',
    'products.card.gs150.desc':
      'Солодово-дымный злаковый профиль для безалкогольных спиртных напитков и крафтовой колы — добавляет глубину и аутентичность.',
    'products.card.ab200.title': 'AdaptaBlend AB-200',
    'products.card.ab200.desc':
      'Адаптогенный комплекс в клинических дозах — ашвагандха, родиола и ежовик гребенчатый — оптимизирован для стабильности напитка и биодоступности.',
    'products.card.ff180.title': 'FocusFlow FF-180',
    'products.card.ff180.desc':
      'Ноотропная смесь с L-теанином, фосфатидилсерином и экстрактом бакопы для когнитивных напитков — безвкусная и растворимая.',
    'products.card.azmin.title': 'Минеральный профиль AquaZen™',
    'products.card.azmin.desc':
      'Точная минеральная смесь — магний, калий, кальций и микроэлементы — воссоздаёт вкус профиля легендарных природных вод.',
    'products.card.aox300.title': 'PolyPlex AOX-300',
    'products.card.aox300.desc':
      'Стабилизированный полифенольный комплекс из виноградной косточки, зелёного чая и граната — высокий ORAC, совместимость с напитками, чистый вкус.',
    'products.card.og120.title': 'OleoGuard OG-120',
    'products.card.og120.desc':
      'Оливковый экстракт, богатый гидрокситирозолом, для премиальных wellness-напитков. Поддерживает срок годности и противовоспалительный эффект.',
    'products.card.ec240.title': 'ElectroCore EC-240',
    'products.card.ec240.desc':
      'Спортивная электролитная система с сухим кокосовым соком, морской солью и хелатными минералами для напитков гидратации.',
    'products.footer.tagline':
      'Создаём премиальные ингредиенты для напитков с лучшими ботаническими с 2004 года.',
    'sus.hero.breadcrumb_home': 'Главная',
    'sus.hero.breadcrumb_sus': 'Устойчивость',
    'sus.hero.title_html': 'Наша планета,<br />наша <em>ответственность</em>',
    'sus.intro.label': 'Наши обязательства',
    'sus.intro.title_html': 'Регенеративность<br /><em>на каждом шаге</em>',
    'sus.intro.p1':
      'Устойчивость в NesCola — это не кампания, а операционная модель: от ферм до упаковки каждое решение учитывает здоровье планеты.',
    'sus.intro.p2':
      'Мы публикуем годовой отчёт об углероде и проходим независимую верификацию Bureau Veritas.',
    'sus.stats.renew': 'Возобновляемая энергия',
    'sus.stats.waste': 'Переработка отходов',
    'sus.stats.farms': 'Сертифицированные фермы',
    'sus.stats.target': 'Год цели net-zero',
    'sus.pillars.label': 'Фреймворк',
    'sus.pillars.title_html': 'Три столпа <em>воздействия</em>',
    'sus.timeline.label': 'Путь',
    'sus.timeline.title_html': 'Вехи <em>устойчивости</em>',
    'sus.pillar1.title': 'Земля и биоразнообразие',
    'sus.pillar1.p':
      'Мы работаем только с фермерами регенеративного земледелия — сидераты, безотвальная обработка и интегрированная защита. Мы выделили $12M на восстановление сред обитания через Green Root Foundation.',
    'sus.pillar2.title': 'Климат и энергия',
    'sus.pillar2.p':
      'Все пять производственных площадок NesCola перешли на 100% ВИЭ в 2021–2024. Мы учитываем и компенсируем выбросы Scope 1–3: подтверждённое снижение на 42% с 2019 года и дорожная карта к net-zero к 2030.',
    'sus.pillar3.title': 'Люди и сообщества',
    'sus.pillar3.p':
      'Программа партнёрства с фермерами гарантирует цены выше рынка и обучение для 180+ кооперативов. В 2025 мы профинансировали доступ к чистой воде для трёх сельских сообществ в регионах закупок.',
    'sus.timeline.2019': 'Первый аудит устойчивости и научно обоснованные цели.',
    'sus.timeline.2021': 'Первая площадка на 100% ВИЭ. Основан Green Root Foundation.',
    'sus.timeline.2023': 'Патент на экстракцию без отходов. 150 ферм в регенеративной сертификации.',
    'sus.timeline.2024': 'Все пять площадок — углеродно-нейтральные. −42% Scope 1–3 к 2019 году.',
    'sus.timeline.2030': 'Цель: net-zero по цепочке создания ценности. 250+ регенеративных партнёров.',
    'sus.cta.label': 'Отчёт',
    'sus.cta.title_html': 'Полный<br /><em>годовой отчёт</em>',
    'sus.cta.p':
      'Скачайте отчёт 2025: верификация углерода, биоразнообразие и благополучие фермеров.',
    'sus.cta.primary': 'Скачать отчёт',
    'sus.cta.secondary': 'Связаться',
    'contact.hero.breadcrumb_home': 'Главная',
    'contact.hero.breadcrumb_contact': 'Контакты',
    'contact.hero.title_html': 'Давайте <em>создадим</em><br />что-то великое',
    'contact.info.label': 'Связаться',
    'contact.info.title_html': 'Будем рады<br />услышать вас',
    'contact.info.p':
      'Нужен ингредиент, кастомная разработка или просто больше информации — наша команда готова помочь.',
    'contact.addr.title': 'Адрес',
    'contact.phone.title': 'Телефон',
    'contact.email.title': 'Общие вопросы',
    'contact.form.title': 'Напишите нам',
    'contact.form.fname': 'Имя',
    'contact.form.lname': 'Фамилия',
    'contact.form.company': 'Компания',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Тема',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить',
    'contact.form.sending': 'Отправка…',
    'contact.form.sent': 'Сообщение отправлено!',
    'contact.form.ph_fname': 'Имя',
    'contact.form.ph_lname': 'Фамилия',
    'contact.form.ph_company': 'Ваш бренд напитков',
    'contact.form.ph_email': 'you@company.com',
    'contact.form.ph_message':
      'Расскажите о проекте, нужных ингредиентах или задайте вопрос…',
    'contact.form.subject_ph': 'Выберите тип запроса',
    'contact.form.opt.sample': 'Запросить образец продукта',
    'contact.form.opt.rd': 'Проект индивидуальной R&D',
    'contact.form.opt.pricing': 'Цены и MOQ',
    'contact.form.opt.docs': 'Техническая документация',
    'contact.form.opt.partner': 'Партнёрские возможности',
    'contact.form.opt.general': 'Общий запрос',
    'contact.map.kicker': 'Глобальное присутствие',
    'contact.map.title_html': 'Поставки ингредиентов<br /><em style="color:var(--green-light);">60+ странам</em> мира',
    'contact.faq.label': 'FAQ',
    'contact.faq.title_html': 'Частые <em>вопросы</em>',
    'contact.faq.q1': 'Каков минимальный заказ?',
    'contact.faq.a1':
      'Для стандартных позиций MOQ от 25 кг. Для кастомных разработок — 1–5 кг для R&amp;D. Уточняйте цены у отдела продаж.',
    'contact.faq.q2': 'Есть ли наборы образцов?',
    'contact.faq.a2':
      'Да — бесплатные наборы (до 5 ингредиентов по 100 г) для квалифицированных производителей. Используйте форму или email samples@nescola.com.',
    'contact.faq.q3': 'Сертификация Organic/Non-GMO?',
    'contact.faq.a3':
      'Более 70% портфеля имеет EU Organic, USDA Organic или Non-GMO. Сертификаты — по запросу через портал качества.',
    'contact.faq.q4': 'Срок кастомной разработки?',
    'contact.faq.a4':
      'Обычно 8–16 недель от брифа до пилотного образца, в зависимости от сложности. На старте дадим дорожную карту.',
    'prefooter.kicker': 'NesCola'
  },
  tk: {
    'nav.home': 'Baş sahypa',
    'nav.about': 'Biz barada',
    'nav.ingredients': 'Ingredientler',
    'nav.sustainability': 'Durnuklylyk',
    'nav.contact': 'Aragatnaşyk',
    'nav.lang.en': 'EN',
    'nav.lang.ru': 'RU',
    'nav.lang.tk': 'TK',
    'loader.subtitle': 'Ýörite ingredient öýi',
    'loader.metrics': 'Interfeýi taýýarlamak',
    'footer.company': 'Kompaniýa',
    'footer.ingredients': 'Ingredientler',
    'footer.contact': 'Aragatnaşyk',
    'footer.link.about': 'Biz barada',
    'footer.link.sustain': 'Durnuklylyk',
    'footer.link.careers': 'Kariýera',
    'footer.link.press': 'Metbugat',
    'footer.link.investors': 'Maýa goýujylar',
    'footer.link.botanical': 'Botaniki ekstraktlar',
    'footer.link.flavor': 'Tagam ulgamlary',
    'footer.link.functional': 'Funksional birleşmeler',
    'footer.link.minerals': 'Mineral garyşyklar',
    'footer.link.custom': 'Ýörite çözgütler',
    'footer.link.touch': 'Aragatnaşyk',
    'footer.link.sample': 'Nusga soramak',
    'footer.link.dist': 'Distribýutor girişi',
    'footer.link.support': 'Tehniki goldaw',
    'footer.link.docs': 'Hiliýet resminamalary',
    'footer.privacy': 'Gizlinlik syýasaty',
    'footer.terms': 'Ulanyş şertleri',
    'footer.cookies': 'Cookie sazlamalary',
    'footer.copy': '© 2026 NesCola Beverage Ingredients. Ähli hukuklar goragly.',
    'home.hero.eyebrow': 'Tebiň iň gowy ingredientleri',
    'home.hero.title_html': 'Her içginligiň<br /><em>özüni</em><br />döredýäris',
    'home.hero.sub':
      'Botaniki ekstraktlardan aňly tagam kompozisiýalaryna çenli — NesCola dünýä derejesinde içginlik döredijilerine ýörite tagam berýär.',
    'home.hero.cta.primary': 'Ingredientlere seretmek',
    'home.hero.cta.secondary': 'Bizin taryhy',
    'home.hero.scroll': 'Aşak',
    'home.intro.label': 'Biz kim',
    'home.intro.title_html': 'Iki onýyllyk <em>botaniki</em> ösenlik',
    'home.intro.p1':
      '2004-nýýyldan bäri NesCola içginlik ingredientleri boýunça täzelikleri öňe sürýär. Biz arak önümlerini, kraýt pivalary, gazly içginlikleri we funksional markalary goldaýarys.',
    'home.intro.p2':
      'R&D toparymyz adaty botaniki bilimi häzirki ekstraksiýa bilen birleşdirýär we 40-dan köp ýurtdan çig mal alýar.',
    'home.intro.link': 'Mirasy öwrenmek',
    'home.stats.countries': 'Çig mal alnan ýurtlar',
    'home.stats.ingredients': 'Aktiw ingredientler',
    'home.stats.partners': 'Marka hyzmatdaşlary',
    'home.stats.years': 'Täjribesi',
    'home.products.label': 'Portfel',
    'home.products.title_html': 'Ingredient <em>kategoriýalary</em>',
    'home.products.link': 'Doly katalog',
    'home.feature.label': 'Wada edişimiz',
    'home.feature.title_html': '<em>Ilmy</em><br />tebigat bilen duşuşýar',
    'home.feature.p':
      'Her ingredient duýşurmaly bahalanýar, durnuklylyk synaglaryndan geçýär we düzgünlik barada resminamalar bilen goldanylýar.',
    'home.feature.cta': 'Nusgalar soramak',
    'home.sustain.label': 'Jogapkärçilik',
    'home.sustain.title_html': '<em>Taslamaly</em> durnuklylyk',
    'home.sustain.p1.title': 'Ahlakly satyn almak',
    'home.sustain.p1':
      '40 ýurtdaky 180+ şahadatly fermalar bilen göni gatnaşyk — adalatly söwda we býodiversity goragy.',
    'home.sustain.p2.title': 'Karbon-neýtral işleme',
    'home.sustain.p2':
      'Ekstraksiýa merkezlerimiz 100% täze energiýa bilen işleýär; 2030-a çenli nol emissiýa maksady.',
    'home.sustain.p3.title': 'Zeriksiz ekstraksiýa',
    'home.sustain.p3':
      'Kaskad prosesleri çig botaniki materialyň 98%-e çenlisini gymmatly goşmaça önümlere öwrýär.',
    'home.sustain.link': 'Durnuklylyk hasabaty',
    'home.sustain.badge': 'Botaniki material<br />gaýt işlenýär',
    'home.sustain.tag': 'Maksat 2030',
    'home.news.label': 'Täzelikler',
    'home.news.title_html': 'Synlar we <em>täzelikler</em>',
    'home.news.all': 'Ählisini gör',
    'home.partners': 'Dünýädäki iň uly içginlik markalary bize ynanyşýar',
    'home.cta.label': 'Başlamak',
    'home.cta.title_html': 'Içginligiňizi<br /><em>ýokarlandyrmaga</em> taýýarmy?',
    'home.cta.p':
      'Ingredient hünärmenlerimiz size ýatdan çykmajak tagam döretmäge kömek eder. Maslahat ýa-da nusga toplumyny soranyň.',
    'home.cta.primary': 'Nusga soramak',
    'home.cta.secondary': 'Ingredientlere seretmek',
    'home.footer.tagline':
      '2004-nýýyldan bäri tebigyň iň gowy botanikalary bilen premium ingredient döredýäris. Ylym tagam sungaty bilen duşuşýar.',
    'home.intro.visual_tag': '2004-dan · Premium hil',
    'home.common.learn_more': 'Has giňişleýin',
    'home.common.read_more': 'Okamak',
    'home.card1.tag': 'Kategoriýa 01',
    'home.card1.desc':
      'Sowuk pres we CO₂ ekstraksiýasy bilen botanikanyň doly aromat profili we bioaktiw birleşmeleri saklanýar.',
    'home.card2.tag': 'Kategoriýa 02',
    'home.card2.title': 'Tebigy tagam ulgamlary',
    'home.card2.desc':
      'Miwe, spise, ot we tüsli profiller bilen tebigy çeşmelerden dürli ulanyş üçin tagam binýady.',
    'home.card3.tag': 'Kategoriýa 03',
    'home.card3.desc':
      'Adaptogenler, nootropikler, witaminler we minerallar — arassaly etiketka we netijelilik.',
    'home.news1.date': 'Mart 2026 · Durnuklylyk',
    'home.news1.title': 'NesCola ÄU-da ähli önümçilikde karbon-neýtral şahadatnama aldy',
    'home.news1.excerpt':
      'Üç ýyllyk energiýa infrastrukturasyny täzeleşdirdik: ähli alty ýewropalyk ekstraksiýa merkezi 100% tassyklanýan täze energiýa bilen işleýär — bu net-zero ýolunda möhüm ädim.',
    'home.news2.date': 'Fewral 2026 · Täzelik',
    'home.news2.title': 'AquaZen™ — täze funksional suw seriýasy',
    'home.news2.excerpt':
      'Premium durgun we gazly suw üçin mineral we adaptogen ulgamy.',
    'home.news3.date': 'Ýanwar 2026 · Söýgüler',
    'home.news3.title': 'NesCola BevTech Global Summit 2026-da iň gowy üpjünçi boldy',
    'home.news3.excerpt':
      '350+ çäräniň içginlik pudagynda hil, täzelik we durnuklylyk liderligi bilen bellendi.',
    'about.hero.breadcrumb_home': 'Baş sahypa',
    'about.hero.breadcrumb_about': 'Biz barada',
    'about.hero.title_html': 'Bizin <em>taryhy</em>',
    'about.story.label': '2004-nýýyldan',
    'about.story.title_html': 'Arassaly<br /><em>ingredientlere</em> söýgi',
    'about.story.p1':
      'NesCola 2004-nýýylda içginlik ylymçylary we botanik ýygnaýjylary topary tarapyndan düzüldi — uly içginlikleriň geljegi, içine goýlýan zatlaryň hilinde diýip ynanýardylar. Wenaýdaky bir ekstraksiýa laboratoriýasyndan başlap, dünýä derejesinde ynanýan ingredient öýüne ösüp çykdyk.',
    'about.story.p2':
      'Felsefämiz ýönekeý: tebigat ajaýyp tagamlar berýär. Bizim wezipämiz — olary ylym anyklygy we ahlakly jogapkärçilik bilen saklap we eltip bermek.',
    'about.story.p3':
      'Şu gün NesCola Ýewropa we Aziýada bäş ösen işleme merkezi, 800+ hünärmen we 40+ ýurtdan çig mal bilen işleýär — birinji günden bellik edýän hil söýgisi bilen.',
    'about.stats.team': 'Topar agzalary',
    'about.stats.facilities': 'Global obýektler',
    'about.stats.countries': 'Çig mal alnan ýurtlar',
    'about.stats.excellence': 'ösenlik',
    'about.values.label': 'Bahalarymyz',
    'about.values.title_html': 'Bizi <em>hereketlendirýän</em>',
    'about.values.precision.title': 'Anyklyk',
    'about.values.precision.p':
      'Her partýa milligramma çenli ölçenýär. Analitiki laboratoriýalarymyz botaniki ekstraktlaryň hil standartyny kesgitlýär — her partýada deň.',
    'about.values.resp.title': 'Jogapkärçilik',
    'about.values.resp.p':
      'Biz diňe üpjünçilik zynjyry däl, fermer jemgyýetleri bilen gatnaşyk gurýarys. Adalatly töleg, býodiversity goragy we regeneratiw daýhançylyk — çäklendirilmeýär.',
    'about.values.innov.title': 'Täzelik',
    'about.values.innov.p':
      'R&D toparymyz ýylda 12+ patent ýazýar. Girdejiniň 8%-i esasy barlaglara gidýär, şonuň üçin hyzmatdaşlar ýaratan täze trendleri öňünden görýär.',
    'about.feature.label': 'Missiýamyz',
    'about.feature.title_html': 'Dünýäniň iň <em>uly</em> içginliklerine ilham bermek',
    'about.feature.p':
      'Biz önüm döredijilere tebigyň iň gowy gurluş bloklaryny berýäris — şatlyk, iýmit we birlik döretmek üçin.',
    'about.feature.cta': 'Hyzmatdaş bolmak',
    'about.team.label': 'Liderlik',
    'about.team.title_html': 'NesCola-<em>nyň yzýurdy</em>',
    'about.team.role1': 'CEO we bir-bolup düzüji',
    'about.team.role2': 'Ylym boýunça başlyk',
    'about.team.role3': 'Çig mal boýunça başlyk',
    'about.team.role4': 'Global hyzmatdaşlyk boýunça wise-prezident',
    'about.cta.label': 'Ýolyňyza goşulmak',
    'about.cta.title_html': '<em>NesCola</em> hyzmatdaşy boluň',
    'about.cta.p':
      'Kraýt pivadan global marka çenli — önümiňizi ýokarlandyrmak üçin ingredientler we tejribe bar.',
    'about.cta.primary': 'Aragatnaşyk',
    'about.cta.secondary': 'Önümlere seretmek',
    'about.footer.tagline':
      '2004-nýýyldan bäri tebigyň iň gowy botanikalary bilen premium ingredient döredýäris.',
    'products.hero.breadcrumb_home': 'Baş sahypa',
    'products.hero.breadcrumb_products': 'Ingredientler',
    'products.hero.title_html': 'Bizin<br /><em>ingredient</em> portfelimiz',
    'products.intro.label': '1200+ ingredient',
    'products.intro.title_html': 'Reseptiňizi<br /><em>gowy</em> gurmak üçin ähli zat',
    'products.intro.p':
      'Bir çeşme ekstraktlaryndan köp komponentli tagam ulgamlaryna çenli — NesCola katalogy täzelik üçin gurallar berýär.',
    'products.turnkey.label': 'Açarly çözgüt',
    'products.turnkey.title_html': 'Size <em>ingredientler</em> açarly',
    'products.turnkey.p':
      'Tizlik we hil birlikde bolmaly. Bizin ulgamlar ulanyşa taýýar gelýär — deňagramly, durnuklylyk synagly we resminamalar bilen goldanylýar.',
    'products.turnkey.li1_html':
      '<strong>Taýýar garyşyklar</strong> — kola, sitrus, minerallar we antioksidant kompleksi üçin.',
    'products.turnkey.li2_html':
      '<strong>Durnuklylyk we düzgünlik</strong> — ulanyş möçberleri, allergen ýazgylary we sebit ýazgylary.',
    'products.turnkey.li3_html':
      '<strong>Tiz nusgalar</strong> — R&amp;D we möhletleri anyk bilen massa önümçilik.',
    'products.turnkey.cta': 'Aragatnaşyk',
    'products.filter.all': 'Ähli kategoriýalar',
    'products.filter.botanical': 'Botaniki ekstraktlar',
    'products.filter.flavor': 'Tagam ulgamlary',
    'products.filter.functional': 'Funksional',
    'products.filter.mineral': 'Minerallar we duzlary',
    'products.filter.antioxidant': 'Antioksidantlar',
    'products.band.label': 'Ýörite R&amp;D',
    'products.band.title_html': 'Gerek zady<br />tapmadyňyzmy? <em>Birlikde döredeliň.</em>',
    'products.band.p':
      'R&amp;D toparymyz prototip üçin 1 kg-dan başlap massa önümçilige çenli goldaw berýär.',
    'products.band.cta': 'Ýörite taslamany başlatmak',
    'products.request_sample': 'Nusga soramak',
    'products.card.nc100.title': 'Hümmel güli ekstrakty NC-100',
    'products.card.nc100.desc':
      'Alfa we beta kislotalary we ýagly ekstraktlary öz içine alýan doly spektrly suwuk hümmel ekstrakty. Kraýt piva, hop suwy we botaniki spirtli içginlikler üçin.',
    'products.card.gt250.title': 'Ýaş çaý konsentrati GT-250',
    'products.card.gt250.desc':
      'Ýapon sortlaryndan ýokary katehinli konsentrat. Arassa umami profili bilen tebigy kofein.',
    'products.card.hb80.title': 'Gibiskus güli ekstrakty HB-80',
    'products.card.hb80.desc':
      'Çuň gyzyl reňk we gyzgynlykly çyglylyk. Arassa etiketkada reňk we tagam bir ingredientde.',
    'products.card.cf400.title': 'Sitrus kaskady CF-400',
    'products.card.cf400.desc':
      'Alty citrus — limon, laým, greýpfrut, ýuzu, bergamot we gyzyl apelsin — seltzer we RTD kokteýller üçin.',
    'products.card.bn320.title': 'Berry Noir BN-320',
    'products.card.bn320.desc':
      'Goňur ýemiş profili — bezem, gara current we açaý — premium gazsyz içginlikler üçin tebigy tannin gurluşy bilen.',
    'products.card.gs150.title': 'Grain & Smoke GS-150',
    'products.card.gs150.desc':
      'Spirtli däl spirtli içginlikler we kraýt kola üçin malt we sowuk çykylan bugdaý tagam ulgamy — çuňlyk we hakykylyk goşýar.',
    'products.card.ab200.title': 'AdaptaBlend AB-200',
    'products.card.ab200.desc':
      'Kliniki dozada adaptogenler — aşwaganda, rodiola we arslan yeňşi — içginligiň durnuklylygy we býoelýeterliligi üçin optimizasiýa.',
    'products.card.ff180.title': 'FocusFlow FF-180',
    'products.card.ff180.desc':
      'L-teanin, fosfatidilserin we bakopa bilen nootropik garyşyk — tagamsyz we erän kognitiw içginlikler üçin.',
    'products.card.azmin.title': 'AquaZen™ mineral profili',
    'products.card.azmin.desc':
      'Magniý, kaliý, kalsiý we elementler — legendalary tebigy suwlaryň tagam profilini gaýtadan döredýär.',
    'products.card.aox300.title': 'PolyPlex AOX-300',
    'products.card.aox300.desc':
      'Üzüm çekjesi, ýaş çaý we naradan durnukly polifenol kompleksi — ýokary ORAC, içginlik bilen gabat gelýän arassa tagam.',
    'products.card.og120.title': 'OleoGuard OG-120',
    'products.card.og120.desc':
      'Gidroksitirozol köp bolan zeýtun polifenol ekstrakty — saglyk içginlikleri üçin. Çäklendirilen möhlet goldawy we ýangynly gaýtşaplyk.',
    'products.card.ec240.title': 'ElectroCore EC-240',
    'products.card.ec240.desc':
      'Hindistan göwnü gurutmalary, deňiz duzy we helat mineral bilen sport üçin elektrolit ulgamy — gidratasiýa içginlikleri.',
    'products.footer.tagline':
      '2004-nýýyldan bäri tebigyň iň gowy botanikalary bilen premium ingredient döredýäris.',
    'sus.hero.breadcrumb_home': 'Baş sahypa',
    'sus.hero.breadcrumb_sus': 'Durnuklylyk',
    'sus.hero.title_html': 'Planeta,<br />bizin <em>jogapkärçiligimiz</em>',
    'sus.intro.label': 'Wada edişlerimiz',
    'sus.intro.title_html': 'Her ädimde<br /><em>regeneratiw</em>',
    'sus.intro.p1':
      'Durnuklylyk NesCola-da kampaniýa däl — işleýiş modeli: fermadan gaplamaga çenli her karar uzak möhletli planeta saglygyny göz öňünde tutýar.',
    'sus.intro.p2':
      'Biz ýyllyk täsir hasabaty çap edýäris we Bureau Veritas tarapyndan tassyklanan karbon hasaby ýöriteleşdirilýär.',
    'sus.stats.renew': 'Täze energiýa',
    'sus.stats.waste': 'Çökerlik gaýt işlenmesi',
    'sus.stats.farms': 'Şahadatly fermalar',
    'sus.stats.target': 'Net-zero ýyly',
    'sus.pillars.label': 'Ulgam',
    'sus.pillars.title_html': 'Täsir üçin <em>üç sütün</em>',
    'sus.timeline.label': 'Ýolumyz',
    'sus.timeline.title_html': 'Durnuklylyk <em>ädimleri</em>',
    'sus.pillar1.title': 'Toprak we býodiversity',
    'sus.pillar1.p':
      'Diňe regeneratiw daýhançylyk edýän fermerler bilen işleýäris — örtük ekinler, oturmaýan işleme we integrasiýaly haýwanlara garşy çäreler. Green Root Foundation arkaly $12M ýaýlym goragyna bellän.',
    'sus.pillar2.title': 'Howa we energiýa',
    'sus.pillar2.p':
      'Bäş işleme merkezi 2021–2024 aralygynda 100% täze energiýa geçdi. Scope 1–3 çykyşlary ölçeýäris we kompensasiýa edýäris; 2019-dan bäri tassyklanan 42% azalma we 2030-a net-zero ýoly.',
    'sus.pillar3.title': 'Adamlar we jemgyýetler',
    'sus.pillar3.p':
      'Farmer hyzmatdaşlyk programmamyz bazardan ýokary bahalary kepillendirýär we 180+ kooperatiw üçin tehniki okuw berýär. 2025-de çig mal alynýan sebitlerde üç oba üçin arassaly suw goldawyny finansirlärdik.',
    'sus.timeline.2019': 'Ilkinji durnuklylyk barlagy we ylym esasly maksatlar.',
    'sus.timeline.2021': 'Ilkinji obýekt 100% täze energiýa. Green Root Foundation düzüldi.',
    'sus.timeline.2023': 'Zeriksiz ekstraksiýa patenti. 150 regeneratiw şahadatly fermalar.',
    'sus.timeline.2024': 'Ähli bäş obýekt karbon-neýtral. 2019-a garanyňda Scope 1–3 42% azalma.',
    'sus.timeline.2030': 'Maksat: doly net-zero bahaly zynjyr. 250+ regeneratiw fermer hyzmatdaşy.',
    'sus.cta.label': 'Hasabat',
    'sus.cta.title_html': 'Doly<br /><em>ýyllyk täsir hasabaty</em>',
    'sus.cta.p':
      '2025 hasabaty: üçünji tarap karbon tassyklamasy, býodiversity we fermerleriň ýagdaýy.',
    'sus.cta.primary': 'Hasabat ýükle',
    'sus.cta.secondary': 'Aragatnaşyk',
    'contact.hero.breadcrumb_home': 'Baş sahypa',
    'contact.hero.breadcrumb_contact': 'Aragatnaşyk',
    'contact.hero.title_html': 'Gowy zat<br /><em>döredeliň</em>',
    'contact.info.label': 'Aragatnaşyk',
    'contact.info.title_html': 'Sizi<br />eşitmäge şat',
    'contact.info.p':
      'Ingredient, ýörite iş ýa-da has giňişleýin maglumat gerek bolsa — hünärmen toparymyz kömek etmäge taýýar.',
    'contact.addr.title': 'Salgy',
    'contact.phone.title': 'Telefon',
    'contact.email.title': 'Umumy soraglar',
    'contact.form.title': 'Hat ýazyň',
    'contact.form.fname': 'Ady',
    'contact.form.lname': 'Familiýasy',
    'contact.form.company': 'Kompaniýa',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sorag görnüşi',
    'contact.form.message': 'Hat',
    'contact.form.submit': 'Ugratmak',
    'contact.form.sending': 'Ugradylýar…',
    'contact.form.sent': 'Hat ugradyldy!',
    'contact.form.ph_fname': 'Adyňyz',
    'contact.form.ph_lname': 'Familiýaňyz',
    'contact.form.ph_company': 'Içginlik markaňyz',
    'contact.form.ph_email': 'you@company.com',
    'contact.form.ph_message':
      'Taslama, gerek ingredientler ýa-da soraglaryňyz barada ýazyň…',
    'contact.form.subject_ph': 'Sorag görnüşini saýlaň',
    'contact.form.opt.sample': 'Önüm nusgasy soramak',
    'contact.form.opt.rd': 'Ýörite R&D taslamasy',
    'contact.form.opt.pricing': 'Bahalar we MOQ',
    'contact.form.opt.docs': 'Tehniki resminamalar',
    'contact.form.opt.partner': 'Hyzmatdaşlyk mümkinçilikleri',
    'contact.form.opt.general': 'Umumy sorag',
    'contact.map.kicker': 'Global ädimimiz',
    'contact.map.title_html': 'Ingredientleri<br /><em style="color:var(--green-light);">60+ ýurda</em> üpjün etmek',
    'contact.faq.label': 'Sorag-jogap',
    'contact.faq.title_html': 'Köp soraglanýan <em>soraglar</em>',
    'contact.faq.q1': 'Iň az sargyt möçberi näçe?',
    'contact.faq.a1':
      'Standart katalog boýunça MOQ 25 kg-dan. Ýörite işler üçin R&amp;D üçin 1–5 kg. Bahalary satuw bilen anyklaň.',
    'contact.faq.q2': 'Nusga toplumlary barmy?',
    'contact.faq.a2':
      'Hawa — kwalifikasiýaly önümçiler üçin mugt toplumlar (5 ingrediente çenli, her biri 100 g). Form ýa-da samples@nescola.com.',
    'contact.faq.q3': 'Organic/Non-GMO şahadatnamalary barmy?',
    'contact.faq.a3':
      'Portfeliň 70%-inden köpü EU Organic, USDA Organic ýa-da Non-GMO. Şahadatnamalar — sorag boýunça hil portalyna.',
    'contact.faq.q4': 'Ýörite iş näçe wagt alýar?',
    'contact.faq.a4':
      'Adatça brifden pilot nusgyna çenli 8–16 hepde. Başlangyçda möhlet meýilnamasy berilýär.',
    'prefooter.kicker': 'NesCola'
  }
};

function getStoredLang() {
  try {
    const v = localStorage.getItem('nescola_lang');
    if (v === 'en' || v === 'ru' || v === 'tk') return v;
  } catch {}
  return 'en';
}

function setStoredLang(lang) {
  try { localStorage.setItem('nescola_lang', lang); } catch {}
}

const LANG_FLAGS = { en: '🇬🇧', ru: '🇷🇺', tk: '🇹🇲' };

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === 'tk' ? 'tk' : lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const val = dict[key] ?? I18N.en[key];
    if (val == null) return;
    el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (!key) return;
    const val = dict[key] ?? I18N.en[key];
    if (val == null) return;
    el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) return;
    const val = dict[key] ?? I18N.en[key];
    if (val == null) return;
    el.setAttribute('placeholder', val);
  });

  const toggle = document.querySelector('.lang-switch-toggle');
  if (toggle) {
    const flagEl = toggle.querySelector('.lang-switch-flag');
    const codeEl = toggle.querySelector('.lang-switch-code');
    if (flagEl) flagEl.textContent = LANG_FLAGS[lang] || '';
    if (codeEl) {
      const lk = `nav.lang.${lang}`;
      codeEl.textContent = dict[lk] ?? I18N.en[lk] ?? String(lang).toUpperCase();
    }
  }
  document.querySelectorAll('.lang-option').forEach(btn => {
    const bLang = btn.getAttribute('data-lang');
    if (!bLang) return;
    btn.classList.toggle('is-active', bLang === lang);
    btn.setAttribute('aria-selected', bLang === lang ? 'true' : 'false');
  });
}

function initLangDropdown() {
  const root = document.querySelector('[data-lang-root]');
  if (!root) return;
  const toggle = root.querySelector('.lang-switch-toggle');
  const dropdown = root.querySelector('.lang-dropdown');
  if (!toggle || !dropdown) return;

  function closeDropdown() {
    dropdown.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openDropdown() {
    dropdown.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', e => {
    e.stopPropagation();
    if (dropdown.hidden) openDropdown();
    else closeDropdown();
  });

  root.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const next = btn.getAttribute('data-lang');
      if (!next || !['en', 'ru', 'tk'].includes(next)) return;
      setStoredLang(next);
      applyI18n(next);
      closeDropdown();
    });
  });

  document.addEventListener('click', closeDropdown);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDropdown();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getStoredLang();
  applyI18n(lang);
  initLangDropdown();

  /* ---- Page transition overlay ---- */
  const transitionEl = document.getElementById('page-transition');
  const internalLinkSelector = 'a[href]';

  function isSameOriginLink(a) {
    try {
      const url = new URL(a.getAttribute('href'), window.location.href);
      return url.origin === window.location.origin;
    } catch {
      return false;
    }
  }

  function isInPageHashLink(a) {
    const href = a.getAttribute('href') || '';
    if (!href.startsWith('#')) return false;
    return href.length > 1;
  }

  function shouldHandleLink(a) {
    if (!a) return false;
    if (a.hasAttribute('download')) return false;
    const target = (a.getAttribute('target') || '').toLowerCase();
    if (target === '_blank') return false;

    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    if (href.startsWith('#')) return false;

    if (!isSameOriginLink(a)) return false;

    const url = new URL(href, window.location.href);
    // Don’t animate if it only changes the hash on the same page
    if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return false;

    return true;
  }

  function startTransitionTo(url) {
    if (!transitionEl) {
      window.location.href = url;
      return;
    }
    if (document.body.classList.contains('is-transitioning')) return;
    document.body.classList.add('is-transitioning');
    // Prevent scroll-jank during transition
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => {
      window.location.href = url;
    }, 520);
  }

  // Exit transition: intercept eligible links
  document.querySelectorAll(internalLinkSelector).forEach(a => {
    a.addEventListener('click', (e) => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!shouldHandleLink(a)) return;
      e.preventDefault();
      const url = new URL(a.getAttribute('href'), window.location.href).toString();
      // Save intent so the next page can play an enter feel
      try { sessionStorage.setItem('nescola_transition', '1'); } catch {}
      startTransitionTo(url);
    });
  });

  // Enter transition: only if we came from a handled navigation
  if (transitionEl) {
    const cameFromTransition = (() => {
      try {
        const v = sessionStorage.getItem('nescola_transition');
        sessionStorage.removeItem('nescola_transition');
        return v === '1';
      } catch {
        return false;
      }
    })();
    if (cameFromTransition) {
      // Start with overlay visible for a beat, then release
      document.body.classList.add('is-transitioning');
      requestAnimationFrame(() => {
        // Let one frame render, then fade away
        document.body.classList.remove('is-transitioning');
        document.body.style.overflow = '';
      });
    }
  }

  /* ---- Loader ---- */
  const loader = document.getElementById('loader');
  if (loader) {
    const pctEl = document.getElementById('loader-pct');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const totalMs = reduce ? 700 : 1650;
    const start = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / totalMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const pct = Math.round(eased * 100);
      if (pctEl) pctEl.textContent = pct + '%';
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    window.setTimeout(() => loader.classList.add('hidden'), reduce ? 800 : 2000);
  }

  /* ---- Custom Cursor ---- */
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

  const isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && isFinePointer && cursor && follower) {
    // Hide until first mouse move to prevent top-left flash on reload
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
    let cursorReady = false;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';

      if (!cursorReady) {
        cursorReady = true;
        cursor.style.opacity = '1';
        follower.style.opacity = '1';
      }
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + 'px';
      follower.style.top  = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    document.querySelectorAll('a, button, .product-card, .news-card, .sustain-pillar, .commitment-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); follower.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
    });
  }

  /* ---- Navbar scroll ---- */
  const navbar = document.getElementById('navbar');
  function handleNavScroll() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ---- Mobile Menu ---- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Scroll Reveal ---- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-clip');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  // Observe existing reveal elements
  revealEls.forEach((el, i) => revealObserver.observe(el));

  /* ---- Staggered children reveal ---- */
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.classList.add('reveal');
      child.dataset.delay = i * 100;
      revealObserver.observe(child);
    });
  });

  /* ---- Counter Animation ---- */
  const counterEls = document.querySelectorAll('.stat-num[data-count]');
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1800;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);
        el.innerHTML = prefix + value + '<span>' + suffix + '</span>';
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => counterObserver.observe(el));

  /* ---- Progress Bar ---- */
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }

  /* ---- Back to Top ---- */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Parallax on Hero shapes ---- */
  const parallaxEls = document.querySelectorAll('.hero-shape');
  if (!reduceMotion) window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    parallaxEls.forEach((el, i) => {
      const speed = 0.2 + i * 0.1;
      el.style.transform = `translateY(${sy * speed}px)`;
    });
  }, { passive: true });

  /* ---- Marquee duplicate ---- */
  const track = document.querySelector('.marquee-track');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  /* ---- Partners carousel duplicate ---- */
  const partnersTrack = document.querySelector('.partners-track');
  if (partnersTrack) {
    partnersTrack.innerHTML += partnersTrack.innerHTML;
  }

  /* ---- Smooth active nav link ---- */
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) link.classList.add('active');
  });

  /* ---- Product filter (products page) ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.products-full .product-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      productCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = ''; });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });

  /* ---- Form submit (demo) ---- */
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const lang = getStoredLang();
      const dict = I18N[lang] || I18N.en;
      const sending = dict['contact.form.sending'] ?? I18N.en['contact.form.sending'];
      const sent = dict['contact.form.sent'] ?? I18N.en['contact.form.sent'];
      btn.textContent = sending;
      setTimeout(() => {
        btn.textContent = sent;
        btn.style.background = 'var(--green-mid)';
        form.reset();
        setTimeout(() => {
          btn.style.background = '';
          applyI18n(lang);
        }, 3000);
      }, 1400);
    });
  }

  /* ---- Hover tilt on product cards ---- */
  if (!reduceMotion) document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      card.style.transform = `translateY(-6px) rotateY(${x}deg) rotateX(${y}deg)`;
      card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---- Premium hover glow tracking (news cards) ---- */
  if (!reduceMotion) document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
  });

});
