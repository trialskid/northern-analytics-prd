import { Metadata } from 'next'
import Image from 'next/image'
import { Timeline } from '@/components/Timeline'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About Jamey Gulley - Business Intelligence & Automation Expert',
  description: 'Learn about Jamey Gulley\'s 5+ years of experience in business intelligence, process automation, and custom application development.',
}

export default function AboutPage() {
  const timelineEvents = [
    {
      year: '2020',
      title: 'Started Career in Data Analytics',
      description: 'Entered the data-analytics field, discovering the impact of real-time decision support.',
      highlight: false
    },
    {
      year: '2022',
      title: 'First Process Automation Project',
      description: 'Delivered first process-automation project, cutting manual effor by hundreds of hours per week.',
      highlight: true
    },
    {
      year: '2023',
      title: 'Led Enterprise BI Implementation',
      description: 'Led a multi-million-dollar enterprise BI rollout for a Fortune 500 operation which is utilized by over 400 emplopyees.',
      highlight: false
    },
    {
      year: '2025',
      title: 'Founded Northern Analytics',
      description: '	Founded Northern Analytics to bring enterprise-grade automation to clients worldwide.',
      highlight: true
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-na-bg-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-na-primary sm:text-5xl mb-6">
                About Jamey Gulley
              </h1>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                I’m a business-intelligence and automation expert as well as a digital transformation specialist. Since 2020, I’ve helped organizations replace manual spreadsheets with data-driven workflows on the Microsoft Power Platform. My work has delivered 100+ projects, saved more than 2000 hours every month, and driven client satisfaction above 98 percent.
                </p>
                <p className="mb-4">
                In 2025, I launched Northern Analytics to make those enterprise-grade results available to businesses of any size and industry. Combining technical depth with a clear understanding of business processes, I build solutions that surface insights, cut cycle times, and scale without extra headcount. When I’m not creating dashboards or orchestrating Power Automate flows, I stay on top of emerging Microsoft technologies that can unlock new value for clients.
                </p>               
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/assets/img/jamey-gulley.jpg"
                  alt="Portrait of Jamey Gulley"
                  width={320}
                  height={320}
                  className="rounded-na shadow-na object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-na-primary">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-na-primary">2000+</div>
              <div className="text-gray-600">Hours Saved Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-na-primary">&gt;98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-na-primary">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Timeline
        title="Professional Journey"
        events={timelineEvents}
      />

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-na-primary sm:text-4xl">
              My Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every client interaction and project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-na-bg-light rounded-na">
              <div className="w-16 h-16 bg-na-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="text-xl font-semibold text-na-primary mb-3">Results-Driven</h3>
              <p className="text-gray-600">
              Every solution must show measurable value and genuine business impact.
              </p>
            </div>
            
            <div className="text-center p-6 bg-na-bg-light rounded-na">
              <div className="w-16 h-16 bg-na-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-semibold text-na-primary mb-3">Transparency</h3>
              <p className="text-gray-600">
              Clear communication, honest timelines, and straightforward pricing at every step.
              </p>
            </div>
            
            <div className="text-center p-6 bg-na-bg-light rounded-na">
              <div className="w-16 h-16 bg-na-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h3 className="text-xl font-semibold text-na-primary mb-3">Excellence</h3>
              <p className="text-gray-600">
              Relentless focus on high-quality solutions that grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Work Together"
        description="Ready to transform your business operations? I'd love to learn about your challenges and discuss how I can help."
        primaryButtonText="Start a Conversation"
        primaryButtonHref="/contact"
        secondaryButtonText="View My Work"
        secondaryButtonHref="/services"
        backgroundVariant="light"
      />
    </>
  )
}