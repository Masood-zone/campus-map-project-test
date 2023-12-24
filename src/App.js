import React from "react";
import MainApp from "./pages/index";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Location from "./pages/location";
import Event from "./pages/events";
import Community from "./pages/community";
import EditList from "./pages/location/EditList";
import AddList from "./pages/location/AddList";
import NotFound from "./components/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainApp />}>
        <Route path="/" element={<Home />}>
          <Route path="locations" element={<Location />}>
            <Route path="edit" element={<EditList />} />
            <Route path="add" element={<AddList />} />
          </Route>
          <Route path="events" element={<Event />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
