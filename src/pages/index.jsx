import React from "react"
import Helmet from "react-helmet"
import config from "../../data/SiteConfig"
import About from "../components/About/About";
import SelectedLinks from '../components/SelectedLinks/SelectedLinks'
import Press from "../components/Press/Press"
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import "./index.css"

const Index = (props) => {
  const postEdges = props.data.allMarkdownRemark.edges;
  return(
    <div className="index-container">
      <Helmet title={config.siteTitle} />
      <SEO postEdges={postEdges} />
      <div className="index-content">
        <div className="left">
          <About />
          <SelectedLinks />
          <Press />
        </div>
        <div className="right">
          <PostListing postEdges={postEdges} />
        </div>
      </div>
    </div>
  )
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
