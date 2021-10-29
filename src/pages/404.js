import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="error-page">
        <div className="page-center">
          <span>404 </span>
          <h3>sorry... the page you tried cannot be found!</h3>
          <Link to="/" className="btn">
            Back home!
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
