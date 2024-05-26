const Hero = () => {
  return (
    <section id="hero">
      <div className="flex items-center justify-center bg-[url('/images/bangunan_utama.png')] bg-left-top lg:bg-center bg-no-repeat bg-cover h-screen">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-xl lg:text-3xl text-white font-semibold">
            Stemanika Virtual Tour
          </h2>
          <p className="text-center text-xs lg:text-base text-white font-extralight lg:font-thin mt-2">
            Are you ready for the fun virtual tour experience?
          </p>
          <a href="/tours/main">
            <div className="text-xs lg:text-base text-white font-semibold bg-primary px-4 lg:px-5 py-1.5 lg:py-1 rounded-md mt-6">
              START NOW!
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
