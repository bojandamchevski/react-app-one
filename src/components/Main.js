import React from "react";

export default function Main(props) {
  const listItems = [];
  for (let i = 0; props.listItems >= i; i++) {
    listItems.push(<li>Item</li>);
  }
  return (
    <section>
      <h1>{props.header}</h1>
      <h3>{props.subHeader}</h3>
      <p>{props.dummy}</p>
      <ol>{listItems}</ol>
      {props.isGood ? <h4>Some true text</h4> : <h4>Some false text</h4>}
      <br/>
      <hr/>
    </section>
  );
}
