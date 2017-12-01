export const enrichColumns = ({ columns, cellRenderers, headerRenderers }) =>
  columns
    .map(column => addHeader({ column, headerRenderers }))
    .map(column => addCell({ column, cellRenderers }));

const addHeader = ({ column, headerRenderers }) => {
  const newColumn = Object.assign([], column);
  newColumn.header = headerRenderers[column.type];
  return newColumn;
};

const addCell = ({ column, cellRenderers }) => {
  const newColumn = Object.assign([], column);
  newColumn.cell = cellRenderers[column.type];
  return newColumn;
};
