/**
 *
 * @param req
 * @param res
 */
export default function handler(_, res) {
  res.status(200).json({ name: `John Doe` });
}
