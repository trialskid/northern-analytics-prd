import { Metadata } from 'next'
import { ProcessTable } from '@/components/ProcessTable'
import { FAQList } from '@/components/FAQList'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Our Process - How We Deliver Results',
  description: 'Every engagement follows a structured methodology that blends business-first thinking with Microsoft Power Platform best practices. You\'ll always know what\'s next, why it matters, and how success is measured.',
  alternates: {
    canonical: 'https://northern-analytics.com/process',
  },
}

export default function ProcessPage() {
  const phases = [
    {
      phase: 'Discovery & Analysis',
      activities: [
        'Map current workflows, define KPIs, and quantify the automation or analytics opportunity.'
      ],
      deliverables: [
        'Current-state process map',
        'Success metrics',
        'High-level ROI estimate'
      ],
      duration: '1-2 weeks'
    },
    {
      phase: 'Solution Design',
      activities: [
        'Architect a scalable, secure Power Platform solution aligned with Microsoft governance and licensing guidelines.'
      ],
      deliverables: [
        'Technical blueprint',
        'UI wireframes',
        'Implementation plan'
      ],
      duration: '1 week'
    },
    {
      phase: 'Build & Test',
      activities: [
        'Rapid, iterative development in Power Automate, Power Apps, Power BI, and SharePoint, validated with user feedback each sprint.'
      ],
      deliverables: [
        'Working solution',
        'Performance benchmarks',
        'User acceptance sign-off'
      ],
      duration: '2-8 weeks'
    },
    {
      phase: 'Deployment & Training',
      activities: [
        'Production cut-over, role-based training, and hand-over of admin runbooks.'
      ],
      deliverables: [
        'Live system',
        'Trained users',
        'Post-go-live support plan'
      ],
      duration: '1 week'
    },
    {
      phase: 'Support & Optimization',
      activities: [
        'Optional managed services: monitoring, enhancements, and on-going support.'
      ],
      deliverables: [
        'Health reports',
        'Enhancement backlog'
      ],
      duration: 'Ongoing'
    }
  ]

  const faqs = [
    {
      question: 'How long will my project take?',
      answer: 'Timelines vary by scope. Simple automation typically completes in 4 – 6 weeks; multi-system BI programs may span 3 – 6 months. You’ll receive a detailed schedule after Discovery.'
    },
    {
      question: 'What if our requirements change mid-project?',
      answer: 'Minor tweaks are absorbed within scope. Significant changes trigger a quick impact review so you can decide on timeline or budget adjustments.'
    },
    {
      question: 'Do you integrate with our existing systems?',
      answer: 'Yes. We routinely connect SAP, Oracle, SQL Server, REST APIs, and legacy spreadsheets to the Power Platform with secure connectors.'
    },
    {
      question: 'How is data security and compliance handled?',
      answer: 'Solutions inherit Microsoft 365 security (Azure AD, DLP, MFA) and follow GDPR/HIPAA/SOX guidelines where applicable.'
    },
    {
      question: 'What training do our teams receive?',
      answer: 'Role-based live sessions, recorded videos, and a quick-start guide ensure adoption.'
    },
    {
      question: 'What support options are available after go-live?',
      answer: 'Choose from ad-hoc support or managed service level agreements (monitoring, patching, feature enhancements). We’ll recommend a level based on complexity.'
    },
    {
      question: 'How do you measure project success?',
      answer: 'Out Success KPIs are time saved, error reduction and user adoption.'
    },
    {
      question: 'What budget range should we expect?',
      answer: 'Typical projects start around USD 25-40k for focused automations and scale with complexity. A fixed quote follows your free consultation.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-na-bg-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-na-primary sm:text-5xl">
              Our Proven Process
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            A clear, four-step roadmap that delivers Microsoft Power Platform solutions on time and on budget.
            </p>
          </div>
        </div>
      </section>


      <ProcessTable
        title="Project Phases & Deliverables"
        subtitle="Every engagement follows a structured methodology that blends business-first thinking with Microsoft Power Platform best practices. You'll always know what's next, why it matters, and how success is measured."
        phases={phases}
      />
      {/* Timeline Disclaimer */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 italic max-w-4xl mx-auto">
              <strong>Typical timelines:</strong> Automation projects for mid-sized teams run 4 – 12 weeks; enterprise analytics programs may extend to 3 – 6 months. Durations below are averages and may shift after a detailed scope review.
            </p>
          </div>
        </div>
      </section>
      <FAQList
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our process and methodology"
        faqs={faqs}
      />

      <CTASection
        title="Ready to Start Your Project?"
        description="Let’s map your opportunity and outline your ROI in a 30-minute, no-obligation call."
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonHref="/services"
        backgroundVariant="white"
      />
    </>
  )
}