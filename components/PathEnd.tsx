import React from 'react'
import BodyText from './BodyText';
import FooterPath from './FooterPath';
import Button from './Button';

type Props = {
  body: string;
  description: string;
  back: string;
  next: string;
 
}

function PathEnd({ body, description, back, next}: Props) {
  return (
    
    <div className='pb-20 bg-gray-50 min-w-full h-full text-center'>
      
      <BodyText body={body}/>
      <Button buttonText="Exit Course" url="https://obione.io"/>
      <FooterPath next="" back={back} />
    </div>
  )
}

export default PathEnd
