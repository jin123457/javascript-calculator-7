export default function NumberSum(parseNumbers) {
  const result = parseNumbers.reduce((p, n) => {
    return parseInt(p, 10) + parseInt(n, 10);
  }, 0);

  return result;
}
