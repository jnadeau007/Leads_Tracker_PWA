import { initializeApp } from "firebase/app";
import { getDatabase, 
        ref, 
        push, 
        onValue,
        remove,
        connectDatabaseEmulator } from "firebase/database";

const firebaseconfig = {
    databaseUrl: import.meta.env.VITE_DATABASE_URL, 
    projectId: import.meta.env.VITE_PROJECT_ID

}

const app = initializeApp(firebaseconfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads")


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    remove(referenceInDB)
    ulEl.innerHTML = ""

})

onValue(referenceInDB, function(snapshot){
    if(snapshot.exists()){
        const snapshotValues =  snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }

})

inputBtn.addEventListener("click", function() {
    const inputValue = inputEl.value
    if(inputValue){
        push(referenceInDB, inputEl.value)
        console.log("Lead pushed: ", inputValue)
    }
    
    inputEl.value = ""
})