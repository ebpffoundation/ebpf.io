import clsx from 'clsx';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import Card from './card';

const BlogPosts = ({ items, className }) => {
  const { t } = useTranslation();

  return (
    <section className={clsx('safe-paddings mt-32 lg:mt-24 md:mt-16 sm:mt-14', className)}>
      <div className="container">
        <h2 className="heading-8xl text-center font-semibold leading-tight">{t('blog.title')}</h2>
        <div className="grid-gap mt-14 grid auto-rows-min grid-cols-12 justify-items-stretch md:mt-11 sm:mt-8 sm:flex sm:flex-col sm:gap-y-5">
          {items.map((item, index) => (
            <Card {...item} className="col-span-4 md:col-span-6" key={index} />
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center sm:mt-10">
          <Link theme="black-primary-yellow" size="lg" to="/blog">
            {t('blog.linkTitle')}
          </Link>
        </div>
      </div>
    </section>
  );
};

BlogPosts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

BlogPosts.defaultProps = {
  className: null,
};

export default BlogPosts;
