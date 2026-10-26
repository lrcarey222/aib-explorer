import{N as u,a as l}from"./numeric-BgXiw7ds.js";const c="\uFEFF";function f(n,r){if(Array.isArray(n)){const o=n[r];return o==null?"":i(o)}if(n instanceof Float64Array){const o=n[r];return o!==o?"":String(o)}if(n instanceof Int32Array)return n[r]===u?"":String(n[r]);const e=n[r];return e===l?"":e?"TRUE":"FALSE"}function i(n){return/[",\r\n]/.test(n)||/^\s|\s$/.test(n)?`"${n.replace(/"/g,'""')}"`:n}function p(n,r){const e=Object.keys(n.cols),o=[e.map(i).join(",")];for(let s=0;s<n.nrow;s++)o.push(e.map(t=>f(n.cols[t],s)).join(","));return o.join(`\r
`)+`\r
`}function y(n,r){const e=r??(n.length?Object.keys(n[0]):[]),o=t=>t==null||typeof t=="number"&&!Number.isFinite(t)?"":typeof t=="boolean"?t?"TRUE":"FALSE":typeof t=="number"?String(t):i(String(t));return[e.map(i).join(","),...n.map(t=>e.map(a=>o(t[a])).join(","))].join(`\r
`)+`\r
`}const j=n=>c+n;export{y as r,p as t,j as w};
//# sourceMappingURL=csv-DnhE45v3.js.map
