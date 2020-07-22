import React, { Component } from 'react';
import './ProfilePage.css';
import JournalCard from '../../components/JournalCard/JournalCard';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';

class ProfilePage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let div = []
            console.log(this.props, "props")
        for(let i = 0; i < this.props.signs.length; i++){                      
            if(this.props.user.signs[0] === this.props.signs[i].sunSign) {

                div.push(<div className="info" key={this.props.signs[i]._id}>
                    <div>image:{this.props.signs.image}</div>
                    <div>sign: {this.props.signs.sunSign}
                    <div>Birthdates:{this.props.signs.dates}</div>
                    <div>Element:{this.props.signs.element}</div>
                    <div>Planet:{this.props.signs.planet}</div>
                    <div>Strengths:{this.props.signs.strengths}</div>
                    <div>Weaknesses:{this.props.signs.weaknesses}</div>
                    <div>Likes:{this.props.signs.likes}</div>
                    <div>Dislikes:{this.props.signs.dislikes}</div>
                    <div>Compatibility:{this.props.signs.compatiblity}</div>
                    <div>Lucky Numbers:{this.props.signs.luckyNumbers}</div>
                </div>
                </div>)
        }
        }
        console.log(div)
        return(
            <>
                <div className="profilePage">
                <div className="sign">
                    <div className="zodiac-sign">{this.props.user.signs}</div>
                      {div.map((sign, i) => <div key= {i}>{sign}</div>)}
                    </div>
                    <div className="horoscope">
                        <h2>Horoscope</h2>
                        {/* {this.props.user.signs === this.props.horoscopes.sign.name ? 
                        <div className="horoscope-display">{this.props.horoscopes.result.description}</div>
                        :
                        <div></div>
                        } */}
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