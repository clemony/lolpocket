import { ref, onMounted, onUnmounted, Ref } from 'vue';

interface MousePosition {
  x: number;
  y: number;
}

interface UseMouseOptions {
  resetOnExit?: boolean;
}

export function useMouse(options: UseMouseOptions = { resetOnExit: false }) {
  const position = ref<MousePosition>({ x: 0, y: 0 });
  const elementRef = ref<HTMLElement | null>(null);

  // Function to handle mouse move events
  const setMousePosition: EventListener = (event: Event) => {
    const mouseEvent = event as MouseEvent; // Cast to MouseEvent
    if (elementRef.value) {
      const rect = elementRef.value.getBoundingClientRect();

      const x = Math.max(
        0,
        Math.round(
          mouseEvent.pageX - rect.left - (window.pageXOffset || window.scrollX)
        )
      );

      const y = Math.max(
        0,
        Math.round(
          mouseEvent.pageY - rect.top - (window.pageYOffset || window.scrollY)
        )
      );

      position.value = { x, y };
    } else {
      position.value = { x: mouseEvent.clientX, y: mouseEvent.clientY };
    }
  };

  // Function to reset mouse position
  const resetMousePosition: EventListener = () => {
    position.value = { x: 0, y: 0 };
  };

  onMounted(() => {
    const element = elementRef.value || document;
    element.addEventListener('mousemove', setMousePosition as EventListener);
    if (options.resetOnExit) {
      element.addEventListener('mouseleave', resetMousePosition as EventListener);
    }
  });

  onUnmounted(() => {
    const element = elementRef.value || document;
    element.removeEventListener('mousemove', setMousePosition as EventListener);
    if (options.resetOnExit) {
      element.removeEventListener('mouseleave', resetMousePosition as EventListener);
    }
  });

  return { elementRef, ...position.value };
}
