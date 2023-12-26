const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts : [
				{
					full_name:'',
					email:'',
					phone:'',
					address:'',
					id:''
				}
			],
		},
		actions: {
			loadData:() => {
				const store = getStore();
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Aleska")
				.then((res)=> res.json())
				.then((data)=> setStore({contacts: data}))
				.catch((err)=> console.error(err))
			}
			}
		}
	};


export default getState;
