import React from 'react';
import QuizStep from './QuizStep';
import DecisionStep from './DecisionStep';
import SpotStep from './SpotStep';
import SortStep from './SortStep';
import OrderStep from './OrderStep';
import TimedStep from './TimedStep';
import PasswordStep from './PasswordStep';

export default function StepRenderer({ step, onDone, isLast }) {
  const props = { step, onDone, isLast };
  switch (step.type) {
    case 'quiz':
      return <QuizStep {...props} />;
    case 'decision':
      return <DecisionStep {...props} />;
    case 'spot':
      return <SpotStep {...props} />;
    case 'sort':
      return <SortStep {...props} />;
    case 'order':
      return <OrderStep {...props} />;
    case 'timed':
      return <TimedStep {...props} />;
    case 'password':
      return <PasswordStep {...props} />;
    default:
      return null;
  }
}