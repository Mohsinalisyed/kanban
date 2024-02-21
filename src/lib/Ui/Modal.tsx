import React, { useRef } from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../../theme/Theme";
import { HeadingS, HeadingXL } from "../../style";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position:fixed;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-Index:1000 !important;
  
`;

const ModalWrapper = styled.div`
  width: 480px;
  min-height: 60vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10000;
  border-radius: 10px;
  padding:24px;
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

// Define types for props
interface ModalProps {
    showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  theme:string
}

export const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, theme }) => {
    const modalRef = useRef<HTMLDivElement>(null); // Use useRef with correct type
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    return (
        <>
            {showModal ? (
          <Background ref={modalRef} onClick={closeModal}>
            <ModalWrapper style={{ background: themeMode.modalbg }}>
                            <ModalContent>
                <HeadingXL style={{ color: themeMode.text }}>
                  Research pricing points of various competitors and trial different business models
                </HeadingXL>
                <HeadingS style={{ color: "#828FA3", margin:"24px 0"}}>
                  We know what we're planning to build for version one. Now we need to finalise
                  the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.
                </HeadingS>
                            </ModalContent>
                        </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
};
