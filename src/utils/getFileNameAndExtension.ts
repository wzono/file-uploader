/**
* Takes a full filename string and returns an object {name, extension}
*
* @param {string} fullFileName
* @return {object} {name, extension}
*/

export default function getFileNameAndExtension (fullFileName: string) {
  var re = /(?:\.([^.]+))?$/ as RegExp // . + 扩展名
  var fileExt = re.exec(fullFileName)[1] as string // 扩展名
  var fileName = fullFileName.replace('.' + fileExt, '') as string // 文件名
  return {
    name: fileName,
    extension: fileExt
  } as FileNameAndExtension
}
