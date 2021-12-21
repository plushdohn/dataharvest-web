import { useEffect } from "react";

export default function AdsharesBanner() {
  useEffect(() => {
    const script = document.createElement("script");

    script.textContent = `!function(n){var t,e=function(n,t){var e=[["a","e","i","o","u","y"],["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]];if(t)for(var r=0;r<=t.length-1;r++)n=n*t.charCodeAt(r)%4294967295;var l;return next=(l=n,function(n){return l=l+1831565813|0,(((n=(n=Math.imul(l^l>>>15,1|l))+Math.imul(n^n>>>7,61|n)^n)^n>>>14)>>>0)/Math.pow(2,32)}),function(n,t){for(var r=[],l=null,o=0;o<=n-1;o++){var a=void 0;null===l?a=e[0].concat(e[1]):1==l?(a=e[0],l=0):(a=e[1],l=1);var u=a[Math.floor(next()*a.length)];r.push(u),null===l&&(l=-1!=e[0].indexOf(u)?0:1)}return r.push("."+t),r.join("")}}((t=new Date,(t/=1e3)-t%1209600),"_fa7cdd4c68507744")(8,"xyz");if(null===n)console.log("https://"+e);else{var r=n.createElement("script");r.src="https://"+e+"/main.js",(n.body||n.head).appendChild(r)}}("undefined"!=typeof document?document:null);`;

    document.getElementById("adshares-banner")?.appendChild(script);
  }, []);
  return (
    <div
      className="_fa7cdd4c68507744"
      data-zone="f4d7afa498d94df793c00f4d1c1ebfde"
      id="adshares-banner"
      style={{
        width: "468px",
        height: "60pxd",
        display: "inline-block",
        margin: "0 auto",
      }}
    />
  );
}
