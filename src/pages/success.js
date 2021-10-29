import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const Success = () => {
  return (
    <Layout>
      <section className="success-page">
        <div className="page-center">
          <h2>your submission was received !</h2>
          <Link to="/" className="btn">
            Go home!
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Success;
