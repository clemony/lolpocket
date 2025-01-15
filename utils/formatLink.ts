export default function formatLink(link: string) {
  return link.replace(' ', '_').replace("'", '%27');
}
