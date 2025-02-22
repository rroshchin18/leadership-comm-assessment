import React from 'react';
import { Container } from './components/layout/Container';
import { AssessmentProvider } from './contexts/AssessmentContext';
import { AssessmentFlow } from './components/assessment/AssessmentFlow';

export default function App() {
  return (
    <AssessmentProvider>
      <Container>
        <AssessmentFlow />
      </Container>
    </AssessmentProvider>
  );
}