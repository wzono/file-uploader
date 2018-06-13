import { isFunction } from '../utils/util'

interface IParam {
  el : HTMLElement;
  onDragEnter?: (e? : DragEvent) => void;
  onDragOver?: (e? : DragEvent) => void;
  onDragLeave?: (e? : DragEvent) => void;
  onDrop : (e : DragEvent) => void;
}

class Drag {
  private el : HTMLElement;

  constructor({
    el,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop
  } : IParam) {
    this.el = el;
    el.ondragenter = isFunction(onDragEnter) ? onDragEnter : this.onDragEnter.bind(this)
    el.ondragover = isFunction(onDragOver) ? onDragOver : this.onDragOver.bind(this)
    el.ondragleave = isFunction(onDragLeave) ? onDragLeave : this.onDragLeave.bind(this)
    el.ondrop = onDrop
  }

  onDragEnter(e: DragEvent) {
    console.log('enter')
  }

  onDragOver(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  onDragLeave(e: DragEvent) {
    console.log('leave')    
  }
}

export default Drag;