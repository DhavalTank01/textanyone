import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import "./style.css";
const App = () => {
  const [data, setData] = useState({
    phone: "",
    message: "",
  });
  const handelSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { phone, message } = data;
      if (phone === "") {
        toast.error("Phone Number is Required.");
      } else {
        if (phone.length !== 10) {
          toast.warning("Invalid Phone Number.");
        } else {
          let URL = "";
          if (phone) {
            URL = `https://api.whatsapp.com/send/?phone=${phone}`;
          }
          if (message) {
            URL = `https://api.whatsapp.com/send/?phone=${phone}&text=${message}`;
          }
          toast.success("Redirecting to WhatsApp...");
          setTimeout(() => {
            window.open(URL);
          }, 1000);
        }
      }
    },
    [data]
  );

  const handelOnChange = useCallback(
    (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    },
    [data]
  );

  useEffect(() => {
    document.title = "Text Any One";
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <Navbar />

      <Form handelOnChange={handelOnChange} handelSubmit={handelSubmit} />

      <Footer />
    </>
  );
};

export default App;
