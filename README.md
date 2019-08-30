never-give-up
---

```js
const retry = require('dont-stop-believing')

let count = 5
function fun(a, b, c, cb) {
  console.log(b)
  
  if (count--) return cb(new Error('bah!'))
  cb(null, a, b, c)
}

const rf = retry(fun)

rf(1,2,3, (err, a, b, c) =>{
  console.log(err)
  console.log(b)
})
```

```bash
> node test.js

2
bah!, retrying in 1s 
2
bah!, retrying in 1s  (retry #1)
2
bah!, retrying in 1s  (retry #2)
2
bah!, retrying in 1s  (retry #3)
2
bah!, retrying in 1s  (retry #4)
2
null
2
```
