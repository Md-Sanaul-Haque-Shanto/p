var data = [{
  type: "pie",
  values: [825, 51290, 9461, 139,2968,62,6674],
  labels: ["Hydro", "Natural Gas", "Furnace Oil", "Diesel", "Coal", "Renewable Energy", "Power Import"],
  textinfo: "label+percent",

  insidetextorientation: "radial",
  automargin: true
}]

var layout = {

      title: 'Total net energy generated in public and private sector power plants:',


  
  height: 400,
  width: 700
  }

Plotly.newPlot('energygen', data, layout)