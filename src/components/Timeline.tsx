interface TimelineEvent {
  year: string
  title: string
  description: string
  highlight?: boolean
}

interface TimelineProps {
  title: string
  events: TimelineEvent[]
}

export function Timeline({ title, events }: TimelineProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-na-primary text-center mb-12 sm:text-4xl">
          {title}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-na-accent" aria-hidden="true"></div>
          
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  event.highlight ? 'bg-na-highlight' : 'bg-na-accent'
                }`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="ml-12">
                  <div className={`p-6 rounded-na shadow-na ${
                    event.highlight ? 'bg-na-bg-light border-l-4 border-na-highlight' : 'bg-white'
                  }`}>
                    <div className="flex items-center mb-2">
                      <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                        event.highlight ? 'bg-na-highlight text-white' : 'bg-na-accent text-white'
                      }`}>
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-na-primary mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
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