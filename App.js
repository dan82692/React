import React from "react";
import  ReactDOM from "react-dom/client";


// const heading = React.createElement("h1",
//  { id: "heading"},
//  "Namaste React🚀🚀"
//  );

// console.log (heading);


const Header = () => {
    return(
        <div className="header">
            <div className="Logo-container">
            <img className="Logo" src="https://i.pinimg.com/originals/3c/b2/4f/3cb24f7d0defcb91eb51b091325d5f47.jpg"/>
            
            </div>
            <div className="pop">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );

};

const styleCard = {
    backgroundColor : "#f0f0f0",
};


const ResturantCard = ({resName, cuisine,Rating , time , imageurl }) => {
    return(
<div className="res-card" style={styleCard}>
   
 <img className="res-image" alt="res-image" src={imageurl}></img>

<h3>{resName}</h3>
<h4>{cuisine}</h4>
<h4>{Rating}</h4>
<h4>{time}</h4>
</div>
    );

};

const Body = () => {
    return(

        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard resName="Red Chilli" cuisine="Chowmin , Chinese" Rating="3.5" time="30 Minutes" imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WcgGWLYXzyCf-gzIQI-Hf7ndsdgrcm_TtQ&s"/>
                <ResturantCard resName="KFC" cuisine="Burger, Fast food" Rating="3.9" time="20 Minutes" imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jqbhz44--Bxz4ZcuugSUoVRrIusoVmCB2Q&s"/>
                <ResturantCard resName="Dominos" cuisine="Pizza , Fries" Rating="3.8" time="25 Minutes" imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDMhPpndCvGlsF_NF-j1olBZVn9Gg8QDerw&s"/>
                
            </div>
        </div>
    );
};

const Foodapp = () => {
    return(
    
        <div className="Food">
            <Header/>
            <Body/>

        </div>
    );
};


  

// console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<Foodapp/>);











































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