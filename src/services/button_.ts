import Upload from '../components/upload'

export const clearButton = document.querySelector('.btn-clear')
export const uploadButton = document.querySelector('.btn-upload')
export function attachUploadButtons() {
  clearButton.addEventListener('click', () => {
    Upload.clearListChild()
  })

  uploadButton.addEventListener('click', () => {
    Upload.uploadFiles()
  })
}