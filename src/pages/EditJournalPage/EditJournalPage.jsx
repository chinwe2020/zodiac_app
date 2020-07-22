import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditJournalPage extends Component{
    state = {
        formData: this.props.location.state.journal
    };

    formRef = React.createRef();

    handleJournalSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateJournal(this.state.formData)
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
        });
      };

    render(){
        return(
            <>
            <div className="journalPage">
                <h1>Edit Journal Entry</h1>
                <h3>Today my horoscope:</h3>
                <form className="journal_entry" ref={this.formRef} onSubmit={this.handleJournalSubmit}>
                    <textarea name="journal" id="entry" cols="30" rows="10" type="text" 
                        value={this.state.formData.journal}
                        onChange={this.handleChange}/>
                    <button
                        type="submit"
                        className="btn #4dd0e1 cyan lighten-2 waves-effect waves-light">
                            Add Edit to Profile
                        <i className="material-icons right">send</i>
                    </button>
                    <Link 
                            className="btn red"
                            to={{
                                pathname: '/profile'
                            }}
                        ><i className="material-icons left">undo</i>
                        Cancel
                        </Link>           
                </form> 
            </div>
        </>
        )
    }
}

export default EditJournalPage;