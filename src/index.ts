import './index.scss'
import { attachDrag } from './services/drag_'
import { attachPreview } from './services/preview_'
import { attachUploadButtons } from './services/button_'
import { getters, actions} from './store/index'

window.onload = () => {
  attachDrag()
  attachPreview()
  attachUploadButtons()
  console.log(getters.text())
  actions.text(["123"])
  console.log(getters.text())
}




if (module.hot) {
  module.hot.accept()
}






