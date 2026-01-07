import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Simulate data – this could also come from a DB
    const products = [
      { id: 1, name: 'iPhone 15' },
      { id: 2, name: 'MacBook Pro' },
      { id: 3, name: 'AirPods Pro' },
    ];
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
