/**
 * @param {*} awaitTime 时间戳 定时器时间毫秒数
 * @param {*} fun 传入的函数
 * @param {*} arrAgu 传入的函数的参数
 */
 const stopUpDownFunList = (awaitTime=500) => {
  let startTimer = 0;
  //节流  一段时间只能执行一次 使用时间戳控制
  const retrunStopUpDown =  (fun, ...arrAgu) =>{
      if (typeof fun !== 'function') return
     let endTimer = new Date().getTime()
      if (endTimer - startTimer > awaitTime) {
          fun( ...arrAgu)
          startTimer = new Date().getTime()
      }
  }
  return retrunStopUpDown
}
export default stopUpDownFunList
