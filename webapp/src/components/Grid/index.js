import React from 'react'

import {
  element,
  number,
} from 'prop-types'

import classNames from 'classnames'

import style from './style.css'

const columnClassNames = ({ desktop, tv, tablet }) =>
  classNames(style.col,
    style[`col-desktop-${desktop}`],
    style[`col-tv-${tv}`],
    style[`col-tablet-${tablet}`]
  )

export const Grid = ({ children }) => (
  <div className={style.grid}>
    {children}
  </div>
)

export const Row = ({ children }) => (
  <div className={style.row}>
    {children}
  </div>
)

export const Col = ({ children, desktop, tv, tablet }) => (
  <div className={columnClassNames({ desktop, tv, tablet })}>
    {children}
  </div>
)

Grid.propTypes = {
  children: element,
}

Grid.defaultProps = {
  children: null,
}

Row.propTypes = {
  children: element,
}

Row.defaultProps = {
  children: null,
}

Col.propTypes = {
  children: element,
  desktop: number,
  tv: number,
  tablet: number,
}

Col.defaultProps = {
  children: null,
  desktop: 12,
  tv: 12,
  tablet: 12,
}
