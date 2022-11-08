import getSavedTracks from "../../lib/data/getSavedTracks";

export default async function handler(req, res) {
  const access_token = req.body.access_token || null;
  const offset = req.body.offset || null;

  const { items } = await getSavedTracks(access_token, offset)

  return res.status(200).json({data: items})
}