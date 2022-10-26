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
      {list.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.images[0]?.url} width="100" />
        </div>
      ))}
    </>
  );
}

export default Playlists;