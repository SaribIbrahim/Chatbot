import "./App.css";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="grid grid-cols-5 h-screen text-white">
      <Sidebar />
      <MainPage />
    </div>
  );
}

export default App;
