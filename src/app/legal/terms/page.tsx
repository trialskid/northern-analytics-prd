import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Northern Analytics',
  description: 'Terms of service for Northern Analytics - the legal terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-na-primary sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the Northern Analytics website and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
          </p>

          <h2>Description of Services</h2>
          <p>
            Northern Analytics provides business intelligence, process automation, and custom application development services. Our services include consulting, software development, system integration, and ongoing support.
          </p>

          <h2>Use of Our Services</h2>
          <h3>Eligibility</h3>
          <p>
            You must be at least 18 years old and have the legal capacity to enter into agreements to use our services.
          </p>

          <h3>Acceptable Use</h3>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You may not:</p>
          <ul>
            <li>Use our services for any illegal or unauthorized purpose</li>
            <li>Interfere with or disrupt our services or servers</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
          </ul>

          <h2>Service Agreements</h2>
          <p>
            Specific services will be governed by separate service agreements that outline:
          </p>
          <ul>
            <li>Project scope and deliverables</li>
            <li>Timeline and milestones</li>
            <li>Payment terms and conditions</li>
            <li>Intellectual property ownership</li>
            <li>Confidentiality requirements</li>
          </ul>

          <h2>Payment Terms</h2>
          <p>
            Payment terms for services will be specified in individual service agreements. Generally:
          </p>
          <ul>
            <li>Invoices are payable within 30 days of receipt</li>
            <li>Late payments may incur interest charges</li>
            <li>Refunds are subject to the terms of individual agreements</li>
            <li>All prices are exclusive of applicable taxes</li>
          </ul>

          <h2>Intellectual Property</h2>
          <h3>Our IP</h3>
          <p>
            The Northern Analytics website, content, and proprietary methodologies are protected by intellectual property laws. We retain all rights to our intellectual property.
          </p>

          <h3>Client IP</h3>
          <p>
            Clients retain ownership of their data and business processes. Custom solutions developed for clients will typically be owned by the client, as specified in service agreements.
          </p>

          <h2>Confidentiality</h2>
          <p>
            We understand the sensitive nature of business information and maintain strict confidentiality. We will:
          </p>
          <ul>
            <li>Keep all client information confidential</li>
            <li>Use information only for the agreed purposes</li>
            <li>Implement appropriate security measures</li>
            <li>Not disclose information to third parties without consent</li>
          </ul>

          <h2>Warranties and Disclaimers</h2>
          <h3>Service Warranty</h3>
          <p>
            We warrant that our services will be performed in a professional manner in accordance with industry standards.
          </p>

          <h3>Disclaimers</h3>
          <p>
            Our website and general information are provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Northern Analytics shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold Northern Analytics harmless from any claims, damages, or expenses arising from your use of our services or breach of these Terms.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access to our services at any time for violation of these Terms. You may terminate your use of our services at any time.
          </p>

          <h2>Privacy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Your State/Province] without regard to conflict of law principles. Any disputes will be resolved in the courts of [Your Jurisdiction].
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting updated Terms on our website. Continued use of our services constitutes acceptance of modified Terms.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
          </p>

          <h2>Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and Northern Analytics.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have questions about these Terms, please contact us at:
          </p>
          <p>
            <strong>Northern Analytics</strong><br />
            Email: legal@northern-analytics.com<br />
            Phone: (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  )
}