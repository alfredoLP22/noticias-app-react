import { Grid, Typography } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

function ListadoNoticias() {
  const { noticias } = useNoticias();
  
  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Ultimas noticias
      </Typography>
      <Grid>
        {noticias.map((noticia) => (
            <Noticia noticia={noticia} key={noticia.url}/>
        ))}
      </Grid>
    </>
  );
}

export default ListadoNoticias;
