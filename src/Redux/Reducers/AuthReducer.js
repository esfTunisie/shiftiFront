const initialState = {
    token: null,
    dataOffre:null,
    isLogIn:false,
    client:null,
    offreDone:null,
    steps:3
  };
  
  function AuthReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_TOKEN":
        return {
          ...state,
          token: action.token,
          isLogIn: action.isLogIn,
          username: action.username,
          password: action.password,
          client: action.client,
          user:action.user
        };
        case "OFFRE_DONE":
          return {
            ...state,
            offreDone: action.offreDone,
          };
          case "TEMPLATE_DONE":
          return {
            ...state,
            templateDone: action.templateDone,
          };
        case "GET_CLIENT":
          return {
            ...state,
            client: action.value,
          };
        case "GET_OFFRE_DATA":
          return {
            ...state,
            dataOffre: action.value,
          };
          case "CHANGE_STEPS":
            return {
              ...state,
              steps: action.steps,
            };
      case "LOGOUT":
        return {
          token: null,
          client: null,
          user:null,
          isLogIn:null,
          username:null
        };
      default:
        return state;
    }
  }
  
  export default AuthReducer;