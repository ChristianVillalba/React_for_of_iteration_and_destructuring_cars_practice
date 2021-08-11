// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// For of iteration and destructuring
// Documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
for (const {
  model: myCarModel,
  coloursByPopularity: [myFavouriteColor],
  speedStats: { topSpeed: myMaxSpeed }
} of cars) {
  console.log(
    "My " +
      myFavouriteColor +
      " " +
      myCarModel +
      " reachs " +
      myMaxSpeed +
      " km/h"
  );
}

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
