import React from "react";
import { SuccessCardStyled } from "./SuccessCard.styles";
import { v4 as uuidv4 } from "uuid";

export default function SucessCard({
    listArr = ["list Empty"],
    showCard = false,
}) {
    function makeDisplayList(list) {
        const displayList = list.map((item, index) => {
            return (
                <li key={uuidv4()} className="error_container">
                    <div className="list_item">
                        <img src="/src/assets/checked.png" alt="check symbol" />
                        <p>{item}</p>
                    </div>
                </li>
            );
        });

        return displayList;
    }

    return showCard ? (
        <SuccessCardStyled>
            <div className="error container">
                <div className="row">
                    <section className="container col">
                        <h3>Success Updating</h3>

                        <ul className="display_list">
                            {listArr.length > 0 ? (
                                makeDisplayList(listArr)
                            ) : (
                                <></>
                            )}
                        </ul>
                    </section>
                </div>
            </div>
        </SuccessCardStyled>
    ) : (
        <></>
    );
}
