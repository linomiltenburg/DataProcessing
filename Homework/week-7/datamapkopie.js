d3.json("data.json", function(error, data) {
  if (error) return console.error(error);

  array = {}
  for (i = 0, n = Object.keys(data).length; i < n; i++){
    id = data[i][0]
    // console.log(array[''])
    value = data[i][1]

    // give a country a certain color when value under -1
    if (value <= -1){
      array[id] = {fillKey:'-1 < %'}
    }
    // give a country a certain color when value between -1 and 0
    else if (value > -1 && value <= 0){
      array[id] = {fillKey:'-1 < 0 %'}
    }
    // give a country a certain color when value between 0 and 1
    else if (value > 0 && value <= 1){
      array[id] = {fillKey:'0 < 1 %'}
    }
    // give a country a certain color when value between 1 and 2
    else if (value > 1 && value <= 2){
      array[id] = {fillKey:'1 < 2 %'}
    }
    // give a country a certain color when value between 2 and 3
    else if (value > 2 && value <= 3){
      array[id] = {fillKey:'2 < 3 %'}
    }
    // give a country a certain color when value higher than 3
    else if (value > 3){
      array[id] = {fillKey:'> 3 %'}
    }
  };

  console.log(array)

  var map = new Datamap({
    element: document.getElementById('container'),

    done: function(map) {
      map.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
      country = geography.id
      console.log(country)
      remove_old_bars()
      takedata(country)

      })
    },

    // fill every country with the color that belongs to their class
    fills: {
      '-1 % <': '#a63603',
      '-1 < 0 %': '#e6550d',
      '0 < 1 %': '#9ecae1',
      '1 < 2 %': '#6baed6',
      '2 < 3 %': '#3182bd',
      '> 3 %': '#08519c',
      defaultFill: 'black'
      },

    data: array

});
map.legend()
})
