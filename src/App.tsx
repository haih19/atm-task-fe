import "./App.css";
import { useRoutes } from "react-router-dom";

import { authRoute } from "./routes/routes.routes";

function App() {
  const element = useRoutes(authRoute);
  return <div className="App">{element}</div>;
}

export default App;
