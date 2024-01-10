var optionsChart1 = {
  chart: {
    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
},
    type: 'bar'
  },
  series: [{
    name: 'sales',
    data: [30,40,45,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart1 = new ApexCharts(document.querySelector("#chart1"), optionsChart1);

chart1.render();

var optionsChart2 = {
  chart: {
    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
},
    type: 'radar',
  },
  series: [{
    name: 'sales',
    data: [30,40,45,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart2 = new ApexCharts(document.querySelector("#chart2"), optionsChart2);

chart2.render();

var optionsChart3 = {
  chart: {
    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
},
    type: 'line'
  },
  series: [{
    name: 'sales',
    data: [30,40,45,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart3 = new ApexCharts(document.querySelector("#chart3"), optionsChart3);

chart3.render();

var optionsChart4 = {
  chart: {
    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
},
    type: 'area'
  },
  series: [{
    name: 'sales',
    data: [30,40,45,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart4 = new ApexCharts(document.querySelector("#chart4"), optionsChart4);

chart4.render();


var optionsChart5 = {
          series: [
          {
            name: "",
            data: [200, 330, 548, 740, 880, 990, 1100, 1380],
          },
        ],
          chart: {
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
            },
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            horizontal: true,
            distributed: true,
            barHeight: '80%',
            isFunnel: true,
          },
        },
        colors: [
          '#F44F5E',
          '#E55A89',
          '#D863B1',
          '#CA6CD8',
          '#B57BED',
          '#8D95EB',
          '#62ACEA',
          '#4BC3E6',
        ],
        dataLabels: {
          enabled: true,
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] 
          },
          dropShadow: {
            enabled: true,
          },
        },
        title: {
          text: 'Pyramid Chart',
          align: 'middle',
        },
        xaxis: {
          categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains'],
        },
        legend: {
          show: false,
        },
        };

        var chart5 = new ApexCharts(document.querySelector("#chart5"), optionsChart5);
        chart5.render();
