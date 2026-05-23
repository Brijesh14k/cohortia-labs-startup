const Stats = () => {

  const stats = [

    {
      number: "100+",
      label: "Projects Completed"
    },

    {
      number: "50+",
      label: "Happy Clients"
    },

    {
      number: "24/7",
      label: "Support"
    },

    {
      number: "99%",
      label: "Client Satisfaction"
    }

  ]

  return (

    <section className="bg-white py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-10 text-center">

          {
            stats.map((stat, index) => (

              <div
                key={index}
                className="
                  bg-gray-50
                  rounded-3xl
                  p-10
                  shadow-lg
                  hover:-translate-y-2
                  transition
                "
              >

                <h2 className="text-5xl font-bold text-blue-600">
                  {stat.number}
                </h2>

                <p className="text-gray-500 mt-4 text-lg">
                  {stat.label}
                </p>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Stats