//左から0,1,2,3,4,5。
nftaddressArray = [ 
    //Ticket 0
    "0x744b39dea9888D7F1b8856588eaF460A0efe0898" , 
    //goldfish 1
    "0xc48b3043112eed437aBdd8CFF8F6C4004b058B7c" ,
    //inu 2
    "0x379C97D28f89775b06e5392E30ECBcc2c3f8e7Fd" ,
    //Dabiko 3
    "0xCBe91053a4D916017957835c25882dC5EF06d9Be"
]

const howtogetlist = [
    //Ticket 0
    "CAFトップページ(https://conata.world/caf)で\n『Get FREE NFT Tickets』をクリックしてチケットセンターに行こう！" , 
    //goldfish 1
    "CAFトップページ(https://conata.world/caf)で\n『Crypto Gold Fish』のアイコンをクリックしてスタンプ配布ページに行こう！" ,
    //inu 2
    "現在準備中、フェスの期間中に会場の作品付近に取得リンクが設置されるぞ inu" ,
    //Dabiko 3
    "現在準備中、フェスの期間中に会場の作品付近に取得リンクが設置されるぞ dabiko"
]

//画像左から0,1,2,3,4,5。
async function enableLink( _num ){
    const web3rpc = new ethers.providers.JsonRpcProvider("https://rpc-mainnet.maticvigil.com/");
    const mycontract = await new ethers.Contract( nftaddressArray[_num] , abi , web3rpc );
    //mycontract = await new web3rpc.eth.Contract(abi, nftaddressArray[_num]);
    console.log(useraddress);
    let fromblockchain0 = await mycontract.balanceOf(useraddress);
 //   console.log("bug check")
    if (fromblockchain0==0){
        return;
        //    console.log("bug check2")
        //        throw new Error('I Have No Token.'+ _num );
    } else {

    let fromblockchain1 = await mycontract.tokenOfOwnerByIndex(useraddress , 0);
    console.log(fromblockchain1);
//    tmp = 2;
    document.getElementById('image'+_num).style.opacity = "100%";
    document.getElementById('link'+_num).target = "_blank";
    document.getElementById('link'+_num).href = `https://explorer-mainnet.maticvigil.com/tokens/${nftaddressArray[_num]}/instance/${fromblockchain1}/token-transfers`
    }
}


async function enableTicket( ){
    try {await enableLink( 0 );} catch (e) { console.log(e)}
    if (document.getElementById('image0').style.opacity == "1") {
        console.log("ticket okey")
        const web3rpc = new ethers.providers.JsonRpcProvider("https://rpc-mainnet.maticvigil.com/");
        const mycontract = await new ethers.Contract( nftaddressArray[0] , abi , web3rpc );
        let fromblockchain1 = await mycontract.tokenOfOwnerByIndex(useraddress , 0);
        // console.log(fromblockchain1);
        const ticketimagenumber = fromblockchain1 % 10;
        // console.log(ticketimagenumber);
        document.getElementById('image0').src = `assets/img/tickets/${ticketimagenumber}.png`;
    } 
}

async function howtoget( _num ){
    window.alert(howtogetlist[_num]);
}