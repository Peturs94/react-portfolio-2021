import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id='projects'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/sparhus.png'
              text='Sparhús.is er vefsíða sem ég hannaði og gaf út með wix.com. Hægt er að skoða og panta einingarhús í öllum stærðum og gerðum'
              label='Wix.com'
              href='https://www.sparhus.is'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/loasnest.png'
              text='Lóasnest.is'
              label='Wix.com'
              href='https://www.loasnest.is'
            />
            <CardItem
              src='images/githubtopo.png'
              text='Github portfolio '
              label='Adrenaline'
              href='https://www.github.com/peturs94'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
