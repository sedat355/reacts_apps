import { FaRegTrashAlt } from "react-icons/fa"
import {Delete_popup} from "./components/Delete_popup"

function App() {
  return (
    <div className="app flex items-center justify-center min-h-screen">
      <div className="delete-btn flex items-center justify-center gap-x-2 bg-red-500 px-8 py-2 text-white rounded-md text-xl cursor-pointer">
        <FaRegTrashAlt />
        <button>Delete</button>
      </div>

      <Delete_popup/>
    </div>
  )
}

export default App
