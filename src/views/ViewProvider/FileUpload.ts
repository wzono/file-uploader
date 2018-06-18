import { Component } from './Component'
import { stringToDom as h, domToString as r} from '../../utils/index'

export default class FileUploadView implements Component{
  private title: string = '';
  constructor(title?: string) {
    this.title = title;
  }

  render() {
    return h(`
      <section class="upload__view">
        <h3 class="upload__title">${this.title}</h3>
        
      </section>
    `)
  }
}