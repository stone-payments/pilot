import React from 'react'

import { storiesOf } from '@storybook/react'
import { range } from 'ramda'

import { Grid, Row, Col } from '../../src/components/Grid'

import {
  Card,
  CardTitle,
  CardText,
} from '../../src/components/Card'

import '../../src/styles/index.css'

const gridMaxQty = 12
const equalDistributionExamples = [1, 2, 3, 4, 6, 12]
const combinationExamples = range(3, 9)

storiesOf('Grid/Desktop', module)
  .add('Equal distribuition', () => (
    <Grid>
      {equalDistributionExamples.map(size => (
        <Row>
          {range(1, size + 1).map(() => (
            <Col desktop={gridMaxQty/size}>
              <Card>
                <CardTitle>
                  Hello World {gridMaxQty/size}
                </CardTitle>
                <CardText>
                  CardTitle is defined but never used 
                  no-unused-vars, CardTitle is defined
                  but never used  no-unused-vars
                </CardText>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  ))

  .add('Combinations', () => (
    <Grid>
      {combinationExamples.map(size => (
        <Row>
          <Col desktop={size}>
            <Card>
              <CardTitle>
                Hello World {size}
              </CardTitle>
              <CardText>
                CardTitle is defined but never used 
                no-unused-vars, CardTitle is defined
                but never used  no-unused-vars
              </CardText>
            </Card>
          </Col>
          <Col desktop={gridMaxQty - size}>
            <Card>
              <CardTitle>
                Hello World {gridMaxQty - size}
              </CardTitle>
              <CardText>
                CardTitle is defined but never used 
                no-unused-vars, CardTitle is defined
                but never used  no-unused-vars
              </CardText>
            </Card>
          </Col>
        </Row>
      ))}
    </Grid>
  ))

  .add('One column in each row', () => (
    <Grid>
      {range(0, gridMaxQty).map(size => (
        <Row>
          <Col desktop={gridMaxQty - size}>
            <Card>
              <CardTitle>
                Hello World {gridMaxQty - size}
              </CardTitle>
              <CardText>
                CardTitle is defined but never used
                no-unused-vars, CardTitle is defined
                but never used  no-unused-vars
              </CardText>
            </Card>
          </Col>
        </Row>
      ))}
    </Grid>
  ))

