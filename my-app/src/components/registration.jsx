import React from 'react';

export const Registration = () => {
  return (
    <div id="registration">
      <h1 className="center-text">Registration Formula</h1>

      <div className="rounded-box card1 center-block">
        <label htmlFor="Tname">Team's Name</label>
        <input
          type="text"
          id="Tname"
          name="Tname"
          placeholder="Enter a Name"
          className="font-size"
          style={{ width: '569.46px', height: 'auto', maxHeight: '260.43px' }}
        />
      </div>

      <div className="layout">
        <div className="rounded-box1 card center-block1 parent">
          <h2 className="center-text black">LEADER</h2>
          <label htmlFor="Fname">Full Name</label>
          <input
            type="text"
            id="Fname"
            name="Fname"
            placeholder="Your Name"
            className="input child-fill"
          />
          <label htmlFor="Gmail">Gmail</label>
          <input
            type="text"
            id="Gmail"
            name="Gmail"
            placeholder="Address"
            className="input child-fill"
          />
          <label htmlFor="Add">Anything to Add</label>
          <input
            type="text"
            id="Add"
            name="Add"
            placeholder="Add"
            className="input child-fill"
          />
        </div>

        <div className="rounded-box2 card center-block1 parent">
          <h2 className="center-text">Member 1</h2>
          <label htmlFor="Fname">Full Name</label>
          <input
            type="text"
            id="Fname"
            name="Fname"
            placeholder="Your Name"
            className="input child-fill"
          />
          <label htmlFor="Gmail">Gmail</label>
          <input
            type="text"
            id="Gmail"
            name="Gmail"
            placeholder="Address"
            className="input child-fill"
          />
          <label htmlFor="Add">Anything to Add</label>
          <input
            type="text"
            id="Add"
            name="Add"
            placeholder="Add"
            className="input child-fill"
          />
        </div>

        <div className="rounded-box3 card center-block1 parent">
          <h2 className="center-text">Member 2</h2>
          <label htmlFor="Fname">Full Name</label>
          <input
            type="text"
            id="Fname"
            name="Fname"
            placeholder="Your Name"
            className="input child-fill"
          />
          <label htmlFor="Gmail">Gmail</label>
          <input
            type="text"
            id="Gmail"
            name="Gmail"
            placeholder="Address"
            className="input child-fill"
          />
          <label htmlFor="Add">Anything to Add</label>
          <input
            type="text"
            id="Add"
            name="Add"
            placeholder="Add"
            className="input child-fill"
          />
        </div>

        <div className="rounded-box4 card center-block1 parent">
          <h2 className="center-text">Member 3</h2>
          <label htmlFor="Fname">Full Name</label>
          <input
            type="text"
            id="Fname"
            name="Fname"
            placeholder="Your Name"
            className="input child-fill"
          />
          <label htmlFor="Gmail">Gmail</label>
          <input
            type="text"
            id="Gmail"
            name="Gmail"
            placeholder="Address"
            className="input child-fill"
          />
          <label htmlFor="Add">Anything to Add</label>
          <input
            type="text"
            id="Add"
            name="Add"
            placeholder="Add"
            className="input child-fill"
          />
        </div>
      </div>

      <div className="center-block2">
        <input type="submit" value="GO" />
      </div>
    </div>
  );
};


