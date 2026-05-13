import React from "react";
import { render, screen } from "@testing-library/react";

import CaamFlightManagementSampleDPage from "../CaamFlightManagementSampleDPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../../models";

test("renders caamFlightManagementSampleD page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CaamFlightManagementSampleDPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("caamFlightManagementSampleD-datatable")).toBeInTheDocument();
    expect(screen.getByRole("caamFlightManagementSampleD-add-button")).toBeInTheDocument();
});
