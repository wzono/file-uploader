import './index.scss'
import { attachDrag } from './services/drag_'
import { attachPreview } from './services/preview_'
import { attachUploadButtons } from './services/button_'
import index from './store/index'

window.onload = () => {
  attachDrag()
  attachPreview()
  attachUploadButtons()
  console.log(index)
}



if (module.hot) {
  module.hot.accept()
}






