export default function getColorFromVariable(variable) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
}
