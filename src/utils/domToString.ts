export default function (dom: Node): string {
  let _parent = document.createElement('div')
  _parent.appendChild(dom)
  return _parent.innerHTML;
}