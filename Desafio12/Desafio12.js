$(document).ready(function(){
    // $('.btn-danger').click(function(){
    //     var parentNode = $(this).parent().parent();
    //     $(parentNode).fadeOut(500, function () {
    //         $(this).remove()})
    // });

    $('.btn-danger').click(function(){
        var parentNode = $(this).parent().parent();
        removeElementWithAnimation(parentNode.attr('id'))
    });
    function removeElementWithAnimation(id){
        $('#'+id).fadeOut(500, function () {
        $('#'+id).remove()})
    }
});


/*
El primer método quedó comentado porque me di cuenta que eso no era lo que pedia el ejercicio, 
pero lo deje porque me parece mas corto que lo que sí pedía.
*/