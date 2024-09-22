export const imageIn = (el: Element, done: () => void) => {
  const items = el.querySelectorAll('.drag-label');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('fade-in');
      if (index === items.length - 1) {
        done(); // Call done after the last item
      }
    }, index * 100); // Delay each item by 100ms
  });
};

export const imageOut = (el: Element, done: () => void) => {
  const items = el.querySelectorAll('.drag-label');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('fade-out');
      if (index === items.length - 1) {
        done();
      }
    }, index * 100); // Delay each item by 100ms
  });
};
