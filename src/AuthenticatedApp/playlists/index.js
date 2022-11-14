import { useEffect, useState } from "react";

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