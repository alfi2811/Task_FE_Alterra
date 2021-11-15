const news_state = {
	nameNews : [],	
	listArticles : [],
}

const news = (state = news_state, action) => {
    switch (action.type) {
		case "PUT_DATA":
			return { ...state, [action.key]: action.data };		
		default:
			return state;
	}
};

export default news;