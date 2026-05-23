const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold">
            Cohortia Labs
          </h2>

          <p className="text-gray-400 mt-2">
            Building modern digital experiences for startups.
          </p>
        </div>

        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-gray-400">
            Services
          </a>

          <a href="#" className="hover:text-gray-400">
            Features
          </a>

          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Footer