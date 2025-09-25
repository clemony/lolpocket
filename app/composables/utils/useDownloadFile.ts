// composables/useDownloadFile.ts
export function useDownloadFile() {
  function download(
    data: BlobPart | BlobPart[],
    filename: string,
    type = 'application/octet-stream',
  ) {
    const blob = Array.isArray(data) ? new Blob(data, { type }) : new Blob([data], { type })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    URL.revokeObjectURL(url)
  }

  return { download }
}

/* const { download } = useDownloadFile()

function saveExample() {
  const content = 'Hello Caitlin!'
  download(content, 'example.txt', 'text/plain')
} */