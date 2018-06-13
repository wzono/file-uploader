export function isFunction(val: any):boolean {
  return typeof val === "function"
}

export function isImage(val: string): boolean {
  return /image/g.test(val)
}

export function resolveFileContent(file: File, callback: Function) {
  let fileReader = new FileReader();
  if (isImage(file.type)) {
    fileReader.readAsDataURL(file)
  } else {
    fileReader.readAsText(file)
  }

  fileReader.onload = function () {
    callback(this.result)
  }
}
