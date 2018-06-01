import React from "react";

import { Paper, Tabs, Tab } from "@material-ui/core";

export default ({ muscles }) => (
  <Paper>
    <Tabs
      value={0}
      onChange={this.handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="all" />
      {muscles.map(muscle => <Tab label={muscle} />)}
    </Tabs>
  </Paper>
);
