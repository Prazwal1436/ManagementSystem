import React from 'react'

export default function Alert({ status, message }) {
    return (
        <div className={` text-${status}`} role="alert">
            {message}
        </div>
    )
}