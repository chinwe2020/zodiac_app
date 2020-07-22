import React from 'react';
import './ZodiacCard.css'

function ZodiacCard({sign}){
    return(
        <>
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" alt="zodiac" src={sign.image ? sign.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
        </div>
        <div className="card-content">
          <span className="card-title activator white-text text-darken-4"><b>{sign.sunSign}</b><i className="material-icons right">more_vert</i></span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{sign.sunSign}<i className="material-icons right">close</i></span>
            <br/>
            <div><b>Dates:</b> {sign.dates}</div>
            <div><b>Element:</b> {sign.element}</div>
            <div><b>Planet:</b> {sign.planet}</div>
            <hr/>
            <div><b>Strengths:</b> {sign.strengths}</div>
            <br/>
            <div><b>Weaknesses:</b> {sign.weaknesses}</div>
            <br/>
            <div><b>Likes:</b> {sign.likes}</div>
            <br/>
            <div><b>Dislikes:</b> {sign.dislikes}</div>
            <br/>
            <div><b>Compatibility:</b> {sign.compatiblity}</div>
            <br/>
            <div><b>Lucky Numbers:</b> {sign.luckyNumbers}</div>
        </div>
      </div>
      </>
    )
}

export default ZodiacCard;
