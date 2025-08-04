interface Stat {
  label: string
  value: string
}

interface StatGridProps {
  stats: Stat[]
}

export function StatGrid({ stats }: StatGridProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-na-primary">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}