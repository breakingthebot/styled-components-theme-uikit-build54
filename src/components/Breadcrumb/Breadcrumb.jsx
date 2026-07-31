// src/components/Breadcrumb/Breadcrumb.jsx
// Theme-able Breadcrumb Navigation Trail Component built with Styled Components.
// Created: 2026-07-31

import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  user-select: none;
`;

const List = styled.ol`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
`;

const Item = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ isCurrent, theme }) =>
    isCurrent ? theme.colors.textPrimary : theme.colors.textSecondary};
  font-weight: ${({ isCurrent }) => (isCurrent ? 700 : 500)};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.75rem;
`;

export const Breadcrumb = ({
  items = [],
  separator = '/',
  className,
}) => {
  return (
    <NavContainer aria-label="Breadcrumb" className={className}>
      <List>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <Item key={idx}>
              <Link
                href={item.href || '#'}
                isCurrent={isLast}
                aria-current={isLast ? 'page' : undefined}
                onClick={(e) => {
                  if (!item.href || item.href === '#') {
                    e.preventDefault();
                  }
                }}
              >
                {item.icon && <span>{item.icon}</span>}
                <span>{item.label}</span>
              </Link>

              {!isLast && <Separator>{separator}</Separator>}
            </Item>
          );
        })}
      </List>
    </NavContainer>
  );
};
