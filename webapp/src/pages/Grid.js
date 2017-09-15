import React, { Component } from 'react'
import {
  element,
  number,
} from 'prop-types'

import classNames from 'classnames'

import {
  Card,
  CardTitle,
  CardText,
} from '../components/Card'

import style from './style.css'

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <div>
        <Row>
          <Col>
            <Card>
              <CardTitle>
                Hello World
              </CardTitle>
              <CardText>
                CardTitle is defined but never used
                no-unused-vars, CardTitle is defined
                but never used  no-unused-vars
              </CardText>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle>
                Hello World
              </CardTitle>
              <CardText>
                CardTitle is defined but never used
                no-unused-vars, CardTitle is defined
                but never used  no-unused-vars
              </CardText>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle>
                Hello World
              </CardTitle>
              <CardText>
                CardTitle is defined but never used
                no-unused-vars, CardTitle is defined
                but never used  no-unused-vars
              </CardText>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export function Row ({
  children,
}) {
  return (
    <div className={style.row}>
      {children}
    </div>
  )
}

const colClasses = ({ desk, tv, tablet }) =>
  classNames(style.col, {
    [style[`col-desk-${desk}`]]: desk,
    [style[`col-tv-${tv}`]]: tv,
    [style[`col-tablet-${tablet}`]]: tablet,
  })

export function Col ({
  children,
  desk,
  tv,
  tablet,
}) {
  return (
    <div className={colClasses({ desk, tv, tablet })}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: element,
}

Row.defaultProps = {
}

Col.propTypes = {
  children: element,
  desk: number,
  tv: number,
  tablet: number,
}

Col.defaultProps = {
  desk: 12,
  tv: 12,
  tablet: 12,
}
