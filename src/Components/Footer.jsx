const Footer = () => {
  return (
    <footer className="px-4 lg:px-32 py-24 bg-white" id="contact">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
        <h2 className="text-black text-lg lg:text-xl font-bold">Contact Us</h2>
        <ul className="flex flex-col lg:flex-row lg:items-center gap-x-16 gap-y-3">
          <li>
            <a
              href="https://wa.me/6285320050050"
              target="_blank"
              className="flex items-center gap-x-4"
            >
              <img
                src="/icons/phone.png"
                alt="phone icon"
                loading="lazy"
                className="aspect-square size-4"
              />
              <p className="text-xs lg:text-sm text-black font-medium">
                +62 853-2005-0050
              </p>
            </a>
          </li>
          <li>
            <a
              href="mailto:tefa.rplstemanika55@gmail.com"
              target="_blank"
              className="flex items-center gap-x-4"
            >
              <img
                src="/icons/mail.png"
                alt="main icon"
                loading="lazy"
                className="aspect-square size-4"
              />
              <p className="text-xs lg:text-sm text-black font-medium">
                tefa.rplstemanika55@gmail.com
              </p>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/smkn1majalengka"
              target="_blank"
              className="flex items-center gap-x-4"
            >
              <img
                src="/icons/instagram.png"
                alt="instagram icon"
                loading="lazy"
                className="aspect-square size-4"
              />
              <p className="text-xs lg:text-sm text-black font-medium">
                smkn1majalengka
              </p>
            </a>
          </li>
        </ul>
      </div>
      <p className="text-sm lg:text-base text-center text-sea font-bold mt-16 lg:mt-24">
        &copy; &nbsp; &nbsp; SMK NEGERI 1 MAJALENGKA
      </p>
    </footer>
  )
}

export default Footer
