/** @jsx jsx */
import { jsx } from "theme-ui";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Subscribe from "sections/subscribe";

export default function InvestPage() {
  return (
    <Layout>
      <SEO
        title="Công ty Quản lý Tài sản Lũng Vàng"
        description="Công ty quản lý và số hoá tài sản, cho vay, đầu tư và quản lý quỹ."
      />
      <Banner />
      <Subscribe />
    </Layout>
  );
}
