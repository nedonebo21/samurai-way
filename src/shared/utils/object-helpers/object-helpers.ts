export const updateObjInArray = <T extends Record<string, any>>(items: T[], itemId: number, objPropName: keyof T, newObjProps: Partial<T>) => {
  return items.map(el => el[objPropName] === itemId
      ? {...el, ...newObjProps}
      : el)
}