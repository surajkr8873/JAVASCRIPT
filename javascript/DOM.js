// link html file 

// WINDOW OBJECT :-
// the window object represent an open window in a bbrowser. it is browser's objecct(not javascript) & is automatically created by browser. 

// it is a global with lots of properties & methods.

// WHAT IS DOM ? 
// when a web page is loaded, the browser creates a document object model(DOM) of the page 

// =======================================================================================================
// DOM MANIPULATION :- 
// ======================================================================================================

    //  selecting with ID :
        document.getelementbyid("my id")

    // selecting with class :- 
        document.getelementbyclassname("my class")

    // selecting with tag :-
        document.getElementsByTagName("tag name")

// ======================================================================================================
// QUERY SELECTOR :-
// ======================================================================================================

    document.querySelector("myid / myclass / tag")
        // returns first element 

    document,querySelectorAll("myid / myclass / tag")
        // returns a nodelist 

// =====================================================================================================
// PROPERTIES :-
// =====================================================================================================

    // tagName : returns tag for element nodelist
    // innnertext : returns the text content of the element and all its children
    // innerhtml : returns the plain text contents in the element 
    // textcontent : returns textual content even for hidden elements

let div = document.querySelector("div");
console.dir(div);
console.log(div);

// =============================================================================================================
// ATTRIBUTE :-
// =============================================================================================================

    getAttribute(attr)  // to get the attribute value

    setAttribute(attr, value)  // to set the attribute val 

// style :-

    Node.style()

// =============================================================================================================
// INSERT ELEMENT :- 
// =============================================================================================================

let el = document.createElement("div")

    Node.append(el) 
        // adds at the end of node(inside)
    
    Node.prepend(el) 
        // adds the start of node(inside)

    Node.before(el) 
        // adds before the node(outside)

    Node.after(el)
        // adds after the nnode(outside)

// DELETE ELEMENT :-

    Node.remove()
        // remove the node





