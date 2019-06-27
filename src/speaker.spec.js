import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Speaker from './Speaker';

describe('<Speaker />', () => {
  it('should call the speak funciton passed as prop', () => {
    const mockSpeak = jest.fn();

    // pass the mock as a prop
    const { getByText } = render(<Speaker speak={mockSpeak} />);

    // fire the event
    fireEvent.click(getByText(/speak/i));

    expect(mockSpeak).toHaveBeenCalled();
  });
});
