import { createBrowserRouter } from "react-router-dom";
import Intro from "../screens/Intro/Intro";
import Form from "../screens/Form/Form";
import Detail from "../screens/Detail/Detail";
import Dashboard from "../screens/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro onNext={() => {}}/>,
  },
  {
    path: "/Form",
    element: <Form />,
  },
  { path: "/Detail", 
    element: <Detail/> },

  { path: "/Dashboard", 
    element: <Dashboard onViewPoem={() => {}}/> },
]);
