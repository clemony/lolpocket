export default function remCalc(px: number | string, base: number = 12) {
  const tempPx = `${px}`.replace('px', '');

  return (1 / base) * parseInt(tempPx);
}
