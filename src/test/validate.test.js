import { validate } from "../validate"

describe("Validate function", () => {
  it("should return false if start character is not capital letter", () => {
    expect(validate('hello')).toBeFalsy();
  })
  it("should return false if start character is not alphabet", () => {
    expect(validate('1hello')).toBeFalsy();
  })

  it("should return false if sentence has odd number of qutations (\")", () => {
    expect(validate('Hello "hi')).toBeFalsy();
  })
  it("should return false if sentence has odd number of qutations (')", () => {
    expect(validate('Hello \'hi')).toBeFalsy();
  })

  it("should return false if last character is not one of . ? !", () => {
    expect(validate('Hello hi,')).toBeFalsy();
  })

  it("should return false if any period character in middle of sentence", () => {
    expect(validate('Hello .hi.')).toBeFalsy();
  })

  it("should return false if numbers below 13 are mentioned as digits", () => {
    expect(validate('Hello 10 hi.')).toBeFalsy();
  })

  it("should return true if all the rules apply", () => {
    expect(validate('One lazy dog is too few, 13 is too many.')).toBeTruthy();
  })
})