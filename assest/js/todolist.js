//for toAdd button
$("#toAdd").on("click",function(){
	$("input").fadeToggle(300);
})
//for the text input
$("input").on("keypress",function(event){
	if(event.which===13){
		var h=$("input").val();
		$("input").val("");
		 $("ul").append("<li><span class=\"toRemove\"><i class=\"fas fa-trash-alt\"></i></span> "+h+"</li>");
	}
})
//when we click a specific element of the list it will give a strike out effect
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//for toRemove button
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});