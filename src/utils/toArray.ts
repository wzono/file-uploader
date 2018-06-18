export default function toArray(list: any): Array<any> {
  return Array.prototype.slice.call(list || [], 0)
}