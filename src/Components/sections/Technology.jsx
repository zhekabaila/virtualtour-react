import { technology } from '../../data/technology'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Technology = () => {
  return (
    <section id="technology" className="p-4 lg:py-32 py-24 lg:px-32">
      <h2 className="text-xl lg:text-2xl text-sea font-semibold">Technology</h2>
      <p className="text-sm lg:text-base text-black font-normal mt-4 lg:mt-6">
        Berikut adalah teknologi yang kami gunakan untuk membuat aplikasi
        Virtual Tour :
      </p>

      <ul className="grid grid-cols-3 justify-items-center lg:flex lg:items-center gap-8 lg:gap-x-24 justify-center mt-10 lg:mt-20">
        {technology.map((item, index) => (
          <li key={index}>
            <LazyLoadImage
              alt={`${item.title} logo`}
              src={`images/technology/${item.icon}`}
              effect="blur"
              className={`${
                item.title === 'Tailwindcss'
                  ? 'aspect-video w-8 lg:w-20 h-auto'
                  : 'aspect-square size-8 lg:size-20'
              }`}
            />
            {/* <img
              src={`images/technology/${item.icon}`}
              alt={`${item.title} logo`}
              loading="lazy"
              className={`${
                item.title === 'Tailwindcss'
                  ? 'aspect-video w-8 lg:w-20 h-auto'
                  : 'aspect-square size-8 lg:size-20'
              }`}
            /> */}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Technology
