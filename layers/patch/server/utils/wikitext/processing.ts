//
/* eslint-disable regexp/no-super-linear-backtracking */
import { Parser } from "expr-eval"

export function preProcess(input: string): string {
  return input
    .replace(/([a-z0-9])\{\{/gi, "$1 {{")
    .replace(/\}\}([a-z0-9])/gi, "}} $1")
    .replace(/for \d+\|/gi, "|")
}
export function postProcess(text: string): string {
  return (
    text
      .replace(
        /\[\[([^[\]|]+)(?:\|([^[\]]+))?\]\]/g,
        (_, target, display) => display?.trim() || target.trim()
      )
      .replace(/'''''(.*?)'''''/g, "<b><i>$1</i></b>")
      .replace(/'''(.*?)'''/g, "<b>$1</b>")
      .replace(/''(.*?)''/g, "<i>$1</i>")
      .replace("+color=pd ", "")
      .replace("+color=md ", "")
      .replace("+ +", "+")
      .replace("icononly=true", "")
      // .replace(/\(\+ \((.*\).*)\)/g, '(+$1')
      .replace(/([a-z])(\d)/gi, "$1 $2")
      .replace(/\(\+\s/g, "(+")
      .replace(/\(\+\s\(/g, "+ (")
      .replace(/\s+/g, " ")
      .replace(/AD\sad/g, "AD ")
      .replace(/\(\d+% of <i>Immolate's<\/i> damage\)/g, "")
      .trim()
  )
}
export function ludensPreProcess(input: string) {
  // Regex to match both pp blocks and capture their contents

  const ppRegex =
    /\{\{pp\|(?:key=%\|)?([^|]+?)\s+to\s+([^|]+?)\s+for\s+\d+\|(\d+\s+to\s+\d+)/g
  const ludenStart = input.replace(/\{\{ft\|deal an additional.*/, "")
  const results = []

  // Find all matches
  for (const match of input.matchAll(ppRegex)) {
    const [, expr1, expr2, range] = match
    try {
      if (!expr1 || !expr2) continue
      const value1 = Parser.evaluate(expr1)
      const value2 = Parser.evaluate(expr2)

      console.log("📊 Evaluated 1:", value1)
      console.log("📊 Evaluated 2:", value2)

      results.push({
        expr1,
        expr2,
        range,
        value1,
        value2,
      })
    } catch (error: any) {
      console.log("❌ Error evaluating expressions:", error.message)
    }
  }
  if (results.length < 4) return ludenStart
  const [r0, r1, r2, r3] = results
  return `${ludenStart} deal an additional ${r0?.value1} - ${r0?.value2} (based on remaining Shot Charges) (+ ${r1?.value1}% - ${r1?.value2}% AP) magic damage to the primary target, for a total of <span class="text-nowrap whitespace-nowrap">${r2?.value1} - ${r2?.value2}</span> <span class="text-nowrap whitespace-nowrap">(+ ${r3?.value1} - ${r3?.value2}% AP).</span>`
}
