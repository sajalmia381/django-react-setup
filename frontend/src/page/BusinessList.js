import React, { Component } from 'react';
import axios from 'axios';


const fatchList = async () => {
    let protocol = 'http:';
    let loc = window.location;
    if (loc.protocol === 'https:'){
        protocol = 'https:'
    }
    try{
        let {data} = await axios.get(`${protocol}//127.0.0.1:8000/business-list`);
        return data
    } catch(error) {
        //  console.log(error)
        return {error}
    }
}

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

class BusinessList extends Component {
    state = {
        list: {},
        loading: true
    }
    async componentDidMount(){
        let data = await fatchList();
        if(!data.hasOwnProperty('error')){
            this.setState({list: data, loading: false})
        }
    }

    render() {
        const { list, loading } = this.state;
        return (
            <div>                
                <h2 style={styles.textCenter}>Business List With API Call</h2>
                <div style={styles.container}>
                    <div style={styles.row}>
                        {loading ? <div>Loading</div>: (
                            list.map(({name, create_by}, index) => {
                                return <div className="card" style={styles.card} key={index}>
                                    <h3>{index}: {name}</h3>
                                    <h5>Create By: { create_by.email}</h5>
                                </div>
                            })
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default BusinessList;
