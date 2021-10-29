import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => {
  console.log(posts);
  return (
    <Layout>
      <Hero showPerson />
      <Posts posts={posts} title="recently published" />
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          author
          category
          readTime
          slug
          date(formatString: "MMMM, DD, YYYY")
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        excerpt
      }
    }
  }
`;

export default IndexPage;
