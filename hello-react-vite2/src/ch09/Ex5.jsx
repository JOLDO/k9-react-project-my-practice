import React from 'react';
import classNames from 'classnames/bind';
import styles from './Ex5.module.css';

const cx = classNames.bind(styles);

const Ex5 = ({ type = 'success', children }) => {
  return <span className={cx('badge', type)}>{children}</span>;
};

export default Ex5;
