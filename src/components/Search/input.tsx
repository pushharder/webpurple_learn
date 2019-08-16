import React, { useEffect } from 'react';
import { getQuery, searchDelay } from '../../utils/search';
import useDebounce from './Debounce';
import { searchClient } from '../../utils/dynamicaNavlSearch';
import SetSearchQuery from '../../types/SetSearchQuery';
import SearchQuery from '../../types/SearchQuery';
import { SearchHit } from '../../types/Hits';
import SearchIcon from './SearchIcon';
import { Label, StyledInput } from './styles';

const onChange = (
  setQuery: SetSearchQuery,
  setHits: React.Dispatch<React.SetStateAction<SearchHit[]>>,
) => ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
  setQuery(getQuery(value));

  if (!value) {
    setHits([])
  }
}

export interface Focus {
  focus: boolean;
}

interface Props extends Focus {
  setQuery: SetSearchQuery;
  query: SearchQuery;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setHits: React.Dispatch<React.SetStateAction<SearchHit[]>>;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input: React.FC<Props> = ({ setQuery, query, setIsSearching, setHits, setFocus, focus }) => {
  const { query: value } = query;
  const debouncedValue = useDebounce(value, searchDelay);

  useEffect(() => {
    if (debouncedValue) {
      setIsSearching(true);
      
      searchClient.search([query])
      .then(res => {
        setIsSearching(false);
        setHits(res.results[0].hits);
      })
    }
  },
  [debouncedValue])

  return (
    <Label>
      <SearchIcon />
      <StyledInput 
        placeholder="Search..." 
        onChange={onChange(setQuery, setHits)} 
        onFocus={() => setFocus(true)} 
        { ...{ value, focus } } />
    </Label>
  )
}

export default Input;