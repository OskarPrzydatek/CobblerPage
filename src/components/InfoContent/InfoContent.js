import React from "react";

export default function InfoContent({ frontmatter }) {
  return (
    <table>
      <thead>
      <tr>
        <th colSpan={2}><h1>{frontmatter.title}</h1></th>
      </tr>
      </thead>
      <tbody>
      {frontmatter.content.map(contentElement => (
        <tr>
          <td>{contentElement.name}</td>
          <td>{contentElement.value}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
