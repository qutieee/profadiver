import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-300 shadow-lg fixed top-0 left-0 w-full z-50"}"><div class="${"flex-1 ml-7"}"><a href="${"/"}" class="${"logo"}"><img src="${"profadiver-ali.png"}" alt="${"logo"}" width="${"50"}" height="${"30"}"></a></div>
  <div class="${"flex-none text-neutral-content mr-7"}"><ul class="${"menu menu-horizontal px-1"}"><li><a href="${"/"}">Home</a></li>
      <li><a href="${"/About"}">About</a></li>
      <li><a href="${"/Contact"}">Contact</a></li></ul></div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"footer footer-center mt-5 p-10 bottom-0 bg-base-100 text-white-200"}"><div><img width="${"250"}" alt="${"logo"}" height="${"150"}" src="${"profadiver-logo.png"}">
    <p class="${"font-bold pt-8"}"><br></p> 
    <p>Copyright © 2023 - All right reserved</p></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

	${slots.default ? slots.default({}) : ``}

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
