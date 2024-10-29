import { createPortal } from "react-dom"

const Popup = ({ setIsOpenModal }) => {
  return createPortal(
    <div className="overlay fixed inset-0 bg-black/40">
      <div className="popup w-[340px] shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-8 rounded-lg text-center">
        <button
          onClick={() => setIsOpenModal(false)}
          className="absolute top-2 right-4 text-gray-400 hover:text-gray-900 text-lg py-1 px-2 rounded-full cursor-pointer"
        >
          &#10006;
        </button>
        <h1 className="font-semibold text-2xl mb-2 mt-4">Confirm Delete</h1>
        <p className="mb-2 max-w-48 m-auto">
          Are you sure you want to delete this item?
        </p>
        <div className="buttons flex justify-around mt-8">
          <button className="btn btn-danger">Delete</button>
          <button
            onClick={() => setIsOpenModal(false)}
            className="btn btn-light"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal"),
  )
}
export { Popup }
