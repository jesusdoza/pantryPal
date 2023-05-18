import React from "react";
import { ErrorCardStyled } from "./ErrorCard.styles";
import { v4 as uuidv4 } from "uuid";
import errorxUrl from "../../assets/error.png";

export default function ErrorCard({
    errorsArr = ["errorsArr Empty"],
    showError = false,
}) {
    function makeErrorList(errorList) {
        const errorJsx = errorList.map((error, index) => {
            return (
                <li key={uuidv4()} className="error_container">
                    <div className="error_item">
                        <div className="img__container">
                            <img src={errorxUrl} alt="error symbol" />
                        </div>
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
                        <h3>Please correct errors</h3>
                        <ul className="error__list">
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
