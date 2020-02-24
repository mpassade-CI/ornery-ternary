function isHot(temp) {
 return temp >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.'
}

function helloThere(name) {
  return name.length>5 ? 'Hi, ' + name : 'Hello, ' + name
}


function goodbyeYou(name) {
  return name ? 'Goodbye, '+name : 'Goodbye, stranger'
}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}