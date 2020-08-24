import React from 'react';
import { render, act } from '@testing-library/react';
import { DeadCell } from './DeadCell';
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


it("renders  an emoji representing a dead cell", () => {
    act(() => {
        render(<DeadCell />, {container : container});        
    });
    expect(container.textContent).toBe("⬜");
});
