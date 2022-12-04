import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";

const Index: NextPage = () => {
  return (
    <Layout>
      <Box bg="gray.50">
        <HeroSection />
      </Box>
    </Layout>
  )
}

export default Index