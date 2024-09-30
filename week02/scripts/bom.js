const input = document.querySelector('#favchap'); 
const button = document.querySelector('button'); 
const list = document.querySelector('#list'); 

// Add an event listener for the button click
button.addEventListener('click', function() {

   
    const chapter = input.value.trim(); 
    // Check if the input is not empty
    if (chapter !== '') {

        const li = document.createElement('li');
        li.textContent = chapter; 

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; 
        deleteButton.classList.add('delete'); 

        // Append the delete button to the list item (li)
        li.append(deleteButton);

        // Append the list item (li) to the unordered list (ul)
        list.append(li);

        // Clear the input field after adding the chapter
        input.value = '';

        
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });

    } else {
        // If the input is blank, return focus to the input field
        alert('Please enter a chapter title.');
    }

   
    input.focus();
});

// Add an event listener for the Enter Keypress
input.addEventListener('keypress', (e)=> {
    if(e.key === 'Enter'){
        button.click();
    }
})


