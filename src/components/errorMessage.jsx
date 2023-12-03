
import React from "react";

export default function errorMessage({ errorMessage, onClose }) {
    if(!errorMessage) {
        return null;
    }
    
    return (
        <div className="bg-red-900">
            <button onClick={onClose}>X</button>
            <p>{errorMessage}</p>
        </div>
    )
}