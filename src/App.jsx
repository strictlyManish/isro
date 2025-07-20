import NavigationBar from "./components/NavigationBar";
import Mainroutes from "./routes/Mainroutes";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Services from "./pages/Services";
import Programmes from "./pages/Programmes";
import Reasources from "./pages/Resources";
import Engagements from "./pages/Engangements";
import ScrollVelocity from "./components/ScrollVelocity";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="relative bg-zinc-900 text-white  overflow-x-hidden select-none">
      <NavigationBar />
      <Mainroutes />
      <About />
      <ScrollVelocity
        texts={["Indian Space Research Organisation", "Indian national space and aeronautics agency"]}
       
        className="custom-scroll-text"
      />
      <Activities />
      <Services />
      <Programmes />
      <Reasources />
      <Engagements />
      <Footer/>
    </div>
  );
}

export default App;
