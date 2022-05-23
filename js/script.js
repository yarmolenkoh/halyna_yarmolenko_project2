let contactsArray = [];
for (let i=0; i<54; i++) {
    contactsArray[i] = document.getElementsByClassName("contact-list")[0].children[i];
}

let page = 1;
let pageSize = 10;
const numOfPages = Math.ceil(contactsArray.length/pageSize);
let startIndex = 0, endIndex = 0;

function ShowPageList(contactList, contacts, pageSize, pageNumber){
    contactList.innerHTML="";
    let startIndex = (pageNumber - 1)*pageSize;
    let endIndex = startIndex + pageSize;
    let arrayToShow = contacts.slice(startIndex, endIndex);
    for(let i = 0; i < arrayToShow.length; i++){
        contactList.appendChild(arrayToShow[i]);
    }
}

function CreatePagination(pagination, numOfPages, pageSize){
    pagination.innerHTML="";
    for(let i = 1; i < numOfPages + 1; i++){
        let pageButton = document.createElement("li");
        let a = document.createElement("a");
        a.innerHTML = i;
        pageButton.appendChild(a);
        pagination.appendChild(pageButton);
        pageButton.addEventListener('click', function(){
            page = i;
            ShowPageList(document.getElementsByClassName("contact-list")[0], contactsArray, pageSize, page);
        })
    }

}

ShowPageList(document.getElementsByClassName("contact-list")[0], contactsArray, pageSize, page);
CreatePagination(document.getElementsByClassName("pagination")[0], numOfPages, pageSize);