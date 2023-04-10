import { supabase } from '@/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let { data } = await supabase.from('views').select('*');
    return res.status(200).json(data);
  } catch (e: any) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}
