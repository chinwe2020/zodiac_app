import React from 'react';
import './JournalCard.css';
import { Link } from 'react-router-dom';

function JournalCard({ journal, handleDeleteJournal }) {
    return(
        <>
        <div className="row">
            <div className="col s12 m6">
            <div className="journalcard black">
                <div className="journalcard-content white-text">
                <span className="journalcard-title">{journal.date}</span>
                <hr/>
                <p>{journal.journal}</p>
                <br/>
                <div className="journalcard-action">
                    <button type="submit" className="btn red" onClick={() => handleDeleteJournal(journal._id)}>
                    <i className="material-icons left">delete</i>    
                        Delete
                    </button>
                    <Link
                        className="btn #4dd0e1 cyan white-text"
                        to={{
                            pathname: '/edit',
                            state: {journal}
                        }}
                    ><i className="material-icons left">build</i>
                        Edit 
                    </Link>
            </div>
        </div>
      </div>
    </div>
  </div>
        </>
    ) 
}

export default JournalCard;