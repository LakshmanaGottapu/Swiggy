import {screen, render} from "@testing-library/react";
import App from "./App";
import { describe, expect } from "vitest";

describe("App tests", () => {
    test("should render the title", ()=>{
        render(<App />);
        expect(
            screen.getByRole("heading", {
                level: 1,
            })
        ).toHaveTextContent("Vite + React");
    })
})