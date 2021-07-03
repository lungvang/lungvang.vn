/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react';
import { PageProps } from "gatsby";

export default function IndexRoute(props: PageProps) {
  return (
    <React.Fragment>
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