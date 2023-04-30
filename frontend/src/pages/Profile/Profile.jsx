import React, { useRef, useState, useEffect } from "react";
import { Dashboard } from "./Profile.styles";
import Cookies from "js-cookie";
import { Modal } from "./Modal";
import { ProfileUpdateService } from "./ProfileUpdateService";
import { v4 as uuidv4 } from "uuid";

function ProfilePage() {
    //have the updatemodal component held in variable and change the
    //vairable as needed by each button
    const scrollToRef = useRef(null);

    const [showModal, setShowModal] = useState(false);

    const [modalContent, setModalContent] = useState(getModalProps("email"));

    //todo use children instead
    function changeModalContents(modalType) {
        let modalOptions = {
            email: {
                title: "Update Email",
                fieldsArr: [
                    { label: "New Email", name: "newEmail" },
                    { label: "Confirm New Email", name: "confirmNewEmail" },
                ],
                handleSubmit: ProfileUpdateService.updateEmail,
            },
            caloric: {
                title: "Update Caloric Settings",
                fieldsArr: [
                    {
                        label: "New Caloric Value",
                        name: "newCaloricPref",
                    },
                ],
                handleSubmit: ProfileUpdateService.updateCaloric,
            },
            password: {
                title: "Update Password",
                fieldsArr: [
                    {
                        label: "Old Password",
                        name: "oldPassword",
                    },
                    {
                        label: "New Password",
                        name: "newPassword",
                    },
                    {
                        label: "Confirm New Password",
                        name: "confirmNewPassword",
                    },
                ],
                handleSubmit: ProfileUpdateService.updatePassword,
            },
        };

        let modalProps = modalOptions[modalType];

        modalProps.scrollToRef = scrollToRef;

        return modalProps;
    }

    //build modal with specific props
    function getModalProps(modalType) {
        let modalOptions = {
            email: {
                title: "Update Email",
                fieldsArr: [
                    { label: "New Email", name: "newEmail" },
                    { label: "Confirm New Email", name: "confirmNewEmail" },
                ],
                handleSubmit: ProfileUpdateService.updateEmail,
            },
            caloric: {
                title: "Update Caloric Settings",
                fieldsArr: [
                    {
                        label: "New Caloric Value",
                        name: "newCaloricPref",
                    },
                ],
                handleSubmit: ProfileUpdateService.updateCaloric,
            },
            password: {
                title: "Update Password",
                fieldsArr: [
                    {
                        label: "Old Password",
                        name: "oldPassword",
                    },
                    {
                        label: "New Password",
                        name: "newPassword",
                    },
                    {
                        label: "Confirm New Password",
                        name: "confirmNewPassword",
                    },
                ],
                handleSubmit: ProfileUpdateService.updatePassword,
            },
        };

        let modalProps = modalOptions[modalType];

        modalProps.scrollToRef = scrollToRef;

        return modalProps;
    }

    function goToModal(modalType) {
        const content = getModalProps(modalType);
        setModalContent(content);
    }

    return (
        <Dashboard>
            <section className="modal__container">
                {showModal ? (
                    <Modal setIsDisplayed={setShowModal}>
                        <PasswordUpdateForm />
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
                        <img src="/src/assets/spoon.png" alt="user avatar" />
                    </picture>
                    <h3>Hi! Bob</h3>
                    <h3>Email@email.com</h3>
                </section>
                <section className="container app-config">
                    <section>
                        <h4>Your Dietary Preferences</h4>
                        <ul className="app-pref">
                            <li>
                                <div>
                                    <span>Gluten Free</span>
                                </div>
                            </li>
                            <li>Ketogenic</li>
                            <li>Vegetarian</li>
                            <li>Lacto-Vegetarian</li>
                            <li>Ovo-Vegetarian</li>
                            <li>Vegan</li>
                            <li>Pescetarian</li>
                            <li>Paleo</li>
                            <li>Primal</li>
                        </ul>
                        <div className="controls">
                            <span className="btn">
                                Update Dietary Preferences
                            </span>
                        </div>
                    </section>
                    <ul className="options">
                        <li
                            className="btn"
                            onClick={() => {
                                setShowModal(true);
                                goToModal("caloric");
                            }}>
                            <span>Update Caloric settings</span>
                        </li>
                        <li
                            className="btn"
                            onClick={() => {
                                setShowModal(true);
                                goToModal("email");
                            }}>
                            <span>Update Email</span>
                        </li>
                        <li
                            onClick={() => {
                                setShowModal(true);
                                goToModal("password");
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

function PasswordUpdateForm() {
    return (
        <form action="" onSubmit={ProfileUpdateService.updatePassword}>
            <section>
                <h1>Update Password</h1>
            </section>
            <section>
                <ul>
                    <li className="update__field" key={uuidv4()}>
                        <div className="input__container">
                            <label htmlFor="oldPassword">Old Password</label>
                            <input
                                id="oldPassword"
                                type="text"
                                name="oldPassword"
                            />
                        </div>
                    </li>
                    <li className="update__field" key={uuidv4()}>
                        <div className="input__container">
                            <label htmlFor="newPassword">New Password</label>
                            <input
                                id="newPassword"
                                type="text"
                                name="newpassword"
                            />
                        </div>
                    </li>
                    <li className="update__field" key={uuidv4()}>
                        <div className="input__container">
                            <label htmlFor="confirmNewPassword">
                                Confirm New Password
                            </label>
                            <input
                                id="confirmNewPassword"
                                type="text"
                                name="confirmNewPassword"
                            />
                        </div>
                    </li>
                </ul>
            </section>
        </form>
    );
}
