
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Hero = () => {
  return (

    <section
      className="
        bg-gradient-to-b
        from-black
        via-gray-950
        to-black
        text-white
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-6
        pt-32
      "
    >

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          text-5xl
          md:text-7xl
          font-bold
          max-w-5xl
          leading-tight
        "
      >
        Build Smarter Digital Products
        For Modern Businesses
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="
          text-gray-400
          mt-8
          text-lg
          md:text-xl
          max-w-3xl
          leading-relaxed
        "
      >
        Cohortia Labs helps startups and businesses create scalable,
        user-focused digital experiences with modern technologies
        and startup-grade engineering.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.08 }}
        className="mt-10"
      >

        <Link
          to="/consultation"
          className="
            bg-white
            text-black
            px-8
            py-4
            rounded-2xl
            font-semibold
            shadow-lg
            hover:bg-gray-200
            transition
          "
        >
          Book Consultation
        </Link>

      </motion.div>

    </section>
  )
}

export default Hero