// src/components/Toggle/Toggle.jsx
// Theme-able Toggle Switch Component built with Styled Components.
// Created: 2026-07-30

import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  user-select: none;
  width: 100%;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Label = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Description = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Track = styled.div`
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 9999px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary : theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Thumb = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? '22px' : '2px')};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Toggle = ({ checked, onChange, label, description, disabled }) => {
  return (
    <Container disabled={disabled}>
      {(label || description) && (
        <TextGroup>
          {label && <Label>{label}</Label>}
          {description && <Description>{description}</Description>}
        </TextGroup>
      )}

      <HiddenInput
        checked={checked}
        disabled={disabled}
        onChange={(e) => !disabled && onChange && onChange(e.target.checked)}
      />
      <Track checked={checked}>
        <Thumb checked={checked} />
      </Track>
    </Container>
  );
};
