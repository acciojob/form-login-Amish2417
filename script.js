function getFormvalue() {
    //Write your code here
	let firstName = document.querySelector('.First-Name');
	let firstNameValues = firstName.value;
	let lastName = document.querySelector('.Last-Name');
	let lastNameValues = lastName.value;
	alert(firstNameValues + lastNameValues);

}
