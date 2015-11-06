// Javascript warm-up exercises


var ApplePie = {
	creator : '',
	ingredients : []
};

// Exercise 1:
creator = document.getElementById("header").getElementsByTagName("p")[0].textContent
ApplePie.creator = creator

ingredients = document.getElementById("ingredient-list").getElementsByTagName("li")

for (i = 0, n = ingredients.length; i<n; i++){
ApplePie.ingredients.push(ingredients[i].textContent)
}

// Exercise 2:
for (var i = 0, n = ingredients.length; i<n; i++) {
console.log(ApplePie.ingredients[i])
}

// Exercise 3:
var printer = function(){
	console.log("this is an applepie")
}

image = document.getElementsByTagName('img')[0];

image.addEventListener("click", printer);

// Exercise 4:
function createTransform(domain, range){
	var beta = range[0]-domain[0];
	var alpha = range[1]/domain[1];

	return function(x){
		return alpha * x + beta;
	};
}

var transform = createTransform([10, 20], [10, 20]);
console.log(transform(15)); //should return 15!!
