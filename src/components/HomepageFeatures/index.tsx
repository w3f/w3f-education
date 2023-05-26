import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    image: '/img/courses.webp',
    title: 'Blockchain and Web3 Courses',
    link: '/w3f-education/docs/introblock',
  },
  {
    image: '/img/wiki.webp',
    title: 'The Polkadot Wiki',
    link: 'https://wiki.polkadot.network/',
  },
  {
    image: '/img/tutorials.webp',
    title: 'Our Tutorials',
    link: '/',
  },
];

function Feature({image, title, link}) {
  return (
    <div
      onClick={() => window.open(link, '_self')}
      className={clsx('col col--4 feature-item')}
    >
      <img src={useBaseUrl(image)} alt={title} />
      <div className="feature-item-inner-box flex-column">
        <p className="feature-title">{title}</p>
        <div className="feature-link-box flex-column">
          <hr/>
          <div className='feature-link flex'>
            <p>Read more</p>
            <img className="feature-link-arrow" src={useBaseUrl('/img/arrow.svg')} alt="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container container-home">
        <h2 className="h2-home">Overview</h2>
        <div className="row feature-row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
