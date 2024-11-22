import { createRoot } from "react-dom/client";
import "./index.css";

//import App from "./App.tsx";

import { router } from "./router/navigate";
import { RouterProvider } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}></RouterProvider>
   )