import { render, screen, renderHook } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from 'react-router-dom';
import { describe, expect } from "vitest";  
import {useFetchProducts} from "../utils/useFetch";

// import { Product } from "../utils/Interfaces";
describe("App tests", () => {
    beforeEach(() =>render(<MemoryRouter><App /></MemoryRouter>))
    test("should render the title", () => {
        const heading = screen.getByRole("heading", { level: 2 });
        expect(heading.textContent).toEqual("Swiggy")
    })
    test("should render the Navbar component", ()=>{
        expect(screen.queryByTestId("nav-bar")).toBeInTheDocument();
    })
});

describe("useFetchProducts tests", () => {
    test("should fetch products an empty array when component mounts", async () => {
        const {result} = renderHook(() => useFetchProducts(1, false, ()=>{}), {initialProps: {}});
        const products = result.current;
        console.log({products});
        expect(products).toBeInstanceOf(Array);
    })
})
