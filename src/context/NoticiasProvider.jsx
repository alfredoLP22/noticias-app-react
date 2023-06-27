import { useState, useEffect, createContext } from "react";
// import axios from 'axios';
const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const response = await fetch(url);
      const result = await response.json();
      setNoticias(result.articles);
      setTotalNoticias(result.totalResults);
      setPagina(1);
    };
    consultarApi();
  }, [categoria]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const response = await fetch(url);
      const result = await response.json();
      setNoticias(result.articles);
      setTotalNoticias(result.totalResults);
    };
    consultarApi();
  }, [pagina]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e, value) => {
    setPagina(value);
  };
  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};
export { NoticiasProvider };
export default NoticiasContext;
