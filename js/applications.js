$(document).ready(function() {

    //Validates text box, then adds value in text box to list

    $('.addButton').click(function() {
        if ($('.addItem').val().trim().length == 0) {
            //alert("Put someting here!");
            $('.error').show();
        }

        else {
            //alert('Something is gonna happen');
            $('<li class="item"> <div class="checkbox"> <p class="checkmark">&#10003;</p> </div> <p>' + $('.addItem').val() + '</p> <p class="delete">x</p>').appendTo('ul');
            $('.error').hide();
        };
    });

    //Toggles check marks for current abd future items
    $(document).on('click', '.checkbox' , function() {
        $(this).children('.checkmark').toggle();

    })
})