import React from 'react';

import { Paper, Tabs, Tab} from '@material-ui/core';

 
export default props => 
<Paper >
        <Tabs
        value = {0}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>