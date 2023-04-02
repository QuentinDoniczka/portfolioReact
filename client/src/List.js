import React from "react";
import './List.css';

const List = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <ul style={{ listStyle: 'none', textAlign: 'left', padding: 0 }}>
                {props.items.map((item, index) => (
                    <li key={index} className="list-item">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;