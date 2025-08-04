import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-na-primary text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Company Info */}
          <div>
            <h3 className="text-base font-semibold text-white mb-2">Northern Analytics</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
            Northern Analytics delivers enterprise Power BI, Power Automate, Power Apps & SharePoint solutions that eliminate manual work and unlock data-driven growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white focus-visible:focus-visible transition-colors text-xs">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white focus-visible:focus-visible transition-colors text-xs">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-gray-300 hover:text-white focus-visible:focus-visible transition-colors text-xs">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white focus-visible:focus-visible transition-colors text-xs">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white focus-visible:focus-visible transition-colors text-xs">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-semibold text-white mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/legal/privacy" className="text-gray-300 hover:text-white focus-visible:focus-visible transition-colors text-xs">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-300 hover:text-white focus-visible:focus-visible transition-colors text-xs">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-700">
          <p className="text-center text-xs text-gray-300">
            © {new Date().getFullYear()} Northern Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}