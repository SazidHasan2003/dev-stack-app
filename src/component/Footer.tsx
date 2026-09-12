import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="w-full bg-white text-slate-600 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-100 mt-10">
      <div className="max-w-356.25 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left mb-16">
          <div className="space-y-4 md:col-span-1 flex flex-col items-center md:items-start">
            <div className="logo">
              <img src={logo} alt="Dev Stack logo" className="h-8 w-auto" />
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center space-x-2 md:space-x-4 text-sm font-semibold text-slate-700 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D91B7E] transition-colors"
              >
                GitHub
              </a>
              <span className="md:hidden text-slate-400">•</span>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D91B7E] transition-colors"
              >
                Twitter
              </a>
              <span className="md:hidden text-slate-400">•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D91B7E] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden md:block space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              PRODUCT
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#D91B7E] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="hover:text-[#D91B7E] transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#D91B7E] transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#D91B7E] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#D91B7E] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-[#D91B7E] transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              LEGAL
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a
                  href="#privacy"
                  className="hover:text-[#D91B7E] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-[#D91B7E] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a
              href="#privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
