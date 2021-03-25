import React, { useCallback } from 'react';
import CreatorList from '../components/CreatorList';
import { useSelector, useDispatch } from 'react-redux';
import { selectAll, selectMusician, selectDeveloper } from '../modules/creator';

const CreatorListContainer = () => {
  const creators = useSelector((state) => state.creator);

  // dispatch
  const dispatch = useDispatch();

  const onSelectAll = useCallback(() => dispatch(selectAll()), [dispatch]);
  const onSelectMusician = useCallback(() => dispatch(selectMusician()), [
    dispatch,
  ]);
  const onSelectDeveloper = useCallback(() => dispatch(selectDeveloper()), [
    dispatch,
  ]);

  return (
    <>
      <CreatorList
        creators={creators}
        onSelectAll={onSelectAll}
        onSelectMusician={onSelectMusician}
        onSelectDeveloper={onSelectDeveloper}
      />
    </>
  );
};

export default CreatorListContainer;
