/**
 * 
 * @param domString string 
 * @return childNodes NodeList
 */
export default function renderDOMString(domString: string): NodeList { 
  let _parent = document.createElement('div') as HTMLElement;
  _parent.innerHTML = domString;
  return _parent.childNodes;
}

