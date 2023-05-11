/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

export const AlertMessage = () => {
  return (
    <StyledAlertMessage>
      <h2>Nothing to do right now! Coffee time! </h2>
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_7HVK9ugFmX.json" />
    </StyledAlertMessage>

  )
}

const StyledAlertMessage = styled.div`
display:flex;
align-items: center;
flex-direction: column;

h2 {
  text-align:center;
}

`