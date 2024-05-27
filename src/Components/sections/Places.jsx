import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { places } from '../../data/places'

const Places = () => {
  return (
    <section id="places" className="px-4 py-24 lg:p-32 bg-primary">
      <h2 className="text-2xl text-white font-semibold">Places</h2>
      <p className="text-base text-white font-normal mt-6">
        Jelajahi tempat-tempat menarik dari berbagai sudut!
      </p>

      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mt-11 relative"
        slidesPerView="auto"
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
      >
        {places.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-[220px] h-[294.5px] relative group overflow-hidden rounded-xl"
          >
            <a href={item.link}>
              <div className="flex items-end justify-center bg-transparent group-hover:bg-black group-hover:bg-opacity-40 size-full absolute rounded-xl py-12 transition-all ease-in-out duration-300 z-30">
                <p className="text-transparent group-hover:text-white text-xl font-bold transition-all ease-in-out duration-300">
                  {item.title}
                </p>
              </div>
              <div>
                <img
                  src={item.image}
                  alt="card"
                  className="object-center object-cover rounded-xl group-hover:scale-110 transition-all ease-in-out duration-300"
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Places
