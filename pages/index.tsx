import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Download,
  ExternalLink,
  Award,
  Book,
  Code,
  Users,
  MessageCircle,
  Send,
  User,
  Lock,
  Upload,
  Save,
  LogOut,
  Star,
  Zap,
  Target,
  TrendingUp,
  Brain,
  Rocket
} from 'lucide-react'
import {
  FloatingParticles,
  AnimatedText,
  StaggerContainer,
  StaggerItem,
  MorphingBlob,
  AnimatedSkillBar,
  TypewriterText,
  FloatingCard,
  MagneticButton,
  AnimatedCounter
} from '../components/AnimatedComponents'

// Types
interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Mock initial certificates
  useEffect(() => {
    const mockCertificates: Certificate[] = [
      {
        id: '1',
        title: 'Advanced Python Programming',
        issuer: 'Python Institute',
        date: '2023',
        image: '/api/placeholder/300/200',
        description: 'Advanced Python programming certification covering OOP, data structures, and algorithms.'
      },
      {
        id: '2',
        title: 'Machine Learning Specialization',
        issuer: 'Stanford University',
        date: '2023',
        image: '/api/placeholder/300/200',
        description: 'Comprehensive machine learning course covering supervised and unsupervised learning.'
      },
      {
        id: '3',
        title: 'Deep Learning with TensorFlow',
        issuer: 'TensorFlow',
        date: '2022',
        image: '/api/placeholder/300/200',
        description: 'Deep learning certification focusing on neural networks and TensorFlow framework.'
      }
    ]
    setCertificates(mockCertificates)
  }, [])

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ]

  // Skills data
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Data Science', level: 88 },
    { name: 'Deep Learning', level: 85 },
    { name: 'TensorFlow/PyTorch', level: 82 },
    { name: 'Django/Flask', level: 80 },
    { name: 'Computer Vision', level: 85 },
    { name: 'Teaching/Mentoring', level: 95 }
  ]

  // Experience data
  const experiences = [
    {
      title: 'PhD Scholar - Computer Vision & AI',
      company: 'University Research',
      period: '2020 - Present',
      description: 'Conducting cutting-edge research in computer vision and artificial intelligence, with focus on deep learning applications.',
      skills: ['Research', 'Computer Vision', 'Deep Learning', 'Publication Writing']
    },
    {
      title: 'Senior Python Developer',
      company: 'Tech Solutions Inc.',
      period: '2018 - 2020',
      description: 'Led development of machine learning applications and mentored junior developers.',
      skills: ['Python', 'Machine Learning', 'Team Leadership', 'Code Review']
    },
    {
      title: 'Python Tutor & Instructor',
      company: 'Freelance',
      period: '2017 - Present',
      description: 'Teaching Python programming, data science, and machine learning to students and professionals worldwide.',
      skills: ['Teaching', 'Curriculum Development', 'Python', 'Data Science']
    },
    {
      title: 'Data Scientist',
      company: 'Analytics Pro',
      period: '2016 - 2018',
      description: 'Developed predictive models and data analysis solutions for various industries.',
      skills: ['Data Analysis', 'Statistical Modeling', 'Python', 'SQL']
    }
  ]

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setContactForm({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  // Admin login handler
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would be a secure authentication
    if (adminPassword === 'admin123') {
      setIsAdminMode(true)
      setShowAdminLogin(false)
      setAdminPassword('')
    } else {
      alert('Invalid password')
    }
  }

  // Add certificate handler
  const handleAddCertificate = () => {
    const title = prompt('Certificate Title:')
    const issuer = prompt('Issuer:')
    const date = prompt('Date:')
    const description = prompt('Description:')
    
    if (title && issuer && date && description) {
      const newCertificate: Certificate = {
        id: Date.now().toString(),
        title,
        issuer,
        date,
        description,
        image: '/api/placeholder/300/200'
      }
      setCertificates([...certificates, newCertificate])
    }
  }

  return (
    <>
      <Head>
        <title>Umair Ali | Best Python Tutor & Machine Learning Expert in Pakistan</title>
        <meta name="description" content="Umair Ali - PhD Scholar, Expert Python Tutor, Machine Learning Specialist, and Data Science Instructor. Best Python teacher for exam preparation, programming, and AI/ML training in Pakistan." />
        <meta name="keywords" content="best python tutor, python teacher, python instructor, machine learning expert, data science tutor, python exam preparation, AI tutor, deep learning instructor, python programming course, computer vision expert, pakistan python tutor, online python classes" />
        <meta name="author" content="Umair Ali" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="EN" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umairali.me/" />
        <meta property="og:title" content="Umair Ali | Best Python Tutor & Machine Learning Expert" />
        <meta property="og:description" content="Expert Python tutoring, machine learning training, and data science instruction. PhD scholar specializing in AI and computer vision." />
        <meta property="og:image" content="https://umairali.me/og-image.jpg" />
        <meta property="og:site_name" content="Umair Ali - Python Expert" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://umairali.me/" />
        <meta property="twitter:title" content="Umair Ali | Best Python Tutor & Machine Learning Expert" />
        <meta property="twitter:description" content="Expert Python tutoring, machine learning training, and data science instruction." />
        <meta property="twitter:image" content="https://umairali.me/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Gujrat, Pakistan" />
        <meta name="geo.position" content="32.5734;74.0755" />
        <meta name="ICBM" content="32.5734, 74.0755" />
        
        <link rel="canonical" href="https://umairali.me/" />
        <link rel="alternate" hrefLang="en" href="https://umairali.me/" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Umair Ali",
              "url": "https://umairali.me",
              "sameAs": [
                "https://github.com/umairali",
                "https://linkedin.com/in/umairali",
                "https://twitter.com/umairali"
              ],
              "jobTitle": "Python Tutor & Machine Learning Expert",
              "description": "PhD Scholar specializing in Computer Vision and AI, Expert Python Developer, Machine Learning Specialist, and Professional Python Tutor",
              "knowsAbout": [
                "Python Programming",
                "Machine Learning",
                "Data Science",
                "Deep Learning",
                "Computer Vision",
                "Artificial Intelligence",
                "Teaching",
                "Tutoring"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gujrat",
                "addressCountry": "Pakistan"
              },
              "offers": {
                "@type": "Offer",
                "description": "Python tutoring, machine learning training, data science instruction, exam preparation"
              }
            })
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-900">Umair Ali</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={() => setShowAdminLogin(true)}
                  className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <User className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setShowAdminLogin(true)
                  setIsMenuOpen(false)
                }}
                className="text-gray-500 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Admin
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            <form onSubmit={handleAdminLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAdminLogin(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white relative overflow-hidden">
        <FloatingParticles />
        
        {/* Animated background blobs */}
        <MorphingBlob className="w-96 h-96 -top-48 -left-48" />
        <MorphingBlob className="w-80 h-80 -bottom-40 -right-40" />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-20 h-20 border-2 border-white/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-16 h-16 border-2 border-white/20 transform rotate-45"
        />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.25, 0, 1] }}
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-100 mb-6 border border-white/20"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Top Rated Python Tutor</span>
            </motion.div>

            {/* Main heading with creative animation */}
            <div className="mb-8">
              <AnimatedText 
                text="Best Python Tutor"
                className="text-6xl md:text-8xl font-bold mb-4 leading-tight"
                delay={0.3}
              />
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl md:text-4xl font-normal text-primary-200 mb-4"
              >
                <TypewriterText 
                  texts={[
                    "Machine Learning Expert",
                    "AI Research Scholar", 
                    "Data Science Instructor",
                    "Python Programming Guru"
                  ]}
                  className="text-primary-200"
                />
              </motion.div>
            </div>

            {/* Animated description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl mb-10 text-primary-100 max-w-4xl mx-auto leading-relaxed"
            >
              PhD Scholar specializing in AI & Computer Vision. Transform your career with expert Python instruction, 
              machine learning mastery, and data science excellence.
            </motion.p>

            {/* Animated stats */}
            <StaggerContainer className="flex flex-wrap justify-center gap-8 mb-12" staggerDelay={0.2}>
              <StaggerItem className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-primary-200">Students Taught</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={7} suffix="+" />
                </div>
                <div className="text-primary-200">Years Experience</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <div className="text-primary-200">Success Rate</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-primary-200">Projects Completed</div>
              </StaggerItem>
            </StaggerContainer>

            {/* Animated buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <MagneticButton
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-white text-primary-900 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center text-lg shadow-2xl"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mr-3"
                >
                  <Rocket className="w-6 h-6" />
                </motion.div>
                Start Learning Today
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </MagneticButton>
              
              <MagneticButton
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 inline-flex items-center justify-center text-lg backdrop-blur-sm"
              >
                <Brain className="w-6 h-6 mr-3" />
                View Experience
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-2"
                >
                  ⚡
                </motion.div>
              </MagneticButton>
            </motion.div>

            {/* Floating social icons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="mt-12 flex justify-center space-x-6"
            >
              {[
                { icon: Github, href: "#", delay: 0 },
                { icon: Linkedin, href: "#", delay: 0.1 },
                { icon: Twitter, href: "#", delay: 0.2 },
                { icon: Mail, href: "#", delay: 0.3 },
              ].map(({ icon: Icon, href, delay }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 + delay }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="text-white hover:text-primary-300 text-2xl p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent"></div>
        <MorphingBlob className="w-64 h-64 -top-32 -right-32 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="text-center mb-16" staggerDelay={0.2}>
            <StaggerItem>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-800 rounded-full mb-6 font-medium"
              >
                <Target className="w-5 h-5 mr-2" />
                About Me
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <AnimatedText 
                text="Why Choose Me as Your Python Tutor?"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              />
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Passionate educator and researcher with extensive experience in Python programming, 
                machine learning, and data science instruction. Let me help you master Python and advance your career.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image with Creative Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Animated background rings */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-4 border-primary-200 -m-4"
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-primary-300 -m-8"
                />
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-2xl">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="/api/placeholder/400/500"
                    alt="Umair Ali - Python Tutor"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  
                  {/* Floating achievement badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-xl"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">
                        <AnimatedCounter end={500} suffix="+" />
                      </div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-xl"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">
                        <AnimatedCounter end={98} suffix="%" />
                      </div>
                      <div className="text-xs text-gray-600">Success</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content with Advanced Animations */}
            <div className="space-y-8">
              <StaggerContainer staggerDelay={0.15}>
                {[
                  {
                    icon: Award,
                    title: "PhD Scholar & Researcher",
                    description: "Currently pursuing PhD in Computer Vision and AI with cutting-edge research experience.",
                    color: "text-yellow-600"
                  },
                  {
                    icon: Users,
                    title: "500+ Students Taught",
                    description: "Successfully trained hundreds of students in Python programming and machine learning.",
                    color: "text-blue-600"
                  },
                  {
                    icon: Book,
                    title: "Comprehensive Curriculum",
                    description: "From basic Python to advanced ML/AI concepts, tailored to your learning goals.",
                    color: "text-green-600"
                  },
                  {
                    icon: Code,
                    title: "Industry Experience",
                    description: "Real-world development experience with practical, hands-on teaching approach.",
                    color: "text-purple-600"
                  }
                ].map((item, index) => (
                  <StaggerItem key={index} direction="right">
                    <FloatingCard 
                      className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                      delay={index * 0.1}
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-full bg-gray-50 ${item.color}`}
                      >
                        <item.icon className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </FloatingCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Specializations with Creative Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4 text-primary-300"
                >
                  <Zap className="w-8 h-8" />
                </motion.div>
                
                <h4 className="font-bold text-primary-900 mb-4 text-xl flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Specializations
                </h4>
                <StaggerContainer staggerDelay={0.1}>
                  {[
                    "Python Programming (Beginner to Advanced)",
                    "Machine Learning & Deep Learning",
                    "Data Science & Analytics",
                    "Computer Vision & AI",
                    "Exam Preparation & Interview Prep",
                    "Django & Flask Web Development"
                  ].map((spec, index) => (
                    <StaggerItem key={index} direction="left">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-primary-800 mb-2"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                          className="w-2 h-2 bg-primary-600 rounded-full mr-3"
                        />
                        <span className="font-medium">{spec}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 7 years of experience in software development, research, and education
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover-lift"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-primary-600 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="text-gray-500 font-medium mt-2 lg:mt-0">
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-lg">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/30 to-transparent"></div>
          <MorphingBlob className="w-96 h-96 -top-48 -left-48 opacity-20" />
          <MorphingBlob className="w-80 h-80 -bottom-40 -right-40 opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="text-center mb-16" staggerDelay={0.2}>
            <StaggerItem>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-800 rounded-full mb-6 font-medium"
              >
                <Code className="w-5 h-5 mr-2" />
                Technical Skills
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <AnimatedText 
                text="Expertise Across the Full Spectrum"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              />
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Master Python development and machine learning with comprehensive expertise across all major frameworks and technologies.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Skills Grid with Creative Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <FloatingCard 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <AnimatedSkillBar 
                  skill={skill.name}
                  level={skill.level}
                  delay={index * 0.2}
                />
              </FloatingCard>
            ))}
          </div>

          {/* Technology Icons with Floating Animation */}
          <StaggerContainer className="text-center" staggerDelay={0.1}>
            <StaggerItem>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "Python", icon: "🐍" },
                  { name: "TensorFlow", icon: "🧠" },
                  { name: "PyTorch", icon: "🔥" },
                  { name: "Django", icon: "🚀" },
                  { name: "Flask", icon: "⚡" },
                  { name: "Pandas", icon: "🐼" },
                  { name: "NumPy", icon: "🔢" },
                  { name: "OpenCV", icon: "👁️" },
                  { name: "Git", icon: "📂" },
                  { name: "Docker", icon: "🐳" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Jupyter", icon: "📊" }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors duration-300">
                        {tech.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Animated Achievement Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" staggerDelay={0.2}>
            {[
              {
                icon: Award,
                title: "Certified Expert",
                description: "Multiple certifications in Python and ML",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: TrendingUp,
                title: "Performance Focused",
                description: "Optimized code and efficient algorithms",
                color: "from-green-400 to-blue-500"
              },
              {
                icon: Users,
                title: "Teaching Excellence",
                description: "Proven track record of student success",
                color: "from-purple-400 to-pink-500"
              }
            ].map((achievement, index) => (
              <StaggerItem key={index}>
                <FloatingCard 
                  className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
                  delay={index * 0.2}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </FloatingCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center gap-4 mb-4">
              <h2 className="text-4xl font-bold text-gray-900">Certifications</h2>
              {isAdminMode && (
                <button
                  onClick={handleAddCertificate}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Add Certificate
                </button>
              )}
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional certifications and achievements in technology and education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Ready to start your Python journey? Let's discuss how I can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Tell me about your Python learning goals..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-primary-900 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-900 mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="text-green-300 text-center">Message sent successfully!</div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-300 text-center">Error sending message. Please try again.</div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-primary-300" />
                    <span>umair.ali@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-primary-300" />
                    <span>+92 300 1234567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-primary-300" />
                    <span>Gujrat, Pakistan</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-300 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-primary-300 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-primary-300 hover:text-white transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Quick Contact</h4>
                <p className="text-primary-200 mb-4">
                  Need immediate help? Click the button below to send me a quick message on WhatsApp.
                </p>
                <a
                  href="https://wa.me/923001234567?text=Hi%20Umair,%20I'm%20interested%20in%20Python%20tutoring"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admin Panel */}
      {isAdminMode && (
        <div className="fixed bottom-4 right-4 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Admin Mode</span>
            <button
              onClick={() => setIsAdminMode(false)}
              className="bg-primary-700 hover:bg-primary-800 p-1 rounded"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Umair Ali. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Best Python Tutor in Pakistan | Machine Learning Expert | Data Science Instructor
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
