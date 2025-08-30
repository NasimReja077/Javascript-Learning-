// getElementById

// getElementById is a method that returns the element with the specified ID.
// it is commonly used to access a specific element in the DOM.
// it allows developers to manipulate the element's content, attributes, and styles.
// it returns a single element, making it efficient for targeting specific elements.
// it can be used in conjunction with other DOM methods to create dynamic web applications.
// it is a fundamental method for DOM manipulation in JavaScript.
// it was introduced in the early versions of JavaScript and has become a standard method for web development.
// `getElementById` is widely supported across all modern browsers.


// const element = document.getElementById("title"); // <h1 id="title">Hello World</h1> // because the ID is unique within the document, it will always return the same element


// const element = document.getElementById("title").id; // output: "title" // because the ID is unique within the document, it will always return the same element.


// const elementId = document.getElementById("title").id; // output: "title" // because the ID is unique within the document, it will always return the same element.


// const elementId = document.getElementById("title").class // output: undefined //because class is not a property of the element, it is a property of the element's classList


// const elementId = document.getElementById("title").className; // output: "heading"

// className is a property that returns the value of the element's class attribute as a string.
// it is used to get or set the class attribute of an element.

// example:
const element = document.getElementById("myElement");
// this will return the element with the ID "myElement"
// you can then manipulate the element using JavaScript
// for example:
element.innerHTML = "New content";
// this will change the content of the element with the ID "myElement"
// you can also change other properties, such as styles or attributes
// for example:
element.style.color = "red";
element.setAttribute("data-custom", "value");
// this will change the color of the element with the ID "myElement" to red
// it will also set a custom data attribute on the element
// you can use these techniques to create dynamic and interactive web pages
// for example:
const element = document.getElementById("myElement");
element.innerHTML = "New content";
element.style.color = "red";
element.setAttribute("data-custom", "value");

//------------------
//document.getElementById('title').getAttribute // output: { [native code] }

//ƒ getAttribute() { [native code] }
// getAttribute is function. when it call mashion attribute.

// get id, class


 //document.getElementById('title').setAttribute('class', 'test'); //oitput : undefined
// setAttribute is function. when it call mashion attribute.
//it is use to set the value of an attribute on an element.


//titles.style.backgroundColor = 'pink'; //'pink'
// it is use to set the value of an attribute on an element.
// titles.style is a property that allows you to access the inline styles of an element.
// you can use it to change the styles of an element dynamically.



//titles.innerText; // output: 'DOM learning on Chai aur code'

// it returns the visible text content of an element, excluding any HTML tags.
// innerText is a property that returns the visible text content of an element, excluding any HTML tags.
// it is commonly used to get the text content of an element without any HTML tags.
// it can be useful for extracting text from elements for processing or manipulation.

//titles.textContent; // output: 'DOM learning on Chai aur code test text'

// .textContent is a property that returns the text content of an element, including all child elements.
// it is commonly used to get the text content of an element without any HTML tags.

//titles.innerHTML; // output: '<span>DOM learning on Chai aur code test text</span>'
// innerHTML is a property that returns the HTML content of an element, including all child elements.
// it is commonly used to get the HTML content of an element, including any HTML tags.
// it can be useful for extracting HTML from elements for processing or manipulation.


// document.querySelector
// document.querySelector is a method that returns the first element that matches a specified CSS selector.
// it is commonly used to select elements from the DOM using CSS selectors.
// for example:
const element = document.querySelector("#myElement");
// <div id="myElement">Hello World</div>


// nodeList is not a array because it is an array-like object.
// it means that it has a length property and can be accessed by index,
// but it does not have all the methods of an array, such as forEach or map.

// ******************************NOTES****************************
// IN react why className why not use class ?

// behind the scenes, document understands className
// behind the scenes, document understands className because it is the standard property for accessing an element's class.
// because class is a reserved keyword in JavaScript, so JSX uses className instead.
// behind the scenes, React handles the conversion between className and class for you.

