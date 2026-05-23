const Testimonials = () => {

  const testimonials = [

    {
      name: "Sarah Johnson",
      role: "Startup Founder",

      message:
        "Cohortia Labs transformed our idea into a scalable digital product with exceptional quality."
    },

    {
      name: "Michael Chen",
      role: "Product Manager",

      message:
        "The team delivered a modern, user-focused experience that exceeded our expectations."
    },

    {
      name: "Emily Davis",
      role: "CEO",

      message:
        "Professional execution, strong communication, and outstanding engineering quality."
    }

  ]

  return (

    <section className="bg-black text-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-400 uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-6xl font-bold mt-4">
            What Clients Say
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Trusted by startups and modern businesses.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-24">

          {
            testimonials.map((testimonial, index) => (

              <div
                key={index}
                className="
                  bg-gray-900
                  border
                  border-gray-800
                  rounded-3xl
                  p-10
                  hover:border-blue-500
                  transition
                "
              >

                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.message}"
                </p>

                <div className="mt-8">

                  <h3 className="text-2xl font-semibold">
                    {testimonial.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {testimonial.role}
                  </p>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Testimonials