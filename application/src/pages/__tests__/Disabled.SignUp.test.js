import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import SignUp from "../SignUp";

afterEach(() => { cleanup(); })

test("render and count input text fields", async () => {
    const { getByText } = render(
        <Router>
            <SignUp />
        </Router>);

    expect(getByText(/Sign Up/i).closest('button')).toBeDisabled();
})