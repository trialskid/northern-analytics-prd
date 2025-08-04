interface ProcessPhase {
  phase: string
  activities: string[]
  deliverables: string[]
  duration: string
}

interface ProcessTableProps {
  title: string
  subtitle?: string
  phases: ProcessPhase[]
}

export function ProcessTable({ title, subtitle, phases }: ProcessTableProps) {
  return (
    <section className="bg-white py-16">
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

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 bg-white shadow-na rounded-na">
            <thead className="bg-na-bg-light">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-na-primary uppercase tracking-wider">
                  Phase
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-na-primary uppercase tracking-wider">
                  What We Do
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-na-primary uppercase tracking-wider">
                  Key Outputs
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-na-primary uppercase tracking-wider">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {phases.map((phase, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-na-primary">{phase.phase}</div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="text-sm text-gray-600 space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="text-sm text-gray-600 space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-na-highlight text-white">
                      {phase.duration}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}