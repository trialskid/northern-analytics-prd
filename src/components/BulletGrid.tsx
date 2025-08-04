import { Check } from 'lucide-react'

interface BulletPoint {
  text: string
}

interface BulletGridProps {
  title: string
  subtitle?: string
  bullets: BulletPoint[]
}

export function BulletGrid({ title, subtitle, bullets }: BulletGridProps) {
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bullets.map((bullet, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-gray-700">{bullet.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}