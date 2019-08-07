import React, { Component } from "react";
import { connect } from "react-redux";

import NewMovieForm from "../NewMovieForm";
import { 
    fetchMovie,
    onNewMovieSubmit,
    onUpdateMovieSubmit
} from "../../actions/newMovie";

class NewMoviePage extends Component {
    componentDidMount() {
        const { match } = this.props;
        if(!this.props.movie && match.params.id){
            this.props.fetchMovie(match.params.id);
        }
    }

    render() {
        return(
            <div>
                <NewMovieForm 
                    movie={this.props.movie}
                    newMovie={this.props.newMovie}
                    onNewMovieSubmit={this.props.onNewMovieSubmit}
                    onUpdateMovieSubmit={this.props.onUpdateMovieSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        newMovie: state.newMovie,
        movie: state.movies.movies.find(item => item.id === parseInt(props.match.params.id))
    }
}

const mapDispachToProps = {
    onNewMovieSubmit,
    fetchMovie,
    onUpdateMovieSubmit
}

export default connect(mapStateToProps, mapDispachToProps)(NewMoviePage);