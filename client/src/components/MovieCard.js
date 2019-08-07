import React from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const extra = movie => (
  <div className="ui two buttons">
    <Button animated as={Link} to={`movie-edit/${movie.id}`}>
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
      extra={extra(props.movie)}
    />
  </Grid.Column>
  
)

export default MovieCard