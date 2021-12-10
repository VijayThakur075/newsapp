import React from 'react'
import propTypes from "prop-types"
 
const Bookmark=({name})=> (
    <svg className={`icon-icon-${name}`}>
        <use  xlinkHref={`#${name}`}/>
                </svg>
)
    