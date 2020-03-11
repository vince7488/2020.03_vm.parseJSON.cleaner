import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const testData = [
  {
    "firstName": "Jerry",
    "phone": "555-355-5555",
    "email": "jerry@email.com"
  },
  {
    "firstName": null,
    "lastName": "Dave Flippin",
    "phone": "555-226-5555",
    "email": "null"
  },
  {
    "firstName": "John",
    "lastName": "Stalin",
    "phone": "555-355-5555",
    "email": "john@email.com"
  },
  {
    "firstName": "George",
    "lastName": "Harrold",
    "phone": "555-555-5555",
    "email": "george@email.com"
  },
  {
    "phone": "555-555-5555",
    "email": "george@email.com"
  },
  {
    "firstName": "Courtney McKenzie",
    "lastName": "",
    "phone": "555-545-5555",
    "email": "ringo@email"
  },
  {
    "firstName": "Paul",
    "lastName": "Allan",
    "phone": "555-255-5555",
    "email": "paul@email.com"
  },
  {
    "firstName": "Jim",
    "lastName": "Onfire"
  },
  {
    "lastName": "Alberston",
    "phone": "555-255-5555",
    "email": "name.a@email.com"
  },
  {
    "firstName": "Sterling",
    "lastName": "Loggins",
    "email": "johnsemail.com"
  },
  {
    "firstName": "Ringo",
    "lastName": "Starter",
    "phone": "555-455-5555",
    "email": "ringo@email.com"
  },
  {
    "firstName": "Mary",
    "lastName": "Fallen",
    "phone": 5551555555,
    "email": "mary@email.com"
  }
];

//use JSON.stringify to convert it to json string
const jsonString = JSON.stringify(testData);

const jsonObject = JSON.parse(jsonString);

class OutputObj extends React.Component {

  render() {
    const jObjects = [];

    jsonObject.forEach(obj => {
      Object.entries(obj).forEach(([key,value]) => {
        jObjects.push(
          <div key={Math.floor(Math.random() * 9999999 + 1)}><strong>{key}</strong>:{value}</div>
        )
        console.log(`${key} : ${value}`);
      });
      console.log(`********************`)
    });

    return(
      <>
        <h3>JSON Objects:</h3>
        {jObjects}
      </>
    );

  }
}


function JsonParser() {
 
  console.log(jsonString);

  return (
    <>
      <p>JSON String: {jsonString}</p>

      <div style={{margin: '3em auto',}}>
        <OutputObj />
      </div>
    </>
  );

}

/* Start Rendering */

ReactDOM.render(<JsonParser />, document.getElementById("app"));