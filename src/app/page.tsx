'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import {
  TrendingUp,
  Bot,
  BarChart3,
  GraduationCap,
  Settings,
  HeadphonesIcon,
  Shield,
  Zap,
  Globe,
  Award,
  ChevronUp,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  ArrowRight,
  Users,
  Target,
  PieChart,
  Send
} from 'lucide-react'

// Translation object
const translations = {
  en: {
    // Header
    brandName: 'Infinity Algo Power',
    nav: {
      home: 'Home',
      services: 'Services',
      team: 'Team',
      contact: 'Contact'
    },
    // Hero
    hero: {
      title: 'Unlock Your Trading Potential',
      titleHighlight: 'Infinity Algo Power',
      subtitle: 'Professional Trading Signals & Algorithmic Solutions',
      description: 'Empowering traders with cutting-edge technology, expert analysis, and proven strategies for consistent success in the financial markets.',
      cta1: 'Get Started',
      cta2: 'Learn More',
      stats: {
        traders: 'Active Traders',
        accuracy: 'Signal Accuracy',
        profit: 'Average Profit',
        countries: 'Countries'
      }
    },
    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive trading solutions tailored to your success',
      items: [
        {
          title: 'Trading Signals',
          description: 'Real-time, high-accuracy trading signals delivered directly to your device. Our expert analysts combine technical analysis with market sentiment to identify profitable opportunities.',
          icon: 'TrendingUp'
        },
        {
          title: 'Algorithmic Trading',
          description: 'Advanced automated trading systems that execute strategies 24/7. Our algorithms are designed to minimize risk while maximizing returns across multiple markets.',
          icon: 'Bot'
        },
        {
          title: 'Market Analysis',
          description: 'In-depth market research and analysis covering forex, stocks, commodities, and cryptocurrencies. Stay ahead with our comprehensive market insights.',
          icon: 'BarChart3'
        },
        {
          title: 'Trading Academy',
          description: 'Comprehensive educational programs for all skill levels. From beginner basics to advanced strategies, learn from industry experts and successful traders.',
          icon: 'GraduationCap'
        },
        {
          title: 'Trading Tools',
          description: 'Professional-grade trading tools and indicators. Custom-built solutions to enhance your analysis and improve decision-making.',
          icon: 'Settings'
        },
        {
          title: 'Technical Support',
          description: 'Dedicated support team available to assist you with any questions or issues. Get help with signals, platform setup, and strategy implementation.',
          icon: 'HeadphonesIcon'
        }
      ]
    },
    // CEO Section
    ceo: {
      title: 'Leadership',
      subtitle: 'Meet Our Visionary Leader',
      name: 'King Arios',
      role: 'CEO & Founder',
      description: 'With over 15 years of experience in financial markets and algorithmic trading, King Arios founded Infinity Algo Power with a vision to democratize professional trading tools. His expertise spans quantitative analysis, risk management, and developing cutting-edge trading algorithms that have consistently delivered exceptional results for clients worldwide.',
      highlight1: '15+ Years Experience',
      highlight2: 'Founded in 2018'
    },
    // Team Section
    team: {
      title: 'Our Team',
      subtitle: 'Expert professionals dedicated to your success',
      members: [
        {
          name: 'Jeremy',
          role: 'Development Lead',
          description: 'Full-stack developer specializing in trading systems and algorithm optimization.'
        },
        {
          name: 'Ryan',
          role: 'Financial Analyst',
          description: 'Expert market analyst with deep knowledge of global financial markets.'
        },
        {
          name: 'Milano',
          role: 'Marketing Director',
          description: 'Strategic marketing professional driving brand growth and community engagement.'
        },
        {
          name: 'Samiha',
          role: 'Customer Success',
          description: 'Dedicated to ensuring every client achieves their trading goals.'
        }
      ]
    },
    // Features
    features: {
      title: 'Why Choose Us',
      subtitle: 'The Infinity Algo Power advantage',
      items: [
        {
          title: 'Proven Accuracy',
          description: 'Our signals maintain an industry-leading accuracy rate, backed by transparent performance tracking.',
          icon: 'Target'
        },
        {
          title: '24/7 Support',
          description: 'Round-the-clock assistance from our expert team whenever you need help.',
          icon: 'HeadphonesIcon'
        },
        {
          title: 'Global Community',
          description: 'Join thousands of successful traders from around the world in our exclusive community.',
          icon: 'Globe'
        },
        {
          title: 'Award Winning',
          description: 'Recognized excellence in trading education and signal services.',
          icon: 'Award'
        }
      ]
    },
    // Testimonials
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Success stories from our trading community',
      items: [
        {
          name: 'Ahmed Hassan',
          role: 'Professional Trader',
          content: 'Infinity Algo Power transformed my trading journey. Their signals are incredibly accurate, and the support team is always there when I need them. I have seen consistent profits since joining.',
          rating: 5
        },
        {
          name: 'Sarah Mitchell',
          role: 'Retail Investor',
          content: 'The Trading Academy is exceptional. I went from a complete beginner to confidently managing my own portfolio. The education quality is unmatched.',
          rating: 5
        },
        {
          name: 'Mohammed Al-Rashid',
          role: 'Fund Manager',
          content: 'Their algorithmic solutions have revolutionized how we approach the markets. The risk-adjusted returns have exceeded our expectations consistently.',
          rating: 5
        }
      ]
    },
    // Contact
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to elevate your trading? Contact us today',
      newsletter: {
        title: 'Subscribe to Our Newsletter',
        description: 'Get the latest market insights, trading tips, and exclusive offers delivered to your inbox.',
        placeholder: 'Enter your email',
        button: 'Subscribe'
      },
      info: {
        email: 'contact@infinityalgopower.com',
        phone: '+1 (555) 123-4567',
        address: 'Dubai International Financial Centre, UAE'
      }
    },
    // Footer
    footer: {
      description: 'Professional trading signals, market analysis, and algorithmic trading solutions for traders worldwide.',
      links: {
        title: 'Quick Links',
        items: ['Home', 'Services', 'Team', 'Contact']
      },
      services: {
        title: 'Services',
        items: ['Trading Signals', 'Algorithmic Trading', 'Market Analysis', 'Trading Academy']
      },
      copyright: '© 2024 Infinity Algo Power. All rights reserved.'
    }
  },
  ar: {
    // Header
    brandName: 'إنفينيتي ألجو باور',
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      team: 'الفريق',
      contact: 'تواصل معنا'
    },
    // Hero
    hero: {
      title: 'افتح إمكانياتك في التداول',
      titleHighlight: 'إنفينيتي ألجو باور',
      subtitle: 'إشارات تداول احترافية وحلول خوارزمية',
      description: 'نمكّن المتداولين بأحدث التقنيات والتحليلات الخبيرة والاستراتيجيات المثبتة لتحقيق النجاح المستمر في الأسواق المالية.',
      cta1: 'ابدأ الآن',
      cta2: 'اعرف المزيد',
      stats: {
        traders: 'متداول نشط',
        accuracy: 'دقة الإشارات',
        profit: 'متوسط الربح',
        countries: 'دولة'
      }
    },
    // Services
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول تداول شاملة مصممة لنجاحك',
      items: [
        {
          title: 'إشارات التداول',
          description: 'إشارات تداول عالية الدقة في الوقت الحقيقي تصل مباشرة إلى جهازك. يجمع محللونا الخبراء بين التحليل الفني ومعنويات السوق لتحديد الفرص المربحة.',
          icon: 'TrendingUp'
        },
        {
          title: 'التداول الخوارزمي',
          description: 'أنظمة تداول آلية متقدمة تنفذ الاستراتيجيات على مدار الساعة. خوارزمياتنا مصممة لتقليل المخاطر مع تعظيم العوائد عبر أسواق متعددة.',
          icon: 'Bot'
        },
        {
          title: 'تحليل السوق',
          description: 'بحث وتحليل معمق للسوق يغطي الفوركس والأسهم والسلع والعملات الرقمية. ابقَ في المقدمة مع رؤيتنا الشاملة للسوق.',
          icon: 'BarChart3'
        },
        {
          title: 'أكاديمية التداول',
          description: 'برامج تعليمية شاملة لجميع المستويات. من أساسيات المبتدئين إلى الاستراتيجيات المتقدمة، تعلم من خبراء الصناعة والمتداولين الناجحين.',
          icon: 'GraduationCap'
        },
        {
          title: 'أدوات التداول',
          description: 'أدوات ومؤشرات تداول بمستوى احترافي. حلول مخصصة لتحسين تحليلك واتخاذ قرارات أفضل.',
          icon: 'Settings'
        },
        {
          title: 'الدعم الفني',
          description: 'فريق دعم متخصص متاح لمساعدتك في أي أسئلة أو مشاكل. احصل على المساعدة في الإشارات وإعداد المنصة وتنفيذ الاستراتيجيات.',
          icon: 'HeadphonesIcon'
        }
      ]
    },
    // CEO Section
    ceo: {
      title: 'القيادة',
      subtitle: 'تعرف على قائدنا الملهم',
      name: 'كينغ اريوس',
      role: 'المدير التنفيذي والمؤسس',
      description: 'بخبرة تتجاوز 15 عاماً في الأسواق المالية والتداول الخوارزمي، أسس كينغ اريوس إنفينيتي ألجو باور برؤية لدمقرطة أدوات التداول الاحترافية. تشمل خبرته التحليل الكمي وإدارة المخاطر وتطوير خوارزميات تداول متطورة حققت نتائج استثنائية باستمرار للعملاء حول العالم.',
      highlight1: '+15 عام خبرة',
      highlight2: 'تأسست في 2018'
    },
    // Team Section
    team: {
      title: 'فريقنا',
      subtitle: 'محترفون خبراء مكرسون لنجاحك',
      members: [
        {
          name: 'جيريمي',
          role: 'قائد التطوير',
          description: 'مطور متكامل متخصص في أنظمة التداول وتحسين الخوارزميات.'
        },
        {
          name: 'ريان',
          role: 'محلل مالي',
          description: 'محلل سوق خبير بمعرفة عميقة بالأسواق المالية العالمية.'
        },
        {
          name: 'ميلانو',
          role: 'مدير التسويق',
          description: 'محترف تسويق استراتيجي ي推动 نمو العلامة التجارية وتفاعل المجتمع.'
        },
        {
          name: 'سميحة',
          role: 'نجاح العملاء',
          description: 'مكرسة لضمان تحقيق كل عميل لأهداف تداوله.'
        }
      ]
    },
    // Features
    features: {
      title: 'لماذا تختارنا',
      subtitle: 'ميزة إنفينيتي ألجو باور',
      items: [
        {
          title: 'دقة مثبتة',
          description: 'تحافظ إشاراتنا على معدل دقة رائد في الصناعة، مدعوم بتتبع أداء شفاف.',
          icon: 'Target'
        },
        {
          title: 'دعم على مدار الساعة',
          description: 'مساعدة على مدار الساعة من فريقنا الخبير كلما احتجت للمساعدة.',
          icon: 'HeadphonesIcon'
        },
        {
          title: 'مجتمع عالمي',
          description: 'انضم إلى آلاف المتداولين الناجحين من جميع أنحاء العالم في مجتمعنا الحصري.',
          icon: 'Globe'
        },
        {
          title: 'حائز على جوائز',
          description: 'تميز معترف به في تعليم التداول وخدمات الإشارات.',
          icon: 'Award'
        }
      ]
    },
    // Testimonials
    testimonials: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'قصص نجاح من مجتمع التداول لدينا',
      items: [
        {
          name: 'أحمد حسن',
          role: 'متداول محترف',
          content: 'حوّلت إنفينيتي ألجو باور رحلتي في التداول. إشاراتهم دقيقة بشكل لا يصدق، وفريق الدعم موجود دائماً عندما أحتاجهم. أرى أرباحاً مستمرة منذ انضمامي.',
          rating: 5
        },
        {
          name: 'سارة ميتشل',
          role: 'مستثمر فردي',
          content: 'أكاديمية التداول استثنائية. انتقلت من مبتدئة كاملة إلى إدارة محفظتي بثقة. جودة التعليم لا مثيل لها.',
          rating: 5
        },
        {
          name: 'محمد الراشد',
          role: 'مدير صندوق',
          content: 'حلولهم الخوارزمية أحدثت ثورة في كيفية تعاملنا مع الأسواق. العوائد المعدلة حسب المخاطر فاقت توقعاتنا باستمرار.',
          rating: 5
        }
      ]
    },
    // Contact
    contact: {
      title: 'تواصل معنا',
      subtitle: 'مستعد لرفع مستوى تداولك؟ تواصل معنا اليوم',
      newsletter: {
        title: 'اشترك في نشرتنا الإخبارية',
        description: 'احصل على أحدث رؤى السوق ونصائح التداول والعروض الحصرية في بريدك الإلكتروني.',
        placeholder: 'أدخل بريدك الإلكتروني',
        button: 'اشترك'
      },
      info: {
        email: 'contact@infinityalgopower.com',
        phone: '+1 (555) 123-4567',
        address: 'مركز دبي المالي العالمي، الإمارات'
      }
    },
    // Footer
    footer: {
      description: 'إشارات تداول احترافية وتحليل السوق وحلول التداول الخوارزمي للمتداولين حول العالم.',
      links: {
        title: 'روابط سريعة',
        items: ['الرئيسية', 'الخدمات', 'الفريق', 'تواصل معنا']
      },
      services: {
        title: 'الخدمات',
        items: ['إشارات التداول', 'التداول الخوارزمي', 'تحليل السوق', 'أكاديمية التداول']
      },
      copyright: '© 2024 إنفينيتي ألجو باور. جميع الحقوق محفوظة.'
    }
  }
}

type Language = 'en' | 'ar'
type Translations = typeof translations.en

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Bot,
  BarChart3,
  GraduationCap,
  Settings,
  HeadphonesIcon,
  Target,
  Globe,
  Award
}

// SVG Logo Component
const Logo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e40af" />
        <stop offset="50%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Infinity symbol */}
    <path
      d="M50 60c-15 0-25-10-25-20s10-20 25-20 25 10 25 20-10 20-25 20z"
      stroke="url(#logoGradient)"
      strokeWidth="6"
      fill="none"
    />
    <path
      d="M50 60c15 0 25-10 25-20s-10-20-25-20-25 10-25 20 10 20 25 20z"
      stroke="url(#logoGradient)"
      strokeWidth="6"
      fill="none"
    />
    {/* Rising chart arrow */}
    <path
      d="M30 75 L45 60 L55 65 L70 45"
      stroke="url(#logoGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M70 45 L70 55 L80 45 L70 45"
      fill="url(#logoGradient)"
    />
  </svg>
)

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return { count, ref }
}

// Avatar component using DiceBear
const Avatar = ({ name, className = '' }: { name: string; className?: string }) => {
  const seed = name.toLowerCase().replace(/\s+/g, '')
  return (
    <img
      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=7c3aed,1e40af,f59e0b`}
      alt={name}
      className={className}
    />
  )
}

export default function Home() {
  const [lang, setLang] = useState<Language>('en')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [email, setEmail] = useState('')
  
  const t: Translations = translations[lang]
  const isRTL = lang === 'ar'

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Counter refs
  const tradersCounter = useCounter(5000)
  const accuracyCounter = useCounter(92)
  const profitCounter = useCounter(45)
  const countriesCounter = useCounter(85)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing:', email)
    setEmail('')
  }

  return (
    <div 
      className={`min-h-screen bg-background font-sans ${isRTL ? 'font-cairo rtl' : 'font-inter ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10 sm:w-12 sm:h-12" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                {t.brandName}
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {t.nav.team}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {t.nav.contact}
              </button>
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {lang === 'en' ? 'AR' : 'EN'}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-foreground"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50">
            <nav className="flex flex-col py-4 px-4 gap-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                {t.nav.team}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                {t.nav.contact}
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-amber-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent" />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl animate-pulse delay-500" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-700/10 via-purple-600/10 to-amber-500/10 border border-purple-500/20 mb-6">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-foreground/80">{t.hero.subtitle}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">{t.hero.title}</span>
                <br />
                <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              
              <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 hover:opacity-90 text-white px-8 py-6 text-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  {t.hero.cta1}
                  <ArrowRight className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500/50 hover:bg-purple-500/10 px-8 py-6 text-lg"
                  onClick={() => scrollToSection('services')}
                >
                  {t.hero.cta2}
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { value: tradersCounter.count, suffix: '+', label: t.hero.stats.traders, ref: tradersCounter.ref },
                { value: accuracyCounter.count, suffix: '%', label: t.hero.stats.accuracy, ref: accuracyCounter.ref },
                { value: profitCounter.count, suffix: '%', label: t.hero.stats.profit, ref: profitCounter.ref },
                { value: countriesCounter.count, suffix: '+', label: t.hero.stats.countries, ref: countriesCounter.ref }
              ].map((stat, index) => (
                <div
                  key={index}
                  ref={stat.ref}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-background to-muted border border-border/50 backdrop-blur-sm hover:scale-105 transition-transform"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-700/5 via-purple-600/5 to-amber-500/5" />
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                {t.services.title}
              </span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.services.items.map((service, index) => {
              const IconComponent = iconMap[service.icon] || TrendingUp
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700/5 via-purple-600/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-700 via-purple-600 to-amber-500 p-0.5 mb-6">
                      <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:via-purple-600 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-amber-900/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                {t.ceo.title}
              </span>
            </h2>
            <p className="text-lg text-foreground/70">{t.ceo.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-border/50">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-square md:aspect-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-600 to-amber-500 opacity-20" />
                    <Avatar name="King Arios CEO" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                      {t.ceo.name}
                    </h3>
                    <p className="text-purple-600 font-medium mb-6">{t.ceo.role}</p>
                    <p className="text-foreground/70 leading-relaxed mb-8">
                      {t.ceo.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-700/10 border border-blue-700/20">
                        <Award className="w-4 h-4 text-blue-700" />
                        <span className="text-sm font-medium">{t.ceo.highlight1}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <PieChart className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium">{t.ceo.highlight2}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                {t.team.title}
              </span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t.team.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {t.team.members.map((member, index) => (
              <Card
                key={index}
                className="group text-center overflow-hidden border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-700 via-purple-600 to-amber-500 p-0.5">
                      <div className="w-full h-full rounded-full overflow-hidden bg-background">
                        <Avatar name={member.name} className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:via-purple-600 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-amber-900/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                {t.features.title}
              </span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {t.features.items.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Shield
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-background to-muted border border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 via-purple-600 to-amber-500 p-0.5 mx-auto mb-6">
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                {t.testimonials.title}
              </span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-border/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-700/10 via-purple-600/10 to-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <CardContent className="p-6 sm:p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar name={testimonial.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-amber-900/10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Newsletter */}
            <Card className="border-border/50">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-purple-600 to-amber-500 p-0.5">
                    <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t.contact.newsletter.title}</h3>
                </div>
                <p className="text-foreground/70 mb-6">
                  {t.contact.newsletter.description}
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <Input
                    type="email"
                    placeholder={t.contact.newsletter.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 hover:opacity-90 text-white"
                  >
                    <Send className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {t.contact.newsletter.button}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: t.contact.info.email, href: `mailto:${t.contact.info.email}` },
                { icon: Phone, label: t.contact.info.phone, href: `tel:${t.contact.info.phone}` },
                { icon: MapPin, label: t.contact.info.address }
              ].map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-purple-500/50 transition-colors">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-purple-600 to-amber-500 p-0.5 flex-shrink-0">
                        <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        {item.href ? (
                          <a href={item.href} className="text-foreground hover:text-purple-600 transition-colors font-medium">
                            {item.label}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.label}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-16 pb-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Logo className="w-10 h-10" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                  {t.brandName}
                </span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                {t.footer.description}
              </p>
              <div className="flex gap-3">
                {[Twitter, Linkedin, Instagram, Facebook].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-700 hover:via-purple-600 hover:to-amber-500 group transition-all"
                  >
                    <Icon className="w-4 h-4 text-foreground/70 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">{t.footer.links.title}</h4>
              <ul className="space-y-3">
                {t.footer.links.items.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-foreground/70 hover:text-purple-600 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-foreground mb-4">{t.footer.services.title}</h4>
              <ul className="space-y-3">
                {t.footer.services.items.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-foreground/70 hover:text-purple-600 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div>
              <h4 className="font-bold text-foreground mb-4">
                {lang === 'en' ? 'Our Impact' : 'تأثيرنا'}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-foreground/70">5,000+ {lang === 'en' ? 'Traders' : 'متداول'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-foreground/70">92% {lang === 'en' ? 'Accuracy' : 'دقة'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-700" />
                  <span className="text-sm text-foreground/70">85+ {lang === 'en' ? 'Countries' : 'دولة'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-foreground/60 text-sm">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rtl:right-auto rtl:left-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 via-purple-600 to-amber-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
