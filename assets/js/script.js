$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".for").not("." + optionValue).hide();
                $("." + optionValue).show();
                $(".all-buttons").show();
            } else{
                $(".for").hide();
                $(".all-buttons").hide();
            }
        });
    }).change();
});