import React, { useEffect, useRef } from "react";
import { ModalStyles } from "./Modal.styles";
import { useState } from "react";
import ErrorCard from "./ErrorCard";
import ReactDom from "react-dom";

//todo instead of handling the build of the inputs maybe just display
//todo any content user passes
export function Modal({
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
            //todo working flag =  true
            const response = await handleSubmit(formData);
            //todo working flag = false
            console.log("profile update sucess", response);
        } catch (error) {
            setErrors([error.message]);
            setShowError(true);
            console.log("error in update modal", error.message);
        }
    }

    function closeModal() {
        setIsDisplayed(false);
    }

    // return ReactDom.createPortal(
    return (
        <ModalStyles className={`${isDisplayed ? "" : "hidden"}`}>
            <main>
                {/* <main className={`${isDisplayed ? "" : "hidden"}`}> */}
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
                            <div>
                                <div className="container col">
                                    <div>
                                        <span>loading</span>
                                    </div>
                                    <div>
                                        <span>done</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="container row">
                    <ErrorCard errorsArr={errors} showError={showError} />
                </div>
            </main>
        </ModalStyles>
        // document.getElementById("portal")
    );
}
