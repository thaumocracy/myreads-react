import React from 'react';

const ShelfChanger = (props) => {
    const { updateShelf , shelf } = props;
    return (
        <div className="changer__container">
            <select value={shelf} className="changer" onChange={(event => updateShelf(event.target.value))}>
                <option value="-1" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
};


export default ShelfChanger;
