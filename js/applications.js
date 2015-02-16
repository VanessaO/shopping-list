$(document).ready(function() {

    //Validates text box, then adds value in text box to list

    $('.addButton').click(function() {
        if ($('.addItem').val().trim().length == 0) {
            //alert("Put someting here!");
            $('.error').show();
        }

        else {
            //alert('Something is gonna happen');
            $('ul').append('<li class="item"><div class="checkbox"><p class="checkmark">&#10003;</p></div><p>' + $('.addItem').val() + '</p><p class="delete">x</p>');
            $('.error').hide();
        };
    })

    $('.checkbox').click(function() {
        $(this).children("p").toggle();

    })
})