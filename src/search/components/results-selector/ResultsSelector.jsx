 import React from 'react';

  const ResultsSelector = ({value, options, labelText, id, className = '', kind = 'list'}) => {
      
      const handleChange = (event) => {
          // TODO: add onChange handler
      }

      const handleListItemClick = (value) => {

      }

      return ( kind === 'select' ? (
        <div className={`results-selector ${className}`}>
                <label className="results-selector-label" for={id}>{labelText}</label>
                <select className="results-selector-input" id={id} value={value} onChange={handleChange}>
                    { options.map(({value, text}) => (<option value={value}>{text}</option>))}
                </select>
            </div>
      ) : (<ul className={`results-selector-list ${className}`}>
            <lh>{labelText}</lh>
            { options.map(({value, text}) => (<li onClick={() => {handleListItemClick(value)}}>{text}</li>))}
          </ul>)
        );
  }
  
  export default ResultsSelector;