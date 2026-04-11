#!/usr/bin/env tsx

import { mkdir, readFile, writeFile } from "node:fs/promises";
import process from "node:process";
import vm from "node:vm";
import { fromApiRoot, fromLolpocketRoot } from "../utils/paths";

type InputRole = "top" | "mid" | "jungle" | "adc" | "support";
type OutputRole = "top" | "middle" | "jungle" | "bottom" | "support";
type InputTier = 0 | 1 | 2 | 3 | 4 | 5;
type OutputTier = "LP+" | "S" | "A" | "B" | "C" | "D";
type OutputFormat = "flat" | "grouped";

interface ChampionWinrate {
  champion: string;
  is_rip: boolean;
  play: number;
  win: number;
  kill: number;
  win_rate: number;
  pick_rate: number;
  role_rate: number;
  ban_rate: number;
  kda: number;
  tier: InputTier | OutputTier;
  rank: number;
  rank_prev: number | null;
  rank_prev_patch: number | null;
}

type StructuredWinrates = Record<InputRole, ChampionWinrate[]>;
type NormalizedStructuredWinrates = Record<OutputRole, ChampionWinrate[]>;
type FlattenedChampionWinrate = ChampionWinrate & { role: OutputRole };

interface RawWrapper {
  raw_output?: unknown;
}

const inputRoles: InputRole[] = ["top", "mid", "jungle", "adc", "support"];
const normalizedRoleMap: Record<InputRole, OutputRole> = {
  top: "top",
  mid: "middle",
  jungle: "jungle",
  adc: "bottom",
  support: "support"
};

const inputTiers: InputTier[] = [0, 1, 2, 3, 4, 5];
const normalizedTierMap: Record<InputTier, OutputTier> = {
  0: "LP+",
  1: "S",
  2: "A",
  3: "B",
  4: "C",
  5: "D"
};
const defaultFormat: OutputFormat = "flat";
const inputPath = fromApiRoot("op/raw/opgg-champion-winrates-raw.json");
const flatOutputPath = fromLolpocketRoot("public/cdn/winrates/champions.json");
const groupedOutputPath = fromLolpocketRoot("public/cdn/winrates/champions-by-role.json");

function usage() {
  console.error(
    [
      "Usage:",
      "  pnpm tsx /Users/caitlin/dev/workspaces/pocket-api/op/convert-opgg-winrates.ts [--format=flat|grouped]",
      "",
      `Input is fixed: ${inputPath}`,
      `Flat output: ${flatOutputPath}`,
      `Grouped output: ${groupedOutputPath}`,
      "Default format is `flat`.",
      "Pass `--format=grouped` to write the grouped output."
    ].join("\n")
  );
}

function assertRoleArrays(value: unknown): asserts value is StructuredWinrates {
  if (!value || typeof value !== "object") {
    throw new Error("Parsed data is not an object.");
  }

  for (const role of inputRoles) {
    const items = (value as Record<string, unknown>)[role];

    if (!Array.isArray(items)) {
      throw new TypeError(`Parsed data is missing the \`${role}\` array.`);
    }
  }
}

function parseRawOutput(rawOutput: string): StructuredWinrates {
  const context = {
    Top: (...values: unknown[]) => {
      const [champion, is_rip, play, win, kill, win_rate, pick_rate, role_rate, ban_rate, kda, tier, rank, rank_prev, rank_prev_patch] = values;

      return {
        champion: champion as string,
        is_rip: is_rip as boolean,
        play: play as number,
        win: win as number,
        kill: kill as number,
        win_rate: win_rate as number,
        pick_rate: pick_rate as number,
        role_rate: role_rate as number,
        ban_rate: ban_rate as number,
        kda: kda as number,
        tier: tier as InputTier,
        rank: rank as number,
        rank_prev: rank_prev as number | null,
        rank_prev_patch: rank_prev_patch as number | null
      } satisfies ChampionWinrate;
    },
    Positions: (...positionArrays: ChampionWinrate[][]) => Object.fromEntries(inputRoles.map((role, index) => [role, positionArrays[index] ?? []])),
    Data: (positions: StructuredWinrates) => positions,
    LolListLaneMetaChampions: (_lang: string, _position: string, data: StructuredWinrates) => data
  };

  const parsed = vm.runInNewContext(rawOutput, context, {
    timeout: 1_000
  });

  assertRoleArrays(parsed);
  return parsed;
}

function normalizeRole(role: InputRole): OutputRole {
  return normalizedRoleMap[role];
}

function normalizeStructuredWinrates(structured: StructuredWinrates): NormalizedStructuredWinrates {
  return Object.fromEntries(
    inputRoles.map((role) => [
      normalizeRole(role),
      structured[role].map(({ tier, ...champion }) => ({
        ...champion,
        tier: normalizedTierMap[tier as InputTier]
      }))
    ])
  ) as NormalizedStructuredWinrates;
}

function flattenWinrates(structured: StructuredWinrates): FlattenedChampionWinrate[] {
  return inputRoles.flatMap((role) =>
    structured[role].map((champion) => ({
      role: normalizeRole(role),
      ...champion,
      tier: normalizedTierMap[champion.tier as InputTier]
    }))
  );
}

function parseArgs(argv: string[]) {
  let format: OutputFormat = defaultFormat;

  for (const arg of argv) {
    if (arg.startsWith("--format=")) {
      const value = arg.slice("--format=".length);

      if (value === "flat" || value === "grouped") {
        format = value;
        continue;
      }

      throw new TypeError(`Unsupported format: ${value}`);
    }

    throw new TypeError(`Unexpected argument: ${arg}`);
  }

  return { format };
}

async function main() {
  const { format } = parseArgs(process.argv.slice(2));
  const outputPath = format === "flat" ? flatOutputPath : groupedOutputPath;
  const fileContents = await readFile(inputPath, "utf8");
  const wrapper = JSON.parse(fileContents) as RawWrapper;

  if (typeof wrapper.raw_output !== "string") {
    throw new TypeError(`Input file ${inputPath} does not contain a string \`raw_output\` field.`);
  }

  const structured = parseRawOutput(wrapper.raw_output);
  const output = format === "flat" ? flattenWinrates(structured) : normalizeStructuredWinrates(structured);

  await mkdir(fromLolpocketRoot("public/cdn/winrates"), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`);

  const counts = Object.fromEntries(inputRoles.map((role) => [normalizeRole(role), structured[role].length]));
  console.log(JSON.stringify({ inputPath, outputPath, format, counts }, null, 2));
}

void main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
