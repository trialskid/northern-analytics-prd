import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { StatGrid } from '@/components/StatGrid'
import { ServiceCards } from '@/components/ServiceCards'
import { BulletGrid } from '@/components/BulletGrid'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { CTASection } from '@/components/CTASection'
import { BarChart3, Zap, Smartphone, Share2, FileSpreadsheet } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Intelligence & Process Automation Expert',
  description: 'Transform your business with expert business intelligence, process automation, and custom application development services. Streamline operations and unlock data-driven insights.',
  alternates: {
    canonical: 'https://northern-analytics.com',
  },
}

export default function HomePage() {
  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Hours Saved Monthly', value: '2,000+' },
    { label: 'Client Satisfaction', value: '>98%' },
    { label: 'Years Experience', value: '5+' }
  ]

  const services = [
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Power Automate workflows that cut cycle times by up to 80%.',
      href: '/services#automation'
    },
    {
      icon: Smartphone,
      title: 'Custom Applications',
      description: 'Low-code Power Apps built in weeks, not months.',
      href: '/services#apps'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: '“Interactive dashboards and automated reporting with Power BI.',
      href: '/services#analytics'
    },
    {
      icon: Share2,
      title: 'SharePoint Solutions',
      description: 'Modern intranets and document automation. Secure, integrated, end-to-end.',
      href: '/services#sharepoint'
    },
    {
      icon: FileSpreadsheet,
      title: 'Spreadsheet Engineering & Templates',
      description: 'Robust Excel models that scale with your data and governance policies.',
      href: '/services#excel'
    }
  ]

  const benefits = [
    { text: 'Reduce manual work by up to 80 %' },
    { text: 'Scale processes without proportional staff increases' },
    { text: 'Make data-driven decisions with real-time analytics' },
    { text: 'Eliminate errors in repetitive tasks' },
    { text: 'Improve efficiency across departments' },
    { text: 'Leverage certified Microsoft Power Platform expertise' }

  ]

  const processSteps = [
    {
      title: 'Discovery & Analysis',
      description: 'Map processes, align KPIs.',
      duration: '1-2 weeks'
    },
    {
      title: 'Solution Design',
      description: 'Architect scalable, secure Power Platform solution.',
      duration: '1 week'
    },
    {
      title: 'Development & Testing',
      description: 'Agile sprints, UAT, and performance benchmarking.',
      duration: '2-8 weeks'
    },
    {
      title: 'Deployment & Training',
      description: 'Go-live support, hand-over, success metrics dashboard.',
      duration: '1 week'
    }
  ]

  return (
    <>
      <HeroSection
        headline="Enterprise-Grade Automation & Analytics on the Microsoft Power Platform"
        sub="We design, build, and manage Power BI, Power Automate, Power Apps, SharePoint, and Excel solutions that eliminate manual work and surface insights, worldwide."
        buttonText="Schedule Consultation"
        buttonHref="/contact"
      />

      <StatGrid stats={stats} />

      <ServiceCards services={services} />

      <BulletGrid
        title="Why Choose Northern Analytics?"
        subtitle="Proven results that transform how businesses operate"
        bullets={benefits}
      />

      <ProcessTimeline
        title="Our Proven Process"
        subtitle="From concept to implementation in 4 simple steps"
        steps={processSteps}
        isTeaser={true}
      />

      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's quantify your automation opportunity. Book a 30-minute consultation and receive a high-level ROI estimate."
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="See Our Solutions"
        secondaryButtonHref="/services"
        backgroundVariant="white"
      />
    </>
  )
}