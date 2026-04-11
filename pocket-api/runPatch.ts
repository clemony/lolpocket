// scripts/patch/run-update.ts

export async function riotUpdate() {
  const pipeline: [string, string][] = [
    ["patch:game-data", "./patch/entry.ts"],
    ["patch:patch-data", "./fetch-riot-patch-notes.ts"]
  ]

  for (const [label, modulePath] of pipeline) {
    try {
      console.log(`\n⏳ Running: ${label}`)
      await import(modulePath)
      console.log(`✅ Finished: ${label}`)
    } catch (err) {
      console.error(`❌ Failed: ${label}`, err)
      throw err
    }
  }
}

riotUpdate()
