import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY;

export const put_data = (key, data) => ({
	type: "PUT_DATA",
	key,
	data,
})

export const get_news = () => {
	return (dispatch) => {	  
	  axios
		// .get(`everything?domains=thenextweb.com&apiKey=${apiKey}`)
    .get(`news?access_key=${apiKey}&sources=cnn,bbc&categories=technology&languages=en&sort=published_desc`)
		.then((resp) => {				  
      // dispatch(put_data('listArticles', resp.data.articles))
      dispatch(put_data('listArticles', resp.data.data))
		})
		.catch((err) => {
		  console.log(err)
		})		
	};
};