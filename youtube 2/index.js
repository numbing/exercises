$(function(){
  var searchField = $('#query');
  var icon = $('#search-btn');
  $(searchField).on('focus' ,function(){
    $(this).animate({
      width :'100%'
    },400);
    $(icon).animate({
      right : '10px'
    },400);
  });
    $(searchField).on('blur' ,function(){
      if(searchField.val() === ''){
        $(searchField).animate({
          width :'100%'
        },400, function(){});
        $(icon).animate({
          right :'360px'
        },400, function(){});


      }
  });

});

function search(){
  $('results').html('');
  $('results').html('');

  var q = $('#query');
  $.get(
    "https://www.googleapis.com/youtube/v3/search",{
      part : 'snipped, id',
      q : q,
      type : 'video',
      key :'AIzaSyCJHWJLegv1A44rsRQeDGYeLG-zt94Y610'},
      function(data){
        var nextPageToken = data.nextPageToken;
        var prevPageToken = data.prevPageToken;

        console.log(data);
        $.each(data.items ,function(i ,item){
          var output = getOutput(item);
          $('#results').append(output);
        })

      }
  );
}