 import { Parser } from 'expr-eval'

  // Safe math eval

 export function tryEval(expr: string): string | null {
  try {
    const result = Parser.evaluate(expr)
    console.log('💠 - tryEval - result:', result)
    return typeof result === 'number' && !Number.isNaN(result)
      ? Number.parseFloat(result.toFixed(2)).toString()
      : null
  }
  catch {
    return null
  }
}