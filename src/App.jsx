import { useEffect, useState } from "react"
import { Popup } from "./components/Popup"
import { useRef } from "react"

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const dialogRef = useRef()

  const openPopup = () => {
    dialogRef.current.showModal()
  }

  const closePopup = () => {
    dialogRef.current.close()
  }
  
  useEffect(() => {
    console.log(dialogRef)
  }, [])

  return (
    <div className="app space-x-2">
      <button onClick={openPopup} className="btn btn-danger">
        Delete
      </button>

      <dialog ref={dialogRef}>
        <Popup
          closePopup={closePopup}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      </dialog>

      <div className="content">
        <h2 className="font-bold text-2xl my-2">
          Ultimate React Router v6 Guide
        </h2>
        <p className="leading-normal">
          React Router is the most popular routing library in React, but it can
          be a bit complicated to wrap your head around some of the more complex
          features. That is why in this article I will be breaking down
          everything you need to know about React Router so you can use even the
          most advanced features with ease. This article will be broken down
          into 4 sections. React Router Basics Advanced Route Definitions
          Handling Navigation Routers In Depth If you prefer to learn visually,
          check out the video version of this article. React Router is the most
          popular routing library in React, but it can be a bit complicated to
          wrap your head around some of the more complex features. That is why
          in this article I will be breaking down everything you need to know
          about React Router so you can use even the most advanced features with
          ease. This article will be broken down into 4 sections. React Router
          Basics Advanced Route Definitions Handling Navigation Routers In Depth
          If you prefer to learn visually, check out the video version of this
          article. React Router is the most popular routing library in React,
          but it can be a bit complicated to wrap your head around some of the
          more complex features. That is why in this article I will be breaking
          down everything you need to know about React Router so you can use
          even the most advanced features with ease. This article will be broken
          down into 4 sections. React Router Basics Advanced Route Definitions
          Handling Navigation Routers In Depth If you prefer to learn visually,
          check out the video version of this article. React Router is the most
          popular routing library in React, but it can be a bit complicated to
          wrap your head around some of the more complex features. That is why
          in this article I will be breaking down everything you need to know
          about React Router so you can use even the most advanced features with
          ease. This article will be broken down into 4 sections. React Router
          Basics Advanced Route Definitions Handling Navigation Routers In Depth
          If you prefer to learn visually, check out the video version of this
          article. React Router is the most popular routing library in React,
          but it can be a bit complicated to wrap your head around some of the
          more complex features. That is why in this article I will be breaking
          down everything you need to know about React Router so you can use
          even the most advanced features with ease. This article will be broken
          down into 4 sections. React Router Basics Advanced Route Definitions
          Handling Navigation Routers In Depth If you prefer to learn visually,
          check out the video version of this article. React Router is the most
          popular routing library in React, but it can be a bit complicated to
          wrap your head around some of the more complex features. That is why
          in this article I will be breaking down everything you need to know
          about React Router so you can use even the most advanced features with
          ease. This article will be broken down into 4 sections. React Router
          Basics Advanced Route Definitions Handling Navigation Routers In Depth
          If you prefer to learn visually, check out the video version of this
          article. React Router is the most popular routing library in React,
          but it can be a bit complicated to wrap your head around some of the
          more complex features. That is why in this article I will be breaking
          down everything you need to know about React Router so you can use
          even the most advanced features with ease. This article will be broken
          down into 4 sections. React Router Basics Advanced Route Definitions
          Handling Navigation Routers In Depth If you prefer to learn visually,
          check out the video version of this article. React Router is the most
          popular routing library in React, but it can be a bit complicated to
          wrap your head around some of the more complex features. That is why
          in this article I will be breaking down everything you need to know
          about React Router so you can use even the most advanced features with
          ease. This article will be broken down into 4 sections. React Router
          Basics Advanced Route Definitions Handling Navigation Routers In Depth
          If you prefer to learn visually, check out the video version of this
          article. React Router is the most popular routing library in React,
          but it can be a bit complicated to wrap your head around some of the
          more complex features. That is why in this article I will be breaking
          down everything you need to know about React Router so you can use
          even the most advanced features with ease. This article will be broken
          down into 4 sections. React Router Basics Advanced Route Definitions
          Handling Navigation Routers In Depth If you prefer to learn visually,
          check out the video version of this article.
        </p>
      </div>
    </div>
  )
}

export default App
