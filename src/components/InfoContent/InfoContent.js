import React from "react";
import styled from "styled-components"

const InfoTable = styled.table`
  width: 80%;
  font-size: 1.2rem;
  border-collapse: collapse;
`

const InfoName = styled.th`
  font-size: 3rem;
`

const ContentName = styled.td`
  width: 60%;
  text-align: left;
`

const ContentValue = styled.td`
  width: 40%;
  text-align: right;
`

export default function InfoContent({ frontmatter }) {
  return (
    <InfoTable>
      <thead>
      <tr>
        <InfoName colSpan={2}>{frontmatter.title}</InfoName>
      </tr>
      </thead>
      <tbody>
      {frontmatter.content.map(contentElement => (
        <tr>
          <ContentName>{contentElement.name}</ContentName>
          <ContentValue>{contentElement.value}</ContentValue>
        </tr>
      ))}
      </tbody>
    </InfoTable>
  );
}
