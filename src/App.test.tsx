import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Wizard from "./components/ui/Wizard/Wizard";
import Form1 from "./components/Form1";
import { FieldData } from "./components/ui/Wizard/type";
import Form2 from "./components/Form2";
import userEvent from "@testing-library/user-event";

const handleOnChange = () => {};
describe("App", () => {
  it("should show only Next button if currely on first page", () => {
    render(
      <Wizard steps={0} activePageIndex={0}>
        <Form2 onChange={handleOnChange} checkedValue={[]} />
        <Wizard.ButtonNext />
        <Wizard.ButtonPrev />
      </Wizard>
    );
    expect(screen.queryByText("Back")).toBeFalsy();
  });

  it("should show takke to Next page", () => {
    render(
      <>
        <Wizard steps={0} activePageIndex={0}>
          <p>Page 1</p>
          <p>Page 2</p>
        </Wizard>
        <Wizard.ButtonNext />
        <Wizard.ButtonPrev />
      </>
    );
    const button = screen.getByText("Next");
    userEvent.click(button);
    expect(screen.queryByText("Page 2")).toBeTruthy();
  });
});
