
import {
  FaCode,
  FaLaptopCode,
  FaRocket
} from "react-icons/fa"

import { Link } from "react-router-dom"

const Services = () => {

  const services = [

    {
      icon: <FaCode />,
      title: "Web Development",

      description:
        "Scalable and modern web applications built using cutting-edge technologies.",

      link: "/services/web-development"
    },

    {
      icon: <FaLaptopCode />,
      title: "UI/UX Design",

      description:
        "Clean, intuitive, and conversion-focused user experiences.",

      link: "/services/ui-ux"
    },

    {
      icon: <FaRocket />,
      title: "Startup Growth",

      description:
        "Helping startups launch, scale, and optimize digital products.",

      link: "/services/startup-growth"
    }

  ]

  return (

    <section
      id="services"
      className="bg-white py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 uppercase tracking-widest font-semibold">
            Services
          </p>

          <h2 className="text-6xl font-bold mt-4 leading-tight">
            Solutions Designed For Modern Businesses
          </h2>

          <p className="text-gray-500 mt-6 text-lg leading-relaxed">
            We combine technology, design, and strategy to help
            businesses build impactful digital experiences.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-24">

          {
            services.map((service, index) => (

              <Link
                key={index}
                to={service.link}
                className="
                  group
                  bg-gray-50
                  hover:bg-black
                  hover:text-white
                  transition
                  duration-500
                  rounded-3xl
                  p-10
                  shadow-lg
                  hover:-translate-y-3
                  block
                "
              >

                <div className="text-5xl mb-8 text-blue-600">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-6 text-gray-500 group-hover:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

              </Link>

            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Services