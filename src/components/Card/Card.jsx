// src/components/Card/Card.jsx
// Theme-able Card Component with Sub-components built with Styled Components.
// Created: 2026-07-30

import React from 'react';
import styled, { css } from 'styled-components';

const getCardVariant = ({ variant = 'standard', theme }) => {
  switch (variant) {
    case 'glass':
      return css`
        background: ${theme.mode === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.7)'};
        backdrop-filter: blur(12px);
        border: 1px solid ${theme.colors.border};
      `;
    case 'gradient':
      return css`
        background: ${theme.mode === 'dark'
          ? 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)'
          : 'linear-gradient(135deg, #e0e7ff 0%, #ffffff 100%)'};
        border: 1px solid ${theme.colors.primary};
      `;
    case 'standard':
    default:
      return css`
        background-color: ${theme.colors.surface};
        border: 1px solid ${theme.colors.border};
      `;
  }
};

const CardContainer = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${getCardVariant}

  ${({ interactive }) =>
    interactive &&
    css`
      &:hover {
        transform: translateY(-4px);
        box-shadow: ${({ theme }) => theme.shadows.lg};
      }
    `}
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const BodyContainer = styled.div`
  padding: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Card = ({ children, variant, interactive, ...props }) => {
  return (
    <CardContainer variant={variant} interactive={interactive} {...props}>
      {children}
    </CardContainer>
  );
};

Card.Header = ({ title, subtitle, action }) => (
  <HeaderContainer>
    <TitleGroup>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleGroup>
    {action && <div>{action}</div>}
  </HeaderContainer>
);

Card.Body = ({ children }) => <BodyContainer>{children}</BodyContainer>;

Card.Footer = ({ children }) => <FooterContainer>{children}</FooterContainer>;
