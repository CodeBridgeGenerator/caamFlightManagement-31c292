import React from "react";
import { render, screen } from "@testing-library/react";

import CaamFlightManagementSampleDEditDialogComponent from "../CaamFlightManagementSampleDEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders caamFlightManagementSampleD edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CaamFlightManagementSampleDEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("caamFlightManagementSampleD-edit-dialog-component")).toBeInTheDocument();
});
