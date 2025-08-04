'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

interface LeadFormProps {
  title?: string
  subtitle?: string
}

export function LeadForm({ title = "Get Started", subtitle = "Ready to transform your business? Let's discuss your needs." }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        window.location.href = '/thanks'
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'There was an error submitting the form. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-na-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-na-bg-light p-8 rounded-na shadow-na" noValidate>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-na shadow-sm focus:outline-none focus:ring-2 focus:ring-na-accent focus:border-na-accent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-describedby={errors.name ? 'name-error' : undefined}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-na shadow-sm focus:outline-none focus:ring-2 focus:ring-na-accent focus:border-na-accent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-na shadow-sm focus:outline-none focus:ring-2 focus:ring-na-accent focus:border-na-accent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-na shadow-sm focus:outline-none focus:ring-2 focus:ring-na-accent focus:border-na-accent"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-na shadow-sm focus:outline-none focus:ring-2 focus:ring-na-accent focus:border-na-accent"
            >
              <option value="">Select a service</option>
              <option value="automation">Process Automation</option>
              <option value="apps">Custom Applications</option>
              <option value="analytics">Business Intelligence & Analytics</option>
              <option value="consulting">General Consulting</option>
            </select>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-na shadow-sm focus:outline-none focus:ring-2 focus:ring-na-accent focus:border-na-accent ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tell us about your project or needs..."
              aria-describedby={errors.message ? 'message-error' : undefined}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {errors.submit && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-na">
              <p className="text-sm text-red-600" role="alert">{errors.submit}</p>
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-na text-white bg-na-accent hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-na-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}