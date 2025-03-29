export function traverseAst(node: any): any {
  if (!node)
    return null

  switch (node.type) {
    case 'Chunk':
      // Process the first statement in the body (assuming it's a return statement)
      return node.body.length > 0 ? traverseAst(node.body[0]) : null

    case 'ReturnStatement':
      // Process the first argument (assuming it's a table constructor)
      return node.arguments.length > 0 ? traverseAst(node.arguments[0]) : null

    case 'TableConstructorExpression': {
      // Convert a Lua table into a JS object
      const obj: Record<string, any> = {}
      for (const field of node.fields) {
        if (field.type === 'TableKey') {
          const key = field.key.raw.replace(/['"]+/g, '') // Remove quotes from key
          obj[key] = traverseAst(field.value)
        }
      }
      return obj
    }

    case 'NumericLiteral':
    case 'BooleanLiteral':
      return node.value // Return numbers and booleans as is

    case 'StringLiteral':
      return node.raw.replace(/['"]+/g, '') // Remove quotes from strings

    default:
      return null
  }
}