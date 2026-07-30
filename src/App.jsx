// src/App.jsx
// Main Interactive Playground for Build 54: Theme-able UI Kit with Styled Components.
// Created: 2026-07-30

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Badge } from './components/Badge/Badge';
import { Switch } from './components/Switch/Switch';
import { Input } from './components/Input/Input';

const AppContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

const BadgeStrip = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 720px;
  line-height: 1.6;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
`;

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [inputValue, setInputValue] = useState('acme-corp-prod');
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        {/* HEADER */}
        <Header>
          <HeaderTop>
            <BadgeStrip>
              <Badge variant="info" hasDot isPulse>CSS-in-JS Architecture</Badge>
              <Badge variant="success">v1.0.0 Release</Badge>
              <Badge variant="neutral">Styled Components</Badge>
            </BadgeStrip>

            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              label={isDarkMode ? 'Dark Theme Active' : 'Light Theme Active'}
            />
          </HeaderTop>

          <Title>Styled Components UI Kit</Title>
          <Subtitle>
            A production-grade, theme-able React UI library built with <strong>styled-components (CSS-in-JS)</strong>. Real-time Light/Dark theme switching, dynamic prop-based styling, and 100% scoped style encapsulation.
          </Subtitle>
        </Header>

        {/* SECTION 1: BUTTON SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>1. Styled Button Component (`Button.jsx`)</SectionTitle>
            <Badge variant="neutral">Dynamic Variants &amp; Sizes</Badge>
          </SectionHeader>

          <Row>
            <Button variant="primary">Primary CTA</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Action</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="primary" isLoading>Loading State</Button>
          </Row>
        </Section>

        {/* SECTION 2: THEME SWITCH SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>2. Theme Switch Control (`Switch.jsx`)</SectionTitle>
            <Badge variant="info" hasDot isPulse>Interactive Mode Toggle</Badge>
          </SectionHeader>

          <Row>
            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              label="Toggle System Theme Mode"
            />
          </Row>
        </Section>

        {/* SECTION 3: CARD SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>3. Styled Card Component (`Card.jsx`)</SectionTitle>
            <Badge variant="neutral">Surface Variants</Badge>
          </SectionHeader>

          <Grid>
            <Card interactive variant="standard">
              <Card.Header
                title="Standard Surface Card"
                subtitle="Theme-aware surface background &amp; border"
                action={<Badge variant="success" hasDot>OPERATIONAL</Badge>}
              />
              <Card.Body>
                This card adapts dynamically to theme background tokens (`theme.colors.surface`) with hover translation.
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="ghost">Dismiss</Button>
                <Button size="sm" variant="primary">Inspect</Button>
              </Card.Footer>
            </Card>

            <Card variant="glass">
              <Card.Header
                title="Glassmorphism Card"
                subtitle="Frosted acrylic backdrop blur"
                action={<Badge variant="info">BLUR FX</Badge>}
              />
              <Card.Body>
                Glass cards compute backdrop blur dynamically based on active Light or Dark theme surface opacity.
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="outline">Configure</Button>
              </Card.Footer>
            </Card>

            <Card variant="gradient">
              <Card.Header
                title="Gradient Glow Card"
                subtitle="Theme primary gradient overlay"
                action={<Badge variant="warning" hasDot isPulse>PREMIUM</Badge>}
              />
              <Card.Body>
                Linear gradients consume theme brand tokens directly via CSS-in-JS interpolation functions.
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="danger">Revoke Access</Button>
              </Card.Footer>
            </Card>
          </Grid>
        </Section>

        {/* SECTION 4: BADGE SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>4. Styled Badge Pills (`Badge.jsx`)</SectionTitle>
            <Badge variant="neutral">Status Colors</Badge>
          </SectionHeader>

          <Row>
            <Badge variant="success" hasDot isPulse>Success Status</Badge>
            <Badge variant="warning" hasDot>Warning Alert</Badge>
            <Badge variant="error" hasDot>Error Incident</Badge>
            <Badge variant="info" hasDot isPulse>Info Stream</Badge>
            <Badge variant="neutral">Neutral Tag</Badge>
          </Row>
        </Section>

        {/* SECTION 5: INPUT CONTROL */}
        <Section>
          <SectionHeader>
            <SectionTitle>5. Styled Input Component (`Input.jsx`)</SectionTitle>
            <Badge variant="neutral">Form Fields</Badge>
          </SectionHeader>

          <Grid>
            <Card>
              <Card.Header title="Form Control" subtitle="Input with addon &amp; focus rings" />
              <Card.Body>
                <Input
                  label="Tenant Endpoint Slug"
                  addon="https://"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="enter-tenant-name"
                />
              </Card.Body>
            </Card>
          </Grid>
        </Section>
      </AppContainer>
    </ThemeProvider>
  );
}
