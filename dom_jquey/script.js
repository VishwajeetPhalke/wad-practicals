// When the document is ready
$(document).ready(function(){
    // When the button is clicked
    $('#updateButton').click(function(){
        // Get the new text from the input field
        var newText = $('#newText').val();
        // Update the text of the paragraph
        $('#text').text(newText);
    });
});