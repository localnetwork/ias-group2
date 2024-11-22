import HomeBanner from "@/components/blocks/home/HomeBanner";
import HomeBoxCard from "@/components/blocks/home/HomeBoxCard";
import HomeCallToActions from "@/components/blocks/home/HomeCallToActions";
import HomeGridTextMedia from "@/components/blocks/home/HomeGridTextMedia";
import HomeTopics from "@/components/blocks/home/HomeTopics";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeTopics />
      <HomeBoxCard />
      <HomeGridTextMedia />
      <HomeCallToActions />
    </>
  );
}
