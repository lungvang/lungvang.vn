/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react';
import { PageProps } from "gatsby";
import SEO from "../components/seo";

export default function IndexPage(props: PageProps) {
  return (
    <React.Fragment>
      <SEO />
      <header
        sx={{
          padding: 4,
          color: "background",
          backgroundColor: "primary",
        }}
      >
        Lung Vang
      </header>
      <h1>Path:</h1>
      <p>{props.path}</p>
    </React.Fragment>
  )
}