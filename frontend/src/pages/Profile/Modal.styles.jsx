import styled from "styled-components";
const blur_bg = "#2b3f0124";
const main_bg = "#eae6e6";
const secondary_bg = "#a8a6a6";
const button_primary = "#e86e0a";
const button_secondary = "#989898";
const text_primary = "#000000";
const text_secondary = "#595959f";
const button_text_primary = "#ffffff";
const button_text_secondary = "#958e8eff";
// const error_bg = "#d87474";

// / Color Theme Swatches in RGBA /
// .Whole-avocado-cut-half-isolated-on-white-background-1-rgba { color: rgba(43, 63, 1, 1); }
// .Whole-avocado-cut-half-isolated-on-white-background-2-rgba { color: rgba(213, 216, 121, 1); }
// .Whole-avocado-cut-half-isolated-on-white-background-3-rgba { color: rgba(242, 230, 174, 1); }
// .Whole-avocado-cut-half-isolated-on-white-background-4-rgba { color: rgba(89, 49, 15, 1); }
// .Whole-avocado-cut-half-isolated-on-white-background-5-rgba { color: rgba(242, 242, 242, 1); }

export const ModalStyles = styled.section`
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* scale: 0; */

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .col {
        flex-direction: column;
    }

    .hidden {
        visibility: hidden;
        height: 0;
        width: 0;
        overflow: hidden;
    }
    main {
        display: flex;
        justify-content: center;
        position: absolute;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        gap: 1rem;

        /* border: green solid 40px; */

        & h1 {
            margin: 0;
        }

        li {
            list-style: none;
        }

        .back__blur {
            background-color: ${blur_bg};

            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position: fixed;
            position: absolute;
            /* z-index: 10; */
            backdrop-filter: blur(10px);
        }

        #modal {
            z-index: 3;
            background-color: ${main_bg};
            padding: 1rem;
            border-radius: 2rem;
            width: 80%;
            max-width: 300px;
            min-height: 300px;

            .btn {
                padding: 0 0.4rem;
            }

            form {
                height: 300px;
                .title {
                    height: 10%;
                }

                .form__inputs {
                    height: 70%;

                    .update__field {
                        margin-top: 2rem;
                        display: flex;
                        gap: 2rem;
                        justify-content: center;

                        .input__container {
                            position: relative;
                            label {
                                top: -20px;
                                position: absolute;
                                font-size: 0.7rem;
                                color: ${text_secondary};
                            }
                            input {
                                color: ${text_primary};
                                border: 1px solid ${secondary_bg};
                                border-radius: 0.2rem;
                            }
                        }
                    }
                }
                .form__controls {
                    height: 20%;
                    justify-content: flex-end;
                    gap: 1.5rem;
                }
            }
        }
    }
`;
