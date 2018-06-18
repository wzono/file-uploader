export default function getFileMessage(file: File) {
  const { type, name, size } = file
  return {
    type,
    name,
    size
  } as FileMessage
}