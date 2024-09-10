import React from 'react';

import PromoMp4 from 'assets/promo.mp4';
import SummitLayout from 'components/pages/summit-2024/summit-livestream-layout';
import SEO from 'components/shared/seo';
import { navigation, hubspotFormId } from 'data/shared/summit-2024-navigation';

const ogImage = '/images/social-preview-ebpf-summit.jpg';

const Summit2024 = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <div className='flex-grow w-full h-full"'>
      {/* <iframe
        className="h-full w-full"
        // width="560"
        // height="315"
        src="https://www.youtube.com/embed/lqIBKiTI62Q"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="true"
        webkitallowfullscreen="true"
       mozallowfullscreen="true"
      /> */}
      <video className="h-full w-full" controls>
        <source src={PromoMp4} type="video/mp4" />
      </video>
    </div>
  </SummitLayout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'eBPF Summit 2024 Schedule',
    description:
      'Explore the talks of the eBPF Summit, a virtual event for all things within the Open Source eBPF ecosystem',
    image: ogImage,
    pathname,
  };
  return <SEO {...pageMetadata} />;
};

export default Summit2024;
