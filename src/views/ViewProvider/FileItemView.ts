import {stringToDom as h} from '../../utils/index'

interface Props {
  name : string;
  type : string;
  size : number;
  preview : () => void;
  delete: () => void;
  [key: string]: any;
}

export default function FileItem(prop : Props) {
  const node = h(`
    <div class="file-item__view">
      <span class="file-item__name">${prop.name}</span>
      <span class="file-item__size">${prop.size > 1000
    ? (prop.size / 1000).toFixed(2) + ' KB'
    : prop.size + ' B'}</span>
      <span class="file-item__type">${prop.type}</span>
      <span class="file-item__button-area">
        <span class="icon iconfont icon-delete js-trigger js-trigger-delete"></span>
      </span>
      <span class="file-item__button-area">
        <span class="icon iconfont icon-yulan js-trigger js-trigger-preview"></span>
      </span>
    </div>
  `)[0]

  // 绑定click事件
  node.addEventListener('click', (e) => {
    const t = e.target as Element
    t.classList.contains("js-trigger") && prop[t.className.split("js-trigger-")[1]]()
  })

  return node;
}