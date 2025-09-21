import React from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ProjectList = [
  {
    title: 'CI/CD with GitHub Actions',
    description: (
      <>
        A comprehensive guide to setting up a CI/CD pipeline using GitHub
        Actions, from basic concepts to advanced workflows.
      </>
    ),
    link: '/docs/devops-cloud-documentation/overview',
  },
  // Add more projects here in the future
];

function Project({title, description, link}) {
  return (
    <div className={styles.projectCard}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
      <Link className="button button--primary" to={link}>
        Read More
      </Link>
    </div>
  );
}

export default function HomepageProjects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Recent Projects
        </Heading>
        <div className={styles.projectContainer}>
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
