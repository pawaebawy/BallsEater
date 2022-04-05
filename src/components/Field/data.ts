interface IFieldData {
  id: string,
  x?: number,
  y?: number,
  isExists?: boolean,
  isFilled?: boolean,
  style?: string | any[],
}

// const fieldData: IFieldData[][] = [
//   [
//     { id: '1', x: 1, y: 1, isExists: false, isFilled: true, style: 'default' },
//     { id: '2', x: 1, y: 2, isExists: true, isFilled: true, style: 'default' },
//     { id: '3', x: 1, y: 3, isExists: true, isFilled: true, style: 'default' },
//     { id: '4', x: 1, y: 4, isExists: true, isFilled: true, style: 'default' },
//   ],

//   [
//     { id: '5', x: 2, y: 1, isExists: true, isFilled: true, style: 'default' },
//     { id: '6', x: 2, y: 2, isExists: true, isFilled: true, style: 'default' },
//     { id: '7', x: 2, y: 3, isExists: true, isFilled: false, style: 'default' },
//     { id: '8', x: 2, y: 4, isExists: true, isFilled: true, style: 'default' },
//   ],

//   [
//     { id: '9', x: 3, y: 1, isExists: true, isFilled: true, style: 'default' },
//     { id: '10', x: 3, y: 2, isExists: true, isFilled: true, style: 'default' },
//     { id: '11', x: 3, y: 3, isExists: true, isFilled: true, style: 'default' },
//     { id: '12', x: 3, y: 4, isExists: false, isFilled: true, style: 'default' },
//   ],

//   [
//     { id: '13', x: 4, y: 1, isExists: true, isFilled: true, style: 'default' },
//     { id: '14', x: 4, y: 2, isExists: true, isFilled: true, style: 'default' },
//     { id: '15', x: 4, y: 3, isExists: true, isFilled: true, style: 'default' },
//     { id: '16', x: 4, y: 4, isExists: true, isFilled: true, style: 'default' },
//   ]
// ];

const fieldData: IFieldData[] = [
  { id: '1', x: 1, y: 1, isExists: false, isFilled: true, style: 'default' },
  { id: '2', x: 1, y: 2, isExists: true, isFilled: true, style: 'default' },
  { id: '3', x: 1, y: 3, isExists: true, isFilled: true, style: 'default' },
  { id: '4', x: 1, y: 4, isExists: true, isFilled: true, style: 'default' },
  { id: '5', x: 2, y: 1, isExists: true, isFilled: true, style: 'default' },
  { id: '6', x: 2, y: 2, isExists: true, isFilled: true, style: 'default' },
  { id: '7', x: 2, y: 3, isExists: true, isFilled: false, style: 'default' },
  { id: '8', x: 2, y: 4, isExists: true, isFilled: true, style: 'default' },
  { id: '9', x: 3, y: 1, isExists: true, isFilled: true, style: 'default' },
  { id: '10', x: 3, y: 2, isExists: true, isFilled: true, style: 'default' },
  { id: '11', x: 3, y: 3, isExists: true, isFilled: true, style: 'default' },
  { id: '12', x: 3, y: 4, isExists: false, isFilled: true, style: 'default' },
  { id: '13', x: 4, y: 1, isExists: true, isFilled: true, style: 'default' },
  { id: '14', x: 4, y: 2, isExists: true, isFilled: true, style: 'default' },
  { id: '15', x: 4, y: 3, isExists: true, isFilled: true, style: 'default' },
  { id: '16', x: 4, y: 4, isExists: true, isFilled: true, style: 'default' },
];

export {
  fieldData,
  IFieldData
}