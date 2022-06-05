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
var tailwind_default = "/build/_assets/tailwind-Z5RBVKY4.css";

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
    className: "cursor-pointer flex justify-center items-center  mx-2 sm:mx-4 opacity-80 hover:opacity-100 font-semibold"
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
    className: " mx-2 sm:mx-4 opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink hover:text-accent-pink",
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
      className: `shadow appearance-none border-2 border-white  rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-accent-pink  ${error && "border-red-600"}`,
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
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block  text-lg font-bold mb-2",
    htmlFor: "topic"
  }, "Topic"), /* @__PURE__ */ React.createElement("input", {
    className: `shadow border-2 border-white text-gray-700 appearance-none  rounded w-full py-4 px-3  leading-tight focus:outline-none focus:shadow-outline ${topic ? "bg-gray-200  cursor-not-allowed" : ""} `,
    id: "topic",
    name: "topic",
    type: "text",
    value: topic,
    readOnly: true,
    contentEditable: !!topic
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block  text-lg font-bold mb-2",
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
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block  text-lg font-bold mb-2",
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
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block  text-lg font-bold mb-2",
    htmlFor: "author"
  }, "Author"), /* @__PURE__ */ React.createElement(FormInput, {
    defaultValue: (_g = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _g.authorOfPost,
    id: "author",
    type: "text",
    name: "author",
    placeholder: "Dan"
  }), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.authorOfPost) ? /* @__PURE__ */ React.createElement("div", {
    className: "flex "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-red-600 text-md"
  }, "\u2757\uFE0F ", (_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.authorOfPost)) : null), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between mt-2"
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
var assets_manifest_default = { "version": "9d5ff55c", "entry": { "module": "/build/entry.client-KVB22ZMU.js", "imports": ["/build/_shared/chunk-E2GRNGWJ.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-WMHYDQSR.js", "imports": ["/build/_shared/chunk-U37IRSVZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-5DL2ERF7.js", "imports": ["/build/_shared/chunk-BTBFWGLW.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn": { "id": "routes/learn", "parentId": "root", "path": "learn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn-ZACYCWAI.js", "imports": ["/build/_shared/chunk-BTBFWGLW.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId": { "id": "routes/learn/$topicId", "parentId": "routes/learn", "path": ":topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId-LMX5XTNQ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/index": { "id": "routes/learn/$topicId/index", "parentId": "routes/learn/$topicId", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/index-T52Z4MMV.js", "imports": ["/build/_shared/chunk-36JN244Y.js", "/build/_shared/chunk-U37IRSVZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new": { "id": "routes/learn/$topicId/new", "parentId": "routes/learn/$topicId", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new-WSBYITRK.js", "imports": ["/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new/index": { "id": "routes/learn/$topicId/new/index", "parentId": "routes/learn/$topicId/new", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new/index-VZLJRZCW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/index": { "id": "routes/learn/index", "parentId": "routes/learn", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/index-3XG7FIMH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-UBOGUDM4.js", "imports": ["/build/_shared/chunk-DX6OIDIL.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths/index": { "id": "routes/paths/index", "parentId": "root", "path": "paths", "index": true, "caseSensitive": void 0, "module": "/build/routes/paths/index-7DJVQLVS.js", "imports": ["/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup/index": { "id": "routes/signup/index", "parentId": "root", "path": "signup", "index": true, "caseSensitive": void 0, "module": "/build/routes/signup/index-DPF34SUL.js", "imports": ["/build/_shared/chunk-DX6OIDIL.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9D5FF55C.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29udGV4dHMvc291bmQtY29udGV4dC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbW90ZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvc2lnbnVwL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3JtYXR0ZWQtaW5wdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sb2dpbi9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3BhdGhzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21haW4tY29udGVudC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2VhcmNoLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3BvcHVsYXItdG9waWNzLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdG9waWMtY2FyZC50c3giLCAiLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdAcmVtaXgtcnVuL2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgc2VydmVyQnVpbGQgZnJvbSAnQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gICcvYnVpbGQnLFxuICBleHByZXNzLnN0YXRpYygncHVibGljL2J1aWxkJywgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogJzF5JyB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJywgeyBtYXhBZ2U6ICcxaCcgfSkpO1xuXG5hcHAudXNlKG1vcmdhbigndGlueScpKTtcblxuYXBwLmFsbChcbiAgJyonLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KVxuKTtcblxuYXBwLmdldCgnL3NlcnZlcmNvZGUnLCAocmVxLCByZXMpID0+IHtcbiAgY29uc29sZS5sb2coJ1NFUlZFUiBDT0RFIEVYRUNVVEVEIScpO1xuICByZXMuc2VuZCgnQk9PTScpO1xufSk7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgXHVEODNEXHVERTgwIGxpdmUgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9zaWdudXAvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sb2dpbi9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3BhdGhzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9zaWdudXAvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NpZ251cC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaWdudXBcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpbi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW4vaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9wYXRocy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGF0aHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGF0aHNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9sZWFyblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibGVhcm5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuLyR0b3BpY0lkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiBcIjp0b3BpY0lkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ld1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XG5pbXBvcnQgU291bmRQcm92aWRlciBmcm9tICcuL2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IE1vdGQgZnJvbSAnLi9jb21wb25lbnRzL21vdGQnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogJ3V0Zi04JyxcbiAgdGl0bGU6ICdTYXBpZW50aWEnLFxuICB2aWV3cG9ydDogJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTb3VuZFByb3ZpZGVyPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1vdGQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgICAgICA8L1NvdW5kUHJvdmlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBTb3VuZENvbnRleHRTdGF0ZSA9IHtcbiAgbXV0ZTogYm9vbGVhbjtcbiAgdG9nZ2xlTXV0ZTogRnVuY3Rpb247XG59O1xuXG5jb25zdCBTb3VuZENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFNvdW5kQ29udGV4dFN0YXRlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTb3VuZCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU291bmRDb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU291bmRQcm92aWRlcih7IGNoaWxkcmVuIH06IGFueSkge1xuICBjb25zdCBbbXV0ZSwgc2V0TXV0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXV0ZScpID8/ICdmYWxzZSc7XG4gICAgc2V0TXV0ZSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IEpTT04ucGFyc2UocmVzdWx0KSA6IGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gcmV0cmlldmUgaW4gbG9jYWxTdG9yYWdlXG4gIC8vICAgY29uc3QgaXNNdXRlZFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlJyk7XG5cbiAgLy8gICBjb25zdCBpc011dGVkID0gISFpc011dGVkU3RyaW5nO1xuXG4gIC8vICAgc2V0TXV0ZShpc011dGVkKTtcbiAgLy8gfSwgW10pO1xuXG4gIC8vIEV2ZXJ5dGltZSB0aGUgdmFsdWUgb2YgbXV0ZSBjaGFuZ2VzIG92ZXJyaWRlIHRoZSBsb2NhbCBzdG9yYWdlIHZhbHVlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYG11dGUgaXMgJHttdXRlfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXRlJywgSlNPTi5zdHJpbmdpZnkobXV0ZSkpO1xuICB9LCBbbXV0ZV0pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU11dGUoKSB7XG4gICAgY29uc29sZS5sb2coYHRvZ2dsaW5nIGZyb20gbXV0ZSA9ICR7bXV0ZX1gKTtcbiAgICBzZXRNdXRlKChwcmV2KSA9PiAhcHJldik7XG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSB7IG11dGUsIHRvZ2dsZU11dGUgfTtcbiAgcmV0dXJuIChcbiAgICA8U291bmRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZXN9PntjaGlsZHJlbn08L1NvdW5kQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiIsICJleHBvcnQgY29uc3QgTW90ZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1kYXJrLW1vZGUtYmcgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBweC0yMCAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtcGluayB3LWZ1bGwgdGV4dC1jZW50ZXIgcm91bmRlZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIFdlIHN0YW5kIHdpdGggVWtyYWluZSBcdUQ4M0NcdURERkFcdUQ4M0NcdURERTZcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXpvbWZvcnVrcmFpbmUub3JnL1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgY3Vyc29yLXBvaW50ZXIgZm9udC1ib2xkIHRleHQtcHJpbWFyeS10ZXh0IGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb25hdGUgaGVyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb3RkO1xuIiwgImltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvaGVhZGVyLmNzcyc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgU291bmRDb250ZXh0U3RhdGUsIHVzZVNvdW5kIH0gZnJvbSAnfi9jb250ZXh0cy9zb3VuZC1jb250ZXh0JztcbmltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGUgfV07XG59O1xuXG5jb25zdCBMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHNwYWNlLXgtMSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgPExpbmsgdG89eycvJ30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCAgXCI+U2FwaWVudGlhPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGFuZ3VhZ2VTZWxlY3RvciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMS41IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1sYW5ndWFnZSBoLTYgdy02IHN0cm9rZS13aGl0ZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNCA1aDdcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNOSAzdjJjMCA0LjQxOCAtMi4yMzkgOCAtNSA4XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUgOWMtLjAwMyAyLjE0NCAyLjk1MiAzLjkwOCA2LjcgNFwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMiAyMGw0IC05bDQgOVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xOS4xIDE4aC02LjJcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4+RW5nbGlzaDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbkxvZ2luRWxlbWVudCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICA8TGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTYgcHktMiAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlLzYwICByb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kICBmb2N1cy13aXRoaW46OmJnLXNsYXRlLTUwLzUgZm9jdXMtd2l0aGluOjpib3JkZXItd2hpdGUgaG92ZXI6Ymctc2xhdGUtNTAvNSBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgICAgey8qIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWxhbmd1YWdlIGgtNiB3LTYgc3Ryb2tlLXdoaXRlXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICAgIHN0cm9rZT1cIiNmZmZmZmZcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xNCA4di0yYTIgMiAwIDAgMCAtMiAtMmgtN2EyIDIgMCAwIDAgLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDdhMiAyIDAgMCAwIDIgLTJ2LTJcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMTJoLTEzbDMgLTNtMCA2bC0zIC0zXCIgLz5cbiAgICAgICAgPC9zdmc+ICovfVxuICAgICAgICAgIDxzcGFuPkxvZ2luPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgTmF2RWxlbWVudFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59O1xuXG5jb25zdCBHaXRodWIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgbXgtMiBzbTpteC00IG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZWlsbHlqb2Rvbm5lbGwvc2FwaWVudGlhXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvY3VzLXdpdGhpbjpvcGFjaXR5LTEwMCBvcGFjaXR5LTgwXCJcbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPXsnMzBweCd9XG4gICAgICAgICAgaGVpZ2h0PXsnMzBweCd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGZpbGwtcHJpbWFyeS10ZXh0IFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk02NCA1LjEwM2MtMzMuMzQ3IDAtNjAuMzg4IDI3LjAzNS02MC4zODggNjAuMzg4IDAgMjYuNjgyIDE3LjMwMyA0OS4zMTcgNDEuMjk3IDU3LjMwMyAzLjAxNy41NiA0LjEyNS0xLjMxIDQuMTI1LTIuOTA1IDAtMS40NC0uMDU2LTYuMTk3LS4wODItMTEuMjQzLTE2LjggMy42NTMtMjAuMzQ1LTcuMTI1LTIwLjM0NS03LjEyNS0yLjc0Ny02Ljk4LTYuNzA1LTguODM2LTYuNzA1LTguODM2LTUuNDgtMy43NDguNDEzLTMuNjcuNDEzLTMuNjcgNi4wNjMuNDI1IDkuMjU3IDYuMjIzIDkuMjU3IDYuMjIzIDUuMzg2IDkuMjMgMTQuMTI3IDYuNTYyIDE3LjU3MyA1LjAyLjU0Mi0zLjkwMyAyLjEwNy02LjU2OCAzLjgzNC04LjA3Ni0xMy40MTMtMS41MjUtMjcuNTE0LTYuNzA0LTI3LjUxNC0yOS44NDMgMC02LjU5MyAyLjM2LTExLjk4IDYuMjIzLTE2LjIxLS42MjgtMS41Mi0yLjY5NS03LjY2Mi41ODQtMTUuOTggMCAwIDUuMDctMS42MjMgMTYuNjEgNi4xOUM1My43IDM1IDU4Ljg2NyAzNC4zMjcgNjQgMzQuMzA0YzUuMTMuMDIzIDEwLjMuNjk0IDE1LjEyNyAyLjAzMyAxMS41MjYtNy44MTMgMTYuNTktNi4xOSAxNi41OS02LjE5IDMuMjg3IDguMzE3IDEuMjIgMTQuNDYuNTkzIDE1Ljk4IDMuODcyIDQuMjMgNi4yMTUgOS42MTcgNi4yMTUgMTYuMjEgMCAyMy4xOTQtMTQuMTI3IDI4LjMtMjcuNTc0IDI5Ljc5NiAyLjE2NyAxLjg3NCA0LjA5NyA1LjU1IDQuMDk3IDExLjE4MyAwIDguMDgtLjA3IDE0LjU4My0uMDcgMTYuNTcyIDAgMS42MDcgMS4wODggMy40OSA0LjE0OCAyLjg5NyAyMy45OC03Ljk5NCA0MS4yNjMtMzAuNjIyIDQxLjI2My01Ny4yOTRDMTI0LjM4OCAzMi4xNCA5Ny4zNSA1LjEwNCA2NCA1LjEwNHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjYuNDg0IDkxLjgwNmMtLjEzMy4zLS42MDUuMzktMS4wMzUuMTg1LS40NC0uMTk2LS42ODUtLjYwNS0uNTQzLS45MDYuMTMtLjMxLjYwMy0uMzk1IDEuMDQtLjE4OC40NC4xOTcuNjkuNjEuNTM3Ljkxem0yLjQ0NiAyLjcyOWMtLjI4Ny4yNjctLjg1LjE0My0xLjIzMi0uMjgtLjM5Ni0uNDItLjQ3LS45ODMtLjE3Ny0xLjI1NC4yOTgtLjI2Ni44NDQtLjE0IDEuMjQuMjguMzk0LjQyNi40NzIuOTg0LjE3IDEuMjU1ek0zMS4zMTIgOTguMDEyYy0uMzcuMjU4LS45NzYuMDE3LTEuMzUtLjUyLS4zNy0uNTM4LS4zNy0xLjE4My4wMS0xLjQ0LjM3My0uMjU4Ljk3LS4wMjUgMS4zNS41MDcuMzY4LjU0NS4zNjggMS4xOS0uMDEgMS40NTJ6bTMuMjYxIDMuMzYxYy0uMzMuMzY1LTEuMDM2LjI2Ny0xLjU1Mi0uMjMtLjUyNy0uNDg3LS42NzQtMS4xOC0uMzQzLTEuNTQ0LjMzNi0uMzY2IDEuMDQ1LS4yNjQgMS41NjQuMjMuNTI3LjQ4Ni42ODYgMS4xOC4zMzMgMS41NDN6bTQuNSAxLjk1MWMtLjE0Ny40NzMtLjgyNS42ODgtMS41MS40ODYtLjY4My0uMjA3LTEuMTMtLjc2LS45OS0xLjIzOC4xNC0uNDc3LjgyMy0uNyAxLjUxMi0uNDg1LjY4My4yMDYgMS4xMy43NTYuOTg4IDEuMjM3em00Ljk0My4zNjFjLjAxNy40OTgtLjU2My45MS0xLjI4LjkyLS43MjMuMDE3LTEuMzA4LS4zODctMS4zMTUtLjg3NyAwLS41MDMuNTY4LS45MSAxLjI5LS45MjQuNzE3LS4wMTMgMS4zMDYuMzg3IDEuMzA2Ljg4em00LjU5OC0uNzgyYy4wODYuNDg1LS40MTMuOTg0LTEuMTI2IDEuMTE3LS43LjEzLTEuMzUtLjE3Mi0xLjQ0LS42NTMtLjA4Ni0uNDk4LjQyMi0uOTk3IDEuMTIyLTEuMTI2LjcxNC0uMTIzIDEuMzU0LjE3IDEuNDQ0LjY2M3ptMCAwXCI+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuLy8gaW50ZXJmYWNlIElOYXZpZ2F0aW9uIHtcbi8vICAgbXV0ZTogYm9vbGVhbjtcbi8vICAgdG9nZ2xlTXV0ZTogTW91c2VFdmVudEhhbmRsZXI8SFRNTFNwYW5FbGVtZW50Pjtcbi8vIH1cblxuY29uc3QgTmF2aWdhdGlvbiA9ICh7IG11dGUsIHRvZ2dsZU11dGUgfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJUb3BpY3NcIiBsb2NhdGlvbj1cIi9sZWFyblwiIC8+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIlBhdGhzXCIgbG9jYXRpb249XCIvcGF0aHNcIiAvPlxuICAgICAgey8qIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiTG9naW5cIiBsb2NhdGlvbj1cIi9sb2dpblwiIC8+ICovfVxuICAgICAgPEdpdGh1YiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgbWwtMiBzbTptbC00IFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFjayAgYWN0aXZlOmJvcmRlci1zdG9uZS0yMDAgaG92ZXI6Ym9yZGVyLXN0b25lLTIwMCBweC00IHB5LVsuMjVyZW1dIHJvdW5kZWRcIj5cbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0b2dnbGVNdXRlfSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAge211dGUgPyAnXHVEODNEXHVERDA3JyA6ICdcdUQ4M0RcdUREMDgnfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxMYW5ndWFnZVNlbGVjdG9yIC8+ICovfVxuICAgICAgPE5hdmlnYXRpb25Mb2dpbkVsZW1lbnQgLz5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdmlnYXRpb25FbGVtZW50ID0gKHsgbmFtZSwgbG9jYXRpb24gfTogTmF2RWxlbWVudFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGNsYXNzTmFtZT1cIiBteC0yIHNtOm14LTQgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkIGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgdG89e2xvY2F0aW9ufVxuICAgID5cbiAgICAgIHtuYW1lfVxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IHVzZVNvdW5kKCk7XG4gIGNvbnN0IHsgbXV0ZSwgdG9nZ2xlTXV0ZSB9OiBhbnkgPSB2YWx1ZXM7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJweC02IGxnOnB4LTEyIHB5LTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgaGVhZGVyICBiZy1ibGFja1wiPlxuICAgICAgPExvZ28gLz5cblxuICAgICAgPE5hdmlnYXRpb24gbXV0ZT17bXV0ZX0gdG9nZ2xlTXV0ZT17dG9nZ2xlTXV0ZX0gLz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgRm9ybWF0dGVkSW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2Zvcm1hdHRlZC1pbnB1dCc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgbS0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC0xMiBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTZcIj5TaWduIFVwPC9zcGFuPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFuYSAuLi4gRGFydGggVmFkZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWRlckBkZWF0aHN0YXIuc2l0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIYW5TaG90Rmlyc3RcIlxuICAgICAgICAgICAgdG9nZ2xlU2hvd0hpZGU9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGFjY2VudC1hY2NlbnQtcGlua1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJhZ3JlZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtbC00IHRleHQtbGdcIiBodG1sRm9yPVwiYWdyZWVcIj5cbiAgICAgICAgICAgICAgSSBhZ3JlZSB0byB0aGV7JyAnfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWFjY2VudC1waW5rXCI+VGVybXM8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC03IGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciAgcHktNCBweC04IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgYmctYWNjZW50LXBpbmsgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgXCI+Q3JlYXRlIEFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBmbGV4IGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSB0ZXh0LWFjY2VudC1waW5rIGN1cnNvci1wb2ludGVyXCI+TG9naW48L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBGb3JtRXZlbnRIYW5kbGVyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGh0bWxGb3I6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgYXV0b0NvbXBsZXRlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICB0b2dnbGVTaG93SGlkZT86IGJvb2xlYW47XG4gIGhhc0Vycm9yPzogYm9vbGVhbjtcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xuICBvbkNoYW5nZT86IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybWF0dGVkSW5wdXQoe1xuICBodG1sRm9yLFxuICBsYWJlbCxcbiAgaWQsXG4gIGF1dG9Db21wbGV0ZSxcbiAgbmFtZSxcbiAgdHlwZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHRvZ2dsZVNob3dIaWRlID0gZmFsc2UsXG4gIGhhc0Vycm9yID0gZmFsc2UsXG4gIGVycm9yTWVzc2FnZSA9ICdJbnZhbGlkIEVtYWlsJyxcbiAgb25DaGFuZ2UsXG59OiBJUHJvcHMpIHtcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShoYXNFcnJvcik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy04MCBtYi02ICBmbGV4LWNvbFwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e2h0bWxGb3J9XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQteGwgbWItMVwiXG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggdy1mdWxsIGJvcmRlci0yIGJvcmRlci1zb2xpZCAgJHtcbiAgICAgICAgICBlcnJvciA/ICdib3JkZXItcmVkLTQwMCcgOiAnYm9yZGVyLWdyYXktNjAwJ1xuICAgICAgICB9IGZvY3VzLXdpdGhpbjpib3JkZXItd2hpdGUgIGJnLWJsYWNrIHJvdW5kZWQtbGcgaG92ZXI6c2hhZG93LTJ4bCByZWxhdGl2ZWB9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICB0eXBlPXtcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlICYmIHNob3dQYXNzd29yZFxuICAgICAgICAgICAgICA/ICd0ZXh0J1xuICAgICAgICAgICAgICA6IHRvZ2dsZVNob3dIaWRlICYmICFzaG93UGFzc3dvcmRcbiAgICAgICAgICAgICAgPyAncGFzc3dvcmQnXG4gICAgICAgICAgICAgIDogdHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgcHgtMiBweS00IHRleHQteGwgIGJnLWJsYWNrIHJvdW5kZWQtbGcgaG92ZXI6c2hhZG93LTJ4bCByZWxhdGl2ZSAgXCJcbiAgICAgICAgLz5cbiAgICAgICAge3RvZ2dsZVNob3dIaWRlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlICBpbnNldC15LTAgcmlnaHQtMCBwci0zIGZsZXggaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgcC0wLjUgdy04IGgtOCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgJHtcbiAgICAgICAgICAgICAgICBzaG93UGFzc3dvcmQgPyAnYmctd2hpdGUnIDogJ2JnLXRyYW5zcGFyZW50J1xuICAgICAgICAgICAgICB9IHJvdW5kZWQtZnVsbCBgfVxuICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9e3Nob3dQYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Bhc3N3b3JkKChwcmV2KSA9PiAhcHJldil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyAnXHVEODNEXHVERTQ5JyA6ICdcdUQ4M0RcdURFNDgnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggbXktMiB0ZXh0LW1kIHRleHQtcmVkLTQwMFwiPntlcnJvck1lc3NhZ2V9PC9zcGFuPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICd+L2NvbXBvbmVudHMvZm9ybWF0dGVkLWlucHV0JztcbmltcG9ydCBIaWdobGlnaHRhYmxlVGV4dElucHV0IGZyb20gJ34vY29tcG9uZW50cy9oaWdobGlnaHRhYmxlLXRleHQtaW5wdXQnO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJztcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWU6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gJ3N0cmluZycgfHwgdXNlcm5hbWUubGVuZ3RoIDwgMykge1xuICAgIHJldHVybiBgVXNlcm5hbWVzIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gJ3N0cmluZycgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgIHJldHVybiBgUGFzc3dvcmRzIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogYW55KSA9PiB7XG4gIGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoJ3Bhc3N3b3JkJyk7XG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoJ3VzZXJuYW1lJyk7XG5cbiAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhc3N3b3JkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIC8vIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC0xMiBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTEwXCI+TG9naW48L3NwYW4+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VG8nKSA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZhZGVyQGRlYXRoc3Rhci5zaXRcIlxuICAgICAgICAgICAgaGFzRXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiaW52YWxpZCBlbWFpbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFuU2hvdEZpcnN0XCJcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlPXt0cnVlfVxuICAgICAgICAgICAgaGFzRXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiaW52YWxpZCBwYXNzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBtci1hdXRvIHRleHQtbmV1dHJhbC0zMDAgdGV4dC1tZCBob3Zlcjp0ZXh0LWFjY2VudC1waW5rIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldEVycm9yKHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNyBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHB5LTQgcHgtOCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IGJnLWFjY2VudC1waW5rIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TG9naW48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC00IGZsZXggdy1mdWxsIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/XG4gICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQtYWNjZW50LXBpbmsgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VzKCkge1xuICByZXR1cm4gPHNwYW4+VGhpcyBpcyB0aGUgUGF0aHMgc2VjdGlvbjwvc3Bhbj47XG59XG4iLCAiaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICd+L2NvbXBvbmVudHMvbWFpbi1jb250ZW50JztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxNYWluQ29udGVudCAvPlxuICAgICAgey8qIDxTb3VuZFByb3ZpZGVyPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1vdGQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAvLyBcbiAgICAgIDwvU291bmRQcm92aWRlcj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9tYWluLWNvbnRlbnQuY3NzJztcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICd+L2NvbXBvbmVudHMvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHRhbGtUb1RoZVNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NlcnZlcmNvZGUnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgLy8gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zZXJ2ZXItY29kZScpLnRoZW4oKHJlcykgPT4ge1xuICAgIC8vIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvcm0gPSAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldFswXS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgfTtcblxuICBjb25zdCBMZWZ0Q29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNSBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1mdWxsIHB0LXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctZnVsbCBteS02IFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIFwiPlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdGV4dFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgICcgMCAwIDgwcHggcmdiKDE5MiAyMTkgMjU1IC8gMzAlKSwgMCAwIDMycHggcmdiKDY1IDEyMCAyNTUgLyAxNSUpJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1bNHJlbV0gbGVhZGluZy1bNC41cmVtXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNoYXJlZCBrbm93bGVkZ2UgPGJyIC8+IGZyb20gdGhlIHRvcCBtaW5kcyBpbiB0aGUgcHJvZ3JhbW1pbmdcbiAgICAgICAgICAgICAgaW5kdXN0cnlcbiAgICAgICAgICAgICAgPGJyIC8+IC0gYWxsIGZvciBmcmVlIVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LTN4bCAgcHQtcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy03LzExIG15LTYgIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LWxhcmdlciBsZWFkaW5nLTdcIj5cbiAgICAgICAgICAgICAgV2hldGhlciBhIGJlZ2lubmVyLCBsZWFybmluZyB0byBjb2RlLCBvciBhIHNlYXNvbmVkIHZldGVyYW4uIFRha2VcbiAgICAgICAgICAgICAgYSB0b3VyIGJlbG93IHRvIGdldCBzdGFydGVkIVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1mdWxsIHBiLXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctZnVsbCBteS0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBmbGV4IGJnLWFjY2VudC1waW5rIHB5LTQgcHgtMTYgcm91bmRlZC1sZyB0ZXh0LWxnIGJvcmRlci00IG9wYWNpdHktOTAgYm9yZGVyLXRyYW5zcGFyZW50IGZvbnQtYm9sZCBmb2N1cy13aXRoaW46Ym9yZGVyLTQgZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSBmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgIGhvdmVyOmJvcmRlci00IGhvdmVyOmJvcmRlci13aGl0ZSBob3ZlcjpvcGFjaXR5LTEwMCAgIFwiPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXthc3luYyAoKSA9PiB0YWxrVG9UaGVTZXJ2ZXIoKX0+VGFrZSBhIFRvdXI8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ29udGFpbmVyID0gKHsgdGV4dCB9OiBhbnkpID0+IHtcbiAgICBjb25zdCBsaW5rID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17YC4vbGVhcm4vJHtsaW5rfWB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIFxuICAgICAgICByZWxhdGl2ZSBtYi00IG1yLTQgYmxvY2sgaC1hdXRvIHctYXV0byBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgcHgtNlxuICAgICAgICBweS0zIHRyYW5zaXRpb24gdGV4dC1wcmltYXJ5IGJnLXNlY29uZGFyeSBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgXG4gICAgICAgIGJnLVsjNzE3MTcxNTRdIGhvdmVyOmJyaWdodG5lc3MtMTUwIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1hY2NlbnQtcGlua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IENob29zZUFUb3BpYyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHAtOFwiPk9yIGNob29zZSBhIHRvcGljPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgLW1iLTQgLW1yLTQgZmxleCBmbGV4LXdyYXAgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlbWl4XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQ1NTXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIk5leHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiVGVzdGluZ1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKZXN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkFDSURcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0yLzUgcHgtMTZcIj5cbiAgICAgICAgPFNlYXJjaCBoYW5kbGVGb3JtPXtoYW5kbGVGb3JtfSAvPlxuICAgICAgICA8Q2hvb3NlQVRvcGljIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgcHktOCBweC02IGxnOnB4LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPExlZnRDb250ZW50IC8+XG4gICAgICA8UmlnaHRDb250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iLCAiaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGhhbmRsZUZvcm06IEZ1bmN0aW9uO1xuICBzaXplPzogc3RyaW5nO1xufVxuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCB0b3BpYyA9IGZvcm0uZ2V0KCd0b3BpYycpO1xuICBjb25zb2xlLmxvZyh0b3BpYyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9LCAxMjAwMDAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7IGhhbmRsZUZvcm0sIHNpemUgPSAnbGFyZ2UnIH06IElQcm9wcykge1xuICBjb25zdCBzZWFyY2hSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGxhYmVsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6IGFueSkge1xuICAgIGxldCB0b3BpYyA9IGV2ZW50LnRhcmdldFswXS52YWx1ZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvcGljID0gdG9waWMudG9Mb3dlckNhc2UoKTtcbiAgICBuYXZpZ2F0ZShgLi4vbGVhcm4vJHt0b3BpY31gLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gIH1cblxuICAvLyBoYW5kbGUgd2hhdCBoYXBwZW5zIG9uIGtleSBwcmVzc1xuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5tZXRhS2V5ID09PSB0cnVlICYmIGV2ZW50LmtleSA9PT0gJ2snKSB7XG4gICAgICBpZiAoc2VhcmNoUmVmLmN1cnJlbnQgIT09IG51bGwgJiYgbGFiZWxSZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICBzZWFyY2hSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICBsYWJlbFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxuICAgIC8vIHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlS2V5UHJlc3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1zZWFyY2ggZmxleCAgcmVsYXRpdmVgfT5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggJHtcbiAgICAgICAgICBzaXplID09PSAnbGFyZ2UnID8gJ3ctZnVsbCcgOiBzaXplID09PSAnbWVkaXVtJyA/ICd3LTMvNCcgOiAndy0xLzInXG4gICAgICAgIH1gfVxuICAgICAgICAvLyBvblN1Ym1pdD17KGUpID0+IGhhbmRsZUZvcm0oZSl9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e2xhYmVsUmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXhcbiAgICAgICAgICAgICBzbTpmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC1sZWZ0IHNwYWNlLXgtMyBweC00IHNoYWRvdy1zbSByb3VuZGVkLWxnIHRleHQtc2xhdGUtODAwIGRhcms6cmluZy0wIGRhcms6dGV4dC1zbGF0ZS04MDAgZGFyazpoaWdobGlnaHQtd2hpdGUvNSAgXG4gICAgICAgICAgICAgIHotNTAgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIGJnLXdoaXRlIGZvY3VzLXdpdGhpbjpib3JkZXItNCBmb2N1cy13aXRoaW46Ym9yZGVyLXNvbGlkIGZvY3VzLXdpdGhpbjpib3JkZXItYWNjZW50LWdyZWVuXG4gICAgICAgICAgICAgICR7c2l6ZSA9PT0gJ2xhcmdlJyA/ICdoLTE2JyA6IHNpemUgPT09ICdtZWRpdW0nID8gJ2gtMTInIDogJ2gtOCd9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB6LTEwMGB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlx1RDgzRFx1REQwRDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17c2VhcmNoUmVmfVxuICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdG9waWNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHctZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXI6W25vbmVdIGZvY3VzOltvdXRsaW5lOiAwLCBib3JkZXI6IG5vbmVdIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGtiZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWJiclxuICAgICAgICAgICAgICB0aXRsZT1cIkNvbW1hbmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby11bmRlcmxpbmUgdGV4dC1zbGF0ZS0zMDAgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB0ZXh0LXhsXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFx1MjMxOFxuICAgICAgICAgICAgPC9hYmJyPlxuICAgICAgICAgICAgS1xuICAgICAgICAgIDwva2JkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaGlkZGVuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGxpbmtzIGFzIG1haW5Db250ZW50TGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvbWFpbi1jb250ZW50JztcbmltcG9ydCBQb3B1bGFyVG9waWNzIGZyb20gJ34vY29tcG9uZW50cy9wb3B1bGFyLXRvcGljcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhcm4oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciBweC02IGxnOnB4LTE0IG15LTEwIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPFNlYXJjaCBzaXplPVwibWVkaXVtXCIgaGFuZGxlRm9ybT17KGU6IGFueSkgPT4gY29uc29sZS5sb2coZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cbiAgICAgICAgICAgIDxQb3B1bGFyVG9waWNzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBtci00MFwiPlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00XCI+XG4gICAgICAgICAgPFBvcHVsYXJUb3BpY3MgLz5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBkYXRhID0gW1xuICB7IG5hbWU6ICdTdmVsdGUnLCBpZDogMCB9LFxuICB7IG5hbWU6ICdSZWFjdCcsIGlkOiAxIH0sXG4gIHsgbmFtZTogJ1RhaWx3aW5kJywgaWQ6IDIgfSxcbiAgeyBuYW1lOiAnUnVzdCcsIGlkOiAzIH0sXG4gIHsgbmFtZTogJ1B5dGhvbicsIGlkOiA0IH0sXG4gIHsgbmFtZTogJ1JlbWl4JywgaWQ6IDUgfSxcbiAgeyBuYW1lOiAnQ1NTJywgaWQ6IDYgfSxcbiAgeyBuYW1lOiAnTm9kZScsIGlkOiA3IH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3B1bGFyVG9waWNzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtci0xMCB3LTgwXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgc2l6ZSB0ZXh0LTJ4bFwiPlBvcHVsYXIgVG9waWNzPC9zcGFuPlxuICAgICAgPD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlVGl0bGUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXktMC41XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AuLyR7bG93ZXJDYXNlVGl0bGV9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBjdXJzb3ItcG9pbnRlciBweC01IHB5LTIgcm91bmRlZC14bCBob3ZlcjpiZy1zdG9uZS05MDAgaG92ZXI6dGV4dC1hY2NlbnQtcGlua1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1sZyBcIj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGpzb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgVG9waWNDYXJkLCB7IGJhc2VBcnRpY2xlIH0gZnJvbSAnfi9jb21wb25lbnRzL3RvcGljLWNhcmQnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyB1c2VTb3VuZCB9IGZyb20gJ34vY29udGV4dHMvc291bmQtY29udGV4dCc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xudHlwZSBEYXRhID0ge1xuICBuYW1lOiBzdHJpbmc7XG59O1xuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBuYW1lID0gcGFyYW1zPy50b3BpY0lkID8/ICcnO1xuXG4gIHJldHVybiBqc29uKHsgbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYXJuKCkge1xuICBjb25zdCB7IG5hbWUgfSA9IHVzZUxvYWRlckRhdGE8RGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNnhsIG1iLTMgY2FwaXRhbGl6ZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRTaGFkb3c6XG4gICAgICAgICAgICAgICdyZ2JhKDE5MiwgMjE5LCAyNTUsIDAuMykgMHB4IDBweCA4MHB4LCByZ2JhKDY1LCAxMjAsIDI1NSwgMC4xNSkgMHB4IDBweCAzMnB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgey8qIFRPRE86IE1PVkUgVEhFIEFVRElPIFRPR0dMRSBUTyBUSEUgTkFWICovfVxuICAgICAgICB7LyogPHNwYW4gb25DbGljaz17dG9nZ2xlQXVkaW99IGNsYXNzTmFtZT1cIm1sLTEyIHRleHQtMnhsIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAge211dGUgPyAnXHVEODNEXHVERDA3JyA6ICdcdUQ4M0RcdUREMDgnfVxuICAgICAgICA8L3NwYW4+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29udGVudC1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVG9waWNDYXJkIGZyb20gJ34vY29tcG9uZW50cy90b3BpYy1jYXJkJztcbmltcG9ydCB7IHVzZVNvdW5kIH0gZnJvbSAnfi9jb250ZXh0cy9zb3VuZC1jb250ZXh0JztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuXG50eXBlIGJvdGhEYXRhID0ge1xuICAvLyBvZiB0eXBlIExvYWRlckRhdGFcbiAgZGF0YTogTG9hZGVyRGF0YTtcbn07XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgYXJ0aWNsZVBvc3RzOiBBcnJheTx7XG4gICAgaWQ6IHN0cmluZztcbiAgICBhdXRob3JPZlBvc3Q6IHN0cmluZztcbiAgICBhdXRob3JUd2l0dGVyPzogc3RyaW5nIHwgbnVsbDtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHBvaW50cz86IG51bWJlciB8IG51bGw7XG4gICAgdG9waWM6IHN0cmluZztcbiAgfT47XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbXMudG9waWNJZDtcblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGFydGljbGVQb3N0czogYXdhaXQgZGIucG9zdC5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB0b3BpYzogbmFtZSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH07XG4gIHJldHVybiBqc29uKHsgZGF0YSwgbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZUxvYWRlckRhdGE8Ym90aERhdGE+KCk7XG5cbiAgY29uc3QgeyBtdXRlIH06IGFueSA9IHVzZVNvdW5kKCk7XG5cbiAgY29uc3QgeyBhcnRpY2xlUG9zdHMgfSA9IGRhdGE7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rIHRvPXt7IHBhdGhuYW1lOiAnLi9uZXcnIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC14bCBtdC04XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgcHgtMTAgcHktNCByb3VuZGVkLWxnIGJvcmRlci00IGJvcmRlci13aGl0ZSBob3Zlcjpib3JkZXItYWNjZW50LXBpbmsgaG92ZXI6YmctYWNjZW50LXBpbmstYmcgYWN0aXZlOmJvcmRlci1hY2NlbnQtcGluayBhY3RpdmU6YmctYWNjZW50LXBpbmstYmcgXCI+XG4gICAgICAgICAgICArIEFkZCBBcnRpY2xlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bNjAwcHhdIFwiPlxuICAgICAgICB7YXJ0aWNsZVBvc3RzLmxlbmd0aCA/IChcbiAgICAgICAgICBhcnRpY2xlUG9zdHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS5wb2ludHMhIDwgYi5wb2ludHMhID8gMSA6IC0xKSlcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJhbmsgPSBpbmRleCArIDE7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VG9waWNDYXJkXG4gICAgICAgICAgICAgICAgICBtdXRlPXttdXRlfVxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvck9mUG9zdH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgbGluaz17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICB1cHZvdGVzPXtpdGVtLnBvaW50cyA/PyAwfVxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgcmFuaz17cmFua31cbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGU9e2l0ZW0uYXV0aG9yVHdpdHRlciA/PyAnJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG15LTIwIGZvbnQtZXh0cmFib2xkIHRleHQteGxcIj5cbiAgICAgICAgICAgIDxzcGFuPlx1RDgzRFx1REUxNCBObyBhcnRpY2xlcyBmb3IgdGhpcyB0b3BpYywgeWV0ITwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTRcIj5BZGQgb25lIGFib3ZlISBcdUQ4M0RcdURDNDY8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNvdW5kIGZyb20gJ3VzZS1zb3VuZCc7XG5pbXBvcnQgcGxvcCBmcm9tICcuLi8uLi9wdWJsaWMvc291bmRzL3Bsb3AtdHJpbW1lZC5tcDMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIGJhc2VBcnRpY2xlIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgdXB2b3RlczogbnVtYmVyO1xuICBpbWFnZT86IHN0cmluZztcbiAgdHdpdHRlckhhbmRsZT86IHN0cmluZztcbn1cbmludGVyZmFjZSBBcnRpY2xlIGV4dGVuZHMgYmFzZUFydGljbGUge1xuICByYW5rPzogbnVtYmVyO1xuICBtdXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BpY0NhcmQoe1xuICB0aXRsZSxcbiAgYXV0aG9yLFxuICBsaW5rID0gJy8nLFxuICB1cHZvdGVzLFxuICByYW5rLFxuICBpbWFnZSxcbiAgdHdpdHRlckhhbmRsZSxcbiAgbXV0ZSxcbn06IEFydGljbGUpIHtcbiAgY29uc3QgW3Vwdm90ZSwgc2V0VXB2b3RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rvd252b3RlLCBzZXREb3dudm90ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUodXB2b3RlcyA/PyAwKTtcbiAgY29uc3QgW3ZhbGlkTGluaywgc2V0VmFsaWRMaW5rXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xpbmtFcnJvciwgc2V0TGlua0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB2b2x1bWU6IG51bWJlciA9IG11dGUgPyAwIDogMC4yO1xuICBjb25zdCBbdXB2b3RlU291bmRdID0gdXNlU291bmQocGxvcCwgeyBzb3VuZEVuYWJsZWQ6ICFtdXRlLCB2b2x1bWU6IHZvbHVtZSB9KTtcbiAgY29uc3QgW2Rvd252b3RlU291bmRdID0gdXNlU291bmQocGxvcCwge1xuICAgIHNvdW5kRW5hYmxlZDogIW11dGUsXG4gICAgcGxheWJhY2tSYXRlOiAwLjY1LFxuICAgIHZvbHVtZTogdm9sdW1lLFxuICAgIC8vIGBpbnRlcnJ1cHRgIGVuc3VyZXMgdGhhdCBpZiB0aGUgc291bmQgc3RhcnRzIGFnYWluIGJlZm9yZSBpdCdzXG4gICAgLy8gZW5kZWQsIGl0IHdpbGwgdHJ1bmNhdGUgaXQuIE90aGVyd2lzZSwgdGhlIHNvdW5kIGNhbiBvdmVybGFwLlxuICAgIGludGVycnVwdDogdHJ1ZSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGluay5sZW5ndGggPiAxMCkge1xuICAgICAgc2V0VmFsaWRMaW5rKHRydWUpO1xuICAgIH1cbiAgfSwgW2xpbmtdKTtcblxuICBjb25zdCBoYW5kbGVVcHZvdGUgPSAoKSA9PiB7XG4gICAgaWYgKCF1cHZvdGUpIHtcbiAgICAgIHVwdm90ZVNvdW5kKCk7XG5cbiAgICAgIHNldFVwdm90ZSh0cnVlKTtcbiAgICAgIGRvd252b3RlICYmIHNldERvd252b3RlKGZhbHNlKTtcblxuICAgICAgaWYgKGRvd252b3RlKSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVcHZvdGUoZmFsc2UpO1xuICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG93bnZvdGUgPSAoKSA9PiB7XG4gICAgaWYgKCFkb3dudm90ZSkge1xuICAgICAgZG93bnZvdGVTb3VuZCgpO1xuXG4gICAgICBzZXREb3dudm90ZSh0cnVlKTtcbiAgICAgIHVwdm90ZSAmJiBzZXRVcHZvdGUoZmFsc2UpO1xuICAgICAgaWYgKHVwdm90ZSkge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RG93bnZvdGUoZmFsc2UpO1xuICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0dGVkTnVtYmVyID0gSW50bC5OdW1iZXJGb3JtYXQoJ2VuLXVzJywge1xuICAgIG5vdGF0aW9uOiAnY29tcGFjdCcsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxLFxuICB9KS5mb3JtYXQoY291bnQpO1xuXG4gIGNvbnN0IExpbmtUb0FydGljbGUgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcbiAgICByZXR1cm4gdmFsaWRMaW5rID8gKFxuICAgICAgPGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TGlua0Vycm9yKHRydWUpfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBFcnJvclBvcHVwID0gKGVycm9yOiBhbnkpID0+IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExpbmtFcnJvcihmYWxzZSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNzAwIGFic29sdXRlIHctMzAgYmctYmxhY2sgbWwtMTAgbXQtNCAke1xuICAgICAgICAgIGVycm9yID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExpbmtFcnJvcihmYWxzZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcHgtMiBweS0wLjI1IHRleHQteGwgdG9wLTAgcmlnaHQtMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICB4XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy0zMCBiZy1lcnJvci1iZyB0ZXh0LWVycm9yIHAtMTAgYmctYWNjZW50LWVycm9yLWJnIHRleHQtYWNjZW50LWVycm9yICBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFjY2VudC1lcnJvciB6LTEwXCI+XG4gICAgICAgICAgTGluayBpcyBpbnZhbGlkIFx1RDgzRFx1REUxNFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BmbGV4IHctMzAgbXktOCBzaGFkb3ctbGcgc2hhZG93LXN0b25lLTkwMCByb3VuZGVkLTJ4bCAgYm9yZGVyLTQgYm9yZGVyLXNvbGlkIGJnLVsjMDAwMDAwMWNdICAke1xuICAgICAgICB1cHZvdGVcbiAgICAgICAgICA/ICdib3JkZXItZ3JlZW4tNDAwJ1xuICAgICAgICAgIDogZG93bnZvdGVcbiAgICAgICAgICA/ICdib3JkZXItcmVkLTQwMCdcbiAgICAgICAgICA6ICcgYm9yZGVyLXN0b25lLTgwMCdcbiAgICAgIH0gcHktOCByZWxhdGl2ZWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LTEwIG1iLWF1dG8gdGV4dC0zeGxcIj5cbiAgICAgICAgICB7cmFua31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rVG9BcnRpY2xlPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUgZGVjb3JhdGlvbi13aGl0ZSBkZWNvcmF0aW9uLSBob3Zlcjp0ZXh0LWFjY2VudC1waW5rIG1iLTQgdGV4dC0yeGwgbWF4LXctbWQgZm9udC1ib2xkIFwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rVG9BcnRpY2xlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBteS04XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC14bCBcIj57YXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgICAgIHt0d2l0dGVySGFuZGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlcjpiZy1bIzFkYTBmMjU4XSBtbC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vJHt0d2l0dGVySGFuZGxlfWB9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRweCBcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzFEQTFGMlwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyLjIzIDUuOTI0YTguMjEyIDguMjEyIDAgMDEtMi4zNTcuNjQ2IDQuMTE1IDQuMTE1IDAgMDAxLjgwNC0yLjI3IDguMjIxIDguMjIxIDAgMDEtMi42MDYuOTk2IDQuMTAzIDQuMTAzIDAgMDAtNi45OTEgMy43NDIgMTEuNjQ3IDExLjY0NyAwIDAxLTguNDU3LTQuMjg3IDQuMDg3IDQuMDg3IDAgMDAtLjU1NiAyLjA2MyA0LjEgNC4xIDAgMDAxLjgyNSAzLjQxNSA0LjA5IDQuMDkgMCAwMS0xLjg1OS0uNTEzdi4wNTJhNC4xMDQgNC4xMDQgMCAwMDMuMjkyIDQuMDIzIDQuMDk5IDQuMDk5IDAgMDEtMS44NTMuMDcgNC4xMSA0LjExIDAgMDAzLjgzMyAyLjg1IDguMjM2IDguMjM2IDAgMDEtNS4wOTYgMS43NTYgOC4zMyA4LjMzIDAgMDEtLjk3OS0uMDU3IDExLjYxNyAxMS42MTcgMCAwMDYuMjkgMS44NDNjNy41NDcgMCAxMS42NzUtNi4yNTIgMTEuNjc1LTExLjY3NSAwLS4xNzgtLjAwNC0uMzU1LS4wMTItLjUzMWE4LjI5OCA4LjI5OCAwIDAwMi4wNDctMi4xMjN6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtOCAgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci13aGl0ZSBweC00IHB5LTIgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBob3ZlcjpiZy16aW5jLTkwMCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxMaW5rVG9BcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIFJlYWQgQXJ0aWNsZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rVG9BcnRpY2xlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS0xIG14LTEwIHJvdW5kZWQtMnhsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgbWwtYXV0b1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwdm90ZX1cbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgdXB2b3RlID8gJ3N0cm9rZS1ncmVlbi00MDAnIDogJ3N0cm9rZS13aGl0ZSdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIHdpZHRoPVwiNDRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjYgMTUgMTIgOSAxOCAxNVwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMSB0ZXh0LWxnIGZvbnQtYm9sZCAke1xuICAgICAgICAgICAgICB1cHZvdGVcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LWdyZWVuLTQwMCdcbiAgICAgICAgICAgICAgICA6IGRvd252b3RlXG4gICAgICAgICAgICAgICAgPyAndGV4dC1yZWQtNTAwJ1xuICAgICAgICAgICAgICAgIDogJ3RleHQtd2hpdGUnXG4gICAgICAgICAgICB9IGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvdW50ID4gOTk5ID8gZm9ybWF0dGVkTnVtYmVyIDogY291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd252b3RlfVxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBkb3dudm90ZSA/ICdzdHJva2UtcmVkLTUwMCcgOiAnc3Ryb2tlLXdoaXRlJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICB3aWR0aD1cIjQ0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjQ0XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCI2IDkgMTIgMTUgMTggOVwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7bGlua0Vycm9yICYmIDxFcnJvclBvcHVwIGVycm9yPXtsaW5rRXJyb3J9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuLy8gdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBkZXZlbG9wbWVudCB3ZSBkb24ndCB3YW50IHRvIHJlc3RhcnRcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24gdG8gdGhlIERCIHdpdGggZXZlcnkgY2hhbmdlIGVpdGhlci5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIGRiID0gZ2xvYmFsLl9fZGI7XG59XG5cbmV4cG9ydCB7IGRiIH07XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyByZWRpcmVjdCwganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJztcbmltcG9ydCB7IHVzZUFjdGlvbkRhdGEsIHVzZVBhcmFtcyB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuXG50eXBlIEFjdGlvbkRhdGEgPSB7XG4gIGZvcm1FcnJvcj86IHN0cmluZztcbiAgZmllbGRzPzogeyB1cmw/OiBzdHJpbmc7IHRpdGxlPzogc3RyaW5nOyBhdXRob3JPZlBvc3Q/OiBzdHJpbmcgfTtcbiAgZmllbGRFcnJvcnM/OiB7IHVybD86IHN0cmluZzsgdGl0bGU/OiBzdHJpbmc7IGF1dGhvck9mUG9zdD86IHN0cmluZyB9O1xufTtcblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBBY3Rpb25EYXRhKSA9PiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXJsKHVybDogc3RyaW5nKSB7XG4gIGxldCByZWdFeCA9XG4gICAgL15odHRwcz86XFwvXFwvKD86d3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsxLDI1Nn1cXC5bYS16QS1aMC05KCldezEsNn1cXGIoWy1hLXpBLVowLTkoKUA6JV9cXCsufiM/Ji8vPV0qKSQvZ207XG5cbiAgY29uc3QgaXNWYWxpZCA9IHJlZ0V4LnRlc3QodXJsKTtcbiAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgcmV0dXJuICdVcmwgbXVzdCBiZSB2YWxpZCc7XG4gIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGl0bGUodGl0bGU6IHN0cmluZykge1xuICBpZiAodGl0bGUubGVuZ3RoIDwgNCkge1xuICAgIHJldHVybiAnVGl0bGUgbXVzdCBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXV0aG9yKGF1dGhvcjogc3RyaW5nKSB7XG4gIGlmIChhdXRob3IubGVuZ3RoIDwgNCkge1xuICAgIHJldHVybiAnQXV0aG9yIG11c3QgYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzJztcbiAgfVxufVxuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnNvbGUubG9nKGZvcm0pO1xuICBsZXQgdG9waWMgPSBmb3JtLmdldCgndG9waWMnKTtcbiAgbGV0IHVybCA9IGZvcm0uZ2V0KCd1cmwnKTtcbiAgbGV0IHRpdGxlID0gZm9ybS5nZXQoJ3RpdGxlJyk7XG4gIGxldCBhdXRob3JPZlBvc3QgPSBmb3JtLmdldCgnYXV0aG9yJyk7XG5cbiAgLy8gVmFsaWRhdGlvbiBoZXJlIGZvciBmb3JtYXQgb2YgZmllbGRzOlxuICBpZiAoXG4gICAgdHlwZW9mIHRvcGljICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiBhdXRob3JPZlBvc3QgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIGZvcm1FcnJvcjogJ0Zvcm0gc3VibWl0dGVkIGluY29ycmVjdGx5JyxcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBmaWVsZEVycm9ycyA9IHtcbiAgICB1cmw6IHZhbGlkYXRlVXJsKHVybCksXG4gICAgdGl0bGU6IHZhbGlkYXRlVGl0bGUodGl0bGUpLFxuICAgIGF1dGhvck9mUG9zdDogdmFsaWRhdGVBdXRob3IoYXV0aG9yT2ZQb3N0KSxcbiAgfTtcbiAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzLCBmaWVsZHM6IHsgdXJsLCB0aXRsZSwgYXV0aG9yT2ZQb3N0IH0gfSk7XG4gIH1cblxuICAvLyBWYWxpZGF0aW9uIGZvciBleGlzdGluZyB1cmwgaW4gZGF0YWJhc2VcbiAgY29uc3QgZXhpc3RzID0gYXdhaXQgZGIucG9zdC5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7XG4gICAgICB0b3BpYzogdG9waWMsXG4gICAgICB1cmw6IHVybCxcbiAgICB9LFxuICB9KTtcblxuICAvLyBUaGUgdG9waWNzIGluIHRoZSBkYXRhYmFzZSBhcmUgbG93ZXJjYXNlXG4gIHRvcGljID0gdG9waWMudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWV4aXN0cykge1xuICAgIGF3YWl0IGRiLnBvc3QuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHsgdG9waWMsIHVybCwgdGl0bGUsIGF1dGhvck9mUG9zdCB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlZGlyZWN0KGAvbGVhcm4vJHt0b3BpY31gKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FydGljbGUgYWxyZWFkeSBleGlzdHMnKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3KCkge1xuICBsZXQgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGE8QWN0aW9uRGF0YT4oKTtcbiAgY29uc29sZS5sb2coYWN0aW9uRGF0YSk7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuICBsZXQgdG9waWMgPSBwYXJhbXMudG9waWNJZDtcbiAgdG9waWMgPSB0b3BpYyAmJiB0b3BpY1swXS50b1VwcGVyQ2FzZSgpICsgdG9waWMuc3Vic3RyaW5nKDEpO1xuXG4gIGludGVyZmFjZSBJRm9ybUlucHV0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgLy8gdmFsdWU6IHN0cmluZztcbiAgICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBGb3JtSW5wdXQoe1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgdHlwZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgcGxhY2Vob2xkZXIsXG4gIH06IElGb3JtSW5wdXQpIHtcbiAgICBjb25zdCBlcnJvciA9ICEhZGVmYXVsdFZhbHVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItd2hpdGUgIHJvdW5kZWQgdy1mdWxsIHB5LTQgcHgtMyB0ZXh0LWdyYXktNzAwIG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgZm9jdXM6Ym9yZGVyLWFjY2VudC1waW5rICAke1xuICAgICAgICAgIGVycm9yICYmICdib3JkZXItcmVkLTYwMCdcbiAgICAgICAgfWB9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgLy8gV2UgbmVlZCB0byBzaG93IHRoZSB3b3JkIGFzIGNhcGl0YWxpemVkXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXcteHNcIj5cbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInNoYWRvdy1tZCByb3VuZGVkIHB0LTQgcGItOCBtYi00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwidG9waWNcIj5cbiAgICAgICAgICAgICAgVG9waWNcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2hhZG93IGJvcmRlci0yIGJvcmRlci13aGl0ZSB0ZXh0LWdyYXktNzAwIGFwcGVhcmFuY2Utbm9uZSAgcm91bmRlZCB3LWZ1bGwgcHktNCBweC0zICBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSAke1xuICAgICAgICAgICAgICAgIHRvcGljID8gJ2JnLWdyYXktMjAwICBjdXJzb3Itbm90LWFsbG93ZWQnIDogJydcbiAgICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgICBpZD1cInRvcGljXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dG9waWN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ISF0b3BpY31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwidXJsXCI+XG4gICAgICAgICAgICAgIFVSTFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnVybH1cbiAgICAgICAgICAgICAgaWQ9XCJ1cmxcIlxuICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9vdmVycmVhY3RlZC5pby9cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51cmwgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgIHRleHQtbWRcIj5cbiAgICAgICAgICAgICAgICAgIFx1Mjc1N1x1RkUwRiB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnVybH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgQXJ0aWNsZSBUaXRsZVxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udGl0bGV9XG4gICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2h5IFJlYWN0IGhvb2tzIGFyZSBhd2Vzb21lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnRpdGxlID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtbWRcIj5cbiAgICAgICAgICAgICAgICAgIFx1Mjc1N1x1RkUwRiB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrICB0ZXh0LWxnIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImF1dGhvclwiPlxuICAgICAgICAgICAgICBBdXRob3JcbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LmF1dGhvck9mUG9zdH1cbiAgICAgICAgICAgICAgaWQ9XCJhdXRob3JcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJhdXRob3JcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5hdXRob3JPZlBvc3QgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgICAgXHUyNzU3XHVGRTBGIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uYXV0aG9yT2ZQb3N0fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWFjY2VudC1waW5rIHctZnVsbCBob3ZlcjpicmlnaHRuZXNzLTExMCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFjY2VudC1waW5rIGhvdmVyOmJvcmRlci13aGl0ZSBhY3RpdmU6Ym9yZGVyLXdoaXRlIHRleHQtd2hpdGUgZm9udC1ib2xkIG10LTggcHktNCBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXQgQXJ0aWNsZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldygpIHtcbiAgcmV0dXJuIDxzcGFuPnNhZGJhaW91bmFvc2lkbmFvc2RuYXNvbiBORVc8L3NwYW4+O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3Bhbj5DaG9vc2UgYSB0b3BpYyBcdTJCMDVcdUZFMEY8L3NwYW4+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonOWQ1ZmY1NWMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUtWQjIyWk1VLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FMkdSTkdXSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZCTzc0RldPLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1XTUhZRFFTUi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVTM3SVJTVlouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTVETDJFUkY3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CVEJGV0dMVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBWVdOR0lHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybic6eydpZCc6J3JvdXRlcy9sZWFybicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsZWFybicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi1aQUNZQ1dBSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQlRCRldHTFcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01QVlXTkdJRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybicsJ3BhdGgnOic6dG9waWNJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC1MTVg1WFROUS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleC1UNTJaNE1NVi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMzZKTjI0NFkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VMzdJUlNWWi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3JywncGFyZW50SWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQnLCdwYXRoJzonbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy1XU0JZSVRSSy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMzZKTjI0NFkuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4Jzp7J2lkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgtVlpMSlJaQ1cuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi9pbmRleCc6eydpZCc6J3JvdXRlcy9sZWFybi9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuL2luZGV4LTNYRzdGSU1ILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvbG9naW4vaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luL2luZGV4LVVCT0dVRE00LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EWDZPSURJTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBWVdOR0lHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BhdGhzL2luZGV4Jzp7J2lkJzoncm91dGVzL3BhdGhzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BhdGhzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXRocy9pbmRleC03REpWUUxWUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUFZV05HSUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NpZ251cC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaWdudXAvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2lnbnVwJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaWdudXAvaW5kZXgtRFBGMzRTVUwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURYNk9JRElMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUFZV05HSUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC05RDVGRjU1Qy5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFlBQXVCOzs7QUNEdkIscUJBQW9CO0FBQ3BCLHlCQUF3QjtBQUN4QixvQkFBbUI7QUFDbkIsc0JBQXFDOzs7QUNIckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG1CQUE0QjtBQUM1QixvQkFBK0I7QUFFaEIsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsTUFBSSxTQUFTLGtDQUNYLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU9POzs7Ozs7QUNQUCxvQkFBK0Q7QUFPL0QsSUFBTSxlQUFlLGlDQUF3QztBQUV0RCxvQkFBb0I7QUFDekIsU0FBTyw4QkFBVztBQUFBO0FBR0wsdUJBQXVCLEVBQUUsWUFBaUI7QUFDdkQsUUFBTSxDQUFDLE1BQU0sV0FBVyw0QkFBa0I7QUFFMUMsK0JBQVUsTUFBTTtBQUNkLFVBQU0sU0FBUyxhQUFhLFFBQVEsV0FBVztBQUMvQyxZQUFRLE9BQU8sV0FBVyxjQUFjLEtBQUssTUFBTSxVQUFVO0FBQUEsS0FDNUQ7QUFZSCwrQkFBVSxNQUFNO0FB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
