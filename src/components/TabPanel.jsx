import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  originalImage,
  backgroundRemovedImageUrl,
}) {
  const [value, setValue] = React.useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Original" {...a11yProps(0)} />
          <Tab label="Removed Background" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          {originalImage !== '' && (
            <img
              className="returnedImg"
              src={originalImage}
              alt="original image"
            />
          )}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box>
          {backgroundRemovedImageUrl !== '' && (
            <>
              <img
                className="returnedImg"
                src={backgroundRemovedImageUrl}
                alt="removed bg"
              />
              <Button
                download
                href={backgroundRemovedImageUrl}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
              >
                Download img
              </Button>
            </>
          )}
        </Box>
      </TabPanel>
    </Box>
  );
}
