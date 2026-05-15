// Updated Patch 16.9 - 05/11/2026 11:49:39 AM CDT
    import type { ModeIndex } from "#shared/types"

    export const modeIndex: Record<string, ModeIndex> = {
  CLASSIC: {
    description: "Classic Summoner's Rift and Twisted Treeline games",
    mapId: 11,
    mapName: "Summoner's Rift",
    mapStringId: "SR",
    modeKey: "CLASSIC",
    modeLabel: "Classic",
    modeSlug: "classic"
  },
  ARAM: {
    description: "ARAM games",
    mapId: 12,
    mapName: "Howling Abyss",
    mapStringId: "HA",
    modeKey: "ARAM",
    modeLabel: "ARAM",
    modeSlug: "aram"
  },
  TUTORIAL: {
    description: "Tutorial games",
    mapId: 11,
    mapName: "Summoner's Rift",
    mapStringId: "SR",
    modeKey: "TUTORIAL",
    modeLabel: "Tutorial",
    modeSlug: "tutorial"
  },
  URF: {
    description: "URF games",
    mapId: 11,
    mapName: "Summoner's Rift",
    mapStringId: "SR",
    modeKey: "URF",
    modeLabel: "URF",
    modeSlug: "urf"
  },
  DOOMBOTSTEEMO: {
    description: "Doom Bot games",
    mapId: 11,
    mapName: "Summoner's Rift",
    mapStringId: "SR",
    modeKey: "DOOMBOTSTEEMO",
    modeLabel: "Doom Bots",
    modeSlug: "doom-bots"
  },
  ONEFORALL: {
    description: "One for All games",
    mapId: 11,
    mapName: "Summoner's Rift",
    mapStringId: "SR",
    modeKey: "ONEFORALL",
    modeLabel: "One for All",
    modeSlug: "one-for-all"
  },
  FIRSTBLOOD: {
    description: "Snowdown Showdown games",
    mapId: 12,
    mapName: "Howling Abyss",
    mapStringId: "HA",
    modeKey: "FIRSTBLOOD",
    modeLabel: "Snowdown Showdown",
    modeSlug: "first-blood"
  },
  ASSASSINATE: {
    description: "Blood Hunt Assassin games",
    mapId: 11,
    mapName: "Summoner's Rift",
    mapStringId: "SR",
    modeKey: "ASSASSINATE",
    modeLabel: "Blood Hunt Assassin",
    modeSlug: "assassinate"
  },
  ARSR: {
    description: "All Random Summoner's Rift games",
    mapId: 11,
    mapName: "Summoner's Rift",
    mapStringId: "SR",
    modeKey: "ARSR",
    modeLabel: "All Random Summoner's Rift",
    modeSlug: "arsr"
  },
  NEXUSBLITZ: {
    description: "Nexus Blitz games",
    mapId: 21,
    mapName: "Nexus Blitz",
    mapStringId: "NB",
    modeKey: "NEXUSBLITZ",
    modeLabel: "Nexus Blitz",
    modeSlug: "nexus-blitz"
  },
  ULTBOOK: {
    description: "Ultimate Spellbook games",
    mapId: 11,
    mapName: "Summoner's Rift",
    mapStringId: "SR",
    modeKey: "ULTBOOK",
    modeLabel: "Ultimate Spellbook",
    modeSlug: "ultimate-spellbook"
  },
  KINGPORO: {
    description: "Legend of the Poro King games",
    mapId: 12,
    mapName: "Howling Abyss",
    mapStringId: "HA",
    modeKey: "KINGPORO",
    modeLabel: "Legend of the Poro King",
    modeSlug: "poro-king"
  }
}