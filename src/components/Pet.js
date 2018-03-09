import React from 'react';
import Title from './Title';
import Button from './Button';


export default function Pet(props){
  let details = <ul className='detail-list'>
  <li>Sex: {props.info.sex}</li>
   <li>Age: {props.info.age}</li>
   <li>Breed: {props.info.breed}</li>
   <li>Story: {props.info.story}</li>
 </ul>

 let noneLeft = <p id='none-left'>{props.info.message}</p>
return (
    <section>
      {props.info.message ? null : <Title animalName={props.info.name} imageURL={props.info.imageURL} imageAlt={props.info.imageDescription} />}
      <main>
        {props.info.message ? noneLeft : details}
      </main>
      <Button buttonText={props.buttonText} onAdoptPet={props.onAdoptPet} />
    </section>
    )
}