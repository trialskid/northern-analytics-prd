import { Metadata } from 'next'
import { LeadForm } from '@/components/LeadForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Get Started with Your Business Transformation',
  description: 'Ready to automate processes and unlock business intelligence? Contact Northern Analytics to discuss your project and get a free consultation.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-na-bg-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-na-primary sm:text-5xl">
              Let's Transform Your Business
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Ready to eliminate manual work, reduce errors, and unlock powerful business insights? Get in touch to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-na-primary mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-na-accent mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-na-primary">Email</h3>
                    <p className="text-gray-600">contact@northern-analytics.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-na-accent mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-na-primary">Location</h3>
                    <p className="text-gray-600">Remote & On-site Services</p>
                    <p className="text-sm text-gray-500 mt-1">Serving clients worldwide</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-na-accent mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-na-primary">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 4:00 PM MST</p>
                    <p className="text-sm text-gray-500 mt-1">Response within one business day and same-day emergency support for existing clients</p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-12 p-6 bg-na-bg-light rounded-na">
                <h3 className="text-lg font-semibold text-na-primary mb-4">What Happens Next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-na-accent rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-na-primary">Initial Consultation</p>
                      <p className="text-sm text-gray-600">We'll discuss your needs and challenges in a free 30-minute call</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-na-accent rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-na-primary">Solution Proposal</p>
                      <p className="text-sm text-gray-600">Receive a detailed proposal with timeline and investment information</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-na-accent rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-na-primary">Project Kickoff</p>
                      <p className="text-sm text-gray-600">Begin the discovery phase and start transforming your business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <LeadForm
                title="Start Your Project"
                subtitle="Tell us about your needs and we'll get back to you within 24 hours"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}