(function() {
  $(function() {
    var el, hidden_el, i, len, ref, results;
    ref = $('[data-show]');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      el = ref[i];
      hidden_el = $($(el).attr('data-show'));
      hidden_el.hide();
      results.push($(el).on('click', function(e) {
        $(e.currentTarget).hide();
        return hidden_el.show();
      }));
    }
    return results;
  });

}).call(this);
