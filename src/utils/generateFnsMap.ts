/**
 *
 * @param fn Function 你要生成的 mapkey 对应的方法
 * @return Object 生成的fnsMap
 */
export default function generateFnsMap(fn : Function) {
  return (map : object) => Object
    .keys(map)
    .reduce((acc : object, k : string) => {
      return {
        ...acc,
        [k]: (v?: any) => v
          ? fn(k, v)
          : fn(k)
      }
    }, {})
};