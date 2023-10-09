	
 
	var contenido="";
	fetch('http://www.raydelto.org/agenda.php').then(response => response.json()).then(json => {
		for(i=0; i < Object.keys(json).length; i++){
			
			contenido += '<div class="table100-body js-pscroll">\
							<table>\
								<tbody><tr class="row100 body">\
										<td class="cell100 column1">'+json[i]["nombre"]+'</td>\
										<td class="cell100 column3">'+json[i]["apellido"]+'</td>\
										<td class="cell100 column5">'+json[i]["telefono"]+'</td>\
									</tr>\
								</tbody>\
							</table>\
						   </div>';
			
					
		}
		document.getElementById("hey").innerHTML = contenido;
		console.log(json)
	})
	
function Enviar(){
	var datos = {nombre,apellido,telefono};
	datos.nombre = document.getElementById("nombre").value;
	datos.apellido = document.getElementById("apellido").value;
	datos.telefono = document.getElementById("telefono").value;

	fetch("http://www.raydelto.org/agenda.php", {
  	method: 'POST', 
	mode: 'no-cors',
 	body: JSON.stringify(datos),
  	headers:{
		'Content-Type': 'application/json'
  	}
	}).then(res => res.json())
	.catch(error => console.error('Error:', error))
	.then(response => console.log('Success:', response));

	setTimeout(CargarPágina,4000)
	
}

function CargarPágina(){
	window.location.reload();
}
	
