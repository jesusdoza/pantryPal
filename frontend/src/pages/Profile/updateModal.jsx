import React, { useRef } from "react";
import { UpdateModalStyles } from "./updateModal.styles";

export function UpdateModal({ title, fieldsArr, handleSubmit }) {
    const componentRef = useRef("");

    function toggleHidden(event, ref) {
        const target = event.target;
        console.log(target.classList, target);
        // titleRef.current.classList.toggle("hidden");
        let form = ref.current.querySelector("#form");
        let title = ref.current.querySelector("#title");

        form.classList.toggle("hidden");
        title.classList.toggle("hidden");
    }

    return (
        <UpdateModalStyles>
            <section
                onClick={(e) => {
                    toggleHidden(e, componentRef);
                }}
                ref={componentRef}>
                <section id="title" className="btn">
                    <h1>{title}</h1>
                </section>
                {/* hide form for updating */}
                <section id="form" className="hidden">
                    <form action=""></form>
                    {fieldsArr.map((feildObj, index) => {
                        const name = feildObj.name;
                        return (
                            <li key={name + index}>
                                <label htmlFor={name}>{name}</label>
                                <input id={name} type="text" name={name} />
                            </li>
                        );
                    })}
                    <section>
                        <div>
                            <button type="submit">submit</button>
                        </div>
                    </section>
                </section>
            </section>
        </UpdateModalStyles>
    );
}
