import React from 'react'

import {
  element,
  number,
} from 'prop-types'

import classNames from 'classnames'

import style from './style.css'

const columnClassNames = ({ desk, tv, tablet }) =>
  classNames(style.col, {
    [style[`col-desk-${desk}`]]: desk,
    [style[`col-tv-${tv}`]]: tv,
    [style[`col-tablet-${tablet}`]]: tablet,
  })

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

export const Col = ({ children, desk, tv, tablet }) => (
  <div className={columnClassNames({ desk, tv, tablet })}>
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
  desk: number,
  tv: number,
  tablet: number,
}

Col.defaultProps = {
  children: null,
  desk: 12,
  tv: 12,
  tablet: 12,
}

