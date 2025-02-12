import React from "react";
import BlankContainer from "./blank/blankContainer";
import BlankCard from "./blank/blankCard";

function BlankPage({ pageName }) {
  return (
    <BlankContainer>
      <BlankCard title={pageName} />
    </BlankContainer>
  );
}

export default BlankPage;
