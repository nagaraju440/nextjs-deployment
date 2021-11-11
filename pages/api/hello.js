// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.body) // The request body
  console.log(req.query) // The url querystring
  console.log(req.cookies) // The passed cookies
  res.status(200).json({ name: 'John Doe' })
}
