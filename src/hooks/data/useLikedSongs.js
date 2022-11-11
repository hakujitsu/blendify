import { useRef } from "react"
import { useAuthContext } from "../auth/useAuthContext"
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux'
import { getSongs } from '../../store/slices/likedSongs'


const useLikedSongs = () => {
  const { getAccessToken } = useAuthContext()
  const dispatch = useDispatch();
  const { songs, offset, totalNumber, hasMoreSongs } = useSelector((state) => state.likedSongs)

  const getLikedSongs = async () => {
    if (!hasMoreSongs) {
      return
    }
    const access_token = getAccessToken()
    const currentOffset = offset;

    if (access_token) {
      const res = await fetch(`/api/data/getSavedTracks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token,
          offset: currentOffset
        })
      });
      const { data, total } = await res.json();
      dispatch(getSongs({ totalNumber: total, offset: currentOffset, songsToAdd: data }))
    }
  };

  // const debouncedGetSongs = useRef(
  //   _.debounce(getLikedSongs, 1000)
  // ).current;

  return { totalNumber, hasMoreSongs, likedSongs: songs, getLikedSongs: getLikedSongs }
}

export default useLikedSongs;