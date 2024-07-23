import React from 'react'

function EventCard({ eventImg, eventName, eventDescrtiption, number }) {
    return (
        <div class="card skew glow">
            <div class="content">
                <h2>{number}</h2>
                <img src={eventImg} className='event-logo' />
                <h3>{eventName}</h3>
                <p>{eventDescrtiption}</p>
                <button class="ui-btn">
                    <span>
                        Know More
                    </span>
                </button>
            </div>
        </div>
    )
}

export default EventCard