(function ($) {
  'use strict';

  var defaultData = {i: '000000', n: '中国', 'c': [{i: '330000', n: '浙江省', c: [{i: '330100', n: '杭州市', c: [{i: '330102', n: '上城区'}, {i: '330103', n: '下城区'}, {i: '330104', n: '江干区'}, {i: '330105', n: '拱墅区'}, {i: '330106', n: '西湖区'}, {i: '330108', n: '滨江区'}, {i: '330109', n: '萧山区'}, {i: '330110', n: '余杭区'}, {i: '330122', n: '桐庐县'}, {i: '330127', n: '淳安县'}, {i: '330182', n: '建德市'}, {i: '330183', n: '富阳市'}, {i: '330185', n: '临安市'}]}, {i: '330200', n: '宁波市', c: [{i: '330203', n: '海曙区'}, {i: '330204', n: '江东区'}, {i: '330205', n: '江北区'}, {i: '330206', n: '北仑区'}, {i: '330211', n: '镇海区'}, {i: '330212', n: '鄞州区'}, {i: '330225', n: '象山县'}, {i: '330226', n: '宁海县'}, {i: '330281', n: '余姚市'}, {i: '330282', n: '慈溪市'}, {i: '330283', n: '奉化市'}]}, {i: '330300', n: '温州市', c: [{i: '330302', n: '鹿城区'}, {i: '330303', n: '龙湾区'}, {i: '330304', n: '瓯海区'}, {i: '330322', n: '洞头县'}, {i: '330324', n: '永嘉县'}, {i: '330326', n: '平阳县'}, {i: '330327', n: '苍南县'}, {i: '330328', n: '文成县'}, {i: '330329', n: '泰顺县'}, {i: '330381', n: '瑞安市'}, {i: '330382', n: '乐清市'}]}, {i: '330400', n: '嘉兴市', c: [{i: '330402', n: '南湖区'}, {i: '330411', n: '秀洲区'}, {i: '330421', n: '嘉善县'}, {i: '330424', n: '海盐县'}, {i: '330481', n: '海宁市'}, {i: '330482', n: '平湖市'}, {i: '330483', n: '桐乡市'}]}, {i: '330500', n: '湖州市', c: [{i: '330502', n: '吴兴区'}, {i: '330503', n: '南浔区'}, {i: '330521', n: '德清县'}, {i: '330522', n: '长兴县'}, {i: '330523', n: '安吉县'}]}, {i: '330600', n: '绍兴市', c: [{i: '330602', n: '越城区'}, {i: '330603', n: '柯桥区'}, {i: '330604', n: '上虞区'}, {i: '330624', n: '新昌县'}, {i: '330681', n: '诸暨市'}, {i: '330683', n: '嵊州市'}]}, {i: '330700', n: '金华市', c: [{i: '330702', n: '婺城区'}, {i: '330703', n: '金东区'}, {i: '330723', n: '武义县'}, {i: '330726', n: '浦江县'}, {i: '330727', n: '磐安县'}, {i: '330781', n: '兰溪市'}, {i: '330782', n: '义乌市'}, {i: '330783', n: '东阳市'}, {i: '330784', n: '永康市'}]}, {i: '330800', n: '衢州市', c: [{i: '330802', n: '柯城区'}, {i: '330803', n: '衢江区'}, {i: '330822', n: '常山县'}, {i: '330824', n: '开化县'}, {i: '330825', n: '龙游县'}, {i: '330881', n: '江山市'}]}, {i: '330900', n: '舟山市', c: [{i: '330902', n: '定海区'}, {i: '330903', n: '普陀区'}, {i: '330921', n: '岱山县'}, {i: '330922', n: '嵊泗县'}]}, {i: '331000', n: '台州市', c: [{i: '331002', n: '椒江区'}, {i: '331003', n: '黄岩区'}, {i: '331004', n: '路桥区'}, {i: '331021', n: '玉环县'}, {i: '331022', n: '三门县'}, {i: '331023', n: '天台县'}, {i: '331024', n: '仙居县'}, {i: '331081', n: '温岭市'}, {i: '331082', n: '临海市'}]}, {i: '331100', n: '丽水市', c: [{i: '331102', n: '莲都区'}, {i: '331121', n: '青田县'}, {i: '331122', n: '缙云县'}, {i: '331123', n: '遂昌县'}, {i: '331124', n: '松阳县'}, {i: '331125', n: '云和县'}, {i: '331126', n: '庆元县'}, {i: '331127', n: '景宁畲族自治县'}, {i: '331181', n: '龙泉市'}]}]}]};
  /**
   * options参数说明
   * data: Object, 省市区数组，以{i:'000000',n:'中国',c:[{i:'省市区代码',n:'省市区名称',c:[子级区域]}]}的数据结构
   * type: string, 默认为json，暂不支持其他格式
   * valueField: string 选项选中的值对应的field名，现提供‘code’,'title'两种可选的field。
   *                    注：请不要使用py或pyf作为value，因为多音字的缘故，py、pyf可能为多音构成的数组。
   * searchField: Array 支持快速搜索选项，支持拼音首字母、拼音全拼。现提供‘code’,'title','py','pyf'四种可选的field。
   *                    注：由于中文存在多音字情况，拼音搜索还有一些缺陷
   * labelField: string 显示的label，现提供‘code’,'title'两种可选的field。
   *                    注：请不要使用py或pyf作为value，因为多音字的缘故，py、pyf可能为多音构成的数组
   * placeholder: Array 默认的placeholder，如不需要placeholder，可设置placeholder=false
   * items: Array 默认选中项，例如['330000','330100','330102']，根据valueField定义的field制定
   * selectOnTab: boolean 默认true。是否支持键盘tab事件选中，true表示支持tab选中；false表示不支持tab选中
   * onChange: function 当select选项change时会调用该事件，该事件为了提供一个change时的回调函数，主要用于关联数据的回显。
   *                    注：由于change动作在省市区级联的每一个元素change时都会触发
   *                    例如将省置空，市、区两级也将被置空，会同时触发省、市、区三个select的change事件，本事件也将被调用3次，因此请慎用onChange事件
   *                    注2：暂时未提供省、市、区三个select分开定义onChange的回调函数，只提供了一个共用的onChange，未来可能考虑引入省、市、区三者不同的onChange事件
   * @type {{data: *[], type: string, valueField: string, searchField: string[], labelField: string, placeholder: string[], items: Array, selectOnTab: boolean, onChange: null}}
   */
  var defaults = {
    data: {},
    type: 'json',
    fieldMap: {
      'code': 'i',
      'title': 'n',
      'py': 'p',
      'pyf': 'f'
    },
    valueField: 'code',
    searchField: ['py', 'pyf', 'title'],  // py:拼音, pyf:拼音全, title:显示
    labelField: 'title',
    placeholder: ['省', '市', '区'],
    items: [],
    selectOnTab: true,
    onChange: null
  };

  var pinyin = new Pinyin(true, 'default');

  $.fn.selectizeCity = function (options) {

    function arryToMap(objArray) {
      var oMap = {};
      for(var i = 0; i < objArray.length; i++) {
        objArray[i].p = pinyin.getCamelChars(objArray[i].n);
        objArray[i].f = pinyin.getFullChars(objArray[i].n);
        oMap[objArray[i][options.fieldMap[options.valueField]]] = {
          v: objArray[i],
          m: objArray[i].c ? arryToMap(objArray[i].c) : {}
        };
      }
      return oMap;
    }

    function init($selectize, index, data) {
      delete $selectize.selected;
      $selectize.clearOptions();
      $.each(data, function(key, value) {
        $selectize.addOption({
          code: value.v[options.fieldMap.code],
          title: value.v[options.fieldMap.title],
          py: value.v[options.fieldMap.py],
          pyf: value.v[options.fieldMap.pyf],
          id: key
        });
      });

      // Store index and values in dataSet
      $selectize.$control.data('index', index);
      $selectize.$control.data('values', data);

    }

    function initDefault($self) {
      for(var index = 0; index < $self.$selectize.length; index++){
        $self.$selectize[index].setValue(options.items[index]);
      }
    }

    function selectize($self, $select, data) {

      function onChange(value) {
        // Get index and values from dataSet
        var index = this.$control.data('index');
        var values = this.$control.data('values');
        if(value) {
          this.selected = values[value];
          if(index < $select.length - 1)
            init($self.$selectize[index + 1], index + 1, this.selected.m);
          if(options.onChange && typeof options.onChange === 'function')
            options.onChange.call(this, $self);
        } else {
          delete this.selected;
          if(index < $select.length - 1)
            init($self.$selectize[index + 1], index + 1, []);
          if(options.onChange && typeof options.onChange === 'function')
            options.onChange.call(this, $self);
        }

      }

      for(var i = 0; i < $select.length; i++) {
        $self.$selectize[i] = $($select[i]).selectize({
          valueField: options.valueField,
          searchField: options.searchField,
          labelField: options.labelField,
          placeholder: options.placeholder ? options.placeholder[i] : undefined,
          selectOnTab: options.selectOnTab,
          onChange: onChange
        })[0].selectize;
      }
      init($self.$selectize[0], 0, data);
      initDefault($self);
      return $self;
    }


    return this.each(function() {

      if(!options.data){
        options.data = defaultData;
      }
      // 默认值
      options = $.extend(true, {}, defaults, options);

      var city_json = options.data;

      var city_map = arryToMap([city_json]);

      //console.log(city_map);

      var $self = $(this)[0];
      var $select = $($self).find('select');
      var $province, $city, $dist;

      if($select && $select.length === 0) {
        $('<select class="prov" name="province"></select>').appendTo($self);
        $('<select class="city" name="city"></select>').appendTo($self);
        $('<select class="dist" name="district"></select>').appendTo($self);
        $select = $($self).find('select');
      } else if($select && $select.length !== 3) {
        throw new Error('You need create 3 select element!');
      }

      // 在$self对象上创建省市区的$selectize数组对象
      $self.$selectize = [];

      // 获取当前选中的option，返回的是$selectizez中选中的option对象
      $self.selectedObject = function() {
        if(!this.$selectize) return null;
        return this.$selectize.map(function(x) {
          return x.selected && x.selected.v;
        }).filter(function(x) {
          if(x)
            return x;
        });
      };
      // 获取当前选中的值，以数组形式
      $self.selectedValue = function() {
        if(!this.$selectize) return null;
        return this.$selectize.map(function(x) {
          return x.selected && x.selected.v[options.fieldMap[options.valueField]];
        }).filter(function(x) {
          if(x)
            return x;
        });
      };
      $self.selectedLabel = function() {
        if(!this.$selectize) return null;
        return this.$selectize.map(function(x) {
          return x.selected && x.selected.v[options.fieldMap[options.labelField]];
        }).filter(function(x) {
          if(x)
            return x;
        });
      };

      for(var key in city_map) {
        selectize($self, $select, city_map[key].m);
      }


    });
  };

})(jQuery);
