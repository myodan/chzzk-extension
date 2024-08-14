export function overrideProperty<T>(
  object: T,
  property: keyof T,
  value: unknown
): void {
  let currentObject = object;

  while (currentObject !== null) {
    const descriptor = Object.getOwnPropertyDescriptor(currentObject, property);

    if (descriptor && descriptor.configurable) {
      if (descriptor.get) {
        Object.defineProperty(currentObject, property, { get: () => value });
      } else {
        Object.defineProperty(currentObject, property, { value });
      }
    } else if (
      Object.getPrototypeOf(object) === Object.getPrototypeOf(currentObject)
    ) {
      Object.defineProperty(currentObject, property, {
        value,
      });
    }

    currentObject = Object.getPrototypeOf(currentObject);
  }
}
