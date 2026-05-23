
import { useState } from "react"
import { Link } from "react-router-dom"

import {
  FaBars,
  FaTimes
} from "react-icons/fa"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav
      className="
        w-full
        fixed
        top-0
        left-0
        z-50
        bg-[#0B0B0F]
        border-b
        border-gray-800
        shadow-lg
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          justify-between
          items-center
          px-6
          py-5
        "
      >

        <h1 className="text-4xl font-bold text-white">
          Cohortia Labs
        </h1>

        <div className="hidden md:flex items-center gap-8">

          <a
            href="#services"
            className="text-gray-300 hover:text-white transition"
          >
            Services
          </a>

          <a
            href="#features"
            className="text-gray-300 hover:text-white transition"
          >
            Features
          </a>

          <Link
            to="/consultation"
            className="
              bg-white
              text-black
              px-6
              py-3
              rounded-2xl
              font-semibold
              hover:bg-gray-200
              transition
            "
          >
            Contact
          </Link>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >

          {
            menuOpen
              ? <FaTimes />
              : <FaBars />
          }

        </button>

      </div>

      {
        menuOpen && (

          <div
            className="
              md:hidden
              bg-black
              border-t
              border-gray-800
              px-6
              py-6
              space-y-6
            "
          >

            <a
              href="#services"
              className="block text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>

            <a
              href="#features"
              className="block text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>

            <Link
              to="/consultation"
              className="
                inline-block
                bg-white
                text-black
                px-5
                py-3
                rounded-xl
                font-semibold
              "
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

          </div>

        )
      }

    </nav>
  )
}

export default Navbar