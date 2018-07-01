// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//selecting grid height and width and submitting the input.

$("#sizePicker").submit(function(event){
	let width, height;

    event.preventDefault();

  width = $("#inputWeight").val();

  height = $("#inputHeight").val();

  makeGrid(width, height);

});

//making matrix using loops

function makeGrid(width, height) {

  $("tr").remove();

  for(let x=1; x<=width; x++){

  	$("#pixelCanvas").append("<tr class=tableWidth" + x +"></tr>");

  	for (let y=1; y<=height; y++){

  		$(".tableWidth" + x).append("<td></td>");

  	}
  }

//adding and removing color in the cells using attr.("style")

  $("td").click(function addColor(){

  	const cells = $("#colorPicker").val();

  	if($(this).attr("style")){

  		$(this).removeAttr("style");

  	}else{

  		$(this).attr("style", "background-color:" + cells);


  	}

  });

}
