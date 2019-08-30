const retry = require('.')

let count = 5
function fun(a,b,c,cb) {
  console.log(b)
  
  if (count--) return cb(new Error('bah!'))
  cb(null, a, b, c)
}

const rf = retry(fun)

rf(1,2,3, (err, a, b, c) =>{
  console.log(err)
  console.log(b)
})
