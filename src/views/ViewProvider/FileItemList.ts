import { Component } from './Component'
import FileItem from './FileItemView'
import {stringToDom as h, domToString as r, getFileMessage, toArray} from '../../utils/index'

export default class FileItemList implements Component,
FileItemListInterface {
  private files : File[];

  constructor(files : FileList) {
    this.files = toArray(files)
  }

  public render() {
    return h(`
      <section class="file-item-list__view">
        
      </section>
    `)}

    public add(fileItem : File | FileList) {
      if (fileItem instanceof File) {
        this.addFile(fileItem)
      } else {
        this.addFileList(fileItem)
      }
    }

    private addFile(file : File) {
      this
        .files
        .push(file)
    }

    private addFileList(files : FileList) {
      toArray(files).forEach(this.addFile)
    }
  
  public remove(e:Event) {
      
    }

  }
