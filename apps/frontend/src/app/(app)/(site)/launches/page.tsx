export const dynamic = 'force-dynamic';

import { LaunchesComponent } from '@gitroom/frontend/components/launches/launches.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

// Load env branding
const BRAND_TITLE = process.env.BRAND_TITLE || 'Gitroom';

export const metadata: Metadata = {
  title: isGeneralServerSide()
    ? `${BRAND_TITLE} Calendar`
    : `${BRAND_TITLE} Launches`,
  description: `${BRAND_TITLE} dashboard`,
};

export default async function Index() {
  return <LaunchesComponent />;
}
