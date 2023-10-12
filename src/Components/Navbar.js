import React from 'react'
import WalletButton from './WalletButton'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="DeCertify" href="#"><img src='Decertify.png'></img>     DeCertify</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <WalletButton />
                </div>
            </nav>
        </div>
    )
}
