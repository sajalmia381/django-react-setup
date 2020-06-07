import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const styles = {
    textCenter: {
        'textAlign': 'center'
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <h2 style={styles.textCenter}>Hello Creative Developer, Browse <Link to='list'>Business Lists</Link></h2>
            </div>
        );
    }
}

export default Home;