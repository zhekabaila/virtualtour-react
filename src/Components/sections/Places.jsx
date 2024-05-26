import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Places = () => {
  const renderCard = (limit) => {
    const cards = Array.from({ length: limit + 1 })

    // Map over the array to render the components
    return cards.map((_, index) => (
      <SwiperSlide key={index} className="w-[220px] h-[294.5px]">
        <a href="/tours/main">
          <img
            src="/images/stemanika_card.png"
            alt="card"
            className="object-center object-cover"
          />
        </a>
      </SwiperSlide>
    ))
  }

  return (
    <section id="places" className="px-4 py-24 lg:p-32 bg-primary">
      <h2 className="text-2xl text-white font-semibold">Places</h2>
      <p className="text-base text-white font-normal mt-6">
        Jelajahi tempat-tempat menarik dari berbagai sudut!
      </p>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mt-11 relative"
        slidesPerView="auto"
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {renderCard(10)}
      </Swiper>
    </section>
  )
}

export default Places
