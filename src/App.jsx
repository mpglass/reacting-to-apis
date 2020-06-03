import React from 'react';
import GhibliCard from './components/GhibliCard'

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
    }
    componentDidMount() {
        console.log('hello')
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => console.log(obj));
       
    }
    render() {
       
            return (
                <div>
                    <main className="container">
                        <section className="row justify-content-center">
                            <p>This is where the cards will go</p>
                            {this.state.movies.map((movie) => (
                                <GhibiliCard movie={movie} key={`movie-${movie.id}`} />
                            ))}
                        </section>
                    </main>
                </div>
            );
       
    }
}

export default App;