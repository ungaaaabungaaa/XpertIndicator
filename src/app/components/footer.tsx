import Link from "next/link"

export default function footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">HappyMo.Club</h2>
            <p className="text-gray-300 max-w-md">
              Join the Path to Prosperity – 1% Growth a Day Keeps Poverty at Bay.
            </p>
          </div>

          {/* Free Trail */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                40x Challenge
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                AI Indicator
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
                  support@happymo.club
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 HappyMo.Club All rights reserved.
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