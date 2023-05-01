import React from "react";
import { ErrorCardStyled } from "./ErrorCard.styles";
import { v4 as uuidv4 } from "uuid";

export default function ErrorCard({
    errorsArr = ["errorsArr Empty"],
    showError = false,
}) {
    function makeErrorList(errorList) {
        const errorJsx = errorList.map((error, index) => {
            return (
                <li key={uuidv4()} className="error_container">
                    <div className="error_item">
                        <img src="/src/assets/error.png" alt="error symbol" />
                        <p>{error}</p>
                    </div>
                </li>
            );
        });

        return errorJsx;
    }

    return showError ? (
        <ErrorCardStyled>
            <div className="error container">
                <div className="row">
                    <section className="container col">
                        <h3>Error</h3>
                        <span>Please correct following errors</span>
                        <ul className="error_list">
                            {errorsArr.length > 0 ? (
                                makeErrorList(errorsArr)
                            ) : (
                                <></>
                            )}
                        </ul>
                    </section>
                </div>
            </div>
        </ErrorCardStyled>
    ) : (
        <></>
    );
}
