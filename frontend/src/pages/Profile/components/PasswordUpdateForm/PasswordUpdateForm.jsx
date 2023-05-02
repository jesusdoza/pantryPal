import React, { useRef, useState, useEffect } from "react";
import { ProfileUpdateService } from "../../services/ProfileUpdateService";
import ErrorCard from "../../ErrorCard";
import { StyledPasswordForm } from "./PasswordUpdateForm.styles";

import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
export default function PasswordUpdateForm({
    handleSubmit,
    setErrors,
    setShowError,
    setShowModal,
}) {
    const formRef = useRef("");

    async function submitForm(event) {
        event.preventDefault();
        try {
            setShowError(false);

            // grab data from form
            const data = new FormData(formRef.current);
            const formData = Object.fromEntries(data.entries());

            //submit form
            console.log("modal form data", formData);
            // const response = await handleSubmit(formData);//! uncomment to submit form
        } catch (error) {
            setErrors([error.message]);
            setShowError(true);
            console.log("error in password update form", error.message);
        }
    }

    return (
        <StyledPasswordForm>
            <form ref={formRef} onSubmit={submitForm}>
                <section className="row title">
                    <h1>Update Password</h1>
                </section>
                <section className="row form__inputs">
                    <ul>
                        <li className="update__field" key={uuidv4()}>
                            <InputField
                                name="oldPassword"
                                label="Old Password"
                            />
                        </li>
                        <li className="update__field" key={uuidv4()}>
                            <InputField
                                name="newPassword"
                                label="New Password"
                            />
                        </li>
                        <li className="update__field" key={uuidv4()}>
                            <InputField
                                name="confirmNewPassword"
                                label="Confirm New Password"
                            />
                        </li>
                    </ul>
                </section>
                <section className="form__controls row">
                    <div className="btn" onClick={submitForm}>
                        <span>Submit</span>
                    </div>
                    <div
                        className="btn"
                        onClick={() => {
                            setShowModal(false);
                        }}>
                        <span>Cancel</span>
                    </div>
                </section>
            </form>
            <section className="error__container">
                <ErrorCard errorsArr={[]} showError={false} />
            </section>
        </StyledPasswordForm>
    );
}

const InputStyled = styled.div``;

function InputField({ name, label, validationFunc }) {
    const [error, setError] = useState(true);

    function validateInput(event) {
        let input = event.target.value;
    }

    return (
        <div className="input__container error">
            <label htmlFor={name}>{label}</label>
            <input id={name} type="text" name={name} onChange={validateInput} />
            <div>
                <span>error</span>
            </div>
        </div>
    );
}
