// const typed = new Typed(".textAnimated", {
//     strings: ["Programming", "Development"],
//     typeSpeed: 100,
//     backSpeed: 60,
//   lopp: true,
//     loopCount: 2,

// });
   

$(function(){
	$(".typed").typed({
		strings: ["Developer", "Designing", "Programming", "Technology"],
		stringsElement: null,
	
		typeSpeed: 30,
		
		startDelay: 500,
		
		backSpeed: 20,
		
		backDelay: 500,
		
		loop: true,

		loopCount: false,
	
		showCursor: false,
		
		cursorChar: "|",
		
		attr: null,
	
		contentType: 'html',
		
		callback: function() {},
		
		preStringTyped: function() {},
	
		onStringTyped: function() {},
		
		resetCallback: function() {}
	});
});

