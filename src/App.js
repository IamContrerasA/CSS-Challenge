import "./App.css";

import { Content } from "./components/Content/Content.js";
import { SidebarLeft } from "./components/SideBar/Left/SidebarLeft.js";
import { SidebarRight } from "./components/SideBar/Right/SidebarRight.js";

function App() {
  return (
    <div className = 'wrapper'>
      <SidebarLeft />
      <Content />
      <SidebarRight />
    </div>
  );
}

export default App;
