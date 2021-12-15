import React from "react"

import "@testing-library/jest-native/extend-expect"
import {render, fireEvent} from "@testing-library/react-native"

import Login from "../"

describe("Login", () => {
  it("should disable the button when one or more inputs are still not filled", () => {
    const {queryByTestId} = render(<Login />)

    const loginButton = queryByTestId("login-button")
    expect(loginButton?.props.accessibilityState.disabled).toBe(true)
  })

  it("should enable the button when the inputs are filled", () => {
    const {queryByTestId, getByLabelText} = render(<Login />)

    const username = "Test"
    const password = "123456"

    const usernameInput = getByLabelText("username-input")
    fireEvent(usernameInput, "onChangeText", username)

    const passwordInput = getByLabelText("password-input")
    fireEvent(passwordInput, "onChangeText", password)

    const loginButton = queryByTestId("login-button")
    expect(loginButton?.props.accessibilityState.disabled).toBe(false)
  })
})
