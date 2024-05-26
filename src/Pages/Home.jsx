import Container from '../Components/Container'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const Home = () => {
  const technology = [
    {
      title: 'React',
      icon: '/react.png',
    },
    {
      title: 'Tailwindcss',
      icon: '/tailwindcss.png',
    },
    {
      title: 'HTML',
      icon: '/html.png',
    },
    {
      title: 'CSS',
      icon: '/css.png',
    },
    {
      title: 'Javascript',
      icon: '/javascript.png',
    },
    {
      title: 'Vite',
      icon: '/vite.png',
    },
  ]

  return (
    <Container>
      <section id="hero">
        <div className="flex items-center justify-center bg-[url('/images/bangunan_utama.png')] bg-center bg-no-repeat bg-cover h-screen">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-white font-semibold">
              Stemanika Virtual Tour
            </h2>
            <p className="text-base text-white font-thin mt-2">
              Are you ready for the fun virtual tour experience?
            </p>
            <a href="#">
              <div className="text-base text-white font-semibold bg-primary px-5 py-1 rounded-md mt-6">
                START NOW!
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="p-32">
        <h2 className="text-2xl text-sea font-semibold">About</h2>
        <p className="text-base text-black font-normal mt-6">
          Virtual Tour SMKN 1 Majalengka adalah aplikasi yang dibuat untuk
          memungkinkan pengguna dapat menjelajahi sekolah kami dari segala sudut
          yang menarik. Hanya dengan sentuhan, pengalaman mengunjungi kampus
          SMKN 1 Majalengka bisa dilakukan di mana saja dan kapan saja.
        </p>
      </section>

      <section id="technology" className="p-32">
        <h2 className="text-2xl text-sea font-semibold">Technology</h2>
        <p className="text-base text-black font-normal mt-6">
          Berikut adalah teknologi yang kami gunakan untuk membuat aplikasi
          Virtual Tour :
        </p>

        <ul className="flex items-center gap-x-24 justify-center mt-20">
          {technology.map((item, index) => (
            <li key={index}>
              <img
                src={`technology/${item.icon}`}
                alt={item.title}
                className={`${
                  item.title === 'Tailwindcss'
                    ? 'aspect-video w-20 h-auto'
                    : 'aspect-square size-w-20'
                }`}
              />
            </li>
          ))}
        </ul>
      </section>

      <section id="places" className="p-32 bg-primary">
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
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-[220px] h-[294.5px]">
            <a href="#">
              <img
                src="/stemanika_card.png"
                alt=""
                className="object-center object-cover"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </section>

      <section>
        <div className="flex items-center justify-center bg-black py-7">
          <h2 className="text-2xl text-primary font-bold">Tour</h2>
        </div>
      </section>

      <section id="tour">
        <div className="flex items-center justify-center bg-[url('/images/bangunan_utama.png')] bg-center bg-no-repeat bg-cover h-[600px]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-white font-semibold">
              Start your virtual tour now!
            </h2>
            <p className="text-base text-white font-thin mt-2">
              Mulai tur virtual-mu untuk menjelajahi SMKN 1 Majalengka dengan
              klik tombol di bawah ini.
            </p>
            <a href="#">
              <div className="text-base text-primary font-semibold bg-white px-5 py-1 rounded-md mt-6">
                Mulai Jelajahi
              </div>
            </a>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Home
