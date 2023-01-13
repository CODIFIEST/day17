import { updateLanguageServiceSourceFile } from "typescript"

type dccUser = {
    name:string,
    isAmdin:boolean,
    isGMI:boolean,
    roles:string[]
}

type dccMessage = {
    user:dccUser,
    text:string,
    keks:number
}

function addKeksToMessage(message:dccMessage){
    message.keks +=1;
}

function canDeleteServer(user:dccUser):boolean {
    if(user.isAmdin){return true}
    else{
        return false;
    }
}
// editMesagetakes a discord message, a discord user, and newText, 
// and if the user name is the sae as the user on the dccMessage itself,
// it allows them to edit the message

function editMessage(message:dccMessage, user:dccUser, newText:string){
    if(message.user === user){
        message.text = `${message.text} ${newText}`
    }
}



// let importedArray = 
// getCheapestNft(importedArray);