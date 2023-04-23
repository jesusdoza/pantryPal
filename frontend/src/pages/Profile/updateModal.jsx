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

    const inputBoxes = fieldsArr.map((inputObjs, index) => {
        const name = inputObjs.name;
        const label = inputObjs.label;
        return (
            <li className="update__field" key={name + index}>
                <div className="input__container">
                    <label htmlFor={name}>{label}</label>
                    <input id={name} type="text" name={name} />
                </div>
            </li>
        );
    });

    async function submitForm(event) {
        event.preventDefault();
        const data = new FormData(formRef.current);
        const formData = Object.fromEntries(data.entries());
        const response = await handleSubmit(formData);
        if (response.err) {
            console.log("submit error", response);
            console.log(response.err);
        }
    }

    function closeModal() {
        setIsDisplayed(false);
    }

    return (
        <UpdateModalStyles>
            <main className={`${isDisplayed ? "" : "hidden"}`}>
                <div
                    onClick={() => {
                        closeModal();
                    }}
                    className={`back__blur `}>
                    <div className="container">
                        <div className="error row">
                            <span>errro</span>
                        </div>
                    </div>
                </div>
                <div ref={scrollToRef} className={`container row `}>
                    <section id="modal" className="">
                        <form ref={formRef} onSubmit={submitForm} action="">
                            <div className="row title">
                                <h1>{title}</h1>
                            </div>
                            <div className="row form__inputs">
                                <ul>{inputBoxes}</ul>
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
            </main>
        </UpdateModalStyles>
    );
}
