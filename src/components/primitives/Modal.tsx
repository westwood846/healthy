import React, { HTMLAttributes, useState } from "react";
import BaseModal from "react-modal";
import styled from "styled-components";

BaseModal.setAppElement("#root");

const StyledModal = styled(BaseModal)`
  margin: 1rem;
  background-color: white;
  border: 1px solid black;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 1rem;
  border-bottom: 1px solid grey;
  background-color: lightgrey;
`;

const Heading = styled.h1`
  margin: 0;
`;

const Body = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

export interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  children,
}) => (
  <StyledModal isOpen={isOpen} onRequestClose={onClose} contentLabel={title}>
    <Header>
      <Heading>{title}</Heading>
      <button onClick={onClose}>close</button>
    </Header>
    <Body>{children}</Body>
  </StyledModal>
);
