// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime


test("To check if a number is prime", () => {
  expect(isPrime(1)).toBe(false);
});