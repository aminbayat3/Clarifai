import {
  Brand,
  Register,
  Navbar,
  Footer,
  Blog,
  ClarifaiTechSolution,
  Features,
  AboutClarifai,
  Header,
} from "../../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Brand />
      <AboutClarifai />
      <Features />
      <ClarifaiTechSolution />
      <Register />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
