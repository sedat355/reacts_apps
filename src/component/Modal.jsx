import {createPortal} from "react-dom"
import ReactDom from "react-dom"
import { IoCloseSharp } from "react-icons/io5"
import {useEffect} from "react"

const OVERLAY_STYLES = {
  position: "fixed",
  // minBlockSize: "100dvh",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  // zIndex: 1000,
}
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffc845",
  // zIndex: 1000,
  width: "350px",
  padding: "50px",
}

const Modal = ({ isOpenModal,setIsOpenModal, onClose }) => {
  const portalElem = document.getElementById('portal')
  if (!portalElem) return null;
  if (!isOpenModal) return null

  useEffect(() => {
    const closeModal = (e) => {
      if(e.target.className === 'overlay') {
        setIsOpenModal(false)
      }
    }

   document.addEventListener('click', closeModal)
    
    return () => {
      console.log('removeEventListener calisti')
      document.removeEventListener('click', closeModal)
    };
  }, []);

  return ReactDom.createPortal (
    <>
      <div className="overlay" style={OVERLAY_STYLES}></div>
      
      <div className="modal" style={MODAL_STYLES}>
        <div onClick={onClose} className="absolute right-2 top-2">
          <button>
            <IoCloseSharp />
          </button>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          vehicula lacus. Curabitur tempor magna id lacus facilisis, eget
          interdum quam sodales. Sed eget urna eget tortor fermentum lobortis.
        </p>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export { Modal }
