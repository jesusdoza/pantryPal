import React, { Children, useEffect, useRef } from "react";
import { ModalStyles } from "./Modal.styles";
import { useState } from "react";
import ErrorCard from "./ErrorCard";
import ReactDom from "react-dom";

//todo display any children user passes
export function Modal({ children, setIsDisplayed, scrollToRef }) {
    const formRef = useRef("");
    // const [errors, setErrors] = useState(["ONE"]);
    // let [showError, setShowError] = useState(false);

    function closeModal() {
        setIsDisplayed(false);
        // setErrors([]);
        // setShowError(false);
    }

    // return ReactDom.createPortal(
    return (
        <ModalStyles>
            <main>
                <div
                    onClick={() => {
                        closeModal();
                    }}
                    className={`back__blur `}></div>

                <div ref={scrollToRef} className={`container row `}>
                    <section id="modal" className="">
                        {children}
                    </section>
                </div>
                {/* <div className="container row">
                    <ErrorCard errorsArr={errors} showError={showError} />
                </div> */}
            </main>
        </ModalStyles>
    );
}
