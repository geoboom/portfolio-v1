import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export class AboutSection extends Component {
  render() {
    return (
      <div
        style={{
          // paddingTop: 50,
          height: 1500,
          backgroundColor: 'grey',
        }}
      >
        <div style={{ textAlign: 'center', backgroundColor: 'red' }}>
          <h1 style={{ margin: 0, color: 'white' }}>
            SECTION UNDER CONSTRUCTION
          </h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h1 style={{ margin: 10 }}>About me</h1>
          <div
            style={{
              backgroundColor: 'black',
              width: '10%',
              height: 3,
            }}
          />
        </div>
      </div>
    );
  }
}

export default AboutSection;
