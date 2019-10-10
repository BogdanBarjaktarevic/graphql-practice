import React, {useState} from 'react';

const Collection = ({title, items}) => {

    const [itemList, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


    const renderItems = () => {
        return items.map(item => {
            return <p key={item.id}>{item.name}</p>
        })
    }


    const handleTitle = (items) => {
        setItems(items);
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <h2 onClick={() => handleTitle(items)}>{title}</h2>
            <div>{itemList.length > 0 && isOpen ? renderItems() : null}</div>
        </div>
    );
};

export default Collection;