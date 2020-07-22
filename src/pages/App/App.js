import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import * as zodiacAPI from '../../services/zodiac-api';
import * as journalAPI from '../../services/journal-api';
import * as horoscopeAPI from '../../services/horoscope-api';
import ZodiacListPage from '../ZodiacListPage/ZodiacListPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import AddJournalPage from '../JournalPage/AddJournalPage';
import EditJournalPage from '../EditJournalPage/EditJournalPage';

class App extends Component {
  state = {
    user: userService.getUser(),
    signs: [],
    journals:[],
    horoscopes: [],
  }

  handleAddSign = async formData => {
    const newProfile = await userService.updateUser(formData);
    console.log(newProfile);
    this.setState(state => ({
      signs: [...state.signs, ...newProfile.signs]
    }))
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddJournal = async newJournalData => {
    const newJournal = await journalAPI.create(newJournalData);
    this.setState(state => ({
      journals: [...state.journals, newJournal]
    }), ()=> this.props.history.push('/profile'));
  }

  handleUpdateJournal = async updatedJournalData => {
    const updatedJournal = await journalAPI.update(updatedJournalData);
    const newJournalsArray = this.state.journals.map(j =>
      j._id === updatedJournal._id ? updatedJournal : j);
    this.setState(
      {journals: newJournalsArray},
      () => this.props.history.push('/profile')
    )
  }

  handleDeleteJournal = async id => {
    await journalAPI.deleteOne(id);
    this.setState(state => ({
      journals: state.journals.filter(j => j._id !== id)
    }), () => this.props.history.push('/profile'));
  }
  
  async componentDidMount() {
    const signs = await zodiacAPI.getAllSigns();
    const journals = await journalAPI.getAllJournals();
    console.log(journals, "journals")
    const horoscopes = await horoscopeAPI.getAllHoroscopes();
    this.setState({signs})
    this.setState({journals})
    
    this.setState({horoscopes})
  }

  render () {
    return (
      <>
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <div className="container">
           <Route exact path="/" render={()=> 
             <ZodiacListPage
             handleAddSign={this.handleAddSign}
              user={this.state.user}
              signs={this.state.signs}
              journals={this.state.journals}
          />
        }>
          </Route>
          <Route exact path="/profile" render={()=>
          <ProfilePage 
            user={this.state.user}
            signs={this.state.signs}
            journals={this.state.journals}
            horoscopes={this.state.horoscopes}
            handleDeleteJournal={this.handleDeleteJournal}
          />
          }>
          </Route>
          <Route exact path='/journal' render={()=> 
          <AddJournalPage 
            user={this.state.user}
            handleAddJournal={this.handleAddJournal}
          />  
          }>
          </Route>
          <Route exact path='/edit' render={({location}) =>
          <EditJournalPage 
            user={this.state.user}
            handleUpdateJournal={this.handleUpdateJournal}
            location={location}
          /> 
        }>
        </Route>
        </div>
      </>
    );
  }
}

export default App;
