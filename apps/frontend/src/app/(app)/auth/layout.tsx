import { getT } from '@gitroom/react/translation/get.translation.service.backend';

export const dynamic = 'force-dynamic';

import { ReactNode } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import loadDynamic from 'next/dynamic';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

// Env-based branding
const BRAND_LOGO = process.env.BRAND_LOGO || '';
const BRAND_TITLE = process.env.BRAND_TITLE || 'Gitroom';

const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = await getT();

  // Determine the final logo (priority order)
  const logoSrc =
    BRAND_LOGO.trim() !== ''
      ? BRAND_LOGO
      : isGeneralServerSide()
      ? '/postiz.svg'
      : '/logo.svg';

  return (
    <div className="dark !bg-black lbox">
      <ReturnUrlComponent />

      <div className="absolute start-0 top-0 z-[0] h-[100vh] w-[100vw] overflow-hidden bg-loginBg bg-contain bg-no-repeat bg-left-top" />

      <div className="relative z-[1] px-3 lg:pr-[100px] xs:mt-[70px] flex justify-center lg:justify-end items-center h-[100vh] w-[100vw] overflow-hidden">
        <div className="w-full max-w-lg h-[614px] flex flex-col bg-loginBox bg-no-repeat bg-contain">

          {/* Logo section */}
          <div className="w-full relative">
            <div className="custom:fixed custom:text-start custom:left-[20px] custom:justify-start custom:top-[20px] absolute -top-[100px] text-textColor justify-center items-center w-full flex gap-[10px]">

              {/* Custom Logo OR fallback */}
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  width={55}
                  height={53}
                  alt="Brand Logo"
                />
              ) : (
                <div className="text-[40px] font-bold">
                  {BRAND_TITLE}
                </div>
              )}

              <div
                className={clsx(
                  !isGeneralServerSide() ? 'mt-[12px]' : 'min-w-[80px]'
                )}
              >
                {/* Subtitle / Branding Text */}
                <div className="text-[32px] font-semibold leading-none">
                  {BRAND_TITLE}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-[32px] w-full h-[660px] text-textColor rbox">
            {children}
          </div>

          {/* Decorative Borders */}
          <div className="flex flex-1 flex-col">
            <div className="flex-1 flex justify-end">
              <div className="absolute top-0 bg-gradient-to-t from-customColor9 w-[1px] translate-x-[22px] h-full" />
            </div>
            <div>
              <div className="absolute end-0 bg-gradient-to-l from-customColor9 h-[1px] translate-y-[60px] w-full" />
            </div>
          </div>

          <div className="absolute top-0 bg-gradient-to-t from-customColor9 w-[1px] -translate-x-[22px] h-full" />
          <div className="absolute end-0 bg-gradient-to-l from-customColor9 h-[1px] -translate-y-[22px] w-full" />
        </div>
      </div>
    </div>
  );
}
