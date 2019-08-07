import React from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'

const extra = (
  <div className="ui two buttons">
    <Button animated>
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name='edit' />
      </Button.Content>
    </Button>
    <Button animated="vertical">
      <Button.Content visible>Delete</Button.Content>
      <Button.Content hidden>
        <Icon name='trash' />
      </Button.Content>
    </Button>
  </div>
)

const MovieCard = (props) => (
  <Grid.Column>
    <Card
      image={props.movie.cover}
      header={props.movie.title}
      extra={extra}
    />
  </Grid.Column>
  
)

export default MovieCard