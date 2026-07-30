// src/components/Switch/Switch.jsx
// Theme Toggle Switch Component built with Styled Components.
// Created: 2026-07-30

import React from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
`;

const Track = styled.div`
  position: relative;
  width: 52px;
  height: 28px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary : theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Thumb = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? '26px' : '2px')};
  width: 22px;
  height: 22px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const LabelText = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Switch = ({ checked, onChange, label, iconOn = '🌙', iconOff = '☀️' }) => {
  return (
    <SwitchContainer>
      <HiddenInput checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <Track checked={checked}>
        <Thumb checked={checked}>{checked ? iconOn : iconOff}</Thumb>
      </Track>
      {label && <LabelText>{label}</LabelText>}
    </SwitchContainer>
  );
};
