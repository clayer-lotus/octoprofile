import "./App.css";
import SearchPage from "../src/screens/SearchPage/SearchPage";
import { BrowserRouter, Route, Router } from "react-router-dom";
import UserPage from "../src/screens/UserPage/UserPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route path="/" component={SearchPage} exact />
        <Route path="/user" component={UserPage} exact />
      </main>
    </BrowserRouter>
  );
}

export default App;
