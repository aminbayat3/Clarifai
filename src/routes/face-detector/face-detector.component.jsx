import { useState, useRef, useContext, useEffect } from "react";
import ParticlesBg from "particles-bg";

import { useCancellableFetch } from "../../hooks/useCancellableFetch";
import { fetchOption } from "../../utils/fetch-utility-functions.js";
import { returnClarifaiRequestOptions } from "./face-detector.util";

import { UserContext } from "../../context/user.context";

import HomeLogo from "../../components/home-logo/home-logo.component";
import ImageLinkForm from "../../components/image-link-form/image-link-form.component";
import Rank from "../../components/rank/rank.component";
import FaceRecognition from "../../components/face-recognition/face-recognition.component";

import './face-detector.styles.scss';

const MODEL_ID = "face-detection";

const boxDefaultValues = {
  //*important:  since this object is outside the App function it doesn't get reinitilaized everytime as a result the box object in the state will remain constant, so we dont need to use things like a custom hook or useMemo to prevent the application from falling into an infinit loop
  leftCol: null,
  topRow: null,
  rightCol: null,
  bottomRow: null,
};

const FaceDetector = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState(boxDefaultValues);
  const [body, setBody] = useState("");
  const imageRef = useRef();
  const { currentUser } = useContext(UserContext);
  const [isLoading, authenticate, abort] = useCancellableFetch();

  useEffect(() => {
    const option = fetchOption("put", body);
    authenticate("http://localhost:3000/image", option, body);

    return () => abort();
  }, [body]);

  const calculateFaceLocation = (data) => {
    const { current } = imageRef;

    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const width = Number(current.width);
    const height = Number(current.height);

    // i think a more readable one is this (i know it's not great for debugging but it's more readable)
    setBox({
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    });
  };

  const onInputChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const onPictureSubmit = async () => {
    setImageUrl(input);

    try {
      const response = await fetch(
        "https://api.clarifai.com/v2/models/" +
          MODEL_ID +
          "/outputs",
        returnClarifaiRequestOptions(input)
      );
      const data = await response.json();

      if (data) {
        calculateFaceLocation(data);
        currentUser && setBody({ id: currentUser.id });
      }
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="face-detector-page">
      <ParticlesBg type="circle" bg={true} />
      <HomeLogo />
      {currentUser && <Rank currentUser={currentUser} />}
      <ImageLinkForm
        type="text"
        value={input}
        onChange={onInputChange}
        onPictureSubmit={onPictureSubmit}
      />
      <FaceRecognition
        box={box}
        imageRef={imageRef}
        imageUrl={imageUrl}
        isLoading={isLoading}
      />
    </div>
  );
};

export default FaceDetector;
