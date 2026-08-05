import BannerSection from "@/app/components/common/BannerSection";
import AllBlog from "./AllBlog";


export default function BlogPage() {
  return (
    <>
      <BannerSection
        title="Latest Insights & Travel Stories"
        description="Explore our latest blogs covering travel tips, destination guides, cab booking advice, and industry updates. Stay informed and plan your journeys better with expert insights and real experiences."
        image="/images/travel-17.jpg"
        buttonText="Explore Blogs"
        buttonUrl="/blog"
      />
         <AllBlog />
    </>
  );
}