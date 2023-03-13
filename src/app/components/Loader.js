import React from 'react';

export default ({ style }) => (
    <div className="iLoader" style={style}>
        <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
