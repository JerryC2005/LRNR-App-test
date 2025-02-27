import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

describe('Home Component', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });

    it('renders the logo', () => {
        const logo = screen.getByAltText(/lrnr logo/i);
        expect(logo).toBeInTheDocument();
      });

    it('renders the heading', () => {
    const heading = screen.getByText(/Your guided path to programming enlightenment/);
    expect(heading).toBeInTheDocument(); // This line should work if expect is available
    });

    it('renders the personalized quizzes section', () => {
    const quizzesSection = screen.getByText(/Personalized Quizzes/i);
    expect(quizzesSection).toBeInTheDocument();
    });

  it('renders the rewarding section', () => {
    const rewardingSection = screen.getByText(/Rewarding/);
    expect(rewardingSection).toBeInTheDocument();
    });


  // Add other tests here...
});
