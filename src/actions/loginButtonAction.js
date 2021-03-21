let btnAction = function(isClickedReducer){
    console.log("Btn action is clicked")
    return{
        type: "BtnActionClicked",
        payload: isClickedReducer
    }
}

export default btnAction;