import React, { useState } from "react";
import classes from "./Contact.module.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangehandler = (event) => {
    setEmail(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();

    if(!name || !email || !number){
        alert("Please fill all the fields throughly");
    }

    const contactUs = {
      name: name,
      email: email,
      number: number,
    };
    setName("");
    setEmail("");
    setNumber("");

    savedataOnBackendserver(contactUs);
  };

  const savedataOnBackendserver = async (contactUs) => {
    const respnose = await fetch(
      "https://react-ecommerceproject-2e47f-default-rtdb.firebaseio.com/conatc.json",
      {
        method: "POST",
        body: JSON.stringify(contactUs),
      }
    );

    const data = await respnose.json();
    console.log(data);
  };

  return (
     <section className={classes.container}>
    <form  onSubmit={submit}>
      <label htmlFor="Name">Name</label>
      <input className={classes.control}
        type="text"
        value={name}
        id="nameId"
        onChange={nameChangeHandler}
      />
      <label htmlFor="Email">Email</label>
      <input className={classes.control}
        type="email"
        value={email}
        id="emailId"
        onChange={emailChangehandler}
      />
      <lable htmlFor="Number">Phone Number</lable>
      <input className={classes.control}
        type="number"
        value={number}
        id="numberId"
        onChange={numberChangeHandler}
      />
      <button>Submit</button>
    </form>
    </section>
  );
};

export default Contact;
