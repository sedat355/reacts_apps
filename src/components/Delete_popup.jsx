import { FaRegTrashAlt } from "react-icons/fa"

const Delete_popup = ({ open, onClose, children }) => {
  return (
    // overlay
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex items-center justify-center transition-colors 
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      {/* popup */}
      <div
        onClick={(e) => e.stopPropagation()} 
        className={`
        bg-white rounded-xl shadow transition-all p-6
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
      `}>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 px-2 py-1 rounded-full text-gray-400 bg-slate-300 hover:bg-slate-700 hover:text-gray-100">
          &#10006;
        </button>
        {children}
      </div>
    </div>
  )
}
export { Delete_popup }
