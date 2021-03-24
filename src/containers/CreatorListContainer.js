import React from 'react';
import CreatorList from '../components/CreatorList';
import { useSelector } from 'react-redux';

const CreatorListContainer = () => {
  const creators = useSelector((state) => state.creator);
  console.log(creators);
  return (
    <>
      <CreatorList creators={creators} />
    </>
  );
};

export default CreatorListContainer;
