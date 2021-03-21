const clickAction = function(state=null,action){
    switch(action.type){
        case "BtnActionClicked":
            action.payload(true)
            return null
        default:
        return state;
    }
}

export default clickAction