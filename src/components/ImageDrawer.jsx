import * as React from 'react';
import { Drawer } from '@mui/material';
import ListForNav from './List';

const MobileDrawer = ({ open, setOpen }) => {
  return (
    <Drawer open={open} onClose={() => setOpen(false)} id="drawer">
      <h2>Howdy</h2>
    </Drawer>
  );
};
export default MobileDrawer;
