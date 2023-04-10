// complete the given function

function palindrome(str){
	let s = "";
	for(let i = str.length-1; i>=0; i--){
		s += str.charAt(i);
	}
	let message = false;
	if(s!==str){
		message = false;
	}
	else{
		message = true;
	}
	return message;
}

module.exports = palindrome

