import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormBag } from "./pages/FormBag";
import { RemoveBag } from "./pages/RemoveBag";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<FormBag />} />
          <Route path="queroremover" element={<RemoveBag />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
