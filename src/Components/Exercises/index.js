import React from 'react';

import { Grid, Paper } from "@material-ui/core";


const styles = {
    Paper: {
        Padding: 20,
        marginTop: 10,
        marginBottom: 10
    }
}

export default props =>

<Grid container sm>

    <Grid item sm> 

        <Paper style={styles.Paper}>
        Panel Izq
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas incidunt quasi aliquid adipisci ea omnis molestiae dignissimos voluptatem blanditiis magni porro delectus reiciendis enim, laudantium illo. Quaerat suscipit impedit vel magni officiis eius? Beatae at error architecto voluptates! Assumenda.</h6>
        </Paper>

    </Grid>

    <Grid item sm> 

    <Paper style={styles.Paper}>

        panel derecho
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam iure provident, fugiat, error laboriosam autem rem accusamus quae ratione accusantium nisi, quis enim saepe delectus odio debitis quaerat aut doloremque possimus eum fuga necessitatibus? Error laudantium quibusdam saepe blanditiis illo minus rem, rerum odio sapiente voluptas architecto. Cupiditate, dicta!</h6>
    </Paper>

    </Grid>



</Grid>