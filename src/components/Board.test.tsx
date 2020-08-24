import React from 'react';
import { render, act } from '@testing-library/react';
import { Board } from './Board';
import { unmountComponentAtNode } from 'react-dom';

let container : HTMLDivElement;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
})


it("renders a 3x3 board with dead cells", () => {
    act(() => {
        let cells = { cellMap : Array(3).fill(Array(3).fill(false)) };
        render(<Board cells = { cells }/>, {container : container});        
    });
    expect(container.textContent).toContain("⬜⬜⬜⬜⬜⬜⬜⬜⬜")
});

it("renders a 3x3 board with live cells", () => {
    act(() => {
        let cells = { cellMap : Array(3).fill(Array(3).fill(true)) };
        render(<Board cells = { cells }/>, {container : container});        
    });
    expect(container.textContent).toContain("⬛⬛⬛⬛⬛⬛⬛⬛⬛")
});

it("renders a 3x3 board with mix between live and dead cells", () => {
    act(() => {
        let cells = { cellMap : [[true, false, true], [true, true, false],[false, true, false]] };
        render(<Board cells = { cells }/>, {container : container});        
    });
    expect(container.textContent).toContain("⬛⬜⬛⬛⬛⬜⬜⬛⬜")
});