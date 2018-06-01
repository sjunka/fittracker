import React from "react";

import { Grid } from "@material-ui/core";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RigtPanel";

const styles = {
  Paper: {
    Padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default props => (
  <Grid container sm>
    <Grid item sm>
      <LeftPanel styles={styles} />
    </Grid>

    <Grid item sm>
      <RightPanel styles={styles} />
    </Grid>
  </Grid>
);
