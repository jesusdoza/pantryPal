import React, { useRef, useState, useEffect } from "react";
import { ProfileUpdateService } from "../../services/ProfileUpdateService";
import { v4 as uuidv4 } from "uuid";
import SuccessCard from "../SuccessCard/SuccessCard";
import ErrorCard from "../../ErrorCard";

export default function EmailUpdateForm({
    handleSubmit,
    // setErrorList,
    // setShowError,
    setShowModal,
}) {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorList, setErrorList] = useState([]);
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
            const response = await handleSubmit(formData);
        } catch (error) {
            // setErrorList(["email error"]);
            setErrorList([error.message]);
            setShowError(true);
            console.log("error in update form", error.message);
            return;
        }
        setShowSuccess(true);
    }

    return (
        <form ref={formRef} onSubmit={submitForm}>
            <div>
                <SuccessCard
                    listArr={["Email Updated"]}
                    showCard={showSuccess}
                />
                <ErrorCard errorsArr={errorList} showError={showError} />
            </div>
            <section className="row title">
                <h1>Update Email</h1>
            </section>
            <section className="row form__inputs">
                <ul>
                    <li className="update__field" key={uuidv4()}>
                        <div className="input__container">
                            <label htmlFor="newEmail">New Email</label>
                            <input id="newEmail" type="text" name="newEmail" />
                        </div>
                    </li>
                    <li className="update__field" key={uuidv4()}>
                        <div className="input__container">
                            <label htmlFor="confirmNewEmail">
                                Confirm New Email
                            </label>
                            <input
                                id="confirmNewEmail"
                                type="text"
                                name="confirmNewEmail"
                            />
                        </div>
                    </li>
                </ul>
            </section>
            {showSuccess ? (
                <section className="form__controls row">
                    <div
                        className="btn"
                        onClick={() => {
                            setShowModal(false);
                            setErrorList([]);
                            setShowError(false);
                        }}>
                        <span>Done</span>
                    </div>
                </section>
            ) : (
                <section className="form__controls row">
                    <div className="btn" onClick={submitForm}>
                        <span>Submit</span>
                    </div>
                    <div
                        className="btn"
                        onClick={() => {
                            setShowModal(false);
                            setErrorList([]);
                            setShowError(false);
                        }}>
                        <span>Cancel</span>
                    </div>
                </section>
            )}
        </form>
    );
}
