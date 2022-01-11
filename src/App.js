import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Revenue from "./pages/Revenue";
import Users from "./pages/Users";


function App() {
  const location = useLocation()
  return (
    <div className="">
      <Sidebar location={location} />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview/users" element={<Users />} />
        <Route path="/overview/revenue" element={<Revenue />} />
      </Routes>
    </div>
  );
}

export default App;
