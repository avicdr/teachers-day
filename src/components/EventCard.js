import React from 'react'

function EventCard({ eventImg, eventName, eventDescrtiption, number, setForm, setEventName, know }) {
    return (
        <div class="card skew glow">
            <div class="content">
                <h2>{number}</h2>
                <img src={eventImg} className='event-logo' />
                <h3>{eventName}</h3>
                <p>{eventDescrtiption}</p>
                <a href='https://teachersdaysubmission-79jy.onrender.com'>
                {!know?<button class="ui-btn" onClick={() => {
                    setEventName(eventName)
                }}>
                    Know More
                </button>:<></>}
        </a>
            </div>
        </div>
    )
}

export default EventCard
