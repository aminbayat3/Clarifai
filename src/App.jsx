import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import FaceDetector from "./routes/face-detector/face-detector.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import FaceDetectionNavigation from "./components/face-detection-navigation/face-detection-navigation.component";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facedetector" element={<FaceDetectionNavigation />}>
          <Route index element={<FaceDetector />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
