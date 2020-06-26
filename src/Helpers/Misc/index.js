export const clampValue = (
  number,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY
) => Math.min(Math.max(number, min), max);

export const deepMemoCompare = (prev, next) =>
  JSON.stringify(prev) === JSON.stringify(next);