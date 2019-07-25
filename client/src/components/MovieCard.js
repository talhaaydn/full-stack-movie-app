import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

const MovieCard = (props) => (
  <Grid.Column>
    <Card
      image={props.movie.cover}
      header={props.movie.title}
    />
  </Grid.Column>
  
)

export default MovieCard