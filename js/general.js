
(function($){

//------------------------------------------------------------------------------

Drupal.behaviors.slfilm_hide_ref = {
  attach: function (context,settings) {
        // Remove the ID 
       // $("input#edit-film-autocomplete").click(function () {alert('hhh');});
        
        $("input#edit-film").once('gg', function() {
          $("input#edit-film").blur(function () {
              $("input#edit-submit").focus();
            var value = $(this).val();
            var result = value.match(/\[\d+\]/);
            //alert('ghgh');
            if (result != null) {
              //alert(value.substr(0,value.length - result[0].length ));
              $(this).val(value.substr(0,value.length - result[0].length));
              var film_node_id = result[0].substr(1,result[0].length-2);

              $('input[name=film_node_id]').val(film_node_id);

            }
          });
        });
        
        $("input#edit-person").once('gg', function() {
          $("input#edit-person").blur(function () {
              $("input#edit-submit").focus();
            var value = $(this).val();
            var result = value.match(/\[\d+\]/);
            //alert('ghgh');
            if (result != null) {
              //alert(value.substr(0,value.length - result[0].length ));
              $(this).val(value.substr(0,value.length - result[0].length - 1));
              var person_node_id = result[0].substr(1,result[0].length-2);

              $('input[name=person_node_id]').val(person_node_id);

            }
          });
        });  

        $("input#edit-organisations").once('gg', function() {
          $("input#edit-organisations").blur(function () {
              $("input#edit-submit").focus();
            var value = $(this).val();
            var result = value.match(/\[\d+\]/);
            //alert('ghgh');
            if (result != null) {
              //alert(value.substr(0,value.length - result[0].length ));
              $(this).val(value.substr(0,value.length - result[0].length - 1));
              var person_node_id = result[0].substr(1,result[0].length-2);

              $('input[name=organisation_node_id]').val(person_node_id);

            }
          });
        });  
  }

};


//
//Drupal.behaviors.sfilmRoles = {
//  attach: function (context,settings) {
//    $('div.form-item-character').hide();
//    $('div.form-item-new-subrole').hide();
//    
//    $('#edit-subrole').change(function() {
//      var option = $(this).val();
//      if (option == '_other') {
//        $('div.form-item-new-subrole').show();
//      } else {
//        $('div.form-item-new-subrole').hide();
//      }
//    });
//  }
//}
})(jQuery);