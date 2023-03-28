import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import store from "./redux/store/store";
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
