import SongRow from "./songRow"
import SongRowSkeleton from "./songRowSkeleton"

const useGenerateRows = (props) => {
  const { songs, showAlbum, showDate, setObservedElement, hasMoreSongs, totalNumber, playSong } = props

  // if (songs === undefined || (songs.length === 0 && hasMoreSongs)) {
  //   return new Array(10).fill(0).map((_) => (
  //     <SongRowSkeleton showAlbum={showAlbum} showDate={showDate} />
  //   ))
  // }
  return songs.map((song, index) => {
    if (songs.length >= 50 && index === songs.length - 25) {
      return (
        <SongRow
          index={index}
          playSong={playSong}
          song={song}
          showAlbum={showAlbum}
          showDate={showDate}
          ref={setObservedElement}
        />
      )
    } else {
      return (
        <SongRow
          index={index}
          playSong={playSong}
          song={song}
          showAlbum={showAlbum}
          showDate={showDate}
        />
      )
    }
  }).concat(
    hasMoreSongs
      ? new Array(totalNumber > 0 ? totalNumber - songs.length : 10).fill(0).map((_, index) => (
        <SongRowSkeleton showAlbum={showAlbum} showDate={showDate} />
      ))
      : []
  )
}

export default useGenerateRows