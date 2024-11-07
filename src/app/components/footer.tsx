import Link from "next/link"

export default function footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">XpertIndicator</h2>
            <p className="text-gray-300 max-w-md">
              Be part of a growing Wealth. Get insights, strategies, & stay updated with the latest Trades Signals.
            </p>
          </div>

          {/* Free Trail */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Free Trail</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Telegram
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                Email:{" "}
                <Link href="mailto:support@xpertindicator.com" className="text-blue-400 hover:text-blue-300">
                  support@xpertindicator.com
                </Link>
              </p>
              <p className="text-gray-300">
                Phone:{" "}
                <Link href="tel:+11234567890" className="text-blue-400 hover:text-blue-300">
                  +91 99454 05632
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 XpertIndicator. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}