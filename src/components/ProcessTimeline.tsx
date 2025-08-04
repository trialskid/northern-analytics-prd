interface TimelineStep {
  title: string
  description: string
  duration?: string
}

interface ProcessTimelineProps {
  title: string
  subtitle?: string
  steps: TimelineStep[]
  isTeaser?: boolean
}

export function ProcessTimeline({ title, subtitle, steps, isTeaser = false }: ProcessTimelineProps) {
  return (
    <section className="bg-na-bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-na-primary sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-1/2 md:transform md:-translate-x-px top-0 h-full w-0.5 bg-na-accent" aria-hidden="true"></div>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-na-accent rounded-full flex items-center justify-center z-20 shadow-md">
                  <span className="text-white font-semibold text-sm">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-6 md:text-right' : 'md:pl-6 md:ml-auto'}`}>
                  <div className={`bg-white p-4 rounded-na shadow-na relative ${index > 0 ? 'process-card-overlap' : ''}`}>
                    <h3 className="text-xl font-semibold text-na-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {step.description}
                    </p>
                    {step.duration && (
                      <span className="inline-block px-3 py-1 text-sm bg-na-highlight text-white rounded-full">
                        {step.duration}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}