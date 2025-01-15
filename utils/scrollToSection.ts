export default function scrollToSection(el) {
  var targetElement = ref(el);

  if (targetElement) {
    targetElement.value.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
}
