/**
 * IIFE - Immediately Invoked Function Expression
 * -> A function that runs as soon as it is defined
 */

// example
(function(){
    // some initiation code
    let firstVariable;
    let secondVariable;
    // load script

    ({})();
})();


/**
 * Use cases
 * 1. Avoid polluting the global namespace - garbage collection
 * 2. Execute an async function
 * 3. The module pattern - private and public variables and methods
 */