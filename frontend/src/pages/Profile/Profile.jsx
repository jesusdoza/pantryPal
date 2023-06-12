import React, { useRef, useState, useEffect } from "react";
import { Dashboard } from "./Profile.styles";
import Cookies from "js-cookie";
import { Modal } from "./Modal";
import { ProfileUpdateService } from "./services/ProfileUpdateService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import SucessCard from "./components/SuccessCard/SuccessCard";
import ErrorCard from "./ErrorCard";
import PasswordUpdateForm from "./components/PasswordUpdateForm/PasswordUpdateForm";
import EmailUpdateForm from "./components/EmailUpdateForm/EmailUpdateForm";
import CaloricUpdateForm from "./components/CaloricForm/CaloricUpdateForm";
import CreatableSelect from "./components/DietaryFilter/DietaryFilter"

function ProfilePage() {
    //have the updatemodal component held in variable and change the
    //vairable as needed by each button
    const scrollToRef = useRef(null);

    const [showModal, setShowModal] = useState(false);

    const [errors, setErrors] = useState([]);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    //todo use children instead
    const [modalContent, setModalContent] = useState(
        <PasswordUpdateForm
            setShowModal={setShowModal}
            handleSubmit={ProfileUpdateService.updatePassword}
        />
    );

    return (
        <Dashboard>
            <section className="modal__container">
                {showModal ? (
                    <Modal setIsDisplayed={setShowModal}>
                        {modalContent}
                        {/* <ErrorCard errorsArr={errors} showError={showError} />
                        <SucessCard showCard={showSuccess} /> */}
                    </Modal>
                ) : (
                    <></>
                )}
            </section>

            <section className="profile-page">
                <section className="container profile">
                    <picture>
                        {/* <source srcset="https://cdn.discordapp.com/attachments/1076184648599744674/1091575853470732288/PantryPal_Logo_TPB.png"></source> */}
                        <source srcSet="https://media.discordapp.net/attachments/1076184648599744674/1091475961280741426/EggMoonSnap.png?width=493&height=487"></source>
                        <FontAwesomeIcon 
                            icon={faUser}
                            className="userIcon"
                        />
                    </picture>
                    <h3>Hi! Bob</h3>
                    <h3>Email@email.com</h3>
                </section>
                <section className="container app-config">
                    <section>
                        <h4>Your Dietary Preferences</h4>
                        <CreatableSelect />
                    </section>
                    <ul className="options">
                        <li
                            className="btn"
                            onClick={() => {
                                setShowModal(true);
                                setModalContent(
                                    <CaloricUpdateForm
                                        // setErrors={setErrors}
                                        // setShowError={setShowError}
                                        setShowModal={setShowModal}
                                        handleSubmit={
                                            ProfileUpdateService.updateCaloric
                                        }
                                    />
                                );
                            }}>
                            <span>Update Caloric settings</span>
                        </li>
                        <li
                            className="btn"
                            onClick={() => {
                                setShowModal(true);
                                // goToModal("email");
                                setModalContent(
                                    <EmailUpdateForm
                                        // setErrors={setErrors}
                                        // setShowError={setShowError}
                                        setShowModal={setShowModal}
                                        handleSubmit={
                                            ProfileUpdateService.updateEmail
                                        }
                                    />
                                );
                            }}>
                            <span>Update Email</span>
                        </li>
                        <li
                            onClick={() => {
                                setShowModal(true);
                                // goToModal("password");
                                setModalContent(
                                    <PasswordUpdateForm
                                        // setErrors={setErrors}
                                        // setShowError={setShowError}
                                        setShowModal={setShowModal}
                                        handleSubmit={
                                            ProfileUpdateService.updatePassword
                                        }
                                    />
                                );
                            }}
                            className="btn">
                            <div>
                                <span>Update Password</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </section>
        </Dashboard>
    );
}

export default ProfilePage;
