import React from 'react';
import './Total.css'

const Total = () => (
    <div className="Total-wrap">
        <div className="label">등급 현황</div>
        <div className="block">
            <div className="count" value="130">130</div>
            <div className="grade-label">A등급</div>
        </div>
        <div className="block">
            <div className="count" value="130">30</div>
            <div className="grade-label">B등급</div>
        </div>
        <div className="block">
            <div className="count" value="130" style={{color:"red"}}>10</div>
            <div className="grade-label" >C등급</div>
        </div>
    </div>
);

export default Total;
