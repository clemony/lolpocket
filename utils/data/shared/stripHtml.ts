export async function stripHtml(htmlString) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, 'text/html')
  const strippedString = doc.body.textContent
  console.log(strippedString)
}
