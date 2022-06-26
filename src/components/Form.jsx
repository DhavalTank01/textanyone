import React from "react";
import whatsapp from "../images/whatsapp.png";

const Form = ({ handelSubmit, handelOnChange }) => {
  return (
    <div className="container-fluid">
      <div className="container d-flex align-items-center justify-content-center mt-2 mb-2">
        <div className="form-box">
          <div className="card p-3">
            <div className="d-flex align-item-center justify-content-center">
              <img src={whatsapp} width={150} alt="" />
            </div>
            <form onSubmit={handelSubmit} className="was-validated">
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="+91XXXXXXXXXX"
                  onChange={handelOnChange}
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this fiels.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="10"
                  onChange={handelOnChange}
                ></textarea>
              </div>
              <div className="mb-3 d-flex align-content-center justify-content-center">
                <button
                  type="submit"
                  className="btn  border border-1 border-white w-100 text-white "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
