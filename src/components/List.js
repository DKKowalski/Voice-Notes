import React from "react";

const List = ({ note }) => {
  return (
    <div>
      <h1>Notes</h1>
      <div>
        {note.map((item) => {
          return (
            <div>
              <h5>{item.title}</h5>
              <p>{item.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
