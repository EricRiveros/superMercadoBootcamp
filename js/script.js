/* cambiar color contacto */
$(document).ready(function(){
    $(".contacto").mouseenter(function(){
        $(".contacto").css("background-color", "YellowGreen");
    });
    $(".contacto").mouseleave(function(){
        $(".contacto").css("background-color", "");
    });
  });
/* zoom a imagenes */
$(document).ready(function(){
    $("#manzana1").mouseenter(function(){
        
      $(this).zoom();
      
    });
  });
 /* mostrar productos */
 $(document).ready(function () {
    $(".verduras").click(function () {
    $(".fruta").show();
    $(".carnes").hide();
    $(".lacteos").hide();
    })
   

    
       
        
   })

      
  