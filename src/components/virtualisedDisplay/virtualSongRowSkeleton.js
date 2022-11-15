import { Skeleton, Stack } from "@mui/material"
import RowLayout from "../virtualizedSongDisplay/rowLayout"

const VirtualSongRowSkeleton = (props) => {
  const { showAlbum, showDate } = props
  return (
    <RowLayout
      indexContent={
        <Skeleton variant="rounded" animation={false} width="18px" />
      }
      titleContent={
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Skeleton variant="rounded" animation={false} height="48px" width="48px" />
          <Stack
            direction="column"
            justifyContent="center"
            spacing={0.5}
          >
            <Skeleton animation={false} width="156px" />
            <Skeleton animation={false} width="128px" />
          </Stack>
        </Stack>
      }
      albumContent={<Skeleton animation={false} width="140px" />}
      dateContent={<Skeleton animation={false} />}
      likedContent={<Skeleton variant="rounded" animation={false} width="18px" />}
      durationContent={
        <Skeleton animation={false} />
      }
      showAlbum={showAlbum}
      showDate={showDate}
    />
  )
}

export default VirtualSongRowSkeleton;