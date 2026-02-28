'use client';

import { Hero } from '@/components/sections/Hero';
import { MissionSection } from '@/components/sections/MissionSection';
import { ImpactSection } from '@/components/sections/ImpactSection';
import { DonationSection } from '@/components/sections/DonationSection';
import { DistributionSection } from '@/components/sections/DistributionSection';
import { PartnersSection } from '@/components/sections/PartnersSection';

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <ImpactSection />
      <DistributionSection />
      <DonationSection />
      <PartnersSection />
    </>
  );
}
