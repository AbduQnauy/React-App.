import React from "react";
import propTypes from "prop-types";
import classes from "./Person.module.css";

// import Radium from "radium";

const person = props => {
  return (
    // <div style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>
        i'm {props.name} ya nas yahoooooooo, have {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func
};
// class Person extends Component {
//   props;
//   render() {
//     return (
//       <div>
//         <p>
//           i'm {this.props.name} ya nas yahoooooooo, have {this.props.age}
//         </p>
//         <p>{this.props.children}</p>
//       </div>
//     );
//   }
// }
// export default Person;
// export default Radium(person);
export default person;
