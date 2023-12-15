export function createArray(length = 10) {
  return Array.from({ length }, (_, index) => index + 1);
}
