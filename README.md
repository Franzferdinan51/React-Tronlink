# React Tronlink

<p align="center">
<img src="https://img.shields.io/npm/v/typescript?color=orange&label=TypeScript&logo=Typescript&logoColor=blue&style=for-the-badge">
<img src="https://img.shields.io/npm/v/react?color=orange&label=React&logo=React&logoColor=Blue&style=for-the-badge"/>
<img src="https://img.shields.io/npm/l/1?color=orange&logo=License&logoColor=purple&style=for-the-badge"/>
</p>

<p align="center">
  React Application that connects with Tronlink wallet extension :memo:
</p>

<hr>

<p align="center">
  <img src="https://github.com/Eryk-Luiz/React-Tronlink/blob/master/public/banner.png" width="600"></img>
</p>

### :building_construction: How to run the project?
```bash
  # Clone the project
  git clone https://github.com/Eryk-Luiz/React-Tronlink.git
  
  # Go to created folder
  cd React-Tronlink
  
  # Install all dependencies
  yarn install or npm install
  
  # Run the project
  yarn start
  
  # You can access the project on port 3000
```

### :technologist: Usage

The project was made with Context API saving Tronlink data in a global state, that you can have access using the hookie `useTronlink()`

```tsx
import { useTronLink } from '../../contexts/tronlink';

 const { 
    wallet, // The connected wallet adress
    walletName, // The connected wallet name
    trxBalance, // Balance in TRX of the connected wallet
    connectToWallet, // Method that connects to the wallet and create a listener no wallet updates
    isConnected // Boolean that returns if the wallet is connected or not
    isMainNet // Boolean that returns if the waller is connected on main network or not
 } = useTronLink();
```

### :beers: How to contribute ?


1 - Fork the Project

```bash
  # 2 - Create your feature or fix breanch
  git checkout -b "feature/Example"

  # 3 - Make your semantic commit
  git commit -m 'Add feature example'
  
  # 4 - 4 - Pull your branch
  git pull origin feature/Example
```

After that just create a pull request and wait it to be aproved.

### :page_facing_up: About

This project was created in order to help, Tron developers community all over the world, it connects to the tronlink wallet you can watch out here: https://www.tronlink.org/

## :closed_book: License

<p align="center">Released in 2021. This project is under the<a href="https://github.com/Eryk-Luiz/backend-br-web/blob/master/LICENSE"> MIT license</a> 🚀</p>

<p align="center"> Made with love by <a href="https://github.com/Eryk-Luiz">Eryk Luiz</a> 🚀</p>
