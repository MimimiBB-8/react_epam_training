import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortMovie from "./SortMovie";
import { BrowserRouter as Router } from 'react-router-dom';


describe("When rendering dropdown", () => {
    beforeEach(() => {
        render(
            <Router>
            <SortMovie />
        </Router>);
    });
    it('should display the correct number of options', () => {
        expect(screen.getAllByRole('option').length).toEqual(5)
    })

    it('should correctly set default option', () => {
        expect(screen.getByRole<HTMLOptionElement>('option', { name: 'Choose...' }).selected).toBe(true)
    })
    it('select snapshot', () => {
        const select = render( <Router>
            <SortMovie />
        </Router>)
        expect(select).toMatchSnapshot()
    })
    it('should allow user to change sorting to first option', () => {
        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option', { name: 'release ascending' }),
        )
        expect(screen.getByRole<HTMLOptionElement>('option', { name: 'release ascending' }).selected).toBe(true)
    })
    it('should allow user to change sorting to second option', () => {
        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option', { name: 'release descending' }),
        )
        expect(screen.getByRole<HTMLOptionElement>('option', { name: 'release descending' }).selected).toBe(true)
    })
    it('should allow user to change sorting to third  option', () => {
        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option', { name: 'rating ascending' }),
        )
        expect(screen.getByRole<HTMLOptionElement>('option', { name: 'rating ascending' }).selected).toBe(true)
    })
    it('should allow user to change sorting to fourth option', () => {
        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option', { name: 'rating descending' }),
        )
        expect(screen.getByRole<HTMLOptionElement>('option', { name: 'rating descending' }).selected).toBe(true)
    })
});