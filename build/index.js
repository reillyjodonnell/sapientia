var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-WPJSDQAM.css";

// app/contexts/sound-context.tsx
var import_react2 = require("react");
var SoundContext = (0, import_react2.createContext)(null);
function useSound() {
  return (0, import_react2.useContext)(SoundContext);
}
function SoundProvider({ children }) {
  const [mute, setMute] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const result = localStorage.getItem("mute") ?? "false";
    setMute(typeof window !== "undefined" ? JSON.parse(result) : false);
  }, []);
  (0, import_react2.useEffect)(() => {
    console.log(`mute is ${mute}`);
    localStorage.setItem("mute", JSON.stringify(mute));
  }, [mute]);
  function toggleMute() {
    console.log(`toggling from mute = ${mute}`);
    setMute((prev) => !prev);
  }
  const values = { mute, toggleMute };
  return /* @__PURE__ */ React.createElement(SoundContext.Provider, {
    value: values
  }, children);
}

// app/components/motd.tsx
var Motd = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " w-full flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full flex items-center justify-center bg-dark-mode-bg rounded"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-4 px-20  border-2 border-solid border-accent-pink w-full text-center rounded"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-white"
  }, "We stand with Ukraine \u{1F1FA}\u{1F1E6}", /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://razomforukraine.org/",
    className: "pl-2 cursor-pointer font-bold text-primary-text focus-within:text-accent-pink hover:text-accent-pink"
  }, "Donate here")))));
};
var motd_default = Motd;

// app/components/header.tsx
var import_react3 = require("@remix-run/react");
var Logo = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " space-x-1 cursor-pointer"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold  "
  }, "Sapientia")));
};
var NavigationLoginElement = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " cursor-pointer ml-2 sm:ml-4 "
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/login"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "px-6 py-2  flex justify-center items-center place-items-center border border-solid border-white/60  rounded-md drop-shadow-md  focus-within::bg-slate-50/5 focus-within::border-white hover:bg-slate-50/5 hover:border-white "
  }, /* @__PURE__ */ React.createElement("span", null, "Login"))));
};
var Github = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "cursor-pointer flex justify-center items-center  px-5 py-2 rounded-xl hover:bg-stone-900 hover:text-accent-pink  opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink "
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/reillyjodonnell/sapientia",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "focus-within:opacity-100 opacity-80"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "30px",
    height: "30px",
    className: " fill-primary-text ",
    viewBox: "0 0 128 128"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
  })))));
};
var Navigation = ({ mute, toggleMute }) => {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement(NavigationElement, {
    name: "Topics",
    location: "/learn"
  }), /* @__PURE__ */ React.createElement(NavigationElement, {
    name: "Paths",
    location: "/paths"
  }), /* @__PURE__ */ React.createElement(Github, null), /* @__PURE__ */ React.createElement("div", {
    className: " cursor-pointer ml-2 sm:ml-4 "
  }, /* @__PURE__ */ React.createElement("button", {
    className: "flex border-2 border-solid border-black  active:border-stone-200 hover:border-stone-200 px-4 py-[.25rem] rounded"
  }, /* @__PURE__ */ React.createElement("span", {
    onClick: toggleMute,
    className: "text-2xl cursor-pointer"
  }, mute ? "\u{1F507}" : "\u{1F508}"))), /* @__PURE__ */ React.createElement(NavigationLoginElement, null));
};
var NavigationElement = ({ name, location }) => {
  return /* @__PURE__ */ React.createElement(import_react3.Link, {
    className: "px-5 py-2 rounded-xl hover:bg-stone-900 hover:text-accent-pink  opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink ",
    to: location
  }, name);
};
var Header = () => {
  const values = useSound();
  const { mute, toggleMute } = values;
  return /* @__PURE__ */ React.createElement("header", {
    className: "px-6 lg:px-12 py-6 flex justify-between items-center text-white header  bg-black"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement(Navigation, {
    mute,
    toggleMute
  }));
};

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => ({
  charset: "utf-8",
  title: "Sapientia",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.4"
    }
  }, /* @__PURE__ */ React.createElement(SoundProvider, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /* @__PURE__ */ React.createElement(motd_default, null)), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_react4.Outlet, null), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/signup/index.tsx
var signup_exports = {};
__export(signup_exports, {
  default: () => Login,
  links: () => links2
});
var import_react6 = require("@remix-run/react");

// app/components/formatted-input.tsx
var import_react5 = require("react");
function FormattedInput({
  htmlFor,
  label,
  id,
  autoComplete,
  name,
  type,
  placeholder,
  toggleShowHide = false,
  hasError = false,
  errorMessage = "Invalid Email",
  onChange
}) {
  const [showPassword, setShowPassword] = (0, import_react5.useState)(false);
  const [error, setError] = (0, import_react5.useState)(hasError);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-80 mb-6  flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor,
    className: "flex justify-start items-center w-full text-xl mb-1"
  }, label), /* @__PURE__ */ React.createElement("div", {
    className: `flex w-full border-2 border-solid  ${error ? "border-red-400" : "border-gray-600"} focus-within:border-white  bg-black rounded-lg hover:shadow-2xl relative`
  }, /* @__PURE__ */ React.createElement("input", {
    id,
    autoComplete,
    name,
    onChange,
    type: toggleShowHide && showPassword ? "text" : toggleShowHide && !showPassword ? "password" : type,
    placeholder,
    className: "flex w-full px-2 py-4 text-xl  bg-black rounded-lg hover:shadow-2xl relative  "
  }), toggleShowHide && /* @__PURE__ */ React.createElement("div", {
    className: "absolute  inset-y-0 right-0 pr-3 flex items-center "
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: `flex items-center p-0.5 w-8 h-8 text-center justify-center  ${showPassword ? "bg-white" : "bg-transparent"} rounded-full `,
    "aria-pressed": showPassword,
    onClick: () => setShowPassword((prev) => !prev)
  }, showPassword ? "\u{1F649}" : "\u{1F648}"))), error && /* @__PURE__ */ React.createElement("span", {
    className: "flex my-2 text-md text-red-400"
  }, errorMessage));
}

// app/styles/index.css
var styles_default = "/build/_assets/index-V3Z762II.css";

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/signup/index.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Login() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full flex flex-col justify-center items-center  m-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center px-12 "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold mb-6"
  }, "Sign Up"), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement(FormattedInput, {
    htmlFor: "name",
    label: "Name",
    id: "name",
    autoComplete: "name",
    name: "name",
    type: "text",
    placeholder: "Ana ... Darth Vader"
  }), /* @__PURE__ */ React.createElement(FormattedInput, {
    htmlFor: "email",
    label: "Email",
    id: "email",
    autoComplete: "email",
    name: "email",
    type: "email",
    placeholder: "Vader@deathstar.sit"
  }), /* @__PURE__ */ React.createElement(FormattedInput, {
    htmlFor: "password",
    label: "Password",
    id: "password",
    autoComplete: "current-password",
    name: "password",
    type: "password",
    placeholder: "HanShotFirst",
    toggleShowHide: true
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-start items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "h-6 w-6 accent-accent-pink",
    name: "agree",
    type: "checkbox"
  }), /* @__PURE__ */ React.createElement("label", {
    className: "ml-4 text-lg",
    htmlFor: "agree"
  }, "I agree to the", " ", /* @__PURE__ */ React.createElement("span", {
    className: "cursor-pointer text-accent-pink"
  }, "Terms"))), /* @__PURE__ */ React.createElement("button", {
    className: "mt-7 flex w-full justify-center items-center text-center  py-4 px-8 border-2 border-solid border-transparent bg-accent-pink rounded-lg cursor-pointer hover:border-white "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold "
  }, "Create Account"))), /* @__PURE__ */ React.createElement("span", {
    className: "mt-8 w-full flex justify-start"
  }, "Already have an account?", /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/login"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "ml-1 text-accent-pink cursor-pointer"
  }, "Login")))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/login/index.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Login2,
  links: () => links3
});
var import_react7 = require("react");
var import_node = require("@remix-run/node");
var import_react8 = require("@remix-run/react");
var links3 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var badRequest = (data2) => {
  (0, import_node.json)(data2, { status: 400 });
};
var action = async ({ request }) => {
  const form = await request.formData();
  const password = form.get("password");
  const username = form.get("username");
  if (typeof username !== "string" || typeof password !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`
    });
  }
};
function Login2() {
  const [error, setError] = (0, import_react7.useState)(false);
  const [searchParams] = (0, import_react8.useSearchParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full flex flex-col justify-center items-center m-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center px-12 "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold mb-10"
  }, "Login"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement(FormattedInput, {
    htmlFor: "email",
    label: "Email",
    id: "email",
    autoComplete: "email",
    type: "email",
    name: "email",
    placeholder: "Vader@deathstar.sit",
    hasError: error,
    errorMessage: "invalid email"
  }), /* @__PURE__ */ React.createElement(FormattedInput, {
    htmlFor: "password",
    label: "Password",
    id: "password",
    autoComplete: "current-password",
    name: "password",
    type: "password",
    placeholder: "HanShotFirst",
    toggleShowHide: true,
    hasError: error,
    errorMessage: "invalid pass"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "flex mr-auto text-neutral-300 text-md hover:text-accent-pink cursor-pointer"
  }, "Forgot password?"), /* @__PURE__ */ React.createElement("button", {
    onMouseOver: () => setError(true),
    className: "my-7 flex w-full justify-center items-center text-center  py-4 px-8 border-2 border-solid border-transparent bg-accent-pink rounded-lg cursor-pointer hover:border-white "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "Login"))), /* @__PURE__ */ React.createElement("span", {
    className: "mt-4 flex w-full justify-start"
  }, "Don't have an account?", /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/signup"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "ml-1 text-accent-pink cursor-pointer"
  }, "Sign Up")))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/paths/index.tsx
var paths_exports = {};
__export(paths_exports, {
  default: () => Courses,
  links: () => links4
});
var links4 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Courses() {
  return /* @__PURE__ */ React.createElement("span", null, "This is the Paths section");
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links5
});

// app/components/main-content.tsx
var import_react10 = require("@remix-run/react");

// app/components/search.tsx
var import_react9 = require("react");
var import_react_router_dom = require("react-router-dom");
function Search({ handleForm, size = "large" }) {
  const searchRef = (0, import_react9.useRef)(null);
  const labelRef = (0, import_react9.useRef)(null);
  let navigate = (0, import_react_router_dom.useNavigate)();
  async function handleSubmit(event) {
    let topic = event.target[0].value;
    event.preventDefault();
    topic = topic.toLowerCase();
    navigate(`../learn/${topic}`, { replace: true });
  }
  const handleKeyPress = (0, import_react9.useCallback)((event) => {
    if (event.metaKey === true && event.key === "k") {
      if (searchRef.current !== null && labelRef.current !== null) {
        searchRef.current.focus();
        labelRef.current.focus();
      }
    }
  }, []);
  (0, import_react9.useEffect)(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  return /* @__PURE__ */ React.createElement("div", {
    className: `main-search flex  relative`
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit,
    className: `flex ${size === "large" ? "w-full" : size === "medium" ? "w-3/4" : "w-1/2"}`
  }, /* @__PURE__ */ React.createElement("div", {
    ref: labelRef,
    className: `flex
             sm:flex items-center w-full text-left space-x-3 px-4 shadow-sm rounded-lg text-slate-800 dark:ring-0 dark:text-slate-800 dark:highlight-white/5  
              z-50 border-4 border-white bg-white focus-within:border-4 focus-within:border-solid focus-within:border-accent-green
              ${size === "large" ? "h-16" : size === "medium" ? "h-12" : "h-8"}
              
              z-100`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl"
  }, "\u{1F50D}"), /* @__PURE__ */ React.createElement("input", {
    ref: searchRef,
    name: "topic",
    placeholder: "Search a topic",
    style: { outline: "none" },
    className: "text-xl w-full bg-transparent border:[none] focus:[outline: 0, border: none] focus:border-transparent"
  }), /* @__PURE__ */ React.createElement("kbd", {
    className: "font-sans font-semibold dark:text-slate-500\n              \n              \n              text-xl\n              "
  }, /* @__PURE__ */ React.createElement("abbr", {
    title: "Command",
    className: "no-underline text-slate-300 dark:text-slate-500\n                  \n                  text-xl\n                  \n                  "
  }, "\u2318"), "K"), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    hidden: true
  }))));
}

// app/components/main-content.tsx
var MainContent = () => {
  const talkToTheServer = async () => {
    try {
      const response = await fetch("http://localhost:4000/servercode");
      const data2 = await response.json();
    } catch (err) {
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    console.log(text);
  };
  const LeftContent = () => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "w-3/5 "
    }, /* @__PURE__ */ React.createElement("div", {
      className: " h-full pt-py-12 flex justify-start items-center  w-full my-6 "
    }, /* @__PURE__ */ React.createElement("div", {
      className: "w-full "
    }, /* @__PURE__ */ React.createElement("h1", {
      style: {
        textShadow: " 0 0 80px rgb(192 219 255 / 30%), 0 0 32px rgb(65 120 255 / 15%)"
      },
      className: "font-extrabold text-[4rem] leading-[4.5rem]"
    }, "Shared knowledge ", /* @__PURE__ */ React.createElement("br", null), " from the top minds in the programming industry", /* @__PURE__ */ React.createElement("br", null), " - all for free!"))), /* @__PURE__ */ React.createElement("div", {
      className: "text-gray-400 text-3xl  pt-py-12 flex justify-start items-center  w-7/11 my-6  "
    }, /* @__PURE__ */ React.createElement("div", {
      className: "w-2/3 "
    }, /* @__PURE__ */ React.createElement("span", {
      className: "font-extrabold text-larger leading-7"
    }, "Whether a beginner, learning to code, or a seasoned veteran. Take a tour below to get started!"))), /* @__PURE__ */ React.createElement("div", {
      className: " h-full pb-py-12 flex justify-start items-center  w-full my-10"
    }, /* @__PURE__ */ React.createElement("div", {
      className: ""
    }, /* @__PURE__ */ React.createElement("button", {
      className: " cursor-pointer flex bg-accent-pink py-4 px-16 rounded-lg text-lg border-4 opacity-90 border-transparent font-bold focus-within:border-4 focus-within:border-white focus-within:opacity-100  hover:border-4 hover:border-white hover:opacity-100   "
    }, /* @__PURE__ */ React.createElement("span", {
      onClick: async () => talkToTheServer()
    }, "Take a Tour")))));
  };
  const TopicContainer = ({ text }) => {
    const link = text.toLowerCase();
    return /* @__PURE__ */ React.createElement(import_react10.Link, {
      to: `./learn/${link}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: " \n        relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6\n        py-3 transition text-primary bg-secondary border-2 border-transparent \n        bg-[#71717154] hover:brightness-150 hover:border-2 hover:border-accent-pink"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "text-white"
    }, text)));
  };
  const ChooseATopic = () => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "flex justify-center items-center text-center flex-col"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "flex p-8"
    }, "Or choose a topic"), /* @__PURE__ */ React.createElement("div", {
      className: "col-span-full -mb-4 -mr-4 flex flex-wrap lg:col-span-10"
    }, /* @__PURE__ */ React.createElement(TopicContainer, {
      text: "React"
    }), /* @__PURE__ */ React.createElement(TopicContainer, {
      text: "Remix"
    }), /* @__PURE__ */ React.createElement(TopicContainer, {
      text: "JavaScript"
    }), /* @__PURE__ */ React.createElement(TopicContainer, {
      text: "CSS"
    }), /* @__PURE__ */ React.createElement(TopicContainer, {
      text: "Next"
    }), /* @__PURE__ */ React.createElement(TopicContainer, {
      text: "Testing"
    }), /* @__PURE__ */ React.createElement(TopicContainer, {
      text: "Jest"
    }), /* @__PURE__ */ React.createElement(TopicContainer, {
      text: "ACID"
    })));
  };
  const RightContent = () => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col w-2/5 px-16"
    }, /* @__PURE__ */ React.createElement(Search, {
      handleForm
    }), /* @__PURE__ */ React.createElement(ChooseATopic, null));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "main-content py-8 px-6 lg:px-12 flex justify-center items-center "
  }, /* @__PURE__ */ React.createElement(LeftContent, null), /* @__PURE__ */ React.createElement(RightContent, null));
};
var main_content_default = MainContent;

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/index.tsx
var links5 = () => [
  { rel: "stylesheet", href: styles_default }
];
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.4"
    }
  }, /* @__PURE__ */ React.createElement(main_content_default, null));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn.tsx
var learn_exports = {};
__export(learn_exports, {
  default: () => Learn,
  links: () => links6
});
var import_react11 = require("@remix-run/react");

// app/components/popular-topics.tsx
var import_react_router_dom2 = require("react-router-dom");
var data = [
  { name: "Svelte", id: 0 },
  { name: "React", id: 1 },
  { name: "Tailwind", id: 2 },
  { name: "Rust", id: 3 },
  { name: "Python", id: 4 },
  { name: "Remix", id: 5 },
  { name: "CSS", id: 6 },
  { name: "Node", id: 7 }
];
function PopularTopics() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col mr-10 w-80"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold size text-2xl"
  }, "Popular Topics"), /* @__PURE__ */ React.createElement(React.Fragment, null, data.map((item) => {
    const lowerCaseTitle = item.name.toLowerCase();
    return /* @__PURE__ */ React.createElement("div", {
      key: item.id,
      className: "flex justify-start items-center my-0.5"
    }, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
      to: `./${lowerCaseTitle}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "w-full flex cursor-pointer px-5 py-2 rounded-xl hover:bg-stone-900 hover:text-accent-pink"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "cursor-pointer text-lg "
    }, item.name))));
  })));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn.tsx
var links6 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Learn() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex content-center px-6 lg:px-14 my-10 items-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement(Search, {
    size: "medium",
    handleForm: (e) => console.log(e)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-4"
  }, /* @__PURE__ */ React.createElement(PopularTopics, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center w-full mr-40"
  }, /* @__PURE__ */ React.createElement(import_react11.Outlet, null))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId.tsx
var topicId_exports = {};
__export(topicId_exports, {
  default: () => Learn2,
  links: () => links7,
  loader: () => loader
});
var import_node2 = require("@remix-run/node");
var import_react12 = require("@remix-run/react");
var links7 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var loader = async ({ params }) => {
  const name = (params == null ? void 0 : params.topicId) ?? "";
  return (0, import_node2.json)({ name });
};
function Learn2() {
  const { name } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-6xl mb-3 capitalize",
    style: {
      textShadow: "rgba(192, 219, 255, 0.3) 0px 0px 80px, rgba(65, 120, 255, 0.15) 0px 0px 32px"
    }
  }, name)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col content-center items-center w-full"
  }, /* @__PURE__ */ React.createElement(import_react12.Outlet, null)));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId/index.tsx
var topicId_exports2 = {};
__export(topicId_exports2, {
  default: () => Index2,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var import_react14 = require("@remix-run/react");
var import_react_router_dom3 = require("react-router-dom");

// app/components/topic-card.tsx
var import_react13 = require("react");
var import_use_sound = __toESM(require("use-sound"));

// public/sounds/plop-trimmed.mp3
var plop_trimmed_default = "/build/_assets/plop-trimmed-3SO2LLWD.mp3";

// app/components/topic-card.tsx
function TopicCard({
  title,
  author,
  link = "/",
  upvotes,
  rank,
  image,
  twitterHandle,
  mute
}) {
  const [upvote, setUpvote] = (0, import_react13.useState)(false);
  const [downvote, setDownvote] = (0, import_react13.useState)(false);
  const [count, setCount] = (0, import_react13.useState)(upvotes ?? 0);
  const [validLink, setValidLink] = (0, import_react13.useState)(false);
  const [linkError, setLinkError] = (0, import_react13.useState)(false);
  const volume = mute ? 0 : 0.2;
  const [upvoteSound] = (0, import_use_sound.default)(plop_trimmed_default, { soundEnabled: !mute, volume });
  const [downvoteSound] = (0, import_use_sound.default)(plop_trimmed_default, {
    soundEnabled: !mute,
    playbackRate: 0.65,
    volume,
    interrupt: true
  });
  (0, import_react13.useEffect)(() => {
    if (link.length > 10) {
      setValidLink(true);
    }
  }, [link]);
  const handleUpvote = () => {
    if (!upvote) {
      upvoteSound();
      setUpvote(true);
      downvote && setDownvote(false);
      if (downvote) {
        setCount((prev) => prev + 2);
      } else {
        setCount((prev) => prev + 1);
      }
    } else {
      setUpvote(false);
      setCount((prev) => prev - 1);
    }
  };
  const handleDownvote = () => {
    if (!downvote) {
      downvoteSound();
      setDownvote(true);
      upvote && setUpvote(false);
      if (upvote) {
        setCount((prev) => prev - 2);
      } else {
        setCount((prev) => prev - 1);
      }
    } else {
      setDownvote(false);
      setCount((prev) => prev + 1);
    }
  };
  const formattedNumber = Intl.NumberFormat("en-us", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(count);
  const LinkToArticle = ({ children }) => {
    return validLink ? /* @__PURE__ */ React.createElement("a", {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer"
    }, children) : /* @__PURE__ */ React.createElement("div", {
      onClick: () => setLinkError(true)
    }, children);
  };
  const ErrorPopup = (error) => {
    (0, import_react13.useEffect)(() => {
      setTimeout(() => {
        setLinkError(false);
      }, 2e3);
    }, []);
    return /* @__PURE__ */ React.createElement("div", {
      className: `transition-opacity duration-700 absolute w-30 bg-black ml-10 mt-4 ${error ? "opacity-100" : "opacity-0"}`
    }, /* @__PURE__ */ React.createElement("span", {
      onClick: () => setLinkError(false),
      className: "absolute px-2 py-0.25 text-xl top-0 right-0 cursor-pointer"
    }, "x"), /* @__PURE__ */ React.createElement("div", {
      className: " w-30 bg-error-bg text-error p-10 bg-accent-error-bg text-accent-error  border-2 border-solid border-accent-error z-10"
    }, "Link is invalid \u{1F614}"));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `flex w-30 my-8 shadow-lg shadow-stone-900 rounded-2xl  border-4 border-solid bg-[#0000001c]  ${upvote ? "border-green-400" : downvote ? "border-red-400" : " border-stone-800"} py-8 relative`
  }, /* @__PURE__ */ React.createElement("div", {
    className: " text-white flex justify-center items-center w-full "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex justify-center items-center mx-10 mb-auto text-3xl"
  }, rank), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LinkToArticle, null, /* @__PURE__ */ React.createElement("span", {
    className: "flex justify-start items-center cursor-pointer hover:underline decoration-white decoration- hover:text-accent-pink mb-4 text-2xl max-w-md font-bold "
  }, title)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-start items-center my-8"
  }, /* @__PURE__ */ React.createElement("span", {
    className: " text-xl "
  }, author), twitterHandle && /* @__PURE__ */ React.createElement("div", {
    className: "hover:bg-[#1da0f258] ml-4 flex items-center justify-center p-1 rounded-full"
  }, /* @__PURE__ */ React.createElement("a", {
    href: `https://twitter.com/${twitterHandle}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: " cursor-pointer",
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    width: "24px ",
    fill: "#1DA1F2",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M22.23 5.924a8.212 8.212 0 01-2.357.646 4.115 4.115 0 001.804-2.27 8.221 8.221 0 01-2.606.996 4.103 4.103 0 00-6.991 3.742 11.647 11.647 0 01-8.457-4.287 4.087 4.087 0 00-.556 2.063 4.1 4.1 0 001.825 3.415 4.09 4.09 0 01-1.859-.513v.052a4.104 4.104 0 003.292 4.023 4.099 4.099 0 01-1.853.07 4.11 4.11 0 003.833 2.85 8.236 8.236 0 01-5.096 1.756 8.33 8.33 0 01-.979-.057 11.617 11.617 0 006.29 1.843c7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.531a8.298 8.298 0 002.047-2.123z"
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-start items-center mt-8  "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center border-2 border-white px-4 py-2 opacity-80 hover:opacity-100 hover:bg-zinc-900 cursor-pointer rounded-lg"
  }, /* @__PURE__ */ React.createElement(LinkToArticle, null, /* @__PURE__ */ React.createElement("span", {
    className: "flex justify-start items-center"
  }, "Read Article"))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex py-1 mx-10 rounded-2xl flex-col items-center justify-center  ml-auto"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
    onClick: handleUpvote,
    xmlns: "http://www.w3.org/2000/svg",
    className: `cursor-pointer ${upvote ? "stroke-green-400" : "stroke-white"}`,
    width: "44",
    height: "44",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("polyline", {
    points: "6 15 12 9 18 15"
  }))), /* @__PURE__ */ React.createElement("span", {
    className: `px-1 text-lg font-bold ${upvote ? "text-green-400" : downvote ? "text-red-500" : "text-white"} `
  }, count > 999 ? formattedNumber : count), /* @__PURE__ */ React.createElement("svg", {
    onClick: handleDownvote,
    xmlns: "http://www.w3.org/2000/svg",
    className: `cursor-pointer ${downvote ? "stroke-red-500" : "stroke-white"}`,
    width: "44",
    height: "44",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), linkError && /* @__PURE__ */ React.createElement(ErrorPopup, {
    error: linkError
  }));
}

// app/utils/db.server.ts
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
  }
  db = global.__db;
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId/index.tsx
var loader2 = async ({ params }) => {
  const name = params.topicId;
  const data2 = {
    articlePosts: await db.post.findMany({
      where: {
        topic: name
      }
    })
  };
  return (0, import_node3.json)({ data: data2, name });
};
function Index2() {
  const { data: data2 } = (0, import_react14.useLoaderData)();
  const { mute } = useSound();
  const { articlePosts } = data2;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: { pathname: "./new" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col text-xl mt-8"
  }, /* @__PURE__ */ React.createElement("button", {
    className: " px-10 py-4 rounded-lg border-4 border-white hover:border-accent-pink hover:bg-accent-pink-bg active:border-accent-pink active:bg-accent-pink-bg "
  }, "+ Add Article"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-[600px] "
  }, articlePosts.length ? articlePosts.sort((a, b) => a.points < b.points ? 1 : -1).map((item, index) => {
    const rank = index + 1;
    return /* @__PURE__ */ React.createElement(TopicCard, {
      mute,
      author: item.authorOfPost,
      title: item.title,
      link: item.url,
      upvotes: item.points ?? 0,
      key: item.id,
      rank,
      twitterHandle: item.authorTwitter ?? ""
    });
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center my-20 font-extrabold text-xl"
  }, /* @__PURE__ */ React.createElement("span", null, "\u{1F614} No articles for this topic, yet!"), /* @__PURE__ */ React.createElement("span", {
    className: "mt-4"
  }, "Add one above! \u{1F446}"))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => New
});
var import_node4 = require("@remix-run/node");
var import_react15 = require("@remix-run/react");
var badRequest2 = (data2) => (0, import_node4.json)(data2, { status: 400 });
function validateUrl(url) {
  let regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
  const isValid = regEx.test(url);
  if (!isValid) {
    return "Url must be valid";
  }
}
function validateTitle(title) {
  if (title.length < 4) {
    return "Title must be at least 4 characters";
  }
}
function validateAuthor(author) {
  if (author.length < 4) {
    return "Author must be at least 4 characters";
  }
}
var action2 = async ({ request }) => {
  let form = await request.formData();
  console.log(form);
  let topic = form.get("topic");
  let url = form.get("url");
  let title = form.get("title");
  let authorOfPost = form.get("author");
  if (typeof topic !== "string" || typeof url !== "string" || typeof title !== "string" || typeof authorOfPost !== "string") {
    return badRequest2({
      formError: "Form submitted incorrectly"
    });
  }
  let fieldErrors = {
    url: validateUrl(url),
    title: validateTitle(title),
    authorOfPost: validateAuthor(authorOfPost)
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest2({ fieldErrors, fields: { url, title, authorOfPost } });
  }
  const exists = await db.post.findFirst({
    where: {
      topic,
      url
    }
  });
  topic = topic.toLowerCase();
  if (!exists) {
    await db.post.create({
      data: { topic, url, title, authorOfPost }
    });
    return (0, import_node4.redirect)(`/learn/${topic}`);
  } else {
    throw new Error("Article already exists");
  }
};
function New() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let actionData = (0, import_react15.useActionData)();
  console.log(actionData);
  const params = (0, import_react15.useParams)();
  let topic = params.topicId;
  topic = topic && topic[0].toUpperCase() + topic.substring(1);
  function FormInput({
    id,
    name,
    type,
    defaultValue,
    placeholder
  }) {
    const error = !!defaultValue;
    return /* @__PURE__ */ React.createElement("input", {
      defaultValue,
      className: `bg-transparent shadow appearance-none border-2 border-gray-600  rounded w-full py-4 px-3 text-gray-200 leading-tight 
        focus:outline-none focus:shadow-outline 
          focus:border-white hover:border-white
        
        ${error && "border-red-600"}`,
      id,
      name,
      type,
      placeholder
    });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full max-w-xs"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "shadow-md rounded pt-4 pb-8 mb-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "flex pointer-events-none  text-lg font-bold mb-2",
    htmlFor: "topic"
  }, "Topic"), /* @__PURE__ */ React.createElement("input", {
    className: `shadow border-2 bg-transparent border-gray-600 text-gray-200 appearance-none  rounded w-full py-4 px-3  leading-tight
              focus:outline-none focus:shadow-outline focus:border-white hover:border-white
                ${topic && " cursor-not-allowed"} `,
    id: "topic",
    name: "topic",
    type: "text",
    value: topic,
    readOnly: true,
    contentEditable: !!topic
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "flex pointer-events-none text-lg font-bold mb-2",
    htmlFor: "url"
  }, "URL"), /* @__PURE__ */ React.createElement(FormInput, {
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.url,
    id: "url",
    name: "url",
    type: "url",
    placeholder: "https://overreacted.io/"
  }), ((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.url) ? /* @__PURE__ */ React.createElement("div", {
    className: "flex "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-red-600  text-md"
  }, "\u2757\uFE0F ", (_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.url)) : null), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "flex pointer-events-none  text-lg font-bold mb-2",
    htmlFor: "title"
  }, "Article Title"), /* @__PURE__ */ React.createElement(FormInput, {
    defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.title,
    id: "title",
    type: "text",
    name: "title",
    placeholder: "Why React hooks are awesome"
  }), ((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.title) ? /* @__PURE__ */ React.createElement("div", {
    className: "flex "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-red-600 text-md"
  }, "\u2757\uFE0F ", (_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.title)) : null), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "flex pointer-events-none text-lg font-bold mb-2",
    htmlFor: "author"
  }, "Author"), /* @__PURE__ */ React.createElement(FormInput, {
    defaultValue: (_g = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _g.authorOfPost,
    id: "author",
    type: "text",
    name: "author",
    placeholder: "Dan Abramov"
  }), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.authorOfPost) ? /* @__PURE__ */ React.createElement("div", {
    className: "flex "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-red-600 text-md"
  }, "\u2757\uFE0F ", (_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.authorOfPost)) : null), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: " bg-accent-pink w-full hover:brightness-110 border-2 border-solid border-accent-pink hover:border-white active:border-white text-white font-bold mt-8 py-4 px-4 rounded focus:outline-none focus:border-white focus:shadow-outline",
    type: "submit"
  }, "Submit Article")))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId/new/index.tsx
var new_exports2 = {};
__export(new_exports2, {
  default: () => New2
});
function New2() {
  return /* @__PURE__ */ React.createElement("span", null, "sadbaiounaosidnaosdnason NEW");
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/index.tsx
var learn_exports2 = {};
__export(learn_exports2, {
  default: () => Index3,
  links: () => links8
});
var links8 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Index3() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "Choose a topic \u2B05\uFE0F"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "518f310a", "entry": { "module": "/build/entry.client-3XCPPM5X.js", "imports": ["/build/_shared/chunk-3RBMSD2S.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-2CV74BV7.js", "imports": ["/build/_shared/chunk-U37IRSVZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-OI6TPJYO.js", "imports": ["/build/_shared/chunk-TCG2QB6M.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn": { "id": "routes/learn", "parentId": "root", "path": "learn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn-YDFFHEIW.js", "imports": ["/build/_shared/chunk-TCG2QB6M.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId": { "id": "routes/learn/$topicId", "parentId": "routes/learn", "path": ":topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId-6N626G3A.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/index": { "id": "routes/learn/$topicId/index", "parentId": "routes/learn/$topicId", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/index-SPBFQPZP.js", "imports": ["/build/_shared/chunk-36JN244Y.js", "/build/_shared/chunk-U37IRSVZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new": { "id": "routes/learn/$topicId/new", "parentId": "routes/learn/$topicId", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new-KFWX7UR5.js", "imports": ["/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new/index": { "id": "routes/learn/$topicId/new/index", "parentId": "routes/learn/$topicId/new", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new/index-VZLJRZCW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/index": { "id": "routes/learn/index", "parentId": "routes/learn", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/index-3XG7FIMH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-RNNS3LKK.js", "imports": ["/build/_shared/chunk-DX6OIDIL.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths/index": { "id": "routes/paths/index", "parentId": "root", "path": "paths", "index": true, "caseSensitive": void 0, "module": "/build/routes/paths/index-7DJVQLVS.js", "imports": ["/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup/index": { "id": "routes/signup/index", "parentId": "root", "path": "signup", "index": true, "caseSensitive": void 0, "module": "/build/routes/signup/index-H7AZSKBX.js", "imports": ["/build/_shared/chunk-DX6OIDIL.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-518F310A.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/signup/index": {
    id: "routes/signup/index",
    parentId: "root",
    path: "signup",
    index: true,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: true,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/paths/index": {
    id: "routes/paths/index",
    parentId: "root",
    path: "paths",
    index: true,
    caseSensitive: void 0,
    module: paths_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/learn": {
    id: "routes/learn",
    parentId: "root",
    path: "learn",
    index: void 0,
    caseSensitive: void 0,
    module: learn_exports
  },
  "routes/learn/$topicId": {
    id: "routes/learn/$topicId",
    parentId: "routes/learn",
    path: ":topicId",
    index: void 0,
    caseSensitive: void 0,
    module: topicId_exports
  },
  "routes/learn/$topicId/index": {
    id: "routes/learn/$topicId/index",
    parentId: "routes/learn/$topicId",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: topicId_exports2
  },
  "routes/learn/$topicId/new": {
    id: "routes/learn/$topicId/new",
    parentId: "routes/learn/$topicId",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/learn/$topicId/new/index": {
    id: "routes/learn/$topicId/new/index",
    parentId: "routes/learn/$topicId/new",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/learn/index": {
    id: "routes/learn/index",
    parentId: "routes/learn",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: learn_exports2
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
app.get("/servercode", (req, res) => {
  console.log("SERVER CODE EXECUTED!");
  res.send("BOOM");
});
var port = process.env.PORT || 4e3;
app.listen(port, () => {
  console.log(`\u{1F680} live at http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29udGV4dHMvc291bmQtY29udGV4dC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbW90ZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvc2lnbnVwL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3JtYXR0ZWQtaW5wdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sb2dpbi9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3BhdGhzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21haW4tY29udGVudC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2VhcmNoLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3BvcHVsYXItdG9waWNzLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdG9waWMtY2FyZC50c3giLCAiLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdAcmVtaXgtcnVuL2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgc2VydmVyQnVpbGQgZnJvbSAnQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gICcvYnVpbGQnLFxuICBleHByZXNzLnN0YXRpYygncHVibGljL2J1aWxkJywgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogJzF5JyB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJywgeyBtYXhBZ2U6ICcxaCcgfSkpO1xuXG5hcHAudXNlKG1vcmdhbigndGlueScpKTtcblxuYXBwLmFsbChcbiAgJyonLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KVxuKTtcblxuYXBwLmdldCgnL3NlcnZlcmNvZGUnLCAocmVxLCByZXMpID0+IHtcbiAgY29uc29sZS5sb2coJ1NFUlZFUiBDT0RFIEVYRUNVVEVEIScpO1xuICByZXMuc2VuZCgnQk9PTScpO1xufSk7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgXHVEODNEXHVERTgwIGxpdmUgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9zaWdudXAvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sb2dpbi9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3BhdGhzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9zaWdudXAvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NpZ251cC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaWdudXBcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpbi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW4vaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9wYXRocy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGF0aHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGF0aHNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9sZWFyblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibGVhcm5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuLyR0b3BpY0lkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiBcIjp0b3BpY0lkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ld1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XG5pbXBvcnQgU291bmRQcm92aWRlciBmcm9tICcuL2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IE1vdGQgZnJvbSAnLi9jb21wb25lbnRzL21vdGQnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogJ3V0Zi04JyxcbiAgdGl0bGU6ICdTYXBpZW50aWEnLFxuICB2aWV3cG9ydDogJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTb3VuZFByb3ZpZGVyPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1vdGQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgICAgICA8L1NvdW5kUHJvdmlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBTb3VuZENvbnRleHRTdGF0ZSA9IHtcbiAgbXV0ZTogYm9vbGVhbjtcbiAgdG9nZ2xlTXV0ZTogRnVuY3Rpb247XG59O1xuXG5jb25zdCBTb3VuZENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFNvdW5kQ29udGV4dFN0YXRlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTb3VuZCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU291bmRDb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU291bmRQcm92aWRlcih7IGNoaWxkcmVuIH06IGFueSkge1xuICBjb25zdCBbbXV0ZSwgc2V0TXV0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXV0ZScpID8/ICdmYWxzZSc7XG4gICAgc2V0TXV0ZSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IEpTT04ucGFyc2UocmVzdWx0KSA6IGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gcmV0cmlldmUgaW4gbG9jYWxTdG9yYWdlXG4gIC8vICAgY29uc3QgaXNNdXRlZFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlJyk7XG5cbiAgLy8gICBjb25zdCBpc011dGVkID0gISFpc011dGVkU3RyaW5nO1xuXG4gIC8vICAgc2V0TXV0ZShpc011dGVkKTtcbiAgLy8gfSwgW10pO1xuXG4gIC8vIEV2ZXJ5dGltZSB0aGUgdmFsdWUgb2YgbXV0ZSBjaGFuZ2VzIG92ZXJyaWRlIHRoZSBsb2NhbCBzdG9yYWdlIHZhbHVlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYG11dGUgaXMgJHttdXRlfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXRlJywgSlNPTi5zdHJpbmdpZnkobXV0ZSkpO1xuICB9LCBbbXV0ZV0pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU11dGUoKSB7XG4gICAgY29uc29sZS5sb2coYHRvZ2dsaW5nIGZyb20gbXV0ZSA9ICR7bXV0ZX1gKTtcbiAgICBzZXRNdXRlKChwcmV2KSA9PiAhcHJldik7XG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSB7IG11dGUsIHRvZ2dsZU11dGUgfTtcbiAgcmV0dXJuIChcbiAgICA8U291bmRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZXN9PntjaGlsZHJlbn08L1NvdW5kQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiIsICJleHBvcnQgY29uc3QgTW90ZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1kYXJrLW1vZGUtYmcgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBweC0yMCAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtcGluayB3LWZ1bGwgdGV4dC1jZW50ZXIgcm91bmRlZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIFdlIHN0YW5kIHdpdGggVWtyYWluZSBcdUQ4M0NcdURERkFcdUQ4M0NcdURERTZcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXpvbWZvcnVrcmFpbmUub3JnL1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgY3Vyc29yLXBvaW50ZXIgZm9udC1ib2xkIHRleHQtcHJpbWFyeS10ZXh0IGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb25hdGUgaGVyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb3RkO1xuIiwgImltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvaGVhZGVyLmNzcyc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgU291bmRDb250ZXh0U3RhdGUsIHVzZVNvdW5kIH0gZnJvbSAnfi9jb250ZXh0cy9zb3VuZC1jb250ZXh0JztcbmltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGUgfV07XG59O1xuXG5jb25zdCBMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHNwYWNlLXgtMSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgPExpbmsgdG89eycvJ30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCAgXCI+U2FwaWVudGlhPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGFuZ3VhZ2VTZWxlY3RvciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMS41IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1sYW5ndWFnZSBoLTYgdy02IHN0cm9rZS13aGl0ZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNCA1aDdcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNOSAzdjJjMCA0LjQxOCAtMi4yMzkgOCAtNSA4XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUgOWMtLjAwMyAyLjE0NCAyLjk1MiAzLjkwOCA2LjcgNFwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMiAyMGw0IC05bDQgOVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xOS4xIDE4aC02LjJcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4+RW5nbGlzaDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbkxvZ2luRWxlbWVudCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICA8TGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTYgcHktMiAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlLzYwICByb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kICBmb2N1cy13aXRoaW46OmJnLXNsYXRlLTUwLzUgZm9jdXMtd2l0aGluOjpib3JkZXItd2hpdGUgaG92ZXI6Ymctc2xhdGUtNTAvNSBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgICAgey8qIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWxhbmd1YWdlIGgtNiB3LTYgc3Ryb2tlLXdoaXRlXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICAgIHN0cm9rZT1cIiNmZmZmZmZcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xNCA4di0yYTIgMiAwIDAgMCAtMiAtMmgtN2EyIDIgMCAwIDAgLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDdhMiAyIDAgMCAwIDIgLTJ2LTJcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMTJoLTEzbDMgLTNtMCA2bC0zIC0zXCIgLz5cbiAgICAgICAgPC9zdmc+ICovfVxuICAgICAgICAgIDxzcGFuPkxvZ2luPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgTmF2RWxlbWVudFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59O1xuXG5jb25zdCBHaXRodWIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgcHgtNSBweS0yIHJvdW5kZWQteGwgaG92ZXI6Ymctc3RvbmUtOTAwIGhvdmVyOnRleHQtYWNjZW50LXBpbmsgIG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVpbGx5am9kb25uZWxsL3NhcGllbnRpYVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgb3BhY2l0eS04MFwiXG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD17JzMwcHgnfVxuICAgICAgICAgIGhlaWdodD17JzMwcHgnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBmaWxsLXByaW1hcnktdGV4dCBcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNNjQgNS4xMDNjLTMzLjM0NyAwLTYwLjM4OCAyNy4wMzUtNjAuMzg4IDYwLjM4OCAwIDI2LjY4MiAxNy4zMDMgNDkuMzE3IDQxLjI5NyA1Ny4zMDMgMy4wMTcuNTYgNC4xMjUtMS4zMSA0LjEyNS0yLjkwNSAwLTEuNDQtLjA1Ni02LjE5Ny0uMDgyLTExLjI0My0xNi44IDMuNjUzLTIwLjM0NS03LjEyNS0yMC4zNDUtNy4xMjUtMi43NDctNi45OC02LjcwNS04LjgzNi02LjcwNS04LjgzNi01LjQ4LTMuNzQ4LjQxMy0zLjY3LjQxMy0zLjY3IDYuMDYzLjQyNSA5LjI1NyA2LjIyMyA5LjI1NyA2LjIyMyA1LjM4NiA5LjIzIDE0LjEyNyA2LjU2MiAxNy41NzMgNS4wMi41NDItMy45MDMgMi4xMDctNi41NjggMy44MzQtOC4wNzYtMTMuNDEzLTEuNTI1LTI3LjUxNC02LjcwNC0yNy41MTQtMjkuODQzIDAtNi41OTMgMi4zNi0xMS45OCA2LjIyMy0xNi4yMS0uNjI4LTEuNTItMi42OTUtNy42NjIuNTg0LTE1Ljk4IDAgMCA1LjA3LTEuNjIzIDE2LjYxIDYuMTlDNTMuNyAzNSA1OC44NjcgMzQuMzI3IDY0IDM0LjMwNGM1LjEzLjAyMyAxMC4zLjY5NCAxNS4xMjcgMi4wMzMgMTEuNTI2LTcuODEzIDE2LjU5LTYuMTkgMTYuNTktNi4xOSAzLjI4NyA4LjMxNyAxLjIyIDE0LjQ2LjU5MyAxNS45OCAzLjg3MiA0LjIzIDYuMjE1IDkuNjE3IDYuMjE1IDE2LjIxIDAgMjMuMTk0LTE0LjEyNyAyOC4zLTI3LjU3NCAyOS43OTYgMi4xNjcgMS44NzQgNC4wOTcgNS41NSA0LjA5NyAxMS4xODMgMCA4LjA4LS4wNyAxNC41ODMtLjA3IDE2LjU3MiAwIDEuNjA3IDEuMDg4IDMuNDkgNC4xNDggMi44OTcgMjMuOTgtNy45OTQgNDEuMjYzLTMwLjYyMiA0MS4yNjMtNTcuMjk0QzEyNC4zODggMzIuMTQgOTcuMzUgNS4xMDQgNjQgNS4xMDR6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI2LjQ4NCA5MS44MDZjLS4xMzMuMy0uNjA1LjM5LTEuMDM1LjE4NS0uNDQtLjE5Ni0uNjg1LS42MDUtLjU0My0uOTA2LjEzLS4zMS42MDMtLjM5NSAxLjA0LS4xODguNDQuMTk3LjY5LjYxLjUzNy45MXptMi40NDYgMi43MjljLS4yODcuMjY3LS44NS4xNDMtMS4yMzItLjI4LS4zOTYtLjQyLS40Ny0uOTgzLS4xNzctMS4yNTQuMjk4LS4yNjYuODQ0LS4xNCAxLjI0LjI4LjM5NC40MjYuNDcyLjk4NC4xNyAxLjI1NXpNMzEuMzEyIDk4LjAxMmMtLjM3LjI1OC0uOTc2LjAxNy0xLjM1LS41Mi0uMzctLjUzOC0uMzctMS4xODMuMDEtMS40NC4zNzMtLjI1OC45Ny0uMDI1IDEuMzUuNTA3LjM2OC41NDUuMzY4IDEuMTktLjAxIDEuNDUyem0zLjI2MSAzLjM2MWMtLjMzLjM2NS0xLjAzNi4yNjctMS41NTItLjIzLS41MjctLjQ4Ny0uNjc0LTEuMTgtLjM0My0xLjU0NC4zMzYtLjM2NiAxLjA0NS0uMjY0IDEuNTY0LjIzLjUyNy40ODYuNjg2IDEuMTguMzMzIDEuNTQzem00LjUgMS45NTFjLS4xNDcuNDczLS44MjUuNjg4LTEuNTEuNDg2LS42ODMtLjIwNy0xLjEzLS43Ni0uOTktMS4yMzguMTQtLjQ3Ny44MjMtLjcgMS41MTItLjQ4NS42ODMuMjA2IDEuMTMuNzU2Ljk4OCAxLjIzN3ptNC45NDMuMzYxYy4wMTcuNDk4LS41NjMuOTEtMS4yOC45Mi0uNzIzLjAxNy0xLjMwOC0uMzg3LTEuMzE1LS44NzcgMC0uNTAzLjU2OC0uOTEgMS4yOS0uOTI0LjcxNy0uMDEzIDEuMzA2LjM4NyAxLjMwNi44OHptNC41OTgtLjc4MmMuMDg2LjQ4NS0uNDEzLjk4NC0xLjEyNiAxLjExNy0uNy4xMy0xLjM1LS4xNzItMS40NC0uNjUzLS4wODYtLjQ5OC40MjItLjk5NyAxLjEyMi0xLjEyNi43MTQtLjEyMyAxLjM1NC4xNyAxLjQ0NC42NjN6bTAgMFwiPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcbi8vIGludGVyZmFjZSBJTmF2aWdhdGlvbiB7XG4vLyAgIG11dGU6IGJvb2xlYW47XG4vLyAgIHRvZ2dsZU11dGU6IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxTcGFuRWxlbWVudD47XG4vLyB9XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBtdXRlLCB0b2dnbGVNdXRlIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiVG9waWNzXCIgbG9jYXRpb249XCIvbGVhcm5cIiAvPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJQYXRoc1wiIGxvY2F0aW9uPVwiL3BhdGhzXCIgLz5cbiAgICAgIHsvKiA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIkxvZ2luXCIgbG9jYXRpb249XCIvbG9naW5cIiAvPiAqL31cbiAgICAgIDxHaXRodWIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIG1sLTIgc206bWwtNCBcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYmxhY2sgIGFjdGl2ZTpib3JkZXItc3RvbmUtMjAwIGhvdmVyOmJvcmRlci1zdG9uZS0yMDAgcHgtNCBweS1bLjI1cmVtXSByb3VuZGVkXCI+XG4gICAgICAgICAgPHNwYW4gb25DbGljaz17dG9nZ2xlTXV0ZX0gY2xhc3NOYW1lPVwidGV4dC0yeGwgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIHttdXRlID8gJ1x1RDgzRFx1REQwNycgOiAnXHVEODNEXHVERDA4J31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8TGFuZ3VhZ2VTZWxlY3RvciAvPiAqL31cbiAgICAgIDxOYXZpZ2F0aW9uTG9naW5FbGVtZW50IC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uRWxlbWVudCA9ICh7IG5hbWUsIGxvY2F0aW9uIH06IE5hdkVsZW1lbnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIgcm91bmRlZC14bCBob3ZlcjpiZy1zdG9uZS05MDAgaG92ZXI6dGV4dC1hY2NlbnQtcGluayAgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkIGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIFwiXG4gICAgICB0bz17bG9jYXRpb259XG4gICAgPlxuICAgICAge25hbWV9XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgdmFsdWVzID0gdXNlU291bmQoKTtcbiAgY29uc3QgeyBtdXRlLCB0b2dnbGVNdXRlIH06IGFueSA9IHZhbHVlcztcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInB4LTYgbGc6cHgtMTIgcHktNiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBoZWFkZXIgIGJnLWJsYWNrXCI+XG4gICAgICA8TG9nbyAvPlxuXG4gICAgICA8TmF2aWdhdGlvbiBtdXRlPXttdXRlfSB0b2dnbGVNdXRlPXt0b2dnbGVNdXRlfSAvPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICd+L2NvbXBvbmVudHMvZm9ybWF0dGVkLWlucHV0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBtLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTEyIFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNlwiPlNpZ24gVXA8L3NwYW4+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW5hIC4uLiBEYXJ0aCBWYWRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZhZGVyQGRlYXRoc3Rhci5zaXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhhblNob3RGaXJzdFwiXG4gICAgICAgICAgICB0b2dnbGVTaG93SGlkZT17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgYWNjZW50LWFjY2VudC1waW5rXCJcbiAgICAgICAgICAgICAgbmFtZT1cImFncmVlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1sZ1wiIGh0bWxGb3I9XCJhZ3JlZVwiPlxuICAgICAgICAgICAgICBJIGFncmVlIHRvIHRoZXsnICd9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtYWNjZW50LXBpbmtcIj5UZXJtczwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTcgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyICBweS00IHB4LTggYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci10cmFuc3BhcmVudCBiZy1hY2NlbnQtcGluayByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci13aGl0ZSBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBcIj5DcmVhdGUgQWNjb3VudDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTggdy1mdWxsIGZsZXgganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1xuICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQtYWNjZW50LXBpbmsgY3Vyc29yLXBvaW50ZXJcIj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm1FdmVudEhhbmRsZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgaHRtbEZvcjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBhdXRvQ29tcGxldGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHRvZ2dsZVNob3dIaWRlPzogYm9vbGVhbjtcbiAgaGFzRXJyb3I/OiBib29sZWFuO1xuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XG4gIG9uQ2hhbmdlPzogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtYXR0ZWRJbnB1dCh7XG4gIGh0bWxGb3IsXG4gIGxhYmVsLFxuICBpZCxcbiAgYXV0b0NvbXBsZXRlLFxuICBuYW1lLFxuICB0eXBlLFxuICBwbGFjZWhvbGRlcixcbiAgdG9nZ2xlU2hvd0hpZGUgPSBmYWxzZSxcbiAgaGFzRXJyb3IgPSBmYWxzZSxcbiAgZXJyb3JNZXNzYWdlID0gJ0ludmFsaWQgRW1haWwnLFxuICBvbkNoYW5nZSxcbn06IElQcm9wcykge1xuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGhhc0Vycm9yKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTgwIG1iLTYgIGZsZXgtY29sXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj17aHRtbEZvcn1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC14bCBtYi0xXCJcbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCB3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXNvbGlkICAke1xuICAgICAgICAgIGVycm9yID8gJ2JvcmRlci1yZWQtNDAwJyA6ICdib3JkZXItZ3JheS02MDAnXG4gICAgICAgIH0gZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSAgYmctYmxhY2sgcm91bmRlZC1sZyBob3ZlcjpzaGFkb3ctMnhsIHJlbGF0aXZlYH1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHR5cGU9e1xuICAgICAgICAgICAgdG9nZ2xlU2hvd0hpZGUgJiYgc2hvd1Bhc3N3b3JkXG4gICAgICAgICAgICAgID8gJ3RleHQnXG4gICAgICAgICAgICAgIDogdG9nZ2xlU2hvd0hpZGUgJiYgIXNob3dQYXNzd29yZFxuICAgICAgICAgICAgICA/ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgOiB0eXBlXG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBweC0yIHB5LTQgdGV4dC14bCAgYmctYmxhY2sgcm91bmRlZC1sZyBob3ZlcjpzaGFkb3ctMnhsIHJlbGF0aXZlICBcIlxuICAgICAgICAvPlxuICAgICAgICB7dG9nZ2xlU2hvd0hpZGUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgIGluc2V0LXktMCByaWdodC0wIHByLTMgZmxleCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTAuNSB3LTggaC04IHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyICAke1xuICAgICAgICAgICAgICAgIHNob3dQYXNzd29yZCA/ICdiZy13aGl0ZScgOiAnYmctdHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgIH0gcm91bmRlZC1mdWxsIGB9XG4gICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17c2hvd1Bhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzc3dvcmQoKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/ICdcdUQ4M0RcdURFNDknIDogJ1x1RDgzRFx1REU0OCd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBteS0yIHRleHQtbWQgdGV4dC1yZWQtNDAwXCI+e2Vycm9yTWVzc2FnZX08L3NwYW4+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1hdHRlZElucHV0IGZyb20gJ34vY29tcG9uZW50cy9mb3JtYXR0ZWQtaW5wdXQnO1xuaW1wb3J0IEhpZ2hsaWdodGFibGVUZXh0SW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2hpZ2hsaWdodGFibGUtdGV4dC1pbnB1dCc7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmssIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZTogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHVzZXJuYW1lICE9PSAnc3RyaW5nJyB8fCB1c2VybmFtZS5sZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuIGBVc2VybmFtZXMgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZDogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHBhc3N3b3JkICE9PSAnc3RyaW5nJyB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGBQYXNzd29yZHMgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBhbnkpID0+IHtcbiAganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldCgncGFzc3dvcmQnKTtcbiAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldCgndXNlcm5hbWUnKTtcblxuICBpZiAodHlwZW9mIHVzZXJuYW1lICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgcGFzc3dvcmQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgLy8gY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTEyIFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMTBcIj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICBuYW1lPVwicmVkaXJlY3RUb1wiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3RUbycpID8/IHVuZGVmaW5lZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmFkZXJAZGVhdGhzdGFyLnNpdFwiXG4gICAgICAgICAgICBoYXNFcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9XCJpbnZhbGlkIGVtYWlsXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIYW5TaG90Rmlyc3RcIlxuICAgICAgICAgICAgdG9nZ2xlU2hvd0hpZGU9e3RydWV9XG4gICAgICAgICAgICBoYXNFcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9XCJpbnZhbGlkIHBhc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IG1yLWF1dG8gdGV4dC1uZXV0cmFsLTMwMCB0ZXh0LW1kIGhvdmVyOnRleHQtYWNjZW50LXBpbmsgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0RXJyb3IodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS03IGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciAgcHktNCBweC04IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgYmctYWNjZW50LXBpbmsgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItd2hpdGUgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTQgZmxleCB3LWZ1bGwganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1hY2NlbnQtcGluayBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZXMoKSB7XG4gIHJldHVybiA8c3Bhbj5UaGlzIGlzIHRoZSBQYXRocyBzZWN0aW9uPC9zcGFuPjtcbn1cbiIsICJpbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJ34vY29tcG9uZW50cy9tYWluLWNvbnRlbnQnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS40JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE1haW5Db250ZW50IC8+XG4gICAgICB7LyogPFNvdW5kUHJvdmlkZXI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TW90ZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIC8vIFxuICAgICAgPC9Tb3VuZFByb3ZpZGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL21haW4tY29udGVudC5jc3MnO1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlIH1dO1xufTtcbmV4cG9ydCBjb25zdCBNYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgdGFsa1RvVGhlU2VydmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc2VydmVyY29kZScpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAvLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NlcnZlci1jb2RlJykudGhlbigocmVzKSA9PiB7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9ybSA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0WzBdLnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICB9O1xuXG4gIGNvbnN0IExlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy81IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcHQtcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTYgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgXCI+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OlxuICAgICAgICAgICAgICAgICAgJyAwIDAgODBweCByZ2IoMTkyIDIxOSAyNTUgLyAzMCUpLCAwIDAgMzJweCByZ2IoNjUgMTIwIDI1NSAvIDE1JSknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LVs0cmVtXSBsZWFkaW5nLVs0LjVyZW1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hhcmVkIGtub3dsZWRnZSA8YnIgLz4gZnJvbSB0aGUgdG9wIG1pbmRzIGluIHRoZSBwcm9ncmFtbWluZ1xuICAgICAgICAgICAgICBpbmR1c3RyeVxuICAgICAgICAgICAgICA8YnIgLz4gLSBhbGwgZm9yIGZyZWUhXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtM3hsICBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LTcvMTEgbXktNiAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtbGFyZ2VyIGxlYWRpbmctN1wiPlxuICAgICAgICAgICAgICBXaGV0aGVyIGEgYmVnaW5uZXIsIGxlYXJuaW5nIHRvIGNvZGUsIG9yIGEgc2Vhc29uZWQgdmV0ZXJhbi4gVGFrZVxuICAgICAgICAgICAgICBhIHRvdXIgYmVsb3cgdG8gZ2V0IHN0YXJ0ZWQhXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcGItcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGZsZXggYmctYWNjZW50LXBpbmsgcHktNCBweC0xNiByb3VuZGVkLWxnIHRleHQtbGcgYm9yZGVyLTQgb3BhY2l0eS05MCBib3JkZXItdHJhbnNwYXJlbnQgZm9udC1ib2xkIGZvY3VzLXdpdGhpbjpib3JkZXItNCBmb2N1cy13aXRoaW46Ym9yZGVyLXdoaXRlIGZvY3VzLXdpdGhpbjpvcGFjaXR5LTEwMCAgaG92ZXI6Ym9yZGVyLTQgaG92ZXI6Ym9yZGVyLXdoaXRlIGhvdmVyOm9wYWNpdHktMTAwICAgXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2FzeW5jICgpID0+IHRhbGtUb1RoZVNlcnZlcigpfT5UYWtlIGEgVG91cjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDb250YWluZXIgPSAoeyB0ZXh0IH06IGFueSkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPXtgLi9sZWFybi8ke2xpbmt9YH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCIgXG4gICAgICAgIHJlbGF0aXZlIG1iLTQgbXItNCBibG9jayBoLWF1dG8gdy1hdXRvIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBweC02XG4gICAgICAgIHB5LTMgdHJhbnNpdGlvbiB0ZXh0LXByaW1hcnkgYmctc2Vjb25kYXJ5IGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCBcbiAgICAgICAgYmctWyM3MTcxNzE1NF0gaG92ZXI6YnJpZ2h0bmVzcy0xNTAgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6Ym9yZGVyLWFjY2VudC1waW5rXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57dGV4dH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgQ2hvb3NlQVRvcGljID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggcC04XCI+T3IgY2hvb3NlIGEgdG9waWM8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tZnVsbCAtbWItNCAtbXItNCBmbGV4IGZsZXgtd3JhcCBsZzpjb2wtc3Bhbi0xMFwiPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiUmVhY3RcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiUmVtaXhcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiSmF2YVNjcmlwdFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJDU1NcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiTmV4dFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJUZXN0aW5nXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkplc3RcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQUNJRFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBSaWdodENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTIvNSBweC0xNlwiPlxuICAgICAgICA8U2VhcmNoIGhhbmRsZUZvcm09e2hhbmRsZUZvcm19IC8+XG4gICAgICAgIDxDaG9vc2VBVG9waWMgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudCBweS04IHB4LTYgbGc6cHgtMTIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICA8TGVmdENvbnRlbnQgLz5cbiAgICAgIDxSaWdodENvbnRlbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudDtcbiIsICJpbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgaGFuZGxlRm9ybTogRnVuY3Rpb247XG4gIHNpemU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgbGV0IHRvcGljID0gZm9ybS5nZXQoJ3RvcGljJyk7XG4gIGNvbnNvbGUubG9nKHRvcGljKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIDEyMDAwMDApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHsgaGFuZGxlRm9ybSwgc2l6ZSA9ICdsYXJnZScgfTogSVByb3BzKSB7XG4gIGNvbnN0IHNlYXJjaFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbGFiZWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDogYW55KSB7XG4gICAgbGV0IHRvcGljID0gZXZlbnQudGFyZ2V0WzBdLnZhbHVlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9waWMgPSB0b3BpYy50b0xvd2VyQ2FzZSgpO1xuICAgIG5hdmlnYXRlKGAuLi9sZWFybi8ke3RvcGljfWAsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8vIGhhbmRsZSB3aGF0IGhhcHBlbnMgb24ga2V5IHByZXNzXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHRydWUgJiYgZXZlbnQua2V5ID09PSAnaycpIHtcbiAgICAgIGlmIChzZWFyY2hSZWYuY3VycmVudCAhPT0gbnVsbCAmJiBsYWJlbFJlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHNlYXJjaFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIGxhYmVsUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG4gICAgLy8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVLZXlQcmVzc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BtYWluLXNlYXJjaCBmbGV4ICByZWxhdGl2ZWB9PlxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCAke1xuICAgICAgICAgIHNpemUgPT09ICdsYXJnZScgPyAndy1mdWxsJyA6IHNpemUgPT09ICdtZWRpdW0nID8gJ3ctMy80JyA6ICd3LTEvMidcbiAgICAgICAgfWB9XG4gICAgICAgIC8vIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlRm9ybShlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17bGFiZWxSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleFxuICAgICAgICAgICAgIHNtOmZsZXggaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LWxlZnQgc3BhY2UteC0zIHB4LTQgc2hhZG93LXNtIHJvdW5kZWQtbGcgdGV4dC1zbGF0ZS04MDAgZGFyazpyaW5nLTAgZGFyazp0ZXh0LXNsYXRlLTgwMCBkYXJrOmhpZ2hsaWdodC13aGl0ZS81ICBcbiAgICAgICAgICAgICAgei01MCBib3JkZXItNCBib3JkZXItd2hpdGUgYmctd2hpdGUgZm9jdXMtd2l0aGluOmJvcmRlci00IGZvY3VzLXdpdGhpbjpib3JkZXItc29saWQgZm9jdXMtd2l0aGluOmJvcmRlci1hY2NlbnQtZ3JlZW5cbiAgICAgICAgICAgICAgJHtzaXplID09PSAnbGFyZ2UnID8gJ2gtMTYnIDogc2l6ZSA9PT0gJ21lZGl1bScgPyAnaC0xMicgOiAnaC04J31cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHotMTAwYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+XHVEODNEXHVERDBEPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtzZWFyY2hSZWZ9XG4gICAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYSB0b3BpY1wiXG4gICAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgdy1mdWxsIGJnLXRyYW5zcGFyZW50IGJvcmRlcjpbbm9uZV0gZm9jdXM6W291dGxpbmU6IDAsIGJvcmRlcjogbm9uZV0gZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8a2JkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNhbnMgZm9udC1zZW1pYm9sZCBkYXJrOnRleHQtc2xhdGUtNTAwXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGV4dC14bFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhYmJyXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ29tbWFuZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXVuZGVybGluZSB0ZXh0LXNsYXRlLTMwMCBkYXJrOnRleHQtc2xhdGUtNTAwXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgXHUyMzE4XG4gICAgICAgICAgICA8L2FiYnI+XG4gICAgICAgICAgICBLXG4gICAgICAgICAgPC9rYmQ+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBoaWRkZW4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgbGlua3MgYXMgbWFpbkNvbnRlbnRMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9tYWluLWNvbnRlbnQnO1xuaW1wb3J0IFBvcHVsYXJUb3BpY3MgZnJvbSAnfi9jb21wb25lbnRzL3BvcHVsYXItdG9waWNzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnfi9jb21wb25lbnRzL3NlYXJjaCc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFybigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbnRlbnQtY2VudGVyIHB4LTYgbGc6cHgtMTQgbXktMTAgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8U2VhcmNoIHNpemU9XCJtZWRpdW1cIiBoYW5kbGVGb3JtPXsoZTogYW55KSA9PiBjb25zb2xlLmxvZyhlKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNFwiPlxuICAgICAgICAgICAgPFBvcHVsYXJUb3BpY3MgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIG1yLTQwXCI+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cbiAgICAgICAgICA8UG9wdWxhclRvcGljcyAvPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgbmFtZTogJ1N2ZWx0ZScsIGlkOiAwIH0sXG4gIHsgbmFtZTogJ1JlYWN0JywgaWQ6IDEgfSxcbiAgeyBuYW1lOiAnVGFpbHdpbmQnLCBpZDogMiB9LFxuICB7IG5hbWU6ICdSdXN0JywgaWQ6IDMgfSxcbiAgeyBuYW1lOiAnUHl0aG9uJywgaWQ6IDQgfSxcbiAgeyBuYW1lOiAnUmVtaXgnLCBpZDogNSB9LFxuICB7IG5hbWU6ICdDU1MnLCBpZDogNiB9LFxuICB7IG5hbWU6ICdOb2RlJywgaWQ6IDcgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcHVsYXJUb3BpY3MoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1yLTEwIHctODBcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBzaXplIHRleHQtMnhsXCI+UG9wdWxhciBUb3BpY3M8L3NwYW4+XG4gICAgICA8PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlckNhc2VUaXRsZSA9IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBteS0wLjVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGluayB0bz17YC4vJHtsb3dlckNhc2VUaXRsZX1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGN1cnNvci1wb2ludGVyIHB4LTUgcHktMiByb3VuZGVkLXhsIGhvdmVyOmJnLXN0b25lLTkwMCBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWxnIFwiPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZUxvYWRlckRhdGEgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBUb3BpY0NhcmQsIHsgYmFzZUFydGljbGUgfSBmcm9tICd+L2NvbXBvbmVudHMvdG9waWMtY2FyZCc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB7IHVzZVNvdW5kIH0gZnJvbSAnfi9jb250ZXh0cy9zb3VuZC1jb250ZXh0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZztcbn07XG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbXM/LnRvcGljSWQgPz8gJyc7XG5cbiAgcmV0dXJuIGpzb24oeyBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhcm4oKSB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gdXNlTG9hZGVyRGF0YTxEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC02eGwgbWItMyBjYXBpdGFsaXplXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dFNoYWRvdzpcbiAgICAgICAgICAgICAgJ3JnYmEoMTkyLCAyMTksIDI1NSwgMC4zKSAwcHggMHB4IDgwcHgsIHJnYmEoNjUsIDEyMCwgMjU1LCAwLjE1KSAwcHggMHB4IDMycHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7LyogVE9ETzogTU9WRSBUSEUgQVVESU8gVE9HR0xFIFRPIFRIRSBOQVYgKi99XG4gICAgICAgIHsvKiA8c3BhbiBvbkNsaWNrPXt0b2dnbGVBdWRpb30gY2xhc3NOYW1lPVwibWwtMTIgdGV4dC0yeGwgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICB7bXV0ZSA/ICdcdUQ4M0RcdUREMDcnIDogJ1x1RDgzRFx1REQwOCd9XG4gICAgICAgIDwvc3Bhbj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb250ZW50LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBUb3BpY0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL3RvcGljLWNhcmQnO1xuaW1wb3J0IHsgdXNlU291bmQgfSBmcm9tICd+L2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcic7XG5cbnR5cGUgYm90aERhdGEgPSB7XG4gIC8vIG9mIHR5cGUgTG9hZGVyRGF0YVxuICBkYXRhOiBMb2FkZXJEYXRhO1xufTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBhcnRpY2xlUG9zdHM6IEFycmF5PHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGF1dGhvck9mUG9zdDogc3RyaW5nO1xuICAgIGF1dGhvclR3aXR0ZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcG9pbnRzPzogbnVtYmVyIHwgbnVsbDtcbiAgICB0b3BpYzogc3RyaW5nO1xuICB9Pjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtcy50b3BpY0lkO1xuXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgYXJ0aWNsZVBvc3RzOiBhd2FpdCBkYi5wb3N0LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRvcGljOiBuYW1lLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfTtcbiAgcmV0dXJuIGpzb24oeyBkYXRhLCBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlTG9hZGVyRGF0YTxib3RoRGF0YT4oKTtcblxuICBjb25zdCB7IG11dGUgfTogYW55ID0gdXNlU291bmQoKTtcblxuICBjb25zdCB7IGFydGljbGVQb3N0cyB9ID0gZGF0YTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmsgdG89e3sgcGF0aG5hbWU6ICcuL25ldycgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXhsIG10LThcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBweC0xMCBweS00IHJvdW5kZWQtbGcgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIGhvdmVyOmJvcmRlci1hY2NlbnQtcGluayBob3ZlcjpiZy1hY2NlbnQtcGluay1iZyBhY3RpdmU6Ym9yZGVyLWFjY2VudC1waW5rIGFjdGl2ZTpiZy1hY2NlbnQtcGluay1iZyBcIj5cbiAgICAgICAgICAgICsgQWRkIEFydGljbGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LVs2MDBweF0gXCI+XG4gICAgICAgIHthcnRpY2xlUG9zdHMubGVuZ3RoID8gKFxuICAgICAgICAgIGFydGljbGVQb3N0c1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IChhLnBvaW50cyEgPCBiLnBvaW50cyEgPyAxIDogLTEpKVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmFuayA9IGluZGV4ICsgMTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUb3BpY0NhcmRcbiAgICAgICAgICAgICAgICAgIG11dGU9e211dGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yT2ZQb3N0fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBsaW5rPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgIHVwdm90ZXM9e2l0ZW0ucG9pbnRzID8/IDB9XG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICByYW5rPXtyYW5rfVxuICAgICAgICAgICAgICAgICAgdHdpdHRlckhhbmRsZT17aXRlbS5hdXRob3JUd2l0dGVyID8/ICcnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXktMjAgZm9udC1leHRyYWJvbGQgdGV4dC14bFwiPlxuICAgICAgICAgICAgPHNwYW4+XHVEODNEXHVERTE0IE5vIGFydGljbGVzIGZvciB0aGlzIHRvcGljLCB5ZXQhPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtNFwiPkFkZCBvbmUgYWJvdmUhIFx1RDgzRFx1REM0Njwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU291bmQgZnJvbSAndXNlLXNvdW5kJztcbmltcG9ydCBwbG9wIGZyb20gJy4uLy4uL3B1YmxpYy9zb3VuZHMvcGxvcC10cmltbWVkLm1wMyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgYmFzZUFydGljbGUge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICB1cHZvdGVzOiBudW1iZXI7XG4gIGltYWdlPzogc3RyaW5nO1xuICB0d2l0dGVySGFuZGxlPzogc3RyaW5nO1xufVxuaW50ZXJmYWNlIEFydGljbGUgZXh0ZW5kcyBiYXNlQXJ0aWNsZSB7XG4gIHJhbms/OiBudW1iZXI7XG4gIG11dGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcGljQ2FyZCh7XG4gIHRpdGxlLFxuICBhdXRob3IsXG4gIGxpbmsgPSAnLycsXG4gIHVwdm90ZXMsXG4gIHJhbmssXG4gIGltYWdlLFxuICB0d2l0dGVySGFuZGxlLFxuICBtdXRlLFxufTogQXJ0aWNsZSkge1xuICBjb25zdCBbdXB2b3RlLCBzZXRVcHZvdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZG93bnZvdGUsIHNldERvd252b3RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSh1cHZvdGVzID8/IDApO1xuICBjb25zdCBbdmFsaWRMaW5rLCBzZXRWYWxpZExpbmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGlua0Vycm9yLCBzZXRMaW5rRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHZvbHVtZTogbnVtYmVyID0gbXV0ZSA/IDAgOiAwLjI7XG4gIGNvbnN0IFt1cHZvdGVTb3VuZF0gPSB1c2VTb3VuZChwbG9wLCB7IHNvdW5kRW5hYmxlZDogIW11dGUsIHZvbHVtZTogdm9sdW1lIH0pO1xuICBjb25zdCBbZG93bnZvdGVTb3VuZF0gPSB1c2VTb3VuZChwbG9wLCB7XG4gICAgc291bmRFbmFibGVkOiAhbXV0ZSxcbiAgICBwbGF5YmFja1JhdGU6IDAuNjUsXG4gICAgdm9sdW1lOiB2b2x1bWUsXG4gICAgLy8gYGludGVycnVwdGAgZW5zdXJlcyB0aGF0IGlmIHRoZSBzb3VuZCBzdGFydHMgYWdhaW4gYmVmb3JlIGl0J3NcbiAgICAvLyBlbmRlZCwgaXQgd2lsbCB0cnVuY2F0ZSBpdC4gT3RoZXJ3aXNlLCB0aGUgc291bmQgY2FuIG92ZXJsYXAuXG4gICAgaW50ZXJydXB0OiB0cnVlLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsaW5rLmxlbmd0aCA+IDEwKSB7XG4gICAgICBzZXRWYWxpZExpbmsodHJ1ZSk7XG4gICAgfVxuICB9LCBbbGlua10pO1xuXG4gIGNvbnN0IGhhbmRsZVVwdm90ZSA9ICgpID0+IHtcbiAgICBpZiAoIXVwdm90ZSkge1xuICAgICAgdXB2b3RlU291bmQoKTtcblxuICAgICAgc2V0VXB2b3RlKHRydWUpO1xuICAgICAgZG93bnZvdGUgJiYgc2V0RG93bnZvdGUoZmFsc2UpO1xuXG4gICAgICBpZiAoZG93bnZvdGUpIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgKyAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVwdm90ZShmYWxzZSk7XG4gICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dudm90ZSA9ICgpID0+IHtcbiAgICBpZiAoIWRvd252b3RlKSB7XG4gICAgICBkb3dudm90ZVNvdW5kKCk7XG5cbiAgICAgIHNldERvd252b3RlKHRydWUpO1xuICAgICAgdXB2b3RlICYmIHNldFVwdm90ZShmYWxzZSk7XG4gICAgICBpZiAodXB2b3RlKSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2IC0gMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXREb3dudm90ZShmYWxzZSk7XG4gICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb3JtYXR0ZWROdW1iZXIgPSBJbnRsLk51bWJlckZvcm1hdCgnZW4tdXMnLCB7XG4gICAgbm90YXRpb246ICdjb21wYWN0JyxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEsXG4gIH0pLmZvcm1hdChjb3VudCk7XG5cbiAgY29uc3QgTGlua1RvQXJ0aWNsZSA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xuICAgIHJldHVybiB2YWxpZExpbmsgPyAoXG4gICAgICA8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApIDogKFxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRMaW5rRXJyb3IodHJ1ZSl9PntjaGlsZHJlbn08L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEVycm9yUG9wdXAgPSAoZXJyb3I6IGFueSkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TGlua0Vycm9yKGZhbHNlKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi03MDAgYWJzb2x1dGUgdy0zMCBiZy1ibGFjayBtbC0xMCBtdC00ICR7XG4gICAgICAgICAgZXJyb3IgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCdcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TGlua0Vycm9yKGZhbHNlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBweC0yIHB5LTAuMjUgdGV4dC14bCB0b3AtMCByaWdodC0wIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHhcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LTMwIGJnLWVycm9yLWJnIHRleHQtZXJyb3IgcC0xMCBiZy1hY2NlbnQtZXJyb3ItYmcgdGV4dC1hY2NlbnQtZXJyb3IgIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWNjZW50LWVycm9yIHotMTBcIj5cbiAgICAgICAgICBMaW5rIGlzIGludmFsaWQgXHVEODNEXHVERTE0XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggdy0zMCBteS04IHNoYWRvdy1sZyBzaGFkb3ctc3RvbmUtOTAwIHJvdW5kZWQtMnhsICBib3JkZXItNCBib3JkZXItc29saWQgYmctWyMwMDAwMDAxY10gICR7XG4gICAgICAgIHVwdm90ZVxuICAgICAgICAgID8gJ2JvcmRlci1ncmVlbi00MDAnXG4gICAgICAgICAgOiBkb3dudm90ZVxuICAgICAgICAgID8gJ2JvcmRlci1yZWQtNDAwJ1xuICAgICAgICAgIDogJyBib3JkZXItc3RvbmUtODAwJ1xuICAgICAgfSBweS04IHJlbGF0aXZlYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtMTAgbWItYXV0byB0ZXh0LTN4bFwiPlxuICAgICAgICAgIHtyYW5rfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmtUb0FydGljbGU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZSBkZWNvcmF0aW9uLXdoaXRlIGRlY29yYXRpb24tIGhvdmVyOnRleHQtYWNjZW50LXBpbmsgbWItNCB0ZXh0LTJ4bCBtYXgtdy1tZCBmb250LWJvbGQgXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L0xpbmtUb0FydGljbGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG15LThcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIFwiPnthdXRob3J9PC9zcGFuPlxuICAgICAgICAgICAge3R3aXR0ZXJIYW5kbGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjMWRhMGYyNThdIG1sLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0xIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3R3aXR0ZXJIYW5kbGV9YH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNHB4IFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMURBMUYyXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjIuMjMgNS45MjRhOC4yMTIgOC4yMTIgMCAwMS0yLjM1Ny42NDYgNC4xMTUgNC4xMTUgMCAwMDEuODA0LTIuMjcgOC4yMjEgOC4yMjEgMCAwMS0yLjYwNi45OTYgNC4xMDMgNC4xMDMgMCAwMC02Ljk5MSAzLjc0MiAxMS42NDcgMTEuNjQ3IDAgMDEtOC40NTctNC4yODcgNC4wODcgNC4wODcgMCAwMC0uNTU2IDIuMDYzIDQuMSA0LjEgMCAwMDEuODI1IDMuNDE1IDQuMDkgNC4wOSAwIDAxLTEuODU5LS41MTN2LjA1MmE0LjEwNCA0LjEwNCAwIDAwMy4yOTIgNC4wMjMgNC4wOTkgNC4wOTkgMCAwMS0xLjg1My4wNyA0LjExIDQuMTEgMCAwMDMuODMzIDIuODUgOC4yMzYgOC4yMzYgMCAwMS01LjA5NiAxLjc1NiA4LjMzIDguMzMgMCAwMS0uOTc5LS4wNTcgMTEuNjE3IDExLjYxNyAwIDAwNi4yOSAxLjg0M2M3LjU0NyAwIDExLjY3NS02LjI1MiAxMS42NzUtMTEuNjc1IDAtLjE3OC0uMDA0LS4zNTUtLjAxMi0uNTMxYTguMjk4IDguMjk4IDAgMDAyLjA0Ny0yLjEyM3pcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC04ICBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHB4LTQgcHktMiBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOmJnLXppbmMtOTAwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPExpbmtUb0FydGljbGU+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgUmVhZCBBcnRpY2xlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbmtUb0FydGljbGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LTEgbXgtMTAgcm91bmRlZC0yeGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICBtbC1hdXRvXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXB2b3RlfVxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICB1cHZvdGUgPyAnc3Ryb2tlLWdyZWVuLTQwMCcgOiAnc3Ryb2tlLXdoaXRlJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgd2lkdGg9XCI0NFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ0XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiNiAxNSAxMiA5IDE4IDE1XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xIHRleHQtbGcgZm9udC1ib2xkICR7XG4gICAgICAgICAgICAgIHVwdm90ZVxuICAgICAgICAgICAgICAgID8gJ3RleHQtZ3JlZW4tNDAwJ1xuICAgICAgICAgICAgICAgIDogZG93bnZvdGVcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXJlZC01MDAnXG4gICAgICAgICAgICAgICAgOiAndGV4dC13aGl0ZSdcbiAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y291bnQgPiA5OTkgPyBmb3JtYXR0ZWROdW1iZXIgOiBjb3VudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRG93bnZvdGV9XG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGRvd252b3RlID8gJ3N0cm9rZS1yZWQtNTAwJyA6ICdzdHJva2Utd2hpdGUnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIHdpZHRoPVwiNDRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNDRcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjYgOSAxMiAxNSAxOCA5XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaW5rRXJyb3IgJiYgPEVycm9yUG9wdXAgZXJyb3I9e2xpbmtFcnJvcn0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGRldmVsb3BtZW50IHdlIGRvbid0IHdhbnQgdG8gcmVzdGFydFxuLy8gdGhlIHNlcnZlciB3aXRoIGV2ZXJ5IGNoYW5nZSwgYnV0IHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGRvbid0XG4vLyBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgREIgd2l0aCBldmVyeSBjaGFuZ2UgZWl0aGVyLlxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgZGIgPSBnbG9iYWwuX19kYjtcbn1cblxuZXhwb3J0IHsgZGIgfTtcbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IHJlZGlyZWN0LCBqc29uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZHM/OiB7IHVybD86IHN0cmluZzsgdGl0bGU/OiBzdHJpbmc7IGF1dGhvck9mUG9zdD86IHN0cmluZyB9O1xuICBmaWVsZEVycm9ycz86IHsgdXJsPzogc3RyaW5nOyB0aXRsZT86IHN0cmluZzsgYXV0aG9yT2ZQb3N0Pzogc3RyaW5nIH07XG59O1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpID0+IGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVVcmwodXJsOiBzdHJpbmcpIHtcbiAgbGV0IHJlZ0V4ID1cbiAgICAvXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP1stYS16QS1aMC05QDolLl9cXCt+Iz1dezEsMjU2fVxcLlthLXpBLVowLTkoKV17MSw2fVxcYihbLWEtekEtWjAtOSgpQDolX1xcKy5+Iz8mLy89XSopJC9nbTtcblxuICBjb25zdCBpc1ZhbGlkID0gcmVnRXgudGVzdCh1cmwpO1xuICBpZiAoIWlzVmFsaWQpIHtcbiAgICByZXR1cm4gJ1VybCBtdXN0IGJlIHZhbGlkJztcbiAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gIGlmICh0aXRsZS5sZW5ndGggPCA0KSB7XG4gICAgcmV0dXJuICdUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBdXRob3IoYXV0aG9yOiBzdHJpbmcpIHtcbiAgaWYgKGF1dGhvci5sZW5ndGggPCA0KSB7XG4gICAgcmV0dXJuICdBdXRob3IgbXVzdCBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMnO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc29sZS5sb2coZm9ybSk7XG4gIGxldCB0b3BpYyA9IGZvcm0uZ2V0KCd0b3BpYycpO1xuICBsZXQgdXJsID0gZm9ybS5nZXQoJ3VybCcpO1xuICBsZXQgdGl0bGUgPSBmb3JtLmdldCgndGl0bGUnKTtcbiAgbGV0IGF1dGhvck9mUG9zdCA9IGZvcm0uZ2V0KCdhdXRob3InKTtcblxuICAvLyBWYWxpZGF0aW9uIGhlcmUgZm9yIGZvcm1hdCBvZiBmaWVsZHM6XG4gIGlmIChcbiAgICB0eXBlb2YgdG9waWMgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdGl0bGUgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIGF1dGhvck9mUG9zdCAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZm9ybUVycm9yOiAnRm9ybSBzdWJtaXR0ZWQgaW5jb3JyZWN0bHknLFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGZpZWxkRXJyb3JzID0ge1xuICAgIHVybDogdmFsaWRhdGVVcmwodXJsKSxcbiAgICB0aXRsZTogdmFsaWRhdGVUaXRsZSh0aXRsZSksXG4gICAgYXV0aG9yT2ZQb3N0OiB2YWxpZGF0ZUF1dGhvcihhdXRob3JPZlBvc3QpLFxuICB9O1xuICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSkge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkczogeyB1cmwsIHRpdGxlLCBhdXRob3JPZlBvc3QgfSB9KTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRpb24gZm9yIGV4aXN0aW5nIHVybCBpbiBkYXRhYmFzZVxuICBjb25zdCBleGlzdHMgPSBhd2FpdCBkYi5wb3N0LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHRvcGljOiB0b3BpYyxcbiAgICAgIHVybDogdXJsLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIFRoZSB0b3BpY3MgaW4gdGhlIGRhdGFiYXNlIGFyZSBsb3dlcmNhc2VcbiAgdG9waWMgPSB0b3BpYy50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghZXhpc3RzKSB7XG4gICAgYXdhaXQgZGIucG9zdC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyB0b3BpYywgdXJsLCB0aXRsZSwgYXV0aG9yT2ZQb3N0IH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVkaXJlY3QoYC9sZWFybi8ke3RvcGljfWApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQXJ0aWNsZSBhbHJlYWR5IGV4aXN0cycpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXcoKSB7XG4gIGxldCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuICBjb25zb2xlLmxvZyhhY3Rpb25EYXRhKTtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGxldCB0b3BpYyA9IHBhcmFtcy50b3BpY0lkO1xuICB0b3BpYyA9IHRvcGljICYmIHRvcGljWzBdLnRvVXBwZXJDYXNlKCkgKyB0b3BpYy5zdWJzdHJpbmcoMSk7XG5cbiAgaW50ZXJmYWNlIElGb3JtSW5wdXQge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICAvLyB2YWx1ZTogc3RyaW5nO1xuICAgIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIEZvcm1JbnB1dCh7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICB0eXBlLFxuICAgIGRlZmF1bHRWYWx1ZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgfTogSUZvcm1JbnB1dCkge1xuICAgIGNvbnN0IGVycm9yID0gISFkZWZhdWx0VmFsdWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9e2BiZy10cmFuc3BhcmVudCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTYwMCAgcm91bmRlZCB3LWZ1bGwgcHktNCBweC0zIHRleHQtZ3JheS0yMDAgbGVhZGluZy10aWdodCBcbiAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIFxuICAgICAgICAgIGZvY3VzOmJvcmRlci13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcbiAgICAgICAgXG4gICAgICAgICR7ZXJyb3IgJiYgJ2JvcmRlci1yZWQtNjAwJ31gfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFdlIG5lZWQgdG8gc2hvdyB0aGUgd29yZCBhcyBjYXBpdGFsaXplZFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhzXCI+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJzaGFkb3ctbWQgcm91bmRlZCBwdC00IHBiLTggbWItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggcG9pbnRlci1ldmVudHMtbm9uZSAgdGV4dC1sZyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJ0b3BpY1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRvcGljXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNoYWRvdyBib3JkZXItMiBiZy10cmFuc3BhcmVudCBib3JkZXItZ3JheS02MDAgdGV4dC1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgIHJvdW5kZWQgdy1mdWxsIHB5LTQgcHgtMyAgbGVhZGluZy10aWdodFxuICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgZm9jdXM6Ym9yZGVyLXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZVxuICAgICAgICAgICAgICAgICR7dG9waWMgJiYgJyBjdXJzb3Itbm90LWFsbG93ZWQnfSBgfVxuICAgICAgICAgICAgICBpZD1cInRvcGljXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dG9waWN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ISF0b3BpY31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICBodG1sRm9yPVwidXJsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVVJMXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udXJsfVxuICAgICAgICAgICAgICBpZD1cInVybFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL292ZXJyZWFjdGVkLmlvL1wiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnVybCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCAgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgICAgXHUyNzU3XHVGRTBGIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXJsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHBvaW50ZXItZXZlbnRzLW5vbmUgIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICBodG1sRm9yPVwidGl0bGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBcnRpY2xlIFRpdGxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy50aXRsZX1cbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaHkgUmVhY3QgaG9va3MgYXJlIGF3ZXNvbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udGl0bGUgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgICAgXHUyNzU3XHVGRTBGIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICBodG1sRm9yPVwiYXV0aG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQXV0aG9yXG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5hdXRob3JPZlBvc3R9XG4gICAgICAgICAgICAgIGlkPVwiYXV0aG9yXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYXV0aG9yXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYW4gQWJyYW1vdlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5hdXRob3JPZlBvc3QgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgICAgXHUyNzU3XHVGRTBGIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uYXV0aG9yT2ZQb3N0fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWFjY2VudC1waW5rIHctZnVsbCBob3ZlcjpicmlnaHRuZXNzLTExMCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFjY2VudC1waW5rIGhvdmVyOmJvcmRlci13aGl0ZSBhY3RpdmU6Ym9yZGVyLXdoaXRlIHRleHQtd2hpdGUgZm9udC1ib2xkIG10LTggcHktNCBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXQgQXJ0aWNsZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldygpIHtcbiAgcmV0dXJuIDxzcGFuPnNhZGJhaW91bmFvc2lkbmFvc2RuYXNvbiBORVc8L3NwYW4+O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3Bhbj5DaG9vc2UgYSB0b3BpYyBcdTJCMDVcdUZFMEY8L3NwYW4+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNTE4ZjMxMGEnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTNYQ1BQTTVYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zUkJNU0QyUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZCTzc0RldPLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC0yQ1Y3NEJWNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVTM3SVJTVlouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LU9JNlRQSllPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UQ0cyUUI2TS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBWVdOR0lHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybic6eydpZCc6J3JvdXRlcy9sZWFybicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsZWFybicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi1ZREZGSEVJVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVENHMlFCNk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01QVlXTkdJRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybicsJ3BhdGgnOic6dG9waWNJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC02TjYyNkczQS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleC1TUEJGUVBaUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMzZKTjI0NFkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VMzdJUlNWWi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3JywncGFyZW50SWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQnLCdwYXRoJzonbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy1LRldYN1VSNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMzZKTjI0NFkuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4Jzp7J2lkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgtVlpMSlJaQ1cuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi9pbmRleCc6eydpZCc6J3JvdXRlcy9sZWFybi9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuL2luZGV4LTNYRzdGSU1ILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvbG9naW4vaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luL2luZGV4LVJOTlMzTEtLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EWDZPSURJTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBWVdOR0lHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BhdGhzL2luZGV4Jzp7J2lkJzoncm91dGVzL3BhdGhzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BhdGhzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXRocy9pbmRleC03REpWUUxWUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUFZV05HSUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NpZ251cC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaWdudXAvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2lnbnVwJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaWdudXAvaW5kZXgtSDdBWlNLQlguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURYNk9JRElMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUFZV05HSUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC01MThGMzEwQS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFlBQXVCOzs7QUNEdkIscUJBQW9CO0FBQ3BCLHlCQUF3QjtBQUN4QixvQkFBbUI7QUFDbkIsc0JBQXFDOzs7QUNIckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG1CQUE0QjtBQUM1QixvQkFBK0I7QUFFaEIsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsTUFBSSxTQUFT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UUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoseUJBQXlCO0FBQUEsSUFDckIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiwrQkFBK0I7QUFBQSxJQUMzQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDZCQUE2QjtBQUFBLElBQ3pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosbUNBQW1DO0FBQUEsSUFDL0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQkFBc0I7QUFBQSxJQUNsQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEaEdkLElBQU0sTUFBTTtBQUVaLElBQUksSUFBSTtBQUdSLElBQUksUUFBUTtBQUdaLElBQUksSUFDRixVQUNBLHVCQUFRLE9BQU8sZ0JBQWdCLEVBQUUsV0FBVyxNQUFNLFFBQVE7QUFLNUQsSUFBSSxJQUFJLHVCQUFRLE9BQU8sVUFBVSxFQUFFLFFBQVE7QUFFM0MsSUFBSSxJQUFJLDJCQUFPO0FBRWYsSUFBSSxJQUNGLEtBQ0EsMENBQXFCO0FBQUEsRUFDbkIsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBO0FBSVYsSUFBSSxJQUFJLGVBQWUsQ0FBQyxLQUFLLFFBQVE7QUFDbkMsVUFBUSxJQUFJO0FBQ1osTUFBSSxLQUFLO0FBQUE7QUFHWCxJQUFNLE9BQU8sUUFBUSxJQUFJLFFBQVE7QUFFakMsSUFBSSxPQUFPLE1BQU0sTUFBTTtBQUNyQixVQUFRLElBQUksc0NBQStCO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
