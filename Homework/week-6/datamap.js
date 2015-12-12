d3.json("data.json", function(error, data) {
  if (error) return console.error(error);
  console.log(data);


    array = {}
    array2 = {}
    for (i = 0, n = data.length; i < n; i++){
      id = data[i][0]
      value = data[i][1]

      // give a country a certain color when value under -1
      if (value <= -1){
        array[id] = {fillKey:'class1'}
        array2[id] = {growth: value}
      }
      // give a country a certain color when value between -1 and 0
      else if (value > -1 && value <= 0){
        array[id] = {fillKey:'class2'}
        array2[id] = {growth: value}
      }
      // give a country a certain color when value between 0 and 1
      else if (value > 0 && value <= 1){
        array[id] = {fillKey:'class3'}
        array2[id] = {growth: value}
      }
      // give a country a certain color when value between 1 and 2
      else if (value > 1 && value <= 2){
        array[id] = {fillKey:'class4'}
        array2[id] = {growth: value}
      }
      // give a country a certain color when value between 2 and 3
      else if (value > 2 && value <= 3){
        array[id] = {fillKey:'class5'}
        array2[id] = {growth: value}
      }
      // give a country a certain color when value higher than 3
      else if (value > 3){
        array[id] = {fillKey:'class6'}
        array2[id] = {growth: value}
      }
    };

    console.log(array)
    console.log(array2)

    //
    var map = new Datamap({
      element: document.getElementById('container'),

      // fill every country with the color that belongs to their class
      fills: {
        'class1': '#a63603',
        'class2': '#e6550d',
        'class3': '#9ecae1',
        'class4': '#6baed6',
        'class5': '#3182bd',
        'class6': '#08519c',
        defaultFill: 'black'
        },

      data: array

    })
});
