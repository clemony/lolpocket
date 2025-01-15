export default function getShardClass(shard: Shard) {
  const gray = ['[&_svg]:text-b3 border-b3'];
  const green = ['has-checked:shadow-[0_3px_20px_#a3be8c,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-resolve border-resolve'];
  const blue = ['has-checked:shadow-[0_3px_20px_#A4C1C4,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-inspiration border-inspiration'];
  const yellow = ['has-checked:shadow-[0_3px_20px_#ebcb8b,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-precision border-precision'];
  const purple = ['has-checked:shadow-[0_3px_20px_#b48dad,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-sorcery border-sorcery'];

  const c =
    shard.name == 'Adaptive Power'
      ? purple
      : shard.name == 'Attack Speed'
        ? yellow
        : shard.name == 'Ability Haste' || shard.name == 'Tenacity and Slow Resist' || shard.name == 'Move Speed'
          ? blue
          : shard.name == 'Scaling Health' || shard.name == 'Health'
            ? green
            : gray;
  return c;
}
