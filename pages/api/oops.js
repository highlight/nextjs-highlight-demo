import { withHighlight } from './common'

let innerFunc = (input) => {
  let obj = {};
  // This will throw an error
  obj.oops.oops;
}

let handler = (req, res) => {
  innerFunc(1);
  res.status(200).json({ name: 'John Doe' })
}

// export default handler;
export default withHighlight(handler)
