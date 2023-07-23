import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Info from "./components/Info";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Info />
      <Testimonials />
      <Gallery />
    </div>
  );
};

export default App;
