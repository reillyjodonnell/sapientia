var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var tailwind_default = "/build/_assets/tailwind-WLDXPW27.css";

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
    className: "cursor-pointer flex justify-center items-center  px-5 py-2 rounded-xl  hover:text-accent-pink  opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink "
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
    className: "flex border-2 border-solid border-transparent  active:border-stone-200 hover:border-stone-200 px-4 py-[.25rem] rounded"
  }, /* @__PURE__ */ React.createElement("span", {
    onClick: toggleMute,
    className: "text-2xl cursor-pointer"
  }, mute ? "\u{1F507}" : "\u{1F508}"))), /* @__PURE__ */ React.createElement(NavigationLoginElement, null));
};
var NavigationElement = ({ name, location }) => {
  return /* @__PURE__ */ React.createElement(import_react3.Link, {
    className: "px-5 py-2 rounded-xl hover:text-accent-pink  opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink ",
    to: location
  }, name);
};
var Header = () => {
  const values = useSound();
  const { mute, toggleMute } = values;
  return /* @__PURE__ */ React.createElement("header", {
    className: "px-6 lg:px-12 py-6 flex justify-between items-center text-white header  bg-[#00000038]"
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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/paths/index.tsx
var paths_exports = {};
__export(paths_exports, {
  default: () => Courses,
  links: () => links2
});

// app/styles/index.css
var styles_default = "/build/_assets/index-MI53MAOC.css";

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/paths/index.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Courses() {
  return /* @__PURE__ */ React.createElement("span", null, "This is the Paths section");
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  default: () => Login,
  links: () => links3
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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/signup.tsx
var links3 = () => {
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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links4
});

// app/components/main-content.tsx
var import_react8 = require("@remix-run/react");

// app/components/search.tsx
var import_react7 = require("react");
var import_react_router_dom = require("react-router-dom");
function Search({ handleForm, size = "large" }) {
  const searchRef = (0, import_react7.useRef)(null);
  const labelRef = (0, import_react7.useRef)(null);
  let navigate = (0, import_react_router_dom.useNavigate)();
  async function handleSubmit(event) {
    let topic = event.target[0].value;
    event.preventDefault();
    topic = topic.toLowerCase();
    navigate(`../learn/${topic}`, { replace: true });
  }
  const handleKeyPress = (0, import_react7.useCallback)((event) => {
    if (event.metaKey === true && event.key === "k") {
      if (searchRef.current !== null && labelRef.current !== null) {
        searchRef.current.focus();
        labelRef.current.focus();
      }
    }
  }, []);
  (0, import_react7.useEffect)(() => {
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
    return /* @__PURE__ */ React.createElement(import_react8.Link, {
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
var links4 = () => [
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
  links: () => links5
});
var import_react9 = require("@remix-run/react");

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
var links5 = () => {
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
  }, /* @__PURE__ */ React.createElement(import_react9.Outlet, null))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId.tsx
var topicId_exports = {};
__export(topicId_exports, {
  default: () => Learn2,
  links: () => links6,
  loader: () => loader
});
var import_node = require("@remix-run/node");
var import_react10 = require("@remix-run/react");
var links6 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var loader = async ({ params }) => {
  const name = (params == null ? void 0 : params.topicId) ?? "";
  return (0, import_node.json)({ name });
};
function Learn2() {
  const { name } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-6xl mb-3 capitalize",
    style: {
      textShadow: "rgba(192, 219, 255, 0.3) 0px 0px 80px, rgba(65, 120, 255, 0.15) 0px 0px 32px"
    }
  }, name)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col content-center items-center w-full"
  }, /* @__PURE__ */ React.createElement(import_react10.Outlet, null)));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId/index.tsx
var topicId_exports2 = {};
__export(topicId_exports2, {
  default: () => Index2,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");
var import_react12 = require("@remix-run/react");
var import_react_router_dom3 = require("react-router-dom");

// app/components/new-card.tsx
var import_react11 = require("react");
var import_use_sound = __toESM(require("use-sound"));

// public/sounds/plop-trimmed.mp3
var plop_trimmed_default = "/build/_assets/plop-trimmed-3SO2LLWD.mp3";

// app/components/new-card.tsx
function NewCard({
  title,
  author,
  link = "/",
  upvotes,
  rank,
  image,
  twitterHandle,
  mute
}) {
  const [upvote, setUpvote] = (0, import_react11.useState)(false);
  const [downvote, setDownvote] = (0, import_react11.useState)(false);
  const [count, setCount] = (0, import_react11.useState)(upvotes ?? 0);
  const [validLink, setValidLink] = (0, import_react11.useState)(false);
  const [linkError, setLinkError] = (0, import_react11.useState)(false);
  const volume = mute ? 0 : 0.2;
  const [upvoteSound] = (0, import_use_sound.default)(plop_trimmed_default, { soundEnabled: !mute, volume });
  const [downvoteSound] = (0, import_use_sound.default)(plop_trimmed_default, {
    soundEnabled: !mute,
    playbackRate: 0.65,
    volume,
    interrupt: true
  });
  (0, import_react11.useEffect)(() => {
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
    (0, import_react11.useEffect)(() => {
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
  return (0, import_node2.json)({ data: data2, name });
};
function Index2() {
  const { data: data2 } = (0, import_react12.useLoaderData)();
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
    return /* @__PURE__ */ React.createElement(NewCard, {
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
  action: () => action,
  default: () => New
});
var import_node4 = require("@remix-run/node");
var import_react13 = require("@remix-run/react");

// app/utils/session.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_node3 = require("@remix-run/node");
async function login({ username, password }) {
  const user = await db.user.findUnique({
    where: { username }
  });
  if (!user)
    return null;
  const isCorrectPassword = await import_bcryptjs.default.compare(password, user.passwordHash);
  if (!isCorrectPassword)
    return null;
  return { id: user.id, username };
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node3.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_node3.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
async function createUserSession(userId, route) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_node3.redirect)(route, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId/new.tsx
var badRequest = (data2) => (0, import_node4.json)(data2, { status: 400 });
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
var action = async ({ request }) => {
  const userId = await requireUserId(request);
  let form = await request.formData();
  console.log(form);
  let topic = form.get("topic");
  let url = form.get("url");
  let title = form.get("title");
  let authorOfPost = form.get("author");
  if (typeof topic !== "string" || typeof url !== "string" || typeof title !== "string" || typeof authorOfPost !== "string") {
    return badRequest({
      formError: "Form submitted incorrectly"
    });
  }
  let fieldErrors = {
    url: validateUrl(url),
    title: validateTitle(title),
    authorOfPost: validateAuthor(authorOfPost)
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields: { url, title, authorOfPost } });
  }
  const exists = await db.post.findFirst({
    where: {
      topic,
      url
    }
  });
  topic = topic.toLowerCase();
  const fields = { topic, url, title, authorOfPost };
  if (!exists) {
    await db.post.create({
      data: __spreadProps(__spreadValues({}, fields), { posterId: userId })
    });
    return (0, import_node4.redirect)(`/learn/${topic}`);
  } else {
    throw new Error("Article already exists");
  }
};
function New() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let actionData = (0, import_react13.useActionData)();
  console.log(actionData);
  const params = (0, import_react13.useParams)();
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
  links: () => links7
});
var links7 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Index3() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "Choose a topic \u2B05\uFE0F"));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login2,
  links: () => links8
});
var import_react14 = require("react");
var import_node5 = require("@remix-run/node");
var import_react15 = require("@remix-run/react");
var links8 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var badRequest2 = (data2) => {
  (0, import_node5.json)(data2, { status: 400 });
};
var action2 = async ({ request }) => {
  const form = await request.formData();
  console.log(form);
  const password = form.get("password");
  const username = form.get("username");
  const fields = { username, password };
  console.log(username, password);
  if (typeof username !== "string" || typeof password !== "string") {
    return badRequest2({
      formError: `Form not submitted correctly.`
    });
  }
  const user = await login({ username, password });
  console.log(user);
  if (!user) {
    return badRequest2({ fields, formError: "Username/ password is incorrect" });
  }
  return createUserSession(user.id, "/");
};
function Login2() {
  const [error, setError] = (0, import_react14.useState)(false);
  const [searchParams] = (0, import_react15.useSearchParams)();
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
    htmlFor: "username",
    label: "Username",
    id: "username",
    autoComplete: "username",
    type: "text",
    name: "username",
    placeholder: "Darth Sidius",
    hasError: error,
    errorMessage: "invalid username"
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
    type: "submit",
    onMouseOver: () => setError(true),
    className: "my-7 flex w-full justify-center items-center text-center  py-4 px-8 border-2 border-solid border-transparent bg-accent-pink rounded-lg cursor-pointer hover:border-white "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "Login"))), /* @__PURE__ */ React.createElement("span", {
    className: "mt-4 flex w-full justify-start"
  }, "Don't have an account?", /* @__PURE__ */ React.createElement(import_react15.Link, {
    to: "/signup"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "ml-1 text-accent-pink cursor-pointer"
  }, "Sign Up")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "90f2acdc", "entry": { "module": "/build/entry.client-3XCPPM5X.js", "imports": ["/build/_shared/chunk-3RBMSD2S.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-UGUG3IYI.js", "imports": ["/build/_shared/chunk-U37IRSVZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-MW42XJ4I.js", "imports": ["/build/_shared/chunk-TCG2QB6M.js", "/build/_shared/chunk-YGOBPUCF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn": { "id": "routes/learn", "parentId": "root", "path": "learn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn-7ITSAL2U.js", "imports": ["/build/_shared/chunk-TCG2QB6M.js", "/build/_shared/chunk-YGOBPUCF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId": { "id": "routes/learn/$topicId", "parentId": "routes/learn", "path": ":topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId-GQRTBKKK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/index": { "id": "routes/learn/$topicId/index", "parentId": "routes/learn/$topicId", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/index-Y2UIN6VT.js", "imports": ["/build/_shared/chunk-36JN244Y.js", "/build/_shared/chunk-U37IRSVZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new": { "id": "routes/learn/$topicId/new", "parentId": "routes/learn/$topicId", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new-5V5XH4AW.js", "imports": ["/build/_shared/chunk-GK56CZJG.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new/index": { "id": "routes/learn/$topicId/new/index", "parentId": "routes/learn/$topicId/new", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new/index-VZLJRZCW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/index": { "id": "routes/learn/index", "parentId": "routes/learn", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/index-EACVQSDW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-QYKTQDNO.js", "imports": ["/build/_shared/chunk-GK56CZJG.js", "/build/_shared/chunk-XW4SKCQV.js", "/build/_shared/chunk-YGOBPUCF.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths/index": { "id": "routes/paths/index", "parentId": "root", "path": "paths", "index": true, "caseSensitive": void 0, "module": "/build/routes/paths/index-56IB53WQ.js", "imports": ["/build/_shared/chunk-YGOBPUCF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup": { "id": "routes/signup", "parentId": "root", "path": "signup", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/signup-IHEHPM5U.js", "imports": ["/build/_shared/chunk-XW4SKCQV.js", "/build/_shared/chunk-YGOBPUCF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-90F2ACDC.js" };

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
  "routes/paths/index": {
    id: "routes/paths/index",
    parentId: "root",
    path: "paths",
    index: true,
    caseSensitive: void 0,
    module: paths_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
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
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29udGV4dHMvc291bmQtY29udGV4dC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbW90ZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcGF0aHMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9zaWdudXAudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1hdHRlZC1pbnB1dC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRlbnQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NlYXJjaC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9wb3B1bGFyLXRvcGljcy50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL25ldy1jYXJkLnRzeCIsICIuLi9hcHAvdXRpbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcudHN4IiwgIi4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ0ByZW1peC1ydW4vZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tICdAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZSgneC1wb3dlcmVkLWJ5Jyk7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgJy9idWlsZCcsXG4gIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMvYnVpbGQnLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiAnMXknIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnLCB7IG1heEFnZTogJzFoJyB9KSk7XG5cbmFwcC51c2UobW9yZ2FuKCd0aW55JykpO1xuXG5hcHAuYWxsKFxuICAnKicsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5hcHAuZ2V0KCcvc2VydmVyY29kZScsIChyZXEsIHJlcykgPT4ge1xuICBjb25zb2xlLmxvZygnU0VSVkVSIENPREUgRVhFQ1VURUQhJyk7XG4gIHJlcy5zZW5kKCdCT09NJyk7XG59KTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBcdUQ4M0RcdURFODAgbGl2ZSBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3BhdGhzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvc2lnbnVwLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3BhdGhzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXRocy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYXRoc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NpZ251cFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2lnbnVwXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNpZ251cFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxlYXJuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFyblwiLFxuICAgICAgcGF0aDogXCI6dG9waWNJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkXCIsXG4gICAgICBwYXRoOiBcIm5ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXdcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFyblwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XG5pbXBvcnQgU291bmRQcm92aWRlciBmcm9tICcuL2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IE1vdGQgZnJvbSAnLi9jb21wb25lbnRzL21vdGQnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogJ3V0Zi04JyxcbiAgdGl0bGU6ICdTYXBpZW50aWEnLFxuICB2aWV3cG9ydDogJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTb3VuZFByb3ZpZGVyPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1vdGQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgICAgICA8L1NvdW5kUHJvdmlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBTb3VuZENvbnRleHRTdGF0ZSA9IHtcbiAgbXV0ZTogYm9vbGVhbjtcbiAgdG9nZ2xlTXV0ZTogRnVuY3Rpb247XG59O1xuXG5jb25zdCBTb3VuZENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFNvdW5kQ29udGV4dFN0YXRlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTb3VuZCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU291bmRDb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU291bmRQcm92aWRlcih7IGNoaWxkcmVuIH06IGFueSkge1xuICBjb25zdCBbbXV0ZSwgc2V0TXV0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXV0ZScpID8/ICdmYWxzZSc7XG4gICAgc2V0TXV0ZSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IEpTT04ucGFyc2UocmVzdWx0KSA6IGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gcmV0cmlldmUgaW4gbG9jYWxTdG9yYWdlXG4gIC8vICAgY29uc3QgaXNNdXRlZFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlJyk7XG5cbiAgLy8gICBjb25zdCBpc011dGVkID0gISFpc011dGVkU3RyaW5nO1xuXG4gIC8vICAgc2V0TXV0ZShpc011dGVkKTtcbiAgLy8gfSwgW10pO1xuXG4gIC8vIEV2ZXJ5dGltZSB0aGUgdmFsdWUgb2YgbXV0ZSBjaGFuZ2VzIG92ZXJyaWRlIHRoZSBsb2NhbCBzdG9yYWdlIHZhbHVlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYG11dGUgaXMgJHttdXRlfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXRlJywgSlNPTi5zdHJpbmdpZnkobXV0ZSkpO1xuICB9LCBbbXV0ZV0pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU11dGUoKSB7XG4gICAgY29uc29sZS5sb2coYHRvZ2dsaW5nIGZyb20gbXV0ZSA9ICR7bXV0ZX1gKTtcbiAgICBzZXRNdXRlKChwcmV2KSA9PiAhcHJldik7XG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSB7IG11dGUsIHRvZ2dsZU11dGUgfTtcbiAgcmV0dXJuIChcbiAgICA8U291bmRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZXN9PntjaGlsZHJlbn08L1NvdW5kQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiIsICJleHBvcnQgY29uc3QgTW90ZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1kYXJrLW1vZGUtYmcgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBweC0yMCAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtcGluayB3LWZ1bGwgdGV4dC1jZW50ZXIgcm91bmRlZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIFdlIHN0YW5kIHdpdGggVWtyYWluZSBcdUQ4M0NcdURERkFcdUQ4M0NcdURERTZcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXpvbWZvcnVrcmFpbmUub3JnL1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgY3Vyc29yLXBvaW50ZXIgZm9udC1ib2xkIHRleHQtcHJpbWFyeS10ZXh0IGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb25hdGUgaGVyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb3RkO1xuIiwgImltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvaGVhZGVyLmNzcyc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgU291bmRDb250ZXh0U3RhdGUsIHVzZVNvdW5kIH0gZnJvbSAnfi9jb250ZXh0cy9zb3VuZC1jb250ZXh0JztcbmltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGUgfV07XG59O1xuXG5jb25zdCBMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHNwYWNlLXgtMSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgPExpbmsgdG89eycvJ30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCAgXCI+U2FwaWVudGlhPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGFuZ3VhZ2VTZWxlY3RvciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMS41IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1sYW5ndWFnZSBoLTYgdy02IHN0cm9rZS13aGl0ZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNCA1aDdcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNOSAzdjJjMCA0LjQxOCAtMi4yMzkgOCAtNSA4XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUgOWMtLjAwMyAyLjE0NCAyLjk1MiAzLjkwOCA2LjcgNFwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMiAyMGw0IC05bDQgOVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xOS4xIDE4aC02LjJcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4+RW5nbGlzaDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbkxvZ2luRWxlbWVudCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICA8TGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTYgcHktMiAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlLzYwICByb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kICBmb2N1cy13aXRoaW46OmJnLXNsYXRlLTUwLzUgZm9jdXMtd2l0aGluOjpib3JkZXItd2hpdGUgaG92ZXI6Ymctc2xhdGUtNTAvNSBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgICAgey8qIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWxhbmd1YWdlIGgtNiB3LTYgc3Ryb2tlLXdoaXRlXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICAgIHN0cm9rZT1cIiNmZmZmZmZcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xNCA4di0yYTIgMiAwIDAgMCAtMiAtMmgtN2EyIDIgMCAwIDAgLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDdhMiAyIDAgMCAwIDIgLTJ2LTJcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMTJoLTEzbDMgLTNtMCA2bC0zIC0zXCIgLz5cbiAgICAgICAgPC9zdmc+ICovfVxuICAgICAgICAgIDxzcGFuPkxvZ2luPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgTmF2RWxlbWVudFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59O1xuXG5jb25zdCBHaXRodWIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgcHgtNSBweS0yIHJvdW5kZWQteGwgIGhvdmVyOnRleHQtYWNjZW50LXBpbmsgIG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVpbGx5am9kb25uZWxsL3NhcGllbnRpYVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgb3BhY2l0eS04MFwiXG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD17JzMwcHgnfVxuICAgICAgICAgIGhlaWdodD17JzMwcHgnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBmaWxsLXByaW1hcnktdGV4dCBcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNNjQgNS4xMDNjLTMzLjM0NyAwLTYwLjM4OCAyNy4wMzUtNjAuMzg4IDYwLjM4OCAwIDI2LjY4MiAxNy4zMDMgNDkuMzE3IDQxLjI5NyA1Ny4zMDMgMy4wMTcuNTYgNC4xMjUtMS4zMSA0LjEyNS0yLjkwNSAwLTEuNDQtLjA1Ni02LjE5Ny0uMDgyLTExLjI0My0xNi44IDMuNjUzLTIwLjM0NS03LjEyNS0yMC4zNDUtNy4xMjUtMi43NDctNi45OC02LjcwNS04LjgzNi02LjcwNS04LjgzNi01LjQ4LTMuNzQ4LjQxMy0zLjY3LjQxMy0zLjY3IDYuMDYzLjQyNSA5LjI1NyA2LjIyMyA5LjI1NyA2LjIyMyA1LjM4NiA5LjIzIDE0LjEyNyA2LjU2MiAxNy41NzMgNS4wMi41NDItMy45MDMgMi4xMDctNi41NjggMy44MzQtOC4wNzYtMTMuNDEzLTEuNTI1LTI3LjUxNC02LjcwNC0yNy41MTQtMjkuODQzIDAtNi41OTMgMi4zNi0xMS45OCA2LjIyMy0xNi4yMS0uNjI4LTEuNTItMi42OTUtNy42NjIuNTg0LTE1Ljk4IDAgMCA1LjA3LTEuNjIzIDE2LjYxIDYuMTlDNTMuNyAzNSA1OC44NjcgMzQuMzI3IDY0IDM0LjMwNGM1LjEzLjAyMyAxMC4zLjY5NCAxNS4xMjcgMi4wMzMgMTEuNTI2LTcuODEzIDE2LjU5LTYuMTkgMTYuNTktNi4xOSAzLjI4NyA4LjMxNyAxLjIyIDE0LjQ2LjU5MyAxNS45OCAzLjg3MiA0LjIzIDYuMjE1IDkuNjE3IDYuMjE1IDE2LjIxIDAgMjMuMTk0LTE0LjEyNyAyOC4zLTI3LjU3NCAyOS43OTYgMi4xNjcgMS44NzQgNC4wOTcgNS41NSA0LjA5NyAxMS4xODMgMCA4LjA4LS4wNyAxNC41ODMtLjA3IDE2LjU3MiAwIDEuNjA3IDEuMDg4IDMuNDkgNC4xNDggMi44OTcgMjMuOTgtNy45OTQgNDEuMjYzLTMwLjYyMiA0MS4yNjMtNTcuMjk0QzEyNC4zODggMzIuMTQgOTcuMzUgNS4xMDQgNjQgNS4xMDR6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI2LjQ4NCA5MS44MDZjLS4xMzMuMy0uNjA1LjM5LTEuMDM1LjE4NS0uNDQtLjE5Ni0uNjg1LS42MDUtLjU0My0uOTA2LjEzLS4zMS42MDMtLjM5NSAxLjA0LS4xODguNDQuMTk3LjY5LjYxLjUzNy45MXptMi40NDYgMi43MjljLS4yODcuMjY3LS44NS4xNDMtMS4yMzItLjI4LS4zOTYtLjQyLS40Ny0uOTgzLS4xNzctMS4yNTQuMjk4LS4yNjYuODQ0LS4xNCAxLjI0LjI4LjM5NC40MjYuNDcyLjk4NC4xNyAxLjI1NXpNMzEuMzEyIDk4LjAxMmMtLjM3LjI1OC0uOTc2LjAxNy0xLjM1LS41Mi0uMzctLjUzOC0uMzctMS4xODMuMDEtMS40NC4zNzMtLjI1OC45Ny0uMDI1IDEuMzUuNTA3LjM2OC41NDUuMzY4IDEuMTktLjAxIDEuNDUyem0zLjI2MSAzLjM2MWMtLjMzLjM2NS0xLjAzNi4yNjctMS41NTItLjIzLS41MjctLjQ4Ny0uNjc0LTEuMTgtLjM0My0xLjU0NC4zMzYtLjM2NiAxLjA0NS0uMjY0IDEuNTY0LjIzLjUyNy40ODYuNjg2IDEuMTguMzMzIDEuNTQzem00LjUgMS45NTFjLS4xNDcuNDczLS44MjUuNjg4LTEuNTEuNDg2LS42ODMtLjIwNy0xLjEzLS43Ni0uOTktMS4yMzguMTQtLjQ3Ny44MjMtLjcgMS41MTItLjQ4NS42ODMuMjA2IDEuMTMuNzU2Ljk4OCAxLjIzN3ptNC45NDMuMzYxYy4wMTcuNDk4LS41NjMuOTEtMS4yOC45Mi0uNzIzLjAxNy0xLjMwOC0uMzg3LTEuMzE1LS44NzcgMC0uNTAzLjU2OC0uOTEgMS4yOS0uOTI0LjcxNy0uMDEzIDEuMzA2LjM4NyAxLjMwNi44OHptNC41OTgtLjc4MmMuMDg2LjQ4NS0uNDEzLjk4NC0xLjEyNiAxLjExNy0uNy4xMy0xLjM1LS4xNzItMS40NC0uNjUzLS4wODYtLjQ5OC40MjItLjk5NyAxLjEyMi0xLjEyNi43MTQtLjEyMyAxLjM1NC4xNyAxLjQ0NC42NjN6bTAgMFwiPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcbi8vIGludGVyZmFjZSBJTmF2aWdhdGlvbiB7XG4vLyAgIG11dGU6IGJvb2xlYW47XG4vLyAgIHRvZ2dsZU11dGU6IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxTcGFuRWxlbWVudD47XG4vLyB9XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBtdXRlLCB0b2dnbGVNdXRlIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiVG9waWNzXCIgbG9jYXRpb249XCIvbGVhcm5cIiAvPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJQYXRoc1wiIGxvY2F0aW9uPVwiL3BhdGhzXCIgLz5cbiAgICAgIHsvKiA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIkxvZ2luXCIgbG9jYXRpb249XCIvbG9naW5cIiAvPiAqL31cbiAgICAgIDxHaXRodWIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIG1sLTIgc206bWwtNCBcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgIGFjdGl2ZTpib3JkZXItc3RvbmUtMjAwIGhvdmVyOmJvcmRlci1zdG9uZS0yMDAgcHgtNCBweS1bLjI1cmVtXSByb3VuZGVkXCI+XG4gICAgICAgICAgPHNwYW4gb25DbGljaz17dG9nZ2xlTXV0ZX0gY2xhc3NOYW1lPVwidGV4dC0yeGwgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIHttdXRlID8gJ1x1RDgzRFx1REQwNycgOiAnXHVEODNEXHVERDA4J31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8TGFuZ3VhZ2VTZWxlY3RvciAvPiAqL31cbiAgICAgIDxOYXZpZ2F0aW9uTG9naW5FbGVtZW50IC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uRWxlbWVudCA9ICh7IG5hbWUsIGxvY2F0aW9uIH06IE5hdkVsZW1lbnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIgcm91bmRlZC14bCBob3Zlcjp0ZXh0LWFjY2VudC1waW5rICBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGZvbnQtc2VtaWJvbGQgZm9jdXMtd2l0aGluOnRleHQtYWNjZW50LXBpbmsgXCJcbiAgICAgIHRvPXtsb2NhdGlvbn1cbiAgICA+XG4gICAgICB7bmFtZX1cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB2YWx1ZXMgPSB1c2VTb3VuZCgpO1xuICBjb25zdCB7IG11dGUsIHRvZ2dsZU11dGUgfTogYW55ID0gdmFsdWVzO1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicHgtNiBsZzpweC0xMiBweS02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGhlYWRlciAgYmctWyMwMDAwMDAzOF1cIj5cbiAgICAgIDxMb2dvIC8+XG5cbiAgICAgIDxOYXZpZ2F0aW9uIG11dGU9e211dGV9IHRvZ2dsZU11dGU9e3RvZ2dsZU11dGV9IC8+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlcygpIHtcbiAgcmV0dXJuIDxzcGFuPlRoaXMgaXMgdGhlIFBhdGhzIHNlY3Rpb248L3NwYW4+O1xufVxuIiwgImltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IEZvcm1hdHRlZElucHV0IGZyb20gJ34vY29tcG9uZW50cy9mb3JtYXR0ZWQtaW5wdXQnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIG0tMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHgtMTIgXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi02XCI+U2lnbiBVcDwvc3Bhbj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbmEgLi4uIERhcnRoIFZhZGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmFkZXJAZGVhdGhzdGFyLnNpdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFuU2hvdEZpcnN0XCJcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlPXt0cnVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBhY2NlbnQtYWNjZW50LXBpbmtcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWdyZWVcIlxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNCB0ZXh0LWxnXCIgaHRtbEZvcj1cImFncmVlXCI+XG4gICAgICAgICAgICAgIEkgYWdyZWUgdG8gdGhleycgJ31cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1hY2NlbnQtcGlua1wiPlRlcm1zPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNyBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHB5LTQgcHgtOCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IGJnLWFjY2VudC1waW5rIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIFwiPkNyZWF0ZSBBY2NvdW50PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtOCB3LWZ1bGwgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XG4gICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1hY2NlbnQtcGluayBjdXJzb3ItcG9pbnRlclwiPkxvZ2luPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgaHRtbEZvcjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBhdXRvQ29tcGxldGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHRvZ2dsZVNob3dIaWRlPzogYm9vbGVhbjtcbiAgaGFzRXJyb3I/OiBib29sZWFuO1xuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XG4gIG9uQ2hhbmdlPzogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtYXR0ZWRJbnB1dCh7XG4gIGh0bWxGb3IsXG4gIGxhYmVsLFxuICBpZCxcbiAgYXV0b0NvbXBsZXRlLFxuICBuYW1lLFxuICB0eXBlLFxuICBwbGFjZWhvbGRlcixcbiAgdG9nZ2xlU2hvd0hpZGUgPSBmYWxzZSxcbiAgaGFzRXJyb3IgPSBmYWxzZSxcbiAgZXJyb3JNZXNzYWdlID0gJ0ludmFsaWQgRW1haWwnLFxuICBvbkNoYW5nZSxcbn06IElQcm9wcykge1xuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGhhc0Vycm9yKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTgwIG1iLTYgIGZsZXgtY29sXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj17aHRtbEZvcn1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC14bCBtYi0xXCJcbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCB3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXNvbGlkICAke1xuICAgICAgICAgIGVycm9yID8gJ2JvcmRlci1yZWQtNDAwJyA6ICdib3JkZXItZ3JheS02MDAnXG4gICAgICAgIH0gZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSAgYmctYmxhY2sgcm91bmRlZC1sZyBob3ZlcjpzaGFkb3ctMnhsIHJlbGF0aXZlYH1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHR5cGU9e1xuICAgICAgICAgICAgdG9nZ2xlU2hvd0hpZGUgJiYgc2hvd1Bhc3N3b3JkXG4gICAgICAgICAgICAgID8gJ3RleHQnXG4gICAgICAgICAgICAgIDogdG9nZ2xlU2hvd0hpZGUgJiYgIXNob3dQYXNzd29yZFxuICAgICAgICAgICAgICA/ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgOiB0eXBlXG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBweC0yIHB5LTQgdGV4dC14bCAgYmctYmxhY2sgcm91bmRlZC1sZyBob3ZlcjpzaGFkb3ctMnhsIHJlbGF0aXZlICBcIlxuICAgICAgICAvPlxuICAgICAgICB7dG9nZ2xlU2hvd0hpZGUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgIGluc2V0LXktMCByaWdodC0wIHByLTMgZmxleCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTAuNSB3LTggaC04IHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyICAke1xuICAgICAgICAgICAgICAgIHNob3dQYXNzd29yZCA/ICdiZy13aGl0ZScgOiAnYmctdHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgIH0gcm91bmRlZC1mdWxsIGB9XG4gICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17c2hvd1Bhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzc3dvcmQoKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/ICdcdUQ4M0RcdURFNDknIDogJ1x1RDgzRFx1REU0OCd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBteS0yIHRleHQtbWQgdGV4dC1yZWQtNDAwXCI+e2Vycm9yTWVzc2FnZX08L3NwYW4+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnfi9jb21wb25lbnRzL21haW4tY29udGVudCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjQnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TWFpbkNvbnRlbnQgLz5cbiAgICAgIHsvKiA8U291bmRQcm92aWRlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNb3RkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgLy8gXG4gICAgICA8L1NvdW5kUHJvdmlkZXI+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvbWFpbi1jb250ZW50LmNzcyc7XG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnfi9jb21wb25lbnRzL3NlYXJjaCc7XG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGUgfV07XG59O1xuZXhwb3J0IGNvbnN0IE1haW5Db250ZW50ID0gKCkgPT4ge1xuICBjb25zdCB0YWxrVG9UaGVTZXJ2ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zZXJ2ZXJjb2RlJyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgIC8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc2VydmVyLWNvZGUnKS50aGVuKChyZXMpID0+IHtcbiAgICAvLyB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb3JtID0gKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXRbMF0udmFsdWU7XG4gICAgY29uc29sZS5sb2codGV4dCk7XG4gIH07XG5cbiAgY29uc3QgTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzUgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LWZ1bGwgbXktNiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBcIj5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAnIDAgMCA4MHB4IHJnYigxOTIgMjE5IDI1NSAvIDMwJSksIDAgMCAzMnB4IHJnYig2NSAxMjAgMjU1IC8gMTUlKScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtWzRyZW1dIGxlYWRpbmctWzQuNXJlbV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaGFyZWQga25vd2xlZGdlIDxiciAvPiBmcm9tIHRoZSB0b3AgbWluZHMgaW4gdGhlIHByb2dyYW1taW5nXG4gICAgICAgICAgICAgIGluZHVzdHJ5XG4gICAgICAgICAgICAgIDxiciAvPiAtIGFsbCBmb3IgZnJlZSFcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC0zeGwgIHB0LXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctNy8xMSBteS02ICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1sYXJnZXIgbGVhZGluZy03XCI+XG4gICAgICAgICAgICAgIFdoZXRoZXIgYSBiZWdpbm5lciwgbGVhcm5pbmcgdG8gY29kZSwgb3IgYSBzZWFzb25lZCB2ZXRlcmFuLiBUYWtlXG4gICAgICAgICAgICAgIGEgdG91ciBiZWxvdyB0byBnZXQgc3RhcnRlZCFcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBwYi1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LWZ1bGwgbXktMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgZmxleCBiZy1hY2NlbnQtcGluayBweS00IHB4LTE2IHJvdW5kZWQtbGcgdGV4dC1sZyBib3JkZXItNCBvcGFjaXR5LTkwIGJvcmRlci10cmFuc3BhcmVudCBmb250LWJvbGQgZm9jdXMtd2l0aGluOmJvcmRlci00IGZvY3VzLXdpdGhpbjpib3JkZXItd2hpdGUgZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwICBob3Zlcjpib3JkZXItNCBob3Zlcjpib3JkZXItd2hpdGUgaG92ZXI6b3BhY2l0eS0xMDAgICBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17YXN5bmMgKCkgPT4gdGFsa1RvVGhlU2VydmVyKCl9PlRha2UgYSBUb3VyPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb3BpY0NvbnRhaW5lciA9ICh7IHRleHQgfTogYW55KSA9PiB7XG4gICAgY29uc3QgbGluayA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgdG89e2AuL2xlYXJuLyR7bGlua31gfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBcbiAgICAgICAgcmVsYXRpdmUgbWItNCBtci00IGJsb2NrIGgtYXV0byB3LWF1dG8gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIHB4LTZcbiAgICAgICAgcHktMyB0cmFuc2l0aW9uIHRleHQtcHJpbWFyeSBiZy1zZWNvbmRhcnkgYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IFxuICAgICAgICBiZy1bIzcxNzE3MTU0XSBob3ZlcjpicmlnaHRuZXNzLTE1MCBob3Zlcjpib3JkZXItMiBob3Zlcjpib3JkZXItYWNjZW50LXBpbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDaG9vc2VBVG9waWMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBwLThcIj5PciBjaG9vc2UgYSB0b3BpYzwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi1mdWxsIC1tYi00IC1tci00IGZsZXggZmxleC13cmFwIGxnOmNvbC1zcGFuLTEwXCI+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJSZWFjdFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJSZW1peFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKYXZhU2NyaXB0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkNTU1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJOZXh0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlRlc3RpbmdcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiSmVzdFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJBQ0lEXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFJpZ2h0Q29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMi81IHB4LTE2XCI+XG4gICAgICAgIDxTZWFyY2ggaGFuZGxlRm9ybT17aGFuZGxlRm9ybX0gLz5cbiAgICAgICAgPENob29zZUFUb3BpYyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IHB5LTggcHgtNiBsZzpweC0xMiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgIDxMZWZ0Q29udGVudCAvPlxuICAgICAgPFJpZ2h0Q29udGVudCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50O1xuIiwgImltcG9ydCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmludGVyZmFjZSBJUHJvcHMge1xuICBoYW5kbGVGb3JtOiBGdW5jdGlvbjtcbiAgc2l6ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgdG9waWMgPSBmb3JtLmdldCgndG9waWMnKTtcbiAgY29uc29sZS5sb2codG9waWMpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgMTIwMDAwMCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goeyBoYW5kbGVGb3JtLCBzaXplID0gJ2xhcmdlJyB9OiBJUHJvcHMpIHtcbiAgY29uc3Qgc2VhcmNoUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBsYWJlbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgdG9waWMgPSBldmVudC50YXJnZXRbMF0udmFsdWU7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0b3BpYyA9IHRvcGljLnRvTG93ZXJDYXNlKCk7XG4gICAgbmF2aWdhdGUoYC4uL2xlYXJuLyR7dG9waWN9YCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICB9XG5cbiAgLy8gaGFuZGxlIHdoYXQgaGFwcGVucyBvbiBrZXkgcHJlc3NcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSAmJiBldmVudC5rZXkgPT09ICdrJykge1xuICAgICAgaWYgKHNlYXJjaFJlZi5jdXJyZW50ICE9PSBudWxsICYmIGxhYmVsUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgc2VhcmNoUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgbGFiZWxSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZUtleVByZXNzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1haW4tc2VhcmNoIGZsZXggIHJlbGF0aXZlYH0+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4ICR7XG4gICAgICAgICAgc2l6ZSA9PT0gJ2xhcmdlJyA/ICd3LWZ1bGwnIDogc2l6ZSA9PT0gJ21lZGl1bScgPyAndy0zLzQnIDogJ3ctMS8yJ1xuICAgICAgICB9YH1cbiAgICAgICAgLy8gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVGb3JtKGUpfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtsYWJlbFJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4XG4gICAgICAgICAgICAgc206ZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdCBzcGFjZS14LTMgcHgtNCBzaGFkb3ctc20gcm91bmRlZC1sZyB0ZXh0LXNsYXRlLTgwMCBkYXJrOnJpbmctMCBkYXJrOnRleHQtc2xhdGUtODAwIGRhcms6aGlnaGxpZ2h0LXdoaXRlLzUgIFxuICAgICAgICAgICAgICB6LTUwIGJvcmRlci00IGJvcmRlci13aGl0ZSBiZy13aGl0ZSBmb2N1cy13aXRoaW46Ym9yZGVyLTQgZm9jdXMtd2l0aGluOmJvcmRlci1zb2xpZCBmb2N1cy13aXRoaW46Ym9yZGVyLWFjY2VudC1ncmVlblxuICAgICAgICAgICAgICAke3NpemUgPT09ICdsYXJnZScgPyAnaC0xNicgOiBzaXplID09PSAnbWVkaXVtJyA/ICdoLTEyJyA6ICdoLTgnfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgei0xMDBgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cdUQ4M0RcdUREMEQ8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3NlYXJjaFJlZn1cbiAgICAgICAgICAgIG5hbWU9XCJ0b3BpY1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhIHRvcGljXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB3LWZ1bGwgYmctdHJhbnNwYXJlbnQgYm9yZGVyOltub25lXSBmb2N1czpbb3V0bGluZTogMCwgYm9yZGVyOiBub25lXSBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDxrYmRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2FucyBmb250LXNlbWlib2xkIGRhcms6dGV4dC1zbGF0ZS01MDBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0ZXh0LXhsXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFiYnJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDb21tYW5kXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tdW5kZXJsaW5lIHRleHQtc2xhdGUtMzAwIGRhcms6dGV4dC1zbGF0ZS01MDBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgdGV4dC14bFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBcdTIzMThcbiAgICAgICAgICAgIDwvYWJicj5cbiAgICAgICAgICAgIEtcbiAgICAgICAgICA8L2tiZD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGhpZGRlbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBsaW5rcyBhcyBtYWluQ29udGVudExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL21haW4tY29udGVudCc7XG5pbXBvcnQgUG9wdWxhclRvcGljcyBmcm9tICd+L2NvbXBvbmVudHMvcG9wdWxhci10b3BpY3MnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICd+L2NvbXBvbmVudHMvc2VhcmNoJztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYXJuKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY29udGVudC1jZW50ZXIgcHgtNiBsZzpweC0xNCBteS0xMCBpdGVtcy1zdGFydFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggc2l6ZT1cIm1lZGl1bVwiIGhhbmRsZUZvcm09eyhlOiBhbnkpID0+IGNvbnNvbGUubG9nKGUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00XCI+XG4gICAgICAgICAgICA8UG9wdWxhclRvcGljcyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbXItNDBcIj5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNFwiPlxuICAgICAgICAgIDxQb3B1bGFyVG9waWNzIC8+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgZGF0YSA9IFtcbiAgeyBuYW1lOiAnU3ZlbHRlJywgaWQ6IDAgfSxcbiAgeyBuYW1lOiAnUmVhY3QnLCBpZDogMSB9LFxuICB7IG5hbWU6ICdUYWlsd2luZCcsIGlkOiAyIH0sXG4gIHsgbmFtZTogJ1J1c3QnLCBpZDogMyB9LFxuICB7IG5hbWU6ICdQeXRob24nLCBpZDogNCB9LFxuICB7IG5hbWU6ICdSZW1peCcsIGlkOiA1IH0sXG4gIHsgbmFtZTogJ0NTUycsIGlkOiA2IH0sXG4gIHsgbmFtZTogJ05vZGUnLCBpZDogNyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9wdWxhclRvcGljcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXItMTAgdy04MFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHNpemUgdGV4dC0yeGxcIj5Qb3B1bGFyIFRvcGljczwvc3Bhbj5cbiAgICAgIDw+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZVRpdGxlID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG15LTAuNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgLi8ke2xvd2VyQ2FzZVRpdGxlfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggY3Vyc29yLXBvaW50ZXIgcHgtNSBweS0yIHJvdW5kZWQteGwgaG92ZXI6Ymctc3RvbmUtOTAwIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtbGcgXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IE91dGxldCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IFRvcGljQ2FyZCwgeyBiYXNlQXJ0aWNsZSB9IGZyb20gJ34vY29tcG9uZW50cy90b3BpYy1jYXJkJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgdXNlU291bmQgfSBmcm9tICd+L2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtcz8udG9waWNJZCA/PyAnJztcblxuICByZXR1cm4ganNvbih7IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFybigpIHtcbiAgY29uc3QgeyBuYW1lIH0gPSB1c2VMb2FkZXJEYXRhPERhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTZ4bCBtYi0zIGNhcGl0YWxpemVcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0U2hhZG93OlxuICAgICAgICAgICAgICAncmdiYSgxOTIsIDIxOSwgMjU1LCAwLjMpIDBweCAwcHggODBweCwgcmdiYSg2NSwgMTIwLCAyNTUsIDAuMTUpIDBweCAwcHggMzJweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHsvKiBUT0RPOiBNT1ZFIFRIRSBBVURJTyBUT0dHTEUgVE8gVEhFIE5BViAqL31cbiAgICAgICAgey8qIDxzcGFuIG9uQ2xpY2s9e3RvZ2dsZUF1ZGlvfSBjbGFzc05hbWU9XCJtbC0xMiB0ZXh0LTJ4bCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIHttdXRlID8gJ1x1RDgzRFx1REQwNycgOiAnXHVEODNEXHVERDA4J31cbiAgICAgICAgPC9zcGFuPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbnRlbnQtY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE5ld0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL25ldy1jYXJkJztcbmltcG9ydCBUb3BpY0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL3RvcGljLWNhcmQnO1xuaW1wb3J0IHsgdXNlU291bmQgfSBmcm9tICd+L2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcic7XG5cbnR5cGUgYm90aERhdGEgPSB7XG4gIC8vIG9mIHR5cGUgTG9hZGVyRGF0YVxuICBkYXRhOiBMb2FkZXJEYXRhO1xufTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBhcnRpY2xlUG9zdHM6IEFycmF5PHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGF1dGhvck9mUG9zdDogc3RyaW5nO1xuICAgIGF1dGhvclR3aXR0ZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcG9pbnRzPzogbnVtYmVyIHwgbnVsbDtcbiAgICB0b3BpYzogc3RyaW5nO1xuICB9Pjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtcy50b3BpY0lkO1xuXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgYXJ0aWNsZVBvc3RzOiBhd2FpdCBkYi5wb3N0LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRvcGljOiBuYW1lLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfTtcbiAgcmV0dXJuIGpzb24oeyBkYXRhLCBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlTG9hZGVyRGF0YTxib3RoRGF0YT4oKTtcblxuICBjb25zdCB7IG11dGUgfTogYW55ID0gdXNlU291bmQoKTtcblxuICBjb25zdCB7IGFydGljbGVQb3N0cyB9ID0gZGF0YTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmsgdG89e3sgcGF0aG5hbWU6ICcuL25ldycgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXhsIG10LThcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBweC0xMCBweS00IHJvdW5kZWQtbGcgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIGhvdmVyOmJvcmRlci1hY2NlbnQtcGluayBob3ZlcjpiZy1hY2NlbnQtcGluay1iZyBhY3RpdmU6Ym9yZGVyLWFjY2VudC1waW5rIGFjdGl2ZTpiZy1hY2NlbnQtcGluay1iZyBcIj5cbiAgICAgICAgICAgICsgQWRkIEFydGljbGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LVs2MDBweF0gXCI+XG4gICAgICAgIHthcnRpY2xlUG9zdHMubGVuZ3RoID8gKFxuICAgICAgICAgIGFydGljbGVQb3N0c1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IChhLnBvaW50cyEgPCBiLnBvaW50cyEgPyAxIDogLTEpKVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmFuayA9IGluZGV4ICsgMTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOZXdDYXJkXG4gICAgICAgICAgICAgICAgICBtdXRlPXttdXRlfVxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvck9mUG9zdH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgbGluaz17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICB1cHZvdGVzPXtpdGVtLnBvaW50cyA/PyAwfVxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgcmFuaz17cmFua31cbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGU9e2l0ZW0uYXV0aG9yVHdpdHRlciA/PyAnJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG15LTIwIGZvbnQtZXh0cmFib2xkIHRleHQteGxcIj5cbiAgICAgICAgICAgIDxzcGFuPlx1RDgzRFx1REUxNCBObyBhcnRpY2xlcyBmb3IgdGhpcyB0b3BpYywgeWV0ITwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTRcIj5BZGQgb25lIGFib3ZlISBcdUQ4M0RcdURDNDY8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNvdW5kIGZyb20gJ3VzZS1zb3VuZCc7XG5pbXBvcnQgcGxvcCBmcm9tICcuLi8uLi9wdWJsaWMvc291bmRzL3Bsb3AtdHJpbW1lZC5tcDMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIGJhc2VBcnRpY2xlIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgdXB2b3RlczogbnVtYmVyO1xuICBpbWFnZT86IHN0cmluZztcbiAgdHdpdHRlckhhbmRsZT86IHN0cmluZztcbn1cbmludGVyZmFjZSBBcnRpY2xlIGV4dGVuZHMgYmFzZUFydGljbGUge1xuICByYW5rPzogbnVtYmVyO1xuICBtdXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdDYXJkKHtcbiAgdGl0bGUsXG4gIGF1dGhvcixcbiAgbGluayA9ICcvJyxcbiAgdXB2b3RlcyxcbiAgcmFuayxcbiAgaW1hZ2UsXG4gIHR3aXR0ZXJIYW5kbGUsXG4gIG11dGUsXG59OiBBcnRpY2xlKSB7XG4gIGNvbnN0IFt1cHZvdGUsIHNldFVwdm90ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkb3dudm90ZSwgc2V0RG93bnZvdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKHVwdm90ZXMgPz8gMCk7XG4gIGNvbnN0IFt2YWxpZExpbmssIHNldFZhbGlkTGlua10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsaW5rRXJyb3IsIHNldExpbmtFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgdm9sdW1lOiBudW1iZXIgPSBtdXRlID8gMCA6IDAuMjtcbiAgY29uc3QgW3Vwdm90ZVNvdW5kXSA9IHVzZVNvdW5kKHBsb3AsIHsgc291bmRFbmFibGVkOiAhbXV0ZSwgdm9sdW1lOiB2b2x1bWUgfSk7XG4gIGNvbnN0IFtkb3dudm90ZVNvdW5kXSA9IHVzZVNvdW5kKHBsb3AsIHtcbiAgICBzb3VuZEVuYWJsZWQ6ICFtdXRlLFxuICAgIHBsYXliYWNrUmF0ZTogMC42NSxcbiAgICB2b2x1bWU6IHZvbHVtZSxcbiAgICAvLyBgaW50ZXJydXB0YCBlbnN1cmVzIHRoYXQgaWYgdGhlIHNvdW5kIHN0YXJ0cyBhZ2FpbiBiZWZvcmUgaXQnc1xuICAgIC8vIGVuZGVkLCBpdCB3aWxsIHRydW5jYXRlIGl0LiBPdGhlcndpc2UsIHRoZSBzb3VuZCBjYW4gb3ZlcmxhcC5cbiAgICBpbnRlcnJ1cHQ6IHRydWUsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxpbmsubGVuZ3RoID4gMTApIHtcbiAgICAgIHNldFZhbGlkTGluayh0cnVlKTtcbiAgICB9XG4gIH0sIFtsaW5rXSk7XG5cbiAgY29uc3QgaGFuZGxlVXB2b3RlID0gKCkgPT4ge1xuICAgIGlmICghdXB2b3RlKSB7XG4gICAgICB1cHZvdGVTb3VuZCgpO1xuXG4gICAgICBzZXRVcHZvdGUodHJ1ZSk7XG4gICAgICBkb3dudm90ZSAmJiBzZXREb3dudm90ZShmYWxzZSk7XG5cbiAgICAgIGlmIChkb3dudm90ZSkge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiArIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VXB2b3RlKGZhbHNlKTtcbiAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvd252b3RlID0gKCkgPT4ge1xuICAgIGlmICghZG93bnZvdGUpIHtcbiAgICAgIGRvd252b3RlU291bmQoKTtcblxuICAgICAgc2V0RG93bnZvdGUodHJ1ZSk7XG4gICAgICB1cHZvdGUgJiYgc2V0VXB2b3RlKGZhbHNlKTtcbiAgICAgIGlmICh1cHZvdGUpIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgLSAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERvd252b3RlKGZhbHNlKTtcbiAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvcm1hdHRlZE51bWJlciA9IEludGwuTnVtYmVyRm9ybWF0KCdlbi11cycsIHtcbiAgICBub3RhdGlvbjogJ2NvbXBhY3QnLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSxcbiAgfSkuZm9ybWF0KGNvdW50KTtcblxuICBjb25zdCBMaW5rVG9BcnRpY2xlID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkTGluayA/IChcbiAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICkgOiAoXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldExpbmtFcnJvcih0cnVlKX0+e2NoaWxkcmVufTwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgRXJyb3JQb3B1cCA9IChlcnJvcjogYW55KSA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMaW5rRXJyb3IoZmFsc2UpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTcwMCBhYnNvbHV0ZSB3LTMwIGJnLWJsYWNrIG1sLTEwIG10LTQgJHtcbiAgICAgICAgICBlcnJvciA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMaW5rRXJyb3IoZmFsc2UpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHB4LTIgcHktMC4yNSB0ZXh0LXhsIHRvcC0wIHJpZ2h0LTAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgeFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctMzAgYmctZXJyb3ItYmcgdGV4dC1lcnJvciBwLTEwIGJnLWFjY2VudC1lcnJvci1iZyB0ZXh0LWFjY2VudC1lcnJvciAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtZXJyb3Igei0xMFwiPlxuICAgICAgICAgIExpbmsgaXMgaW52YWxpZCBcdUQ4M0RcdURFMTRcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZmxleCB3LTMwIG15LTggc2hhZG93LWxnIHNoYWRvdy1zdG9uZS05MDAgcm91bmRlZC0yeGwgIGJvcmRlci00IGJvcmRlci1zb2xpZCBiZy1bIzAwMDAwMDFjXSAgJHtcbiAgICAgICAgdXB2b3RlXG4gICAgICAgICAgPyAnYm9yZGVyLWdyZWVuLTQwMCdcbiAgICAgICAgICA6IGRvd252b3RlXG4gICAgICAgICAgPyAnYm9yZGVyLXJlZC00MDAnXG4gICAgICAgICAgOiAnIGJvcmRlci1zdG9uZS04MDAnXG4gICAgICB9IHB5LTggcmVsYXRpdmVgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC0xMCBtYi1hdXRvIHRleHQtM3hsXCI+XG4gICAgICAgICAge3Jhbmt9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGlua1RvQXJ0aWNsZT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lIGRlY29yYXRpb24td2hpdGUgZGVjb3JhdGlvbi0gaG92ZXI6dGV4dC1hY2NlbnQtcGluayBtYi00IHRleHQtMnhsIG1heC13LW1kIGZvbnQtYm9sZCBcIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTGlua1RvQXJ0aWNsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXktOFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQteGwgXCI+e2F1dGhvcn08L3NwYW4+XG4gICAgICAgICAgICB7dHdpdHRlckhhbmRsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXI6YmctWyMxZGEwZjI1OF0gbWwtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTEgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tLyR7dHdpdHRlckhhbmRsZX1gfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0cHggXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMxREExRjJcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMi4yMyA1LjkyNGE4LjIxMiA4LjIxMiAwIDAxLTIuMzU3LjY0NiA0LjExNSA0LjExNSAwIDAwMS44MDQtMi4yNyA4LjIyMSA4LjIyMSAwIDAxLTIuNjA2Ljk5NiA0LjEwMyA0LjEwMyAwIDAwLTYuOTkxIDMuNzQyIDExLjY0NyAxMS42NDcgMCAwMS04LjQ1Ny00LjI4NyA0LjA4NyA0LjA4NyAwIDAwLS41NTYgMi4wNjMgNC4xIDQuMSAwIDAwMS44MjUgMy40MTUgNC4wOSA0LjA5IDAgMDEtMS44NTktLjUxM3YuMDUyYTQuMTA0IDQuMTA0IDAgMDAzLjI5MiA0LjAyMyA0LjA5OSA0LjA5OSAwIDAxLTEuODUzLjA3IDQuMTEgNC4xMSAwIDAwMy44MzMgMi44NSA4LjIzNiA4LjIzNiAwIDAxLTUuMDk2IDEuNzU2IDguMzMgOC4zMyAwIDAxLS45NzktLjA1NyAxMS42MTcgMTEuNjE3IDAgMDA2LjI5IDEuODQzYzcuNTQ3IDAgMTEuNjc1LTYuMjUyIDExLjY3NS0xMS42NzUgMC0uMTc4LS4wMDQtLjM1NS0uMDEyLS41MzFhOC4yOTggOC4yOTggMCAwMDIuMDQ3LTIuMTIzelwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTggIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItd2hpdGUgcHgtNCBweS0yIG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6YmctemluYy05MDAgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICA8TGlua1RvQXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBSZWFkIEFydGljbGVcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGlua1RvQXJ0aWNsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktMSBteC0xMCByb3VuZGVkLTJ4bCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIG1sLWF1dG9cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcHZvdGV9XG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgIHVwdm90ZSA/ICdzdHJva2UtZ3JlZW4tNDAwJyA6ICdzdHJva2Utd2hpdGUnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICB3aWR0aD1cIjQ0XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDRcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCI2IDE1IDEyIDkgMTggMTVcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTEgdGV4dC1sZyBmb250LWJvbGQgJHtcbiAgICAgICAgICAgICAgdXB2b3RlXG4gICAgICAgICAgICAgICAgPyAndGV4dC1ncmVlbi00MDAnXG4gICAgICAgICAgICAgICAgOiBkb3dudm90ZVxuICAgICAgICAgICAgICAgID8gJ3RleHQtcmVkLTUwMCdcbiAgICAgICAgICAgICAgICA6ICd0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgfSBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb3VudCA+IDk5OSA/IGZvcm1hdHRlZE51bWJlciA6IGNvdW50fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dudm90ZX1cbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgZG93bnZvdGUgPyAnc3Ryb2tlLXJlZC01MDAnIDogJ3N0cm9rZS13aGl0ZSdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgd2lkdGg9XCI0NFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI0NFwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiNiA5IDEyIDE1IDE4IDlcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2xpbmtFcnJvciAmJiA8RXJyb3JQb3B1cCBlcnJvcj17bGlua0Vycm9yfSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBkYjogUHJpc21hQ2xpZW50O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gZGV2ZWxvcG1lbnQgd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0XG4vLyB0aGUgc2VydmVyIHdpdGggZXZlcnkgY2hhbmdlLCBidXQgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Rcbi8vIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uIHRvIHRoZSBEQiB3aXRoIGV2ZXJ5IGNoYW5nZSBlaXRoZXIuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLl9fZGIpIHtcbiAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBkYiA9IGdsb2JhbC5fX2RiO1xufVxuXG5leHBvcnQgeyBkYiB9O1xuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgcmVkaXJlY3QsIGpzb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcic7XG5pbXBvcnQgeyB1c2VBY3Rpb25EYXRhLCB1c2VQYXJhbXMgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJztcblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkcz86IHsgdXJsPzogc3RyaW5nOyB0aXRsZT86IHN0cmluZzsgYXV0aG9yT2ZQb3N0Pzogc3RyaW5nIH07XG4gIGZpZWxkRXJyb3JzPzogeyB1cmw/OiBzdHJpbmc7IHRpdGxlPzogc3RyaW5nOyBhdXRob3JPZlBvc3Q/OiBzdHJpbmcgfTtcbn07XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSkgPT4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVVybCh1cmw6IHN0cmluZykge1xuICBsZXQgcmVnRXggPVxuICAgIC9eaHR0cHM/OlxcL1xcLyg/Ond3d1xcLik/Wy1hLXpBLVowLTlAOiUuX1xcK34jPV17MSwyNTZ9XFwuW2EtekEtWjAtOSgpXXsxLDZ9XFxiKFstYS16QS1aMC05KClAOiVfXFwrLn4jPyYvLz1dKikkL2dtO1xuXG4gIGNvbnN0IGlzVmFsaWQgPSByZWdFeC50ZXN0KHVybCk7XG4gIGlmICghaXNWYWxpZCkge1xuICAgIHJldHVybiAnVXJsIG11c3QgYmUgdmFsaWQnO1xuICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgaWYgKHRpdGxlLmxlbmd0aCA8IDQpIHtcbiAgICByZXR1cm4gJ1RpdGxlIG11c3QgYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzJztcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUF1dGhvcihhdXRob3I6IHN0cmluZykge1xuICBpZiAoYXV0aG9yLmxlbmd0aCA8IDQpIHtcbiAgICByZXR1cm4gJ0F1dGhvciBtdXN0IGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycyc7XG4gIH1cbn1cblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG5cbiAgbGV0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnNvbGUubG9nKGZvcm0pO1xuICBsZXQgdG9waWMgPSBmb3JtLmdldCgndG9waWMnKTtcbiAgbGV0IHVybCA9IGZvcm0uZ2V0KCd1cmwnKTtcbiAgbGV0IHRpdGxlID0gZm9ybS5nZXQoJ3RpdGxlJyk7XG4gIGxldCBhdXRob3JPZlBvc3QgPSBmb3JtLmdldCgnYXV0aG9yJyk7XG5cbiAgLy8gVmFsaWRhdGlvbiBoZXJlIGZvciBmb3JtYXQgb2YgZmllbGRzOlxuICBpZiAoXG4gICAgdHlwZW9mIHRvcGljICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiBhdXRob3JPZlBvc3QgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIGZvcm1FcnJvcjogJ0Zvcm0gc3VibWl0dGVkIGluY29ycmVjdGx5JyxcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBmaWVsZEVycm9ycyA9IHtcbiAgICB1cmw6IHZhbGlkYXRlVXJsKHVybCksXG4gICAgdGl0bGU6IHZhbGlkYXRlVGl0bGUodGl0bGUpLFxuICAgIGF1dGhvck9mUG9zdDogdmFsaWRhdGVBdXRob3IoYXV0aG9yT2ZQb3N0KSxcbiAgfTtcbiAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzLCBmaWVsZHM6IHsgdXJsLCB0aXRsZSwgYXV0aG9yT2ZQb3N0IH0gfSk7XG4gIH1cblxuICAvLyBWYWxpZGF0aW9uIGZvciBleGlzdGluZyB1cmwgaW4gZGF0YWJhc2VcbiAgY29uc3QgZXhpc3RzID0gYXdhaXQgZGIucG9zdC5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7XG4gICAgICB0b3BpYzogdG9waWMsXG4gICAgICB1cmw6IHVybCxcbiAgICB9LFxuICB9KTtcblxuICAvLyBUaGUgdG9waWNzIGluIHRoZSBkYXRhYmFzZSBhcmUgbG93ZXJjYXNlXG4gIHRvcGljID0gdG9waWMudG9Mb3dlckNhc2UoKTtcblxuICBjb25zdCBmaWVsZHMgPSB7IHRvcGljLCB1cmwsIHRpdGxlLCBhdXRob3JPZlBvc3QgfTtcblxuICBpZiAoIWV4aXN0cykge1xuICAgIGF3YWl0IGRiLnBvc3QuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHsgLi4uZmllbGRzLCBwb3N0ZXJJZDogdXNlcklkIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVkaXJlY3QoYC9sZWFybi8ke3RvcGljfWApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQXJ0aWNsZSBhbHJlYWR5IGV4aXN0cycpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXcoKSB7XG4gIGxldCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuICBjb25zb2xlLmxvZyhhY3Rpb25EYXRhKTtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGxldCB0b3BpYyA9IHBhcmFtcy50b3BpY0lkO1xuICB0b3BpYyA9IHRvcGljICYmIHRvcGljWzBdLnRvVXBwZXJDYXNlKCkgKyB0b3BpYy5zdWJzdHJpbmcoMSk7XG5cbiAgaW50ZXJmYWNlIElGb3JtSW5wdXQge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICAvLyB2YWx1ZTogc3RyaW5nO1xuICAgIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIEZvcm1JbnB1dCh7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICB0eXBlLFxuICAgIGRlZmF1bHRWYWx1ZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgfTogSUZvcm1JbnB1dCkge1xuICAgIGNvbnN0IGVycm9yID0gISFkZWZhdWx0VmFsdWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9e2BiZy10cmFuc3BhcmVudCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTYwMCAgcm91bmRlZCB3LWZ1bGwgcHktNCBweC0zIHRleHQtZ3JheS0yMDAgbGVhZGluZy10aWdodCBcbiAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIFxuICAgICAgICAgIGZvY3VzOmJvcmRlci13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcbiAgICAgICAgXG4gICAgICAgICR7ZXJyb3IgJiYgJ2JvcmRlci1yZWQtNjAwJ31gfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFdlIG5lZWQgdG8gc2hvdyB0aGUgd29yZCBhcyBjYXBpdGFsaXplZFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhzXCI+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJzaGFkb3ctbWQgcm91bmRlZCBwdC00IHBiLTggbWItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggcG9pbnRlci1ldmVudHMtbm9uZSAgdGV4dC1sZyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJ0b3BpY1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRvcGljXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNoYWRvdyBib3JkZXItMiBiZy10cmFuc3BhcmVudCBib3JkZXItZ3JheS02MDAgdGV4dC1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgIHJvdW5kZWQgdy1mdWxsIHB5LTQgcHgtMyAgbGVhZGluZy10aWdodFxuICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgZm9jdXM6Ym9yZGVyLXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZVxuICAgICAgICAgICAgICAgICR7dG9waWMgJiYgJyBjdXJzb3Itbm90LWFsbG93ZWQnfSBgfVxuICAgICAgICAgICAgICBpZD1cInRvcGljXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dG9waWN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ISF0b3BpY31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICBodG1sRm9yPVwidXJsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVVJMXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udXJsfVxuICAgICAgICAgICAgICBpZD1cInVybFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL292ZXJyZWFjdGVkLmlvL1wiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnVybCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCAgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgICAgXHUyNzU3XHVGRTBGIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXJsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHBvaW50ZXItZXZlbnRzLW5vbmUgIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICBodG1sRm9yPVwidGl0bGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBcnRpY2xlIFRpdGxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy50aXRsZX1cbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaHkgUmVhY3QgaG9va3MgYXJlIGF3ZXNvbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udGl0bGUgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgICAgXHUyNzU3XHVGRTBGIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICBodG1sRm9yPVwiYXV0aG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQXV0aG9yXG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5hdXRob3JPZlBvc3R9XG4gICAgICAgICAgICAgIGlkPVwiYXV0aG9yXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYXV0aG9yXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYW4gQWJyYW1vdlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5hdXRob3JPZlBvc3QgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgICAgXHUyNzU3XHVGRTBGIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uYXV0aG9yT2ZQb3N0fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWFjY2VudC1waW5rIHctZnVsbCBob3ZlcjpicmlnaHRuZXNzLTExMCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFjY2VudC1waW5rIGhvdmVyOmJvcmRlci13aGl0ZSBhY3RpdmU6Ym9yZGVyLXdoaXRlIHRleHQtd2hpdGUgZm9udC1ib2xkIG10LTggcHktNCBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXQgQXJ0aWNsZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IGRiIH0gZnJvbSAnLi9kYi5zZXJ2ZXInO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuXG50eXBlIExvZ2luRm9ybSA9IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgdXNlcm5hbWUgfSxcbiAgfSk7XG4gIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4geyBpZDogdXNlci5pZCwgdXNlcm5hbWUgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICByZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoJ3VzZXJJZCcpO1xuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSAnc3RyaW5nJykgcmV0dXJuIG51bGw7XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoJ3VzZXJJZCcpO1xuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1sncmVkaXJlY3RUbycsIHJlZGlyZWN0VG9dXSk7XG4gICAgdGhyb3cgcmVkaXJlY3QoYC9sb2dpbj8ke3NlYXJjaFBhcmFtc31gKTtcbiAgfVxuICByZXR1cm4gdXNlcklkO1xufVxuXG5jb25zdCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQ7XG5pZiAoIXNlc3Npb25TZWNyZXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldCcpO1xufVxuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogJ19fc2Vzc2lvbicsXG4gICAgLy8gbm9ybWFsbHkgeW91IHdhbnQgdGhpcyB0byBiZSBgc2VjdXJlOiB0cnVlYFxuICAgIC8vIGJ1dCB0aGF0IGRvZXNuJ3Qgd29yayBvbiBsb2NhbGhvc3QgZm9yIFNhZmFyaVxuICAgIC8vIGh0dHBzOi8vd2ViLmRldi93aGVuLXRvLXVzZS1sb2NhbC1odHRwcy9cbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgc2VjcmV0czogW3Nlc3Npb25TZWNyZXRdLFxuICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICBwYXRoOiAnLycsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJJZDogc3RyaW5nLCByb3V0ZTogc3RyaW5nKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgc2Vzc2lvbi5zZXQoJ3VzZXJJZCcsIHVzZXJJZCk7XG4gIHJldHVybiByZWRpcmVjdChyb3V0ZSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldygpIHtcbiAgcmV0dXJuIDxzcGFuPnNhZGJhaW91bmFvc2lkbmFvc2RuYXNvbiBORVc8L3NwYW4+O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3Bhbj5DaG9vc2UgYSB0b3BpYyBcdTJCMDVcdUZFMEY8L3NwYW4+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybWF0dGVkSW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2Zvcm1hdHRlZC1pbnB1dCc7XG5pbXBvcnQgSGlnaGxpZ2h0YWJsZVRleHRJbnB1dCBmcm9tICd+L2NvbXBvbmVudHMvaGlnaGxpZ2h0YWJsZS10ZXh0LWlucHV0JztcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uLCBsb2dpbiB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmssIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZTogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHVzZXJuYW1lICE9PSAnc3RyaW5nJyB8fCB1c2VybmFtZS5sZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuIGBVc2VybmFtZXMgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZDogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHBhc3N3b3JkICE9PSAnc3RyaW5nJyB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGBQYXNzd29yZHMgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBhbnkpID0+IHtcbiAganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc29sZS5sb2coZm9ybSk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoJ3Bhc3N3b3JkJyk7XG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoJ3VzZXJuYW1lJyk7XG5cbiAgY29uc3QgZmllbGRzID0geyB1c2VybmFtZSwgcGFzc3dvcmQgfTtcblxuICBjb25zb2xlLmxvZyh1c2VybmFtZSwgcGFzc3dvcmQpO1xuXG4gIGlmICh0eXBlb2YgdXNlcm5hbWUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwYXNzd29yZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG5cbiAgY29uc29sZS5sb2codXNlcik7XG5cbiAgLy8gVGhhdCBpc24ndCBhIHZhbGlkIGFjY291bnQgd2l0aCBjcmVkZW50aWFscyBzdXBwbGllZFxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkcywgZm9ybUVycm9yOiAnVXNlcm5hbWUvIHBhc3N3b3JkIGlzIGluY29ycmVjdCcgfSk7XG4gIH1cblxuICAvLyBpdCBpcyBhIHZhbGlkIHVzZXJcbiAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsICcvJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgLy8gY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTEyIFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMTBcIj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICBuYW1lPVwicmVkaXJlY3RUb1wiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3RUbycpID8/IHVuZGVmaW5lZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXJ0aCBTaWRpdXNcIlxuICAgICAgICAgICAgaGFzRXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiaW52YWxpZCB1c2VybmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFuU2hvdEZpcnN0XCJcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlPXt0cnVlfVxuICAgICAgICAgICAgaGFzRXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiaW52YWxpZCBwYXNzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBtci1hdXRvIHRleHQtbmV1dHJhbC0zMDAgdGV4dC1tZCBob3Zlcjp0ZXh0LWFjY2VudC1waW5rIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0RXJyb3IodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS03IGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciAgcHktNCBweC04IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgYmctYWNjZW50LXBpbmsgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItd2hpdGUgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTQgZmxleCB3LWZ1bGwganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1hY2NlbnQtcGluayBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic5MGYyYWNkYycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtM1hDUFBNNVguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNSQk1TRDJTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkJPNzRGV08uanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVVHVUczSVlJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VMzdJUlNWWi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtTVc0MlhKNEkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRDRzJRQjZNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWUdPQlBVQ0YuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuJzp7J2lkJzoncm91dGVzL2xlYXJuJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xlYXJuJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLTdJVFNBTDJVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UQ0cyUUI2TS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlHT0JQVUNGLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi8kdG9waWNJZCc6eydpZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuJywncGF0aCc6Jzp0b3BpY0lkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLyR0b3BpY0lkLUdRUlRCS0tLLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleCc6eydpZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLyR0b3BpY0lkL2luZGV4LVkyVUlONlZULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zNkpOMjQ0WS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVUzN0lSU1ZaLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldyc6eydpZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZCcsJ3BhdGgnOiduZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3LTVWNVhINEFXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HSzU2Q1pKRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTM2Sk4yNDRZLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleCc6eydpZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4LVZaTEpSWkNXLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvbGVhcm4vaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybicsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi9pbmRleC1FQUNWUVNEVy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLVFZS1RRRE5PLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HSzU2Q1pKRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVhXNFNLQ1FWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWUdPQlBVQ0YuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF0aHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcGF0aHMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncGF0aHMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BhdGhzL2luZGV4LTU2SUI1M1dRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZR09CUFVDRi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2lnbnVwJzp7J2lkJzoncm91dGVzL3NpZ251cCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaWdudXAnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2lnbnVwLUlIRUhQTTVVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YVzRTS0NRVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlHT0JQVUNGLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtOTBGMkFDREMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFlBQXVCOzs7QUNEdkIscUJBQW9CO0FBQ3BCLHlCQUF3QjtBQUN4QixvQkFBbUI7QUFDbkIsc0JBQXFDOzs7QUNIckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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
