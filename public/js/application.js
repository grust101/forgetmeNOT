$(document).ready(function() {
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them
  getReminderForm();
//   // getSignUpForm();
//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

function getReminderForm(){
	console.log("inside reminder function")
	$('.reminder-button').on('click', function(event){
		event.preventDefault();

		console.log('event', event)


		$.ajax({
			url: '/new',
			method: 'GET'
		})

		.done(function(serverData){
			console.log("SUCCESS")
			$('.reminder-button').hide();
			// $('.intro-text').hide();
			$('.append-area').append(serverData);
			sendReminder();

		})
		.fail(function(serverData){
			console.log('failing');
		})
	})
}

// function sendReminder(){
// 	console.log("inside send function")
// 	$('.send').on('click', function(event){
// 		event.preventDefault();

// 		console.log('event', event)


// 		$.ajax({
// 			url: '/',
// 			method: 'GET'
// 		})

// 		.done(function(serverData){
// 			console.log("SUCCESS")
// 			$('.append-area').hide();
// 			// $('body').append(serverData);
// 		})
// 		.fail(function(serverData){
// 			console.log('failing');
// 		})
// 	})
// }