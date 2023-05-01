import React from 'react'
import './footer.css';
import fb from '../../assets/social/facebook-white.svg';
import twiter from '../../assets/social/twitter-white.svg';
import insta from '../../assets/social/instagram-white.svg';
import playstore from '../../assets/store/play-store.svg';
import appstore from '../../assets/store/app-store.svg';
import windosstore from '../../assets/store/windows-store.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const labels = [
    'Terms And Condition',
    'Privacy Policy',
    'Collection Statement',
    'Help',
    'Manage Account'
  ];
  return (
    <div className='footer'>
      <div>
        <div className='lables'>
          <div className='label'>
            <Link to={'/'} className='link'>
                  Home
            </Link>
            </div>
          {
            labels.map((label)=>{
              return <div key={label} className='label'>{label}</div>
            })
          }
        </div>
        <p className='copyright'>copyright &#169; 2023 Ragavan. All Rights reserved.</p>
      </div>
      <div className='flex'>
        <div className='socialLogins'>
          <img src={fb} alt="fb"/>
          <img src={twiter} alt="twiter"/>
          <img src={insta} alt="instagram"/>
        </div>
        <div className='stores'>
          <img src={playstore} alt="playstore"/>
          <img src={appstore} alt="appstore"/>
          <img src={windosstore} alt="windosstore"/>
        </div>
      </div>
    </div>
  )
}

export default Footer