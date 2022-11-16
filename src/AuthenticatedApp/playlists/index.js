import { useEffect, useState } from "react";
import { BODY_HEIGHT } from "../../styles/layout";

const sx = {
  stack: {
    maxHeight: BODY_HEIGHT,
    maxWidth: "100%",
  }
}

const Playlists = () => {
  const [list, setList] = useState([]);

  const getMyPlaylists = async () => {
    // const res = await fetch('/api/playlists');
    // const { items } = await res.json();
    // console.log(items)
    setList([]);
  };

  useEffect(() => {
    getMyPlaylists()
  }, [])


  return (
    <>
      playlists
      
    </>
  );
}

export default Playlists;