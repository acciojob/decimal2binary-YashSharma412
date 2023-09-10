function decimalToBinary(num) {
  //Write you code here
  let arr = [];
	while (num!=0) {
		let rem = num%2;
		arr.unshift(rem);
		num = parseInt(num/2);
	}
	return arr.join("");

}
// decimalToBinary(10);
window.decimalToBinary = decimalToBinary;
