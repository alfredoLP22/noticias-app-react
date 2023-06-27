import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Grid,
} from "@mui/material";

function Noticia({ noticia }) {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <Grid item md={6} lg={4}>
      <Card>
        <CardMedia
          component={"img"}
          alt={`Imagen de la noticia ${title}`}
          image={urlToImage ? urlToImage : "/no-image.png"}
          height={"250"}
        />
        <CardContent>
          <Typography variant="body1" color={"error"}>
            {source.name}
          </Typography>
          <Typography variant="h5" component={"div"}>
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            target="_blank"
            rel="noopener"
            variant="button"
            color={"primary"}
            width={"100%"}
            textAlign={"center"}
            sx={{ textDecoration: "none" }}
          >
            Leer noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Noticia;
