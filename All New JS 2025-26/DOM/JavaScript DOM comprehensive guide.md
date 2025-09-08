# JavaScript DOM Complete Guide

## What is the DOM?

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

## DOM Structure

The DOM represents an HTML document as a tree structure where:
- Each HTML element is a **node**
- Text content is also a **node**
- Attributes are **properties** of element nodes
- The entire document is the **document node**

```
Document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── h1
        ├── div
        │   ├── p
        │   └── span
        └── script
```

## Key DOM Concepts

### 1. Node Types
- **Element Node**: HTML elements (`<div>`, `<p>`, etc.)
- **Text Node**: Text content within elements
- **Attribute Node**: Element attributes
- **Document Node**: The root document object
- **Comment Node**: HTML comments

### 2. Node Properties
- `nodeType`: Numeric value indicating node type
- `nodeName`: Name of the node
- `nodeValue`: Value of the node
- `textContent`: Text content of the node
- `innerHTML`: HTML content inside the element
- `outerHTML`: HTML content including the element itself

## DOM Selection Methods

### Basic Selectors
```javascript
// By ID
document.getElementById('myId')

// By Class Name
document.getElementsByClassName('myClass')

// By Tag Name
document.getElementsByTagName('div')

// By Name attribute
document.getElementsByName('myName')
```

### Modern Selectors (Recommended)
```javascript
// Query Selector (returns first match)
document.querySelector('#myId')
document.querySelector('.myClass')
document.querySelector('div')

// Query Selector All (returns NodeList)
document.querySelectorAll('.myClass')
document.querySelectorAll('div p')
```

## DOM Manipulation

### Creating Elements
```javascript
// Create element
const newDiv = document.createElement('div')

// Set attributes
newDiv.id = 'myDiv'
newDiv.className = 'container'
newDiv.setAttribute('data-value', '123')

// Add content
newDiv.textContent = 'Hello World'
newDiv.innerHTML = '<p>Hello <strong>World</strong></p>'
```

### Adding Elements
```javascript
// Append child
parentElement.appendChild(newDiv)

// Insert before
parentElement.insertBefore(newDiv, referenceNode)

// Insert adjacent
element.insertAdjacentHTML('beforebegin', '<p>Before</p>')
element.insertAdjacentHTML('afterend', '<p>After</p>')
```

### Removing Elements
```javascript
// Remove child
parentElement.removeChild(childElement)

// Remove element (modern)
element.remove()
```

### Modifying Elements
```javascript
// Change text content
element.textContent = 'New text'

// Change HTML content
element.innerHTML = '<strong>Bold text</strong>'

// Change attributes
element.setAttribute('class', 'newClass')
element.id = 'newId'

// Change styles
element.style.color = 'red'
element.style.backgroundColor = 'blue'
```

## DOM Navigation

### Parent/Child Relationships
```javascript
// Parent navigation
element.parentNode
element.parentElement

// Child navigation
element.childNodes          // All child nodes (including text)
element.children           // Only element children
element.firstChild
element.firstElementChild
element.lastChild
element.lastElementChild

// Sibling navigation
element.nextSibling
element.nextElementSibling
element.previousSibling
element.previousElementSibling
```

## Event Handling

### Adding Event Listeners
```javascript
// Method 1: addEventListener (recommended)
element.addEventListener('click', function(event) {
    console.log('Clicked!', event)
})

// Method 2: Event properties
element.onclick = function(event) {
    console.log('Clicked!', event)
}

// Method 3: Inline HTML (not recommended)
// <button onclick="handleClick()">Click me</button>
```

### Common Events
- `click` - Mouse click
- `dblclick` - Double click
- `mouseenter` - Mouse enters element
- `mouseleave` - Mouse leaves element
- `keydown` - Key pressed down
- `keyup` - Key released
- `submit` - Form submission
- `load` - Page/image loaded
- `DOMContentLoaded` - DOM fully constructed

### Event Object Properties
```javascript
element.addEventListener('click', function(event) {
    event.target        // Element that triggered the event
    event.currentTarget // Element that the event listener is attached to
    event.type          // Type of event (e.g., 'click')
    event.preventDefault() // Prevent default behavior
    event.stopPropagation() // Stop event bubbling
})
```

## DOM Ready Events

```javascript
// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // DOM is fully loaded and parsed
    console.log('DOM ready!')
})

// Wait for everything to load
window.addEventListener('load', function() {
    // All resources (images, stylesheets, etc.) loaded
    console.log('Page fully loaded!')
})
```

## Practical Examples

### Example 1: Dynamic List Creation
```javascript
function createTodoList(items) {
    const ul = document.createElement('ul')
    ul.className = 'todo-list'
    
    items.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        li.addEventListener('click', function() {
            this.classList.toggle('completed')
        })
        ul.appendChild(li)
    })
    
    document.body.appendChild(ul)
}

createTodoList(['Learn DOM', 'Practice JavaScript', 'Build Projects'])
```

### Example 2: Form Validation
```javascript
const form = document.querySelector('#myForm')
const emailInput = document.querySelector('#email')
const errorDiv = document.querySelector('#error')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    const email = emailInput.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!emailRegex.test(email)) {
        errorDiv.textContent = 'Please enter a valid email'
        errorDiv.style.color = 'red'
        emailInput.focus()
    } else {
        errorDiv.textContent = ''
        console.log('Form submitted successfully')
    }
})
```

## Practice Questions

### Beginner Level
1. How do you select an element with ID "header" using JavaScript?
2. What's the difference between `textContent` and `innerHTML`?
3. How do you create a new paragraph element and add it to the body?
4. What's the difference between `getElementById` and `querySelector`?
5. How do you add a CSS class to an element?

### Intermediate Level
1. Write a function to toggle the visibility of an element
2. Create a function that changes all paragraph text color to red
3. How would you remove all child elements from a div?
4. Write code to handle form submission and prevent default behavior
5. Create a function that counts the number of div elements on a page

### Advanced Level
1. Implement event delegation for dynamically created elements
2. Create a function that deep clones an element with all its children
3. Write code to detect when an element enters the viewport
4. Implement a custom event system using DOM events
5. Create a function that finds the closest parent element with a specific class

## Interview Questions

### Basic Questions
1. **What is the DOM and how does it relate to HTML?**
   - Answer: The DOM is a programming interface that represents HTML documents as a tree structure of nodes, allowing JavaScript to interact with and modify web pages.

2. **What's the difference between `getElementById` and `querySelector`?**
   - Answer: `getElementById` only selects by ID and is faster, while `querySelector` can use any CSS selector but is slightly slower.

3. **Explain the difference between `textContent` and `innerHTML`.**
   - Answer: `textContent` gets/sets only the text content, while `innerHTML` gets/sets HTML markup as well.

4. **What are the different ways to add event listeners to DOM elements?**
   - Answer: `addEventListener()`, event properties (`onclick`), and inline HTML attributes.

5. **What is event bubbling and how can you stop it?**
   - Answer: Event bubbling is when events propagate up the DOM tree. Use `event.stopPropagation()` to stop it.

### Intermediate Questions
1. **What's the difference between `childNodes` and `children`?**
   - Answer: `childNodes` includes all nodes (text, comments, elements), while `children` only includes element nodes.

2. **How do you check if an element exists in the DOM?**
   - Answer: Check if the selector returns a truthy value: `if (document.querySelector('#myId')) { ... }`

3. **What's the difference between `appendChild` and `insertAdjacentHTML`?**
   - Answer: `appendChild` adds existing or newly created nodes, while `insertAdjacentHTML` parses HTML strings and inserts them.

4. **How would you implement event delegation?**
   - Answer: Attach event listeners to parent elements and use `event.target` to identify the actual clicked element.

5. **What happens when you try to access DOM elements before the page loads?**
   - Answer: Elements might not exist yet, causing null references. Use `DOMContentLoaded` event or place scripts at the bottom.

### Advanced Questions
1. **Explain the difference between `DOMContentLoaded` and `load` events.**
   - Answer: `DOMContentLoaded` fires when DOM is ready, `load` fires when all resources are loaded.

2. **How can you improve DOM manipulation performance?**
   - Answer: Use document fragments, minimize reflows/repaints, batch DOM operations, use `requestAnimationFrame`.

3. **What is the difference between `cloneNode(true)` and `cloneNode(false)`?**
   - Answer: `cloneNode(true)` deep clones with all descendants, `cloneNode(false)` only clones the element itself.

4. **How would you detect if an element is visible in the viewport?**
   - Answer: Use `getBoundingClientRect()` or the Intersection Observer API.

5. **What are virtual DOMs and how do they differ from the real DOM?**
   - Answer: Virtual DOMs are JavaScript representations of the real DOM, used by frameworks like React for efficient updates through diffing algorithms.

## Best Practices

1. **Always check if elements exist before manipulating them**
2. **Use modern selector methods** (`querySelector`, `querySelectorAll`)
3. **Minimize direct DOM manipulation** in loops
4. **Use event delegation** for dynamic content
5. **Cache DOM references** when accessing elements multiple times
6. **Use `DOMContentLoaded`** to ensure DOM is ready
7. **Avoid inline event handlers** in HTML
8. **Use semantic HTML** for better DOM structure
9. **Consider performance** when doing bulk DOM operations
10. **Use `requestAnimationFrame`** for smooth animations

## Common Pitfalls

1. **Accessing DOM before it's ready**
2. **Memory leaks from event listeners**
3. **Excessive DOM queries in loops**
4. **Not removing event listeners**
5. **Modifying arrays while iterating over NodeLists**
6. **Confusing NodeList with Array**
7. **Not preventing default behavior when needed**
8. **Mixing jQuery and vanilla JavaScript**