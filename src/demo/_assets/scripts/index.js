'use strict';

$(function() {

  var cities;
  $.ajax('/ajax/city.min.json', {
    async: false,
    success: function (data) {
      cities = data;
    }
  });

  var $tbody = $('table[for="getSelectInfo"]>tbody');

  var selectG = $('.select-group').each(function(index) {

    $('<tr class="selected-info">' +
      '<td>' + index + '</td>' +
      '<td>未选择</td>' +
      '<td>未选择</td>' +
      '</tr>').appendTo($tbody);

    var items = $(this).data('selected') && $(this).data('selected').split(',') || [];

    if($(this).hasClass('select-group2')) {
      $(this).selectizeCity({
        data: cities,
        items: items,
        onChange: function($self) {
          var selectedObject = $self.selectedObject();
          var selectedLabel = $self.selectedLabel();
          var selectedValue= $self.selectedValue();
          var $tr = $tbody.find('.selected-info:eq(' + index + ')');
          //console.log($tr);
          $tr.find('td:eq(0)').text(index);
          $tr.find('td:eq(1)').text((selectedLabel && selectedLabel.length !== 0) ? selectedLabel: '未选择');
          $tr.find('td:eq(2)').text((selectedValue && selectedLabel.length !== 0) ? selectedValue: '未选择');
        }
      });
    } else {
      $(this).selectizeCity({
        items: items,
        onChange: function($self) {
          var selectedObject = $self.selectedObject();
          var selectedLabel = $self.selectedLabel();
          var selectedValue= $self.selectedValue();
          var $tr = $tbody.find('.selected-info:eq(' + index + ')');
          //console.log($tr);
          $tr.find('td:eq(0)').text(index);
          $tr.find('td:eq(1)').text((selectedLabel && selectedLabel.length !== 0) ? selectedLabel: '未选择');
          $tr.find('td:eq(2)').text((selectedValue && selectedLabel.length !== 0) ? selectedValue: '未选择');
        }
      });
    }
  });

});
