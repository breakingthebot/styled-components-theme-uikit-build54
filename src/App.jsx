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
import { Modal } from './components/Modal/Modal';
import { Tabs } from './components/Tabs/Tabs';
import { Progress } from './components/Progress/Progress';
import { Skeleton } from './components/Skeleton/Skeleton';

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

const SkeletonProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SkeletonTextCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('acme-corp-prod');
  const [progressVal, setProgressVal] = useState(72);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const demoTabs = [
    {
      id: 'tab1',
      label: 'System Metrics',
      icon: '📊',
      badge: <Badge variant="success" hasDot>99.99%</Badge>,
      content: (
        <p>Global CDN edge clusters operating at nominal latency across 14 edge locations.</p>
      ),
    },
    {
      id: 'tab2',
      label: 'OAuth 2.0 Credentials',
      icon: '🔐',
      badge: <Badge variant="info">3 Keys</Badge>,
      content: (
        <p>Active secret API keys and OAuth 2.0 bearer access scopes for dev environment.</p>
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        {/* HEADER */}
        <Header>
          <HeaderTop>
            <BadgeStrip>
              <Badge variant="info" hasDot isPulse>CSS-in-JS Architecture</Badge>
              <Badge variant="success">v1.3.0 Release</Badge>
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

        {/* SECTION 2: PROGRESS & SKELETON (NEW v1.3.0) */}
        <Section>
          <SectionHeader>
            <SectionTitle>2. Styled Progress Bar &amp; Skeleton Loader (`Progress.jsx`, `Skeleton.jsx`)</SectionTitle>
            <Badge variant="info" hasDot isPulse>NEW v1.3.0</Badge>
          </SectionHeader>

          <Grid>
            {/* Progress Card */}
            <Card>
              <Card.Header
                title="Progress Bar Indicators"
                subtitle="Animated progress fills with theme tokens"
                action={
                  <Button size="sm" variant="outline" onClick={() => setProgressVal((p) => (p >= 100 ? 15 : p + 20))}>
                    Simulate Load
                  </Button>
                }
              />
              <Card.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Progress label="CPU Allocation Capacity" value={progressVal} showValue variant="gradient" animated />
                  <Progress label="RAM Memory Load" value={84} showValue variant="warning" />
                  <Progress label="NVMe Storage Capacity" value={45} showValue variant="brand" size="sm" />
                </div>
              </Card.Body>
            </Card>

            {/* Skeleton Loader Card */}
            <Card>
              <Card.Header title="Shimmer Skeleton Loader" subtitle="Theme-aware loading wave animation" />
              <Card.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <SkeletonProfileRow>
                    <Skeleton variant="circular" width={44} height={44} />
                    <SkeletonTextCol>
                      <Skeleton variant="text" width="60%" height={14} />
                      <Skeleton variant="text" width="40%" height={10} />
                    </SkeletonTextCol>
                  </SkeletonProfileRow>

                  <Skeleton variant="rectangular" height={80} />
                  <Skeleton variant="text" count={2} />
                </div>
              </Card.Body>
            </Card>
          </Grid>
        </Section>

        {/* SECTION 3: TABS NAVIGATION */}
        <Section>
          <SectionHeader>
            <SectionTitle>3. Styled Tabs Navigation Bar (`Tabs.jsx`)</SectionTitle>
            <Badge variant="neutral">Navigation System</Badge>
          </SectionHeader>

          <Grid>
            <Card>
              <Card.Header title="Underline Tabs Variant" subtitle="Default border indicator with badges" />
              <Card.Body>
                <Tabs tabs={demoTabs} variant="underline" />
              </Card.Body>
            </Card>
          </Grid>
        </Section>

        {/* SECTION 4: MODAL DIALOG SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>4. Styled Modal Overlay Component (`Modal.jsx`)</SectionTitle>
            <Badge variant="neutral">Overlay System</Badge>
          </SectionHeader>

          <Row>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              🪟 Open Accessible Modal Dialog
            </Button>
          </Row>
        </Section>

        {/* SECTION 5: THEME SWITCH SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>5. Theme Switch Control (`Switch.jsx`)</SectionTitle>
            <Badge variant="neutral">Interactive Mode Toggle</Badge>
          </SectionHeader>

          <Row>
            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              label="Toggle System Theme Mode"
            />
          </Row>
        </Section>

        {/* SECTION 6: CARD SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>6. Styled Card Component (`Card.jsx`)</SectionTitle>
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
                <Button size="sm" variant="primary" onClick={() => setIsModalOpen(true)}>Inspect Modal</Button>
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
          </Grid>
        </Section>

        {/* SECTION 7: BADGE SHOWCASE */}
        <Section>
          <SectionHeader>
            <SectionTitle>7. Styled Badge Pills (`Badge.jsx`)</SectionTitle>
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
      </AppContainer>

      {/* DEMO MODAL DIALOG */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="🪟 Styled Components Modal Demo"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm Action
            </Button>
          </>
        }
      >
        <p>
          This theme-aware modal dialog is built with <strong>styled-components</strong>. It features backdrop blur overlays, scale-up entrance keyframe animations, and keyboard <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>ESC</kbd> dismissal.
        </p>
      </Modal>
    </ThemeProvider>
  );
}
