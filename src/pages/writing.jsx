import React, { Component } from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Writing extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="writing-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default Writing;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query WritingQuery {
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
