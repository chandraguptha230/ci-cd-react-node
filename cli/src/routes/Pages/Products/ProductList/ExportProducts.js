import React from 'react';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportProducts = ({ children, data }) => {

  return (
    <ExcelFile element={children}>
      <ExcelSheet data={data} name="Products">
        <ExcelColumn label="Id" value="id" />
        <ExcelColumn label="Name" value="name" />
        <ExcelColumn label="Description" value="description" />
        <ExcelColumn label="Available Stocks" value="stocks" />
        <ExcelColumn label="Selling price" value="price" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportProducts;
