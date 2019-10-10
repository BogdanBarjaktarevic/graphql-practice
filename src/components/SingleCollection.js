import React from 'react';

const SingleCollection = ({items}) => {

    const renderItems = () => {
        return items.map(item => {
            return <p key={item.id}>{item.name}</p>
        })
    }

    return (
        <div>
            {renderItems()}
        </div>
    );
};

export default SingleCollection;