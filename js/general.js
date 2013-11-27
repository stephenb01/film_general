
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

Drupal.behaviors.sfilmRoleAutocomplete = {
  attach: function (context,settings) {
    var current_role = "";
    $("input[id=edit-role]").blur(function () {
      var role = $(this).val();
      // We only want to update the subrole selection list if the main
      // role has been changed.
      if (role !== current_role) {
        current_role = role;
        $.ajax({
            type: 'POST',
            url: Drupal.settings.basePath +'js/film_links/subrole_search',
            dataType: 'json',
            success: ajaxSubRoleAutoCompleted,
            // Might want to use 'ui' instead of jQuery('#slider').
            data: 'role=' + role + '&type=' + $("input[name=role_type]").val()
        });
      }
    });
    
    function ajaxSubRoleAutoCompleted(data) {
      $.each(data,function(index,element) {
        if (index == 'role_details') {
          if (element == 1) {
            $('.form-item-character').show();
          } else {
            $('.form-item-character').hide();
          }
        }
      });  
    }
  }
}	


Drupal.behaviors.sfilmRoles = {
  attach: function (context,settings) {
    $('div.form-item-character').hide();
    $('div.form-item-new-subrole').hide();
    
    $('#edit-subrole').change(function() {
      var option = $(this).val();
      if (option == '_other') {
        $('div.form-item-new-subrole').show();
      } else {
        $('div.form-item-new-subrole').hide();
      }
    });
  }
}
})(jQuery);