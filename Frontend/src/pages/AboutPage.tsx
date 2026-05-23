import { Link } from "react-router-dom"

const AboutPage = () => {
  return (

    <div className="min-h-screen bg-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-32">

        <Link
          to="/"
          className="text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </Link>

        <h1 className="text-6xl font-bold mt-16">
          About Cohortia Labs
        </h1>

        <p className="text-gray-400 text-xl mt-10 leading-relaxed max-w-4xl">
          Cohortia Labs is focused on helping startups and businesses
          create scalable digital products through modern development,
          clean design, and startup-focused engineering practices.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-semibold">
              Product Thinking
            </h3>

            <p className="text-gray-400 mt-4">
              We focus on solving real business problems.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-semibold">
              Modern Engineering
            </h3>

            <p className="text-gray-400 mt-4">
              Built with scalable and maintainable technologies.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-semibold">
              Startup Focus
            </h3>

            <p className="text-gray-400 mt-4">
              Designed for growth, speed, and usability.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AboutPage