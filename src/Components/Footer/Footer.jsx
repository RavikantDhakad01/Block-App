import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="mt-10 py-10 bg-gray-400 border-t border-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 flex items-center">
                <Logo size='w-25' />
              </div>

              <p className="text-sm text-gray-700">
                &copy;{new Date().getFullYear()}<span className='font-medium'>
                  postiqo
                </span> - Built by Ravikant Dhakad
              </p>

            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">

            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500">
              Social
            </h3>
            <ul className='space-y-3'>
              <li >
                <a
                  href="https://github.com/RavikantDhakad01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  GitHub
                </a>
              </li>
              <li >
                <a
                  href="https://www.linkedin.com/in/ravikant-dhakad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>

          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">

            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500">
              Support
            </h3>
            <ul>
              <li >
                <Link className="footer-link" to="/">
                  Account
                </Link>
              </li>
              <li >
                <Link className="footer-link" to="/">
                  Help
                </Link>
              </li>
              <li >
                <Link className="footer-link" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>

          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500">
              Project
            </h3>
            <ul className="space-y-3">
              <li className="text-base text-gray-800">React</li>
              <li className="text-base text-gray-800">Appwrite</li>
              <li className="text-base text-gray-800">Tailwind CSS</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
