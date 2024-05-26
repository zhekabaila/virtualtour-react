import { technology } from '../../data/technology'

const Technology = () => {
  return (
    <section id="technology" className="p-4 lg:py-32 py-24 lg:px-32">
      <h2 className="text-xl lg:text-2xl text-sea font-semibold">Technology</h2>
      <p className="text-sm lg:text-base text-black font-normal mt-4 lg:mt-6">
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
  )
}

export default Technology
