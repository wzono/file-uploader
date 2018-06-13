import './index.html'
import './index.scss'
import { attachDrag } from './services/drag_'
import { attachPreview } from './services/preview_'
import { attachUploadButtons } from './services/button_'

window.onload = () => {
  attachDrag()
  attachPreview()
  attachUploadButtons()
}






