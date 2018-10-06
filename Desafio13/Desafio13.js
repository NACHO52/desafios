function getData (url, callback) {
    $.ajax(url)
      .done(function (data) {
        callback(null, data)
        if(data.next != null)
            getData(data.next, function(){                
                showNames(data);
            });
            if(data.results){
                showNames(data);
            }
      })
      .fail(function (error) {
        callback(error);
      });
    }

getData("https://swapi.co/api/people/", function(status, data){        
  });
  function showNames(data){
    for(var i = 0; i < data.results.length; i++)
    {
        console.log(data.results[i].name);
    }
  }