import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import heroImg from '../media/think-outside.jpg';

const styles = {
    container: {
       width: '100%',
       maxWidth: '1170px',
       margin: '0 auto'
    },
    row: { 
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center',
       flexWrap: 'wrap'
    },
    card: {
        width: '100%',
        maxWidth: '50%'
    },
    textCenter: {
        'textAlign': 'center'
    }
 }

class Home extends Component {
    render() {
        return (
            <div>
                <h2 style={styles.textCenter}>Hello Creative Developer, Browse <Link to='list'>Business Lists</Link></h2>
                <div style={styles.container}>
                    <div style={styles.row}>
                        <img src={heroImg} alt="Business news image" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;