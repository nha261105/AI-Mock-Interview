// import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
