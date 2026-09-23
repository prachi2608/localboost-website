'use client'

import { motion } from 'framer-motion'
import { RequirementsFlow } from '@/components/ui/requirements-flow'
import { FileText } from 'lucide-react'

export function RequirementsSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="get-started">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
            <FileText className="h-3.5 w-3.5" />
            Earn XP while you fill it out ✨
          </div>

          <h2 className="text-3xl md:text-5xl font-bold">
            Tell Us What You{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
              Need
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Share your business details and goals. We'll craft a personalized
            marketing strategy just for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <RequirementsFlow />
        </motion.div>
      </div>
    </section>
  )
}
