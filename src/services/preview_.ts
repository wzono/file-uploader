export const previewElement: HTMLElement = document.querySelector('.preview')
export const closeButton: HTMLElement = previewElement.querySelector('.icon-delete')
const content: HTMLElement = previewElement.querySelector('.content')



export function closePreview() {
  previewElement.style.display = "none"
}

export function openPreview() {
  previewElement.style.display = "block"
}

export function changeContent(val: HTMLElement) {
  content.innerHTML = "";
  content.appendChild(val);
}

export function attachPreview() {
  closeButton.addEventListener('click', () => {
    closePreview()
  })
}