import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  backgroundVariant?: 'primary' | 'accent' | 'light' | 'white'
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundVariant = 'primary'
}: CTASectionProps) {
  const bgClass = {
    primary: 'bg-na-primary text-white',
    accent: 'bg-na-accent text-white',
    light: 'bg-na-bg-light text-na-primary',
    white: 'bg-white text-na-primary'
  }[backgroundVariant]

  const buttonClass = backgroundVariant === 'light' || backgroundVariant === 'white'
    ? 'bg-na-accent text-white hover:bg-blue-600'
    : 'bg-white text-na-primary hover:bg-gray-100'

  const secondaryButtonClass = backgroundVariant === 'light' || backgroundVariant === 'white'
    ? 'border-na-primary text-na-primary hover:bg-na-primary hover:text-white'
    : 'border-white text-white hover:bg-white hover:text-na-primary'

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={primaryButtonHref}
              className={`rounded-na px-6 py-3 text-sm font-semibold shadow-na focus-visible:focus-visible transition-all duration-200 ${buttonClass}`}
            >
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className={`rounded-na border-2 px-6 py-3 text-sm font-semibold focus-visible:focus-visible transition-all duration-200 ${secondaryButtonClass}`}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}