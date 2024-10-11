const sum = require('./sum')

test('Should Add Two Integer Numbers',()=>{
 expect(sum(10,20)).toBe(30)
})