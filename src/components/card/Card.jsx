import React from 'react'
import './card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ backgroundImg, title, year='somthing', overlayTitle, link }) => {
    const navigate = useNavigate();
    const navigateTo = () => {
        if (link) {
            navigate(link);
        }
    }
    return (
        <div className='card'
            title={year}
            onClick={navigateTo}
        >
            <div className='cardbody contentCenter'
            style={{
                backgroundImage: `url(${backgroundImg})`,
            }}
            >
                {overlayTitle}
            </div>
            <div className='cardFooter'>
                {title}
            </div>
        </div>
    )
}

export default Card