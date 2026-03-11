"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  TrendingUp,
  GraduationCap,
  BarChart3,
  Wrench,
  Users,
  Headphones,
  ChevronRight,
  Star,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
  Globe,
  Zap,
  Shield,
  Clock,
  Award,
  ExternalLink,
  ArrowRight,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Translation object
const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      products: "المنتجات",
      about: "من نحن",
      contact: "تواصل معنا",
    },
    hero: {
      title: "إنفينيتي سيجنالز",
      subtitle: "إشارات تداول احترافية",
      description: "منصتك الموثوقة لإشارات التداول الاحترافية وتحليل الأسواق المالية. انضم لآلاف المتداولين الناجحين واحقق أهدافك المالية معنا.",
      cta1: "ابدأ الآن",
      cta2: "تعلم المزيد",
      stats: {
        traders: "متداول نشط",
        signals: "إشارة ناجحة",
        accuracy: "نسبة الدقة",
        countries: "دولة",
      },
    },
    services: {
      title: "خدماتنا",
      subtitle: "نقدم لك باقة متكاملة من الخدمات الاحترافية",
      items: [
        {
          title: "توصيات التداول",
          description: "إشارات تداول دقيقة للأسهم والعملات والعملات الرقمية مع تحليل مفصل",
          price: "99$",
          period: "/شهرياً",
        },
        {
          title: "أكاديمية التداول",
          description: "دورات تعليمية احترافية من المبتدئين إلى المحترفين",
          price: "149$",
          period: "/شهرياً",
        },
        {
          title: "تحليل السوق",
          description: "تحليل فني وأساسي شامل للأسواق المالية بشكل يومي",
          price: "79$",
          period: "/شهرياً",
        },
        {
          title: "أدوات التداول",
          description: "أدوات مساعدة احترافية للمتداولين تشمل مؤشرات وروبوتات",
          price: "مجاني",
          period: "",
        },
        {
          title: "مجتمع المتداولين",
          description: "تواصل مع خبراء ومتداولين محترفين وتبادل الخبرات",
          price: "مجاني",
          period: "",
        },
        {
          title: "الدعم الفني",
          description: "دعم فني متواصل على مدار الساعة لمساعدتك",
          price: "مجاني",
          period: "",
        },
      ],
      subscribe: "اشترك الآن",
    },
    ceo: {
      title: "قيادة الرؤية",
      subtitle: "المؤسس والمدير التنفيذي",
      name: "كينغ اريوس",
      role: "المدير التنفيذي",
      description: "رؤية استثنائية وقيادة متميزة. كينغ اريوس هو المؤسس والمدير التنفيذي لإنفينيتي سيجنالز، يحمل أكثر من 15 عاماً من الخبرة في الأسواق المالية والتحليل التقني.",
      experience: "+15 عاماً خبرة",
      founded: "تأسست 2018",
    },
    team: {
      title: "فريقنا",
      subtitle: "خبراء متميزون في مجالاتهم",
      members: [
        {
          name: "جيريمي",
          role: "مدير التطوير",
          description: "خبير في تطوير الأنظمة التقنية وتطبيقات التداول المتقدمة",
        },
        {
          name: "ريان",
          role: "محلل مالي",
          description: "متخصص في تحليل الأسواق المالية وتقديم توصيات دقيقة",
        },
        {
          name: "ميلانو",
          role: "مديرة التسويق",
          description: "خبيرة في استراتيجيات التسويق الرقمي وتوسيع قاعدة العملاء",
        },
        {
          name: "سميحة",
          role: "مديرة نجاح العملاء",
          description: "ملتزمة بتقديم تجربة عملاء استثنائية ودعم متميز",
        },
      ],
    },
    features: {
      title: "لماذا تختارنا؟",
      subtitle: "مميزات تجعلنا الخيار الأفضل للمتداولين",
      items: [
        {
          title: "دقة عالية",
          description: "إشارات تداول بدقة تصل إلى 90% مدعومة بتحليل متعمق",
        },
        {
          title: "سرعة التنفيذ",
          description: "إشارات فورية عبر التطبيق والبريد الإلكتروني",
        },
        {
          title: "أمان تام",
          description: "حماية كاملة لبياناتك ومعلوماتك المالية",
        },
        {
          title: "دعم متواصل",
          description: "فريق دعم متخصص متاح على مدار الساعة",
        },
      ],
    },
    links: {
      title: "روابط مهمة",
      subtitle: "اكتشف المزيد من خدماتنا",
      infinitySignals: {
        title: "إنفينيتي سيجنالز",
        description: "منصة إشارات التداول الرئيسية - احصل على إشارات تداول احترافية ودقيقة للأسهم والعملات والعملات الرقمية",
      },
      algoAcademy: {
        title: "أكاديمية إنفينيتي",
        description: "منصة التعليم الإلكتروني - دورات شاملة في التداول والتحليل الفني من خبراء معتمدين",
      },
      visit: "زيارة الموقع",
    },
    testimonials: {
      title: "آراء عملائنا",
      subtitle: "ماذا يقول عملاؤنا عن خدماتنا",
      items: [
        {
          name: "أحمد محمد",
          role: "متداول محترف",
          content: "خدمة ممتازة وإشارات دقيقة جداً. حققت أرباحاً كبيرة منذ انضمامي للمنصة. أنصح بها بشدة لكل من يريد دخول عالم التداول.",
          rating: 5,
        },
        {
          name: "سارة العلي",
          role: "مستثمرة",
          content: "الدورات التعليمية في الأكاديمية غيرت نظرتي للأسواق المالية. محتوى احترافي ومدربون أكفاء. شكراً إنفينيتي!",
          rating: 5,
        },
        {
          name: "خالد الراشد",
          role: "متداول مبتدئ",
          content: "كنت أبحث عن منصة موثوقة للإشارات ووجدتها هنا. الدعم الفني ممتاز والفريق متعاون جداً. تجربة رائعة!",
          rating: 5,
        },
      ],
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subscribe: "اشتراك",
      info: {
        title: "معلومات الاتصال",
        address: "الرياض، المملكة العربية السعودية",
        phone: "+966 50 000 0000",
        emailLabel: "info@infinitysignals.net",
      },
    },
    footer: {
      description: "منصة إنفينيتي سيجنالز هي شريكك الموثوق في عالم التداول. نقدم إشارات احترافية وتحليلات دقيقة لتحقيق أهدافك المالية.",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      copyright: "© 2024 إنفينيتي سيجنالز. جميع الحقوق محفوظة.",
    },
  },
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Infinity Signals",
      subtitle: "Professional Trading Signals",
      description: "Your trusted platform for professional trading signals and financial market analysis. Join thousands of successful traders and achieve your financial goals with us.",
      cta1: "Get Started",
      cta2: "Learn More",
      stats: {
        traders: "Active Traders",
        signals: "Successful Signals",
        accuracy: "Accuracy Rate",
        countries: "Countries",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "We offer a comprehensive package of professional services",
      items: [
        {
          title: "Trading Signals",
          description: "Precise trading signals for stocks, currencies, and cryptocurrencies with detailed analysis",
          price: "$99",
          period: "/month",
        },
        {
          title: "Trading Academy",
          description: "Professional educational courses from beginners to experts",
          price: "$149",
          period: "/month",
        },
        {
          title: "Market Analysis",
          description: "Comprehensive technical and fundamental analysis of financial markets daily",
          price: "$79",
          period: "/month",
        },
        {
          title: "Trading Tools",
          description: "Professional trading tools including indicators and robots",
          price: "Free",
          period: "",
        },
        {
          title: "Traders Community",
          description: "Connect with professional traders and experts, share experiences",
          price: "Free",
          period: "",
        },
        {
          title: "Technical Support",
          description: "24/7 continuous technical support to assist you",
          price: "Free",
          period: "",
        },
      ],
      subscribe: "Subscribe Now",
    },
    ceo: {
      title: "Leadership Vision",
      subtitle: "Founder & CEO",
      name: "King Arios",
      role: "CEO & Founder",
      description: "Exceptional vision and distinguished leadership. King Arios is the founder and CEO of Infinity Signals, bringing over 15 years of experience in financial markets and technical analysis.",
      experience: "+15 Years Experience",
      founded: "Founded 2018",
    },
    team: {
      title: "Our Team",
      subtitle: "Distinguished experts in their fields",
      members: [
        {
          name: "Jeremy",
          role: "Development Lead",
          description: "Expert in developing technical systems and advanced trading applications",
        },
        {
          name: "Ryan",
          role: "Financial Analyst",
          description: "Specialized in financial market analysis and providing accurate recommendations",
        },
        {
          name: "Milano",
          role: "Marketing Director",
          description: "Expert in digital marketing strategies and customer base expansion",
        },
        {
          name: "Samiha",
          role: "Customer Success Manager",
          description: "Committed to delivering exceptional customer experience and outstanding support",
        },
      ],
    },
    features: {
      title: "Why Choose Us?",
      subtitle: "Features that make us the best choice for traders",
      items: [
        {
          title: "High Accuracy",
          description: "Trading signals with up to 90% accuracy supported by in-depth analysis",
        },
        {
          title: "Fast Execution",
          description: "Instant signals via app and email notifications",
        },
        {
          title: "Complete Security",
          description: "Full protection for your data and financial information",
        },
        {
          title: "24/7 Support",
          description: "Dedicated support team available around the clock",
        },
      ],
    },
    links: {
      title: "Important Links",
      subtitle: "Discover more of our services",
      infinitySignals: {
        title: "Infinity Signals",
        description: "Main trading signals platform - Get professional and precise trading signals for stocks, currencies, and cryptocurrencies",
      },
      algoAcademy: {
        title: "Infinity Academy",
        description: "E-learning platform - Comprehensive courses in trading and technical analysis from certified experts",
      },
      visit: "Visit Website",
    },
    testimonials: {
      title: "Client Testimonials",
      subtitle: "What our clients say about our services",
      items: [
        {
          name: "Ahmed Mohamed",
          role: "Professional Trader",
          content: "Excellent service with very accurate signals. I've made significant profits since joining the platform. Highly recommended for anyone looking to enter the trading world.",
          rating: 5,
        },
        {
          name: "Sarah Ali",
          role: "Investor",
          content: "The educational courses at the Academy changed my perspective on financial markets. Professional content and competent trainers. Thank you Infinity!",
          rating: 5,
        },
        {
          name: "Khaled Al-Rashed",
          role: "Beginner Trader",
          content: "I was looking for a reliable signal platform and found it here. Excellent technical support and a very cooperative team. Great experience!",
          rating: 5,
        },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're here to help you",
      email: "Email",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      info: {
        title: "Contact Information",
        address: "Riyadh, Saudi Arabia",
        phone: "+966 50 000 0000",
        emailLabel: "info@infinitysignals.net",
      },
    },
    footer: {
      description: "Infinity Signals platform is your trusted partner in the trading world. We provide professional signals and accurate analysis to achieve your financial goals.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      copyright: "© 2024 Infinity Signals. All rights reserved.",
    },
  },
};

// Language Context
type Language = "ar" | "en";
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.ar;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  const t = translations[language];
  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} lang={language} className={isRTL ? "font-arabic" : "font-english"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

// Header Component
function Header() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="Infinity Signals Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-bold gradient-text">
              {t.hero.title}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative group"
              >
                {value}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 border-2 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="font-bold">{language === "ar" ? "EN" : "AR"}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl border-t dark:border-gray-800 animate-fade-in">
          <nav className="flex flex-col p-4 gap-2">
            {Object.entries(t.nav).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {value}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// Hero Section
function HeroSection() {
  const { t, isRTL } = useLanguage();
  const [stats, setStats] = useState({ traders: 0, signals: 0, accuracy: 0, countries: 0 });

  useEffect(() => {
    const targetStats = { traders: 5000, signals: 15000, accuracy: 90, countries: 45 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setStats({
        traders: Math.floor(targetStats.traders * progress),
        signals: Math.floor(targetStats.signals * progress),
        accuracy: Math.floor(targetStats.accuracy * progress),
        countries: Math.floor(targetStats.countries * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero animate-gradient"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl animate-float"
          style={{ top: "10%", [isRTL ? "right" : "left"]: "10%" }}
        ></div>
        <div
          className="absolute w-48 h-48 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"
          style={{ bottom: "20%", [isRTL ? "left" : "right"]: "15%" }}
        ></div>
        <div
          className="absolute w-32 h-32 md:w-48 md:h-48 bg-yellow-500/20 rounded-full blur-2xl animate-float-slow"
          style={{ top: "50%", [isRTL ? "right" : "left"]: "5%" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
        <div className="text-center text-white">
          {/* Main Title */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
              {t.hero.title}
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-300 drop-shadow-md mb-6">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 drop-shadow animate-fade-in-up animation-delay-200"
          >
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-400 ${
              isRTL ? "sm:flex-row-reverse" : ""
            }`}
          >
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.hero.cta1}
              <ChevronRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.hero.cta2}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in-up animation-delay-600">
            {[
              { value: stats.traders.toLocaleString() + "+", label: t.hero.stats.traders },
              { value: stats.signals.toLocaleString() + "+", label: t.hero.stats.signals },
              { value: stats.accuracy + "%", label: t.hero.stats.accuracy },
              { value: stats.countries + "+", label: t.hero.stats.countries },
            ].map((stat, index) => (
              <div
                key={index}
                className="glassmorphism rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const { t, isRTL } = useLanguage();

  const icons = [TrendingUp, GraduationCap, BarChart3, Wrench, Users, Headphones];

  return (
    <section id="products" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.services.items.map((service, index) => {
            const IconComponent = icons[index];
            return (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 overflow-hidden"
              >
                <CardContent className="p-6 md:p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${isRTL ? "ml-auto" : "mr-auto"}`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className={`flex items-baseline gap-1 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {service.period}
                    </span>
                  </div>

                  {/* Subscribe Button */}
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group-hover:shadow-lg transition-all duration-300">
                    {t.services.subscribe}
                    <ChevronRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CEO Section
function CEOSection() {
  const { t, isRTL } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-4 py-1 mb-4">
            <Award className="w-3 h-3 mr-1" />
            {t.ceo.subtitle}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.ceo.title}
          </h2>
        </div>

        {/* CEO Card */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated gradient border */}
          <div className={`absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl blur-sm transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-50"}`} />
          
          <Card className="relative bg-gray-800/80 backdrop-blur-xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Image Side */}
                <div className="lg:w-2/5 relative">
                  <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10 lg:bg-gradient-to-r" />
                    
                    <Image
                      src="/team/ceo.png"
                      alt={t.ceo.name}
                      fill
                      className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
                    />
                    
                    {/* Floating badge */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 lg:hidden">
                      <Badge className="bg-yellow-500/90 text-gray-900 border-0 px-3 py-1">
                        <Award className="w-3 h-3 mr-1" />
                        {t.ceo.role}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Info Side */}
                <div className="lg:w-3/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  {/* Badge - Desktop */}
                  <div className="hidden lg:block mb-6">
                    <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-4 py-1">
                      <Award className="w-4 h-4 mr-2" />
                      {t.ceo.role}
                    </Badge>
                  </div>

                  {/* Name */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t.ceo.name}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {t.ceo.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                      <p className="text-2xl md:text-3xl font-bold text-yellow-400">15+</p>
                      <p className="text-sm text-gray-400">{t.ceo.experience.replace("+15 ", "")}</p>
                    </div>
                    <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                      <p className="text-2xl md:text-3xl font-bold text-yellow-400">2018</p>
                      <p className="text-sm text-gray-400">{t.ceo.founded.replace("تأسست ", "").replace("Founded ", "")}</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className={`flex gap-3 mt-8 ${isRTL ? "justify-end" : "justify-start"}`}>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const { t, isRTL } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const teamImages = [
    "/team/jeremy.png",
    "/team/ryan.png",
    "/team/milano.png",
    "/team/samiha.png",
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t.team.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        {/* Team Grid - 2x2 on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {t.team.members.map((member, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated gradient border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-sm transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <Card className="relative bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Circular Image with gradient border */}
                    <div className="relative shrink-0">
                      {/* Gradient ring */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transition-all duration-300 ${
                          hoveredIndex === index ? "opacity-100 blur-sm" : "opacity-50"
                        }`}
                      />
                      
                      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                        <Image
                          src={teamImages[index]}
                          alt={member.name}
                          fill
                          className={`object-cover transition-transform duration-500 ${
                            hoveredIndex === index ? "scale-110" : "scale-100"
                          }`}
                        />
                      </div>

                      {/* Glow effect on hover */}
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {member.description}
                      </p>

                      {/* Social Icons */}
                      <div className={`flex gap-2 mt-4 ${isRTL ? "sm:justify-end" : "sm:justify-start"} justify-center`}>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 group/icon"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover/icon:text-white transition-colors" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 group/icon"
                          aria-label="Twitter"
                        >
                          <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover/icon:text-white transition-colors" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const { t, isRTL } = useLanguage();

  const icons = [Zap, Clock, Shield, Headphones];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.features.items.map((feature, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={index}
                className="group text-center p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-500/50"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// External Links Section
function ExternalLinksSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.links.title}
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            {t.links.subtitle}
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Infinity Signals Card */}
          <Card className="group border-0 shadow-2xl bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t.links.infinitySignals.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {t.links.infinitySignals.description}
                  </p>
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30">
                    {t.links.visit}
                    <ExternalLink className={`w-4 h-4 ${isRTL ? "mr-2" : "ml-2"}`} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Infinity Academy Card */}
          <Card className="group border-0 shadow-2xl bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t.links.algoAcademy.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {t.links.algoAcademy.description}
                  </p>
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30">
                    {t.links.visit}
                    <ExternalLink className={`w-4 h-4 ${isRTL ? "mr-2" : "ml-2"}`} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-6 md:p-8">
                {/* Rating */}
                <div className={`flex gap-1 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter Form */}
          <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t.contact.email}
              </h3>
              <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Input
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-base"
                />
                <Button className="h-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Send className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
                  <span className="hidden sm:inline mr-2">{t.contact.subscribe}</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.info.title}
              </h3>
              <div className="space-y-4">
                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">{t.contact.info.address}</span>
                </div>
                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300" dir="ltr">{t.contact.info.phone}</span>
                </div>
                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">{t.contact.info.emailLabel}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const { t, isRTL, language } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Infinity Signals Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                {language === "ar" ? "إنفينيتي سيجنالز" : "Infinity Signals"}
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div className={`flex gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {Object.entries(t.nav).map(([key, value]) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <ChevronRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t.contact.info.title}</h3>
            <ul className="space-y-3 text-gray-400">
              <li className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.contact.info.address}</span>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span dir="ltr">{t.contact.info.phone}</span>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.contact.info.emailLabel}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <CEOSection />
          <TeamSection />
          <FeaturesSection />
          <ExternalLinksSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
