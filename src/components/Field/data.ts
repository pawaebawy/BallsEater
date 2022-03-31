interface IFieldData {
  x: number,
  y: number,
  isExists: boolean,
  isFilled: boolean,
  style: string | any[],
}

const fieldData: IFieldData[][] = [
  [
    { x: 1, y: 1, isExists: false, isFilled: true, style: 'default' },
    { x: 1, y: 2, isExists: true, isFilled: true, style: 'default' },
    { x: 1, y: 3, isExists: true, isFilled: true, style: 'default' },
    { x: 1, y: 4, isExists: true, isFilled: true, style: 'default' },
  ],

  [
    { x: 2, y: 1, isExists: true, isFilled: true, style: 'default' },
    { x: 2, y: 2, isExists: true, isFilled: true, style: 'default' },
    { x: 2, y: 3, isExists: true, isFilled: false, style: 'default' },
    { x: 2, y: 4, isExists: true, isFilled: true, style: 'default' },
  ],

  [
    { x: 3, y: 1, isExists: true, isFilled: true, style: 'default' },
    { x: 3, y: 2, isExists: true, isFilled: true, style: 'default' },
    { x: 3, y: 3, isExists: true, isFilled: true, style: 'default' },
    { x: 3, y: 4, isExists: false, isFilled: true, style: 'default' },
  ],

  [
    { x: 4, y: 1, isExists: true, isFilled: true, style: 'default' },
    { x: 4, y: 2, isExists: true, isFilled: true, style: 'default' },
    { x: 4, y: 3, isExists: true, isFilled: true, style: 'default' },
    { x: 4, y: 4, isExists: true, isFilled: true, style: 'default' },
  ]
];

export {
  fieldData
}