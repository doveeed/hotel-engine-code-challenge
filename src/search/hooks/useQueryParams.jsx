import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export const useQueryParams = () => {
    const [paramaters, setParamaters] = useState({});
    const { search } = useLocation(); 
    
  useEffect(() => {
    const params = queryString.parse(search);
    setParamaters(params)
  },[search]);

  
  return paramaters;
}