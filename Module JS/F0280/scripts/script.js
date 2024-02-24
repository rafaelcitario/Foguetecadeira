const person = {
    name: "Rafael",
    age: 28,
    isAdmin: true,
};

const pessoa = ["Rafael", 28, true];

/*
  for...in
  The for...in loop returns the keys of an object or the indices of an array.
*/
for (const property in person) {
    console.log(property);
}

for (const index in pessoa) {
    console.log(index);
}

/* 
  for...of
  The for...of loop iterates over the values of an iterable, such as an array or a string.
  It is recommended to use for...of loops for arrays and for...in loops for objects.
*/

for (const prop of pessoa) {
    console.log(prop);
}
