/**
 * 
 * @param domString string 
 * @return childNodes NodeList
 */
export default function stringToDom(domString: string): NodeList { 
  let _parent = document.createElement('div') as HTMLElement;
  _parent.innerHTML = domString;
  return _parent.childNodes;
}

