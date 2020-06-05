import React from 'react';
import GhibliCard from './components/GhibiliCard'

class App extends React.Component {
    state = {
        movies: [],
        id: '',
        title: '',
        description: '',
        director: '',
        producer: '',
        release_date: '',
        rt_scote: '',
        isLoaded: false,
    }

    componentDidMount() {
        console.log('hello')
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    movies: json,
                })
            })

    }
    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                    <main className="container">
                        <section className="row justify-content-center">
                            <div>
                                {this.state.movies.map((movie) => (
                                    <GhibliCard movie={movie} key={`movie-${movie.id}`} />
                                ))}
                            </div>

                        </section>
                    </main>
                </div>
            );
        } else {
            return (
                <div className="col-md-8">
                    <div className="card my-2 shadow" >
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="https://ghibliapi.herokuapp.com/images/logo.svg"></img>
                        <div className="card-body">
                            <p className="card-text">A simple website to display information about the Studio Ghibli Films.</p>
                            <button onClick={() => this.setState({ isLoaded: true })} className="btn btn-dark">Load Films</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}





export default App;