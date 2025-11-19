export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { AfterActivate } from '@gitroom/frontend/components/auth/after.activate';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
const BRAND_TITLE =
  process.env.NEXT_PUBLIC_BRAND_TITLE ||
  process.env.BRAND_TITLE ||
  (isGeneralServerSide() ? 'Postiz' : 'Gitroom');
export const metadata: Metadata = {
  title: `${BRAND_TITLE} - Activate your account`,
  description: '',
};
export default async function Auth() {
  return <AfterActivate />;
}
