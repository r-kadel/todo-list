// check off todos with click
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

//Delete To do
$('ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    e.stopPropagation();
})

// New To do
$('input[type="text"]').keypress(function(e){
    if(e.which === 13) {
        //getting and storing input
        let todoText = $(this).val();
        $(this).val('');
        //create new li
        $('ul').append(`<li><span><i class="far fa-trash-alt"></i></span></span> ${todoText}</li>`);
    }
})

$('#plus').click(function() {
    $('input[type="text"]').fadeToggle();
})