import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="relative bg-white p-8 rounded-na shadow-na border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-na-accent mr-3" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-na-primary">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-na-accent hover:text-blue-600 focus-visible:focus-visible font-medium transition-colors"
      >
        Learn more
        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

interface Service {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

interface ServiceCardsProps {
  services: Service[]
}

export function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <section className="bg-na-bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-na-primary sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to transform your business operations
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}