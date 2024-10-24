import { IoCloseSharp } from "react-icons/io5"

const Modal = () => {
  return (
    <div className="modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-sky-400 p-10 w-96">
      <div className="absolute right-2 top-2">
        <button><IoCloseSharp /></button>
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed vehicula lacus. Curabitur tempor magna id lacus facilisis, eget interdum quam sodales. Sed eget urna eget tortor fermentum lobortis.</p>

      <div className="overlay"></div>
    </div>
  )
}

export { Modal }
