import React from 'react';
import styled from 'styled-components';
import Creator from './Creator';

const Wrapper = styled.div`
  width: calc(100% - 12rem);
  padding: 8rem 6rem 3rem 6rem;
`;

const BodyTitle = styled.h1`
  font-size: 3.2rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  /* animation-duration: 2s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      background: black;
      color: white;
    }

    to {
      background: white;
      color: black;
    }
  } */
`;

const CreatorWrap = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const CreatorList = ({ creators }) => {
  return (
    <Wrapper>
      <BodyTitle>Creator Curation for Creator</BodyTitle>
      <CreatorWrap>
        {creators.map((creator) => (
          <Creator name={creator.name} portrait={creator.portrait} />
        ))}
      </CreatorWrap>
    </Wrapper>
  );
};

export default CreatorList;
