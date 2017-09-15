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

storiesOf('Grid/Desktop', module)
  .add('Full row', () => (
    <Grid>
      {range(1, 13).map(size => (
        <Row>
          {range(1, size).map(() => (
            <Col desk={size}>
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
          ))}
        </Row>
      ))}
    </Grid>
  ))

  .add('One column in each row', () => (
    <Grid>
      {range(1, 13).map(size => (
        <Row>
          <Col desk={size}>
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
        </Row>
      ))}
    </Grid>
  ))

