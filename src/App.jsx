import { FaRegTrashAlt } from "react-icons/fa"
import { Delete_popup } from "./components/Delete_popup"
import { useState } from "react"

function App() {
  const [open, setOpen] = useState(false)

  console.log(open)

  return (
    <div className="app">
      <button className="btn btn-danger" onClick={() => setOpen(true)}>
        <FaRegTrashAlt /> Delete
      </button>

      <Delete_popup open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <FaRegTrashAlt size={56} className="mx-auto text-red-500" />

          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are your sure you want to delete this item?
            </p>
          </div>

          <div className="flex gap-4">
            <button className="btn btn-danger w-full">Delete</button>
            <button onClick={() => setOpen(false)} className="btn btn-light w-full">Cancel</button>
          </div>
        </div>
      </Delete_popup>
    </div>
  )
}

export default App
