import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Info from "./components/Info";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Info />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
