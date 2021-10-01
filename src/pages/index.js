/** @jsx jsx */
import { jsx } from "theme-ui";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Subscribe from "sections/subscribe";
import Services from "sections/services";
import VideoIntro from "sections/video-intro";
import WorldMap from "sections/world-map";
import Milestone from "sections/milestone";
import Blog from "sections/blog";

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Công ty Quản lý Tài sản Lũng Vàng"
        description="Công ty quản lý và số hoá tài sản, cho vay, đầu tư và quản lý quỹ."
      />
      <Banner />
      <Services />
      <VideoIntro />
      <WorldMap />
      <Milestone />
      <Blog />
      <Subscribe />
    </Layout>
  );
}
