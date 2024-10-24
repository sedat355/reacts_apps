import { IoCloseSharp } from "react-icons/io5"

const OVERLAY_STYLES = {
  // position: "absolute",
  // top: 0,
  // bottom: 0,
  // left: 0,
  // right: 0,
  // backgroundColor: "rgba(0,0,0,0.7",
  // zIndex: 1000,
}
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffc845",
  zIndex: 1000,
  width: "350px",
  padding: "50px"
}

const Modal = ({isOpenModal, onClose}) => {
  if(!isOpenModal) return null;

  console.log(isOpenModal)
  return (
    <div className="modal" style={MODAL_STYLES}>
      <div onClick={onClose} className="absolute right-2 top-2">
        <button><IoCloseSharp /></button>
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed vehicula lacus. Curabitur tempor magna id lacus facilisis, eget interdum quam sodales. Sed eget urna eget tortor fermentum lobortis.</p>

      <div className="overlay" style={OVERLAY_STYLES}></div>
    </div>
  )
}

export { Modal }
