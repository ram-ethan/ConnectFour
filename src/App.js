import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SetupPage from "./Components/HomePage/SetupPage";
import GameBoard from "./Components/HomePage/GameBoard";


function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />

  },
  {
    path: '/setup'
    ,
    element: <SetupPage />
  }, {
    path: "/setup/game",
    element: <GameBoard />
  }
  ])
  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
