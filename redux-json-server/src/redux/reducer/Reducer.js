import * as types  from '../action/ActionType';
const initialState ={
    users:[],
    user:{},
    loading:true

}

const usersReducer=(state= initialState,action)=>{
    switch(action.type){
        case "GET_USERS":
            return{
                ...state,
                users:action.payload,
                loading:false
            }
            break;
        case types.DELETE_USER:
             return{
                 ...state,
                 loading:false
             }
             break;
        case types.ADD_USER:
            return{
                ...state
            }
        break;
        case types.GET_SINGLE_USER:
            return{
                ...state,
                loading:false,
                user:action.payload
            }
            break;
         case types.UPDATE_USER:{
             return {
                 ...state,
             }
         }
        default:
            return state;
    }
}


export default usersReducer;