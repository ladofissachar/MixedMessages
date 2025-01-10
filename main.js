function feeling(feeling){

     // Select the element with the class 'quote'
    const quoteElement = document.querySelector('.quote');

    // Clear the content of the selected element
    quoteElement.innerHTML = '';
    
    // Add HTML to the selected element
    quoteElement.innerHTML = `${feeling}`;
}