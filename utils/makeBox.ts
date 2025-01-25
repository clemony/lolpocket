export default function makeBox(length, target) {
  if (length < target) {
    return (target - length) as number
  }
}
