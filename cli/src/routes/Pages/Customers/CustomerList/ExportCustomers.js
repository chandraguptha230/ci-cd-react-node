import React from 'react';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportContacts = ({ children, data }) => {
  const contacts = data.map(item => {
    item.phoneStrings = item.phones.map(contact => contact.phone).join(',');
    return item;
  });

  return (
    <ExcelFile element={children}>
      <ExcelSheet data={contacts} name="Customers">
        <ExcelColumn label="Id" value="id" />
        <ExcelColumn label="Name" value="name" />
        <ExcelColumn label="Email" value="email" />
        <ExcelColumn label="Phones" value="phoneStrings" />
        <ExcelColumn label="Limit" value="limit" />
        <ExcelColumn label="Balance" value="balance" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportContacts;
