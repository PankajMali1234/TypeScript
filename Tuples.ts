let ourTuple:[number,boolean,string];

ourTuple=[5,false,'Coding God was here'];
console.log(ourTuple);

ourTuple.push('Something new and wrong');
console.log(ourTuple);

const ourReadonlytuple: readonly[number,boolean,string]=[5,true,'Pankaj'];
//ourReadonlytuple.push('Something new and wrong');
console.log(ourReadonlytuple);