import { Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";

const sx = {
  card: {
    width: "100%"
  },
  content: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fullSize: {
    height: "100%",
    width: "100%"
  }
}

const HomePageCards = (props) => {
  const { icon, text, onClick } = props
  return (
    <Card sx={sx.card}>
      <CardActionArea onClick={onClick} sx={sx.fullSize}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          sx={sx.fullSize}
        >
          {icon}
          <CardContent sx={sx.content}>
            <Typography variant="h6" sx={sx.fullSize}>
              {text}
            </Typography>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  )
}

export default HomePageCards;