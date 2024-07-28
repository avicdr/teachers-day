import React from 'react'

function EventCard({ eventImg, eventName, eventDescrtiption, number, setForm, setEventName }) {
    return (
        <div class="card skew glow">
            <div class="content">
                <h2>{number}</h2>
                <img src={eventImg} className='event-logo' />
                <h3>{eventName}</h3>
                <p>{eventDescrtiption}</p>
                <button class="ui-btn" onClick={() => {
                    setEventName(eventName)
                    setForm(true)
                }}>
                    Know More
                </button>
            </div>
        </div>
    )
}

export default EventCard