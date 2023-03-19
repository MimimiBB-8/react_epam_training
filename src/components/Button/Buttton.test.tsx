import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './Button';


describe('component button', () => {
    it('render button', () => {
        const onClick = jest.fn()

        const { asFragment } = render(
            <Router>
                <Button onClick={onClick} />
            </Router>);

        expect(asFragment()).toMatchSnapshot()
    })
    it('render button with title', () => {
        const onClick = jest.fn()
         render(
            <Router>
                <Button onClick={onClick} title='search' />
            </Router>);
        expect(screen.getByText('search')).toBeInTheDocument
    })
})