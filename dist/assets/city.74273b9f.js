import{y as i}from"./index.1d9da499.js";import{O as e}from"./index.f0899187.js";function c(){return e.get({url:"city/all"})}const a=i("city",{state:()=>({cityAll:{},showCity:{cityName:"\u9752\u5C9B"}}),actions:{async cityAllAction(){const t=await c();this.cityAll=t.data}}});export{a as u};
