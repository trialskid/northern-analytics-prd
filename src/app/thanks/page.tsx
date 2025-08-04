import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Calendar, FileText, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You - Message Received',
  description: 'Thank you for contacting Northern Analytics. We\'ll be in touch within 24 hours to discuss your project.',
}

export default function ThanksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-na-bg-light py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold tracking-tight text-na-primary sm:text-5xl mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your message has been received. We'll review your information and get back to you within 24 hours to discuss your project.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-na">
            <CheckCircle className="h-5 w-5 mr-2" />
            Message sent successfully
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-na-primary text-center mb-12">
            What Happens Next?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-na-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-na-primary mb-3">
                Review & Analysis
              </h3>
              <p className="text-gray-600">
                We'll review your message and prepare for our conversation by researching your industry and potential solutions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-na-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-na-primary mb-3">
                Schedule Consultation
              </h3>
              <p className="text-gray-600">
                We'll reach out to schedule a free 30-minute consultation at a time that works for you.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-na-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-na-primary mb-3">
                Discuss Solutions
              </h3>
              <p className="text-gray-600">
                We'll explore your challenges and discuss potential solutions tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-na-bg-light py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-na-primary text-center mb-12">
            Expected Timeline
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-na-accent"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-center">
                <div className="absolute left-4 w-8 h-8 bg-na-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">1</span>
                </div>
                <div className="ml-16 bg-white p-4 rounded-na shadow-na">
                  <h3 className="font-semibold text-na-primary">Within 24 Hours</h3>
                  <p className="text-gray-600 text-sm">Initial response and consultation scheduling</p>
                </div>
              </div>
              
              <div className="relative flex items-center">
                <div className="absolute left-4 w-8 h-8 bg-na-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">2</span>
                </div>
                <div className="ml-16 bg-white p-4 rounded-na shadow-na">
                  <h3 className="font-semibold text-na-primary">Week 1</h3>
                  <p className="text-gray-600 text-sm">Free consultation and needs assessment</p>
                </div>
              </div>
              
              <div className="relative flex items-center">
                <div className="absolute left-4 w-8 h-8 bg-na-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <div className="ml-16 bg-white p-4 rounded-na shadow-na">
                  <h3 className="font-semibold text-na-primary">Week 2</h3>
                  <p className="text-gray-600 text-sm">Detailed proposal and project plan</p>
                </div>
              </div>
              
              <div className="relative flex items-center">
                <div className="absolute left-4 w-8 h-8 bg-na-highlight rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">4</span>
                </div>
                <div className="ml-16 bg-white p-4 rounded-na shadow-na border-l-4 border-na-highlight">
                  <h3 className="font-semibold text-na-primary">Week 3+</h3>
                  <p className="text-gray-600 text-sm">Project kickoff and transformation begins!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-na-primary mb-8">
            While You Wait
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our resources to learn more about how we can help transform your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-na-accent text-na-accent hover:bg-na-accent hover:text-white rounded-na font-medium transition-all duration-200"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link
              href="/process"
              className="inline-flex items-center justify-center px-6 py-3 border border-na-accent text-na-accent hover:bg-na-accent hover:text-white rounded-na font-medium transition-all duration-200"
            >
              Learn About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-na-accent text-na-accent hover:bg-na-accent hover:text-white rounded-na font-medium transition-all duration-200"
            >
              About Jamey Gulley
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}