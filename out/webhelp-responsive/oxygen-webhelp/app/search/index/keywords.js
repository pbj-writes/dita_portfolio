define(function() {var keywords=[{w:"FICO",p:["p0"]},{w:"Bechtel",p:["p1"]},{w:"Marine",p:["p1"]},{w:"Propulsion",p:["p1"]},{w:"Corporation",p:["p1"]},{w:"(BMPC)",p:["p1"]},{w:"Contact",p:["p2"]},{w:"Education",p:["p3"]},{w:"Experience",p:["p4"]},{w:"Florida",p:["p5"]},{w:"International",p:["p5"]},{w:"University",p:["p5","p8","p9"]},{w:"(FIU)",p:["p5"]},{w:"Marathon",p:["p6"]},{w:"TS",p:["p6"]},{w:"Summary",p:["p7"]},{w:"State",p:["p8"]},{w:"of",p:["p8"]},{w:"New",p:["p8"]},{w:"York",p:["p8"]},{w:"College",p:["p8"]},{w:"at",p:["p8"]},{w:"Cortland",p:["p8"]},{w:"Syracuse",p:["p9"]},{w:"Technical",p:["p10"]},{w:"Skills",p:["p10"]}];
var ph={};
ph["p0"]=[0];
ph["p1"]=[1, 2, 3, 4, 5];
ph["p2"]=[6];
ph["p3"]=[7];
ph["p4"]=[8];
ph["p5"]=[9, 10, 11, 12];
ph["p6"]=[13, 14];
ph["p7"]=[15];
ph["p8"]=[16, 11, 17, 18, 19, 20, 21, 22];
ph["p9"]=[23, 11];
ph["p10"]=[24, 25];
     return {
         keywords: keywords,
         ph: ph
     }
});
