/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

/**
 * BigInt is used to represent integers greater than 2^53.
 * a and b are binary numbers, so append )b to the beginning to pass them into BigInt()
 * Similarly for Hexadecimal prefix '0x' and Octal number prefix '0o'
 *
 * Once the binary numbers have been converted to bigint datatype, add them using normal addition (+) operator.
 *
 * Now use toString() method to convert our BigInt number (sum calculated) to string which is a binary, by passing the base we want to convert
 * the argument to. str.toString(2) converts the str string to Binary (base 2)
 */
