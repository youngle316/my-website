import { supabase } from '@/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query?.slug as string;
    if (!slug) {
      return res.status(400).json({ message: 'Slug is required.' });
    }

    const { data } = await supabase
      .from('views')
      .select('count')
      .eq('slug', slug);

    const views = !data?.length ? 0 : Number(data[0].count);

    if (req.method === 'POST') {
      if (views === 0) {
        await supabase.from('views').insert({ count: views + 1, slug: slug });

        return res.status(200).json({
          total: views + 1
        });
      } else {
        await supabase
          .from('views')
          .update({ count: views + 1 })
          .eq('slug', slug);
        return res.status(200).json({
          total: views + 1
        });
      }
    }

    if (req.method === 'GET') {
      return res.status(200).json({ total: views });
    }
  } catch (e: any) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}
