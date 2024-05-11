import { Box, Button, Container, Grid, Typography } from "@mui/material";

import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import AirlineSeatFlatAngledIcon from "@mui/icons-material/AirlineSeatFlatAngled";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CardExample from "./components/card";

export default function App() {
  return (
    <>
      <Container maxWidth="sm" sx={{ pb: 2, m: 3 }}>
        <CardExample></CardExample>
      </Container>
      <Container maxWidth="sm" sx={{ border: 2, boxShadow: 3, pb: 2, m: 3 }}>
        <Typography
          variant="h1"
          component="h2"
          textAlign="center"
          color="secondary"
          mt={5}
        >
          Primeros componentes
        </Typography>

        <Box
          sx={{
            border: 2,
            m: 4,
            p: 2,
            bgcolor: "lightgray",
            borderColor: "gray",
          }}
        >
          <Typography variant="h4" component="span">
            Nuevo Box
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<AccessAlarmIcon />}>
          Boton
        </Button>

        <Button
          variant="text"
          color="secondary"
          endIcon={<AirlineSeatFlatAngledIcon />}
        >
          Boton
        </Button>

        <Button
          variant="outlined"
          color="success"
          startIcon={<AddBusinessIcon />}
          endIcon={<AirlineSeatFlatIcon />}
        >
          Boton
        </Button>
      </Container>
      <Container maxWidth="sm" sx={{ border: 2, boxShadow: 3, pb: 2, m: 3 }}>
        <Grid container spacing={3}>
          <Grid item sm={6} md={4}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              eaque asperiores nihil excepturi in, atque ex optio, temporibus
              fugit tempore voluptatem nostrum quo amet doloribus vero voluptate
              enim quidem maxime.
            </p>
          </Grid>
          <Grid item sm={6} md={4}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              eaque asperiores nihil excepturi in, atque ex optio, temporibus
              fugit tempore voluptatem nostrum quo amet doloribus vero voluptate
              enim quidem maxime.
            </p>
          </Grid>
          <Grid item md={4}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              eaque asperiores nihil excepturi in, atque ex optio, temporibus
              fugit tempore voluptatem nostrum quo amet doloribus vero voluptate
              enim quidem maxime.
            </p>
          </Grid>
          <Grid item md={6}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              eaque asperiores nihil excepturi in, atque ex optio, temporibus
              fugit tempore voluptatem nostrum quo amet doloribus vero voluptate
              enim quidem maxime.
            </p>
          </Grid>
          <Grid item md={6}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              eaque asperiores nihil excepturi in, atque ex optio, temporibus
              fugit tempore voluptatem nostrum quo amet doloribus vero voluptate
              enim quidem maxime.
            </p>
          </Grid>
          <Grid item md={12}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              eaque asperiores nihil excepturi in, atque ex optio, temporibus
              fugit tempore voluptatem nostrum quo amet doloribus vero voluptate
              enim quidem maxime.
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
