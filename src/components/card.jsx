import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardExample() {
  return (
    <Card
      sx={{
        transition: "0.5s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://picsum.photos/1000/200"
          heigth="200"
          alt="estamos adquiriendo imagen random"
        ></CardMedia>
        <CardContent>
          <Typography variant="h5">Title</Typography>
          <Typography variant="body">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quam architecto, veniam blanditiis atque, unde sunt quo incidunt
            temporibus magnam quasi porro molestias quod velit nobis, dolorem
            eveniet iusto sapiente!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained">Share</Button>
        <Button variant="outlined">learn more</Button>
      </CardActions>
    </Card>
  );
}
