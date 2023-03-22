
function superbowlWin(records) {
    function isWin(element){
        if (element.result === "W"){
            return element;
        }
    }
    let found = records.find(isWin);
   if (found){
        return found.year;
    } 
    
}
