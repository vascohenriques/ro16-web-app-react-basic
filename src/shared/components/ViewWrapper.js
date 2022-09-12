import React from "react";
import styled from "styled-components";
const Wrapper = {
  Container: styled.div``,
  TitleBar: styled.div`
    display: flex;
    z-index: 10;
    background: ${({ theme }) => theme.viewWrapper.titleBar.background};
    border-bottom: solid 1px ${({ theme }) => theme.viewWrapper.titleBar.edge};
    box-shadow: 0px 2px 15px -5px ${({ theme }) => theme.viewWrapper.titleBar.shadow};
  `,
  Title: styled.h2`
    padding: 16px;
  `,
  WidgetContainer: styled.div`
    margin: auto 15px auto auto;
  `,
};
const ViewWrapper = ({ titleText, children, widgets }) => {
  return (
    <Wrapper.Container>
      <Wrapper.TitleBar>
        <Wrapper.Title>{titleText}</Wrapper.Title>
        {widgets ? (
          <Wrapper.WidgetContainer>{widgets}</Wrapper.WidgetContainer>
        ) : null}
      </Wrapper.TitleBar>
      {children}
    </Wrapper.Container>
  );
};

export default ViewWrapper;
