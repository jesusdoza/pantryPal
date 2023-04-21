import React, { useRef } from "react";
import { UpdateModalStyles } from "./updateModal.styles";

export function UpdateModal({ title, fieldsArr, handleSubmit }) {
    const modalRef = useRef("");

    async function submitForm(event) {
        event.preventDefault();
        console.log("form submited", event.target);
        const data = new FormData(event.target);
        console.log(values);
        await handleSubmit(data);
    }

    return (
        <UpdateModalStyles>
            <section id="modal" ref={modalRef}>
                <section id="title" className="">
                    <h1>{title}</h1>
                </section>
                {/* hide form for updating */}
                <section id="form" className="">
                    <form onSubmit={submitForm} action="">
                        {fieldsArr.map((feildObj, index) => {
                            const name = feildObj.name;
                            const label = feildObj.label;
                            return (
                                <li key={name + index}>
                                    <label htmlFor={name}>{label}</label>
                                    <input id={name} type="text" name={name} />
                                </li>
                            );
                        })}
                        <section>
                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </section>
                    </form>
                </section>
            </section>
        </UpdateModalStyles>
    );
}
