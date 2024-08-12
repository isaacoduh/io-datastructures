function countDown(number) {
  if (number === 0) {
    console.log("Stopping point...");
    return;
  }

  console.log(number);
  countDown(number - 1);
}

countDown(10);

function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}
console.log(factorial(16));
