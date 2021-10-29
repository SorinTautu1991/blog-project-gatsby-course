import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';

const CategoryTemplate = props => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props;

  const {
    pageContext: { category },
  } = props;

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  );
};

export const query = graphql`
  query GetCategories($category: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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

export default CategoryTemplate;
