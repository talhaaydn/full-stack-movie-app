import React, { Component } from "react";
import { connect } from "react-redux";

import NewMovieForm from "../NewMovieForm";
import { onNewMovieSubmit } from "../../actions/newMovie";

class NewMoviePage extends Component {
    render() {
        return(
            <div>
                <NewMovieForm 
                    newMovie={this.props.newMovie}
                    onNewMovieSubmit={this.props.onNewMovieSubmit} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newMovie: state.newMovie
    }
}

const mapDispachToProps = {
    onNewMovieSubmit
}

export default connect(mapStateToProps, mapDispachToProps)(NewMoviePage);