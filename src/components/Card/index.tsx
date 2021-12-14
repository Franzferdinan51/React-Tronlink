import React from 'react';
import { useTronLink } from '../../contexts/tronlink';
import { formatBalance, formatUserName } from '../../utils/formatting';
import trxImage from '../../assets/trx.png';

const Card: React.FC = () => {
  const { wallet, walletName, trxBalance, connectToWallet, isConnected } =
    useTronLink();

  return (
    <div
      style={{
        width: '600px',
        background: 'white',
        height: 300,
        borderRadius: 12,
        boxShadow: '-10px 10px 10px #000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 8,
        boxSizing: 'border-box',
      }}
    >
      <header
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            width={32}
            src={`https://avatars.dicebear.com/4.5/api/bottts/${formatUserName(
              wallet
            )}.svg`}
            alt=""
          />
          <label>{walletName || 'Click on Button below to connect'}</label>
        </div>
        <div title={wallet}>{formatUserName(wallet)}</div>
      </header>

      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <div style={{ marginRight: 12 }}>
          <img width={32} src={trxImage} alt="TRX" />
        </div>
        <div>{formatBalance(trxBalance)} TRX</div>
      </main>

      <footer
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          onClick={() => connectToWallet()}
          style={{
            height: 45,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Press Start 2P',
            color: 'white',
            backgroundColor: '#282c34',
            borderRadius: 12,
            cursor: 'pointer',
          }}
        >
          <h5>{isConnected ? 'Connected' : 'Connect'}</h5>
        </div>
      </footer>
    </div>
  );
};

export default Card;
