//your code here!
let infy = document.getElementById("infi-list");
let nextIdx = 11;


function addLi(){
for(let i = 0; i<10 ; i++)
{
	const listitm = document.createElement("li");
	listitm.textContent = "Item" + nextIdx;
	infy.appendChild()listitm;
	nextIdx++;
}
}
	infy.addEventListener("scroll",function()=>{
	if(infy.scrollTop + infy.clientHeight >= infy.scrollHeight)
	{
		addLi();
	}
});

addLi();