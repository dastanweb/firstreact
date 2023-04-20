import React from "react";
import "./Section.css";

const Section = (props) => {
  console.log(props.user[0].name);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.user[0].name}</td>
            <td>{props.user[0].lastName}</td>
            <td>{props.user[0].age}</td>
            <td>{props.user[0].id}</td>
          </tr>
          <tr>
            <td>{props.user[1].name}</td>
            <td>{props.user[1].lastName}</td>
            <td>{props.user[1].age}</td>
            <td>{props.user[1].id}</td>
          </tr>
          <tr>
            <td>{props.user[2].name}</td>
            <td>{props.user[2].lastName}</td>
            <td>{props.user[2].age}</td>
            <td>{props.user[2].id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Section;
