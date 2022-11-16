import getPlaylists from "../../lib/data/getPlaylists";

export default async function handler(req, res) {
  const access_token = req.body.access_token;
  const offset = req.body.offset;

  const { items, total } = await getPlaylists(access_token, offset)

  return res.status(200).json({data: items, total})
}