module.exports = function(fun, opts) {
  opts = opts || {}
  const interval = opts.interval || 1000
  
  return function() {
    const args = Array.from(arguments)
    const cb = args.pop()
    let retry = 0
    const _this = this
    tryit()
 
    function tryit() {
      fun.apply(_this, args.concat( function(err) {
        if (!err) return cb.apply(this, Array.from(arguments))
        console.error(`${err.message}, retrying in ${interval/1000}s ${retry ? ' (retry #' + retry + ')': ''}`)
        retry++
        setTimeout(()=>{
          tryit()
        }, interval)
      }))
    }
  }
}
