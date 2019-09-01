import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  //   let btnClass = classes.Red;

  if (props.showPersons) {
    btnClass = [classes.Red, classes.Button].join(" ");
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes=['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes=['red','bold']
  }

  return (
    <>
      <h1>hello React Project!!!!!!!!!!!???????????</h1>
      <p className={assignedClasses.join(" ")}>this is still working</p>

      <button className={btnClass} onClick={props.toggle}>
        Toggle Person
      </button>
    </>
  );
};

export default cockpit;
