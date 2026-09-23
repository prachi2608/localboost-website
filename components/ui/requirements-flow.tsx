'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  ArrowLeft,
  Store,
  MapPin,
  Target,
  Palette,
  Send,
  CheckCircle2,
  Loader2,
  Globe,
  Phone,
  Mail,
  Clock,
  Users,
  Sparkles,
  Trophy,
  Zap,
  Star,
  Rocket,
  Instagram,
  ChevronRight,
  Share2,
} from 'lucide-react'

/* ─── types ─── */
interface FormData {
  businessName: string
  businessType: string
  location: string
  website: string
  goals: string[]
  platforms: string[]
  contactName: string
  contactEmail: string
  contactPhone: string
  additionalNotes: string
}

/* ─── data ─── */
const BUSINESS_TYPES = [
  { label: 'Restaurant / Café', icon: '🍽️', color: 'hover:border-orange-400 hover:bg-orange-400/10' },
  { label: 'Retail Store', icon: '🛍️', color: 'hover:border-pink-400 hover:bg-pink-400/10' },
  { label: 'Salon / Spa', icon: '💇', color: 'hover:border-purple-400 hover:bg-purple-400/10' },
  { label: 'Fitness / Gym', icon: '💪', color: 'hover:border-red-400 hover:bg-red-400/10' },
  { label: 'Medical / Dental', icon: '🏥', color: 'hover:border-blue-400 hover:bg-blue-400/10' },
  { label: 'Auto Services', icon: '🚗', color: 'hover:border-slate-400 hover:bg-slate-400/10' },
  { label: 'Home Services', icon: '🔧', color: 'hover:border-amber-400 hover:bg-amber-400/10' },
  { label: 'Professional Services', icon: '💼', color: 'hover:border-indigo-400 hover:bg-indigo-400/10' },
  { label: 'Real Estate', icon: '🏠', color: 'hover:border-emerald-400 hover:bg-emerald-400/10' },
  { label: 'Other', icon: '✨', color: 'hover:border-violet-400 hover:bg-violet-400/10' },
]

const GOALS = [
  { label: 'Get found on Google', icon: <Globe className="w-4 h-4" />, xp: 15 },
  { label: 'More customer reviews', icon: <Star className="w-4 h-4" />, xp: 10 },
  { label: 'Social media presence', icon: <Share2 className="w-4 h-4" />, xp: 10 },
  { label: 'Brand identity & design', icon: <Palette className="w-4 h-4" />, xp: 20 },
  { label: 'More foot traffic', icon: <Users className="w-4 h-4" />, xp: 15 },
  { label: 'Online appointments', icon: <Clock className="w-4 h-4" />, xp: 10 },
]

const PLATFORMS = [
  { label: 'Google Business', icon: '🔍', xp: 10 },
  { label: 'Instagram', icon: '📸', xp: 10 },
  { label: 'Facebook', icon: '👥', xp: 5 },
  { label: 'Yelp', icon: '⭐', xp: 5 },
  { label: 'TikTok', icon: '🎵', xp: 10 },
  { label: 'Website / SEO', icon: '🌐', xp: 15 },
]

const STEP_META = [
  { id: 0, title: 'Your Business', icon: <Store className="w-4 h-4" />, xpReward: 20, emoji: '🏪' },
  { id: 1, title: 'Location', icon: <MapPin className="w-4 h-4" />, xpReward: 15, emoji: '📍' },
  { id: 2, title: 'Goals', icon: <Target className="w-4 h-4" />, xpReward: 25, emoji: '🎯' },
  { id: 3, title: 'Platforms', icon: <Rocket className="w-4 h-4" />, xpReward: 20, emoji: '🚀' },
  { id: 4, title: 'Contact', icon: <Mail className="w-4 h-4" />, xpReward: 20, emoji: '📬' },
]

/* ─── Floating Particle ─── */
function FloatingParticle({ delay, size, x }: { delay: number; size: number; x: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], y: [0, -100, -200], scale: [0, 1, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
      className="absolute rounded-full bg-gradient-to-br from-primary/30 to-violet-500/30 pointer-events-none"
      style={{ width: size, height: size, left: `${x}%` }}
    />
  )
}

/* ─── XP Popup ─── */
function XpPopup({ amount, id }: { amount: number; id: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 0.5 }}
      animate={{ opacity: 1, y: -50, scale: 1 }}
      exit={{ opacity: 0, y: -80, scale: 0.5 }}
      transition={{ duration: 0.8 }}
      className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-3 py-1 rounded-full text-sm pointer-events-none shadow-lg"
    >
      +{amount} XP
    </motion.div>
  )
}

/* ─── Circular Progress Ring ─── */
function ProgressRing({ progress, size = 64, strokeWidth = 4 }: { progress: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted-foreground/20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-primary transition-all duration-500"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
        {Math.round(progress)}%
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export function RequirementsFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [xp, setXp] = useState(0)
  const [xpPopups, setXpPopups] = useState<{ amount: number; id: number }[]>([])
  const [showLevelUp, setShowLevelUp] = useState(false)
  const popupIdRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    businessType: '',
    location: '',
    website: '',
    goals: [],
    platforms: [],
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    additionalNotes: '',
  })

  const totalXpPossible = 100
  const progressPercent = Math.min((xp / totalXpPossible) * 100, 100)

  const getLevel = () => {
    if (xp >= 80) return { level: 5, title: '🏆 Marketing Legend', color: 'text-yellow-400' }
    if (xp >= 60) return { level: 4, title: '🚀 Growth Expert', color: 'text-purple-400' }
    if (xp >= 40) return { level: 3, title: '📈 Rising Star', color: 'text-blue-400' }
    if (xp >= 20) return { level: 2, title: '🌱 Getting Started', color: 'text-green-400' }
    return { level: 1, title: '👋 Newcomer', color: 'text-muted-foreground' }
  }

  const addXp = useCallback((amount: number) => {
    const id = ++popupIdRef.current
    setXp((prev) => {
      const newXp = prev + amount
      const prevLevel = prev >= 80 ? 5 : prev >= 60 ? 4 : prev >= 40 ? 3 : prev >= 20 ? 2 : 1
      const newLevel = newXp >= 80 ? 5 : newXp >= 60 ? 4 : newXp >= 40 ? 3 : newXp >= 20 ? 2 : 1
      if (newLevel > prevLevel) {
        setShowLevelUp(true)
        setTimeout(() => setShowLevelUp(false), 2000)
      }
      return newXp
    })
    setXpPopups((prev) => [...prev, { amount, id }])
    setTimeout(() => {
      setXpPopups((prev) => prev.filter((p) => p.id !== id))
    }, 900)
  }, [])

  const next = () => {
    if (currentStep < STEP_META.length - 1 && canProceed()) {
      addXp(STEP_META[currentStep].xpReward)
      setDirection(1)
      setCurrentStep((s) => s + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setDirection(-1)
      setCurrentStep((s) => s - 1)
    }
  }

  const toggleArrayItem = (field: 'goals' | 'platforms', item: string, itemXp: number) => {
    setFormData((prev) => {
      const isRemoving = prev[field].includes(item)
      if (!isRemoving) addXp(itemXp)
      return {
        ...prev,
        [field]: isRemoving
          ? prev[field].filter((i) => i !== item)
          : [...prev[field], item],
      }
    })
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    addXp(STEP_META[4].xpReward)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitted(true)

    // Confetti
    try {
      const confetti = (await import('canvas-confetti')).default
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } })
      setTimeout(() => confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } }), 300)
    } catch (e) {
      // confetti not available, no problem
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.businessName.trim() !== '' && formData.businessType !== ''
      case 1: return formData.location.trim() !== ''
      case 2: return formData.goals.length > 0
      case 3: return formData.platforms.length > 0
      case 4: return formData.contactName.trim() !== '' && formData.contactEmail.trim() !== ''
      default: return true
    }
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0, scale: 0.95 }),
  }

  const levelInfo = getLevel()

  /* ─── SUCCESS STATE ─── */
  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <Trophy className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-3 text-foreground"
        >
          You're All Set! 🎉
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-8"
        >
          Thanks {formData.contactName}!
          We'll review the requirements for{' '}
          <span className="font-medium text-foreground">{formData.businessName}</span>{' '}
          and reach out within 24 hours.
        </motion.p>

        {/* XP Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl p-4 mb-6"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="text-2xl font-bold text-yellow-400">{xp} XP</div>
            <div className="text-muted-foreground">—</div>
            <div className={`font-semibold ${levelInfo.color}`}>{levelInfo.title}</div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-muted/50 rounded-xl p-6 text-left"
        >
          <h4 className="font-semibold mb-4 text-sm text-foreground">Your Submission</h4>
          
          <div className="space-y-3">
            {[
              { label: 'Business', value: formData.businessName },
              { label: 'Type', value: formData.businessType },
              { label: 'Location', value: formData.location },
              { label: 'Goals', value: formData.goals.join(', ') },
              { label: 'Platforms', value: formData.platforms.join(', ') },
            ].map((row) => (
              <div key={row.label} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{row.label}</span>
                <span className="font-medium text-foreground max-w-[200px] text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }

  /* ─── FORM STATE ─── */
  return (
    <div className="max-w-2xl mx-auto relative" ref={containerRef}>
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} size={8 + Math.random() * 8} x={Math.random() * 100} />
        ))}
      </div>

      {/* XP Popups */}
      <AnimatePresence>
        {xpPopups.map((popup) => (
          <XpPopup key={popup.id} amount={popup.amount} id={popup.id} />
        ))}
      </AnimatePresence>

      {/* Level Up Banner */}
      <AnimatePresence>
        {showLevelUp && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-6 py-3 rounded-full shadow-lg z-20"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Level Up!</span>
              <span className="text-sm opacity-80">{levelInfo.title}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar: Progress + XP + Level */}
      <div className="flex items-center justify-between mb-6 bg-card rounded-xl border border-border p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <ProgressRing progress={progressPercent} />
          <div>
            <div className="text-sm font-semibold text-foreground">
              Step {currentStep + 1} of {STEP_META.length}
            </div>
            <div className={`text-xs font-medium ${levelInfo.color}`}>
              {levelInfo.title}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-full px-4 py-2">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="font-bold text-yellow-400">{xp}</span>
          <span className="text-sm text-muted-foreground">XP</span>
        </div>
      </div>

      {/* Step Dots */}
      <div className="flex items-center justify-center mb-8">
        {STEP_META.map((step, i) => (
          <div key={step.id} className="flex items-center">
            <motion.button
              onClick={() => {
                if (i < currentStep) {
                  setDirection(i < currentStep ? -1 : 1)
                  setCurrentStep(i)
                }
              }}
              whileHover={i <= currentStep ? { scale: 1.15 } : {}}
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 border-2',
                i === currentStep
                  ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110'
                  : i < currentStep
                    ? 'border-primary/50 bg-primary/10 text-primary cursor-pointer'
                    : 'border-border bg-card text-muted-foreground'
              )}
              title={step.title}
            >
              {i < currentStep ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <span>{step.emoji}</span>
              )}
            </motion.button>

            {i < STEP_META.length - 1 && (
              <div
                className={cn(
                  'w-12 h-0.5 mx-2 transition-colors',
                  i < currentStep ? 'bg-primary' : 'bg-border'
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
        {/* Gradient top bar */}
        <div className="h-2 bg-gradient-to-r from-primary via-violet-500 to-primary" />

        <div className="p-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {/* ─── STEP 0: Business Info ─── */}
              {currentStep === 0 && (
                <>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-foreground">
                      🏪 Tell us about your business
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pick your industry and we'll tailor everything
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData((p) => ({ ...p, businessName: e.target.value }))}
                        placeholder="e.g. Sunrise Bakery"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        What type of business? *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {BUSINESS_TYPES.map((type) => {
                          const isSelected = formData.businessType === type.label
                          return (
                            <button
                              key={type.label}
                              type="button"
                              onClick={() => setFormData((p) => ({ ...p, businessType: type.label }))}
                              className={cn(
                                'flex items-center gap-2 px-3 py-3 rounded-xl border text-sm font-medium transition-all text-left',
                                isSelected
                                  ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/20'
                                  : `border-border text-foreground ${type.color}`
                              )}
                            >
                              {type.icon}
                              {type.label}
                              {isSelected && <CheckCircle2 className="w-4 h-4 ml-auto" />}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* ─── STEP 1: Location ─── */}
              {currentStep === 1 && (
                <>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-foreground">
                      📍 Where are you located?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      This helps us target your local market
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        City & State *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData((p) => ({ ...p, location: e.target.value }))}
                          placeholder="e.g. Austin, TX"
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Website
                        <span className="text-muted-foreground font-normal"> (optional)</span>
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData((p) => ({ ...p, website: e.target.value }))}
                          placeholder="https://yourbusiness.com"
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Don't have one? No worries — we can help build it.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* ─── STEP 2: Goals ─── */}
              {currentStep === 2 && (
                <>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-foreground">
                      🎯 What are your goals?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Select all that matter — each earns you XP!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {GOALS.map((goal) => {
                      const isSelected = formData.goals.includes(goal.label)
                      return (
                        <button
                          key={goal.label}
                          type="button"
                          onClick={() => toggleArrayItem('goals', goal.label, goal.xp)}
                          className={cn(
                            'flex items-center gap-3 px-4 py-4 rounded-xl border text-sm font-medium transition-all text-left relative overflow-hidden',
                            isSelected
                              ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/20'
                              : 'border-border text-foreground hover:border-primary/30 hover:bg-muted/50'
                          )}
                        >
                          <div className={cn(
                            'w-8 h-8 rounded-lg flex items-center justify-center',
                            isSelected ? 'bg-primary/20' : 'bg-muted'
                          )}>
                            {goal.icon}
                          </div>
                          <div className="flex-1">
                            {goal.label}
                            <div className="text-xs opacity-60">+{goal.xp} XP</div>
                          </div>
                          {isSelected && <CheckCircle2 className="w-4 h-4" />}
                        </button>
                      )
                    })}
                  </div>
                </>
              )}

              {/* ─── STEP 3: Platforms ─── */}
              {currentStep === 3 && (
                <>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-foreground">
                      🚀 Where should you be visible?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pick platforms that matter for your business
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {PLATFORMS.map((platform) => {
                      const isSelected = formData.platforms.includes(platform.label)
                      return (
                        <button
                          key={platform.label}
                          type="button"
                          onClick={() => toggleArrayItem('platforms', platform.label, platform.xp)}
                          className={cn(
                            'flex flex-col items-center gap-2 px-4 py-6 rounded-xl border text-sm font-medium transition-all relative',
                            isSelected
                              ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/20'
                              : 'border-border text-foreground hover:border-primary/30 hover:bg-muted/50'
                          )}
                        >
                          <span className="text-2xl">{platform.icon}</span>
                          {platform.label}
                          <div className="text-xs opacity-60">+{platform.xp}</div>
                          {isSelected && (
                            <div className="absolute top-2 right-2">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </>
              )}

              {/* ─── STEP 4: Contact ─── */}
              {currentStep === 4 && (
                <>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-foreground">
                      📬 Almost there!
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      How can we send you a tailored proposal?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Your Name *
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          value={formData.contactName}
                          onChange={(e) => setFormData((p) => ({ ...p, contactName: e.target.value }))}
                          placeholder="John Doe"
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="email"
                          value={formData.contactEmail}
                          onChange={(e) => setFormData((p) => ({ ...p, contactEmail: e.target.value }))}
                          placeholder="john@business.com"
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Phone
                        <span className="text-muted-foreground font-normal"> (optional)</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="tel"
                          value={formData.contactPhone}
                          onChange={(e) => setFormData((p) => ({ ...p, contactPhone: e.target.value }))}
                          placeholder="(555) 123-4567"
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Anything else?
                      </label>
                      <textarea
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData((p) => ({ ...p, additionalNotes: e.target.value }))}
                        placeholder="Current challenges, budget range, timeline..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={prev}
              className={cn(
                'flex items-center gap-2 h-11 px-5 rounded-xl text-sm font-medium transition-all text-foreground',
                currentStep === 0
                  ? 'opacity-0 pointer-events-none'
                  : 'hover:bg-muted border border-border'
              )}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </motion.button>

            {currentStep < STEP_META.length - 1 ? (
              <motion.button
                whileHover={canProceed() ? { scale: 1.03 } : {}}
                whileTap={canProceed() ? { scale: 0.97 } : {}}
                onClick={next}
                disabled={!canProceed()}
                className={cn(
                  'flex items-center gap-2 h-11 px-7 rounded-xl text-sm font-semibold transition-all',
                  canProceed()
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                )}
              >
                Continue
                <ChevronRight className="h-4 w-4" />
                {canProceed() && (
                  <span className="text-xs opacity-70 ml-1">+{STEP_META[currentStep].xpReward} XP</span>
                )}
              </motion.button>
            ) : (
              <motion.button
                whileHover={canProceed() ? { scale: 1.03 } : {}}
                whileTap={canProceed() ? { scale: 0.97 } : {}}
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className={cn(
                  'flex items-center gap-2 h-11 px-7 rounded-xl text-sm font-semibold transition-all',
                  canProceed() && !isSubmitting
                    ? 'bg-gradient-to-r from-primary to-violet-500 text-white hover:opacity-90 shadow-lg shadow-primary/20'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Submit Requirements
                  </>
                )}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
