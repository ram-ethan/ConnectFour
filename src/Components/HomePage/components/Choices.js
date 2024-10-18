import React from 'react'

const Choices = (props) => {
    return (
        <div className='ch1' style={{ backgroundColor: `${props.bg}` }}>
            <div className='ch2' style={{ borderRadius: "50%", border: `5px solid ${props.bcolor}` }}>
                <img src={props.image} alt="" />
            </div>
            <div className='ch3'>
                <h6 className='ch4'>{props.content}</h6>
                <h6 className='ch5'>{props.name}</h6>
            </div>
        </div>
    )
}

export default Choices
