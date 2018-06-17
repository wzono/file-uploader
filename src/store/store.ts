// 增加需要共享/保存的键名和类型
interface State{
  text: string;
  readonly [key: string]: any;
}

class Store {
  private state: State;
  constructor() {
    this.init()
  }

  init() {
    // 在此增加需要共享/保存的数据
    this.state = {
      text: '' 
    } as State
  }

  commit(k:string, v:any) {
    this.state = {
      ...this.state,
      [k]: v
    }

    return this
  }

  get(k: string): any {
    return this.state[k];
  }

  stateGetter(): State {
    return this.state;
  }
}


export default new Store();