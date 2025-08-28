/**
 * DOM Modification - can be used to update DOM, change its attributes, 
 * properties such as data and style.
 */

// select an element by id
document.getElementById("mySelect");

// create an element
document.createElement("SELECT");

// select elements by class
document.getElementsByClassName('input');

// select elements by name
document.getElementsByName('Companyname');

// select elements by tagname
document.getElementsByTagName('select');

// select an element based on query
document.querySelector('.abc');

// select elements based on query
document.querySelectorAll('.abc');



// aatributes vs properties
// An attribute is the initial state when rendered in the DOM. A property is the current state.

<input id="demo" value="10" limit="100"></input>

var select = document.getElementById("demo");

// get value
select.value;
select.getAttribute('value');

// set value
select.setAttribute('value', 'Hello there!');
select.value = 50;