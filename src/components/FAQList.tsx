'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQListProps {
  title: string
  subtitle?: string
  faqs: FAQ[]
}

export function FAQList({ title, subtitle, faqs }: FAQListProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="bg-na-bg-light py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-na-primary sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index)
            return (
              <div key={index} className="bg-white rounded-na shadow-na">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus-visible:focus-visible"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-medium text-na-primary pr-4">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-na-accent shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-na-accent shrink-0" aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}