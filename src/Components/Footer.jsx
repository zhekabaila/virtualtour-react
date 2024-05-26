const Footer = () => {
  return (
    <footer className="px-32 py-24 bg-white" id="contact">
      <div className="flex items-center justify-between gap-7">
        <h2 className="text-black text-xl font-bold">Contact Us</h2>
        <ul className="flex items-center gap-x-16">
          <li>
            <a href="#" className="flex items-center gap-x-4">
              <img
                src="/icon/phone.png"
                alt=""
                className="aspect-square size-4"
              />
              <p className="text-sm text-black font-medium">
                + 62 1234-5678-0910
              </p>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-x-4">
              <img
                src="/icon/mail.png"
                alt=""
                className="aspect-square size-4"
              />
              <p className="text-sm text-black font-medium">
                eagendakelas55@gmail.com
              </p>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-x-4">
              <img
                src="/icon/instagram.png"
                alt=""
                className="aspect-square size-4"
              />
              <p className="text-sm text-black font-medium">smkn1majalengka</p>
            </a>
          </li>
        </ul>
      </div>
      <p className="text-base text-center text-sea font-bold mt-24">
        &copy; &nbsp; &nbsp; SMK NEGERI 1 MAJALENGKA
      </p>
    </footer>
  )
}

export default Footer
