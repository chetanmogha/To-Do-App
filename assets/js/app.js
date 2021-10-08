// Marking todo as completed
// $('li').click(function (){
// $(this).toggleClass('completed');
// })

$('ul').on('click','li',function (){
$(this).toggleClass('completed'); 

})

$('ul').on('click','span',function (e){
    $(this).parent().fadeOut(500,function (){
        $(this).remove();
    })
    
    e.stopPropagation(); //to stop event bubbling
})
// Removing todo from todoList
// $('span').click(function (){
//     $(this).parent().remove();
// })

$('input').keypress(function (e){
if(e.which==13){
    const todoText=$(this).val();
    console.log(todoText);
    const todo = `<li> <span> <i class="fas fa-trash-alt"></i></span> ${todoText}`;
    
    $('ul').append(todo);
    $(this).val("")  
}
})

$('#plus').click(function(){
    $('input').fadeToggle(500);
})