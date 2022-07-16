import React from 'react';
import "./preview-collection.styles.scss"

const CollectionPreview= ({title,items}) => {
    return (
    <div className="collection-preview">
        <h1 className='title'>Title</h1>
        <div className="preview">
            {
                items.map(item=(
                    <div>{item.name}</div>
                ))
            }
        </div>
    </div> );
}

export default CollectionPreview;