import { useState } from "react";
import kitten1 from "./image/kit1.jpg"
import kitten2 from "./image/kit2.jpg"
import kitten3 from "./image/kit3.jpg"


export default function App() {

  const [image, setImage] = useState(0)
  const [allImages] = useState([kitten1, kitten2, kitten3])

  return (
    <div>
      <img src={allImages[image]} className="images" />
      <button
        onClick={() => {
            setImage(image + 1)
        }}
      >ДАЛЕЕ</button>

      <button
        onClick={() => {
            setImage(image - 1)
        }}
      >НАЗАД</button>
    </div>
  );
}
