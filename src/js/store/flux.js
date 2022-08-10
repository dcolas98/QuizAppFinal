const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		
		  questions: [],
		  
		  
		  
		  
		  
		  
		  demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white",
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white",
		  },
		],
	  },
	  actions: {
  
		getQuiz: () => {
		  const store = getStore();
		  fetch(
			"https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean"
		  )
			.then((res) => res.json())
			.then((data) => {
			  console.log(data);
			  console.log(data.results[2].question)
			  store.questionList = data
			});
			
			  
		},
  
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
		  /**
					  fetch().then().then(data => setStore({ "foo": data.bar }))
				  */
		},
		changeColor: (index, color) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  //reset the global store
		  setStore({ demo: demo });
		},
	  },
	};
  };
  
  export default getState;
