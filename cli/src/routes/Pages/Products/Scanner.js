import React, { useEffect, useState } from 'react';
// import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import { setFilterType} from '../../../redux/actions/ProductApp';

import BarcodeScannerComponent from "react-qr-barcode-scanner";
import makeStyles from '@material-ui/core/styles/makeStyles';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import CropFreeIcon from '@material-ui/icons/CropFree';
// import { Button, IconButton } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   dialogRoot: {
//     position: 'relative',
//   },
//   dialogTitleRoot: {
//     '& .MuiTypography-h6': {
//       fontSize: 18,
//       color: theme.palette.common.dark,
//     },
//   },
// }));



const ProductScanner = ({onChangeViewMode}) => {
    // const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    // const [scan, setScan] = useState(false);
    const [logs] = useState([]);
  
    const barcodeScannerComponentHandleUpdate = (error, result) => {
        console.log(error)
      if (result) {
        // setLog([...logs, result.text]);
        handleScanner(result.text);
        window.navigator.vibrate(100);
        // setScan(false);
        // handleClose()
      }
    };





    const handleScanner = e => {
        // alert(e)
        onChangeViewMode('table');
        dispatch(
          setFilterType({
            selectedFolder: e ? '' : 'products',
            selectedLabel: '',
            searchText: e
          }),
        );
        setOpen(false);
      };


    // const handleClose = () => {
    //     setOpen(false)
    // }


    useEffect(() => {
      setOpen(true)
      // return () => setOpen(false)
    }, [])


  return (
    <>
    {/* <IconButton
        onClick={() => setOpen(true)}
    >
    <CropFreeIcon/>
    </IconButton> */}
    {/* <Dialog open={open} 
    onClose={handleClose} 
    className={classes.dialogRoot}>
      <DialogTitle className={classes.dialogTitleRoot}>
       Product Scanner
      </DialogTitle>
      <DialogContent dividers> */}
      {/* <Button onClick={() => setScan(true)}>SCAN</Button>
      <Button onClick={() => setScan(false)}>CANCEL</Button> */}
      <br/>
      {/* {scan && ( */}
    {open &&   ( <div className="w-10 h-10">
          <BarcodeScannerComponent
            width={150}
            height={150}
            onUpdate={barcodeScannerComponentHandleUpdate}
          />
        </div>
      )
     } 
        <br/>
        <div>
        {logs.map((log) => (
          <div key={log}>{log}</div>
        ))}

        {/* <Button onClick={() => setLog([])}>CLEAR</Button> */}
      </div>
      {/* </DialogContent>
    </Dialog> */}
    </>
  );
};

export default ProductScanner;

ProductScanner.prototype = {
  open: PropTypes.bool.isRequired,
  handleDialog: PropTypes.func,
  selectedCustomer: PropTypes.object,
};

ProductScanner.defaultProps = {
  selectedCustomer: null,
};
