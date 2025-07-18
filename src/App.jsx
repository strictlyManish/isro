import NavigationBar from "./components/NavigationBar";
import Mainroutes from "./routes/Mainroutes";


function App() {
  return (
    <div className="relative bg-zinc-900 text-white px-10 py-2 select-none overflow-x-hidden">
      <NavigationBar />
      <Mainroutes />
    </div>
  );
}

export default App;
