import { c as create_ssr_component, e as escape, v as validate_component, f as each, d as add_attribute } from "../../../chunks/index2.js";
import "../../../chunks/db.js";
import "sse.js";
const ChatMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { message } = $$props;
  let activeColor = "";
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `<div class="${"chat " + escape(type === "user" ? "chat-end" : "chat-start", true) + " justify-end"}"><div class="${"chat-image avatar"}"><div class="${"w-10 rounded-full"}"><img src="${"https://ui-avatars.com/api/?name=" + escape(type === "user" ? "Me" : "A", true)}" alt="${escape(type, true) + " avatar"}"></div></div>
	<div class="${"chat-header"}">${escape(type === "user" ? "Me" : "Ali")}</div>
	<div class="${"chat-bubble " + escape(type === "user" ? "" + activeColor : "chat-bubble", true)}">${escape(message)}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let query = "";
  let chatMessages = [];
  let scrollToDiv;
  return `<div class="${"flex flex-col pt-20 w-full px-8 items-center gap-2"}"><div class="${"h-[500px] w-full bg-gray-900 rounded-md p-4 overflow-y-auto flex flex-col gap-4"}"><div class="${"flex flex-col gap-2"}"><p></p> 
			${`${validate_component(ChatMessage, "ChatMessage").$$render(
    $$result,
    {
      type: "assistant",
      message: "Hello! I am Ali. May I please know your name?"
    },
    {},
    {}
  )}
				${each(chatMessages, (message) => {
    return `${validate_component(ChatMessage, "ChatMessage").$$render(
      $$result,
      {
        type: message.role,
        message: message.content
      },
      {},
      {}
    )}`;
  })}
				${``}
				${``}`}</div>
		<div class="${""}"${add_attribute("this", scrollToDiv, 0)}></div></div>
	<form class="${"flex w-full rounded-md gap-4 bg-gray-900 p-4"}"><input type="${"text"}" class="${"input input-bordered w-full"}"${add_attribute("value", query, 0)}>
		<button type="${"submit"}" class="${"btn btn-accent"}">Send </button></form></div>`;
});
export {
  Page as default
};
