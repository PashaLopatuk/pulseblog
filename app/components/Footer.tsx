import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="mb-6 md:w-1/2 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-lime-500 dark:text-lime-500">youremail@example.com</p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <ul>
                <li className="mb-2">
                  <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-lime-500 dark:text-lime-500 hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-lime-500 dark:text-lime-500 hover:underline">
                    LinkedIn
                  </a>
                </li>
                {/* Add more social media links as needed */}
              </ul>
            </div>
          </div>
        </div>
    </footer>


  )
}

export default Footer