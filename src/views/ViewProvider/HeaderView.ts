import config from '../../core/config'
import { renderDOMString as h } from '../../utils/index'

export default class HeaderView {
  private title: string = config.header_title;
  constructor(title?:string) {
    title && (this.title = title);

    // bind this
    this.render = this.render.bind(this);
  }

  render() {
    return h(`
      <header class="header">
        <h1 class="header__title">${this.title}</h1>
      </header>
    `)
  }


}