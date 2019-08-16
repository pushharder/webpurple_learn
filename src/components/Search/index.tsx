import React, { useState, createRef } from 'react';
import { getQuery } from '../../utils/search';
import { SearchHit } from '../../types/Hits';
import Input from './input';
import useClickOutside from './ClickOutside';
import HitsWrapper from './HitsWrapper';
import { StyledForm } from './styles';

const Search: React.FC = () => {
  const ref = createRef<HTMLFormElement>();
  const [query, setQuery] = useState(getQuery(''))
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [focus, setFocus] = useState(false);  

  useClickOutside(ref, () => setFocus(false))

  const shouldShowHits = query.query.length > 0 && hits.length > 0 && focus;

  return (
    <StyledForm { ...{ focus, ref } }>
      <Input { ...{ query, setQuery, setIsSearching, setHits, setFocus, focus } } />
      {shouldShowHits && <HitsWrapper { ...{ hits } } />}
    </StyledForm>
  )
}

export default Search;