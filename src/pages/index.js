import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <p>
          This page was built using Gatsby’s{' '}
          <a href="https://www.gatsbyjs.org/starters/gatsby-starter-default/">
            default starter project
          </a>{' '}
          and GraphQL, as outlined in Gatsby’s source plugins and rendering
          queried data{' '}
          <a href="https://www.gatsbyjs.org/tutorial/part-five/">tutorial</a>.
        </p>
        <p>
          I modified the project’s JSX and removed some of its files to change
          the look of the page.
        </p>
        <p>
          The table below uses the Gatsby-source-filesystem plugin to query the
          local source folder for this project and return information about its
          files.
        </p>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
