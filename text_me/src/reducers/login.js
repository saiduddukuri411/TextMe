export const switchUserAuth = ( state = false, action) => {
   switch( action.type ){
      case "USER_AUTH": return !state;
      default: return state
   }
};