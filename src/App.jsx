import "./App.css";
import Sidebar from "./components/sidebar";
import Users from "./components/users";

function App() {
  return (
    <>
      <div className="min-h-screen z-50">
        <Sidebar />
      </div>
      <div className=" -z-[0] fixed left-20 top-0">
        <Users />
     
      </div>
    </>
  );
}

export default App;
