import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Northern Analytics',
  description: 'Privacy policy for Northern Analytics - how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-na-primary sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            Northern Analytics ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and contact information (email, phone number)</li>
            <li>Company name and job title</li>
            <li>Project requirements and business information</li>
            <li>Communication preferences</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>We may automatically collect certain information about your device and usage:</p>
          <ul>
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring websites</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates about our services (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal requirements</li>
            <li>To protect our rights and safety</li>
            <li>With trusted service providers who assist in our operations</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
          </p>

          <h2>Third-Party Services</h2>
          <p>Our website may contain links to third-party services, including:</p>
          <ul>
            <li>Formspree (form processing)</li>
            <li>Plausible Analytics (website analytics)</li>
            <li>Google Fonts (web fonts)</li>
          </ul>
          <p>These services have their own privacy policies, which we encourage you to review.</p>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal requirements, or resolve disputes.
          </p>

          <h2>International Data Transfers</h2>
          <p>
            Your information may be processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            <strong>Northern Analytics</strong><br />
            Email: privacy@northern-analytics.com<br />
            Phone: (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  )
}