function consoleLogLocal() {
  console.log("这是 export default 的局部引入方法")
}

export default{
  consoleLogLocal
}
/**
 * 假如你写成
 * export {
 *   consoleLogLocal
 * }
 * 将无法成功通过：
 *      import tool from "path"
 *      然后， xxx.xx 进行使用 🙅
 * 只能通过：
 *      import { consoleLogLocal, <具体的函数名>} from "path"
 *      然后，consoleLogLocal() 进行使用 🙆
 */
