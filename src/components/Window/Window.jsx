import React from 'react';

import { 
    WindowLeft,
    WindowRight,
    WindowContainer,
    ButtonContainer,
    Button
} from '../Styled/Styled';

const Window = ({ openWindow, toggleWindow, playerName, children, purple }) => {
    return (
      <div style={{ height: '260px' }}>
        <h2>{playerName}</h2>
        <WindowContainer>
          <WindowLeft purple={purple} openWindow={openWindow}></WindowLeft>
          <WindowRight purple={purple} openWindow={openWindow}></WindowRight>
          <div style={{position: 'absolute', top: '0'}}>
          {children}
          </div>
          <ButtonContainer purple={purple}>
            <Button onClick={toggleWindow}>
              { openWindow ? 'Open' : 'Close' }
            </Button>
          </ButtonContainer>
        </WindowContainer>
      </div>
    );
}

export default Window;