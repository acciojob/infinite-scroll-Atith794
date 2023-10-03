//your code here!
let infy = document.getElementById("infi-list");
let nextIdx = 11;


function addLi(){
	for(let i = 0; i<2 ; i++)
	{
		const listitm = document.createElement("li");
		listitm.textContent = "Item" + nextIdx;
		infy.appendChild(listitm);
		nextIdx++;
	}
}
infy.addEventListener("scroll",()=>{
	if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight)
	{
		addLi();
	}
});

addLi();









// document.addEventListener("DOMContentLoaded", function() {
//     const myList = document.getElementById("myList");

//     // Function to add default list items
//     function addDefaultItems() {
//         for (let i = 11; i <= 12; i++) {
//             const listItem = document.createElement("li");
//             listItem.textContent = "Item " + i;
//             myList.appendChild(listItem);
//         }
//     }
// 	let idx = 13;
//     // Function to add more items when the user scrolls to the end
//     function addMoreItems() {
//         const lastItem = myList.lastElementChild;
//         const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
//         // const pageOffset = window.pageYOffset + window.innerHeight;
// 		const pageOffset = window.scrollY + window.innerHeight;
		
//         if (pageOffset > lastItemOffset - 20) { // Add more items when close to the end (adjust this value as needed)
//             for (let i = 1; i <= 2; i++) {
//                 const listItem = document.createElement("li");
//                 // listItem.textContent = "Item" + (myList.childElementCount + i);
// 				listItem.textContent = "Item" + (idx);
//                 myList.appendChild(listItem);
// 				idx++;
//             }
//         }
//     }

//     // Add default items
//     addDefaultItems();

//     // Add event listener to the window scroll event
//     window.addEventListener("scroll", addMoreItems);
// });
