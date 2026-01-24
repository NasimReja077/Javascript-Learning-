// Mouse & Pointer Events in JavaScript
/**
What are Mouse / Pointer Events?
Mouse and Pointer events are DOM events that occur when a user interacts with elements using: Mouse, Touch, Pen / Stylus.

They allow JavaScript to track position, clicks, movement, and gestures.
Examples of Mouse Events:
- click: Triggered when a mouse button is clicked.
- dblclick: Triggered when a mouse button is double-clicked.
 */

// Common Mouse Events
// click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave

const box = document.getElementById("box");
// Example: Mouse Click
box.addEventListener("click", () => {
     console.log("Box clicked!")
});
// In this example, when the user clicks on the element with id "box", a message "Box clicked!" will be logged to the console.

// Example: Mouse dblclick
box.addEventListener("dblclick", () => {
     console.log("Box double clicked!")
});
// In this example, when the user double-clicks on the element with id "box", a message "Box double clicked!" will be logged to the console.
// mouseover and mouseout example
// mouseover: Triggered when the mouse pointer enters the element.
// mouseout: Triggered when the mouse pointer leaves the element.
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightblue"; 
});
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
});

// In this example, when the user hovers over the box, its background color changes to light blue, and when the mouse leaves, it changes back to white.

// mouseleave and mouseenter example
// mouseenter: Triggered when the mouse pointer enters the element (does not bubble).
// mouseleave: Triggered when the mouse pointer leaves the element (does not bubble).

box.addEventListener("mouseenter", () => {
    box.style.border = "2px solid green"; 
});
box.addEventListener("mouseleave", () => {
    box.style.border = "none";
});  
// In this example, when the user enters the box, a green border is added, and when the mouse leaves, the border is removed.

// mouseup and mousedown example
// mousedown: Triggered when a mouse button is pressed down.
// mouseup: Triggered when a mouse button is released.

box.addEventListener("mousedown", () => {
    console.log("Mouse button pressed down on the box.");
});
box.addEventListener("mouseup", () => {
    console.log("Mouse button released on the box.");
});  
// In this example, messages are logged when the mouse button is pressed down and released on the box.

// Mouse Position Properties
// clientX / clientY	Position inside viewport
// pageX / pageY	     Position including scroll
// screenX / screenY	Position on screen
// offsetX / offsetY     Position relative to target element

// Example: Tracking mouse position within the box
box.addEventListener("mousemove", (event) => {
     console.log("Mouse position within box: (" + event.offsetX + ", " + event.offsetY + ")");
});
// In this example, as the mouse moves within the box, the current position relative to the box is logged to the console.
// sapose offsetX value is 50 and offsetY value is 30, it means the mouse is 50 pixels from the left edge and 30 pixels from the top edge of the box.


// Example: Tracking mouse position in the viewport
document.addEventListener("mousemove", (event) => {
     console.log("Mouse Position in viewport: (" + event.clientX + "," + event.clientY + ")");
});
// In this example, as the mouse moves anywhere in the document, the current position relative to the viewport is logged to the console.
// suppose clientX value is 200 and clientY value is 150, it means the mouse is 200 pixels from the left edge and 150 pixels from the top edge of the viewport.


// Mouse Buttons
/**
What are Mouse Buttons?
-> Mouse buttons represent which physical mouse button the user presses during a mouse or pointer event.

JavaScript exposes this through:
✅ event.button (single button pressed) -> 0, 1, 2, etc.
✅ event.buttons (multiple buttons currently pressed) -> bitmask value , e.g., 1 for left, 2 for right, 4 for middle, etc.

 */

/**
 * event.button 
Definition - event.button tells which mouse button triggered the event.
 */

// event.button values:
// 0: Main button (usually left)
// 1: Middle button (usually wheel)
// 2: Secondary button (usually right)
// 3: Back button
// 4: Forward button

// Example: Detecting which mouse button was clicked
box.addEventListener("mousedown", (event) => {
    switch(event.button) {
     
     case 0:
          console.log("Left button clicked");     
          break;
     case 1:
          console.log("Middle button clicked");   
          break;
     case 2:
          console.log("Right button clicked");     
          break;
     case 3:
          console.log("Back button clicked");     
          break;
     case 4:
          console.log("Forward button clicked");   
          break;
     default:
          console.log("Unknown button clicked");  
    }
});
// In this example, when a mouse button is pressed down on the box, it detects which button was clicked and logs the corresponding message to the console.

// event.buttons
//  Definition - event.buttons tells which buttons are currently being held down.
// Binary Values (Bitmask):
// 1: Left button
// 2: Right button
// 4: Middle button
// 8: Back button
// 16: Forward button
// Example: Detecting multiple mouse buttons pressed        
box.addEventListener("mousemove", (event) => {
     if (event.buttons & 1) {
          console.log("Left button is being held down");
     }    
     if (event.buttons & 2) {
          console.log("Right button is being held down");
     }
     if (event.buttons & 4) {
          console.log("Middle button is being held down");
     }    
});
// In this example, as the mouse moves over the box, it checks which buttons are currently being held down and logs the corresponding messages to the console.
// If the left button is held down, it logs "Left button is being held down", and similarly for the right and middle buttons. 

// Example: Detecting dragging with left mouse button
document.addEventListener("mousemove", (e) => {
  if (e.buttons === 1) {
    console.log("Dragging with left button");
  }
  if (e.buttons === 3) {
     console.log("Dragging with left and right buttons");   
  }
});

// Mouse Buttons + Pointer Events
box.addEventListener("pointerdown", (event) => {
     console.log("Pointer down with button: " + event.button);
})
box.addEventListener("pointerup", (event) => {
     console.log("Pointer up with button: " + event.button);
});


// Common Pointer Events
// pointerdown, pointerup, pointermove, pointerover, pointerout, pointerenter, pointerleave, pointercancel
// Example: Handling mouse click and pointer move events


// Function to handle mouse click event
function handleClick(event) {
    console.log("Mouse clicked at position: (" + event.clientX + ", " + event.clientY + ")");
}
// event.clientX and event.clientY give the X and Y coordinates of the mouse click relative to the viewport.

// Function to handle pointer move event
function handlePointerMove(event) {
    console.log("Pointer moved to position: (" + event.clientX + ", " + event.clientY + ")");
}

// Adding event listeners to the document
document.addEventListener("click", handleClick);
document.addEventListener("pointermove", handlePointerMove);
// Note: Pointer events are a unified way to handle input from mouse, touch, and pen devices.