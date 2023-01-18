import React from "react";
import arrow from "../assets/icon-arrow.svg";
import { useForm } from "../hooks/useForm";

const initialForm = {
  search: "",
};

export const Header = ({onNewIP}) => {

  const { Form, onInputChange, onSubmit } = useForm(initialForm);

  const prueba =  (event) =>{
    onSubmit(event)
    onNewIP(Form.search)
  }
  return (
    <>
      <header className="header-search">
        <h3 id="title">IP Address Tracker</h3>
        <div className="container-search">
          <form onSubmit={prueba}>
            <input
              id="search"
              name="search"
              type={"search"}
              onChange={(e) => onInputChange(e)}
              placeholder={"Search for any IP address Tracker o domain"}
              autoComplete='off'
            />

            <button className="search-btn">
              <img src={arrow} alt="arrow btn" />
            </button>
          </form>
        </div>
      </header>
    </>
  );
};
