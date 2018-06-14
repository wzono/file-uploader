import Drag from '../components/drag';
import Upload from '../components/upload';

const dragElement: HTMLElement = document.querySelector('.drop-area')
const DROP_OVER_CLASSNAME = 'drag-over'


const toggleStyle = () => {
  if (dragElement.classList.contains(DROP_OVER_CLASSNAME)) {
    dragElement.classList.remove(DROP_OVER_CLASSNAME)
  } else {
    dragElement.classList.add(DROP_OVER_CLASSNAME)
  }
}

const param = {
  el: dragElement,
  onDragEnter: () => {
    toggleStyle()
    console.log('enter')
  },
  onDrop: (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleStyle()
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      let file: File = e.dataTransfer.files[i]
      Upload.addListChild(file)
    }
  },
  onDragLeave: () => {
    toggleStyle()
    console.log('leave')
  }
}

export const attachDrag = () => {
  new Drag(param)
}