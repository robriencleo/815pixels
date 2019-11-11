jQuery(function($) {
  $('#CICControl td').click(function() {
  var ControlID = '#' + $(this).attr('id') + 'Output';
  $('#CICControl td').removeClass('selected');
  $(this).addClass('selected');
  $('.CICOutput').hide();
  $(ControlID).show();
  });
});
