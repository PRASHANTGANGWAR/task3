
	
	$(function() {
	$("#password_error_message").hide();
	$("#email_error_message").hide();

	var error_password = false;
	var error_email = false;


	$("#password").focusout(function() {

		check_password();
		
	});

	$("#email").focusout(function() {

		check_email();
		
	});




	function check_word() {
	
		var password_length = $("#password").val().length;
		
		var pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)

		if(password_length >= 8) {

				if(pattern.test($("#password").val()))
				{
				$("#password_error_message").hide();
				}
			}

		 else {
			
			$("#password_error_message").html("At least 8 characters ");
			$("#password_error_message").show();
			error_password = true;
		}
	
	}


function check_password() {
	
		var password_length = $("#password").val().length;
		
		var pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
		var pattern1 = new RegExp(/^(?=.*[a-z])[0-9a-zA-Z]{8,}$/)
		var pattern2 = new RegExp(/^(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
		var pattern3 = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
		if(password_length >= 8) {

				if(pattern1.test($("#password").val()))
				{

						if (pattern2.test($("#password").val())) 
						{
			
							$("#email_error_message").hide();
						}

						else {
			
						$("#password_error_message").html("At least 1 upper case characters ");
						$("#password_error_message").show();
						error_password = true;
							 }

				}

					else {
			
					$("#password_error_message").html("enter 1 lowercase character atleast ");
					$("#password_error_message").show();
					error_password = true;
						}
				
		 }

		 else {
			
			$("#password_error_message").html("At least 8 characters ");
			$("#password_error_message").show();
			error_password = true;
		       }
	
	}

	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#email").val())) {
			$("#email_error_message").hide();
		} else {
			$("#email_error_message").html("Invalid email address ");
			$("#email_error_message").show();
			error_email = true;
		}
	
	}

	$("#registration_form").submit(function() {
											
		error_password = false;
		error_email = false;
											
		check_password();
		check_email();
		
		if( error_password == false  && error_email == false) {
			return true;
		} else {
			return false;	
		}

	});

});
