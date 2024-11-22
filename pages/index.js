import HomeBanner from "@/components/blocks/home/HomeBanner";
import HomeBoxCard from "@/components/blocks/home/HomeBoxCard";
import HomeCallToActions from "@/components/blocks/home/HomeCallToActions";
import HomeGridTextMedia from "@/components/blocks/home/HomeGridTextMedia";
import HomeTopics from "@/components/blocks/home/HomeTopics";
import Seo from "@/components/partials/Seo";

export default function Home() {
  return (
    <>
      <Seo meta_description="This is the home page" />
      <HomeBanner />
      <HomeTopics />
      <HomeBoxCard />
      <HomeGridTextMedia />
      <HomeCallToActions />
    </>
  );
}
