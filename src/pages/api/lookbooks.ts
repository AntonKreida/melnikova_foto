import { NextApiRequest, NextApiResponse } from 'next';

import { lookbooksList } from './data/lookbooks';


export default function Lookbooks(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(lookbooksList);
}
