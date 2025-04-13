export function getGrade(value) {
  return value >= 53
    ? 'S+'
    : value < 53 && value >= 52.5
      ? 'S'
      : value < 52.5 && value >= 52
        ? 'S-'
        : value < 52 && value >= 51.5
          ? 'A+'
          : value < 51.5 && value >= 51
            ? 'A'
            : value < 51 && value >= 50
              ? 'A-'
              : value < 50
                ? 'F'
                : null
}

export function getGradeColor(value) {
  return value >= 53
    ? 'precision'
    : value < 53 && value >= 52.5
      ? 'resolve'
      : value < 52.5 && value >= 52
        ? 'inspiration'
        : value < 52 && value >= 51.5
          ? 'sorcery'
          : value < 51.5 && value >= 51
            ? 'onhit'
            : value < 51 && value >= 50
              ? 'fighter'
              : value < 50
                ? 'domination'
                : 'b2'
}