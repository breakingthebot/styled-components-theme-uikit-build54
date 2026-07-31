// src/components/Accordion/Accordion.jsx
// Theme-able Accordion Component built with Styled Components.
// Created: 2026-07-30

import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const ItemContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  ${({ isOpen, theme }) =>
    isOpen &&
    css`
      border-color: ${theme.colors.primary};
      box-shadow: ${theme.shadows.sm};
    `}
`;

const Trigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceElevated};
  }
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Chevron = styled.span`
  font-size: 0.75rem;
  color: ${({ isOpen, theme }) => (isOpen ? theme.colors.primary : theme.colors.textMuted)};
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s ease;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: ${({ isOpen }) => (isOpen ? '1fr' : '0fr')};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ContentInner = styled.div`
  overflow: hidden;
`;

const Body = styled.div`
  padding: 0 20px 20px 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  line-height: 1.6;
  border-top: 1px solid
    ${({ isOpen, theme }) => (isOpen ? theme.colors.border : 'transparent')};
  padding-top: ${({ isOpen }) => (isOpen ? '16px' : '0')};
  transition: border-color 0.2s ease, padding-top 0.2s ease;
`;

export const Accordion = ({ items = [], allowMultiple = false, className }) => {
  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleIndex = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <Container className={className}>
      {items.map((item, idx) => {
        const isOpen = openIndexes.includes(idx);
        return (
          <ItemContainer key={idx} isOpen={isOpen}>
            <Trigger onClick={() => toggleIndex(idx)} aria-expanded={isOpen}>
              <TitleGroup>
                {item.icon && <span>{item.icon}</span>}
                <span>{item.title}</span>
              </TitleGroup>
              <Chevron isOpen={isOpen}>▼</Chevron>
            </Trigger>

            <ContentWrapper isOpen={isOpen}>
              <ContentInner>
                <Body isOpen={isOpen}>{item.content}</Body>
              </ContentInner>
            </ContentWrapper>
          </ItemContainer>
        );
      })}
    </Container>
  );
};
