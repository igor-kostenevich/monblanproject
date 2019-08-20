$(function(){
    $(".dates #datepickerFrom").datepicker({
        format:"dd_mm_yyyy",
        autoclose: true
    }),
    $("#clearButtonFrom").click(function(){
        $("#datepickerFrom").val("").datepicker("update")
    }),
    $("#showButtonFrom").click(function(){
        $(document).ready(function(){
            $("#datepickerFrom").datepicker().focus()
    })}),

    $(".dates #datepickerTo").datepicker({
                format:"dd_mm_yyyy",
                autoclose:!0
    }),
    $("#clearButtonTo").click(function(){
        $("#datepickerTo").val("").datepicker("update")}),
            $("#showButtonTo").click(function(){
                $(document).ready(function(){
                    $("#datepickerTo").datepicker().focus()
    })})
});