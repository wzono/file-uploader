import {isFunction, resolveFileContent, isImage} from '../utils/util'
import * as previewService from '../services/preview_'
import { UPLOAD_URL as url } from '../utils/const'

// import axios from 'axios';

class Upload {
  private el : HTMLElement;
  private list : HTMLElement;
  private fileList : File[];
  private bgs : any
  constructor(el : HTMLElement) {
    this.el = el;
    this.list = el.querySelector('ul');
    this.fileList = [] as File[];
  }

  public addListChild(file : File) {
    this.addFileList(file)
    this.addElmentList(file)
    this.bgs = document.querySelectorAll('.bg');
  }

  public removeListChild(e : Event = event, file : File) {
    this
      .list
      .removeChild(this.list.querySelectorAll('li')[
        this
          .fileList
          .indexOf(file)
      ])
    this.removeFileList(file)
  }

  public clearListChild() {
    this.list.innerHTML = ""
    this.fileList = []
  }

  public uploadFiles() {

    if (this.fileList.length === 0) {
      alert('没有需要上传的文件.')
      return;
    }
    let formData = new FormData();
    this
      .fileList
      .forEach((file : File) => {
        formData.append("files", file)
      })
    // axios.post(url, formData, {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   },
    //   timeout: 10000,
    //   onUploadProgress: (e: any) => {
    //     console.log(this)
    //     let percentage = Math.round((e.loaded * 100) / e.total) || 0
    //     for (let i = 0; i < this.bgs.length; i++) {
    //       console.log(percentage)
    //       this.bgs[i].style.width = percentage + "%"
    //     }
    //     if (percentage === 100) {
    //       setTimeout(() => {
    //         alert('上传成功')
    //       }, 17)
    //     }
    //   }
    // }).then((res: any) => {
    //   console.log('success:' + res.data.message)
    // }).catch((err: Error) => {
    //   console.error('failed:' + err)
    // })
  }

  private addElmentList(file : File) {
    const {name, size, type} = file;
    let li = document.createElement('li')
    li.className = "upload-list-child"
    li.innerHTML = `
      <span class="name">${name}</span>
      <span class="size">${size > 1000
      ? (size / 1000).toFixed(2) + ' KB'
      : size + ' B'}</span>
      <span class="type">${type}</span>
      <span class="button-area">
        <span class="icon iconfont icon-delete"></span>
      </span>
      <span class="button-area">
        <span class="icon iconfont icon-yulan"></span>
      </span>
      <div class="bg"></div> 
    `
    const deleteElement = li.querySelector('.icon-delete')
    deleteElement.addEventListener('click', (e : Event) => {
      this.removeListChild(e, file);
    })

    const preViewElement = li.querySelector('.icon-yulan')
    preViewElement.addEventListener('click', (e : Event) => {
      if (file.size > 3000000) {
        alert('文件过大，无法预览')
      } else {
        resolveFileContent(file, (content : any) => {
          if (isImage(file.type)) {
            let img = new Image()
            img.src = content;
            img.width = 400;
            previewService.changeContent(img);
          } else {
            let p = document.createElement('p')
            p.innerText = content;
            previewService.changeContent(p);
          }
          previewService.openPreview()
        });
      }
    })
    this
      .list
      .appendChild(li);
  }

  private addFileList(file : File) {
    this
      .fileList
      .push(file);
  }

  private removeFileList(file : File) {
    this
      .fileList
      .splice(this.fileList.indexOf(file), 1)
  }

}

const uploadElement : HTMLElement = document.querySelector('.upload-area')
export default new Upload(uploadElement);