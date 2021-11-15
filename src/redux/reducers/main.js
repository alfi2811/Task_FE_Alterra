const main_state = {
	baseFormContact: {
    nama: "",
    email: "",
    noHandphone: "",    
    nation: "",
    message: "",
  },
	baseErrFormContact: {
    nama: "",
    email: "",
    noHandphone: "",    
  },
  messageContact: {}
}

const main = (state = main_state, action) => {
    switch (action.type) {		
    case "ADD_MESSAGE_CONTACT":
			return { ...state, messageContact: action.data };		
		default:
			return state;
	}
};

export default main;