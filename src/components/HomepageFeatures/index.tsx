import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const MainFeatureList = [
  {
    image: "/img/courses.webp",
    title: "edX Blockchain and Web3 Courses",
    link: "https://www.edx.org/school/web3x",
  },
  {
    image: "/img/wiki.webp",
    title: "The Polkadot Wiki",
    link: "https://wiki.polkadot.network/",
  },
  {
    image: "/img/tutorials.webp",
    title: "Technical Explainers",
    link: "https://www.youtube.com/playlist?list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8",
  },
];

const CoursesFeatureList = [
  {
    image: "/img/tutorials.webp",
    title: "Polkadot-SDK & FRAME Development Course",
    link: "/docs/introsubstrate",
  },
  {
    image: "/img/tutorials.webp",
    title: "Introduction to Rust in Substrate",
    link: "/docs/introrust",
  },
  {
    image: "/img/tutorials.webp",
    title: "Introduction to Parachain Development",
    link: "/docs/introparachain",
  },
];

function Feature({ image, title, link }) {
  return (
    <div onClick={() => window.open(link, "_self")} className={clsx("col col--4 feature-item")}>
      <img src={useBaseUrl(image)} alt={title} />
      <div className="feature-item-inner-box flex-column">
        <p className="feature-title">{title}</p>
        <div className="feature-link-box flex-column">
          <hr />
          <div className="feature-link flex">
            <p>Read more</p>
            <img
              className="feature-link-arrow"
              src={useBaseUrl("/img/arrow.svg")}
              alt="arrow-right"
            />
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
        <h2 className="h2-home">Overview - Learn Polkadot</h2>
        <hr></hr>
        <div className="row feature-row">
          {MainFeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>

      <div className="container container-home">
      <h2 className="h2-home">Overview - Learn Core Development</h2>
      <hr></hr>
        <div className="row feature-row">
          {CoursesFeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
