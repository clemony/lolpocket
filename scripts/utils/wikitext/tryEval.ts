import { Parser } from 'expr-eval'

// Safe math eval

export function tryEval(expr: string): string | null {
  try {
    const result = Parser.evaluate(expr)
    return typeof result === 'number' && !Number.isNaN(result)
      ? Number.parseFloat(result.toFixed(2)).toString()
      : null
  }
  catch {
    return null
  }
}

export function evaluateExpressions(str: string): string {
  return str.replace(/(-?\d+(\.\d+)?(?:\s*[*/+-]\s*-?\d+(\.\d+)?)+)/g, (expr) => {
    const result = tryEval(expr.trim())
    return result !== null ? result : expr
  })
}

export function evaluateMathExpression(expression: string): string {
  return tryEval(expression) ?? expression
}

export function evalAp(expr: string) {
  const parsed = Parser.parse(expr)
  return [1, 2, 3, 4, 5].map((x) => {
    try {
      const result = parsed.evaluate({ x })
      return typeof result === 'number' && !Number.isNaN(result)
        ? Number.parseFloat(result.toFixed(2)).toString()
        : expr
    }
    catch {
      return expr
    }
  }).join(' / ')
}
