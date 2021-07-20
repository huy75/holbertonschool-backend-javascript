export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  return [...set]
    .filter((el) => el.startswith(startString))
    .map((el) => el.slice(startString.length))
    .join('-');
}
