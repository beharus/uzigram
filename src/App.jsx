import "./App.css";
import MessagesContainer from "./components/messages/MessagesContainer";
import Sidebar from "./components/sidebar";
import Users from "./components/users";

function App() {
  return (
    <>
      <div className="min-h-screen z-50">
        <Sidebar />
      </div>
      <div className=" flex w-full z-[0] fixed left-20 top-0">
        <div className="w-2/6">
          <Users />
        </div>
        <div className="w-4/6 relative">
          <MessagesContainer />
        </div>
      </div>
    </>
  );
}

export default App;
