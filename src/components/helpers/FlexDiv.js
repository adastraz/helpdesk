import React from 'react'
import { FlexDivS } from '../../styles/helpers'

//passed in class for specific styles @media queries using props.class
const FlexDiv = props => {
    return (
        <FlexDivS className={props.class}>
            {props.children}
        </FlexDivS>
    )
}

export default FlexDiv