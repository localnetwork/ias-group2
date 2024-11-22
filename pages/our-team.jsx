import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import OurTeamMembers from "@/components/blocks/our-team/OurTeamMembers";
import OurTeamThanks from "@/components/blocks/our-team/OurTeamThanks";

export default function Page2() {
  return (
    <>
      <OurTeamMembers />
      <OurTeamThanks />
    </>
  );
}
