$(document).ready(function(){
	$('nav ul li').click(function(){
        var contents = this.innerHTML.toLowerCase();
		var scrollTo = "#" + contents;
		$('html, body').animate({
			scrollTop: $(scrollTo).offset().top
		}, 1000);
	});
	$('body').append('<div id="top"><i class="fa fa-arrow-up"></i></div>');
	$('#top').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	var anchors = [];
	$('section:not(#intro)').each( function() {
		var sectionId = $(this).attr('id');
		var tmp_instance = $(this).waypoint({
			handler: function(direction) {
				history.pushState(null, null, sectionId);                 
			}
		});
		anchors.push(tmp_instance);
	});
	window.onscroll = function() {
		function getScrollTop(){
			if(typeof pageYOffset!= 'undefined'){
				return pageYOffset;
			}
			else{
				var B= document.body;
				var D= document.documentElement;
				D= (D.clientHeight)? D: B;
				return D.scrollTop;
			}
		}
		if (getScrollTop() == 0) {
			history.pushState(null, null, 'intro');                 
		}        
	};
});
