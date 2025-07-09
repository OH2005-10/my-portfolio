export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-white">© 2025 Chanhthaphone Vongkhamxay. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/oh.vongkhamxay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              Facebook
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
