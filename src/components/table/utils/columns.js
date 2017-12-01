export const enrichColumns = ({ columns, getCell, getHeader }) =>
  columns
    .map(column => addHeader({ column, getHeader }))
    .map(column => addCell({ column, getCell }));

const addHeader = ({ column, getHeader }) => {
  const newColumn = Object.assign([], column);
  newColumn.Header = getHeader(column.type);
  return newColumn;
};

const addCell = ({ column, getCell }) => {
  const newColumn = Object.assign([], column);
  newColumn.Cell = getCell(column.type);
  return newColumn;
};
