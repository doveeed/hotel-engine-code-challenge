 import React from 'react';

  const ResultsSelector = ({value, options, labelText, id, className = '', kind = 'list', onChange}) => {
      
      const handleChange = (newValue) => {
          if (onChange) {
            onChange(newValue)
          }
      }

      const handleSelectionMade = (event) => {
        handleChange(event.target.value)
      }

      const handleListItemClick = (value) => {
        handleChange(value);
      }

      const handleRemoveLanguageButtonClick = (event) => {
        event.stopPropagation();
        handleChange(null);
      }

      return ( kind === 'select' ? (
        <div className={`results-selector ${className}`}>
                <label className="results-selector-label" htmlFor={id}>{labelText}</label>
                <select className="results-selector-input" id={id} value={value} onChange={handleSelectionMade}>
                    { options.map(({itemValue, itemText}) => (<option key={itemValue} value={itemValue}>{itemText}</option>))}
                </select>
            </div>
      ) : (<ul className={`results-selector-list ${className}`}>
            <h3>{labelText}</h3>
            { options.map(({itemValue, itemText}) => (
              <li key={itemValue} className={`results-selector-list-item ${itemValue === value ? 'selected' : ''}`} onClick={() => {handleListItemClick(itemValue)}}>{itemText}{itemValue === value && (<button onClick={handleRemoveLanguageButtonClick}>x</button>)}</li>
            ))}
          </ul>)
        );
  }
  
  export default ResultsSelector;