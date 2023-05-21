import React from 'react'
import './Users.css'


const User = ({ name, }) => {
    let Clicked = false;
    function handleClick(){
            
            Clicked = !Clicked;
            let output = Clicked ? "active " : "disactive"; 
            console.log(output);
           
        }

     

    return (
        <div className='users'>
            <div className='name_block'>
                    <p className='name'onClick={handleClick}>
                        {name}
                        </p>
            </div>
        </div>
    )
}

export default User