// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(process.env.NAME)
  console.log(process.env.NEXT_PUBLIC_NAME);
  res.status(200).json({ name: 'John Doe' })
}
