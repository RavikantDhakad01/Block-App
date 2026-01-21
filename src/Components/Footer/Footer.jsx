import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 flex items-center">
                <Logo size='w-25' />
              </div>
            
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            
              <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                    Pricing
                  </Link>
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


          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            
              <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul className='space-y-3'>
                <li >
                  <Link className="footer-link" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li >
                  <Link className="footer-link" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
