import React, { useState } from 'react';
import StartDisplay from './StartDisplay';
import EventCard from './EventCard';
import event1 from '../resource/event1.jpeg';
import event2 from '../resource/event2.jpeg';
import event3 from '../resource/event3.jpeg';
import event4 from '../resource/event4.png';
import event5 from '../resource/event5.jpeg';
import UploadForm from './UploadForm';

function Home() {
    const [display, setDisplay] = useState(true);
    const [showForm, setShowForm] = useState(false)
    const [eventName, setEventName] = useState("")
    return (
        <div className='home'>
            <StartDisplay display={display} setDisplay={setDisplay} />
            {!display && !showForm ? (
                <>
                    <EventCard
                        eventImg={event1}
                        eventName={'Concurso De Pinture'}
                        eventDescrtiption={
                            'Express your creativity on canvas in our thrilling painting competition where imagination meets artistry!'
                        }
                        number={"01"}
                        setForm={setShowForm}
                        setEventName={setEventName}
                    />
                    <EventCard
                        eventImg={event2}
                        eventName={'Certamen Athleticum'}
                        eventDescrtiption={
                            'Join us for an exhilarating athletic competition where speed, strength, and skill converge in a test of champions.'
                        }
                        number={"02"}
                        setForm={setShowForm}
                        setEventName={setEventName}
                        know={true}
                    />
                    <EventCard
                        eventImg={event3}
                        eventName={'गीत स्पर्धा'}
                        eventDescrtiption={
                            'Unleash your vocal prowess in our electrifying singing competition, where voices soar and talent shines!'
                        }
                        number={"03"}
                        setForm={setShowForm}
                        setEventName={setEventName}
                    />
                    <EventCard
                        eventImg={event4}
                        eventName={'काव्य स्पर्धा'}
                        eventDescrtiption={
                            'Unleash your poetic talent in our poetic competition, where words flow beautifully and creativity knows no bounds!'
                        }
                        number={"04"}
                        setForm={setShowForm}
                        setEventName={setEventName}
                    />
                    <EventCard
                        eventImg={event5}
                        eventName={'Tip Tap Toe'}
                        eventDescrtiption={
                            'Unleash your energy and showcase your moves in our dynamic dance competition, where rhythm and talent collide!'
                        }
                        number={"05"}
                        setForm={setShowForm}
                        setEventName={setEventName}
                    />
                </>
            ) : (
                <></>
            )}
            {showForm ? <UploadForm eventName={eventName} /> : <></>}
        </div>
    );
}

export default Home;
