// plugins/render-trace.client.ts
/* export default defineNuxtPlugin(() => {
  if (process.dev) {
    const _render = console.error
    console.error = (...args) => {
      if (
        args?.[0] instanceof RangeError &&
        args[0].message.includes("Maximum call stack")
      ) {
        debugger
      }
      _render(...args)
    }
  }
})
 */
