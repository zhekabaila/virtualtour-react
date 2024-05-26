const Tour = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center bg-black py-7">
          <h2 className="text-xl lg:text-2xl text-primary font-bold">Tour</h2>
        </div>
      </section>

      <section id="tour">
        <div className="flex items-center justify-center bg-[url('/images/bangunan_utama.png')] bg-center bg-no-repeat bg-cover h-[600px] px-4 lg:px-0">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-xl lg:text-3xl text-white font-semibold">
              Start your virtual tour now!
            </h2>
            <p className="text-center text-xs lg:text-base text-white font-thin mt-2">
              Mulai tur virtual-mu untuk menjelajahi SMKN 1 Majalengka dengan
              klik tombol di bawah ini.
            </p>
            <a href="/tours/main">
              <div className="text-xs lg:text-base text-primary font-semibold bg-white px-4 lg:px-5 py-1.5 lg:py-1 rounded-md mt-6">
                Mulai Jelajahi
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tour
