// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mock from './mock.json'

const productList = [...mock.products]

type Data = {
  total: number
  products: any[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log({ method: req.method, query: req.query })
  console.log(req.body)
  switch (req.method) {
    case 'POST':
      productList.push(req.body)
      break
    case 'PUT':
      {
        const index = productList.findIndex((item: any) => item.id === req.body.id)
        if (index >= 0) productList.splice(index, 1, req.body)
      }
      break
    case 'DELETE':
      {
        const index = productList.findIndex((item: any) => item.id === req.body.id)
        if (index >= 0) productList.splice(index, 1)
      }
      break
    default:
      break
  }

  res.status(200).json({
    total: productList.length,
    products: productList
  })
}
