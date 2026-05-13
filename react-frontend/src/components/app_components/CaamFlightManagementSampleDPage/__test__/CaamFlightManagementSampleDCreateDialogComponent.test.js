import React from "react";
import { render, screen } from "@testing-library/react";

import CaamFlightManagementSampleDCreateDialogComponent from "../CaamFlightManagementSampleDCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders caamFlightManagementSampleD create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CaamFlightManagementSampleDCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("caamFlightManagementSampleD-create-dialog-component")).toBeInTheDocument();
});
