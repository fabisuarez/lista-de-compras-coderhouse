 function moverArriba(item){
    //console.log($(item).closest("li").attr("id"));
    //console.log($(item).attr("id"));
    //$($(item).closest("li")).appendTo("#lista");
    //$($(item).parents('li').first().appendTo("#lista"));
    //$("#lista li:first").appendTo("#lista li");
    var $current = $(item).closest('li');
    var $previous = $current.prev('li');
    if($previous.length !== 0){
        $current.insertBefore($previous);
    }
    return false;
}
function moverAbajo(item){
    //console.log($(item).closest("li").attr("id"));
    //console.log($(item).attr("id"));
    //var li = $(item).closest("li");
    //$(li).insertAfter("#lista");
    //$(li).insertAfter("ul#lista li.active");
    //$("ul#lista li.active").after(li);
    //$("#lista li:last").prependTo("#lista");
    // li.click(function() {
    //     var $this = $(this);
    //     $this.insertAfter($this.siblings(':eq(0)'));
    // });
    // $('li').click(function() {
    //     var $this = $(this),
    //         callback = function() {
    //             $this.insertAfter($this.siblings(':eq(0)'));
    //         };
    //     $this.slideUp(500, callback).slideDown(500);
    // });
    var $current = $(item).closest('li');
    var $next = $current.next('li');
    if($next.length !== 0){
        $current.insertAfter($next);
    }
    return false;
}
function eliminarElemento(item){
    $($(item).closest("li")).remove();
    mensaje = $("<div class='alert alert-info' role='alert'>Producto Eliminado</div>");
    mostrarMensaje(mensaje);
}

function mostrarMensaje(html){
    $("#mensaje").html(html);
}

$(document).on( "ready", function() {
    $(function () {
      $(".tooltipClass").tooltip();
    })
    $("#crearElemento").on("click", function(){
        var mensaje = "";
        if($("#inputText").val() != ""){
            var nuevo = $("<li><div class='row''><div class='col-md-8'><p>"+$('#inputText').val()+"</p></div><div class='col-md-4'><button onclick='moverArriba(this)' data-placement='top' title='Bajar Producto' type='button' class='tooltipClass btn btn-default' aria-label='Left Align'><span class='glyphicon glyphicon glyphicon-arrow-up' aria-hidden='true'></span></button> <button onclick='moverAbajo(this)' data-placement='top' title='Subir Producto' type='button' class='tooltipClass btn btn-default' aria-label='Left Align'><span class='glyphicon glyphicon glyphicon-arrow-down' aria-hidden='true'></span></button> <button onclick='eliminarElemento(this)' data-placement='top' title='Eliminar Producto' type='button' class='tooltipClass btn btn-default btn-eliminar' aria-label='Left Align'><span class='glyphicon glyphicon glyphicon-trash' aria-hidden='true'></span></button></div></div></li>");
            $(nuevo).prependTo("#lista");
            $("#inputText").val("");
            mensaje = $("<div class='alert alert-success' role='alert'>Producto Agregado</div>");
        }else{
            mensaje = $("<div class='alert alert-danger' role='alert'>Ingrese el nombre del producto</div>");
        }
        mostrarMensaje(mensaje);
    });
});

// $(".reorder-up").click(function(){
//   var $current = $(this).closest('li')
//   var $previous = $current.prev('li');
//   if($previous.length !== 0){
//     $current.insertBefore($previous);
//   }
//   return false;
// });

// $(".reorder-down").click(function(){
//   var $current = $(this).closest('li')
//   var $next = $current.next('li');
//   if($next.length !== 0){
//     $current.insertAfter($next);
//   }
//   return false;
// });