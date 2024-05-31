import 'swiper/css'
import 'swiper/css/navigation'
import { useState } from 'react'
import Place from '../Modals/Place'
import { places } from '../../data/places'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Places = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  function open(item) {
    setSelectedItem(item)
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
    setSelectedItem(null)
  }

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
            <button type="button" onClick={() => open(item)}>
              <div className="flex items-end justify-center bg-transparent group-hover:bg-black group-hover:bg-opacity-40 size-full absolute rounded-xl py-12 transition-all ease-in-out duration-300 z-30">
                <p className="text-transparent group-hover:text-white text-xl font-bold transition-all ease-in-out duration-300">
                  {item.title}
                </p>
              </div>
              <div>
                <LazyLoadImage
                  alt={`${item.title} image`}
                  src={item.image} // use normal <img> attributes as props
                  height={294.5}
                  width={220}
                  effect="blur"
                  className="object-center object-cover rounded-xl group-hover:scale-110 transition-all ease-in-out duration-300"
                />
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedItem && (
        <Place
          title={selectedItem.title}
          description={selectedItem.description}
          link={selectedItem.link}
          image={selectedItem.image}
          isOpen={isOpen}
          open={open}
          close={close}
        />
      )}
    </section>
  )
}

export default Places
