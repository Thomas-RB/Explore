import React, {useState} from "react"

import Modal from "../ModaleProduct/Modal";
import Paypal from "../Paypal/paypal";
import SEO from "../seo"
import './cards.css'


const Cards = () => {

    // MODAL
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    };

    // PAYPAL API
    const [checkout, setCheckout] = useState(false)
    const [checkoutB, setCheckoutB] = useState(false)
    const [checkoutC, setCheckoutC] = useState(false)



    return(
        <>
        <SEO title="Products" />

            <section className="cards-section">
                <div className="card">
                    <div className="card-img-top"> </div>
                    <div className="card-body">
                        <h5 className="card-title">Telescope Skywatcher 150/750</h5>
                        <p className="card-text">
                        Très polyvalent, ce réflecteur Newton convient aussi bien aux débutants qu'aux observateurs chevronnés.
                        </p>
                        <p className="card-text-price">
                            Prix: 649€
                        </p>
                        <div className="card-btn">
                            <button onClick={openModal} className="btn btn-outline-success mb-3">See Product Details</button>

                            {checkout ? (
                                <Paypal />
                            ) : (
                            <button
                            onClick={() => {
                                setCheckout(true);
                                }} 
                            className="btn btn-outline-success">
                                Express Purchase
                            </button>
                            )}

                            <Modal showModal={showModal} setShowModal={setShowModal} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img-top-dslr"> </div>
                    <div className="card-body">
                        <h5 className="card-title">Canon EOS 5D</h5>
                        <p className="card-text">
                        Quel que soit le sujet que vous photographiez, bénéficiez d'une qualité d'image sans compromis et de performances ultra-professionnelles.
                        </p>
                        <p className="card-text-price">
                            Prix: 699€
                        </p>
                        <div className="card-btn">
                            <button onClick={openModal} className="btn btn-outline-success mb-3">See Product Details</button>

                            {checkoutB ? (
                                <Paypal />
                            ) : (
                            <button
                            onClick={() => {
                                setCheckoutB(true);
                                }} 
                            className="btn btn-outline-success">
                                Express Purchase
                            </button>
                            )}

                            <Modal showModal={showModal} setShowModal={setShowModal} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img-top-stellina"> </div>
                    <div className="card-body">
                        <h5 className="card-title">Dobson Flextube 750/1400</h5>
                        <p className="card-text">
                        Très polyvalent, ce télescope Newton sur monture Dobson convient aussi bien aux débutants qu'aux observateurs chevronnés.
                        </p>
                        <p className="card-text-price">
                            Prix: 960€
                        </p>
                        <div className="card-btn">
                            <button onClick={openModal} className="btn btn-outline-success mb-3">See Product Details</button>
                            
                            {checkoutC ? (
                                <Paypal />
                            ) : (
                            <button
                            onClick={() => {
                                setCheckoutC(true);
                                }} 
                            className="btn btn-outline-success">
                                Express Purchase
                            </button>
                            )}

                            <Modal showModal={showModal} setShowModal={setShowModal} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cards
