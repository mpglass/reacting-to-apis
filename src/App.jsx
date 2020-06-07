import React from 'react';
import GhibliCard from './components/GhibiliCard'
import CharacterCard from './components/CharacterCard'

class App extends React.Component {
    state = {
        movies: [],
        id: '',
        title: '',
        description: '',
        name: '',
        age: '',
        gender: '',
        eye_color: '',
        hair_color: '',
        isFilmsLoaded: false,
        isCharactersLoaded: false,
    }

    render() {
        if (this.state.isFilmsLoaded && !this.state.isCharactersLoaded) {
            return (
                <div>
                    <main className="container">
                        <section className="row justify-content-center">
                            <div>
                                {this.state.movies.map((movie) => (
                                    <GhibliCard movie={movie} key={`movie-${movie.id}`} />
                                ))}
                            </div>
                            <button onClick={() =>
                                this.setState({
                                    isFilmsLoaded: false,
                                    isCharactersLoaded: false,
                                })}
                                className="btn m-2 btn-dark">Return to Home</button>
                        </section>
                    </main>
                </div>
            );
        } else if (!this.state.isFilmsLoaded && this.state.isCharactersLoaded) {
            return (
                <div>
                    <main className="container">
                        <section className="row justify-content-center">
                            <div>
                                {this.state.characters.map((character) => (
                                    <CharacterCard character={character} key={`character-${character.id}`} />
                                ))}
                            </div>
                            <button onClick={() =>
                                this.setState({
                                    isFilmsLoaded: false,
                                    isCharactersLoaded: false,
                                })}
                                className="btn m-2 btn-dark">Return to Home</button>
                        </section>
                    </main>
                </div>
            )
        }
        else {
            return (
                <div className="col-md-8">
                    <div className="card my-2 shadow" >
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="https://ghibliapi.herokuapp.com/images/logo.svg"></img>
                        <div className="card-body">
                            <p className="card-text">A simple website to display information about the Studio Ghibli Films.</p>
                            <button onClick={() =>
                                fetch("http://ghibliapi.herokuapp.com/films")
                                    .then(res => res.json())
                                    .then(json => {
                                        this.setState({
                                            movies: json,
                                            isFilmsLoaded: true
                                        })
                                    })}
                                className="btn m-2 btn-dark">Load Films</button>
                            <button onClick={() =>
                                fetch("https://ghibliapi.herokuapp.com/people")
                                    .then(res => res.json())
                                    .then(json => {
                                        this.setState({
                                            characters: json,
                                            isCharactersLoaded: true
                                        })
                                    })}
                                className="btn m-2 btn-dark">Load Characters</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default App;