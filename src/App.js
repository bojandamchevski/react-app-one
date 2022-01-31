import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const sectionItems = [];
  for (let i = 0; 5 >= i; i++) {
    sectionItems.push(
      <Main
        header="Some header"
        subHeader="Some subheader"
        dummy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros vel sem porta venenatis. Fusce congue nunc est, sit amet malesuada dui sollicitudin id. Suspendisse ligula urna, sodales vel tristique non, dictum non augue. Phasellus a commodo metus. Nam feugiat dui at nibh porttitor commodo. Pellentesque vitae viverra metus."
        listItems = {6}
        isGood = {true}
      />
    );
  }
  return (
    <div>
      <Navbar />
      <Main
      header="Hello and welcome"
      subHeader="This is some subheader outside the loop"
      dummy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros vel sem porta venenatis. Fusce congue nunc est, sit amet malesuada dui sollicitudin id. Suspendisse ligula urna, sodales vel tristique non, dictum non augue. Phasellus a commodo metus. Nam feugiat dui at nibh porttitor commodo. Pellentesque vitae viverra metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros vel sem porta venenatis. Fusce congue nunc est, sit amet malesuada dui sollicitudin id. Suspendisse ligula urna, sodales vel tristique non, dictum non augue. Phasellus a commodo metus. Nam feugiat dui at nibh porttitor commodo. Pellentesque vitae viverra metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros vel sem porta venenatis. Fusce congue nunc est, sit amet malesuada dui sollicitudin id. Suspendisse ligula urna, sodales vel tristique non, dictum non augue. Phasellus a commodo metus. Nam feugiat dui at nibh porttitor commodo. Pellentesque vitae viverra metus."
      listItems = {11}
      isGood = {false}/>
      {sectionItems}
    </div>
  );
}
