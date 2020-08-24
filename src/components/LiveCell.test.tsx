import React from 'react';
import { render, act } from '@testing-library/react';
import { LiveCell } from './LiveCell';
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


it("renders  an emoji representing a live cell", () => {
    act(() => {
        render(<LiveCell />, {container : container});        
    });
    expect(container.textContent).toBe("⬛");
});
