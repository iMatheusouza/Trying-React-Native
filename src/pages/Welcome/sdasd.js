function nonExistentFunction() {
  return console.log(1 * 2);
}

try {
  nonExistentFunction();
} catch (error) {
  console.error('esse é meu erro', error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
