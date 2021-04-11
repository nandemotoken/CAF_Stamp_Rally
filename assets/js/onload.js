window.onload = async function() {
    ethereum.on('chainChanged', (_chainId) => window.location.reload());
    await loadmm_gasfree();
//    try {await enableTicket( 0 );} catch (e) { console.log(e)}
    try {await enableTicket( );} catch (e) { console.log(e)}
    try {await enableLink( 1 );} catch (e) { console.log(e)}
    try {await enableLink( 2 );} catch (e) { console.log(e)}
    try {await enableLink( 3 );} catch (e) { console.log(e)}

}

// let web3tr;
// let torus;
// let useraddress;


// window.onload = async function() {
//     if ( window.location.href.split('/').pop() == "CheckTokens.html"){
//         //window.alert("CheckTokensPage");
//         await newTorus();
//         myurl = "https://blockscout.com/poa/xdai/address/" + useraddress[0]+"/tokens" ;
//         window.window.location.href = myurl ;
//     }
//     if ( window.location.href.split('/').pop() == "CheckTokens2.html"){
//         //window.alert("CheckTokensPage");
//         await newTorus();
//         try {await enableLink( 3 );} catch (e) { console.log(e)}
//         try {await enableLink( 2 );} catch (e) { console.log(e)}
//         try {await enableLink( 7 );} catch (e) { console.log(e)}
//         try {await enableLink( 1 );} catch (e) { console.log(e)}
//         try {await enableLink( 8 );} catch (e) { console.log(e)}
//         try {await enableLink( 6 );} catch (e) { console.log(e)}
//         try {await enableLink( 5 );} catch (e) { console.log(e)}
//         try {await enableLink( 4 );} catch (e) { console.log(e)}
//         try {await enableLink( 9 );} catch (e) { console.log(e)}
//         try {await enableLink( 10 );} catch (e) { console.log(e)}
//         try {await enableLink( 11 );} catch (e) { console.log(e)}
//         try {await enableLink( 12 );} catch (e) { console.log(e)}
//         try {await enableLink( 13 );} catch (e) { console.log(e)}
//         try {await enableLink( 14 );} catch (e) { console.log(e)}
//         try {await enableLink( 15 );} catch (e) { console.log(e)}

//         console.log("loading token ok")
//     }
    
    
// } 


// async function newTorus() {

// torus = new Torus({
//   buttonPosition: "top-right" // default: bottom-left
// });
// await torus.init({
//   buildEnv: "production", // default: production
//   enableLogging: true, // default: false
//   network: {
//     host: "mainnet", // default: mainnet
//     chainId: 1, // default: 1
//     networkName: "Main Ethereum Network" // default: Main Ethereum Network
//   },
// loginConfig: {
//     'google': {
//       showOnModal: false,
//     },
//     'facebook': {
//       showOnModal: false,
//     },
//     'discord': {
//       showOnModal: false,
//     },
// },
//   showTorusButton: false // default: true
// });
// await torus.login(); // await torus.ethereum.enable()
// web3tr = await new Web3(torus.provider);

// useraddress = await web3tr.eth.getAccounts();
// console.log(useraddress[0]);

// }

