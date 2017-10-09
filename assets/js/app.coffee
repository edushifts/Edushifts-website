---
---
$ ->
  for el in $('[data-show]')
    hidden_el = $($(el).attr('data-show'))
    hidden_el.hide()

    $(el).on 'click', (e) ->
      $(e.currentTarget).hide()
      hidden_el.show()