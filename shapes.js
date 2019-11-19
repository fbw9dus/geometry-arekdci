var circle = {
  size: 60,
  color: "cyan"
}

var rectangle = {
  size: 40,
  color: "blue"
}

var parallelogram = {
  width: 70,
  height: 40,
  color: "red"
}

var one = document.querySelector(".board")
var circle1 = document.createElement("div")
var rectangle1 = document.createElement("div")
var rectangleparallelogram1 = document.createElement("div")
var spaceinvider1 = document.createElement("div")


one.appendChild(circle1)
one.appendChild(rectangle1)
one.appendChild(rectangleparallelogram1)
one.appendChild(spaceinvider1)

circle1.classList.add("circle")
rectangle1.classList.add("rectangle")
rectangleparallelogram1.classList.add("parallelogram")
spaceinvider1.classList.add("space-invader")


circle1.style.width = circle.size + "px"
circle1.style.height = circle.size + "px"
circle1.style.backgroundColor = circle.color


rectangle1.style.width = rectangle.size + "px"
rectangle1.style.height = rectangle.size + "px"
rectangle1.style.backgroundColor = rectangle.color

rectangleparallelogram1.style.width = parallelogram.width + "px"
rectangleparallelogram1.style.height = parallelogram.height + "px"
rectangleparallelogram1.style.backgroundColor = parallelogram.color

spaceinvider1.style.width = space - invider.width + "em"
spaceinvider1.style.hight = space - invider.height + "em"
spaceinvider1.style.backgroundColor = space - invider
spaceinvider1.style.boxShadow = space - invider + "em"
spaceinvider1.style.overflow = space - invider
spaceinvider1.style.margin = space - invider



















