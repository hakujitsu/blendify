import { Skeleton, Stack, TableCell, TableRow } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

const sx = {
  row: {
    // backgroundColor: "cyan",
    '&:last-child td, &:last-child th': { border: 0 },
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none",
      py: 1
    }
  }
}

const SongTableSkeletonRow = () => {
  return (
    <TableRow
      hover
      sx={sx.row}
    >
      <TableCell component="th" scope="row">
        <Skeleton variant="rounded" animation={false} width="18px"/>
      </TableCell>
      <TableCell>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Skeleton variant="rounded" animation={false} height="48px" width="48px"/>
          <Stack
            direction="column"
            justifyContent="center"
            spacing={0.5}
          >
            <Skeleton animation={false} width="156px"/>
            <Skeleton animation={false} width="128px"/>
          </Stack>
        </Stack>
      </TableCell>
      <TableCell>
        <Skeleton animation={false} width="140px"/>
      </TableCell>
      <TableCell>
        <Skeleton animation={false}/>
      </TableCell>
      <TableCell>
        <Skeleton variant="rounded" animation={false} width="18px"/>
      </TableCell>
      <TableCell align="right">
        <Skeleton animation={false} />
      </TableCell>
    </TableRow>
  )
}

export default SongTableSkeletonRow;
