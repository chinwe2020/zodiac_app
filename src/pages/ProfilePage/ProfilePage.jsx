import React from 'react';
import './ProfilePage.css';
import * as zodiacAPI from '../../services/zodiac-api';
import * as journalAPI from '../../services/journal-api';
import * as horoscopeAPI from '../../services/horoscope-api';
import JournalCard from '../../components/JournalCard/JournalCard';
import { Link } from 'react-router-dom';
import { Component } from 'react';


class ProfilePage extends Component{
    // state = {
    //     sign: '',
    //     horoscopes: [],
    //     journals: []
    // }
    async componentDidMount() {
        // const signs = await zodiacAPI.getAllSigns();
        // const journals = await journalAPI.getAllJournals();
        // const horoscopes = await horoscopeAPI.getAllHoroscopes();
        // this.setState({journals})
        // this.setState({signs})
        // this.setState({horoscopes})
      }

    render(){
        return(
            <>
                <div className="profilePage">
                    <div className="sign">
                        <div className="zodiac-sign">Zodiac Sign</div>
                        <div>image</div>
                        <div>Birthdates:</div>
                        <div>Element:</div>
                        <div>Planet:</div>
                        <div>Strenghts:</div>
                        <div>Weaknesses:</div>
                        <div>Likes:</div>
                        <div>Dislikes:</div>
                        <div>Compatibility:</div>
                        <div>Lucky Numbers:</div>
                    </div>
                    <div className="horoscope">
                        <h2>Horoscope</h2>
                        <div className="horoscope-display">Daily Horoscope Display</div>
                    </div>
                    <div className="journal">
                        <h3>Journal</h3>
                        <div id="journal-box">
                            <div className="journal-display">
                                {this.props.journals.map(journal => 
                                    <JournalCard
                                        key={journal._id}
                                        journal={journal}
                                        handleDeleteJournal={this.props.handleDeleteJournal}
                                    />
                                )}
                            </div>
                        </div>
                        <br/>
                        <Link className="btn pink lighten-1"
                            to={{ pathname: '/journal' }}>
                                Add Journal Entry
                        </Link>
                        <br/>
                    </div>
                </div>
            </>
        )
    }
}

export default ProfilePage;