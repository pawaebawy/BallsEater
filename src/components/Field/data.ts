interface ICellData {
  id?: string,
  x?: number,
  y?: number,
  top?: number,
  left?: number,
  isExists?: boolean,
  isFilled?: boolean,
  style?: CellStyle,
}

interface IFieldData {
  rowsCount: number,
  cells: ICellData[]
}

enum CellStyle {
  Default = "Default",
  Accepted = "Accepted",
  Denied = "Denied",
}

const fieldData: IFieldData = {
  rowsCount: 6,
  cells: [
    { id: '1', isExists: false, isFilled: true, style: CellStyle.Default },
    { id: '2', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '3', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '4', isExists: true, isFilled: false, style: CellStyle.Default },
    { id: '5', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '6', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '7', isExists: true, isFilled: false, style: CellStyle.Default },
    { id: '8', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '9', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '10', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '11', isExists: true, isFilled: false, style: CellStyle.Default },
    { id: '12', isExists: false, isFilled: true, style: CellStyle.Default },
    { id: '13', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '14', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '15', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '16', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '17', isExists: false, isFilled: true, style: CellStyle.Default },
    { id: '18', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '19', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '20', isExists: true, isFilled: false, style: CellStyle.Default },
    { id: '21', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '22', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '23', isExists: true, isFilled: false, style: CellStyle.Default },
    { id: '24', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '25', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '26', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '27', isExists: true, isFilled: false, style: CellStyle.Default },
    { id: '28', isExists: false, isFilled: true, style: CellStyle.Default },
    { id: '29', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '30', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '31', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '32', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '33', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '34', isExists: true, isFilled: false, style: CellStyle.Default },
    { id: '35', isExists: true, isFilled: true, style: CellStyle.Default },
    { id: '36', isExists: true, isFilled: true, style: CellStyle.Default },
  ]
};

export {
  fieldData,
  IFieldData,
  ICellData,
  CellStyle
}