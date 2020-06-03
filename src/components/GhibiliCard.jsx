import React from 'react';

class GhibliCard extends React.Component {
    

    render() {
        return (
            <section>
                <div className="col-md-8">
                    <div className="card my-2 shadow">
                        <div className="card-header">
                            <p className="header-text">{this.props.movie.title}</p>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{this.props.movie}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default GhibliCard;