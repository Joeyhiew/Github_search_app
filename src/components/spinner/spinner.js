import React from 'react';
import { Spinner } from 'react-bootstrap';

const Spin =({loading})=> {
  return (

    <div>
      {loading?
          <div style={{ marginTop : '60px' }} className="spinnerDiv">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
      
          />
          <Spinner animation="border" role="status" className="spinner"></Spinner>
          </div>
          :
          null
      }
    </div>

    );
}

export default Spin;