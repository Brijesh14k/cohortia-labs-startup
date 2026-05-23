
import { Link } from "react-router-dom"

const Features = () => {
  return (

    <section
      id="features"
      className="bg-black text-white py-32 px-6"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>

          <p className="text-blue-400 uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="text-6xl font-bold mt-4 leading-tight">
            Building Products That Users Love
          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-relaxed">
            We help startups and businesses transform ideas into
            scalable digital products with modern design and engineering.
          </p>

          <Link
            to="/about"
            className="
              inline-block
              mt-10
              bg-white
              text-black
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
            "
          >
            Learn More
          </Link>

        </div>

        <div className="space-y-8">

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <h3 className="text-3xl font-semibold">
              Scalable Architecture
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Engineered for performance, maintainability, and long-term growth.
            </p>

          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <h3 className="text-3xl font-semibold">
              Rapid Product Development
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Faster launch cycles using modern full-stack technologies.
            </p>

          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <h3 className="text-3xl font-semibold">
              User-Centered Experiences
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Interfaces crafted with clarity, usability, and engagement in mind.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Features