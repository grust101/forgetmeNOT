$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  getLoginForm();
  getSignUpForm();
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

function getLoginForm(){
	console.log("inside login function")
	$('#login-button').on('click', function(event){
		event.preventDefault();

		console.log('event', event)


		$.ajax({
			url: '/sessions/login',
			method: 'GET'
		})

		.done(function(serverData){
			console.log("SUCCESS")
			$('#login-button').hide();
			$('body').append(serverData);
		})
		.fail(function(serverData){
			console.log('failing');
		})
	})
}

function getSignUpForm(){
	console.log("inside login function")
	$('#sign-up-button').on('click', function(event){
		event.preventDefault();

		console.log('event', event)


		$.ajax({
			url: '/users/new',
			method: 'GET'
		})

		.done(function(serverData){
			console.log("SUCCESS")
			$('#sign-up-button').hide();
			$('body').append(serverData);
		})
		.fail(function(serverData){
			console.log('failing');
		})
	})
}