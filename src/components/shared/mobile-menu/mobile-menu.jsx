import { m, useAnimation, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import MenuItem from './menu-item';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 999,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen, items }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start('to');
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      controls.start('from');
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen, controls]);

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        className="safe-paddings absolute inset-x-0 bottom-0 top-16 hidden w-full rounded-md bg-white pb-7 lg:block"
        initial="from"
        animate={controls}
        variants={variants}
      >
        <ul className="flex h-full flex-col divide-y divide-gray-90 divide-opacity-50 overflow-x-hidden overflow-y-scroll px-7 sm:px-4">
          {items.map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </ul>
      </m.nav>
    </LazyMotion>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          to: PropTypes.string,
          items: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string.isRequired,
              to: PropTypes.string,
            })
          ),
        })
      ),
    })
  ).isRequired,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
