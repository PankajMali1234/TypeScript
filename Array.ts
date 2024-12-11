let arr:Array<String|Number>= ["Pankaj","Prasad","Vedanti",12,14,16];

arr.push("Rahul");
console.log(arr);

const names: string[] = [];
names.push("Dylan");
console.log(names);

//readonly
const nam: readonly string[]=["Dylan"];
//nam.push("Jack");
console.log(nam);

//Type Inference
const numbers = [1, 2, 3]; 
numbers.push(4); 
//numbers.push("2"); 
let head: number = numbers[0]; 
console.log(numbers);