import * as React from 'react';
import MUIDataTable from "mui-datatables";

import { DataGrid } from '@material-ui/data-grid';
import { useFetchItems } from '../../hooks/useFetchItems';
import Visibility from '@material-ui/icons/Visibility';
import { IconButton } from '@material-ui/core';
import { DeleteOutline, ExplicitRounded, Edit } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { items, editableItemAction } from '../../actions/itemsActions';


const handleMouseDownEditItem = (value, tableMeta, onOpen, data, dispatch) => {

  dispatch( editableItemAction(data.find(item => item.code == value)));
  onOpen();
};

const handleMouseDownDeleteItem = (value, tableMeta, props, data) => {
  console.log('Id para borrar: ' + data.find(item => item.code == value).id);
  props.setSelectedValue(data.find(item => item.code == value).id);
  props.onDelete();
};

const columns = (props, data, dispatch) => {

  return (
    [
    { name: 'code',  label: 'Code',  options: { filter: true,   sort: true,  }},
    { name: 'description', label: 'Description', options: { filter: true, sort: false,}},
    { name: 'price', label: 'Price', options: { filter: true,  sort: true, customBodyRender: (value, tableMeta, updateValue) => {
          return (
            value + ' €'
          );
        }
      }
    },
    {
      name: 'code', label: ' ', display: 'excluded',
      options: {
        filter: false,  sort: false,
        customBodyRender: (value, tableMeta) => {
            return (
              <IconButton color="primary" onMouseDown={()=>handleMouseDownEditItem(value, tableMeta, props.onOpen, data, dispatch)}>
                <Edit />
              </IconButton>
              );
        }
      }
    },
    {
      name: 'code', label: '', display: 'excluded',
      options: {
        filter: false,  sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <IconButton color="secondary" onMouseDown={()=>handleMouseDownDeleteItem(value, tableMeta, props, data)} >
                <DeleteOutline />
              </IconButton>
              );
        }
      }
    }
  ]
  );
}


const tableItemsOptions = {
  selectableRowsHeader: false,
  selectableRowsHideCheckboxes: false,
  viewColumns: false,
  download: false,
  rowsPerPage: 5,
  checkboxSelection: false
};

export default function TableItemsComponent(props) {

  const { data , loading } = useFetchItems();   
  const dispatch = useDispatch();

  return (
    <>
    { loading && <p className="animate__flash-2s">Cargando... </p>}

    <MUIDataTable
        title={"Product List"} data={data} columns={columns(props, data, dispatch)} options={tableItemsOptions}
      />
    </>
  );
}
