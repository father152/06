import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageOne, PageTwo, PageThree, PageFour } from "./Components/Page";
import MainPage from "./Components/MainPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<div>No page is selected.</div>} />
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
          <Route path="three" element={<PageThree />} />
          <Route path="four" element={<PageFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
