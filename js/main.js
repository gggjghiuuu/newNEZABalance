const main = document.querySelector(".info__data")
const HistoryTemplate = document.querySelector(".history")
const BalanceTemplate = document.querySelector(".balance__info")

const BalanceButton = document.querySelector(".choose__balance")
const HistoryButton = document.querySelector(".choose__history-of-findings")

BalanceButton.addEventListener("click", function(){
    functionActiveOrDisableTemplate(BalanceTemplate, HistoryTemplate);
    //disableButton(BalanceButton, HistoryButton)
    // BalanceButton.disabled = "true";
    // HistoryButton.enabled = "true";
})
HistoryButton.addEventListener("click", function(){
    functionActiveOrDisableTemplate(HistoryTemplate, BalanceTemplate);
    disableButton(HistoryButton, BalanceButton);
    // HistoryButton.disabled = "true";
    //BalanceButton.enabled = "true";
})

// function func1(item) {
//     if (item.style.display !== 'none'){
//         item.style.display="none";
//     }else{
//         item.style.display="flex";
//     } 
// };
function functionActiveOrDisableTemplate(activeItem, disableItem){
    if (activeItem.style.display !== 'none'){
        activeItem.style.display="none";
        disableItem.style.display = "flex";
    }else{
        activeItem.style.display="flex";
        disableItem.style.display="none";
    } 
}
// function disableButton(buttonPressed, buttonUnPressed){
//     if(buttonPressed.disabled !== "false"){
//         buttonPressed.disabled = "false";
//         buttonUnPressed.disabled = "true";
//     }
//     else
//     {
//         buttonPressed.disabled = "true";
//         buttonUnPressed.disabled = "false";
//     }
// }