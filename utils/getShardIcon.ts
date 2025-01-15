export default function getShardIcon(shard: Shard) {
  const s =
    shard.name == 'Adaptive Power'
      ? 'mdi:star-four-points'
      : shard.name == 'Attack Speed'
        ? 'mdi:axe'
        : shard.name == 'Ability Haste'
          ? 'ph:hourglass-medium-fill'
          : shard.name == 'Move Speed'
            ? 'mdi:run-fast'
            : shard.name == 'Scaling Health'
              ? 'mdi:heart-plus'
              : shard.name == 'Health'
                ? 'mdi:heart'
                : shard.name == 'Tenacity and Slow Resist'
                  ? 'ph:spiral-light'
                  : 'icomoon-free:diamonds';
  return s;
}
