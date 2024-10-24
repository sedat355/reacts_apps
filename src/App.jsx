import {useState} from "react"
import {Modal} from "./component/Modal"

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
}

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "seagreen",
  padding: "10px",
}

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className="app bg-slate-400 p-2">
      <div style={BUTTON_WRAPPER_STYLES} className="mb-2">
        <button>Open Modal</button>
      </div>

      <Modal isOpenModal={isOpenModal}/>

      <div className="other_content" style={OTHER_CONTENT_STYLES}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          vehicula lacus. Curabitur tempor magna id lacus facilisis, eget
          interdum quam sodales. Sed eget urna eget tortor fermentum lobortis.
          Duis justo ante, tincidunt luctus diam non, laoreet blandit magna.
          Suspendisse pharetra vitae leo vel gravida. Morbi ut vulputate nisi.
          Morbi ultrices blandit congue. Vestibulum id augue at ipsum semper
          vulputate. Etiam pulvinar at tellus quis facilisis. Sed ullamcorper
          tellus ipsum, et commodo sapien aliquam ut. Nulla placerat bibendum
          nunc vel elementum. Nulla rutrum, sapien feugiat dictum dignissim,
          massa est faucibus mauris, ut hendrerit est tortor non orci. Fusce
          vitae magna a enim condimentum ullamcorper. Mauris bibendum lacus
          sapien, non bibendum enim mollis sit amet. Duis bibendum convallis
          mauris condimentum aliquam. Cras est eros, pellentesque quis pretium
          non, elementum quis tellus. Integer aliquam ipsum neque, ac consequat
          justo efficitur quis. Nulla porta aliquam dolor, elementum euismod
          nibh pellentesque nec. Quisque eu elit rutrum, tempus tellus nec,
          ultricies velit. Curabitur convallis est ut elit commodo, varius porta
          elit tristique. Praesent hendrerit viverra viverra. Integer tempor nec
          erat et varius. Nullam mollis, tortor sed mattis accumsan, dui leo
          sollicitudin nisi, non consequat libero lorem eu nisi. Aenean faucibus
          velit ac faucibus rhoncus. Integer varius velit eget ultricies
          vestibulum. Ut tempus nibh vitae turpis luctus, at vestibulum tortor
          ornare. Vestibulum dui lacus, tempus eu dapibus et, congue at ante.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Sed at leo vehicula, aliquet massa ut, maximus
          erat. Pellentesque a metus a ante mattis ultrices. Cras eu ultrices
          velit. Donec in euismod sapien, eget porta ex. Aliquam gravida
          pulvinar erat nec euismod. Maecenas maximus ligula eu porta tempor.
          Aenean fringilla tellus quis felis viverra dictum. Curabitur at neque
          varius ligula eleifend auctor. Nam at faucibus neque. Donec odio
          tellus, accumsan nec aliquam ac, tincidunt ac nisi. Integer nisl dui,
          aliquet a nibh maximus, interdum sodales quam. Aenean eleifend
          facilisis dolor. Quisque malesuada erat ut ex pellentesque, sit amet
          malesuada leo fringilla. Vivamus non neque porta, fringilla nunc eget,
          suscipit sapien. Pellentesque ut volutpat sem. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Integer cursus, mi vel molestie pulvinar, nisi tellus pharetra ex,
          porttitor hendrerit purus leo id risus. Cras lobortis eros id sodales
          convallis. Vestibulum non magna vel dolor bibendum dapibus ac eget
          sem. Ut eu turpis hendrerit lacus cursus suscipit auctor eu quam.
          Proin est neque, pharetra eget tellus eget, vestibulum efficitur leo.
          Ut in dui congue, rutrum enim ac, mollis nisi. Cras at ante eu dui
          ullamcorper pretium. Donec dignissim metus id quam volutpat egestas
          nec eu est. Ut hendrerit dui sit amet aliquam tempor. Nam ac mattis
          ligula.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          vehicula lacus. Curabitur tempor magna id lacus facilisis, eget
          interdum quam sodales. Sed eget urna eget tortor fermentum lobortis.
          Duis justo ante, tincidunt luctus diam non, laoreet blandit magna.
          Suspendisse pharetra vitae leo vel gravida. Morbi ut vulputate nisi.
          Morbi ultrices blandit congue. Vestibulum id augue at ipsum semper
          vulputate. Etiam pulvinar at tellus quis facilisis. Sed ullamcorper
          tellus ipsum, et commodo sapien aliquam ut. Nulla placerat bibendum
          nunc vel elementum. Nulla rutrum, sapien feugiat dictum dignissim,
          massa est faucibus mauris, ut hendrerit est tortor non orci. Fusce
          vitae magna a enim condimentum ullamcorper. Mauris bibendum lacus
          sapien, non bibendum enim mollis sit amet. Duis bibendum convallis
          mauris condimentum aliquam. Cras est eros, pellentesque quis pretium
          non, elementum quis tellus. Integer aliquam ipsum neque, ac consequat
          justo efficitur quis. Nulla porta aliquam dolor, elementum euismod
          nibh pellentesque nec. Quisque eu elit rutrum, tempus tellus nec,
          ultricies velit. Curabitur convallis est ut elit commodo, varius porta
          elit tristique. Praesent hendrerit viverra viverra. Integer tempor nec
          erat et varius. Nullam mollis, tortor sed mattis accumsan, dui leo
          sollicitudin nisi, non consequat libero lorem eu nisi. Aenean faucibus
          velit ac faucibus rhoncus. Integer varius velit eget ultricies
          vestibulum. Ut tempus nibh vitae turpis luctus, at vestibulum tortor
          ornare. Vestibulum dui lacus, tempus eu dapibus et, congue at ante.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Sed at leo vehicula, aliquet massa ut, maximus
          erat. Pellentesque a metus a ante mattis ultrices. Cras eu ultrices
          velit. Donec in euismod sapien, eget porta ex. Aliquam gravida
          pulvinar erat nec euismod. Maecenas maximus ligula eu porta tempor.
          Aenean fringilla tellus quis felis viverra dictum. Curabitur at neque
          varius ligula eleifend auctor. Nam at faucibus neque. Donec odio
          tellus, accumsan nec aliquam ac, tincidunt ac nisi. Integer nisl dui,
          aliquet a nibh maximus, interdum sodales quam. Aenean eleifend
          facilisis dolor. Quisque malesuada erat ut ex pellentesque, sit amet
          malesuada leo fringilla. Vivamus non neque porta, fringilla nunc eget,
          suscipit sapien. Pellentesque ut volutpat sem. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Integer cursus, mi vel molestie pulvinar, nisi tellus pharetra ex,
          porttitor hendrerit purus leo id risus. Cras lobortis eros id sodales
          convallis. Vestibulum non magna vel dolor bibendum dapibus ac eget
          sem. Ut eu turpis hendrerit lacus cursus suscipit auctor eu quam.
          Proin est neque, pharetra eget tellus eget, vestibulum efficitur leo.
          Ut in dui congue, rutrum enim ac, mollis nisi. Cras at ante eu dui
          ullamcorper pretium. Donec dignissim metus id quam volutpat egestas
          nec eu est. Ut hendrerit dui sit amet aliquam tempor. Nam ac mattis
          ligula.
        </p>
      </div>
    </div>
  )
}

export default App
