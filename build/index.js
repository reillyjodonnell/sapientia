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
var tailwind_default = "/build/_assets/tailwind-2T6EPFDB.css";

// app/contexts/sound-context.tsx
var import_react2 = require("react");
var SoundContext = (0, import_react2.createContext)(null);
function useSound() {
  return (0, import_react2.useContext)(SoundContext);
}
function SoundProvider({ children }) {
  const [mute, setMute] = (0, import_react2.useState)(false);
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
  }, /* @__PURE__ */ React.createElement("span", {
    onClick: toggleMute,
    className: "text-2xl cursor-pointer"
  }, mute ? "\u{1F507}" : "\u{1F508}")), /* @__PURE__ */ React.createElement(NavigationLoginElement, null));
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
    className: "flex flex-col justify-center items-center"
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
var import_react13 = require("@remix-run/react");

// app/components/topic-card.tsx
var import_react12 = require("react");
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
  const [upvote, setUpvote] = (0, import_react12.useState)(false);
  const [downvote, setDownvote] = (0, import_react12.useState)(false);
  const [count, setCount] = (0, import_react12.useState)(upvotes ?? 0);
  const [validLink, setValidLink] = (0, import_react12.useState)(false);
  const [linkError, setLinkError] = (0, import_react12.useState)(false);
  const volume = mute ? 0 : 0.2;
  const [upvoteSound] = (0, import_use_sound.default)(plop_trimmed_default, { soundEnabled: !mute, volume });
  const [downvoteSound] = (0, import_use_sound.default)(plop_trimmed_default, {
    soundEnabled: !mute,
    playbackRate: 0.65,
    volume,
    interrupt: true
  });
  (0, import_react12.useEffect)(() => {
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
    (0, import_react12.useEffect)(() => {
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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId.tsx
var import_react14 = require("@remix-run/react");
var links7 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var loader = async ({ params }) => {
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
function Learn2() {
  const { data: data2, name } = (0, import_react13.useLoaderData)();
  const { mute } = useSound();
  const { articlePosts } = data2;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-6xl mb-3 capitalize",
    style: {
      textShadow: "rgba(192, 219, 255, 0.3) 0px 0px 80px, rgba(65, 120, 255, 0.15) 0px 0px 32px"
    }
  }, name)), /* @__PURE__ */ React.createElement(import_react14.Link, {
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
var import_node3 = require("@remix-run/node");
var import_react15 = require("@remix-run/react");
var badRequest2 = (data2) => (0, import_node3.json)(data2, { status: 400 });
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
    return (0, import_node3.redirect)(`/learn/${topic}`);
  } else {
    throw new Error("Article already exists");
  }
};
function New() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  let actionData = (0, import_react15.useActionData)();
  console.log(actionData);
  const params = (0, import_react15.useParams)();
  let topic = params.topicId;
  topic = topic && topic[0].toUpperCase() + topic.substring(1);
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
  }, "URL"), /* @__PURE__ */ React.createElement("input", {
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.url,
    className: `shadow appearance-none border-2 border-white  rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.url) && "border-red-600"}`,
    id: "url",
    name: "url",
    type: "url",
    placeholder: "https://overreacted.io/"
  }), ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.url) ? /* @__PURE__ */ React.createElement("div", {
    className: "flex "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-red-600  text-md"
  }, (_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.url)) : null), /* @__PURE__ */ React.createElement("div", {
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block  text-lg font-bold mb-2",
    htmlFor: "title"
  }, "Article Title"), /* @__PURE__ */ React.createElement("input", {
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.title,
    className: `shadow appearance-none border-2 border-white  rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.title) && "border-red-600 "}`,
    id: "title",
    type: "text",
    name: "title",
    placeholder: "Why React hooks are awesome"
  }), ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.title) ? /* @__PURE__ */ React.createElement("div", {
    className: "flex "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-red-600 text-md"
  }, (_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.title)) : null), /* @__PURE__ */ React.createElement("div", {
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block  text-lg font-bold mb-2",
    htmlFor: "author"
  }, "Author"), /* @__PURE__ */ React.createElement("input", {
    defaultValue: (_i = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _i.authorOfPost,
    className: `shadow appearance-none border-2 border-white  rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${((_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.authorOfPost) && "border-red-600 "}`,
    id: "author",
    type: "text",
    name: "author",
    placeholder: "Dan"
  }), ((_k = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _k.authorOfPost) ? /* @__PURE__ */ React.createElement("div", {
    className: "flex "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-red-600 text-md"
  }, (_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.authorOfPost)) : null), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between mt-2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: " bg-accent-pink w-full hover:brightness-110 border-2 border-solid border-accent-pink hover:border-white active:border-white text-white font-bold mt-8 py-4 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "submit"
  }, "Submit Article")))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/index.tsx
var learn_exports2 = {};
__export(learn_exports2, {
  default: () => Index2,
  links: () => links8
});
var links8 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Index2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "Go learn something"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "cd9390d7", "entry": { "module": "/build/entry.client-MVQQ4ASA.js", "imports": ["/build/_shared/chunk-D2HNVIAT.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4TTWTZKS.js", "imports": ["/build/_shared/chunk-77HCBW7X.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-FQMX2JJI.js", "imports": ["/build/_shared/chunk-KILINTNI.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn": { "id": "routes/learn", "parentId": "root", "path": "learn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn-3DNMAQ7D.js", "imports": ["/build/_shared/chunk-KILINTNI.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId": { "id": "routes/learn/$topicId", "parentId": "routes/learn", "path": ":topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId-US5Y3YTS.js", "imports": ["/build/_shared/chunk-36JN244Y.js", "/build/_shared/chunk-77HCBW7X.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new": { "id": "routes/learn/$topicId/new", "parentId": "routes/learn/$topicId", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new-BZIUPZ3P.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/index": { "id": "routes/learn/index", "parentId": "routes/learn", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/index-O5UIAOXY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-WNZDK54Z.js", "imports": ["/build/_shared/chunk-DX6OIDIL.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths/index": { "id": "routes/paths/index", "parentId": "root", "path": "paths", "index": true, "caseSensitive": void 0, "module": "/build/routes/paths/index-7DJVQLVS.js", "imports": ["/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup/index": { "id": "routes/signup/index", "parentId": "root", "path": "signup", "index": true, "caseSensitive": void 0, "module": "/build/routes/signup/index-S4OHE2F3.js", "imports": ["/build/_shared/chunk-DX6OIDIL.js", "/build/_shared/chunk-5AYWNGIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-CD9390D7.js" };

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
  "routes/learn/$topicId/new": {
    id: "routes/learn/$topicId/new",
    parentId: "routes/learn/$topicId",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29udGV4dHMvc291bmQtY29udGV4dC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbW90ZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvc2lnbnVwL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3JtYXR0ZWQtaW5wdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sb2dpbi9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3BhdGhzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21haW4tY29udGVudC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2VhcmNoLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3BvcHVsYXItdG9waWNzLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3RvcGljLWNhcmQudHN4IiwgIi4uL2FwcC91dGlscy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9leHByZXNzJztcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICAnL2J1aWxkJyxcbiAgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYy9idWlsZCcsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6ICcxeScgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycsIHsgbWF4QWdlOiAnMWgnIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oJ3RpbnknKSk7XG5cbmFwcC5hbGwoXG4gICcqJyxcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmFwcC5nZXQoJy9zZXJ2ZXJjb2RlJywgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdTRVJWRVIgQ09ERSBFWEVDVVRFRCEnKTtcbiAgcmVzLnNlbmQoJ0JPT00nKTtcbn0pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFx1RDgzRFx1REU4MCBsaXZlIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvc2lnbnVwL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbG9naW4vaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9wYXRocy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2lnbnVwL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaWdudXAvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2lnbnVwXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGF0aHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BhdGhzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBhdGhzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxlYXJuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFyblwiLFxuICAgICAgcGF0aDogXCI6dG9waWNJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiLFxuICAgICAgcGF0aDogXCJuZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfVxuICB9OyIsICJpbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGFpbHdpbmQuY3NzJztcbmltcG9ydCBTb3VuZFByb3ZpZGVyIGZyb20gJy4vY29udGV4dHMvc291bmQtY29udGV4dCc7XG5pbXBvcnQgTW90ZCBmcm9tICcuL2NvbXBvbmVudHMvbW90ZCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiAndXRmLTgnLFxuICB0aXRsZTogJ1NhcGllbnRpYScsXG4gIHZpZXdwb3J0OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS40JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNvdW5kUHJvdmlkZXI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TW90ZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgICAgIDwvU291bmRQcm92aWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBTb3VuZENvbnRleHRTdGF0ZSA9IHtcbiAgbXV0ZTogYm9vbGVhbjtcbiAgdG9nZ2xlTXV0ZTogRnVuY3Rpb247XG59O1xuXG5jb25zdCBTb3VuZENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFNvdW5kQ29udGV4dFN0YXRlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTb3VuZCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU291bmRDb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU291bmRQcm92aWRlcih7IGNoaWxkcmVuIH06IGFueSkge1xuICBjb25zdCBbbXV0ZSwgc2V0TXV0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTXV0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhgdG9nZ2xpbmcgZnJvbSBtdXRlID0gJHttdXRlfWApO1xuICAgIHNldE11dGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IHsgbXV0ZSwgdG9nZ2xlTXV0ZSB9O1xuICByZXR1cm4gKFxuICAgIDxTb3VuZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlc30+e2NoaWxkcmVufTwvU291bmRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIiwgImV4cG9ydCBjb25zdCBNb3RkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWRhcmstbW9kZS1iZyByb3VuZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHB4LTIwICBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFjY2VudC1waW5rIHctZnVsbCB0ZXh0LWNlbnRlciByb3VuZGVkXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgV2Ugc3RhbmQgd2l0aCBVa3JhaW5lIFx1RDgzQ1x1RERGQVx1RDgzQ1x1RERFNlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3Jhem9tZm9ydWtyYWluZS5vcmcvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtMiBjdXJzb3ItcG9pbnRlciBmb250LWJvbGQgdGV4dC1wcmltYXJ5LXRleHQgZm9jdXMtd2l0aGluOnRleHQtYWNjZW50LXBpbmsgaG92ZXI6dGV4dC1hY2NlbnQtcGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERvbmF0ZSBoZXJlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vdGQ7XG4iLCAiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyBTb3VuZENvbnRleHRTdGF0ZSwgdXNlU291bmQgfSBmcm9tICd+L2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5cbmNvbnN0IExvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgc3BhY2UteC0xIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICA8TGluayB0bz17Jy8nfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkICBcIj5TYXBpZW50aWE8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMYW5ndWFnZVNlbGVjdG9yID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIG1sLTIgc206bWwtNCBcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0xLjUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlLzYwICByb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kICBmb2N1cy13aXRoaW46OmJnLXNsYXRlLTUwLzUgZm9jdXMtd2l0aGluOjpib3JkZXItd2hpdGUgaG92ZXI6Ymctc2xhdGUtNTAvNSBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWxhbmd1YWdlIGgtNiB3LTYgc3Ryb2tlLXdoaXRlXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk00IDVoN1wiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk05IDN2MmMwIDQuNDE4IC0yLjIzOSA4IC01IDhcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNSA5Yy0uMDAzIDIuMTQ0IDIuOTUyIDMuOTA4IDYuNyA0XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEyIDIwbDQgLTlsNCA5XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE5LjEgMThoLTYuMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3Bhbj5FbmdsaXNoPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uTG9naW5FbGVtZW50ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIG1sLTIgc206bWwtNCBcIj5cbiAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNiBweS0yICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwbGFjZS1pdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUvNjAgIHJvdW5kZWQtbWQgZHJvcC1zaGFkb3ctbWQgIGZvY3VzLXdpdGhpbjo6Ymctc2xhdGUtNTAvNSBmb2N1cy13aXRoaW46OmJvcmRlci13aGl0ZSBob3ZlcjpiZy1zbGF0ZS01MC81IGhvdmVyOmJvcmRlci13aGl0ZSBcIj5cbiAgICAgICAgICB7LyogPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItbGFuZ3VhZ2UgaC02IHctNiBzdHJva2Utd2hpdGVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXG4gICAgICAgICAgc3Ryb2tlPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE0IDh2LTJhMiAyIDAgMCAwIC0yIC0yaC03YTIgMiAwIDAgMCAtMiAydjEyYTIgMiAwIDAgMCAyIDJoN2EyIDIgMCAwIDAgMiAtMnYtMlwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0yMCAxMmgtMTNsMyAtM20wIDZsLTMgLTNcIiAvPlxuICAgICAgICA8L3N2Zz4gKi99XG4gICAgICAgICAgPHNwYW4+TG9naW48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHlwZSBOYXZFbGVtZW50UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IEdpdGh1YiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBteC0yIHNtOm14LTQgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JlaWxseWpvZG9ubmVsbC9zYXBpZW50aWFcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwIG9wYWNpdHktODBcIlxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9eyczMHB4J31cbiAgICAgICAgICBoZWlnaHQ9eyczMHB4J31cbiAgICAgICAgICBjbGFzc05hbWU9XCIgZmlsbC1wcmltYXJ5LXRleHQgXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTY0IDUuMTAzYy0zMy4zNDcgMC02MC4zODggMjcuMDM1LTYwLjM4OCA2MC4zODggMCAyNi42ODIgMTcuMzAzIDQ5LjMxNyA0MS4yOTcgNTcuMzAzIDMuMDE3LjU2IDQuMTI1LTEuMzEgNC4xMjUtMi45MDUgMC0xLjQ0LS4wNTYtNi4xOTctLjA4Mi0xMS4yNDMtMTYuOCAzLjY1My0yMC4zNDUtNy4xMjUtMjAuMzQ1LTcuMTI1LTIuNzQ3LTYuOTgtNi43MDUtOC44MzYtNi43MDUtOC44MzYtNS40OC0zLjc0OC40MTMtMy42Ny40MTMtMy42NyA2LjA2My40MjUgOS4yNTcgNi4yMjMgOS4yNTcgNi4yMjMgNS4zODYgOS4yMyAxNC4xMjcgNi41NjIgMTcuNTczIDUuMDIuNTQyLTMuOTAzIDIuMTA3LTYuNTY4IDMuODM0LTguMDc2LTEzLjQxMy0xLjUyNS0yNy41MTQtNi43MDQtMjcuNTE0LTI5Ljg0MyAwLTYuNTkzIDIuMzYtMTEuOTggNi4yMjMtMTYuMjEtLjYyOC0xLjUyLTIuNjk1LTcuNjYyLjU4NC0xNS45OCAwIDAgNS4wNy0xLjYyMyAxNi42MSA2LjE5QzUzLjcgMzUgNTguODY3IDM0LjMyNyA2NCAzNC4zMDRjNS4xMy4wMjMgMTAuMy42OTQgMTUuMTI3IDIuMDMzIDExLjUyNi03LjgxMyAxNi41OS02LjE5IDE2LjU5LTYuMTkgMy4yODcgOC4zMTcgMS4yMiAxNC40Ni41OTMgMTUuOTggMy44NzIgNC4yMyA2LjIxNSA5LjYxNyA2LjIxNSAxNi4yMSAwIDIzLjE5NC0xNC4xMjcgMjguMy0yNy41NzQgMjkuNzk2IDIuMTY3IDEuODc0IDQuMDk3IDUuNTUgNC4wOTcgMTEuMTgzIDAgOC4wOC0uMDcgMTQuNTgzLS4wNyAxNi41NzIgMCAxLjYwNyAxLjA4OCAzLjQ5IDQuMTQ4IDIuODk3IDIzLjk4LTcuOTk0IDQxLjI2My0zMC42MjIgNDEuMjYzLTU3LjI5NEMxMjQuMzg4IDMyLjE0IDk3LjM1IDUuMTA0IDY0IDUuMTA0elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yNi40ODQgOTEuODA2Yy0uMTMzLjMtLjYwNS4zOS0xLjAzNS4xODUtLjQ0LS4xOTYtLjY4NS0uNjA1LS41NDMtLjkwNi4xMy0uMzEuNjAzLS4zOTUgMS4wNC0uMTg4LjQ0LjE5Ny42OS42MS41MzcuOTF6bTIuNDQ2IDIuNzI5Yy0uMjg3LjI2Ny0uODUuMTQzLTEuMjMyLS4yOC0uMzk2LS40Mi0uNDctLjk4My0uMTc3LTEuMjU0LjI5OC0uMjY2Ljg0NC0uMTQgMS4yNC4yOC4zOTQuNDI2LjQ3Mi45ODQuMTcgMS4yNTV6TTMxLjMxMiA5OC4wMTJjLS4zNy4yNTgtLjk3Ni4wMTctMS4zNS0uNTItLjM3LS41MzgtLjM3LTEuMTgzLjAxLTEuNDQuMzczLS4yNTguOTctLjAyNSAxLjM1LjUwNy4zNjguNTQ1LjM2OCAxLjE5LS4wMSAxLjQ1MnptMy4yNjEgMy4zNjFjLS4zMy4zNjUtMS4wMzYuMjY3LTEuNTUyLS4yMy0uNTI3LS40ODctLjY3NC0xLjE4LS4zNDMtMS41NDQuMzM2LS4zNjYgMS4wNDUtLjI2NCAxLjU2NC4yMy41MjcuNDg2LjY4NiAxLjE4LjMzMyAxLjU0M3ptNC41IDEuOTUxYy0uMTQ3LjQ3My0uODI1LjY4OC0xLjUxLjQ4Ni0uNjgzLS4yMDctMS4xMy0uNzYtLjk5LTEuMjM4LjE0LS40NzcuODIzLS43IDEuNTEyLS40ODUuNjgzLjIwNiAxLjEzLjc1Ni45ODggMS4yMzd6bTQuOTQzLjM2MWMuMDE3LjQ5OC0uNTYzLjkxLTEuMjguOTItLjcyMy4wMTctMS4zMDgtLjM4Ny0xLjMxNS0uODc3IDAtLjUwMy41NjgtLjkxIDEuMjktLjkyNC43MTctLjAxMyAxLjMwNi4zODcgMS4zMDYuODh6bTQuNTk4LS43ODJjLjA4Ni40ODUtLjQxMy45ODQtMS4xMjYgMS4xMTctLjcuMTMtMS4zNS0uMTcyLTEuNDQtLjY1My0uMDg2LS40OTguNDIyLS45OTcgMS4xMjItMS4xMjYuNzE0LS4xMjMgMS4zNTQuMTcgMS40NDQuNjYzem0wIDBcIj48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4vLyBpbnRlcmZhY2UgSU5hdmlnYXRpb24ge1xuLy8gICBtdXRlOiBib29sZWFuO1xuLy8gICB0b2dnbGVNdXRlOiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MU3BhbkVsZW1lbnQ+O1xuLy8gfVxuXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgbXV0ZSwgdG9nZ2xlTXV0ZSB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIlRvcGljc1wiIGxvY2F0aW9uPVwiL2xlYXJuXCIgLz5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiUGF0aHNcIiBsb2NhdGlvbj1cIi9wYXRoc1wiIC8+XG4gICAgICB7LyogPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJMb2dpblwiIGxvY2F0aW9uPVwiL2xvZ2luXCIgLz4gKi99XG4gICAgICA8R2l0aHViIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RvZ2dsZU11dGV9IGNsYXNzTmFtZT1cInRleHQtMnhsIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAge211dGUgPyAnXHVEODNEXHVERDA3JyA6ICdcdUQ4M0RcdUREMDgnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxMYW5ndWFnZVNlbGVjdG9yIC8+ICovfVxuICAgICAgPE5hdmlnYXRpb25Mb2dpbkVsZW1lbnQgLz5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdmlnYXRpb25FbGVtZW50ID0gKHsgbmFtZSwgbG9jYXRpb24gfTogTmF2RWxlbWVudFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGNsYXNzTmFtZT1cIiBteC0yIHNtOm14LTQgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkIGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgdG89e2xvY2F0aW9ufVxuICAgID5cbiAgICAgIHtuYW1lfVxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IHVzZVNvdW5kKCk7XG4gIGNvbnN0IHsgbXV0ZSwgdG9nZ2xlTXV0ZSB9OiBhbnkgPSB2YWx1ZXM7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJweC02IGxnOnB4LTEyIHB5LTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgaGVhZGVyICBiZy1ibGFja1wiPlxuICAgICAgPExvZ28gLz5cblxuICAgICAgPE5hdmlnYXRpb24gbXV0ZT17bXV0ZX0gdG9nZ2xlTXV0ZT17dG9nZ2xlTXV0ZX0gLz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgRm9ybWF0dGVkSW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2Zvcm1hdHRlZC1pbnB1dCc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgbS0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC0xMiBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTZcIj5TaWduIFVwPC9zcGFuPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFuYSAuLi4gRGFydGggVmFkZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWRlckBkZWF0aHN0YXIuc2l0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIYW5TaG90Rmlyc3RcIlxuICAgICAgICAgICAgdG9nZ2xlU2hvd0hpZGU9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGFjY2VudC1hY2NlbnQtcGlua1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJhZ3JlZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtbC00IHRleHQtbGdcIiBodG1sRm9yPVwiYWdyZWVcIj5cbiAgICAgICAgICAgICAgSSBhZ3JlZSB0byB0aGV7JyAnfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWFjY2VudC1waW5rXCI+VGVybXM8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC03IGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciAgcHktNCBweC04IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgYmctYWNjZW50LXBpbmsgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgXCI+Q3JlYXRlIEFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBmbGV4IGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSB0ZXh0LWFjY2VudC1waW5rIGN1cnNvci1wb2ludGVyXCI+TG9naW48L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBGb3JtRXZlbnRIYW5kbGVyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGh0bWxGb3I6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgYXV0b0NvbXBsZXRlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICB0b2dnbGVTaG93SGlkZT86IGJvb2xlYW47XG4gIGhhc0Vycm9yPzogYm9vbGVhbjtcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xuICBvbkNoYW5nZT86IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybWF0dGVkSW5wdXQoe1xuICBodG1sRm9yLFxuICBsYWJlbCxcbiAgaWQsXG4gIGF1dG9Db21wbGV0ZSxcbiAgbmFtZSxcbiAgdHlwZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHRvZ2dsZVNob3dIaWRlID0gZmFsc2UsXG4gIGhhc0Vycm9yID0gZmFsc2UsXG4gIGVycm9yTWVzc2FnZSA9ICdJbnZhbGlkIEVtYWlsJyxcbiAgb25DaGFuZ2UsXG59OiBJUHJvcHMpIHtcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShoYXNFcnJvcik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy04MCBtYi02ICBmbGV4LWNvbFwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e2h0bWxGb3J9XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQteGwgbWItMVwiXG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggdy1mdWxsIGJvcmRlci0yIGJvcmRlci1zb2xpZCAgJHtcbiAgICAgICAgICBlcnJvciA/ICdib3JkZXItcmVkLTQwMCcgOiAnYm9yZGVyLWdyYXktNjAwJ1xuICAgICAgICB9IGZvY3VzLXdpdGhpbjpib3JkZXItd2hpdGUgIGJnLWJsYWNrIHJvdW5kZWQtbGcgaG92ZXI6c2hhZG93LTJ4bCByZWxhdGl2ZWB9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICB0eXBlPXtcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlICYmIHNob3dQYXNzd29yZFxuICAgICAgICAgICAgICA/ICd0ZXh0J1xuICAgICAgICAgICAgICA6IHRvZ2dsZVNob3dIaWRlICYmICFzaG93UGFzc3dvcmRcbiAgICAgICAgICAgICAgPyAncGFzc3dvcmQnXG4gICAgICAgICAgICAgIDogdHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgcHgtMiBweS00IHRleHQteGwgIGJnLWJsYWNrIHJvdW5kZWQtbGcgaG92ZXI6c2hhZG93LTJ4bCByZWxhdGl2ZSAgXCJcbiAgICAgICAgLz5cbiAgICAgICAge3RvZ2dsZVNob3dIaWRlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlICBpbnNldC15LTAgcmlnaHQtMCBwci0zIGZsZXggaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgcC0wLjUgdy04IGgtOCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgJHtcbiAgICAgICAgICAgICAgICBzaG93UGFzc3dvcmQgPyAnYmctd2hpdGUnIDogJ2JnLXRyYW5zcGFyZW50J1xuICAgICAgICAgICAgICB9IHJvdW5kZWQtZnVsbCBgfVxuICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9e3Nob3dQYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Bhc3N3b3JkKChwcmV2KSA9PiAhcHJldil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyAnXHVEODNEXHVERTQ5JyA6ICdcdUQ4M0RcdURFNDgnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggbXktMiB0ZXh0LW1kIHRleHQtcmVkLTQwMFwiPntlcnJvck1lc3NhZ2V9PC9zcGFuPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICd+L2NvbXBvbmVudHMvZm9ybWF0dGVkLWlucHV0JztcbmltcG9ydCBIaWdobGlnaHRhYmxlVGV4dElucHV0IGZyb20gJ34vY29tcG9uZW50cy9oaWdobGlnaHRhYmxlLXRleHQtaW5wdXQnO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJztcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWU6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gJ3N0cmluZycgfHwgdXNlcm5hbWUubGVuZ3RoIDwgMykge1xuICAgIHJldHVybiBgVXNlcm5hbWVzIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gJ3N0cmluZycgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgIHJldHVybiBgUGFzc3dvcmRzIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogYW55KSA9PiB7XG4gIGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoJ3Bhc3N3b3JkJyk7XG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoJ3VzZXJuYW1lJyk7XG5cbiAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhc3N3b3JkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIC8vIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC0xMiBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTEwXCI+TG9naW48L3NwYW4+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VG8nKSA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZhZGVyQGRlYXRoc3Rhci5zaXRcIlxuICAgICAgICAgICAgaGFzRXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiaW52YWxpZCBlbWFpbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFuU2hvdEZpcnN0XCJcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlPXt0cnVlfVxuICAgICAgICAgICAgaGFzRXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiaW52YWxpZCBwYXNzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBtci1hdXRvIHRleHQtbmV1dHJhbC0zMDAgdGV4dC1tZCBob3Zlcjp0ZXh0LWFjY2VudC1waW5rIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldEVycm9yKHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNyBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHB5LTQgcHgtOCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IGJnLWFjY2VudC1waW5rIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TG9naW48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC00IGZsZXggdy1mdWxsIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/XG4gICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQtYWNjZW50LXBpbmsgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VzKCkge1xuICByZXR1cm4gPHNwYW4+VGhpcyBpcyB0aGUgUGF0aHMgc2VjdGlvbjwvc3Bhbj47XG59XG4iLCAiaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICd+L2NvbXBvbmVudHMvbWFpbi1jb250ZW50JztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxNYWluQ29udGVudCAvPlxuICAgICAgey8qIDxTb3VuZFByb3ZpZGVyPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1vdGQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAvLyBcbiAgICAgIDwvU291bmRQcm92aWRlcj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9tYWluLWNvbnRlbnQuY3NzJztcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICd+L2NvbXBvbmVudHMvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHRhbGtUb1RoZVNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NlcnZlcmNvZGUnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgLy8gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zZXJ2ZXItY29kZScpLnRoZW4oKHJlcykgPT4ge1xuICAgIC8vIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvcm0gPSAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldFswXS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgfTtcblxuICBjb25zdCBMZWZ0Q29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNSBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1mdWxsIHB0LXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctZnVsbCBteS02IFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIFwiPlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdGV4dFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgICcgMCAwIDgwcHggcmdiKDE5MiAyMTkgMjU1IC8gMzAlKSwgMCAwIDMycHggcmdiKDY1IDEyMCAyNTUgLyAxNSUpJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1bNHJlbV0gbGVhZGluZy1bNC41cmVtXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNoYXJlZCBrbm93bGVkZ2UgPGJyIC8+IGZyb20gdGhlIHRvcCBtaW5kcyBpbiB0aGUgcHJvZ3JhbW1pbmdcbiAgICAgICAgICAgICAgaW5kdXN0cnlcbiAgICAgICAgICAgICAgPGJyIC8+IC0gYWxsIGZvciBmcmVlIVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LTN4bCAgcHQtcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy03LzExIG15LTYgIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LWxhcmdlciBsZWFkaW5nLTdcIj5cbiAgICAgICAgICAgICAgV2hldGhlciBhIGJlZ2lubmVyLCBsZWFybmluZyB0byBjb2RlLCBvciBhIHNlYXNvbmVkIHZldGVyYW4uIFRha2VcbiAgICAgICAgICAgICAgYSB0b3VyIGJlbG93IHRvIGdldCBzdGFydGVkIVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1mdWxsIHBiLXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctZnVsbCBteS0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBmbGV4IGJnLWFjY2VudC1waW5rIHB5LTQgcHgtMTYgcm91bmRlZC1sZyB0ZXh0LWxnIGJvcmRlci00IG9wYWNpdHktOTAgYm9yZGVyLXRyYW5zcGFyZW50IGZvbnQtYm9sZCBmb2N1cy13aXRoaW46Ym9yZGVyLTQgZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSBmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgIGhvdmVyOmJvcmRlci00IGhvdmVyOmJvcmRlci13aGl0ZSBob3ZlcjpvcGFjaXR5LTEwMCAgIFwiPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXthc3luYyAoKSA9PiB0YWxrVG9UaGVTZXJ2ZXIoKX0+VGFrZSBhIFRvdXI8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ29udGFpbmVyID0gKHsgdGV4dCB9OiBhbnkpID0+IHtcbiAgICBjb25zdCBsaW5rID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17YC4vbGVhcm4vJHtsaW5rfWB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIFxuICAgICAgICByZWxhdGl2ZSBtYi00IG1yLTQgYmxvY2sgaC1hdXRvIHctYXV0byBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgcHgtNlxuICAgICAgICBweS0zIHRyYW5zaXRpb24gdGV4dC1wcmltYXJ5IGJnLXNlY29uZGFyeSBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgXG4gICAgICAgIGJnLVsjNzE3MTcxNTRdIGhvdmVyOmJyaWdodG5lc3MtMTUwIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1hY2NlbnQtcGlua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IENob29zZUFUb3BpYyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHAtOFwiPk9yIGNob29zZSBhIHRvcGljPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgLW1iLTQgLW1yLTQgZmxleCBmbGV4LXdyYXAgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlbWl4XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQ1NTXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIk5leHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiVGVzdGluZ1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKZXN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkFDSURcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0yLzUgcHgtMTZcIj5cbiAgICAgICAgPFNlYXJjaCBoYW5kbGVGb3JtPXtoYW5kbGVGb3JtfSAvPlxuICAgICAgICA8Q2hvb3NlQVRvcGljIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgcHktOCBweC02IGxnOnB4LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPExlZnRDb250ZW50IC8+XG4gICAgICA8UmlnaHRDb250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iLCAiaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGhhbmRsZUZvcm06IEZ1bmN0aW9uO1xuICBzaXplPzogc3RyaW5nO1xufVxuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCB0b3BpYyA9IGZvcm0uZ2V0KCd0b3BpYycpO1xuICBjb25zb2xlLmxvZyh0b3BpYyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9LCAxMjAwMDAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7IGhhbmRsZUZvcm0sIHNpemUgPSAnbGFyZ2UnIH06IElQcm9wcykge1xuICBjb25zdCBzZWFyY2hSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGxhYmVsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6IGFueSkge1xuICAgIGxldCB0b3BpYyA9IGV2ZW50LnRhcmdldFswXS52YWx1ZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvcGljID0gdG9waWMudG9Mb3dlckNhc2UoKTtcbiAgICBuYXZpZ2F0ZShgLi4vbGVhcm4vJHt0b3BpY31gLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gIH1cblxuICAvLyBoYW5kbGUgd2hhdCBoYXBwZW5zIG9uIGtleSBwcmVzc1xuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5tZXRhS2V5ID09PSB0cnVlICYmIGV2ZW50LmtleSA9PT0gJ2snKSB7XG4gICAgICBpZiAoc2VhcmNoUmVmLmN1cnJlbnQgIT09IG51bGwgJiYgbGFiZWxSZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICBzZWFyY2hSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICBsYWJlbFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxuICAgIC8vIHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlS2V5UHJlc3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1zZWFyY2ggZmxleCAgcmVsYXRpdmVgfT5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggJHtcbiAgICAgICAgICBzaXplID09PSAnbGFyZ2UnID8gJ3ctZnVsbCcgOiBzaXplID09PSAnbWVkaXVtJyA/ICd3LTMvNCcgOiAndy0xLzInXG4gICAgICAgIH1gfVxuICAgICAgICAvLyBvblN1Ym1pdD17KGUpID0+IGhhbmRsZUZvcm0oZSl9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e2xhYmVsUmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXhcbiAgICAgICAgICAgICBzbTpmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC1sZWZ0IHNwYWNlLXgtMyBweC00IHNoYWRvdy1zbSByb3VuZGVkLWxnIHRleHQtc2xhdGUtODAwIGRhcms6cmluZy0wIGRhcms6dGV4dC1zbGF0ZS04MDAgZGFyazpoaWdobGlnaHQtd2hpdGUvNSAgXG4gICAgICAgICAgICAgIHotNTAgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIGJnLXdoaXRlIGZvY3VzLXdpdGhpbjpib3JkZXItNCBmb2N1cy13aXRoaW46Ym9yZGVyLXNvbGlkIGZvY3VzLXdpdGhpbjpib3JkZXItYWNjZW50LWdyZWVuXG4gICAgICAgICAgICAgICR7c2l6ZSA9PT0gJ2xhcmdlJyA/ICdoLTE2JyA6IHNpemUgPT09ICdtZWRpdW0nID8gJ2gtMTInIDogJ2gtOCd9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB6LTEwMGB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlx1RDgzRFx1REQwRDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17c2VhcmNoUmVmfVxuICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdG9waWNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHctZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXI6W25vbmVdIGZvY3VzOltvdXRsaW5lOiAwLCBib3JkZXI6IG5vbmVdIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGtiZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWJiclxuICAgICAgICAgICAgICB0aXRsZT1cIkNvbW1hbmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby11bmRlcmxpbmUgdGV4dC1zbGF0ZS0zMDAgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB0ZXh0LXhsXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFx1MjMxOFxuICAgICAgICAgICAgPC9hYmJyPlxuICAgICAgICAgICAgS1xuICAgICAgICAgIDwva2JkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaGlkZGVuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGxpbmtzIGFzIG1haW5Db250ZW50TGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvbWFpbi1jb250ZW50JztcbmltcG9ydCBQb3B1bGFyVG9waWNzIGZyb20gJ34vY29tcG9uZW50cy9wb3B1bGFyLXRvcGljcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhcm4oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciBweC02IGxnOnB4LTE0IG15LTEwIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPFNlYXJjaCBzaXplPVwibWVkaXVtXCIgaGFuZGxlRm9ybT17KGU6IGFueSkgPT4gY29uc29sZS5sb2coZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cbiAgICAgICAgICAgIDxQb3B1bGFyVG9waWNzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cbiAgICAgICAgICA8UG9wdWxhclRvcGljcyAvPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgbmFtZTogJ1N2ZWx0ZScsIGlkOiAwIH0sXG4gIHsgbmFtZTogJ1JlYWN0JywgaWQ6IDEgfSxcbiAgeyBuYW1lOiAnVGFpbHdpbmQnLCBpZDogMiB9LFxuICB7IG5hbWU6ICdSdXN0JywgaWQ6IDMgfSxcbiAgeyBuYW1lOiAnUHl0aG9uJywgaWQ6IDQgfSxcbiAgeyBuYW1lOiAnUmVtaXgnLCBpZDogNSB9LFxuICB7IG5hbWU6ICdDU1MnLCBpZDogNiB9LFxuICB7IG5hbWU6ICdOb2RlJywgaWQ6IDcgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcHVsYXJUb3BpY3MoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1yLTEwIHctODBcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBzaXplIHRleHQtMnhsXCI+UG9wdWxhciBUb3BpY3M8L3NwYW4+XG4gICAgICA8PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlckNhc2VUaXRsZSA9IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBteS0wLjVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGluayB0bz17YC4vJHtsb3dlckNhc2VUaXRsZX1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGN1cnNvci1wb2ludGVyIHB4LTUgcHktMiByb3VuZGVkLXhsIGhvdmVyOmJnLXN0b25lLTkwMCBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWxnIFwiPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgVG9waWNDYXJkLCB7IGJhc2VBcnRpY2xlIH0gZnJvbSAnfi9jb21wb25lbnRzL3RvcGljLWNhcmQnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyB1c2VTb3VuZCB9IGZyb20gJ34vY29udGV4dHMvc291bmQtY29udGV4dCc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG50eXBlIGJvdGhEYXRhID0ge1xuICAvLyBvZiB0eXBlIExvYWRlckRhdGFcbiAgZGF0YTogTG9hZGVyRGF0YTtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBhcnRpY2xlUG9zdHM6IEFycmF5PHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGF1dGhvck9mUG9zdDogc3RyaW5nO1xuICAgIGF1dGhvclR3aXR0ZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcG9pbnRzPzogbnVtYmVyIHwgbnVsbDtcbiAgICB0b3BpYzogc3RyaW5nO1xuICB9Pjtcbn07XG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbXMudG9waWNJZDtcblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGFydGljbGVQb3N0czogYXdhaXQgZGIucG9zdC5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB0b3BpYzogbmFtZSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH07XG4gIHJldHVybiBqc29uKHsgZGF0YSwgbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYXJuKCkge1xuICBjb25zdCB7IGRhdGEsIG5hbWUgfSA9IHVzZUxvYWRlckRhdGE8Ym90aERhdGE+KCk7XG5cbiAgY29uc3QgeyBtdXRlIH06IGFueSA9IHVzZVNvdW5kKCk7XG5cbiAgY29uc3QgeyBhcnRpY2xlUG9zdHMgfSA9IGRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTZ4bCBtYi0zIGNhcGl0YWxpemVcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0U2hhZG93OlxuICAgICAgICAgICAgICAncmdiYSgxOTIsIDIxOSwgMjU1LCAwLjMpIDBweCAwcHggODBweCwgcmdiYSg2NSwgMTIwLCAyNTUsIDAuMTUpIDBweCAwcHggMzJweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHsvKiBUT0RPOiBNT1ZFIFRIRSBBVURJTyBUT0dHTEUgVE8gVEhFIE5BViAqL31cbiAgICAgICAgey8qIDxzcGFuIG9uQ2xpY2s9e3RvZ2dsZUF1ZGlvfSBjbGFzc05hbWU9XCJtbC0xMiB0ZXh0LTJ4bCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIHttdXRlID8gJ1x1RDgzRFx1REQwNycgOiAnXHVEODNEXHVERDA4J31cbiAgICAgICAgPC9zcGFuPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPExpbmsgdG89e3sgcGF0aG5hbWU6ICcuL25ldycgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXhsIG10LThcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBweC0xMCBweS00IHJvdW5kZWQtbGcgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIGhvdmVyOmJvcmRlci1hY2NlbnQtcGluayBob3ZlcjpiZy1hY2NlbnQtcGluay1iZyBhY3RpdmU6Ym9yZGVyLWFjY2VudC1waW5rIGFjdGl2ZTpiZy1hY2NlbnQtcGluay1iZyBcIj5cbiAgICAgICAgICAgICsgQWRkIEFydGljbGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LVs2MDBweF0gXCI+XG4gICAgICAgIHthcnRpY2xlUG9zdHMubGVuZ3RoID8gKFxuICAgICAgICAgIGFydGljbGVQb3N0c1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IChhLnBvaW50cyEgPCBiLnBvaW50cyEgPyAxIDogLTEpKVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmFuayA9IGluZGV4ICsgMTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUb3BpY0NhcmRcbiAgICAgICAgICAgICAgICAgIG11dGU9e211dGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yT2ZQb3N0fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBsaW5rPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgIHVwdm90ZXM9e2l0ZW0ucG9pbnRzID8/IDB9XG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICByYW5rPXtyYW5rfVxuICAgICAgICAgICAgICAgICAgdHdpdHRlckhhbmRsZT17aXRlbS5hdXRob3JUd2l0dGVyID8/ICcnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXktMjAgZm9udC1leHRyYWJvbGQgdGV4dC14bFwiPlxuICAgICAgICAgICAgPHNwYW4+XHVEODNEXHVERTE0IE5vIGFydGljbGVzIGZvciB0aGlzIHRvcGljLCB5ZXQhPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtNFwiPkFkZCBvbmUgYWJvdmUhIFx1RDgzRFx1REM0Njwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU291bmQgZnJvbSAndXNlLXNvdW5kJztcbmltcG9ydCBwbG9wIGZyb20gJy4uLy4uL3B1YmxpYy9zb3VuZHMvcGxvcC10cmltbWVkLm1wMyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgYmFzZUFydGljbGUge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICB1cHZvdGVzOiBudW1iZXI7XG4gIGltYWdlPzogc3RyaW5nO1xuICB0d2l0dGVySGFuZGxlPzogc3RyaW5nO1xufVxuaW50ZXJmYWNlIEFydGljbGUgZXh0ZW5kcyBiYXNlQXJ0aWNsZSB7XG4gIHJhbms/OiBudW1iZXI7XG4gIG11dGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcGljQ2FyZCh7XG4gIHRpdGxlLFxuICBhdXRob3IsXG4gIGxpbmsgPSAnLycsXG4gIHVwdm90ZXMsXG4gIHJhbmssXG4gIGltYWdlLFxuICB0d2l0dGVySGFuZGxlLFxuICBtdXRlLFxufTogQXJ0aWNsZSkge1xuICBjb25zdCBbdXB2b3RlLCBzZXRVcHZvdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZG93bnZvdGUsIHNldERvd252b3RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSh1cHZvdGVzID8/IDApO1xuICBjb25zdCBbdmFsaWRMaW5rLCBzZXRWYWxpZExpbmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGlua0Vycm9yLCBzZXRMaW5rRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHZvbHVtZTogbnVtYmVyID0gbXV0ZSA/IDAgOiAwLjI7XG4gIGNvbnN0IFt1cHZvdGVTb3VuZF0gPSB1c2VTb3VuZChwbG9wLCB7IHNvdW5kRW5hYmxlZDogIW11dGUsIHZvbHVtZTogdm9sdW1lIH0pO1xuICBjb25zdCBbZG93bnZvdGVTb3VuZF0gPSB1c2VTb3VuZChwbG9wLCB7XG4gICAgc291bmRFbmFibGVkOiAhbXV0ZSxcbiAgICBwbGF5YmFja1JhdGU6IDAuNjUsXG4gICAgdm9sdW1lOiB2b2x1bWUsXG4gICAgLy8gYGludGVycnVwdGAgZW5zdXJlcyB0aGF0IGlmIHRoZSBzb3VuZCBzdGFydHMgYWdhaW4gYmVmb3JlIGl0J3NcbiAgICAvLyBlbmRlZCwgaXQgd2lsbCB0cnVuY2F0ZSBpdC4gT3RoZXJ3aXNlLCB0aGUgc291bmQgY2FuIG92ZXJsYXAuXG4gICAgaW50ZXJydXB0OiB0cnVlLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsaW5rLmxlbmd0aCA+IDEwKSB7XG4gICAgICBzZXRWYWxpZExpbmsodHJ1ZSk7XG4gICAgfVxuICB9LCBbbGlua10pO1xuXG4gIGNvbnN0IGhhbmRsZVVwdm90ZSA9ICgpID0+IHtcbiAgICBpZiAoIXVwdm90ZSkge1xuICAgICAgdXB2b3RlU291bmQoKTtcblxuICAgICAgc2V0VXB2b3RlKHRydWUpO1xuICAgICAgZG93bnZvdGUgJiYgc2V0RG93bnZvdGUoZmFsc2UpO1xuXG4gICAgICBpZiAoZG93bnZvdGUpIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgKyAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVwdm90ZShmYWxzZSk7XG4gICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dudm90ZSA9ICgpID0+IHtcbiAgICBpZiAoIWRvd252b3RlKSB7XG4gICAgICBkb3dudm90ZVNvdW5kKCk7XG5cbiAgICAgIHNldERvd252b3RlKHRydWUpO1xuICAgICAgdXB2b3RlICYmIHNldFVwdm90ZShmYWxzZSk7XG4gICAgICBpZiAodXB2b3RlKSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2IC0gMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXREb3dudm90ZShmYWxzZSk7XG4gICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb3JtYXR0ZWROdW1iZXIgPSBJbnRsLk51bWJlckZvcm1hdCgnZW4tdXMnLCB7XG4gICAgbm90YXRpb246ICdjb21wYWN0JyxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEsXG4gIH0pLmZvcm1hdChjb3VudCk7XG5cbiAgY29uc3QgTGlua1RvQXJ0aWNsZSA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xuICAgIHJldHVybiB2YWxpZExpbmsgPyAoXG4gICAgICA8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApIDogKFxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRMaW5rRXJyb3IodHJ1ZSl9PntjaGlsZHJlbn08L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEVycm9yUG9wdXAgPSAoZXJyb3I6IGFueSkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TGlua0Vycm9yKGZhbHNlKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi03MDAgYWJzb2x1dGUgdy0zMCBiZy1ibGFjayBtbC0xMCBtdC00ICR7XG4gICAgICAgICAgZXJyb3IgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCdcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TGlua0Vycm9yKGZhbHNlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBweC0yIHB5LTAuMjUgdGV4dC14bCB0b3AtMCByaWdodC0wIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHhcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LTMwIGJnLWVycm9yLWJnIHRleHQtZXJyb3IgcC0xMCBiZy1hY2NlbnQtZXJyb3ItYmcgdGV4dC1hY2NlbnQtZXJyb3IgIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWNjZW50LWVycm9yIHotMTBcIj5cbiAgICAgICAgICBMaW5rIGlzIGludmFsaWQgXHVEODNEXHVERTE0XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggdy0zMCBteS04IHNoYWRvdy1sZyBzaGFkb3ctc3RvbmUtOTAwIHJvdW5kZWQtMnhsICBib3JkZXItNCBib3JkZXItc29saWQgYmctWyMwMDAwMDAxY10gICR7XG4gICAgICAgIHVwdm90ZVxuICAgICAgICAgID8gJ2JvcmRlci1ncmVlbi00MDAnXG4gICAgICAgICAgOiBkb3dudm90ZVxuICAgICAgICAgID8gJ2JvcmRlci1yZWQtNDAwJ1xuICAgICAgICAgIDogJyBib3JkZXItc3RvbmUtODAwJ1xuICAgICAgfSBweS04IHJlbGF0aXZlYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtMTAgbWItYXV0byB0ZXh0LTN4bFwiPlxuICAgICAgICAgIHtyYW5rfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmtUb0FydGljbGU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZSBkZWNvcmF0aW9uLXdoaXRlIGRlY29yYXRpb24tIGhvdmVyOnRleHQtYWNjZW50LXBpbmsgbWItNCB0ZXh0LTJ4bCBtYXgtdy1tZCBmb250LWJvbGQgXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L0xpbmtUb0FydGljbGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG15LThcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIFwiPnthdXRob3J9PC9zcGFuPlxuICAgICAgICAgICAge3R3aXR0ZXJIYW5kbGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjMWRhMGYyNThdIG1sLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0xIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3R3aXR0ZXJIYW5kbGV9YH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNHB4IFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMURBMUYyXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjIuMjMgNS45MjRhOC4yMTIgOC4yMTIgMCAwMS0yLjM1Ny42NDYgNC4xMTUgNC4xMTUgMCAwMDEuODA0LTIuMjcgOC4yMjEgOC4yMjEgMCAwMS0yLjYwNi45OTYgNC4xMDMgNC4xMDMgMCAwMC02Ljk5MSAzLjc0MiAxMS42NDcgMTEuNjQ3IDAgMDEtOC40NTctNC4yODcgNC4wODcgNC4wODcgMCAwMC0uNTU2IDIuMDYzIDQuMSA0LjEgMCAwMDEuODI1IDMuNDE1IDQuMDkgNC4wOSAwIDAxLTEuODU5LS41MTN2LjA1MmE0LjEwNCA0LjEwNCAwIDAwMy4yOTIgNC4wMjMgNC4wOTkgNC4wOTkgMCAwMS0xLjg1My4wNyA0LjExIDQuMTEgMCAwMDMuODMzIDIuODUgOC4yMzYgOC4yMzYgMCAwMS01LjA5NiAxLjc1NiA4LjMzIDguMzMgMCAwMS0uOTc5LS4wNTcgMTEuNjE3IDExLjYxNyAwIDAwNi4yOSAxLjg0M2M3LjU0NyAwIDExLjY3NS02LjI1MiAxMS42NzUtMTEuNjc1IDAtLjE3OC0uMDA0LS4zNTUtLjAxMi0uNTMxYTguMjk4IDguMjk4IDAgMDAyLjA0Ny0yLjEyM3pcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC04ICBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHB4LTQgcHktMiBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOmJnLXppbmMtOTAwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPExpbmtUb0FydGljbGU+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgUmVhZCBBcnRpY2xlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbmtUb0FydGljbGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LTEgbXgtMTAgcm91bmRlZC0yeGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICBtbC1hdXRvXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXB2b3RlfVxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICB1cHZvdGUgPyAnc3Ryb2tlLWdyZWVuLTQwMCcgOiAnc3Ryb2tlLXdoaXRlJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgd2lkdGg9XCI0NFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ0XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiNiAxNSAxMiA5IDE4IDE1XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xIHRleHQtbGcgZm9udC1ib2xkICR7XG4gICAgICAgICAgICAgIHVwdm90ZVxuICAgICAgICAgICAgICAgID8gJ3RleHQtZ3JlZW4tNDAwJ1xuICAgICAgICAgICAgICAgIDogZG93bnZvdGVcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXJlZC01MDAnXG4gICAgICAgICAgICAgICAgOiAndGV4dC13aGl0ZSdcbiAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y291bnQgPiA5OTkgPyBmb3JtYXR0ZWROdW1iZXIgOiBjb3VudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRG93bnZvdGV9XG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGRvd252b3RlID8gJ3N0cm9rZS1yZWQtNTAwJyA6ICdzdHJva2Utd2hpdGUnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIHdpZHRoPVwiNDRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNDRcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjYgOSAxMiAxNSAxOCA5XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaW5rRXJyb3IgJiYgPEVycm9yUG9wdXAgZXJyb3I9e2xpbmtFcnJvcn0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGRldmVsb3BtZW50IHdlIGRvbid0IHdhbnQgdG8gcmVzdGFydFxuLy8gdGhlIHNlcnZlciB3aXRoIGV2ZXJ5IGNoYW5nZSwgYnV0IHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGRvbid0XG4vLyBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgREIgd2l0aCBldmVyeSBjaGFuZ2UgZWl0aGVyLlxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgZGIgPSBnbG9iYWwuX19kYjtcbn1cblxuZXhwb3J0IHsgZGIgfTtcbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IHJlZGlyZWN0LCBqc29uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZHM/OiB7IHVybD86IHN0cmluZzsgdGl0bGU/OiBzdHJpbmc7IGF1dGhvck9mUG9zdD86IHN0cmluZyB9O1xuICBmaWVsZEVycm9ycz86IHsgdXJsPzogc3RyaW5nOyB0aXRsZT86IHN0cmluZzsgYXV0aG9yT2ZQb3N0Pzogc3RyaW5nIH07XG59O1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpID0+IGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVVcmwodXJsOiBzdHJpbmcpIHtcbiAgbGV0IHJlZ0V4ID1cbiAgICAvXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP1stYS16QS1aMC05QDolLl9cXCt+Iz1dezEsMjU2fVxcLlthLXpBLVowLTkoKV17MSw2fVxcYihbLWEtekEtWjAtOSgpQDolX1xcKy5+Iz8mLy89XSopJC9nbTtcblxuICBjb25zdCBpc1ZhbGlkID0gcmVnRXgudGVzdCh1cmwpO1xuICBpZiAoIWlzVmFsaWQpIHtcbiAgICByZXR1cm4gJ1VybCBtdXN0IGJlIHZhbGlkJztcbiAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gIGlmICh0aXRsZS5sZW5ndGggPCA0KSB7XG4gICAgcmV0dXJuICdUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBdXRob3IoYXV0aG9yOiBzdHJpbmcpIHtcbiAgaWYgKGF1dGhvci5sZW5ndGggPCA0KSB7XG4gICAgcmV0dXJuICdBdXRob3IgbXVzdCBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMnO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc29sZS5sb2coZm9ybSk7XG4gIGxldCB0b3BpYyA9IGZvcm0uZ2V0KCd0b3BpYycpO1xuICBsZXQgdXJsID0gZm9ybS5nZXQoJ3VybCcpO1xuICBsZXQgdGl0bGUgPSBmb3JtLmdldCgndGl0bGUnKTtcbiAgbGV0IGF1dGhvck9mUG9zdCA9IGZvcm0uZ2V0KCdhdXRob3InKTtcblxuICAvLyBWYWxpZGF0aW9uIGhlcmUgZm9yIGZvcm1hdCBvZiBmaWVsZHM6XG4gIGlmIChcbiAgICB0eXBlb2YgdG9waWMgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdGl0bGUgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIGF1dGhvck9mUG9zdCAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZm9ybUVycm9yOiAnRm9ybSBzdWJtaXR0ZWQgaW5jb3JyZWN0bHknLFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGZpZWxkRXJyb3JzID0ge1xuICAgIHVybDogdmFsaWRhdGVVcmwodXJsKSxcbiAgICB0aXRsZTogdmFsaWRhdGVUaXRsZSh0aXRsZSksXG4gICAgYXV0aG9yT2ZQb3N0OiB2YWxpZGF0ZUF1dGhvcihhdXRob3JPZlBvc3QpLFxuICB9O1xuICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSkge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkczogeyB1cmwsIHRpdGxlLCBhdXRob3JPZlBvc3QgfSB9KTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRpb24gZm9yIGV4aXN0aW5nIHVybCBpbiBkYXRhYmFzZVxuICBjb25zdCBleGlzdHMgPSBhd2FpdCBkYi5wb3N0LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHRvcGljOiB0b3BpYyxcbiAgICAgIHVybDogdXJsLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIFRoZSB0b3BpY3MgaW4gdGhlIGRhdGFiYXNlIGFyZSBsb3dlcmNhc2VcbiAgdG9waWMgPSB0b3BpYy50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghZXhpc3RzKSB7XG4gICAgYXdhaXQgZGIucG9zdC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyB0b3BpYywgdXJsLCB0aXRsZSwgYXV0aG9yT2ZQb3N0IH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVkaXJlY3QoYC9sZWFybi8ke3RvcGljfWApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQXJ0aWNsZSBhbHJlYWR5IGV4aXN0cycpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXcoKSB7XG4gIGxldCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuICBjb25zb2xlLmxvZyhhY3Rpb25EYXRhKTtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGxldCB0b3BpYyA9IHBhcmFtcy50b3BpY0lkO1xuICB0b3BpYyA9IHRvcGljICYmIHRvcGljWzBdLnRvVXBwZXJDYXNlKCkgKyB0b3BpYy5zdWJzdHJpbmcoMSk7XG5cbiAgLy8gV2UgbmVlZCB0byBzaG93IHRoZSB3b3JkIGFzIGNhcGl0YWxpemVkXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXcteHNcIj5cbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInNoYWRvdy1tZCByb3VuZGVkIHB0LTQgcGItOCBtYi00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwidG9waWNcIj5cbiAgICAgICAgICAgICAgVG9waWNcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2hhZG93IGJvcmRlci0yIGJvcmRlci13aGl0ZSB0ZXh0LWdyYXktNzAwIGFwcGVhcmFuY2Utbm9uZSAgcm91bmRlZCB3LWZ1bGwgcHktNCBweC0zICBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSAke1xuICAgICAgICAgICAgICAgIHRvcGljID8gJ2JnLWdyYXktMjAwICBjdXJzb3Itbm90LWFsbG93ZWQnIDogJydcbiAgICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgICBpZD1cInRvcGljXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dG9waWN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ISF0b3BpY31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwidXJsXCI+XG4gICAgICAgICAgICAgIFVSTFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udXJsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci13aGl0ZSAgcm91bmRlZCB3LWZ1bGwgcHktNCBweC0zIHRleHQtZ3JheS03MDAgbWItMyBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSAke1xuICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51cmwgJiYgJ2JvcmRlci1yZWQtNjAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgaWQ9XCJ1cmxcIlxuICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9vdmVycmVhY3RlZC5pby9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXJsID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwICB0ZXh0LW1kXCI+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnVybH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgQXJ0aWNsZSBUaXRsZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLXdoaXRlICByb3VuZGVkIHctZnVsbCBweS00IHB4LTMgdGV4dC1ncmF5LTcwMCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lICR7XG4gICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnRpdGxlICYmICdib3JkZXItcmVkLTYwMCAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoeSBSZWFjdCBob29rcyBhcmUgYXdlc29tZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy50aXRsZSA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LW1kXCI+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrICB0ZXh0LWxnIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImF1dGhvclwiPlxuICAgICAgICAgICAgICBBdXRob3JcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LmF1dGhvck9mUG9zdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItd2hpdGUgIHJvdW5kZWQgdy1mdWxsIHB5LTQgcHgtMyB0ZXh0LWdyYXktNzAwIG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgJHtcbiAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uYXV0aG9yT2ZQb3N0ICYmICdib3JkZXItcmVkLTYwMCAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBpZD1cImF1dGhvclwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImF1dGhvclwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGFuXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmF1dGhvck9mUG9zdCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LW1kXCI+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmF1dGhvck9mUG9zdH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBiZy1hY2NlbnQtcGluayB3LWZ1bGwgaG92ZXI6YnJpZ2h0bmVzcy0xMTAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtcGluayBob3Zlcjpib3JkZXItd2hpdGUgYWN0aXZlOmJvcmRlci13aGl0ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtdC04IHB5LTQgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXQgQXJ0aWNsZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4+R28gbGVhcm4gc29tZXRoaW5nPC9zcGFuPlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2NkOTM5MGQ3JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1NVlFRNEFTQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRDJITlZJQVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Qk83NEZXTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNFRUV1RaS1MuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTc3SENCVzdYLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1GUU1YMkpKSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS0lMSU5UTkkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01QVlXTkdJRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4nOnsnaWQnOidyb3V0ZXMvbGVhcm4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbGVhcm4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4tM0ROTUFRN0QuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtJTElOVE5JLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUFZV05HSUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuLyR0b3BpY0lkJzp7J2lkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkJywncGFyZW50SWQnOidyb3V0ZXMvbGVhcm4nLCdwYXRoJzonOnRvcGljSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQtVVM1WTNZVFMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTM2Sk4yNDRZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNzdIQ0JXN1guanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3Jzp7J2lkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldycsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkJywncGF0aCc6J25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXctQlpJVVBaM1AuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuL2luZGV4Jzp7J2lkJzoncm91dGVzL2xlYXJuL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvbGVhcm4nLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4vaW5kZXgtTzVVSUFPWFkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbi9pbmRleCc6eydpZCc6J3JvdXRlcy9sb2dpbi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4vaW5kZXgtV05aREs1NFouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURYNk9JRElMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUFZV05HSUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF0aHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcGF0aHMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncGF0aHMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BhdGhzL2luZGV4LTdESlZRTFZTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01QVlXTkdJRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2lnbnVwL2luZGV4Jzp7J2lkJzoncm91dGVzL3NpZ251cC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaWdudXAnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NpZ251cC9pbmRleC1TNE9IRTJGMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRFg2T0lESUwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01QVlXTkdJRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUNEOTM5MEQ3LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsWUFBdUI7OztBQ0R2QixxQkFBb0I7QUFDcEIseUJBQXdCO0FBQ3hCLG9CQUFtQjtBQUNuQixzQkFBcUM7OztBQ0hyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsbUJBQTRCO0FBQzVCLG9CQUErQjtBQUVoQix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxNQUFJLFNBQVMsa0NBQ1gsb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFP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
