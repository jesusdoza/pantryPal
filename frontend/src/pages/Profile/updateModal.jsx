import React, { useEffect, useRef } from "react";
import { UpdateModalStyles } from "./updateModal.styles";
import { useState } from "react";
import ErrorCard from "./ErrorCard";
export function UpdateModal({
    title,
    fieldsArr,
    handleSubmit,
    isDisplayed,
    setIsDisplayed,
    scrollToRef,
}) {
    const formRef = useRef("");
    const [errors, setErrors] = useState(["ONE"]);
    let [showError, setShowError] = useState(false);

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

    useEffect(() => {
        console.log("fileds changed");
        setErrors([]);
        setShowError(false);
    }, [fieldsArr]);

    async function submitForm(event) {
        try {
            event.preventDefault();
            setShowError(false);

            // grab data from form
            const data = new FormData(formRef.current);
            const formData = Object.fromEntries(data.entries());

            //submit form
            const response = await handleSubmit(formData);
        } catch (error) {
            setErrors([error.message]);
            setShowError(true);
            console.log("error in update modal", error.message);
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
                    className={`back__blur `}></div>

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
                <div className="container row">
                    <ErrorCard errorsArr={errors} showError={showError} />
                </div>
            </main>
        </UpdateModalStyles>
    );
}
