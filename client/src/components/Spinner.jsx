import React from 'react';

export default function spinner() {
  return (
    <div className="load__icon-wrap">
      <svg className="load__icon" style={{
        margin: "0 auto",
        display: "block",
        marginTop: "20px",
        marginBottom: "20px"
      }}>
        <path fill="#9bcb3b" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
      </svg>
    </div>
  )
}