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
  loader: () => loader,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");
var import_node2 = require("@remix-run/node");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LGDG3F2R.css";

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

// app/helper/helper.ts
function capitalizeFirstLetter(word) {
  return word[0].toLocaleUpperCase() + word.substring(1);
}

// app/components/header.tsx
var Logo = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " space-x-1 cursor-pointer"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold  "
  }, "Sapientia")));
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
var Navigation = ({ mute, toggleMute, user }) => {
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
  }, mute ? "\u{1F507}" : "\u{1F508}"))), /* @__PURE__ */ React.createElement("div", {
    className: " cursor-pointer ml-2 sm:ml-4 "
  }, user ? /* @__PURE__ */ React.createElement("button", {
    className: "px-6 py-2  flex justify-center items-center place-items-center border border-solid border-white/60  rounded-md drop-shadow-md  focus-within::bg-slate-50/5 focus-within::border-white hover:bg-slate-50/5 hover:border-white "
  }, /* @__PURE__ */ React.createElement("span", null, capitalizeFirstLetter(user.username))) : /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/login"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "px-6 py-2  flex justify-center items-center place-items-center border border-solid border-white/60  rounded-md drop-shadow-md  focus-within::bg-slate-50/5 focus-within::border-white hover:bg-slate-50/5 hover:border-white "
  }, /* @__PURE__ */ React.createElement("span", null, "Login")))));
};
var NavigationElement = ({ name, location }) => {
  return /* @__PURE__ */ React.createElement(import_react3.Link, {
    className: "px-5 py-2 rounded-xl hover:text-accent-pink  opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink ",
    to: location
  }, name);
};
var Header = ({ user }) => {
  const values = useSound();
  const { mute, toggleMute } = values;
  return /* @__PURE__ */ React.createElement("header", {
    className: "px-6 lg:px-12 py-6 flex justify-between items-center text-white header  bg-[#00000038]"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement(Navigation, {
    user,
    mute,
    toggleMute
  }));
};

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

// app/utils/session.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_node = require("@remix-run/node");
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
async function getUserId(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string")
    return null;
  return userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_node.createCookieSessionStorage)({
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
  return (0, import_node.redirect)(route, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function getUser(request) {
  const userId = await getUserId(request);
  console.log(`userId is ${userId}`);
  if (typeof userId !== "string") {
    return null;
  }
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true }
    });
    return user;
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  const session = await getUserSession(request);
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => ({
  charset: "utf-8",
  title: "Sapientia",
  viewport: "width=device-width,initial-scale=1"
});
var loader = async ({ request }) => {
  console.log("EXECUTING LOADER FUNCTION");
  const user = await getUser(request);
  console.log(user);
  return (0, import_node2.json)(user);
};
function App() {
  const data2 = (0, import_react4.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(motd_default, null)), /* @__PURE__ */ React.createElement(Header, {
    user: data2
  }), /* @__PURE__ */ React.createElement(import_react4.Outlet, null), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/paths/index.tsx
var paths_exports = {};
__export(paths_exports, {
  default: () => Courses,
  links: () => links2
});

// app/styles/index.css
var styles_default = "/build/_assets/index-KUWK5KHD.css";

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
  onChange,
  defaultValue
}) {
  const [showPassword, setShowPassword] = (0, import_react5.useState)(false);
  const [error, setError] = (0, import_react5.useState)(hasError);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-80 mb-6  flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor,
    className: "flex justify-start items-center w-full text-xl mb-1"
  }, label), /* @__PURE__ */ React.createElement("div", {
    className: `flex w-full border-2 border-solid  ${error ? "border-red-400" : "border-gray-600"} focus-within:border-white  rounded-lg hover:shadow-2xl relative`
  }, /* @__PURE__ */ React.createElement("input", {
    id,
    autoComplete,
    name,
    onChange,
    type: toggleShowHide && showPassword ? "text" : toggleShowHide && !showPassword ? "password" : type,
    placeholder,
    defaultValue,
    className: "flex w-full px-2 py-4 text-xl  bg-transparent rounded-lg hover:shadow-2xl relative  "
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
var import_react9 = require("react");
var links4 = () => [
  { rel: "stylesheet", href: styles_default }
];
function Index() {
  const useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react9.useLayoutEffect : import_react9.useEffect;
  useIsomorphicLayoutEffect(() => {
    document.body.style.backgroundImage = `linear-gradient(
    to right top,
    #1a1a1a,
    #19191a,
    #19191a,
    #181819,
    #171819,
    #191e24,
    #1b2430,
    #1e2a3c,
    #2d3759,
    #464173,
    #6a498a,
    #934d9a
  )`;
  }, []);
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
var import_react10 = require("@remix-run/react");

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
      className: "flex justify-start items-center my-1"
    }, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
      to: `./${lowerCaseTitle}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "w-full flex cursor-pointer px-5 py-2 \n                rounded-xl\n                bg-secondary border-2 border-transparent \n        bg-[#71717154] hover:brightness-150 hover:border-2 hover:border-accent-pink\n                \n                \n                \n                "
    }, /* @__PURE__ */ React.createElement("span", {
      className: "cursor-pointer text-lg "
    }, item.name))));
  })));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn.tsx
var import_react11 = require("react");
var links5 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Learn() {
  const useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react11.useLayoutEffect : import_react11.useEffect;
  useIsomorphicLayoutEffect(() => {
    document.body.style.backgroundImage = "linear-gradient(to left bottom, #2e223e, #27233b, #222336, #1f2331, #1e222b, #1e222a, #1e2129, #1e2128, #1f212b, #22212e, #262130, #2a2031)";
  }, []);
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
  }, /* @__PURE__ */ React.createElement(import_react10.Outlet, null))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId.tsx
var topicId_exports = {};
__export(topicId_exports, {
  default: () => Learn2,
  links: () => links6,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var import_react12 = require("@remix-run/react");
var links6 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var loader2 = async ({ params }) => {
  const name = (params == null ? void 0 : params.topicId) ?? "";
  return (0, import_node3.json)({ name });
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
  loader: () => loader3
});
var import_node4 = require("@remix-run/node");
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
    className: `flex w-30 my-8 shadow-lg   rounded-2xl  border-2 border-solid bg-[#6c6c6c10]   py-8 relative 
      
      ${upvote ? "border-green-400 shadow-[#8ef78e72]" : downvote ? "border-red-400 shadow-[#dc707065]" : " shadow-stone-900 border-[#6c6c6c24]"}
      
      `
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
    className: `cursor-pointer ${upvote ? "stroke-green-400" : "stroke-white"} hover:scale-110 transition `,
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
    className: `px-1 text-lg font-bold ${upvote ? "text-green-400" : downvote ? "text-red-500" : "text-white"}  `
  }, count > 999 ? formattedNumber : count), /* @__PURE__ */ React.createElement("svg", {
    onClick: handleDownvote,
    xmlns: "http://www.w3.org/2000/svg",
    className: `cursor-pointer ${downvote ? "stroke-red-500" : "stroke-white"}
            hover:scale-110 transition 
            
            
            `,
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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId/index.tsx
var loader3 = async ({ params }) => {
  const name = params.topicId;
  const data2 = {
    articlePosts: await db.post.findMany({
      where: {
        topic: name
      }
    })
  };
  return (0, import_node4.json)({ data: data2, name });
};
function Index2() {
  const { data: data2, name } = (0, import_react14.useLoaderData)();
  const formattedTopicName = capitalizeFirstLetter(name);
  const { mute } = useSound();
  const { articlePosts } = data2;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-[600px]"
  }, articlePosts.length >= 1 && articlePosts.sort((a, b) => a.points < b.points ? 1 : -1).map((item, index) => {
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
  }), articlePosts.length ? /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    className: "w-full flex",
    to: { pathname: "./new" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex content-center items-center text-center bg-[#ffffff0a] rounded-lg  p-8 border-[1px] border-solid border-stone-400 w-full flex-col text-xl mt-8"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl px-6 my-6 font-bold"
  }, "Love an article that you don't see for ", formattedTopicName, "?"), /* @__PURE__ */ React.createElement("span", {
    className: "text-3xl my-4 text-gray-300 font-semibold"
  }, "Add it below!"), /* @__PURE__ */ React.createElement("button", {
    className: "my-6 px-6 py-2 rounded-lg border-4   border-accent-pink bg-accent-pink-bg transition hover:brightness-75"
  }, "Add Article"))) : /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    className: "w-full flex",
    to: { pathname: "./new" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex cursor-default content-center items-center text-center bg-[#ffffff0a] rounded-lg  p-8 border-[1px] border-solid border-stone-400 w-full flex-col text-xl mt-8"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl px-6 my-6"
  }, "\u{1F614} No articles for ", formattedTopicName, ", yet!"), /* @__PURE__ */ React.createElement("span", {
    className: "text-3xl my-4"
  }, "Add one below!"), /* @__PURE__ */ React.createElement("button", {
    className: "my-6 px-6 py-2 rounded-lg border-4   border-accent-pink bg-accent-pink-bg transition hover:brightness-75"
  }, "Add Article")))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => New
});
var import_node5 = require("@remix-run/node");
var import_react15 = require("@remix-run/react");
var badRequest = (data2) => (0, import_node5.json)(data2, { status: 400 });
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
    return (0, import_node5.redirect)(`/learn/${topic}`);
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
  links: () => links7
});
var links7 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Index3() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "mt-20 flex justify-center items-center text-3xl"
  }, "Choose a topic \u2B05\uFE0F"));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login2,
  links: () => links8
});
var import_react16 = require("react");
var import_node6 = require("@remix-run/node");
var import_react17 = require("@remix-run/react");
var links8 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function validateUsername(username) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}
var badRequest2 = (data2) => {
  return (0, import_node6.json)(data2, { status: 400 });
};
var action2 = async ({ request }) => {
  var _a, _b;
  const form = await request.formData();
  const password = (_a = form.get("password")) == null ? void 0 : _a.toString();
  const username = (_b = form.get("username")) == null ? void 0 : _b.toString();
  const fields = { username, password };
  console.log(fields);
  if (typeof username !== "string" || typeof password !== "string") {
    return badRequest2({
      formError: `Form not submitted correctly.`
    });
  }
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest2({ fieldErrors, fields });
  const user = await login({ username, password });
  console.log(user);
  console.log(!user);
  if (!user) {
    console.log("Executing here");
    return badRequest2({
      fields,
      formError: "Username/ password is incorrect"
    });
  }
  return createUserSession(user.id, "/");
};
function Login2() {
  var _a, _b, _c, _d;
  const data2 = (0, import_react17.useActionData)();
  const [error, setError] = (0, import_react16.useState)(false);
  const [searchParams] = (0, import_react17.useSearchParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full flex flex-col justify-center items-center m-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center px-12 "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold mb-10"
  }, "Login"), (data2 == null ? void 0 : data2.formError) && /* @__PURE__ */ React.createElement("div", {
    className: "w-full p-4 my-4 bg-[#ef444445] flex justify-center items-center border-2 border-solid border-red-500  "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-xl text-red-500"
  }, (data2 == null ? void 0 : data2.formError) ?? "Invalid Email or password")), /* @__PURE__ */ React.createElement("form", {
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
    defaultValue: (_a = data2 == null ? void 0 : data2.fields) == null ? void 0 : _a.username,
    hasError: !!((_b = data2 == null ? void 0 : data2.fieldErrors) == null ? void 0 : _b.username),
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
    defaultValue: (_c = data2 == null ? void 0 : data2.fields) == null ? void 0 : _c.password,
    hasError: !!((_d = data2 == null ? void 0 : data2.fieldErrors) == null ? void 0 : _d.password),
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
  }, "Don't have an account?", /* @__PURE__ */ React.createElement(import_react17.Link, {
    to: "/signup"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "ml-1 text-accent-pink cursor-pointer"
  }, "Sign Up")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "a8633a20", "entry": { "module": "/build/entry.client-3XCPPM5X.js", "imports": ["/build/_shared/chunk-3RBMSD2S.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-BE2MDUXH.js", "imports": ["/build/_shared/chunk-6NBQKABJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-5SK3R3YH.js", "imports": ["/build/_shared/chunk-TCG2QB6M.js", "/build/_shared/chunk-U2C5UWPG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn": { "id": "routes/learn", "parentId": "root", "path": "learn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn-TQVSB24C.js", "imports": ["/build/_shared/chunk-TCG2QB6M.js", "/build/_shared/chunk-U2C5UWPG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId": { "id": "routes/learn/$topicId", "parentId": "routes/learn", "path": ":topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId-4W5UXL3L.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/index": { "id": "routes/learn/$topicId/index", "parentId": "routes/learn/$topicId", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/index-RINSQ6FR.js", "imports": ["/build/_shared/chunk-36JN244Y.js", "/build/_shared/chunk-6NBQKABJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new": { "id": "routes/learn/$topicId/new", "parentId": "routes/learn/$topicId", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new-HDONK7HE.js", "imports": ["/build/_shared/chunk-GK56CZJG.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new/index": { "id": "routes/learn/$topicId/new/index", "parentId": "routes/learn/$topicId/new", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new/index-VZLJRZCW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/index": { "id": "routes/learn/index", "parentId": "routes/learn", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/index-54X3KZGD.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-JWP2MCXZ.js", "imports": ["/build/_shared/chunk-GK56CZJG.js", "/build/_shared/chunk-ERDQSZPS.js", "/build/_shared/chunk-U2C5UWPG.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths/index": { "id": "routes/paths/index", "parentId": "root", "path": "paths", "index": true, "caseSensitive": void 0, "module": "/build/routes/paths/index-7B4UHMAX.js", "imports": ["/build/_shared/chunk-U2C5UWPG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup": { "id": "routes/signup", "parentId": "root", "path": "signup", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/signup-HIQQPPQT.js", "imports": ["/build/_shared/chunk-ERDQSZPS.js", "/build/_shared/chunk-U2C5UWPG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A8633A20.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29udGV4dHMvc291bmQtY29udGV4dC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbW90ZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsICIuLi9hcHAvaGVscGVyL2hlbHBlci50cyIsICIuLi9hcHAvdXRpbHMvZGIuc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcGF0aHMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9zaWdudXAudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1hdHRlZC1pbnB1dC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRlbnQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NlYXJjaC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9wb3B1bGFyLXRvcGljcy50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3RvcGljLWNhcmQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9leHByZXNzJztcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICAnL2J1aWxkJyxcbiAgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYy9idWlsZCcsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6ICcxeScgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycsIHsgbWF4QWdlOiAnMWgnIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oJ3RpbnknKSk7XG5cbmFwcC5hbGwoXG4gICcqJyxcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmFwcC5nZXQoJy9zZXJ2ZXJjb2RlJywgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdTRVJWRVIgQ09ERSBFWEVDVVRFRCEnKTtcbiAgcmVzLnNlbmQoJ0JPT00nKTtcbn0pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFx1RDgzRFx1REU4MCBsaXZlIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcGF0aHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9zaWdudXAudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGF0aHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BhdGhzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBhdGhzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2lnbnVwXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaWdudXBcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2lnbnVwXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9sZWFyblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibGVhcm5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuLyR0b3BpY0lkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiBcIjp0b3BpY0lkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ld1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfVxuICB9OyIsICJpbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsganNvbiwgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90YWlsd2luZC5jc3MnO1xuaW1wb3J0IFNvdW5kUHJvdmlkZXIgZnJvbSAnLi9jb250ZXh0cy9zb3VuZC1jb250ZXh0JztcbmltcG9ydCBNb3RkIGZyb20gJy4vY29tcG9uZW50cy9tb3RkJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJy4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6ICd1dGYtOCcsXG4gIHRpdGxlOiAnU2FwaWVudGlhJyxcbiAgdmlld3BvcnQ6ICd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyxcbn0pO1xuXG50eXBlIFVzZXIgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnRVhFQ1VUSU5HIExPQURFUiBGVU5DVElPTicpO1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcblxuICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICByZXR1cm4ganNvbih1c2VyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8VXNlcj4oKTtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTb3VuZFByb3ZpZGVyPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1vdGQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEhlYWRlciB1c2VyPXtkYXRhfSAvPlxuICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgICAgICA8L1NvdW5kUHJvdmlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBTb3VuZENvbnRleHRTdGF0ZSA9IHtcbiAgbXV0ZTogYm9vbGVhbjtcbiAgdG9nZ2xlTXV0ZTogRnVuY3Rpb247XG59O1xuXG5jb25zdCBTb3VuZENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFNvdW5kQ29udGV4dFN0YXRlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTb3VuZCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU291bmRDb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU291bmRQcm92aWRlcih7IGNoaWxkcmVuIH06IGFueSkge1xuICBjb25zdCBbbXV0ZSwgc2V0TXV0ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXV0ZScpID8/ICdmYWxzZSc7XG4gICAgc2V0TXV0ZSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IEpTT04ucGFyc2UocmVzdWx0KSA6IGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gcmV0cmlldmUgaW4gbG9jYWxTdG9yYWdlXG4gIC8vICAgY29uc3QgaXNNdXRlZFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlJyk7XG5cbiAgLy8gICBjb25zdCBpc011dGVkID0gISFpc011dGVkU3RyaW5nO1xuXG4gIC8vICAgc2V0TXV0ZShpc011dGVkKTtcbiAgLy8gfSwgW10pO1xuXG4gIC8vIEV2ZXJ5dGltZSB0aGUgdmFsdWUgb2YgbXV0ZSBjaGFuZ2VzIG92ZXJyaWRlIHRoZSBsb2NhbCBzdG9yYWdlIHZhbHVlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211dGUnLCBKU09OLnN0cmluZ2lmeShtdXRlKSk7XG4gIH0sIFttdXRlXSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTXV0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhgdG9nZ2xpbmcgZnJvbSBtdXRlID0gJHttdXRlfWApO1xuICAgIHNldE11dGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IHsgbXV0ZSwgdG9nZ2xlTXV0ZSB9O1xuICByZXR1cm4gKFxuICAgIDxTb3VuZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlc30+e2NoaWxkcmVufTwvU291bmRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIiwgImV4cG9ydCBjb25zdCBNb3RkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWRhcmstbW9kZS1iZyByb3VuZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHB4LTIwICBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFjY2VudC1waW5rIHctZnVsbCB0ZXh0LWNlbnRlciByb3VuZGVkXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgV2Ugc3RhbmQgd2l0aCBVa3JhaW5lIFx1RDgzQ1x1RERGQVx1RDgzQ1x1RERFNlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3Jhem9tZm9ydWtyYWluZS5vcmcvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtMiBjdXJzb3ItcG9pbnRlciBmb250LWJvbGQgdGV4dC1wcmltYXJ5LXRleHQgZm9jdXMtd2l0aGluOnRleHQtYWNjZW50LXBpbmsgaG92ZXI6dGV4dC1hY2NlbnQtcGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERvbmF0ZSBoZXJlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vdGQ7XG4iLCAiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcbmltcG9ydCB7IGpzb24sIExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB7IFNvdW5kQ29udGV4dFN0YXRlLCB1c2VTb3VuZCB9IGZyb20gJ34vY29udGV4dHMvc291bmQtY29udGV4dCc7XG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcic7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICd+L2hlbHBlci9oZWxwZXInO1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlIH1dO1xufTtcblxuY29uc3QgTG9nbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS14LTEgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgIDxMaW5rIHRvPXsnLyd9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgIFwiPlNhcGllbnRpYTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIGNvbnN0IExhbmd1YWdlU2VsZWN0b3IgPSAoKSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgbWwtMiBzbTptbC00IFwiPlxuLy8gICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTEuNSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwbGFjZS1pdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUvNjAgIHJvdW5kZWQtbWQgZHJvcC1zaGFkb3ctbWQgIGZvY3VzLXdpdGhpbjo6Ymctc2xhdGUtNTAvNSBmb2N1cy13aXRoaW46OmJvcmRlci13aGl0ZSBob3ZlcjpiZy1zbGF0ZS01MC81IGhvdmVyOmJvcmRlci13aGl0ZSBcIj5cbi8vICAgICAgICAgPHN2Z1xuLy8gICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItbGFuZ3VhZ2UgaC02IHctNiBzdHJva2Utd2hpdGVcIlxuLy8gICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuLy8gICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbi8vICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4vLyAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbi8vICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbi8vICAgICAgICAgICA8cGF0aCBkPVwiTTQgNWg3XCIgLz5cbi8vICAgICAgICAgICA8cGF0aCBkPVwiTTkgM3YyYzAgNC40MTggLTIuMjM5IDggLTUgOFwiIC8+XG4vLyAgICAgICAgICAgPHBhdGggZD1cIk01IDljLS4wMDMgMi4xNDQgMi45NTIgMy45MDggNi43IDRcIiAvPlxuLy8gICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMjBsNCAtOWw0IDlcIiAvPlxuLy8gICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuMSAxOGgtNi4yXCIgLz5cbi8vICAgICAgICAgPC9zdmc+XG4vLyAgICAgICAgIDxzcGFuPkVuZ2xpc2g8L3NwYW4+XG4vLyAgICAgICA8L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbnR5cGUgTmF2RWxlbWVudFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59O1xuXG5jb25zdCBHaXRodWIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgcHgtNSBweS0yIHJvdW5kZWQteGwgIGhvdmVyOnRleHQtYWNjZW50LXBpbmsgIG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVpbGx5am9kb25uZWxsL3NhcGllbnRpYVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgb3BhY2l0eS04MFwiXG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD17JzMwcHgnfVxuICAgICAgICAgIGhlaWdodD17JzMwcHgnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBmaWxsLXByaW1hcnktdGV4dCBcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNNjQgNS4xMDNjLTMzLjM0NyAwLTYwLjM4OCAyNy4wMzUtNjAuMzg4IDYwLjM4OCAwIDI2LjY4MiAxNy4zMDMgNDkuMzE3IDQxLjI5NyA1Ny4zMDMgMy4wMTcuNTYgNC4xMjUtMS4zMSA0LjEyNS0yLjkwNSAwLTEuNDQtLjA1Ni02LjE5Ny0uMDgyLTExLjI0My0xNi44IDMuNjUzLTIwLjM0NS03LjEyNS0yMC4zNDUtNy4xMjUtMi43NDctNi45OC02LjcwNS04LjgzNi02LjcwNS04LjgzNi01LjQ4LTMuNzQ4LjQxMy0zLjY3LjQxMy0zLjY3IDYuMDYzLjQyNSA5LjI1NyA2LjIyMyA5LjI1NyA2LjIyMyA1LjM4NiA5LjIzIDE0LjEyNyA2LjU2MiAxNy41NzMgNS4wMi41NDItMy45MDMgMi4xMDctNi41NjggMy44MzQtOC4wNzYtMTMuNDEzLTEuNTI1LTI3LjUxNC02LjcwNC0yNy41MTQtMjkuODQzIDAtNi41OTMgMi4zNi0xMS45OCA2LjIyMy0xNi4yMS0uNjI4LTEuNTItMi42OTUtNy42NjIuNTg0LTE1Ljk4IDAgMCA1LjA3LTEuNjIzIDE2LjYxIDYuMTlDNTMuNyAzNSA1OC44NjcgMzQuMzI3IDY0IDM0LjMwNGM1LjEzLjAyMyAxMC4zLjY5NCAxNS4xMjcgMi4wMzMgMTEuNTI2LTcuODEzIDE2LjU5LTYuMTkgMTYuNTktNi4xOSAzLjI4NyA4LjMxNyAxLjIyIDE0LjQ2LjU5MyAxNS45OCAzLjg3MiA0LjIzIDYuMjE1IDkuNjE3IDYuMjE1IDE2LjIxIDAgMjMuMTk0LTE0LjEyNyAyOC4zLTI3LjU3NCAyOS43OTYgMi4xNjcgMS44NzQgNC4wOTcgNS41NSA0LjA5NyAxMS4xODMgMCA4LjA4LS4wNyAxNC41ODMtLjA3IDE2LjU3MiAwIDEuNjA3IDEuMDg4IDMuNDkgNC4xNDggMi44OTcgMjMuOTgtNy45OTQgNDEuMjYzLTMwLjYyMiA0MS4yNjMtNTcuMjk0QzEyNC4zODggMzIuMTQgOTcuMzUgNS4xMDQgNjQgNS4xMDR6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI2LjQ4NCA5MS44MDZjLS4xMzMuMy0uNjA1LjM5LTEuMDM1LjE4NS0uNDQtLjE5Ni0uNjg1LS42MDUtLjU0My0uOTA2LjEzLS4zMS42MDMtLjM5NSAxLjA0LS4xODguNDQuMTk3LjY5LjYxLjUzNy45MXptMi40NDYgMi43MjljLS4yODcuMjY3LS44NS4xNDMtMS4yMzItLjI4LS4zOTYtLjQyLS40Ny0uOTgzLS4xNzctMS4yNTQuMjk4LS4yNjYuODQ0LS4xNCAxLjI0LjI4LjM5NC40MjYuNDcyLjk4NC4xNyAxLjI1NXpNMzEuMzEyIDk4LjAxMmMtLjM3LjI1OC0uOTc2LjAxNy0xLjM1LS41Mi0uMzctLjUzOC0uMzctMS4xODMuMDEtMS40NC4zNzMtLjI1OC45Ny0uMDI1IDEuMzUuNTA3LjM2OC41NDUuMzY4IDEuMTktLjAxIDEuNDUyem0zLjI2MSAzLjM2MWMtLjMzLjM2NS0xLjAzNi4yNjctMS41NTItLjIzLS41MjctLjQ4Ny0uNjc0LTEuMTgtLjM0My0xLjU0NC4zMzYtLjM2NiAxLjA0NS0uMjY0IDEuNTY0LjIzLjUyNy40ODYuNjg2IDEuMTguMzMzIDEuNTQzem00LjUgMS45NTFjLS4xNDcuNDczLS44MjUuNjg4LTEuNTEuNDg2LS42ODMtLjIwNy0xLjEzLS43Ni0uOTktMS4yMzguMTQtLjQ3Ny44MjMtLjcgMS41MTItLjQ4NS42ODMuMjA2IDEuMTMuNzU2Ljk4OCAxLjIzN3ptNC45NDMuMzYxYy4wMTcuNDk4LS41NjMuOTEtMS4yOC45Mi0uNzIzLjAxNy0xLjMwOC0uMzg3LTEuMzE1LS44NzcgMC0uNTAzLjU2OC0uOTEgMS4yOS0uOTI0LjcxNy0uMDEzIDEuMzA2LjM4NyAxLjMwNi44OHptNC41OTgtLjc4MmMuMDg2LjQ4NS0uNDEzLjk4NC0xLjEyNiAxLjExNy0uNy4xMy0xLjM1LS4xNzItMS40NC0uNjUzLS4wODYtLjQ5OC40MjItLjk5NyAxLjEyMi0xLjEyNi43MTQtLjEyMyAxLjM1NC4xNyAxLjQ0NC42NjN6bTAgMFwiPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICh7IG11dGUsIHRvZ2dsZU11dGUsIHVzZXIgfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJUb3BpY3NcIiBsb2NhdGlvbj1cIi9sZWFyblwiIC8+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIlBhdGhzXCIgbG9jYXRpb249XCIvcGF0aHNcIiAvPlxuICAgICAgey8qIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiTG9naW5cIiBsb2NhdGlvbj1cIi9sb2dpblwiIC8+ICovfVxuICAgICAgPEdpdGh1YiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgbWwtMiBzbTptbC00IFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci10cmFuc3BhcmVudCAgYWN0aXZlOmJvcmRlci1zdG9uZS0yMDAgaG92ZXI6Ym9yZGVyLXN0b25lLTIwMCBweC00IHB5LVsuMjVyZW1dIHJvdW5kZWRcIj5cbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0b2dnbGVNdXRlfSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAge211dGUgPyAnXHVEODNEXHVERDA3JyA6ICdcdUQ4M0RcdUREMDgnfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxMYW5ndWFnZVNlbGVjdG9yIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgbWwtMiBzbTptbC00IFwiPlxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTYgcHktMiAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlLzYwICByb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kICBmb2N1cy13aXRoaW46OmJnLXNsYXRlLTUwLzUgZm9jdXMtd2l0aGluOjpib3JkZXItd2hpdGUgaG92ZXI6Ymctc2xhdGUtNTAvNSBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgICAgICA8c3Bhbj57Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHVzZXIudXNlcm5hbWUpfTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC02IHB5LTIgIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbkVsZW1lbnQgPSAoeyBuYW1lLCBsb2NhdGlvbiB9OiBOYXZFbGVtZW50UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yIHJvdW5kZWQteGwgaG92ZXI6dGV4dC1hY2NlbnQtcGluayAgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkIGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIFwiXG4gICAgICB0bz17bG9jYXRpb259XG4gICAgPlxuICAgICAge25hbWV9XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7IHVzZXIgfTogYW55KSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IHVzZVNvdW5kKCk7XG4gIGNvbnN0IHsgbXV0ZSwgdG9nZ2xlTXV0ZSB9OiBhbnkgPSB2YWx1ZXM7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJweC02IGxnOnB4LTEyIHB5LTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgaGVhZGVyICBiZy1bIzAwMDAwMDM4XVwiPlxuICAgICAgPExvZ28gLz5cblxuICAgICAgPE5hdmlnYXRpb24gdXNlcj17dXNlcn0gbXV0ZT17bXV0ZX0gdG9nZ2xlTXV0ZT17dG9nZ2xlTXV0ZX0gLz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcih3b3JkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHdvcmRbMF0udG9Mb2NhbGVVcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyaW5nKDEpO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuLy8gdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBkZXZlbG9wbWVudCB3ZSBkb24ndCB3YW50IHRvIHJlc3RhcnRcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24gdG8gdGhlIERCIHdpdGggZXZlcnkgY2hhbmdlIGVpdGhlci5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIGRiID0gZ2xvYmFsLl9fZGI7XG59XG5cbmV4cG9ydCB7IGRiIH07XG4iLCAiaW1wb3J0IHsgZGIgfSBmcm9tICcuL2RiLnNlcnZlcic7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5cbnR5cGUgTG9naW5Gb3JtID0ge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyB1c2VybmFtZSB9LFxuICB9KTtcbiAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XG4gIGlmICghaXNDb3JyZWN0UGFzc3dvcmQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB7IGlkOiB1c2VyLmlkLCB1c2VybmFtZSB9O1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHJldHVybiBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldCgndXNlcklkJyk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldCgndXNlcklkJyk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbWydyZWRpcmVjdFRvJywgcmVkaXJlY3RUb11dKTtcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmNvbnN0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVDtcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1NFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0Jyk7XG59XG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnX19zZXNzaW9uJyxcbiAgICAvLyBub3JtYWxseSB5b3Ugd2FudCB0aGlzIHRvIGJlIGBzZWN1cmU6IHRydWVgXG4gICAgLy8gYnV0IHRoYXQgZG9lc24ndCB3b3JrIG9uIGxvY2FsaG9zdCBmb3IgU2FmYXJpXG4gICAgLy8gaHR0cHM6Ly93ZWIuZGV2L3doZW4tdG8tdXNlLWxvY2FsLWh0dHBzL1xuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgIHBhdGg6ICcvJyxcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICB9LFxufSk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbigpO1xuICBzZXNzaW9uLnNldCgndXNlcklkJywgdXNlcklkKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJvdXRlLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBjb25zb2xlLmxvZyhgdXNlcklkIGlzICR7dXNlcklkfWApO1xuICBpZiAodHlwZW9mIHVzZXJJZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIHVzZXJuYW1lOiB0cnVlIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gY2F0Y2gge1xuICAgIHRocm93IGxvZ291dChyZXF1ZXN0KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICByZXR1cm4gcmVkaXJlY3QoJy9sb2dpbicsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IHN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VzKCkge1xuICByZXR1cm4gPHNwYW4+VGhpcyBpcyB0aGUgUGF0aHMgc2VjdGlvbjwvc3Bhbj47XG59XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgRm9ybWF0dGVkSW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2Zvcm1hdHRlZC1pbnB1dCc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgbS0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC0xMiBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTZcIj5TaWduIFVwPC9zcGFuPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFuYSAuLi4gRGFydGggVmFkZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWRlckBkZWF0aHN0YXIuc2l0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIYW5TaG90Rmlyc3RcIlxuICAgICAgICAgICAgdG9nZ2xlU2hvd0hpZGU9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGFjY2VudC1hY2NlbnQtcGlua1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJhZ3JlZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtbC00IHRleHQtbGdcIiBodG1sRm9yPVwiYWdyZWVcIj5cbiAgICAgICAgICAgICAgSSBhZ3JlZSB0byB0aGV7JyAnfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWFjY2VudC1waW5rXCI+VGVybXM8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC03IGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciAgcHktNCBweC04IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgYmctYWNjZW50LXBpbmsgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgXCI+Q3JlYXRlIEFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBmbGV4IGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSB0ZXh0LWFjY2VudC1waW5rIGN1cnNvci1wb2ludGVyXCI+TG9naW48L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmludGVyZmFjZSBJUHJvcHMge1xuICBodG1sRm9yOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIGF1dG9Db21wbGV0ZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgdG9nZ2xlU2hvd0hpZGU/OiBib29sZWFuO1xuICBoYXNFcnJvcj86IGJvb2xlYW47XG4gIGVycm9yTWVzc2FnZT86IHN0cmluZztcbiAgb25DaGFuZ2U/OiBhbnk7XG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybWF0dGVkSW5wdXQoe1xuICBodG1sRm9yLFxuICBsYWJlbCxcbiAgaWQsXG4gIGF1dG9Db21wbGV0ZSxcbiAgbmFtZSxcbiAgdHlwZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHRvZ2dsZVNob3dIaWRlID0gZmFsc2UsXG4gIGhhc0Vycm9yID0gZmFsc2UsXG4gIGVycm9yTWVzc2FnZSA9ICdJbnZhbGlkIEVtYWlsJyxcbiAgb25DaGFuZ2UsXG4gIGRlZmF1bHRWYWx1ZSxcbn06IElQcm9wcykge1xuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGhhc0Vycm9yKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTgwIG1iLTYgIGZsZXgtY29sXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj17aHRtbEZvcn1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC14bCBtYi0xXCJcbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCB3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXNvbGlkICAke1xuICAgICAgICAgIGVycm9yID8gJ2JvcmRlci1yZWQtNDAwJyA6ICdib3JkZXItZ3JheS02MDAnXG4gICAgICAgIH0gZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSAgcm91bmRlZC1sZyBob3ZlcjpzaGFkb3ctMnhsIHJlbGF0aXZlYH1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHR5cGU9e1xuICAgICAgICAgICAgdG9nZ2xlU2hvd0hpZGUgJiYgc2hvd1Bhc3N3b3JkXG4gICAgICAgICAgICAgID8gJ3RleHQnXG4gICAgICAgICAgICAgIDogdG9nZ2xlU2hvd0hpZGUgJiYgIXNob3dQYXNzd29yZFxuICAgICAgICAgICAgICA/ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgOiB0eXBlXG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBweC0yIHB5LTQgdGV4dC14bCAgYmctdHJhbnNwYXJlbnQgcm91bmRlZC1sZyBob3ZlcjpzaGFkb3ctMnhsIHJlbGF0aXZlICBcIlxuICAgICAgICAvPlxuICAgICAgICB7dG9nZ2xlU2hvd0hpZGUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgIGluc2V0LXktMCByaWdodC0wIHByLTMgZmxleCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTAuNSB3LTggaC04IHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyICAke1xuICAgICAgICAgICAgICAgIHNob3dQYXNzd29yZCA/ICdiZy13aGl0ZScgOiAnYmctdHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgIH0gcm91bmRlZC1mdWxsIGB9XG4gICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17c2hvd1Bhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzc3dvcmQoKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/ICdcdUQ4M0RcdURFNDknIDogJ1x1RDgzRFx1REU0OCd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBteS0yIHRleHQtbWQgdGV4dC1yZWQtNDAwXCI+e2Vycm9yTWVzc2FnZX08L3NwYW4+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnfi9jb21wb25lbnRzL21haW4tY29udGVudCc7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCB0b3AsXG4gICAgIzFhMWExYSxcbiAgICAjMTkxOTFhLFxuICAgICMxOTE5MWEsXG4gICAgIzE4MTgxOSxcbiAgICAjMTcxODE5LFxuICAgICMxOTFlMjQsXG4gICAgIzFiMjQzMCxcbiAgICAjMWUyYTNjLFxuICAgICMyZDM3NTksXG4gICAgIzQ2NDE3MyxcbiAgICAjNmE0OThhLFxuICAgICM5MzRkOWFcbiAgKWA7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxNYWluQ29udGVudCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvbWFpbi1jb250ZW50LmNzcyc7XG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnfi9jb21wb25lbnRzL3NlYXJjaCc7XG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGUgfV07XG59O1xuZXhwb3J0IGNvbnN0IE1haW5Db250ZW50ID0gKCkgPT4ge1xuICBjb25zdCB0YWxrVG9UaGVTZXJ2ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zZXJ2ZXJjb2RlJyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgIC8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc2VydmVyLWNvZGUnKS50aGVuKChyZXMpID0+IHtcbiAgICAvLyB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb3JtID0gKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXRbMF0udmFsdWU7XG4gICAgY29uc29sZS5sb2codGV4dCk7XG4gIH07XG5cbiAgY29uc3QgTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzUgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LWZ1bGwgbXktNiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBcIj5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAnIDAgMCA4MHB4IHJnYigxOTIgMjE5IDI1NSAvIDMwJSksIDAgMCAzMnB4IHJnYig2NSAxMjAgMjU1IC8gMTUlKScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtWzRyZW1dIGxlYWRpbmctWzQuNXJlbV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaGFyZWQga25vd2xlZGdlIDxiciAvPiBmcm9tIHRoZSB0b3AgbWluZHMgaW4gdGhlIHByb2dyYW1taW5nXG4gICAgICAgICAgICAgIGluZHVzdHJ5XG4gICAgICAgICAgICAgIDxiciAvPiAtIGFsbCBmb3IgZnJlZSFcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC0zeGwgIHB0LXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctNy8xMSBteS02ICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1sYXJnZXIgbGVhZGluZy03XCI+XG4gICAgICAgICAgICAgIFdoZXRoZXIgYSBiZWdpbm5lciwgbGVhcm5pbmcgdG8gY29kZSwgb3IgYSBzZWFzb25lZCB2ZXRlcmFuLiBUYWtlXG4gICAgICAgICAgICAgIGEgdG91ciBiZWxvdyB0byBnZXQgc3RhcnRlZCFcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBwYi1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LWZ1bGwgbXktMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgZmxleCBiZy1hY2NlbnQtcGluayBweS00IHB4LTE2IHJvdW5kZWQtbGcgdGV4dC1sZyBib3JkZXItNCBvcGFjaXR5LTkwIGJvcmRlci10cmFuc3BhcmVudCBmb250LWJvbGQgZm9jdXMtd2l0aGluOmJvcmRlci00IGZvY3VzLXdpdGhpbjpib3JkZXItd2hpdGUgZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwICBob3Zlcjpib3JkZXItNCBob3Zlcjpib3JkZXItd2hpdGUgaG92ZXI6b3BhY2l0eS0xMDAgICBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17YXN5bmMgKCkgPT4gdGFsa1RvVGhlU2VydmVyKCl9PlRha2UgYSBUb3VyPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb3BpY0NvbnRhaW5lciA9ICh7IHRleHQgfTogYW55KSA9PiB7XG4gICAgY29uc3QgbGluayA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgdG89e2AuL2xlYXJuLyR7bGlua31gfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBcbiAgICAgICAgcmVsYXRpdmUgbWItNCBtci00IGJsb2NrIGgtYXV0byB3LWF1dG8gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIHB4LTZcbiAgICAgICAgcHktMyB0cmFuc2l0aW9uIHRleHQtcHJpbWFyeSBiZy1zZWNvbmRhcnkgYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IFxuICAgICAgICBiZy1bIzcxNzE3MTU0XSBob3ZlcjpicmlnaHRuZXNzLTE1MCBob3Zlcjpib3JkZXItMiBob3Zlcjpib3JkZXItYWNjZW50LXBpbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDaG9vc2VBVG9waWMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBwLThcIj5PciBjaG9vc2UgYSB0b3BpYzwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi1mdWxsIC1tYi00IC1tci00IGZsZXggZmxleC13cmFwIGxnOmNvbC1zcGFuLTEwXCI+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJSZWFjdFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJSZW1peFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKYXZhU2NyaXB0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkNTU1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJOZXh0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlRlc3RpbmdcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiSmVzdFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJBQ0lEXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFJpZ2h0Q29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMi81IHB4LTE2XCI+XG4gICAgICAgIDxTZWFyY2ggaGFuZGxlRm9ybT17aGFuZGxlRm9ybX0gLz5cbiAgICAgICAgPENob29zZUFUb3BpYyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IHB5LTggcHgtNiBsZzpweC0xMiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgIDxMZWZ0Q29udGVudCAvPlxuICAgICAgPFJpZ2h0Q29udGVudCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50O1xuIiwgImltcG9ydCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmludGVyZmFjZSBJUHJvcHMge1xuICBoYW5kbGVGb3JtOiBGdW5jdGlvbjtcbiAgc2l6ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgdG9waWMgPSBmb3JtLmdldCgndG9waWMnKTtcbiAgY29uc29sZS5sb2codG9waWMpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgMTIwMDAwMCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goeyBoYW5kbGVGb3JtLCBzaXplID0gJ2xhcmdlJyB9OiBJUHJvcHMpIHtcbiAgY29uc3Qgc2VhcmNoUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBsYWJlbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgdG9waWMgPSBldmVudC50YXJnZXRbMF0udmFsdWU7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0b3BpYyA9IHRvcGljLnRvTG93ZXJDYXNlKCk7XG4gICAgbmF2aWdhdGUoYC4uL2xlYXJuLyR7dG9waWN9YCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICB9XG5cbiAgLy8gaGFuZGxlIHdoYXQgaGFwcGVucyBvbiBrZXkgcHJlc3NcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSAmJiBldmVudC5rZXkgPT09ICdrJykge1xuICAgICAgaWYgKHNlYXJjaFJlZi5jdXJyZW50ICE9PSBudWxsICYmIGxhYmVsUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgc2VhcmNoUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgbGFiZWxSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZUtleVByZXNzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1haW4tc2VhcmNoIGZsZXggIHJlbGF0aXZlYH0+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4ICR7XG4gICAgICAgICAgc2l6ZSA9PT0gJ2xhcmdlJyA/ICd3LWZ1bGwnIDogc2l6ZSA9PT0gJ21lZGl1bScgPyAndy0zLzQnIDogJ3ctMS8yJ1xuICAgICAgICB9YH1cbiAgICAgICAgLy8gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVGb3JtKGUpfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtsYWJlbFJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4XG4gICAgICAgICAgICAgc206ZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdCBzcGFjZS14LTMgcHgtNCBzaGFkb3ctc20gcm91bmRlZC1sZyB0ZXh0LXNsYXRlLTgwMCBkYXJrOnJpbmctMCBkYXJrOnRleHQtc2xhdGUtODAwIGRhcms6aGlnaGxpZ2h0LXdoaXRlLzUgIFxuICAgICAgICAgICAgICB6LTUwIGJvcmRlci00IGJvcmRlci13aGl0ZSBiZy13aGl0ZSBmb2N1cy13aXRoaW46Ym9yZGVyLTQgZm9jdXMtd2l0aGluOmJvcmRlci1zb2xpZCBmb2N1cy13aXRoaW46Ym9yZGVyLWFjY2VudC1ncmVlblxuICAgICAgICAgICAgICAke3NpemUgPT09ICdsYXJnZScgPyAnaC0xNicgOiBzaXplID09PSAnbWVkaXVtJyA/ICdoLTEyJyA6ICdoLTgnfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgei0xMDBgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cdUQ4M0RcdUREMEQ8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3NlYXJjaFJlZn1cbiAgICAgICAgICAgIG5hbWU9XCJ0b3BpY1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhIHRvcGljXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB3LWZ1bGwgYmctdHJhbnNwYXJlbnQgYm9yZGVyOltub25lXSBmb2N1czpbb3V0bGluZTogMCwgYm9yZGVyOiBub25lXSBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDxrYmRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2FucyBmb250LXNlbWlib2xkIGRhcms6dGV4dC1zbGF0ZS01MDBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB0ZXh0LXhsXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFiYnJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDb21tYW5kXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tdW5kZXJsaW5lIHRleHQtc2xhdGUtMzAwIGRhcms6dGV4dC1zbGF0ZS01MDBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgdGV4dC14bFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBcdTIzMThcbiAgICAgICAgICAgIDwvYWJicj5cbiAgICAgICAgICAgIEtcbiAgICAgICAgICA8L2tiZD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGhpZGRlbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBsaW5rcyBhcyBtYWluQ29udGVudExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL21haW4tY29udGVudCc7XG5pbXBvcnQgUG9wdWxhclRvcGljcyBmcm9tICd+L2NvbXBvbmVudHMvcG9wdWxhci10b3BpY3MnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICd+L2NvbXBvbmVudHMvc2VhcmNoJztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhcm4oKSB7XG4gIGNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPVxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAnbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgYm90dG9tLCAjMmUyMjNlLCAjMjcyMzNiLCAjMjIyMzM2LCAjMWYyMzMxLCAjMWUyMjJiLCAjMWUyMjJhLCAjMWUyMTI5LCAjMWUyMTI4LCAjMWYyMTJiLCAjMjIyMTJlLCAjMjYyMTMwLCAjMmEyMDMxKSc7XG4gICAgLy8gJ2xpbmVhci1ncmFkaWVudCh0byB0b3AsICMxYTFhMWEsICMxOTE5MWEsICMxOTE5MWEsICMxODE4MTksICMxNzE4MTksICMxNjE3MTksICMxNTE3MWEsICMxNTE2MWEsICMxNTE1MWIsICMxNjE0MWIsICMxODEzMWMsICMxYTExMWIpJztcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY29udGVudC1jZW50ZXIgcHgtNiBsZzpweC0xNCBteS0xMCBpdGVtcy1zdGFydFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggc2l6ZT1cIm1lZGl1bVwiIGhhbmRsZUZvcm09eyhlOiBhbnkpID0+IGNvbnNvbGUubG9nKGUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00XCI+XG4gICAgICAgICAgICA8UG9wdWxhclRvcGljcyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbXItNDBcIj5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNFwiPlxuICAgICAgICAgIDxQb3B1bGFyVG9waWNzIC8+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgZGF0YSA9IFtcbiAgeyBuYW1lOiAnU3ZlbHRlJywgaWQ6IDAgfSxcbiAgeyBuYW1lOiAnUmVhY3QnLCBpZDogMSB9LFxuICB7IG5hbWU6ICdUYWlsd2luZCcsIGlkOiAyIH0sXG4gIHsgbmFtZTogJ1J1c3QnLCBpZDogMyB9LFxuICB7IG5hbWU6ICdQeXRob24nLCBpZDogNCB9LFxuICB7IG5hbWU6ICdSZW1peCcsIGlkOiA1IH0sXG4gIHsgbmFtZTogJ0NTUycsIGlkOiA2IH0sXG4gIHsgbmFtZTogJ05vZGUnLCBpZDogNyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9wdWxhclRvcGljcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXItMTAgdy04MFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHNpemUgdGV4dC0yeGxcIj5Qb3B1bGFyIFRvcGljczwvc3Bhbj5cbiAgICAgIDw+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZVRpdGxlID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG15LTFcIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AuLyR7bG93ZXJDYXNlVGl0bGV9YH0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggY3Vyc29yLXBvaW50ZXIgcHgtNSBweS0yIFxuICAgICAgICAgICAgICAgIHJvdW5kZWQteGxcbiAgICAgICAgICAgICAgICBiZy1zZWNvbmRhcnkgYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IFxuICAgICAgICBiZy1bIzcxNzE3MTU0XSBob3ZlcjpicmlnaHRuZXNzLTE1MCBob3Zlcjpib3JkZXItMiBob3Zlcjpib3JkZXItYWNjZW50LXBpbmtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtbGcgXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IE91dGxldCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IFRvcGljQ2FyZCwgeyBiYXNlQXJ0aWNsZSB9IGZyb20gJ34vY29tcG9uZW50cy90b3BpYy1jYXJkJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgdXNlU291bmQgfSBmcm9tICd+L2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtcz8udG9waWNJZCA/PyAnJztcblxuICByZXR1cm4ganNvbih7IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFybigpIHtcbiAgY29uc3QgeyBuYW1lIH0gPSB1c2VMb2FkZXJEYXRhPERhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTZ4bCBtYi0zIGNhcGl0YWxpemVcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0U2hhZG93OlxuICAgICAgICAgICAgICAncmdiYSgxOTIsIDIxOSwgMjU1LCAwLjMpIDBweCAwcHggODBweCwgcmdiYSg2NSwgMTIwLCAyNTUsIDAuMTUpIDBweCAwcHggMzJweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHsvKiBUT0RPOiBNT1ZFIFRIRSBBVURJTyBUT0dHTEUgVE8gVEhFIE5BViAqL31cbiAgICAgICAgey8qIDxzcGFuIG9uQ2xpY2s9e3RvZ2dsZUF1ZGlvfSBjbGFzc05hbWU9XCJtbC0xMiB0ZXh0LTJ4bCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIHttdXRlID8gJ1x1RDgzRFx1REQwNycgOiAnXHVEODNEXHVERDA4J31cbiAgICAgICAgPC9zcGFuPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbnRlbnQtY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE5ld0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL25ldy1jYXJkJztcbmltcG9ydCBUb3BpY0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL3RvcGljLWNhcmQnO1xuaW1wb3J0IHsgdXNlU291bmQgfSBmcm9tICd+L2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnfi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuXG50eXBlIGJvdGhEYXRhID0ge1xuICAvLyBvZiB0eXBlIExvYWRlckRhdGFcbiAgZGF0YTogTG9hZGVyRGF0YTtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBhcnRpY2xlUG9zdHM6IEFycmF5PHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGF1dGhvck9mUG9zdDogc3RyaW5nO1xuICAgIGF1dGhvclR3aXR0ZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcG9pbnRzPzogbnVtYmVyIHwgbnVsbDtcbiAgICB0b3BpYzogc3RyaW5nO1xuICB9Pjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtcy50b3BpY0lkO1xuXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgYXJ0aWNsZVBvc3RzOiBhd2FpdCBkYi5wb3N0LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRvcGljOiBuYW1lLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfTtcbiAgcmV0dXJuIGpzb24oeyBkYXRhLCBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0YSwgbmFtZSB9ID0gdXNlTG9hZGVyRGF0YTxib3RoRGF0YT4oKTtcblxuICBjb25zdCBmb3JtYXR0ZWRUb3BpY05hbWUgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIobmFtZSk7XG5cbiAgY29uc3QgeyBtdXRlIH06IGFueSA9IHVzZVNvdW5kKCk7XG5cbiAgY29uc3QgeyBhcnRpY2xlUG9zdHMgfSA9IGRhdGE7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LVs2MDBweF1cIj5cbiAgICAgICAge2FydGljbGVQb3N0cy5sZW5ndGggPj0gMSAmJlxuICAgICAgICAgIGFydGljbGVQb3N0c1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IChhLnBvaW50cyEgPCBiLnBvaW50cyEgPyAxIDogLTEpKVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmFuayA9IGluZGV4ICsgMTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUb3BpY0NhcmRcbiAgICAgICAgICAgICAgICAgIG11dGU9e211dGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yT2ZQb3N0fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBsaW5rPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgIHVwdm90ZXM9e2l0ZW0ucG9pbnRzID8/IDB9XG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICByYW5rPXtyYW5rfVxuICAgICAgICAgICAgICAgICAgdHdpdHRlckhhbmRsZT17aXRlbS5hdXRob3JUd2l0dGVyID8/ICcnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICB7YXJ0aWNsZVBvc3RzLmxlbmd0aCA/IChcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleFwiIHRvPXt7IHBhdGhuYW1lOiAnLi9uZXcnIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbnRlbnQtY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBiZy1bI2ZmZmZmZjBhXSByb3VuZGVkLWxnICBwLTggYm9yZGVyLVsxcHhdIGJvcmRlci1zb2xpZCBib3JkZXItc3RvbmUtNDAwIHctZnVsbCBmbGV4LWNvbCB0ZXh0LXhsIG10LThcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgcHgtNiBteS02IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIExvdmUgYW4gYXJ0aWNsZSB0aGF0IHlvdSBkb24ndCBzZWUgZm9yIHtmb3JtYXR0ZWRUb3BpY05hbWV9P1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIG15LTQgdGV4dC1ncmF5LTMwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgQWRkIGl0IGJlbG93IVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXktNiBweC02IHB5LTIgcm91bmRlZC1sZyBib3JkZXItNCAgIGJvcmRlci1hY2NlbnQtcGluayBiZy1hY2NlbnQtcGluay1iZyB0cmFuc2l0aW9uIGhvdmVyOmJyaWdodG5lc3MtNzVcIj5cbiAgICAgICAgICAgICAgICBBZGQgQXJ0aWNsZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleFwiIHRvPXt7IHBhdGhuYW1lOiAnLi9uZXcnIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGN1cnNvci1kZWZhdWx0IGNvbnRlbnQtY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBiZy1bI2ZmZmZmZjBhXSByb3VuZGVkLWxnICBwLTggYm9yZGVyLVsxcHhdIGJvcmRlci1zb2xpZCBib3JkZXItc3RvbmUtNDAwIHctZnVsbCBmbGV4LWNvbCB0ZXh0LXhsIG10LThcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgcHgtNiBteS02XCI+XG4gICAgICAgICAgICAgICAgXHVEODNEXHVERTE0IE5vIGFydGljbGVzIGZvciB7Zm9ybWF0dGVkVG9waWNOYW1lfSwgeWV0IVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIG15LTRcIj5BZGQgb25lIGJlbG93ITwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS02IHB4LTYgcHktMiByb3VuZGVkLWxnIGJvcmRlci00ICAgYm9yZGVyLWFjY2VudC1waW5rIGJnLWFjY2VudC1waW5rLWJnIHRyYW5zaXRpb24gaG92ZXI6YnJpZ2h0bmVzcy03NVwiPlxuICAgICAgICAgICAgICAgIEFkZCBBcnRpY2xlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTb3VuZCBmcm9tICd1c2Utc291bmQnO1xuaW1wb3J0IHBsb3AgZnJvbSAnLi4vLi4vcHVibGljL3NvdW5kcy9wbG9wLXRyaW1tZWQubXAzJztcblxuZXhwb3J0IGludGVyZmFjZSBiYXNlQXJ0aWNsZSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcjogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG4gIHVwdm90ZXM6IG51bWJlcjtcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIHR3aXR0ZXJIYW5kbGU/OiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgQXJ0aWNsZSBleHRlbmRzIGJhc2VBcnRpY2xlIHtcbiAgcmFuaz86IG51bWJlcjtcbiAgbXV0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9waWNDYXJkKHtcbiAgdGl0bGUsXG4gIGF1dGhvcixcbiAgbGluayA9ICcvJyxcbiAgdXB2b3RlcyxcbiAgcmFuayxcbiAgaW1hZ2UsXG4gIHR3aXR0ZXJIYW5kbGUsXG4gIG11dGUsXG59OiBBcnRpY2xlKSB7XG4gIGNvbnN0IFt1cHZvdGUsIHNldFVwdm90ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkb3dudm90ZSwgc2V0RG93bnZvdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKHVwdm90ZXMgPz8gMCk7XG4gIGNvbnN0IFt2YWxpZExpbmssIHNldFZhbGlkTGlua10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsaW5rRXJyb3IsIHNldExpbmtFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgdm9sdW1lOiBudW1iZXIgPSBtdXRlID8gMCA6IDAuMjtcbiAgY29uc3QgW3Vwdm90ZVNvdW5kXSA9IHVzZVNvdW5kKHBsb3AsIHsgc291bmRFbmFibGVkOiAhbXV0ZSwgdm9sdW1lOiB2b2x1bWUgfSk7XG4gIGNvbnN0IFtkb3dudm90ZVNvdW5kXSA9IHVzZVNvdW5kKHBsb3AsIHtcbiAgICBzb3VuZEVuYWJsZWQ6ICFtdXRlLFxuICAgIHBsYXliYWNrUmF0ZTogMC42NSxcbiAgICB2b2x1bWU6IHZvbHVtZSxcbiAgICAvLyBgaW50ZXJydXB0YCBlbnN1cmVzIHRoYXQgaWYgdGhlIHNvdW5kIHN0YXJ0cyBhZ2FpbiBiZWZvcmUgaXQnc1xuICAgIC8vIGVuZGVkLCBpdCB3aWxsIHRydW5jYXRlIGl0LiBPdGhlcndpc2UsIHRoZSBzb3VuZCBjYW4gb3ZlcmxhcC5cbiAgICBpbnRlcnJ1cHQ6IHRydWUsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxpbmsubGVuZ3RoID4gMTApIHtcbiAgICAgIHNldFZhbGlkTGluayh0cnVlKTtcbiAgICB9XG4gIH0sIFtsaW5rXSk7XG5cbiAgY29uc3QgaGFuZGxlVXB2b3RlID0gKCkgPT4ge1xuICAgIGlmICghdXB2b3RlKSB7XG4gICAgICB1cHZvdGVTb3VuZCgpO1xuXG4gICAgICBzZXRVcHZvdGUodHJ1ZSk7XG4gICAgICBkb3dudm90ZSAmJiBzZXREb3dudm90ZShmYWxzZSk7XG5cbiAgICAgIGlmIChkb3dudm90ZSkge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiArIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VXB2b3RlKGZhbHNlKTtcbiAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvd252b3RlID0gKCkgPT4ge1xuICAgIGlmICghZG93bnZvdGUpIHtcbiAgICAgIGRvd252b3RlU291bmQoKTtcblxuICAgICAgc2V0RG93bnZvdGUodHJ1ZSk7XG4gICAgICB1cHZvdGUgJiYgc2V0VXB2b3RlKGZhbHNlKTtcbiAgICAgIGlmICh1cHZvdGUpIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgLSAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERvd252b3RlKGZhbHNlKTtcbiAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvcm1hdHRlZE51bWJlciA9IEludGwuTnVtYmVyRm9ybWF0KCdlbi11cycsIHtcbiAgICBub3RhdGlvbjogJ2NvbXBhY3QnLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSxcbiAgfSkuZm9ybWF0KGNvdW50KTtcblxuICBjb25zdCBMaW5rVG9BcnRpY2xlID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkTGluayA/IChcbiAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICkgOiAoXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldExpbmtFcnJvcih0cnVlKX0+e2NoaWxkcmVufTwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgRXJyb3JQb3B1cCA9IChlcnJvcjogYW55KSA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMaW5rRXJyb3IoZmFsc2UpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTcwMCBhYnNvbHV0ZSB3LTMwIGJnLWJsYWNrIG1sLTEwIG10LTQgJHtcbiAgICAgICAgICBlcnJvciA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMaW5rRXJyb3IoZmFsc2UpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHB4LTIgcHktMC4yNSB0ZXh0LXhsIHRvcC0wIHJpZ2h0LTAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgeFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctMzAgYmctZXJyb3ItYmcgdGV4dC1lcnJvciBwLTEwIGJnLWFjY2VudC1lcnJvci1iZyB0ZXh0LWFjY2VudC1lcnJvciAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtZXJyb3Igei0xMFwiPlxuICAgICAgICAgIExpbmsgaXMgaW52YWxpZCBcdUQ4M0RcdURFMTRcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZmxleCB3LTMwIG15LTggc2hhZG93LWxnICAgcm91bmRlZC0yeGwgIGJvcmRlci0yIGJvcmRlci1zb2xpZCBiZy1bIzZjNmM2YzEwXSAgIHB5LTggcmVsYXRpdmUgXG4gICAgICBcbiAgICAgICR7XG4gICAgICAgIHVwdm90ZVxuICAgICAgICAgID8gJ2JvcmRlci1ncmVlbi00MDAgc2hhZG93LVsjOGVmNzhlNzJdJ1xuICAgICAgICAgIDogZG93bnZvdGVcbiAgICAgICAgICA/ICdib3JkZXItcmVkLTQwMCBzaGFkb3ctWyNkYzcwNzA2NV0nXG4gICAgICAgICAgOiAnIHNoYWRvdy1zdG9uZS05MDAgYm9yZGVyLVsjNmM2YzZjMjRdJ1xuICAgICAgfVxuICAgICAgXG4gICAgICBgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC0xMCBtYi1hdXRvIHRleHQtM3hsXCI+XG4gICAgICAgICAge3Jhbmt9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGlua1RvQXJ0aWNsZT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lIGRlY29yYXRpb24td2hpdGUgZGVjb3JhdGlvbi0gaG92ZXI6dGV4dC1hY2NlbnQtcGluayBtYi00IHRleHQtMnhsIG1heC13LW1kIGZvbnQtYm9sZCBcIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTGlua1RvQXJ0aWNsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXktOFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQteGwgXCI+e2F1dGhvcn08L3NwYW4+XG4gICAgICAgICAgICB7dHdpdHRlckhhbmRsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXI6YmctWyMxZGEwZjI1OF0gbWwtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTEgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tLyR7dHdpdHRlckhhbmRsZX1gfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0cHggXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMxREExRjJcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMi4yMyA1LjkyNGE4LjIxMiA4LjIxMiAwIDAxLTIuMzU3LjY0NiA0LjExNSA0LjExNSAwIDAwMS44MDQtMi4yNyA4LjIyMSA4LjIyMSAwIDAxLTIuNjA2Ljk5NiA0LjEwMyA0LjEwMyAwIDAwLTYuOTkxIDMuNzQyIDExLjY0NyAxMS42NDcgMCAwMS04LjQ1Ny00LjI4NyA0LjA4NyA0LjA4NyAwIDAwLS41NTYgMi4wNjMgNC4xIDQuMSAwIDAwMS44MjUgMy40MTUgNC4wOSA0LjA5IDAgMDEtMS44NTktLjUxM3YuMDUyYTQuMTA0IDQuMTA0IDAgMDAzLjI5MiA0LjAyMyA0LjA5OSA0LjA5OSAwIDAxLTEuODUzLjA3IDQuMTEgNC4xMSAwIDAwMy44MzMgMi44NSA4LjIzNiA4LjIzNiAwIDAxLTUuMDk2IDEuNzU2IDguMzMgOC4zMyAwIDAxLS45NzktLjA1NyAxMS42MTcgMTEuNjE3IDAgMDA2LjI5IDEuODQzYzcuNTQ3IDAgMTEuNjc1LTYuMjUyIDExLjY3NS0xMS42NzUgMC0uMTc4LS4wMDQtLjM1NS0uMDEyLS41MzFhOC4yOTggOC4yOTggMCAwMDIuMDQ3LTIuMTIzelwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTggIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItd2hpdGUgcHgtNCBweS0yIG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6YmctemluYy05MDAgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICA8TGlua1RvQXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBSZWFkIEFydGljbGVcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGlua1RvQXJ0aWNsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktMSBteC0xMCByb3VuZGVkLTJ4bCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIG1sLWF1dG9cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcHZvdGV9XG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgIHVwdm90ZSA/ICdzdHJva2UtZ3JlZW4tNDAwJyA6ICdzdHJva2Utd2hpdGUnXG4gICAgICAgICAgICAgIH0gaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gYH1cbiAgICAgICAgICAgICAgd2lkdGg9XCI0NFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ0XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiNiAxNSAxMiA5IDE4IDE1XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xIHRleHQtbGcgZm9udC1ib2xkICR7XG4gICAgICAgICAgICAgIHVwdm90ZVxuICAgICAgICAgICAgICAgID8gJ3RleHQtZ3JlZW4tNDAwJ1xuICAgICAgICAgICAgICAgIDogZG93bnZvdGVcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXJlZC01MDAnXG4gICAgICAgICAgICAgICAgOiAndGV4dC13aGl0ZSdcbiAgICAgICAgICAgIH0gIGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvdW50ID4gOTk5ID8gZm9ybWF0dGVkTnVtYmVyIDogY291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd252b3RlfVxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBkb3dudm90ZSA/ICdzdHJva2UtcmVkLTUwMCcgOiAnc3Ryb2tlLXdoaXRlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIHdpZHRoPVwiNDRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNDRcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjYgOSAxMiAxNSAxOCA5XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaW5rRXJyb3IgJiYgPEVycm9yUG9wdXAgZXJyb3I9e2xpbmtFcnJvcn0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyByZWRpcmVjdCwganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJztcbmltcG9ydCB7IHVzZUFjdGlvbkRhdGEsIHVzZVBhcmFtcyB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuXG50eXBlIEFjdGlvbkRhdGEgPSB7XG4gIGZvcm1FcnJvcj86IHN0cmluZztcbiAgZmllbGRzPzogeyB1cmw/OiBzdHJpbmc7IHRpdGxlPzogc3RyaW5nOyBhdXRob3JPZlBvc3Q/OiBzdHJpbmcgfTtcbiAgZmllbGRFcnJvcnM/OiB7IHVybD86IHN0cmluZzsgdGl0bGU/OiBzdHJpbmc7IGF1dGhvck9mUG9zdD86IHN0cmluZyB9O1xufTtcblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBBY3Rpb25EYXRhKSA9PiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXJsKHVybDogc3RyaW5nKSB7XG4gIGxldCByZWdFeCA9XG4gICAgL15odHRwcz86XFwvXFwvKD86d3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsxLDI1Nn1cXC5bYS16QS1aMC05KCldezEsNn1cXGIoWy1hLXpBLVowLTkoKUA6JV9cXCsufiM/Ji8vPV0qKSQvZ207XG5cbiAgY29uc3QgaXNWYWxpZCA9IHJlZ0V4LnRlc3QodXJsKTtcbiAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgcmV0dXJuICdVcmwgbXVzdCBiZSB2YWxpZCc7XG4gIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGl0bGUodGl0bGU6IHN0cmluZykge1xuICBpZiAodGl0bGUubGVuZ3RoIDwgNCkge1xuICAgIHJldHVybiAnVGl0bGUgbXVzdCBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXV0aG9yKGF1dGhvcjogc3RyaW5nKSB7XG4gIGlmIChhdXRob3IubGVuZ3RoIDwgNCkge1xuICAgIHJldHVybiAnQXV0aG9yIG11c3QgYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzJztcbiAgfVxufVxuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcblxuICBsZXQgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc29sZS5sb2coZm9ybSk7XG4gIGxldCB0b3BpYyA9IGZvcm0uZ2V0KCd0b3BpYycpO1xuICBsZXQgdXJsID0gZm9ybS5nZXQoJ3VybCcpO1xuICBsZXQgdGl0bGUgPSBmb3JtLmdldCgndGl0bGUnKTtcbiAgbGV0IGF1dGhvck9mUG9zdCA9IGZvcm0uZ2V0KCdhdXRob3InKTtcblxuICAvLyBWYWxpZGF0aW9uIGhlcmUgZm9yIGZvcm1hdCBvZiBmaWVsZHM6XG4gIGlmIChcbiAgICB0eXBlb2YgdG9waWMgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdGl0bGUgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIGF1dGhvck9mUG9zdCAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZm9ybUVycm9yOiAnRm9ybSBzdWJtaXR0ZWQgaW5jb3JyZWN0bHknLFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGZpZWxkRXJyb3JzID0ge1xuICAgIHVybDogdmFsaWRhdGVVcmwodXJsKSxcbiAgICB0aXRsZTogdmFsaWRhdGVUaXRsZSh0aXRsZSksXG4gICAgYXV0aG9yT2ZQb3N0OiB2YWxpZGF0ZUF1dGhvcihhdXRob3JPZlBvc3QpLFxuICB9O1xuICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSkge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkczogeyB1cmwsIHRpdGxlLCBhdXRob3JPZlBvc3QgfSB9KTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRpb24gZm9yIGV4aXN0aW5nIHVybCBpbiBkYXRhYmFzZVxuICBjb25zdCBleGlzdHMgPSBhd2FpdCBkYi5wb3N0LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHRvcGljOiB0b3BpYyxcbiAgICAgIHVybDogdXJsLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIFRoZSB0b3BpY3MgaW4gdGhlIGRhdGFiYXNlIGFyZSBsb3dlcmNhc2VcbiAgdG9waWMgPSB0b3BpYy50b0xvd2VyQ2FzZSgpO1xuXG4gIGNvbnN0IGZpZWxkcyA9IHsgdG9waWMsIHVybCwgdGl0bGUsIGF1dGhvck9mUG9zdCB9O1xuXG4gIGlmICghZXhpc3RzKSB7XG4gICAgYXdhaXQgZGIucG9zdC5jcmVhdGUoe1xuICAgICAgZGF0YTogeyAuLi5maWVsZHMsIHBvc3RlcklkOiB1c2VySWQgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVkaXJlY3QoYC9sZWFybi8ke3RvcGljfWApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQXJ0aWNsZSBhbHJlYWR5IGV4aXN0cycpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXcoKSB7XG4gIGxldCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuICBjb25zb2xlLmxvZyhhY3Rpb25EYXRhKTtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGxldCB0b3BpYyA9IHBhcmFtcy50b3BpY0lkO1xuICB0b3BpYyA9IHRvcGljICYmIHRvcGljWzBdLnRvVXBwZXJDYXNlKCkgKyB0b3BpYy5zdWJzdHJpbmcoMSk7XG5cbiAgaW50ZXJmYWNlIElGb3JtSW5wdXQge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICAvLyB2YWx1ZTogc3RyaW5nO1xuICAgIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIEZvcm1JbnB1dCh7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICB0eXBlLFxuICAgIGRlZmF1bHRWYWx1ZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgfTogSUZvcm1JbnB1dCkge1xuICAgIGNvbnN0IGVycm9yID0gISFkZWZhdWx0VmFsdWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9e2BiZy10cmFuc3BhcmVudCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTYwMCAgcm91bmRlZCB3LWZ1bGwgcHktNCBweC0zIHRleHQtZ3JheS0yMDAgbGVhZGluZy10aWdodCBcbiAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIFxuICAgICAgICAgIGZvY3VzOmJvcmRlci13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcbiAgICAgICAgXG4gICAgICAgICR7ZXJyb3IgJiYgJ2JvcmRlci1yZWQtNjAwJ31gfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFdlIG5lZWQgdG8gc2hvdyB0aGUgd29yZCBhcyBjYXBpdGFsaXplZFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhzXCI+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJzaGFkb3ctbWQgcm91bmRlZCBwdC00IHBiLTggbWItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggcG9pbnRlci1ldmVudHMtbm9uZSAgdGV4dC1sZyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJ0b3BpY1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRvcGljXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNoYWRvdyBib3JkZXItMiBiZy10cmFuc3BhcmVudCBib3JkZXItZ3JheS02MDAgdGV4dC1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgIHJvdW5kZWQgdy1mdWxsIHB5LTQgcHgtMyAgbGVhZGluZy10aWdodFxuICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgZm9jdXM6Ym9yZGVyLXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZVxuICAgICAgICAgICAgICAgICR7dG9waWMgJiYgJyBjdXJzb3Itbm90LWFsbG93ZWQnfSBgfVxuICAgICAgICAgICAgICBpZD1cInRvcGljXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dG9waWN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ISF0b3BpY31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICBodG1sRm9yPVwidXJsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVVJMXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udXJsfVxuICAgICAgICAgICAgICBpZD1cInVybFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL292ZXJyZWFjdGVkLmlvL1wiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnVybCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCAgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgICAgXHUyNzU3XHVGRTBGIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXJsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHBvaW50ZXItZXZlbnRzLW5vbmUgIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICBodG1sRm9yPVwidGl0bGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBcnRpY2xlIFRpdGxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy50aXRsZX1cbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaHkgUmVhY3QgaG9va3MgYXJlIGF3ZXNvbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udGl0bGUgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgICAgXHUyNzU3XHVGRTBGIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICBodG1sRm9yPVwiYXV0aG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQXV0aG9yXG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5hdXRob3JPZlBvc3R9XG4gICAgICAgICAgICAgIGlkPVwiYXV0aG9yXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYXV0aG9yXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYW4gQWJyYW1vdlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5hdXRob3JPZlBvc3QgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgICAgXHUyNzU3XHVGRTBGIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uYXV0aG9yT2ZQb3N0fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWFjY2VudC1waW5rIHctZnVsbCBob3ZlcjpicmlnaHRuZXNzLTExMCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFjY2VudC1waW5rIGhvdmVyOmJvcmRlci13aGl0ZSBhY3RpdmU6Ym9yZGVyLXdoaXRlIHRleHQtd2hpdGUgZm9udC1ib2xkIG10LTggcHktNCBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci13aGl0ZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXQgQXJ0aWNsZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldygpIHtcbiAgcmV0dXJuIDxzcGFuPnNhZGJhaW91bmFvc2lkbmFvc2RuYXNvbiBORVc8L3NwYW4+O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0yMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LTN4bFwiPlxuICAgICAgICBDaG9vc2UgYSB0b3BpYyBcdTJCMDVcdUZFMEZcbiAgICAgIDwvc3Bhbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICd+L2NvbXBvbmVudHMvZm9ybWF0dGVkLWlucHV0JztcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uLCBsb2dpbiB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmssIHVzZUFjdGlvbkRhdGEsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZTogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHVzZXJuYW1lICE9PSAnc3RyaW5nJyB8fCB1c2VybmFtZS5sZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuIGBVc2VybmFtZXMgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZDogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHBhc3N3b3JkICE9PSAnc3RyaW5nJyB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGBQYXNzd29yZHMgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmaWVsZEVycm9ycz86IHtcbiAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgfTtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZHM/OiB7XG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIH07XG59O1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpID0+IHtcbiAgcmV0dXJuIGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoJ3Bhc3N3b3JkJyk/LnRvU3RyaW5nKCk7XG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoJ3VzZXJuYW1lJyk/LnRvU3RyaW5nKCk7XG5cbiAgY29uc3QgZmllbGRzID0geyB1c2VybmFtZSwgcGFzc3dvcmQgfTtcblxuICBjb25zb2xlLmxvZyhmaWVsZHMpO1xuXG4gIGlmICh0eXBlb2YgdXNlcm5hbWUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwYXNzd29yZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICB1c2VybmFtZTogdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSksXG4gICAgcGFzc3dvcmQ6IHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpLFxuICB9O1xuICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSlcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuXG4gIGNvbnNvbGUubG9nKHVzZXIpO1xuXG4gIGNvbnNvbGUubG9nKCF1c2VyKTtcblxuICAvLyBUaGF0IGlzbid0IGEgdmFsaWQgYWNjb3VudCB3aXRoIGNyZWRlbnRpYWxzIHN1cHBsaWVkXG4gIGlmICghdXNlcikge1xuICAgIGNvbnNvbGUubG9nKCdFeGVjdXRpbmcgaGVyZScpO1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIGZpZWxkcyxcbiAgICAgIGZvcm1FcnJvcjogJ1VzZXJuYW1lLyBwYXNzd29yZCBpcyBpbmNvcnJlY3QnLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gaXQgaXMgYSB2YWxpZCB1c2VyXG4gIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCAnLycpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XG4gIC8vIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC0xMiBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTEwXCI+TG9naW48L3NwYW4+XG4gICAgICAgIHtkYXRhPy5mb3JtRXJyb3IgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBteS00IGJnLVsjZWY0NDQ0NDVdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItcmVkLTUwMCAgXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAgICB7ZGF0YT8uZm9ybUVycm9yID8/ICdJbnZhbGlkIEVtYWlsIG9yIHBhc3N3b3JkJ31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICBuYW1lPVwicmVkaXJlY3RUb1wiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3RUbycpID8/IHVuZGVmaW5lZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXJ0aCBTaWRpdXNcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhPy5maWVsZHM/LnVzZXJuYW1lfVxuICAgICAgICAgICAgaGFzRXJyb3I9eyEhZGF0YT8uZmllbGRFcnJvcnM/LnVzZXJuYW1lfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiaW52YWxpZCB1c2VybmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFuU2hvdEZpcnN0XCJcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlPXt0cnVlfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhPy5maWVsZHM/LnBhc3N3b3JkfVxuICAgICAgICAgICAgaGFzRXJyb3I9eyEhZGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiaW52YWxpZCBwYXNzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBtci1hdXRvIHRleHQtbmV1dHJhbC0zMDAgdGV4dC1tZCBob3Zlcjp0ZXh0LWFjY2VudC1waW5rIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0RXJyb3IodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS03IGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciAgcHktNCBweC04IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgYmctYWNjZW50LXBpbmsgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItd2hpdGUgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTQgZmxleCB3LWZ1bGwganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1hY2NlbnQtcGluayBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidhODYzM2EyMCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtM1hDUFBNNVguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNSQk1TRDJTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkJPNzRGV08uanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUJFMk1EVVhILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay02TkJRS0FCSi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC01U0szUjNZSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVENHMlFCNk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VMkM1VVdQRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4nOnsnaWQnOidyb3V0ZXMvbGVhcm4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbGVhcm4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4tVFFWU0IyNEMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRDRzJRQjZNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVTJDNVVXUEcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuLyR0b3BpY0lkJzp7J2lkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkJywncGFyZW50SWQnOidyb3V0ZXMvbGVhcm4nLCdwYXRoJzonOnRvcGljSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQtNFc1VVhMM0wuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuLyR0b3BpY0lkL2luZGV4Jzp7J2lkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgtUklOU1E2RlIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTM2Sk4yNDRZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNk5CUUtBQkouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3Jzp7J2lkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldycsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkJywncGF0aCc6J25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXctSERPTks3SEUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdLNTZDWkpHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzZKTjI0NFkuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4Jzp7J2lkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgtVlpMSlJaQ1cuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi9pbmRleCc6eydpZCc6J3JvdXRlcy9sZWFybi9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuL2luZGV4LTU0WDNLWkdELmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tSldQMk1DWFouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdLNTZDWkpHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRVJEUVNaUFMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VMkM1VVdQRy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXRocy9pbmRleCc6eydpZCc6J3JvdXRlcy9wYXRocy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwYXRocycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGF0aHMvaW5kZXgtN0I0VUhNQVguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVUyQzVVV1BHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaWdudXAnOnsnaWQnOidyb3V0ZXMvc2lnbnVwJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NpZ251cCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaWdudXAtSElRUVBQUVQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVSRFFTWlBTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVTJDNVVXUEcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1BODYzM0EyMC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsWUFBdUI7OztBQ0R2QixxQkFBb0I7QUFDcEIseUJBQXdCO0FBQ3hCLG9CQUFtQjtBQUNuQixzQkFBcUM7OztBQ0hyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsbUJBQTRCO0FBQzVCLG9CQUErQjtBQUVoQix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxNQUFJLFNBQVMsa0NBQ1gsb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNsQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFRTztBQUNQLG1CQUFvRDs7Ozs7O0FDVHBELG9CQUEr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
