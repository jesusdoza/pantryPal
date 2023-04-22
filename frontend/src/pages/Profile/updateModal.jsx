import React, { useEffect, useRef } from "react";
import { UpdateModalStyles } from "./updateModal.styles";
import { useState } from "react";

export function UpdateModal({
    title,
    fieldsArr,
    handleSubmit,
    isDisplayed,
    setIsDisplayed,
    scrollToRef,
}) {
    const formRef = useRef("");

    async function submitForm(event) {
        event.preventDefault();
        console.log("form submited", event.target);
        const data = new FormData(formRef.current);
        const updateBody = Object.fromEntries(data.entries());
        console.log(handleSubmit);
        const response = await handleSubmit(updateBody);
        console.log(response);
    }

    function closeModal() {
        setIsDisplayed(false);
    }

    return (
        <UpdateModalStyles>
            <div
                onClick={() => {
                    closeModal();
                }}
                className={`back__blur ${isDisplayed ? "" : "hidden"}`}></div>
            <div
                ref={scrollToRef}
                className={`container row ${isDisplayed ? "" : " hidden"}`}>
                <section id="modal" className="">
                    <form ref={formRef} onSubmit={submitForm} action="">
                        <div className="row title">
                            <h1>{title}</h1>
                        </div>
                        <div className="row form__inputs">
                            <ul>
                                {fieldsArr.map((feildObj, index) => {
                                    const name = feildObj.name;
                                    const label = feildObj.label;
                                    return (
                                        <li
                                            className="update__field"
                                            key={name + index}>
                                            <div className="input__container">
                                                <label htmlFor={name}>
                                                    {label}
                                                </label>
                                                <input
                                                    id={name}
                                                    type="text"
                                                    name={name}
                                                />
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="form__controls row">
                            <div onClick={submitForm} className="btn">
                                <span>Submit</span>
                            </div>
                            <div onClick={closeModal} className="btn">
                                <span>Cancel</span>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </UpdateModalStyles>
    );
}
