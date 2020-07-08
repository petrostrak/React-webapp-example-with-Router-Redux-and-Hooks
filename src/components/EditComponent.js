import React from 'react';

const EditComponent = (props) => (
    <div>
        Editing the expenses with id of {props.match.params.id} 
    </div>
);

export default EditComponent;