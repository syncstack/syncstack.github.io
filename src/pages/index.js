import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>SyncStack is Open-Source</>,
    imageUrl: 'img/undraw_open_source.svg',
    description: (
      <>
        Syncstack is an open source database.
      </>
    ),
  },
  {
    title: <>In-Memory SQL</>,
    imageUrl: 'img/undraw_sql.svg',
    description: (
      <>
      You can select your in memory data with SQL syntax. 
      Works with standard SQL, no weird dialects or new syntax to learn.
      </>
    ),
  },

  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_server.svg',
    description: (
      <>
        You can create a table as like in traditional db or json table.
        You can create a <code>json></code> table and query it.
      </>
    ),
  },
  {
    title: <>Client libraries</>,
    imageUrl: 'img/undraw_coding.svg',
    description: (
      <>
        Flexible messaging models with high-level APIs for Java, Go, C
      </>
    ),
  },
  {
    title: <>Integrations</>,
    imageUrl: 'img/undraw_integration.svg',
    description: (
      <>
        We are support to cloud native applications.
        We have Kubernetes and Docker integration. 
        You can just look at the documentation.
      </>
    ),
  },

];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} | Fault tolerant high performance SQL database 🚀`}
      description="Fault tolerant high performance SQL database 🚀">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/docs/get-started/syncstack')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
