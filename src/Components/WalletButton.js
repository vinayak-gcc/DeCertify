import React from 'react';
import { useState } from 'react';

const WalletButton = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultBalance, setDefaultAccount] = useState(null);

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChanged([result[0]])
                })
        } else {
            setErrorMessage('Install Metamask')
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName)
    }

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
        </div>
    )
}

export default WalletButton