import React, { Component } from 'react';
import * as journalAPI from '../../services/journal-api';
import './JournalPage.css';

class AddJournalPage extends Component{
    state = {
    journals: [],
    formData:{
        journal: ''
    }
    };

    async componentDidMount() {
        const journals = await journalAPI.getAllJournals();
        this.setState({journals})
        
      }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddJournal(this.state.formData)
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
        });
      };

      handleAddJournal = async newJournalData => {
        const newJournal = await journalAPI.create(newJournalData);
        this.setState(state => ({
          journal: [...state.journal, newJournal]
        }), ()=> this.props.history.push('/journal'));
      }


    render(){
        return(
            <>
            <div className="journalPage">
                <h1>Add Journal Entry</h1>
                <h3>Today my horoscope:</h3>
                <form className="journal_entry" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <textarea name="journal" id="entry" cols="30" rows="10" type="text" 
                        value={this.state.formData.journal}
                        onChange={this.handleChange}/>
                    <button
                        type="submit"
                        className="btn #4dd0e1 cyan lighten-2 waves-effect waves-light">
                            Add to Profile
                        <i className="material-icons right">send</i>
                    </button>
                </form> 
            </div>
        </>
        )
    }
}

export default AddJournalPage;