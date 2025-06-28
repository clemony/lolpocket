export function getGreeting() {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12)
    return {
      greeting: "Good morning",
      icon: "fluent-mdl2:partly-cloudy-day",
    }
  if (hour >= 12 && hour < 17)
    return {
      greeting: "Good afternoon",
      icon: "si:clear-day-line",
    }
  if (hour >= 17 && hour < 21)
    return {
      greeting: "Good evening",
      icon: "ph:sun-horizon",
    }
  return {
    greeting: "Good night",
    icon: "quill:moon",
  }
}
