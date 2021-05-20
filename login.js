function check(form) {
    username = new Array("admin1", "admin2", "members");
    password = new Array("1234", "0000", "yes1");
    email = new Array("yassinmejri325@gmail.com", "ufc@gmail.com", "no@gmail.com");
    city = new Array("Ezzahra", "Ezzahra", "Beja");
    adress = new Array("yes", "we", "can");
    zipcode = new Array("2034", "2034", "2050");
    country = new Array("Tn", "Tn", "Us");


	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('order.html')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('order.html')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}