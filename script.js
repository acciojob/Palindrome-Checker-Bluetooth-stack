// complete the given function

function palindrome(str){
	let s = "";
	for(let i = str.length-1; i>=0; i--){
		s += str.charAt(i);
	}
	if(s===str){
		return false;
	}
	else{
		return true;
	}
}

module.exports = palindrome

