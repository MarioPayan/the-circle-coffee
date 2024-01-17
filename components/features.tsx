export default function Features({data}) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{data.title}</h2>
            <p className="text-xl text-gray-400">{data.subtitle}</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {data.items.map((item, i) => (
              <div key={i} className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                {item.icon}
                <h4 className="h4 mb-2">{item.title}</h4>
                <p className="text-lg text-gray-400 text-center">{item.subtitle}</p>
              </div>
            ))}


          </div>

        </div>
      </div>
    </section>
  )
}
