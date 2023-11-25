import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/Routes/AllRoutes";
import DebounceThrottle from "./Components/Debouncing and Throttling/List";
import NavigationMenu from "./Components/Navigation Menu/NavigationMenu";

function App() {
  return (
    <div className="App">
      {/* <DebounceThrottle /> */}
      <NavigationMenu />
      <AllRoutes />
    </div>
  );
}

export default App;
