const isPalindrome = require('./isPalindrome')

test('Tacocat returns true', () => {
  expect(isPalindrome('Tacocat')).toBe(true)
})

test('Adil returns false', () => {
  expect(isPalindrome('Adil')).toBe(false)
})
