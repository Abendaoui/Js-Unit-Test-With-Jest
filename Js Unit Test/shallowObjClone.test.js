const shallowObjectClone = require('./shallowObjClone')

test('Get Shallow Object Clone', () => {
  expect(shallowObjectClone({})).toStrictEqual({})
})
