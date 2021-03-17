function deleteIntersect(albID, genID){
    $.ajax({
        url: '/intersect/albID/' + albID + '/genID/' + genID,
        type: 'DELETE',
        success: function(result){
            if(result.responseText != undefined){
              alert(result.responseText)
            }
            else {
              window.location.reload(true)
            } 
        }
    })
  };