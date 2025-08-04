import { Metadata } from 'next'
import { CTASection } from '@/components/CTASection'
import { Zap, Clock, TrendingDown, Smartphone, Database, Cog, BarChart3, PieChart, Activity, Share2, FileSpreadsheet, Users, Shield, FolderOpen, Globe, FileText, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Process Automation, Custom Apps & Business Intelligence',
  description: 'End-to-end automation, analytics, and custom application solutions on the Microsoft Power Platform.',
  alternates: {
    canonical: 'https://northern-analytics.com/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-na-bg-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-na-primary sm:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            End-to-end automation, analytics, and custom application solutions on the Microsoft Power Platform.
            </p>
          </div>
        </div>
      </section>

      {/* Process Automation Section */}
      <section id="automation" className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center mb-6">
                <Zap className="h-10 w-10 text-na-accent mr-4" />
                <h2 className="text-3xl font-bold text-na-primary">Process Automation</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
              Automate repetitive, rules-based workflows with Power Automate.
              </p>
              
              <h3 className="text-xl font-semibold text-na-primary mb-3">Common Pain Points We Solve:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Hours spent on manual data entry and processing</span>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Human errors in repetitive tasks</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Delayed responses to critical business events</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-na-primary mb-3">Our Solutions:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Workflow automation & orchestration</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Data integration & synchronization</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Real-time alerts & notifications</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Document processing & routing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-na-bg-light p-6 rounded-na">
              <h3 className="text-lg font-semibold text-na-primary mb-4">Automation ROI Calculator</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <div className="text-sm text-gray-600">Hours saved per week</div>
                  <div className="text-2xl font-bold text-na-primary">20-40 hours</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="text-sm text-gray-600">Cost savings per month</div>
                  <div className="text-2xl font-bold text-green-600">$3,200-$6,400</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="text-sm text-gray-600">Payback period</div>
                  <div className="text-2xl font-bold text-na-accent">2-4 months</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Centered CTA */}
          <div className="text-center bg-na-bg-light p-6 rounded-na shadow-na mx-auto max-w-md mt-8">
            <h3 className="text-xl font-semibold text-na-primary mb-3">Automate Your Processes</h3>
            <p className="text-gray-600 mb-4">Ready to eliminate manual work and reduce errors?</p>
            <a
              href="/contact"
              className="inline-block bg-na-accent text-white px-6 py-3 rounded-na font-medium hover:bg-blue-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Custom Applications Section */}
      <section id="apps" className="bg-na-bg-light py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-6 rounded-na shadow-na">
              <h3 className="text-lg font-semibold text-na-primary mb-4">Application Types We Build</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <Database className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">CRM Systems</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <Cog className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">ERP Solutions</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <Smartphone className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Mobile Apps</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <BarChart3 className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Dashboards</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Smartphone className="h-10 w-10 text-na-accent mr-4" />
                <h2 className="text-3xl font-bold text-na-primary">Custom Applications</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
              Deploy low-code apps 3× faster than traditional software development.
              </p>
              
              <h3 className="text-xl font-semibold text-na-primary mb-3">When Off-the-Shelf Isn't Enough:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Unique processes that don’t fit standard software</span>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Disconnected systems that can’t communicate</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">High licensing costs for unused features</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-na-primary mb-3">Our Approach:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Smartphone className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">User-centered design and development</span>
                </li>
                <li className="flex items-start">
                  <Smartphone className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Cloud-native and mobile-responsive solutions</span>
                </li>
                <li className="flex items-start">
                  <Smartphone className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Seamless integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <Smartphone className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Scalable architecture for future growth</span>
                </li>
              </ul>

            </div>
          </div>
          
          {/* Centered CTA */}
          <div className="text-center bg-white p-6 rounded-na shadow-na mx-auto max-w-md mt-8">
            <h3 className="text-xl font-semibold text-na-primary mb-3">Build Your Custom Solution</h3>
            <p className="text-gray-600 mb-4">Need software that works exactly how your business does?</p>
            <a
              href="/contact"
              className="inline-block bg-na-accent text-white px-6 py-3 rounded-na font-medium hover:bg-blue-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Business Intelligence Section */}
      <section id="analytics" className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center mb-6">
                <BarChart3 className="h-10 w-10 text-na-accent mr-4" />
                <h2 className="text-3xl font-bold text-na-primary">Business Intelligence & Analytics</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Transform your data into actionable insights with comprehensive analytics and reporting solutions.
              </p>
              
              <h3 className="text-xl font-semibold text-na-primary mb-3">Data Challenges We Solve:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Data scattered across multiple systems</span>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Manual report creation that drains analyst hours</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Lack of real-time visibility into business performance</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-na-primary mb-3">Our Analytics Solutions:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Executive dashboards and KPI tracking</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Automated reporting and data visualization</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Predictive analytics and forecasting</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Data warehouse and ETL solutions</span>
                </li>
              </ul>

            </div>
            
            <div className="bg-na-primary p-6 rounded-na text-white">
              <h3 className="text-lg font-semibold mb-4">Analytics Impact</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <PieChart className="h-8 w-8 text-na-highlight mr-4" />
                  <div>
                    <div className="text-2xl font-bold">~90%</div>
                    <div className="text-sm opacity-90">Faster Decision Making</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Activity className="h-8 w-8 text-na-highlight mr-4" />
                  <div>
                    <div className="text-2xl font-bold">~25%</div>
                    <div className="text-sm opacity-90">Revenue Increase</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-8 w-8 text-na-highlight mr-4" />
                  <div>
                    <div className="text-2xl font-bold">~80%</div>
                    <div className="text-sm opacity-90">Time Saved on Reporting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Centered CTA */}
          <div className="text-center bg-na-bg-light p-6 rounded-na shadow-na mx-auto max-w-md mt-8">
            <h3 className="text-xl font-semibold text-na-primary mb-3">Schedule a BI Strategy Call</h3>
            <p className="text-gray-600 mb-4">Ready to make data-driven decisions with confidence?</p>
            <a
              href="/contact"
              className="inline-block bg-na-accent text-white px-6 py-3 rounded-na font-medium hover:bg-blue-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
      
      {/* SharePoint Section */}
      <section id="sharepoint" className="bg-na-bg-light py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center mb-6">
                <Share2 className="h-10 w-10 text-na-accent mr-4" />
                <h2 className="text-3xl font-bold text-na-primary">SharePoint Solutions</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Create modern intranets, automate document workflows, and build secure collaboration hubs that connect your entire organization.
              </p>
              
              <h3 className="text-xl font-semibold text-na-primary mb-3">SharePoint Challenges We Solve:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Outdated, disconnected company intranets</span>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Manual document approval and routing processes</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Scattered files across multiple systems and drives</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Lack of centralized, secure document management</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-na-primary mb-3">Our SharePoint Solutions:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Modern intranet portals with news, announcements, and collaboration spaces</span>
                </li>
                <li className="flex items-start">
                  <FolderOpen className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Automated document libraries with version control and metadata</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Workflow automation for approvals, reviews, and routing</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Secure external sharing and permissions management</span>
                </li>
              </ul>

            </div>
            
            <div className="bg-white p-6 rounded-na shadow-na">
              <h3 className="text-lg font-semibold text-na-primary mb-4">SharePoint Solutions We Build</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <Globe className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Modern Intranets</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <FileText className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Document Libraries</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <Users className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Team Sites</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <Zap className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Workflow Automation</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <Search className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Enterprise Search</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <Shield className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Permission Centers</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Centered CTA */}
          <div className="text-center bg-white p-6 rounded-na shadow-na mx-auto max-w-md mt-8">
            <h3 className="text-xl font-semibold text-na-primary mb-3">Transform Your Intranet</h3>
            <p className="text-gray-600 mb-4">Ready to create a modern, connected workplace?</p>
            <a
              href="/contact"
              className="inline-block bg-na-accent text-white px-6 py-3 rounded-na font-medium hover:bg-blue-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Excel Section */}
      <section id="excel" className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-6 rounded-na shadow-na">
              <h3 className="text-lg font-semibold text-na-primary mb-4">Excel Solutions We Build</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <FileSpreadsheet className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Financial Models & Forecasting</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <BarChart3 className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Dynamic Dashboards & KPIs</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <Database className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Data Analysis Templates</span>
                </div>
                <div className="flex items-center p-2 bg-na-bg-light rounded">
                  <Zap className="h-6 w-6 text-na-accent mr-3" />
                  <span className="text-sm font-medium">Automated Reports</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <FileSpreadsheet className="h-10 w-10 text-na-accent mr-4" />
                <h2 className="text-3xl font-bold text-na-primary">Excel Templates & Engineering</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Build robust, maintainable Excel solutions that handle complex calculations, scale with your data, and provide reliable insights for critical business decisions.
              </p>
              
              <h3 className="text-xl font-semibold text-na-primary mb-3">Excel Challenges We Solve:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Fragile spreadsheets that break with new data</span>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Manual calculations prone to human error</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Complex models only one person understands</span>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Time-consuming monthly/quarterly reporting</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-na-primary mb-3">Our Excel Engineering Solutions:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <FileSpreadsheet className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Structured, documented templates with clear logic flows</span>
                </li>
                <li className="flex items-start">
                  <Database className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Dynamic data connections and automated refresh</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Interactive dashboards with drill-down capabilities</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Error-checking and validation to ensure data integrity</span>
                </li>
              </ul>

            </div>
          </div>
          
          {/* Centered CTA */}
          <div className="text-center bg-na-bg-light p-6 rounded-na shadow-na mx-auto max-w-md mt-8">
            <h3 className="text-xl font-semibold text-na-primary mb-3">Upgrade Your Excel Game</h3>
            <p className="text-gray-600 mb-4">Ready to build spreadsheets that actually scale?</p>
            <a
              href="/contact"
              className="inline-block bg-na-accent text-white px-6 py-3 rounded-na font-medium hover:bg-blue-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how our services can streamline your operations and unlock new growth opportunities."
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn About Our Process"
        secondaryButtonHref="/process"
        backgroundVariant="light"
      />
    </>
  )
}