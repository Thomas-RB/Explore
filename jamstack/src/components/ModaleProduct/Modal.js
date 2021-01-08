import React, {useRef, useEffect, useCallback, useState} from 'react'
import {useSpring, animated} from 'react-spring'
import Paypal from "../Paypal/paypal";

import './Modal.css'


const Modal = ({showModal, setShowModal}) => {

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 350
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    };

    const keyPress = useCallback(e => {
        if(e.key=== 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress]);


    const [checkout, setCheckout] = useState(false)


    return (
        <>
            {showModal ? (
                <div className="modalBackground" ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                    <div className="modalWrapper" showModal={showModal}>
                        <img className="modalImg" src={require('../../images/articles/skywatcher.jpg')} alt="telescope Skywtacher 150/750"></img>
                        <div className="modalContent">
                            <h2 className="modalBigTitle"> Telescope SKYWATCHER 150/750</h2>
                                <p className="modalParagraph">
                                Très polyvalent, ce réflecteur Newton convient aussi bien aux débutants qu'aux observateurs chevronnés. Il offre beaucoup de lumière et une grande stabilité à petit prix. 
                                La quantité de lumière collectée grâce à son imposant diamètre de 150 mm permet de bien voir des objets très éloignés du ciel profond tels que la Nébuleuse de l'Anneau dans la Lyre ou la Nébuleuse Hantel. 
                                Et des amas globulaires comme M13 sont résolus, au bord, en de nombreuses étoiles individuelles. 
                                L'observation planétaire aussi offre des images riches en détails de Saturne, Jupiter, Vénus et Mars. Le rapport d'ouverture de l'objectif est de F/5. Ce télescope fait donc partie des Newton rapides. 
                                Ce type d'optique convient particulièrement bien pour la photographie. Le pouvoir collecteur est d'environ 450 fois plus grand qu'à l'œil nu avec une pupille de sortie de 7 mm.
                                </p>

                                <p className="card-text-price mt-4">
                                    Prix: 649€
                                </p>

                            {checkout ? (
                                <Paypal />
                            ) : (
                            <button
                            onClick={() => {
                                setCheckout(true);
                                }} 
                            className="btn btn-outline-success mb-5">
                                Express Purchase
                            </button>
                            )}
                        </div>
                        <div className="closeModalButton" aria-label="close modal" onClick={() => setShowModal(prev => !prev)}> X </div>
                    </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    )
    
}

export default Modal







