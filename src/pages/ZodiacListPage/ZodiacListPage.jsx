import React, { Component } from 'react';
import './ZodiacListPage.css';
import * as zodiacAPI from '../../services/zodiac-api'
import ZodiacCard from '../../components/ZodiacCard/ZodiacCard';
import userService from '../../services/userService';

class ZodiacListPage extends Component{
    state = {
        
        formData: {
            user: userService.getUser(),
            sign: ''
        }
    }

   
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddSign(this.state.formData)
    };
    
    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
        });
      };


    render() {
        console.log(this.props)
        return (
            <>
                <br/>
                {this.props.user !== '' ?
                <form onSubmit={this.handleSubmit}>          
                <select name="signs" className="browser-default col s6" onChange={this.handleChange}>
                    <option value="" disabled selected>Choose your Sign</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                    <option value="Aires">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                </select>
                <button className="btn #4dd0e1 cyan lighten-2 waves-effect waves-light" type="submit" name="action">Add to Profile
                    <i className="material-icons right">send</i>
                </button>
                </form>  
                :
                <></>
        }
                <br></br>
                <div className='ZodiacListPage-grid'>
                    {this.props.signs.map((sign, idx) => 
                        <ZodiacCard
                            key={idx}
                            sign={sign}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default ZodiacListPage;