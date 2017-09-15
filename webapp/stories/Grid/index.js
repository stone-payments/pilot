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

storiesOf('Grid', module)
  .add('Desktop', () => (
    <Grid>
      <Row>
        <Col tablet={6}>
          <div style={{
            backgroundColor: 'red',
          }}>
            Content
          </div>
        </Col>
      </Row>
      {range(1, 12).map(size => (
        <Row>
          {range(1, size).map(() => (
            <Col desk={size}>
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
          ))}
        </Row>
      ))}
    </Grid>
  ))

