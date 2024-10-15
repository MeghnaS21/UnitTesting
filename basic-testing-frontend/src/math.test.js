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

//test-4

it('should yield 0 if an empty array is provided', ()=>{
    const number = [];
    //whatever I am creating here I am passing it to the function

    const result = add(number);

    expect(result).toBe(0);
});

//test-5

it('should throw error if no value is passed into the function', ()=>{
    const result = ()=>{
        add();
    };
    //agar empty function na likhte toh
    //ye apne aap call ho jata or error mil jata

    //but hume erro ko catch krne ke liye try catch mei dalna padta action function, haina?

    //lekin taki try catch na likhna pare, hum ise ek empty method mei daal denge

    //taki ye handle krle vitest apne exexcution ke time.
    //because errors is not returned but thrown
    expect(result).toThrowError();
});

//test-6

it('should throw an error if provided with multiple arguments instead of array', ()=>{
    const num1 = 1, num2 = 2, num3 = 3;

    const result = ()=>{
        add(num1, num2, num3);
    };

    expect(result).toThrowError();
});
