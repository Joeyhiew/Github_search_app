import React from 'react';
import { checkNull } from '../../functions/functions';
import '../style.css';

  const Cards = ({ data, attr }) => {

    return (
      <div>
        <center><h1>{attr}</h1></center>
        {checkNull(data)?
          <p className="noDataDiv">No {attr}</p>
          :
          <div>
            
            {data.map((info) => (
              <div className="card">
                <div class="card-body">
                  {attr=='Repositories'?
                    <h5 className="card-title">{info.name}</h5>
                    :
                    null
                  }
                  {attr=='Organisations'?
                    <h5 className="card-title">{info.login}</h5>
                    :
                    null
                  }
                </div>
              </div>
            ))}
          </div>
          }
  
      </div>
    )
  };

  export default Cards;