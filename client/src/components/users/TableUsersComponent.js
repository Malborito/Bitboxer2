import React from 'react';
import MUIDataTable from "mui-datatables";
import { useFetchUsers } from '../../hooks/useFetchUsers';
import { Visibility } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const handleMouseDownUser = () => {
  console.log('');
};

const columns = [
  { name: "id",  label: "Id",  options: { filter: true,   sort: true,  }},
  { name: "username", label: "Username", options: { filter: true, sort: false,}},
  { name: "admin", label: "Admin", options: {  filter: true,  sort: false, }},
  { name: "enabled", label: "Enabled", options: {  filter: true,  sort: false, }},
  {
    name: '', label: '',
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <IconButton onMouseDown={handleMouseDownUser}>
              <Visibility />
            </IconButton>
            );
      }
    }
  }
];


// const tableUsersOptions = {
//   // filterType: 'checkbox',
//   // showCheckbox: false,
//   checkboxSelection: false
// };

const tableUsersOptions = {
  selectableRowsHeader: false,
  selectableRowsHideCheckboxes: false,
  viewColumns: false,
  download: false,
  rowsPerPage: 5,
  checkboxSelection: false
};

export default function TableUsersComponent() {
  
  const { data:users } = useFetchUsers();

  return (
    <>

      <MUIDataTable
        title={"Employee List"} data={users} columns={columns} options={tableUsersOptions}
      />
    </>
  );
}
