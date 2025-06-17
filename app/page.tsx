"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Cpu,
  Users,
  Globe,
  GraduationCap,
  Trophy,
  Languages,
  Award,
  Zap,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
} from "lucide-react"

// Translation data
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",

    // Hero Section
    heroTitle: "Advanced Technologies",
    heroSubtitle: "Engineer",
    heroDescription:
      "Bridging engineering excellence with cutting-edge web development. Specializing in Energy Systems, Clean Technologies, and Full-Stack Development.",
    viewMyWork: "View My Work",
    getInTouch: "Get In Touch",

    // About Section
    aboutTitle: "About Me",
    aboutText1:
      "I'm a final-year engineering student at ENSTAB, specializing in Energy Systems and Clean Technologies. My passion lies in combining traditional engineering principles with modern web development to create innovative solutions for real-world challenges.",
    aboutText2:
      "With hands-on experience in full-stack development and a strong foundation in thermodynamics, heat transfer, and energy conversion, I bring a unique perspective to both technical and engineering projects.",
    internships: "Internships",
    projectsCount: "Projects",
    leadershipRoles: "Leadership Roles",
    languagesCount: "Languages",
    coreExpertise: "Core Expertise",
    energySystems: "Energy Systems & Clean Technologies",
    fullStackDev: "Full-Stack Web Development",
    databaseDesign: "Database Design & Management",
    teamLeadership: "Team Leadership & Project Management",

    // Skills Section
    technicalSkills: "Technical Skills",
    programmingLanguages: "Programming Languages",
    toolsTechnologies: "Tools & Technologies",
    engineering: "Engineering",
    engineeringDesc: "Thermodynamics, Heat Transfer, Fluid Mechanics",
    leadership: "Leadership",
    leadershipDesc: "Team Management, Event Organization",
    innovation: "Innovation",
    innovationDesc: "Problem Solving, Creative Thinking",
    languagesSkill: "Languages",
    languagesDesc: "Arabic, English, French, German",

    // Experience Section
    professionalExperience: "Professional Experience",
    experiences: {
      coficab: {
        title: "Energy Management Systems Intern",
        company: "COFICAB",
        period: "February 2025 – August 2025",
        description:
          "Currently developing an ISO 50001 compliant energy management and monitoring system, focusing on digitalization of energy processes and automated reporting.",
      },
      smartegy: {
        title: "Web Developer Intern",
        company: "Smartegy",
        period: "July 2024 – August 2024",
        description:
          "Developed web applications using Next.js and Tailwind CSS, contributing to full-stack development projects.",
      },
      ieee2024: {
        title: "Web Development Intern",
        company: "IEEE Tunisia Section",
        period: "July 2024 – August 2024",
        description:
          "Completed development of IEEE Tunisia Section website, significantly improving functionality and user experience. Developed payment/refund system using React and Node.js.",
      },
      ieee2023: {
        title: "Web Development Intern",
        company: "IEEE Tunisia Section",
        period: "July 2023 – September 2023",
        description:
          "Contributed to web development projects for IEEE Tunisia Section, gaining experience in modern web technologies and collaborative development practices.",
      },
      tunisietelecom: {
        title: "Summer Intern",
        company: "Tunisie Telecom",
        period: "July 2024 – August 2024",
        description:
          "Resolved client network and internet issues using theoretical knowledge; gained insights into line construction and transmission center operations.",
      },
    },

    // Projects Section
    featuredProjects: "Featured Projects",
    endOfStudiesInternship: "End-of-Studies Internship",
    coficabProject: {
      title: "COFICAB Energy Management System",
      subtitle: "ISO 50001 Compliance & Digital Transformation",
      description:
        "Comprehensive digitalization of energy management and monitoring system according to ISO 50001 standards, featuring automated reporting, energy data centralization, and intelligent document processing.",
      keyResponsibilities: "Key Responsibilities",
      responsibilities: [
        "Centralization of energy data on a software platform",
        "Development of recognition, extraction and analysis tool for energy invoice fields (paper and PDF) and integration with energy management system",
        "Automation of reports compliant with ISO 50001 requirements",
        "Digitalization of energy review and energy planning process (IPEs, SER, Data collection plan, etc.) in accordance with ISO 50001 standard",
        "Digitalization of management part and design of energy projects as well as monitoring action plans",
      ],
      technologiesUsed: "Technologies Used",
      keyAchievements: "Key Achievements",
      achievements: ["ISO 50001 Compliance", "Automated Reporting", "Digital Transformation"],
      viewTechnicalDetails: "View Technical Details",
      downloadReport: "Download Report",
    },
    universityWebsite: {
      title: "University Website Development",
      description:
        "Secure and user-friendly website allowing students to access course materials with modern authentication.",
    },
    roboticHand: {
      title: "Main robotique alimentée par l'IA",
      description:
        "AI-powered robotic hand with gesture recognition, ensuring precise movement and rotation control through advanced mechanical and electrical design.",
    },

    // Education & Achievements
    educationAchievements: "Education & Achievements",
    education: "Education",
    achievements: "Achievements",
    nationalEngineering: "National Engineering Degree",
    enstab: "ENSTAB - Borj Cédria",
    advancedTech: "Advanced Technologies - Energy Systems & Clean Technologies",
    preparatoryCycle: "Preparatory Cycle",
    ipeib: "IPEIB - Bizerte",
    mathPhysics: "Mathematics, Physics",
    achievementsList: {
      ieee28th: {
        title: "28th Place Nationally",
        subtitle: "IEEE XTREME 17.0 Programming Competition",
      },
      ensta2nd: {
        title: "2nd Place",
        subtitle: "ENSTA Challenge 2.0 Programming Competition",
      },
      nvidia: {
        title: "NVIDIA DLI Certificate",
        subtitle: "Deep Learning Fundamentals",
      },
      ieeeRecognition: {
        title: "IEEE Recognition",
        subtitle: "Accounting Platform Development",
      },
    },

    // Contact Section
    letsWorkTogether: "Let's Work Together",
    contactDescription:
      "I'm actively seeking opportunities to apply my engineering and development skills. Let's discuss how I can contribute to your team and create innovative solutions together.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    sendEmail: "Send Email",
    callMe: "Call Me",

    // Footer
    allRightsReserved: "All rights reserved. Built with Next.js & Tailwind CSS.",
  },
  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    projects: "Projets",
    contact: "Contact",

    // Hero Section
    heroTitle: "Technologies",
    heroSubtitle: "Avancées",
    heroDescription:
      "Alliant l'excellence en ingénierie avec le développement web de pointe. Spécialisé en Systèmes Énergétiques, Technologies Propres et Développement Full-Stack.",
    viewMyWork: "Voir Mon Travail",
    getInTouch: "Me Contacter",

    // About Section
    aboutTitle: "À Propos de Moi",
    aboutText1:
      "Je suis étudiant ingénieur en dernière année à l'ENSTAB, spécialisé en Systèmes Énergétiques et Technologies Propres. Ma passion consiste à combiner les principes d'ingénierie traditionnels avec le développement web moderne pour créer des solutions innovantes aux défis du monde réel.",
    aboutText2:
      "Avec une expérience pratique en développement full-stack et une base solide en thermodynamique, transfert de chaleur et conversion d'énergie, j'apporte une perspective unique aux projets techniques et d'ingénierie.",
    internships: "Stages",
    projectsCount: "Projets",
    leadershipRoles: "Rôles de Leadership",
    languagesCount: "Langues",
    coreExpertise: "Expertise Principale",
    energySystems: "Systèmes Énergétiques & Technologies Propres",
    fullStackDev: "Développement Web Full-Stack",
    databaseDesign: "Conception & Gestion de Bases de Données",
    teamLeadership: "Leadership d'Équipe & Gestion de Projet",

    // Skills Section
    technicalSkills: "Compétences Techniques",
    programmingLanguages: "Langages de Programmation",
    toolsTechnologies: "Outils & Technologies",
    engineering: "Ingénierie",
    engineeringDesc: "Thermodynamique, Transfert de Chaleur, Mécanique des Fluides",
    leadership: "Leadership",
    leadershipDesc: "Gestion d'Équipe, Organisation d'Événements",
    innovation: "Innovation",
    innovationDesc: "Résolution de Problèmes, Pensée Créative",
    languagesSkill: "Langues",
    languagesDesc: "Arabe, Anglais, Français, Allemand",

    // Experience Section
    professionalExperience: "Expérience Professionnelle",
    experiences: {
      coficab: {
        title: "Stagiaire Systèmes de Gestion Énergétique",
        company: "COFICAB",
        period: "Février 2025 – Août 2025",
        description:
          "Développement en cours d'un système de gestion et de surveillance énergétique conforme à la norme ISO 50001, axé sur la digitalisation des processus énergétiques et les rapports automatisés.",
      },
      smartegy: {
        title: "Stagiaire Développeur Web",
        company: "Smartegy",
        period: "Juillet 2024 – Août 2024",
        description:
          "Développement d'applications web utilisant Next.js et Tailwind CSS, contribuant aux projets de développement full-stack.",
      },
      ieee2024: {
        title: "Stagiaire Développement Web",
        company: "IEEE Tunisia Section",
        period: "Juillet 2024 – Août 2024",
        description:
          "Achèvement du développement du site web de la section IEEE Tunisie, améliorant considérablement les fonctionnalités et l'expérience utilisateur. Développement d'un système de paiement/remboursement utilisant React et Node.js.",
      },
      ieee2023: {
        title: "Stagiaire Développement Web",
        company: "IEEE Tunisia Section",
        period: "Juillet 2023 – Septembre 2023",
        description:
          "Contribution aux projets de développement web pour la section IEEE Tunisie, acquérant de l'expérience dans les technologies web modernes et les pratiques de développement collaboratif.",
      },
      tunisietelecom: {
        title: "Stagiaire d'Été",
        company: "Tunisie Telecom",
        period: "Juillet 2024 – Août 2024",
        description:
          "Résolution des problèmes de réseau client et d'Internet en utilisant des connaissances théoriques ; acquisition de connaissances sur la construction de lignes et les opérations des centres de transmission.",
      },
    },

    // Projects Section
    featuredProjects: "Projets Vedettes",
    endOfStudiesInternship: "Stage de Fin d'Études",
    coficabProject: {
      title: "Système de Gestion Énergétique COFICAB",
      subtitle: "Conformité ISO 50001 & Transformation Numérique",
      description:
        "Digitalisation complète du système de gestion et de surveillance énergétique selon les normes ISO 50001, avec rapports automatisés, centralisation des données énergétiques et traitement intelligent des documents.",
      keyResponsibilities: "Responsabilités Clés",
      responsibilities: [
        "Centralisation des données énergétiques sur une plateforme logicielle",
        "Développement d'un outil de reconnaissance, d'extraction et d'analyse des champs des factures énergétiques papier et PDF et intégration avec le système de gestion énergétique",
        "Automatisation des rapports conformes aux exigences de l'ISO 50001",
        "Digitalisation de la revue énergétique et le processus de planification énergétique (IPEs, SER, Plan de collecte de données, etc.) conformément à la norme ISO 50001",
        "Digitalisation de la partie gestion et conception des projets énergétiques ainsi que le suivi des plans d'action",
      ],
      technologiesUsed: "Technologies Utilisées",
      keyAchievements: "Réalisations Clés",
      achievements: ["Conformité ISO 50001", "Rapports Automatisés", "Transformation Numérique"],
      viewTechnicalDetails: "Voir Détails Techniques",
      downloadReport: "Télécharger Rapport",
    },
    universityWebsite: {
      title: "Développement de Site Web Universitaire",
      description:
        "Site web sécurisé et convivial permettant aux étudiants d'accéder au matériel de cours avec authentification moderne.",
    },
    roboticHand: {
      title: "Main robotique alimentée par l'IA",
      description:
        "Main robotique alimentée par l'IA avec reconnaissance gestuelle, garantissant un contrôle précis des mouvements et de la rotation grâce à une conception mécanique et électrique avancée.",
    },

    // Education & Achievements
    educationAchievements: "Éducation & Réalisations",
    education: "Éducation",
    achievements: "Réalisations",
    nationalEngineering: "Diplôme National d'Ingénieur",
    enstab: "ENSTAB - Borj Cédria",
    advancedTech: "Technologies Avancées - Systèmes Énergétiques & Technologies Propres",
    preparatoryCycle: "Cycle Préparatoire",
    ipeib: "IPEIB - Bizerte",
    mathPhysics: "Mathématiques, Physique",
    achievementsList: {
      ieee28th: {
        title: "28ème Place Nationale",
        subtitle: "Compétition de Programmation IEEE XTREME 17.0",
      },
      ensta2nd: {
        title: "2ème Place",
        subtitle: "Compétition de Programmation ENSTA Challenge 2.0",
      },
      nvidia: {
        title: "Certificat NVIDIA DLI",
        subtitle: "Fondamentaux du Deep Learning",
      },
      ieeeRecognition: {
        title: "Reconnaissance IEEE",
        subtitle: "Développement de Plateforme Comptable",
      },
    },

    // Contact Section
    letsWorkTogether: "Travaillons Ensemble",
    contactDescription:
      "Je recherche activement des opportunités pour appliquer mes compétences en ingénierie et développement. Discutons de la façon dont je peux contribuer à votre équipe et créer des solutions innovantes ensemble.",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    sendEmail: "Envoyer Email",
    callMe: "M'Appeler",

    // Footer
    allRightsReserved: "Tous droits réservés. Construit avec Next.js & Tailwind CSS.",
  },
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<"en" | "fr">("en")

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"))
  }

  const skills = {
    programming: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "SpringBoot", level: 88 },
      { name: "Next.js", level: 92 },
    ],
    tools: [
      { name: "VS Code", level: 95 },
      { name: "GitHub", level: 90 },
      { name: "MATLAB", level: 85 },
      { name: "CATIA", level: 80 },
      { name: "AutoCAD", level: 75 },
      { name: "Arduino IDE", level: 85 },
    ],
  }

  const experiences = [
    {
      title: t.experiences.coficab.title,
      company: t.experiences.coficab.company,
      period: t.experiences.coficab.period,
      description: t.experiences.coficab.description,
      icon: <Zap className="w-5 h-5" />,
      color: "bg-yellow-500",
    },
    {
      title: t.experiences.smartegy.title,
      company: t.experiences.smartegy.company,
      period: t.experiences.smartegy.period,
      description: t.experiences.smartegy.description,
      icon: <Code className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      title: t.experiences.ieee2024.title,
      company: t.experiences.ieee2024.company,
      period: t.experiences.ieee2024.period,
      description: t.experiences.ieee2024.description,
      icon: <Globe className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      title: t.experiences.ieee2023.title,
      company: t.experiences.ieee2023.company,
      period: t.experiences.ieee2023.period,
      description: t.experiences.ieee2023.description,
      icon: <Globe className="w-5 h-5" />,
      color: "bg-indigo-500",
    },
    {
      title: t.experiences.tunisietelecom.title,
      company: t.experiences.tunisietelecom.company,
      period: t.experiences.tunisietelecom.period,
      description: t.experiences.tunisietelecom.description,
      icon: <Database className="w-5 h-5" />,
      color: "bg-purple-500",
    },
  ]

  const projects = [
    {
      title: t.coficabProject.title,
      description: t.coficabProject.description,
      tech: ["Spring Boot", "MongoDB", "Next.js", "Tailwind CSS"],
      featured: true,
      internshipPeriod: "February 10, 2025 - August 8, 2025",
      responsibilities: t.coficabProject.responsibilities,
      achievements: t.coficabProject.achievements,
    },
    {
      title: t.universityWebsite.title,
      description: t.universityWebsite.description,
      tech: ["React.js", "Spring Boot", "PostgreSQL"],
      period: "November 2023 – May 2024",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: t.roboticHand.title,
      description: t.roboticHand.description,
      tech: [
        "Arduino",
        language === "fr" ? "Conception Électrique" : "Electrical Design",
        language === "fr" ? "Conception Mécanique" : "Mechanical Conception",
      ],
      period: "November 2022 – May 2023",
      icon: <Cpu className="w-8 h-8" />,
    },
  ]

  const achievements = [
    {
      title: t.achievementsList.ieee28th.title,
      subtitle: t.achievementsList.ieee28th.subtitle,
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: t.achievementsList.ensta2nd.title,
      subtitle: t.achievementsList.ensta2nd.subtitle,
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: t.achievementsList.nvidia.title,
      subtitle: t.achievementsList.nvidia.subtitle,
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: t.achievementsList.ieeeRecognition.title,
      subtitle: t.achievementsList.ieeeRecognition.subtitle,
      icon: <Target className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Neji Ala
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { key: "home", label: t.home },
                { key: "about", label: t.about },
                { key: "skills", label: t.skills },
                { key: "experience", label: t.experience },
                { key: "projects", label: t.projects },
                { key: "contact", label: t.contact },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.key ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Language Toggle Button */}
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="ml-4 transition-all duration-300 hover:scale-105"
              >
                <Languages className="w-4 h-4 mr-2" />
                {language === "en" ? "FR" : "EN"}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="transition-all duration-300 hover:scale-105"
              >
                <Languages className="w-4 h-4 mr-1" />
                {language === "en" ? "FR" : "EN"}
              </Button>
              <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-2 space-y-1">
              {[
                { key: "home", label: t.home },
                { key: "about", label: t.about },
                { key: "skills", label: t.skills },
                { key: "experience", label: t.experience },
                { key: "projects", label: t.projects },
                { key: "contact", label: t.contact },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {t.heroTitle}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t.heroSubtitle}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {t.viewMyWork}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gray-300 hover:border-blue-600 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {t.getInTouch}
              </Button>
            </div>

            <div className="flex justify-center space-x-6 text-gray-600">
              <Link
                href="tel:+21624640536"
                className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>+216 24 640 536</span>
              </Link>
              <Link
                href="mailto:alaa.neji@enstab.ucar.tn"
                className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>alaa.neji@enstab.ucar.tn</span>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.aboutTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">{t.aboutText1}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t.aboutText2}</p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                  <div className="text-gray-600">{t.internships}</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-gray-600">{t.projectsCount}</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                  <div className="text-gray-600">{t.leadershipRoles}</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                  <div className="text-gray-600">{t.languagesCount}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">{t.coreExpertise}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-6 h-6 text-yellow-300" />
                    <span>{t.energySystems}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="w-6 h-6 text-green-300" />
                    <span>{t.fullStackDev}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="w-6 h-6 text-blue-300" />
                    <span>{t.databaseDesign}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-pink-300" />
                    <span>{t.teamLeadership}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.technicalSkills}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Programming Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Code className="w-8 h-8 text-blue-600 mr-3" />
                {t.programmingLanguages}
              </h3>
              <div className="space-y-6">
                {skills.programming.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out transform origin-left"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Database className="w-8 h-8 text-green-600 mr-3" />
                {t.toolsTechnologies}
              </h3>
              <div className="space-y-6">
                {skills.tools.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ease-out transform origin-left"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow group">
              <Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-gray-900 mb-2">{t.engineering}</h4>
              <p className="text-sm text-gray-600">{t.engineeringDesc}</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow group">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-gray-900 mb-2">{t.leadership}</h4>
              <p className="text-sm text-gray-600">{t.leadershipDesc}</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow group">
              <Lightbulb className="w-12 h-12 text-yellow-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-gray-900 mb-2">{t.innovation}</h4>
              <p className="text-sm text-gray-600">{t.innovationDesc}</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow group">
              <Languages className="w-12 h-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-gray-900 mb-2">{t.languagesSkill}</h4>
              <p className="text-sm text-gray-600">{t.languagesDesc}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.professionalExperience}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline Dot */}
                  <div
                    className={`hidden md:flex absolute left-6 w-4 h-4 ${exp.color} rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform`}
                  ></div>

                  {/* Content */}
                  <div className="md:ml-16 w-full">
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 ${exp.color} rounded-lg text-white`}>{exp.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                            <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="mt-2 md:mt-0">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-700">{exp.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.featuredProjects}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 lg:p-12 text-white">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce animation-delay-2000"></div>
                  <div className="absolute bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full animate-ping animation-delay-4000"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <Badge className="bg-yellow-400 text-black font-semibold px-4 py-2 animate-pulse">
                      <Star className="w-4 h-4 mr-2" />
                      {t.endOfStudiesInternship}
                    </Badge>
                    <Badge variant="outline" className="border-white text-white">
                      {projects[0].internshipPeriod}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Zap className="w-8 h-8 text-yellow-300" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold mb-2">{t.coficabProject.title}</h3>
                      <p className="text-xl text-blue-100">{t.coficabProject.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-blue-100 mb-8 leading-relaxed">{t.coficabProject.description}</p>

                  {/* Key Responsibilities */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-yellow-300" />
                      {t.coficabProject.keyResponsibilities}
                    </h4>
                    <div className="grid gap-3">
                      {t.coficabProject.responsibilities.map((responsibility, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-blue-50">{responsibility}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-green-300" />
                      {t.coficabProject.technologiesUsed}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {projects[0].tech.map((tech, index) => (
                        <Badge
                          key={tech}
                          className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
                      {t.coficabProject.keyAchievements}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {t.coficabProject.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                        >
                          <div className="text-2xl font-bold text-yellow-300 mb-1">{achievement}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                      {t.coficabProject.viewTechnicalDetails}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      {t.coficabProject.downloadReport}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        {project.period && <p className="text-sm text-gray-500">{project.period}</p>}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="group-hover:border-blue-500 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.educationAchievements}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                {t.education}
              </h3>
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{t.nationalEngineering}</h4>
                      <p className="text-blue-600 font-medium">{t.enstab}</p>
                      <p className="text-gray-600">{t.advancedTech}</p>
                      <p className="text-sm text-gray-500 mt-1">Sep 2022 - Present</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{t.preparatoryCycle}</h4>
                      <p className="text-green-600 font-medium">{t.ipeib}</p>
                      <p className="text-gray-600">{t.mathPhysics}</p>
                      <p className="text-sm text-gray-500 mt-1">Sep 2020 - June 2022</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                {t.achievements}
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600">{achievement.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900">{achievement.title}</h4>
                        <p className="text-gray-600">{achievement.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{t.letsWorkTogether}</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">{t.contactDescription}</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{t.email}</h3>
              <p className="text-blue-100">alaa.neji@enstab.ucar.tn</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{t.phone}</h3>
              <p className="text-blue-100">+216 24 640 536</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{t.location}</h3>
              <p className="text-blue-100">Tunisia</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="mailto:alaa.neji@enstab.ucar.tn">
                <Mail className="w-5 h-5 mr-2" />
                {t.sendEmail}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="tel:+21624640536">
                <Phone className="w-5 h-5 mr-2" />
                {t.callMe}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Neji Ala
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://github.com/alane09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ala-neji/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:alaa.neji@enstab.ucar.tn" className="hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 Neji Ala. {t.allRightsReserved}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
