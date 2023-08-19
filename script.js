const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let ans = "";
	for (let i = 0; i < sampleObject.length; i++) {
		if (hasKey[i].key === sampleObject[i]) {
			ans += true;
		}
		else{
			ans += false;
		}
	}
	return ans;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
