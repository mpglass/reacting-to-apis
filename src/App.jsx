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
                    isLoaded: true,
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
                <h1>Please wait while page loads...</h1>
            )

        }


    }
}

export default App;