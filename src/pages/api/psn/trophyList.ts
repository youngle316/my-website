import type { NextApiRequest, NextApiResponse } from 'next';
import {
  exchangeCodeForAccessToken,
  exchangeNpssoForCode,
  getUserTitles,
} from "psn-api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accessCode = await exchangeNpssoForCode(
    process.env.NEXT_PUBLIC_PSN_NPSSO as string
  );
  const authorization = await exchangeCodeForAccessToken(accessCode);

  const userTitlesResponse = await getUserTitles(
    { accessToken: authorization.accessToken },
    'me'
  );

  return res.status(200).json(userTitlesResponse);
}