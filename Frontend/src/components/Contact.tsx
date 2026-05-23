import { useState } from "react"
import axios from "axios"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (
  e: React.FormEvent
) => {

  e.preventDefault()

  setLoading(true)

  try {

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/contact/`,
      formData
    )

    setSuccess(response.data.message)

    setFormData({
      name: "",
      email: "",
      message: ""
    })

  } catch (error) {

    console.log(error)

  } finally {

    setLoading(false)

  }
}

  return (
  <section
    id="contact"
    className="bg-gradient-to-b from-black to-gray-900 text-white py-28 px-6"
  >

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

      <div>

        <p className="text-blue-400 uppercase tracking-widest">
          Contact Us
        </p>

        <h2 className="text-5xl font-bold mt-4 leading-tight">
          Let’s Build Your Next Digital Product
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          We help startups and businesses create scalable,
          modern, and user-focused digital experiences.
        </p>

        <div className="mt-10 space-y-4">

          <div className="bg-gray-800 p-4 rounded-xl">
            Fast response within 24 hours
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            Modern scalable solutions
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            Startup-focused product strategy
          </div>

        </div>

      </div>

      <div className="bg-gray-950 p-8 rounded-3xl shadow-2xl border border-gray-800">

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <label className="block mb-2 text-gray-300">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Message
            </label>

            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-gray-700 h-40 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
          >

            {
              loading
                ? "Sending..."
                : "Send Message"
            }

          </button>

        </form>

        {
          success && (
            <p className="text-green-400 mt-6 text-center">
              {success}
            </p>
          )
        }

      </div>

    </div>

  </section>
)
}

export default Contact