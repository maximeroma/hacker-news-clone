import React from 'react';

export default ({ onClick, className, children }) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
}