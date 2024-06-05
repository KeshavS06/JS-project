
const NFTs = []

function mintNFT(_id,_des, _dateofbirth, _addres) {
	
	const NFT = {
		"_id" : _id,     
		"_des" : _des,
		"_dateofbirth" : _dateofbirth,
		"_addres" : _addres

	}
	NFTs.push(NFT);
	console.log("Minted: " +_id);
}
function listNFTs() {
	for(let i = 0;i<NFTs.length;i++) {
		console.log("\n_id: "+NFTs[i]._id);
		console.log("_des: "+NFTs[i]._des);
		console.log("_dateofbirth: "+NFTs[i]._dateofbirth);
		console.log("_addres: "+NFTs[i]._addres);
	}
}
function getTotalSupply() {
	console.log("Total Supply: "+NFTs.length);
}
mintNFT("keshav", "Manager", "18", "punjab");
mintNFT("sharma", "CEO", "29", "himachal");
mintNFT("roxx", "Assistant", "28", "uk");
listNFTs();
console.log("\n");
getTotalSupply();
