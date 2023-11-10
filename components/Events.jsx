import React from 'react'
import Image from 'next/image'

const Events = () => {
  return (
    <div className="upcoming_events mb-20 mx-16">
        <div className="event_detail text-blue">
            <div className="event_topic ">
                <h1 className="text-4xl font-extrabold">Upcoming Events</h1>
            </div>

            <div className="event_buttons">
                <button type="button" className="previous button">&lt;</button>
                <button type="button" className="next button">&gt;</button>
            </div>
        </div>

        <div className="event_cards flex justify-around align-baseline">
            <div className="event_image ">
                <Image 
                    src="https://drive.google.com/uc?export=view&id=1llxZY8bG3-XYhgJHR2fd8YtijLFERcoJ" 
                    alt="" 
                    width={350}
                    height={200}
                />
            </div>

            <div className="event_image">
                <Image src="https://drive.google.com/uc?export=view&id=1Mt1dJCdmrBHkSuRKezl6Qp3jIB21GNdX" 
                alt="" 
                width={350}
                height={200}
                />
            </div>

            <div className="event_image">
                <Image src="https://drive.google.com/uc?export=view&id=1bzM_0p3IzRzuPpegXvDXMv1jLbzQIkbT" 
                alt="" 
                width={350}
                height={200}
                />
            </div>

            <div className="event_image">
                <Image src="https://drive.google.com/uc?export=view&id=16I31qBNpZdxrV9kIHcsfmRA-U89_kp7y" 
                alt="" 
                width={350}
                height={200}
                />
            </div>

        </div>

    </div>
  )
}

export default Events