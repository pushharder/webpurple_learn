import React from 'react';
import { SearchHit } from '../../types/Hits';
import { HitLink, HitHeader, HitExcerpt } from './styles';

const Hit: React.FC<SearchHit> = ({ title, slug, excerpt }) => {
  return (
    <HitLink to={slug}>
      <HitHeader>{title}</HitHeader>
      <HitExcerpt>{excerpt}</HitExcerpt>
    </HitLink>
  )
}

export default Hit;