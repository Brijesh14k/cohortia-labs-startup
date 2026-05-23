import { Link } from "react-router-dom"

interface ServiceLayoutProps {
  title: string
  description: string
  points: string[]
}

const ServiceLayout = ({
  title,
  description,
  points
}: ServiceLayoutProps) => {

  return (

    <div className="min-h-screen bg-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-32">

        <Link
          to="/"
          className="text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </Link>

        <div className="mt-16">

          <h1 className="text-6xl font-bold leading-tight">
            {title}
          </h1>

          <p className="text-gray-400 mt-8 text-xl leading-relaxed max-w-4xl">
            {description}
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">

          {
            points.map((point, index) => (

              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition"
              >

                <h3 className="text-2xl font-semibold">
                  {point}
                </h3>

              </div>

            ))
          }

        </div>

        <div className="mt-24">

          <Link
            to="/consultation"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition"
          >
            Book Consultation
          </Link>

        </div>

      </div>

    </div>
  )
}

export default ServiceLayout