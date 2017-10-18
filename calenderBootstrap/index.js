$(document).ready(function() {
  var startMonth , startYear , endMonth ,endYear;
       $(function () {
           $('#datetimepicker6').datetimepicker();
           $('#datetimepicker7').datetimepicker({
               useCurrent: false //Important! See issue #1075
           });
           $("#datetimepicker6").on("dp.change", function (e) {
               $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
               startYear = e.date._d.getYear();
               startMonth = e.date._d.getMonth();
           });
           $("#datetimepicker7").on("dp.change", function (e) {
               $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
               endYear = e.date._d.getYear();
               endMonth = e.date._d.getMonth();
           });
           $('#btn').on('click', function(){
              var resultYears = endYear - startYear;
              var resultMonth = endMonth - startMonth;
              if(resultYears == 0){
                 $('#result').text(resultMonth+': ms');
              }else{
                $('#result').text(resultYears+': yr '+resultMonth+': ms');
              }

           });
       });
   });