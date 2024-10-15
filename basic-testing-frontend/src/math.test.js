//keyword is test or it both
import { test, it, expect } from "vitest";
import { add } from "./math";

//test-1
it(" should summarize all number values in an array", () => {
  //ARRANGE
  const numbers = [1, 2, 3];

  //ACT
  const result = add(numbers);
  //ASSERT
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

//test-2
it('should yield NaN if a least one invalid number is provided', ()=>{
    const input = ['invalid', 1];

    const result = add(input);

    expect(result).toBeNaN();

});

//test-3
it('should yield a correct sum if an array of numeric string values is provided', ()=>{
    const numbers = ['1', '2'];

    const result = add(numbers);

    const expectedResult = numbers.reduce(
        (prevValue , curValue) => +prevValue + +curValue, 0
    );

    expect(result).toBe(expectedResult);
});
