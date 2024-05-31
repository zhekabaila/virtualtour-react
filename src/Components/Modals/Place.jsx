import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import PropTypes from 'prop-types'

export default function Place({
  title,
  image,
  link,
  description,
  isOpen,
  close,
}) {
  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="relative z-[60] focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full max-w-4xl rounded-xl bg-white/80 px-6 pt-3 pb-6 backdrop-blur-2xl">
                <div className="w-full h-full">
                  <button
                    type="button"
                    onClick={close}
                    className="flex items-center justify-end w-full mb-5 group"
                  >
                    <img
                      src="/icons/close.svg"
                      alt="close"
                      width={30}
                      height={30}
                      className="group-hover:scale-110 transition-all ease-in-out duration-150"
                    />
                  </button>
                  <div className="flex flex-col lg:flex-row gap-x-10">
                    <img
                      src={image}
                      alt={`${title} icon`}
                      loading="lazy"
                      className="w-full lg:w-[220px] h-auto lg:h-[294.5px] rounded-xl object-cover object-center"
                    />
                    <div>
                      <DialogTitle
                        as="h3"
                        className="text-base lg:text-lg font-semibold text-primary mt-7 lg:mt-0"
                      >
                        {title}
                      </DialogTitle>
                      <p
                        className="mt-6 text-sm lg:text-base text-black"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                      {link !== '' && (
                        <a href={link} target="_blank" className="flex mt-10">
                          <p className="px-16 py-1.5 rounded-full bg-primary text-white text-sm lg:text-base font-semibold">
                            JELAJAHI
                          </p>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

Place.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  isOpen: PropTypes.bool,
  close: PropTypes.func,
}
