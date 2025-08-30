// 1. Introduction to DOM in JavaScriptThe Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, allowing JavaScript to interact with and manipulate the content, structure, and styles of a webpage dynamically.Key Points:The DOM is a tree-like structure where each element, attribute, and piece of text is a node.
// JavaScript uses the DOM to access and modify the webpage (e.g., updating text, adding elements, changing styles).
// The document object is the entry point to the DOM, provided by the browser.

// Example:

// <!DOCTYPE html>
// <html>
// <head><title>DOM Example</title></head>
// <body>
//   <h1 id="title">Hello, World!</h1>
//   <p class="info">Welcome to DOM manipulation.</p>
// </body>
// </html>

// JavaScript can manipulate this HTML via the DOM:

// javascript

// console.log(document.title); // Output: DOM Example

// Use Case:
// Dynamically updating webpage content (e.g., forms, user interfaces).
// Responding to user interactions (e.g., clicks, input).

// Understanding DOM Structure and TreeThe DOM represents an HTML document as a tree of nodes, where each node is an object with properties and methods.Key Concepts:Nodes: Everything in the DOM is a node (e.g., elements, text, attributes, comments).Element Nodes: Represent HTML tags (e.g., <div>, <p>).
// Text Nodes: Contain text content within elements.
// Attribute Nodes: Represent element attributes (e.g., id, class).

// Document: The root node of the DOM, representing the entire webpage (document object).
// Tree Structure: Nodes are organized hierarchically, with parent-child relationships.

// Example HTML:html

// <body>
//   <div id="container">
//     <h1>Title</h1>
//     <p>Paragraph</p>
//   </div>
// </body>

// DOM Tree:

// document
//   └── body (element node)
//        └── div (element node, id="container")
//             ├── h1 (element node)
//             │    └── "Title" (text node)
//             └── p (element node)
//                  └── "Paragraph" (text node)

// Connection to Objects:Each node is an object with properties (key-value pairs, e.g., nodeName, innerHTML) and methods (e.g., appendChild).
// Example: document is an object with properties like document.body.

// 1 
// document.getElementById()
// Selects an element by its unique id.

// <h1 id="title">Hello</h1>

// const title = document.getElementById("title")
// console.log(title); // <h1 id="title">Hello</h1>

// 2
// document.getElementsByTagName()
// Returns a live HTMLCollection of elements with the specified tag name.
// Syntax:
// document.getElementsByTagName("tagName");


// // Example:
// {/* <p>Paragraph 1</p>
// <p>Paragraph 2</p> */}
// const Paragraph = document.getElementsByTagName("p")
// console.log(Paragraph.length); // Output: 2

// -----------
// 3
// document.getElementsByClassName()Returns a live HTMLCollection of elements with the specified class name.Syntax:javascript

// // document.getElementsByClassName("className");

// Example:html

// <div class="info">Info 1</div>
// <div class="info">Info 2</div>

// javascript

// const infoDivs = document.getElementsByClassName("info");
// console.log(infoDivs.length); // Output: 2

// 4
// document.querySelector()
// Returns the first element that matches a specified CSS selector.
// Returns the first element matching a CSS selector.Syntax:javascript

// document.querySelector("selector");

// Example:html

{/* <div class="info" id="main">Main Info</div> */}

// const mainDiv = document.querySelector("#main.info");
// console.log(mainDiv.textContent); // Output: Main Info

// Example:
// const firstInfoDiv = document.querySelector(".info");
// console.log(firstInfoDiv); // Output: <div class="info">Info 1</div>


// document.querySelectorAll()
// Returns a NodeList of all elements matching a CSS selector.
// Syntax:
// document.querySelectorAll("selector");

{/* <p class="text">Text 1</p>
<p class="text">Text 2</p> */}

// const texts = document.querySelectorAll(".text");
// texts.forEach(p => console.log(p.textContent));

// Output:
// Text 1
// Text 2


// Connection to Loops:Use forEach (from your loops question) with querySelectorAll:javascript

// document.querySelectorAll(".text").forEach((el, i) => {
//   el.textContent = `Updated Text ${i + 1}`;
// });

//Use Case:Selecting elements for manipulation (e.g., updating text, adding event listeners).

//  DOM Tree TraversalDOM traversal involves navigating the tree using properties to access related nodes.Key Properties:parentNode: Returns the parent node of an element.
// childNodes: Returns a NodeList of all child nodes (including text and comment nodes).
// firstChild: Returns the first child node (could be text or element).
// nextSibling: Returns the next sibling node (could be text or element).

// Example HTML:html

// <div id="container">
//   <h1>Title</h1>
//   <p>Paragraph</p>
// </div>

// Traversal Example:javascript

// const container = document.getElementById("container");

// // parentNode
// console.log(container.parentNode); // Output: <body>...</body>

// // childNodes
// console.log(container.childNodes); // NodeList: [text, h1, text, p, text]

// // firstChild
// console.log(container.firstChild); // Output: text node (whitespace)

// // nextSibling
// const h1 = container.querySelector("h1");
// console.log(h1.nextSibling); // Output: text node (whitespace)
// console.log(h1.nextSibling.nextSibling); // Output: <p>Paragraph</p>

// Connection to Objects:Nodes are objects with properties like parentNode (key-value pair). You can traverse them using for...in or for...of:javascript

// for (let node of container.childNodes) {
//   if (node.nodeType === 1) { // 1 = Element node
//     console.log(node.tagName); // Output: H1, P
//   }
// }

// Use Case:Navigating the DOM to find related elements (e.g., parent, siblings) for manipulation.

// 5. Manipulating DOM ElementsYou can modify DOM elements’ content, attributes, and styles using various properties and methods.a. innerHTMLSets or gets the HTML content inside an element (including tags).Example:html

// <div id="container">Hello</div>

// javascript

// const container = document.getElementById("container");
// container.innerHTML = "<p>New <b>content</b></p>";
// console.log(container.innerHTML); // Output: <p>New <b>content</b></p>

// Warning: Be cautious with innerHTML to avoid XSS (cross-site scripting) vulnerabilities when using user input.

// b. textContentSets or gets the text content of an element, ignoring HTML tags.Example:javascript

// container.textContent = "Plain text";
// console.log(container.textContent); // Output: Plain text

// Difference: textContent is safer than innerHTML as it doesn’t parse HTML.

// c. setAttribute()Sets an attribute’s value on an element.Syntax:javascript

// element.setAttribute("attribute", "value");

// Example:javascript

// container.setAttribute("class", "box");
// console.log(container.outerHTML); // Output: <div id="container" class="box">Plain text</div>

// d. getAttribute()Retrieves an attribute’s value.Example:javascript

// console.log(container.getAttribute("class")); // Output: box

// e. style PropertyModifies an element’s inline CSS styles.Example:javascript

// container.style.backgroundColor = "blue";
// container.style.color = "white";
// console.log(container.style.backgroundColor); // Output: blue

// f. classListManipulates an element’s CSS classes (add, remove, toggle, etc.).Example:javascript

// container.classList.add("active");
// container.classList.toggle("hidden"); // Adds if absent, removes if present
// console.log(container.classList.contains("active")); // Output: true

// Connection to Conditionals:Use conditionals to manipulate elements dynamically:javascript

// if (container.classList.contains("active")) {
//   container.style.backgroundColor = "green";
// }

// Use Case:Updating text, styles, or attributes in response to user actions or events.

// 6. Creating and Removing DOM ElementsYou can create new elements and add or remove them from the DOM.a. createElement()Creates a new element node.Syntax:javascript

// document.createElement("tagName");

// Example:javascript

// const newDiv = document.createElement("div");
// newDiv.textContent = "New Div";

// b. appendChild()Adds a node as the last child of a parent.Example:html

// <div id="container"></div>

// javascript

// const container = document.getElementById("container");
// container.appendChild(newDiv);
// console.log(container.innerHTML); // Output: <div>New Div</div>

// c. insertBefore()Inserts a node before a specified child node.Syntax:javascript

// parentNode.insertBefore(newNode, referenceNode);

// Example:html

// <div id="container"><p>Existing</p></div>

// javascript

// const newP = document.createElement("p");
// newP.textContent = "Inserted";
// container.insertBefore(newP, container.firstChild);
// console.log(container.innerHTML); // Output: <p>Inserted</p><p>Existing</p>

// d. removeChild()Removes a child node from a parent.Syntax:javascript

// parentNode.removeChild(childNode);

// Example:javascript

// const p = container.querySelector("p");
// container.removeChild(p);
// console.log(container.innerHTML); // Output: <p>Inserted</p>

// Connection to Timing Events:Use setTimeout to delay DOM manipulation:javascript

// setTimeout(() => {
//   container.style.backgroundColor = "red";
// }, 2000); // Change color after 2 seconds

// Use Case:Dynamically adding/removing elements (e.g., todo list items, modals).

// Practical Example Combining All Conceptshtml

// <!DOCTYPE html>
// <html>
// <body>
//   <div id="container" class="box">
//     <h1>Title</h1>
//     <p class="text">Hello</p>
//   </div>
//   <script>
//     // Fetching Elements
//     const container = document.getElementById("container");
//     const texts = document.querySelectorAll(".text");

//     // Traversing DOM
//     console.log(container.parentNode); // <body>
//     console.log(container.firstChild); // Text node or <h1>

//     // Manipulating Elements
//     container.innerHTML = "<p>New Content</p>";
//     container.style.backgroundColor = "lightblue";
//     container.classList.add("active");

//     // Creating and Adding Elements
//     const newSpan = document.createElement("span");
//     newSpan.textContent = "Dynamic Span";
//     container.appendChild(newSpan);

//     // Removing Elements
//     const p = container.querySelector("p");
//     setTimeout(() => {
//       container.removeChild(p); // Remove after 2 seconds
//     }, 2000);

//     // Looping with querySelectorAll
//     texts.forEach((el, i) => {
//       el.textContent = `Text ${i + 1}`;
//     });

//     // Conditional Styling
//     if (container.classList.contains("active")) {
//       container.style.border = "2px solid black";
//     }
//   </script>
// </body>
// </html>

// Connection to Previous TopicsObjects: DOM nodes are objects with key-value pairs (e.g., element.style, element.classList).
// Loops: Used forEach with querySelectorAll to iterate over elements.
// Conditionals: Applied if to check classList.contains.
// Timing Events: Used setTimeout to delay DOM manipulation.

// SummaryIntroduction: The DOM is a tree of nodes representing a webpage, manipulated via JavaScript.
// Structure/Tree: Nodes (elements, text, etc.) form a tree with document as the root.
// Fetching Elements:getElementById: Single element by ID.
// getElementsByTagName/ClassName: HTMLCollection by tag or class.
// querySelector/querySelectorAll: CSS selector-based selection.

// Traversal: Use parentNode, childNodes, firstChild, nextSibling to navigate.
// Manipulation: Modify with innerHTML, textContent, setAttribute, getAttribute, style, classList.
// Creating/Removing: Use createElement, appendChild, insertBefore, removeChild.




