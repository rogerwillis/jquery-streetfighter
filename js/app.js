$(document).ready(function() {
	
	$(document).keydown(function(event){
		if(event.keyCode == 88){
			$('.ryu-ready, .ryu-still, .ryu-throwing').hide();
			 $('.ryu-cool').show();
			 $('.ryu-fan').show();
			 
			}
		}).keyup(function(){
			  //check to still if hovering over Ryu
			  $('.ryu-fan').hide();
			  if($('.ryu').is(':hover') === true)
			  {
				   $('.ryu-cool').hide();
				   $('.ryu-ready').show();
				   }
				   else{ 
				   $('.ryu-cool').hide();
				   $('.ryu-still').show();}
			});
			
			
$('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    // play hadouken sound
	playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
  .animate(
    {'left': '300px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '-212px');
    }
  );
  $(".instructions-set-2").addClass('blue');
    // animate hadouken to the right of the screen
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}