import sum from "./sum"

test("Adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4)
})

test("Adds 3 + 2 to equal 5", () => {
  expect(sum(3, 2)).toBe(5)
})
