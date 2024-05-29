// This code waits for the entire HTML document to load before running
document.addEventListener("DOMContentLoaded", function() {
    // Select all list items (notes) within the unordered list with class "org-ul"
    const allNotes = document.querySelectorAll(".org-ul li");

    // Select the search input field with the data attribute "data-search"
    const searchInput = document.querySelector("[data-search]");

    // Add an event listener to the search input field that listens for "input" events
    searchInput.addEventListener("input", function(e) {
        // Get the current value of the search input field and convert it to lowercase
        const value = e.target.value.toLowerCase();

        // Loop through each note in the list of notes
        allNotes.forEach(function(note) {
            // Get the text content of the note and convert it to lowercase
            const noteText = note.textContent.toLowerCase();

            // Check if the note's text includes the search input value
            if (noteText.includes(value)) {
                // If it does, display the note
                note.style.display = "";
            } else {
                // If it doesn't, hide the note
                note.style.display = "none";
            }
        });
    });
});
