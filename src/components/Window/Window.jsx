import React from 'react';

import { 
    WindowLeft,
    WindowRight,
    WindowContainer,
    ButtonContainer,
    Button
} from '../Styled/Styled';

const Window = ({ openWindow, toggleWindow, children }) => {
    return (
        <WindowContainer>
          <WindowLeft openWindow={openWindow}></WindowLeft>
          <WindowRight openWindow={openWindow}></WindowRight>
          <div style={{position: 'absolute', top: '0'}}>
          {children}
          </div>
          <ButtonContainer>
            <Button onClick={toggleWindow}>
              { openWindow ? 'Open' : 'Close' }
            </Button>
          </ButtonContainer>
        </WindowContainer>
    );
}

export default Window;