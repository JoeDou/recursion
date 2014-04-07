// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here  
  if ((typeof(obj) == "function") || (typeof(obj) == "undefined")){
    return undefined;
  }

  if (obj == null)
  {
    return "null";
  }
  else if (typeof(obj) == "string"){
    return "\""+obj+"\"";
  }else if(Array.isArray(obj)){
    var tempObj = obj;
    var output = "[]";

    for (var i = 0; i < obj.length; i++){
      var temp = tempObj[i];
      var tempString = stringifyJSON(temp);
      if (i == obj.length-1){
        var newOutput = output.slice(0,-1)+tempString.toString()+output.slice(-1);
      }else{
        var newOutput = output.slice(0,-1)+tempString.toString()+","+output.slice(-1);
      }
      output = newOutput;
    }
    return (output);
  }else if(typeof(obj) == "object"){
    var tempObj = obj;
    var output = "{}";
    for (var key in obj){
      var tempKey = stringifyJSON(key);
      var tempString = stringifyJSON(obj[key]);
      if (tempString != undefined){
        var output = output.slice(0,-1)+tempKey+":"+tempString+","+output.slice(-1);
      }
    }
    if (output.slice(-2,-1) == ","){
      output = output.slice(0,-2) + output.slice(-1);
    }
    return(output);

  }else{
  	return obj.toString();
  }
};
