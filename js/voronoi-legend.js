L.Control.voronoiLegend = L.Control.extend({
  onAdd: function(map) {
    let div = L.DomUtil.create('div', 'voronoi-legend'),
      gradesLabels = '',
      grades = [0, 35, 53, 70];

    // loop through our density intervals and 
    // generate a label with a colored square for each interval
    for(let i = 0; i < grades.length; i++) {
      let color = this.getColor(grades[i] + 1);
      gradesLabels +=
        `<i style="background:${color};">&nbsp;&nbsp;&nbsp;&nbsp;</i>&nbsp;` + 
        `${grades[i]}${(grades[i + 1] ? `&ndash;${grades[i + 1]}` : '+')}<br>`;
    }
    div.innerHTML =
      `<table border=1 bgcolor="#ffffff" cellspacing=0 cellpadding=5>
        <tr>
          <td bgcolor="#ffffff">
            <font size="-1">${gradesLabels}</font>
          </td>
        </tr>
      </table>`;

    return div;
  },
  getColor: function(d) {
    return d < 35 ? "#31CF00" :
     d < 53 ? "#FFFF00" :
     d < 70 ? "#FF0000" :
              "#CE30FF";
  }
});

L.control.voronoiLegend = function(options) {
  return new L.Control.voronoiLegend(options);
};
