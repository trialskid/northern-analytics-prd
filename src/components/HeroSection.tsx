import Link from 'next/link'
import Image from 'next/image'

interface HeroSectionProps {
  headline: string
  sub: string
  buttonText: string
  buttonHref: string
  backgroundImage?: string
}

export function HeroSection({ headline, sub, buttonText, buttonHref, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative bg-na-bg-light py-24 sm:py-32" role="banner">
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
      )}
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-na-primary sm:text-6xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {sub}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={buttonHref}
              className="rounded-na bg-na-accent px-6 py-3 text-sm font-semibold text-white shadow-na hover:bg-blue-500 focus-visible:focus-visible transition-all duration-200"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}