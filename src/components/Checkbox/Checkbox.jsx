// src/components/Checkbox/Checkbox.jsx
// Theme-able Checkbox Control Component built with Styled Components.
// Created: 2026-07-30

import React from 'react';
import styled, { css } from 'styled-components';

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledCheckmark = styled.div`
  width: 18px;
  height: 18px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 2px solid
    ${({ checked, theme }) => (checked ? theme.colors.primary : theme.colors.border)};
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary : theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  ${HiddenCheckbox}:focus-visible + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  &::after {
    content: '';
    width: 5px;
    height: 9px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: opacity 0.15s ease;
  }
`;

const LabelText = styled.span`
  font-weight: 500;
`;

export const Checkbox = ({ checked, onChange, label, disabled, className }) => {
  return (
    <CheckboxContainer disabled={disabled} className={className}>
      <HiddenCheckbox
        checked={checked}
        disabled={disabled}
        onChange={(e) => !disabled && onChange && onChange(e.target.checked)}
      />
      <StyledCheckmark checked={checked} />
      {label && <LabelText>{label}</LabelText>}
    </CheckboxContainer>
  );
};
