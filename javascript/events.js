// EVENTS 
// the change on the state of an object is known as an event.

// events are firesd to notify code "interesting change" that may affect code execution

    // mouse events(click, double click etc)
    // keyboard events (keypress, keyup, keydown)
    // foorm events(submit, etc)
    // print event & many more 

// node.event = ()=>{
    //handle here 
// }

let btn1 = document.querySelector("#btn1");

btn1.onclick = () =>{
    console.log("btn1 is clicked");
    let a = 25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");

div.onmouseover = () =>{
    console.log("you are in div tag")
}

// EVENT OBJECT 
// IT IS A SPECIAL OBJECT THAT HAS DETAILS ABOUT THE EVENT.
// All event handlers have access to the event object's properties and method.

// node.event = (e)=>{
    // handle here
// }

// e.target, e.type, e.clientX, e.clientY 

let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

// EVENT LISTENERS
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)

// NOTE :- the callback refrence should be same to remove 

// ==============================================================================================================
// Q >> create a toggle utton that change the screen to dar-mode when clicked & ligh-mode when clicked again.
// ==============================================================================================================

let mode = document.querySelector("#mode");
let currmode = "light";

mode.addEventListener("click", ()=>{
    if(currmode === light){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currmode);
})