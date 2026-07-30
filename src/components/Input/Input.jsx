// src/components/Input/Input.jsx
// Theme-able Input Component built with Styled Components.
// Created: 2026-07-30

import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.colors.danger : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus-within {
    border-color: ${({ hasError, theme }) =>
      hasError ? theme.colors.danger : theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${({ hasError, theme }) =>
        hasError ? theme.colors.dangerLight : theme.colors.primaryLight};
  }
`;

const Addon = styled.span`
  padding: 10px 14px;
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  font-weight: 600;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  user-select: none;
`;

const StyledInputElement = styled.input`
  flex: 1;
  padding: 10px 14px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: inherit;
  font-size: 0.875rem;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const ErrorText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.danger};
`;

export const Input = ({ label, addon, error, ...props }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputGroup hasError={Boolean(error)}>
        {addon && <Addon>{addon}</Addon>}
        <StyledInputElement {...props} />
      </InputGroup>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
