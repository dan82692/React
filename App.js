const parent = React.createElement("div",{id: "parent"},
React.createElement("div",{id: "child"},
[React.createElement("h1",{}, "I am h1 Tag"),
React.createElement("h2",{}, "I am h2 Tag")]),

//For making two childs

React.createElement("div",{id: "child2"},
[React.createElement("h3",{}, "I am h1 Tag"),
React.createElement("h4",{}, "I am h2 Tag")])

);


// const heading = React.createElement
// ("h1",
// {id: "heading"}, 
// "Hello world from react");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);