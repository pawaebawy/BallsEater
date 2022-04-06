interface IFieldData {
  id: string,
  x?: number,
  y?: number,
  isExists?: boolean,
  isFilled?: boolean,
  style?: string | any[],
}

const fieldData: IFieldData[] = [
  { id: '1', isExists: false, isFilled: true, style: 'default' },
  { id: '2', isExists: true, isFilled: true, style: 'default' },
  { id: '3', isExists: true, isFilled: true, style: 'default' },
  { id: '4', isExists: true, isFilled: false, style: 'default' },
  { id: '5', isExists: true, isFilled: true, style: 'default' },
  { id: '6', isExists: true, isFilled: true, style: 'default' },
  { id: '7', isExists: true, isFilled: false, style: 'default' },
  { id: '8', isExists: true, isFilled: true, style: 'default' },
  { id: '9', isExists: true, isFilled: true, style: 'default' },
  { id: '10', isExists: true, isFilled: true, style: 'default' },
  { id: '11', isExists: true, isFilled: false, style: 'default' },
  { id: '12', isExists: false, isFilled: true, style: 'default' },
  { id: '13', isExists: true, isFilled: true, style: 'default' },
  { id: '14', isExists: true, isFilled: true, style: 'default' },
  { id: '15', isExists: true, isFilled: true, style: 'default' },
  { id: '16', isExists: true, isFilled: true, style: 'default' },
];

export {
  fieldData,
  IFieldData
}