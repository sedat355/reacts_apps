import { FaRegTrashAlt } from "react-icons/fa"

const Delete_popup = () => {
  return(
    <div className="popup-container">
      <div className="overlay"></div>
      
      <div className="popup">
        <FaRegTrashAlt/>
        <div className="desc">
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete this item?</p>
        </div>
        <div className="buttons">
          <button>Delete</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  )
}
export { Delete_popup }