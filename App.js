import React from "react";
import  ReactDOM from "react-dom/client";


// const heading = React.createElement("h1",
//  { id: "heading"},
//  "Namaste React🚀🚀"
//  );

// console.log (heading);


const Title =()=> (
    
<h1 className="head" tabIndex="5">
    welcome to namaste react🚀🚀

</h1>

    );

const HeadingComponent = () => (
    <div id = "container">
        <Title/>
        <Title></Title>
        {Title()}

<h1 className="heading"> Namaste React function component
 </h1>
 </div>
 );


//This is also valid


  

// console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent/>);











































// const parent = React.createElement("div",{id: "parent"},
// React.createElement("div",{id: "child"},
// [React.createElement("h1",{}, "I am h1 Tag 🤞😍"),
// React.createElement("h2",{}, "I am h2 Tag")]),

// //For making two childs

// React.createElement("div",{id: "child2"},
// [React.createElement("h3",{}, "I am h1 Tag"),
// React.createElement("h4",{}, "I am h2 Tag")])

// );


// const heading = React.createElement
// ("h1",
// {id: "heading"}, 
// "Hello world from react");

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// root.render(parent);