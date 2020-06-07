import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Warning = ({ error }) => {
    return(
        <div>
            {error?
                <Alert variant='warning' className='alertDiv'>
                    User not found!
                </Alert>
                :
                null  
            }
        </div>
    )
}
export default Warning;