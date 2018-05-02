
/*$( document ).ready(function() {
   $("button").click(function(){
        //$('#mitexto').text("Has pinchado en el boton");
        //$('#mitexto').css('color','red');
        //$('img').height('200px');
        /* $('img').fadeOut(1600, function() {
        });
        function completado() {
        }
        $('img').fadeOut(1600, completado);
        $('#mitexto').toggleClass('miestilo'); 
        $('#micapa').css(
            {
                'font-size' : '10px',
                'background-color' : 'green',
                'color' : 'white'
            }
        );
        $(this).removeClass('btn-danger').addClass('btn-warning');
    });
    $("#miboton2").mouseover(function(){
        $('#micapa').append('<p>Este es el nuevo texto</p>');
    });
    $("#miboton1").mouseover(function(){
        $('#micapa > p:last-child').remove();
    });
    $("#miboton3").click(function(){
        console.log($('#micapa > p:first-child').text());
        if ($('#micapa > p:first-child').text()=='Hoy'){
            $('#micapa > p:first-child').text("");
        }
    });
});*/

$( document ).ready(function() {
    /*$('img').on('mousedown', function(){
        $(this).height(200); 
    })

    $('img').on('mouseup muoseover',function(){
        $(this).height(300);
    }) */

    $('#miboton1').on('click',function(){
        $('#miboton3').removeClass()
        $('#miboton3').text('Activado');
        $('#miboton3').on('click', function(){
            $('img').hide();
        });
    });

    $('#miboton2').on('click',function(){
        $('#miboton3').off('click');
    });



});


