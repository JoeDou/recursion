// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var output = [];

  var getChildNode = function (htmlNode){
  	var child = htmlNode.childNodes;

  	for (var i =0; i < child.length; i++){
  		if (child[i].hasOwnProperty("classList")) {
  			if(child[i].classList.contains(className)){
  				output.push(child[i]);
  			}
  		}
  		if (child[i].childNodes.length > 0)
  		{
  			getChildNode(child[i]);
  		}
  	}  	
  }

  getChildNode(document.body);

  return output;
};

