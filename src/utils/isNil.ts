export function isNil<T>(
  value: T | null | undefined,
): value is null | undefined {
  return value === undefined || value === null;
}

export function isNotNil<T>(value: T | null | undefined): value is T {
  return value !== undefined && value !== null;
}
