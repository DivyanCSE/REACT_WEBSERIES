/*
*<div>
     <div id="parent">
       <div id="child">
         [<h1> Iam web developer</h1>
         <h2>I am h2 web developer </h2>]-- use an arrow function.
        </div>
        <div id="child2">
         <h1>i am fine </h1>
         <h2> i am good</h2>
        </div>
        <div id="child3">
        <h1> Myself divyan</h1>
        <h2> good nights</h2>
      </div>
  </div>

  finllay reactElement is an  complete(object)  is an HTML  (web browser understanding).

   creating an react element---ReactElement(object) =>> HTML(Browser understanding). -->> it is an main content.
  
*below  code return the react code for the h1 tag information to display in the web browser. 
*/


const parent = React.createElement("div",
  {id:"parent"},
  React.createElement("div",
    {id:"child"},
  [React.createElement("h1",{},"welcome"),React.createElement("h2",{},"hello")]),

  React.createElement("div",
    {id:"child2"},
    [React.createElement("h1",{},"hi"),React.createElement("h2",{},"Welcome to world child2.")]),
    React.createElement("div",
      {id:"child3"},
    [React.createElement("h1",{},"welcomes to the react functionalites"),React.createElement("div",{},"Hello world.")])
  );

  

    




// const heading =React.createElement("h1",{id: "heading",xyz:"abc"},
//   "Hello to world react!"
// );
console.log(parent);// return an object..

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);