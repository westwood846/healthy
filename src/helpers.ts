export const arraySet = (array: any[], index: number, value: any) =>
  Object.assign([...array], { [index]: value });
