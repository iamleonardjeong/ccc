import React from 'react';
import styled from 'styled-components';

const CreatorWrap = styled.div`
  @media screen and (min-width: 1600px) {
    height: 520px;
  }
  @media screen and (max-width: 1600px) {
    height: 400px;
  }
  @media screen and (max-width: 1320px) {
    height: 320px;
  }
  width: 100%;
  background: #a4193d;
  min-width: calc(25% - 1rem);
  max-width: calc(20% - 1rem);
  margin: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;

  h1 {
    @media screen and (min-width: 1600px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 1600px) {
      font-size: 1.8rem;
    }
    @media screen and (max-width: 1320px) {
      font-size: 1.4rem;
    }
    /* font-size: 2rem; */
    color: white;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  }
`;

const Background = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Creator = ({ name, portrait }) => {
  return (
    <CreatorWrap>
      <h1>{name}</h1>
      <Background>
        <img src={portrait} alt="" />
      </Background>
    </CreatorWrap>
  );
};

export default Creator;
