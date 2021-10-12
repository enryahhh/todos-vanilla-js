document.addEventListener("DOMContentLoaded",function(){
	const formColl = document.getElementById('form-collection');
	formColl.addEventListener("submit",function (event){
		event.preventDefault();
		addCollection();
	})
})