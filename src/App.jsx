import NavigationBar from "./components/NavigationBar";
import Mainroutes from "./routes/Mainroutes";
function App() {
  return (
    <div className="bg-zinc-900 text-white px-10 py-2 scroll-mb-0 select-none">
      <NavigationBar />
      <Mainroutes />
    </div>
  );
}

export default App;
