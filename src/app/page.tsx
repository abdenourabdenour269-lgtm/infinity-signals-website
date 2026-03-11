"use client";

import { useState, useEffect, createContext, useContext, ReactNode, useRef } from "react";
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
  Camera,
  User,
  Lock,
  LogIn,
  LogOut,
  Edit3,
  Save,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

// ============================================
// ADMIN AUTHENTICATION CONTEXT
// ============================================

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  profileImage: string | null;
}

interface AdminContextType {
  isAdmin: boolean;
  adminUser: AdminUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateProfileImage: (image: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}

function AdminProvider({ children }: { children: ReactNode }) {
  // Use lazy initialization for localStorage to avoid SSR issues
  const [adminUser, setAdminUser] = useState<AdminUser | null>(() => {
    if (typeof window === 'undefined') return null;
    const storedAdmin = localStorage.getItem("adminUser");
    if (storedAdmin) {
      try {
        return JSON.parse(storedAdmin);
      } catch {
        localStorage.removeItem("adminUser");
        return null;
      }
    }
    return null;
  });

  const login = (email: string, password: string): boolean => {
    // Mock authentication - In production, this would call an API
    if (email === "admin@infinitysignals.net" && password === "admin123") {
      const user: AdminUser = {
        id: "1",
        name: "Admin User",
        email: email,
        role: "admin",
        profileImage: null,
      };
      setAdminUser(user);
      localStorage.setItem("adminUser", JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setAdminUser(null);
    localStorage.removeItem("adminUser");
  };

  const updateProfileImage = (image: string) => {
    if (adminUser) {
      const updatedUser = { ...adminUser, profileImage: image };
      setAdminUser(updatedUser);
      localStorage.setItem("adminUser", JSON.stringify(updatedUser));
    }
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin: adminUser?.role === "admin",
        adminUser,
        login,
        logout,
        updateProfileImage,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

// ============================================
// ADMIN LOGIN MODAL COMPONENT
// ============================================

function AdminLoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t, isRTL } = useLanguage();
  const { login } = useAdmin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const success = login(email, password);
    if (success) {
      onClose();
    } else {
      setError(isRTL ? "بيانات الدخول غير صحيحة" : "Invalid credentials");
    }
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <Card className="w-full max-w-md border-0 shadow-2xl bg-white dark:bg-gray-800 animate-scale-in">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} text-gray-400 hover:text-gray-600 transition-colors`}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl">
                {isRTL ? "تسجيل دخول المشرف" : "Admin Login"}
              </CardTitle>
              <CardDescription>
                {isRTL ? "أدخل بيانات الاعتماد للمتابعة" : "Enter credentials to continue"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                {isRTL ? "البريد الإلكتروني" : "Email"}
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@infinitysignals.net"
                className="h-12"
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                {isRTL ? "كلمة المرور" : "Password"}
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-12"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {isRTL ? "جاري التحقق..." : "Verifying..."}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  {isRTL ? "دخول" : "Sign In"}
                </span>
              )}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              {isRTL ? "للتجربة: admin@infinitysignals.net / admin123" : "Demo: admin@infinitysignals.net / admin123"}
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// ============================================
// ADMIN PROFILE PICTURE SECTION
// ============================================

function AdminProfileSection() {
  const { t, isRTL, language } = useLanguage();
  const { isAdmin, adminUser, logout, updateProfileImage } = useAdmin();
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        updateProfileImage(result);
        setIsEditing(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // If not admin, show login button (hidden for regular users)
  if (!isAdmin) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-700/50 mb-6 border border-gray-600/50">
              <Lock className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4">
              {isRTL ? "منطقة المشرفين" : "Admin Area"}
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              {isRTL 
                ? "هذه المنطقة مخصصة للمشرفين فقط. قم بتسجيل الدخول للوصول إلى لوحة التحكم."
                : "This area is restricted to administrators only. Sign in to access the control panel."}
            </p>
            <Button
              onClick={() => setShowLoginModal(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <LogIn className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
              {isRTL ? "تسجيل دخول المشرف" : "Admin Sign In"}
            </Button>
          </div>
        </div>

        <AdminLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </section>
    );
  }

  // Admin is logged in - show profile section
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-1 mb-4">
            <Shield className="w-3 h-3 mr-1" />
            {isRTL ? "لوحة المشرف" : "Admin Panel"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {isRTL ? "الملف الشخصي للمشرف" : "Admin Profile"}
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            {isRTL 
              ? "إدارة صورة الملف الشخصية وإعدادات الحساب"
              : "Manage your profile picture and account settings"}
          </p>
        </div>

        {/* Profile Card */}
        <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl shadow-2xl overflow-hidden">
          <CardContent className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image Container */}
              <div
                className="relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Animated ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-slow" />
                
                {/* Main image container */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-700 bg-gray-900 transition-all duration-300 group-hover:border-purple-500">
                  {adminUser?.profileImage ? (
                    <Image
                      src={adminUser.profileImage}
                      alt="Admin Profile"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <User className="w-20 h-20 text-gray-600" />
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div 
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={triggerFileInput}
                  >
                    <div className="text-center text-white">
                      <Camera className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">
                        {isRTL ? "تغيير الصورة" : "Change Photo"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Edit button */}
                <button
                  onClick={triggerFileInput}
                  className={`absolute bottom-2 ${isRTL ? "left-2" : "right-2"} w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                    isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  aria-label={isRTL ? "تحميل صورة" : "Upload photo"}
                >
                  <Camera className="w-5 h-5 text-white" />
                </button>

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  aria-label="Upload profile image"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {adminUser?.name || (isRTL ? "المشرف" : "Administrator")}
                  </h3>
                  <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 w-fit mx-auto md:mx-0">
                    <Shield className="w-3 h-3 mr-1" />
                    {isRTL ? "مشرف نشط" : "Active Admin"}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-gray-400 mb-6">
                  <p className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail className="w-4 h-4" />
                    {adminUser?.email}
                  </p>
                  <p className="flex items-center gap-2 justify-center md:justify-start">
                    <User className="w-4 h-4" />
                    {isRTL ? "صلاحيات كاملة" : "Full Permissions"}
                  </p>
                </div>

                {/* Action buttons */}
                <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                  <Button
                    onClick={triggerFileInput}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Edit3 className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                    {isRTL ? "تعديل الصورة" : "Edit Photo"}
                  </Button>
                  <Button
                    onClick={logout}
                    variant="outline"
                    className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300"
                  >
                    <LogOut className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                    {isRTL ? "تسجيل الخروج" : "Sign Out"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-gray-700/50">
              {[
                { label: isRTL ? "المنتجات" : "Products", value: "24" },
                { label: isRTL ? "المستخدمين" : "Users", value: "1,234" },
                { label: isRTL ? "الطلبات" : "Orders", value: "567" },
                { label: isRTL ? "الإيرادات" : "Revenue", value: "$12K" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-colors duration-300"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <AdminLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </section>
  );
}

// ============================================
// HEADER COMPONENT (Updated with Admin Toggle)
// ============================================
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
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 m-[2px] rounded-lg">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400 mb-4 text-base">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`text-2xl font-bold ${service.price === "Free" || service.price === "مجاني" ? "text-green-600 dark:text-green-400" : "gradient-text"}`}>
                          {service.price}
                        </span>
                        <span className="text-gray-500 text-sm">{service.period}</span>
                      </div>
                      <Button
                        className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        {t.services.subscribe}
                        <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const { t } = useLanguage();

  const icons = [Award, Zap, Shield, Clock];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-800">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.items.map((feature, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={index}
                className="text-center group p-6 rounded-2xl hover:bg-gradient-to-b hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-700 transition-all duration-300"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
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
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.links.title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {t.links.subtitle}
          </p>
        </div>

        {/* Links Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Infinity Signals Card */}
          <a
            href="https://infinitysignals.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="group glassmorphism rounded-2xl p-6 md:p-8 hover:scale-105 transition-all duration-300 cursor-pointer block"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-yellow-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {t.links.infinitySignals.title}
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/80 mb-4">{t.links.infinitySignals.description}</p>
                <div className={`inline-flex items-center gap-2 text-yellow-300 font-semibold ${isRTL ? "flex-row-reverse" : ""}`}>
                  {t.links.visit}
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180" : ""}`} />
                </div>
              </div>
            </div>
          </a>

          {/* Algo Academy Card */}
          <a
            href="https://infinityalgoacademy.net/portal/"
            target="_blank"
            rel="noopener noreferrer"
            className="group glassmorphism rounded-2xl p-6 md:p-8 hover:scale-105 transition-all duration-300 cursor-pointer block"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {t.links.algoAcademy.title}
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/80 mb-4">{t.links.algoAcademy.description}</p>
                <div className={`inline-flex items-center gap-2 text-yellow-300 font-semibold ${isRTL ? "flex-row-reverse" : ""}`}>
                  {t.links.visit}
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180" : ""}`} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-6 md:p-8">
                {/* Rating Stars */}
                <div className={`flex gap-1 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Quote decoration */}
              <div className={`absolute -bottom-4 text-8xl text-gray-100 dark:text-gray-700 font-serif ${isRTL ? "left-4" : "right-4"}`}>
                &ldquo;
              </div>
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
      <AdminProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <main>
            <HeroSection />
            <AdminProfileSection />
            <ServicesSection />
            <FeaturesSection />
            <ExternalLinksSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </AdminProvider>
    </LanguageProvider>
  );
}
