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
var tailwind_default = "/build/_assets/tailwind-4KGIJJ7T.css";

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
  console.log(user);
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
    console.log(user);
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
  action: () => action,
  default: () => Index2,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node");
var import_react15 = require("@remix-run/react");
var import_react_router_dom3 = require("react-router-dom");

// app/components/topic-card.tsx
var import_react13 = require("@remix-run/react");
var import_react14 = require("react");
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
  mute,
  getPostUrl,
  topic,
  id
}) {
  const [upvote, setUpvote] = (0, import_react14.useState)(false);
  const [downvote, setDownvote] = (0, import_react14.useState)(false);
  const [count, setCount] = (0, import_react14.useState)(upvotes ?? 0);
  const [validLink, setValidLink] = (0, import_react14.useState)(false);
  const [linkError, setLinkError] = (0, import_react14.useState)(false);
  const volume = mute ? 0 : 0.2;
  const [upvoteSound] = (0, import_use_sound.default)(plop_trimmed_default, { soundEnabled: !mute, volume });
  const [downvoteSound] = (0, import_use_sound.default)(plop_trimmed_default, {
    soundEnabled: !mute,
    playbackRate: 0.65,
    volume,
    interrupt: true
  });
  (0, import_react14.useEffect)(() => {
    if (link.length > 10) {
      setValidLink(true);
    }
  }, [link]);
  const handleUpvote = () => {
    getPostUrl(link);
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
    (0, import_react14.useEffect)(() => {
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
  }, "Read Article"))))), /* @__PURE__ */ React.createElement(import_react13.Form, {
    className: "flex py-1 mx-10 rounded-2xl flex-col items-center justify-center  ml-auto",
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: id
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    value: "upvote",
    name: "_action"
  }, /* @__PURE__ */ React.createElement("svg", {
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
  }, count > 999 ? formattedNumber : count), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    value: "downvote",
    name: "_action"
  }, /* @__PURE__ */ React.createElement("svg", {
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
  }))))), linkError && /* @__PURE__ */ React.createElement(ErrorPopup, {
    error: linkError
  }));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId/index.tsx
var action = async ({ request }) => {
  const formData = await request.formData();
  const { id, _action } = Object.fromEntries(formData);
  console.log(_action);
  if (_action === "downvote") {
    console.log(`Disliked post with id ${id}`);
  }
  if (_action === "upvote") {
    console.log(`Liked post with id: ${id}`);
  }
  return null;
};
var loader3 = async ({ params }) => {
  const name = params.topicId;
  const data2 = {
    articlePosts: await db.post.findMany({
      where: {
        topicName: name
      }
    })
  };
  return (0, import_node4.json)({ data: data2, name });
};
function Index2() {
  const { data: data2, name } = (0, import_react15.useLoaderData)();
  const formattedTopicName = capitalizeFirstLetter(name);
  const { mute } = useSound();
  function getPostUrl(url) {
    console.log(url);
  }
  const { articlePosts } = data2;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-[600px]"
  }, articlePosts.length >= 1 && articlePosts.sort((a, b) => a.points < b.points ? 1 : -1).map((item, index) => {
    const rank = index + 1;
    return /* @__PURE__ */ React.createElement(TopicCard, {
      topic: name,
      getPostUrl,
      mute,
      author: item.authorOfPost,
      title: item.title,
      link: item.url,
      upvotes: item.points ?? 0,
      id: item.id,
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
  action: () => action2,
  default: () => New
});
var import_node5 = require("@remix-run/node");
var import_react16 = require("@remix-run/react");
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
var action2 = async ({ request }) => {
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
  let actionData = (0, import_react16.useActionData)();
  console.log(actionData);
  const params = (0, import_react16.useParams)();
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
    className: "mt-20 flex justify-center items-center text-4xl"
  }, "Want to learn something new?"), /* @__PURE__ */ React.createElement("span", {
    className: "mt-20 flex justify-center items-center text-3xl"
  }, "Choose a topic \u2B05\uFE0F"));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => Login2,
  links: () => links8
});
var import_react17 = require("react");
var import_node6 = require("@remix-run/node");
var import_react18 = require("@remix-run/react");
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
var action3 = async ({ request }) => {
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
  const data2 = (0, import_react18.useActionData)();
  const [error, setError] = (0, import_react17.useState)(false);
  const [searchParams] = (0, import_react18.useSearchParams)();
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
  }, "Don't have an account?", /* @__PURE__ */ React.createElement(import_react18.Link, {
    to: "/signup"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "ml-1 text-accent-pink cursor-pointer"
  }, "Sign Up")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "c0d1e3cf", "entry": { "module": "/build/entry.client-XWTGT3GO.js", "imports": ["/build/_shared/chunk-EMMBIL3A.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-JWEK3FRA.js", "imports": ["/build/_shared/chunk-6NBQKABJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-GZLYMZST.js", "imports": ["/build/_shared/chunk-T6JBTPEP.js", "/build/_shared/chunk-U2C5UWPG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn": { "id": "routes/learn", "parentId": "root", "path": "learn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn-X7XKEA6U.js", "imports": ["/build/_shared/chunk-T6JBTPEP.js", "/build/_shared/chunk-U2C5UWPG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId": { "id": "routes/learn/$topicId", "parentId": "routes/learn", "path": ":topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId-AOZ6GLOC.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/index": { "id": "routes/learn/$topicId/index", "parentId": "routes/learn/$topicId", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/index-G7GFDW3U.js", "imports": ["/build/_shared/chunk-36JN244Y.js", "/build/_shared/chunk-6NBQKABJ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new": { "id": "routes/learn/$topicId/new", "parentId": "routes/learn/$topicId", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new-2QMJXL7K.js", "imports": ["/build/_shared/chunk-GK56CZJG.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new/index": { "id": "routes/learn/$topicId/new/index", "parentId": "routes/learn/$topicId/new", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new/index-VZLJRZCW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/index": { "id": "routes/learn/index", "parentId": "routes/learn", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/index-GWWLYZXI.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-R3PTBQCG.js", "imports": ["/build/_shared/chunk-GK56CZJG.js", "/build/_shared/chunk-ERDQSZPS.js", "/build/_shared/chunk-U2C5UWPG.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths/index": { "id": "routes/paths/index", "parentId": "root", "path": "paths", "index": true, "caseSensitive": void 0, "module": "/build/routes/paths/index-7B4UHMAX.js", "imports": ["/build/_shared/chunk-U2C5UWPG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup": { "id": "routes/signup", "parentId": "root", "path": "signup", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/signup-CLBGKYF2.js", "imports": ["/build/_shared/chunk-ERDQSZPS.js", "/build/_shared/chunk-U2C5UWPG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C0D1E3CF.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29udGV4dHMvc291bmQtY29udGV4dC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbW90ZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsICIuLi9hcHAvaGVscGVyL2hlbHBlci50cyIsICIuLi9hcHAvdXRpbHMvZGIuc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcGF0aHMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9zaWdudXAudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1hdHRlZC1pbnB1dC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRlbnQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NlYXJjaC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9wb3B1bGFyLXRvcGljcy50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3RvcGljLWNhcmQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9leHByZXNzJztcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICAnL2J1aWxkJyxcbiAgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYy9idWlsZCcsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6ICcxeScgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycsIHsgbWF4QWdlOiAnMWgnIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oJ3RpbnknKSk7XG5cbmFwcC5hbGwoXG4gICcqJyxcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmFwcC5nZXQoJy9zZXJ2ZXJjb2RlJywgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdTRVJWRVIgQ09ERSBFWEVDVVRFRCEnKTtcbiAgcmVzLnNlbmQoJ0JPT00nKTtcbn0pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFx1RDgzRFx1REU4MCBsaXZlIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcGF0aHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9zaWdudXAudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGF0aHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BhdGhzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBhdGhzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2lnbnVwXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaWdudXBcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2lnbnVwXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9sZWFyblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibGVhcm5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuLyR0b3BpY0lkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiBcIjp0b3BpY0lkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ld1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfVxuICB9OyIsICJpbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsganNvbiwgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90YWlsd2luZC5jc3MnO1xuaW1wb3J0IFNvdW5kUHJvdmlkZXIgZnJvbSAnLi9jb250ZXh0cy9zb3VuZC1jb250ZXh0JztcbmltcG9ydCBNb3RkIGZyb20gJy4vY29tcG9uZW50cy9tb3RkJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJy4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6ICd1dGYtOCcsXG4gIHRpdGxlOiAnU2FwaWVudGlhJyxcbiAgdmlld3BvcnQ6ICd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyxcbn0pO1xuXG50eXBlIFVzZXIgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcbiAgY29uc29sZS5sb2codXNlcik7XG4gIHJldHVybiBqc29uKHVzZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxVc2VyPigpO1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS40JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNvdW5kUHJvdmlkZXI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TW90ZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8SGVhZGVyIHVzZXI9e2RhdGF9IC8+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgICAgIDwvU291bmRQcm92aWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIFNvdW5kQ29udGV4dFN0YXRlID0ge1xuICBtdXRlOiBib29sZWFuO1xuICB0b2dnbGVNdXRlOiBGdW5jdGlvbjtcbn07XG5cbmNvbnN0IFNvdW5kQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U291bmRDb250ZXh0U3RhdGUgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNvdW5kKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChTb3VuZENvbnRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb3VuZFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogYW55KSB7XG4gIGNvbnN0IFttdXRlLCBzZXRNdXRlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlJykgPz8gJ2ZhbHNlJztcbiAgICBzZXRNdXRlKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gSlNPTi5wYXJzZShyZXN1bHQpIDogZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAvLyByZXRyaWV2ZSBpbiBsb2NhbFN0b3JhZ2VcbiAgLy8gICBjb25zdCBpc011dGVkU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211dGUnKTtcblxuICAvLyAgIGNvbnN0IGlzTXV0ZWQgPSAhIWlzTXV0ZWRTdHJpbmc7XG5cbiAgLy8gICBzZXRNdXRlKGlzTXV0ZWQpO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gRXZlcnl0aW1lIHRoZSB2YWx1ZSBvZiBtdXRlIGNoYW5nZXMgb3ZlcnJpZGUgdGhlIGxvY2FsIHN0b3JhZ2UgdmFsdWVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXV0ZScsIEpTT04uc3RyaW5naWZ5KG11dGUpKTtcbiAgfSwgW211dGVdKTtcblxuICBmdW5jdGlvbiB0b2dnbGVNdXRlKCkge1xuICAgIGNvbnNvbGUubG9nKGB0b2dnbGluZyBmcm9tIG11dGUgPSAke211dGV9YCk7XG4gICAgc2V0TXV0ZSgocHJldikgPT4gIXByZXYpO1xuICB9XG5cbiAgY29uc3QgdmFsdWVzID0geyBtdXRlLCB0b2dnbGVNdXRlIH07XG4gIHJldHVybiAoXG4gICAgPFNvdW5kQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWVzfT57Y2hpbGRyZW59PC9Tb3VuZENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iLCAiZXhwb3J0IGNvbnN0IE1vdGQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZGFyay1tb2RlLWJnIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcHgtMjAgIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWNjZW50LXBpbmsgdy1mdWxsIHRleHQtY2VudGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBXZSBzdGFuZCB3aXRoIFVrcmFpbmUgXHVEODNDXHVEREZBXHVEODNDXHVEREU2XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmF6b21mb3J1a3JhaW5lLm9yZy9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC0yIGN1cnNvci1wb2ludGVyIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnktdGV4dCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRG9uYXRlIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW90ZDtcbiIsICJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL2hlYWRlci5jc3MnO1xuaW1wb3J0IHsganNvbiwgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgU291bmRDb250ZXh0U3RhdGUsIHVzZVNvdW5kIH0gZnJvbSAnfi9jb250ZXh0cy9zb3VuZC1jb250ZXh0JztcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJztcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJ34vaGVscGVyL2hlbHBlcic7XG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGUgfV07XG59O1xuXG5jb25zdCBMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHNwYWNlLXgtMSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgPExpbmsgdG89eycvJ30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCAgXCI+U2FwaWVudGlhPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gY29uc3QgTGFuZ3VhZ2VTZWxlY3RvciA9ICgpID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4vLyAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMS41IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuLy8gICAgICAgICA8c3ZnXG4vLyAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1sYW5ndWFnZSBoLTYgdy02IHN0cm9rZS13aGl0ZVwiXG4vLyAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4vLyAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuLy8gICAgICAgICAgIGZpbGw9XCJub25lXCJcbi8vICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuLy8gICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuLy8gICAgICAgICAgIDxwYXRoIGQ9XCJNNCA1aDdcIiAvPlxuLy8gICAgICAgICAgIDxwYXRoIGQ9XCJNOSAzdjJjMCA0LjQxOCAtMi4yMzkgOCAtNSA4XCIgLz5cbi8vICAgICAgICAgICA8cGF0aCBkPVwiTTUgOWMtLjAwMyAyLjE0NCAyLjk1MiAzLjkwOCA2LjcgNFwiIC8+XG4vLyAgICAgICAgICAgPHBhdGggZD1cIk0xMiAyMGw0IC05bDQgOVwiIC8+XG4vLyAgICAgICAgICAgPHBhdGggZD1cIk0xOS4xIDE4aC02LjJcIiAvPlxuLy8gICAgICAgICA8L3N2Zz5cbi8vICAgICAgICAgPHNwYW4+RW5nbGlzaDwvc3Bhbj5cbi8vICAgICAgIDwvYnV0dG9uPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxudHlwZSBOYXZFbGVtZW50UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IEdpdGh1YiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBweC01IHB5LTIgcm91bmRlZC14bCAgaG92ZXI6dGV4dC1hY2NlbnQtcGluayAgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkIGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIFwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZWlsbHlqb2Rvbm5lbGwvc2FwaWVudGlhXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvY3VzLXdpdGhpbjpvcGFjaXR5LTEwMCBvcGFjaXR5LTgwXCJcbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPXsnMzBweCd9XG4gICAgICAgICAgaGVpZ2h0PXsnMzBweCd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGZpbGwtcHJpbWFyeS10ZXh0IFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk02NCA1LjEwM2MtMzMuMzQ3IDAtNjAuMzg4IDI3LjAzNS02MC4zODggNjAuMzg4IDAgMjYuNjgyIDE3LjMwMyA0OS4zMTcgNDEuMjk3IDU3LjMwMyAzLjAxNy41NiA0LjEyNS0xLjMxIDQuMTI1LTIuOTA1IDAtMS40NC0uMDU2LTYuMTk3LS4wODItMTEuMjQzLTE2LjggMy42NTMtMjAuMzQ1LTcuMTI1LTIwLjM0NS03LjEyNS0yLjc0Ny02Ljk4LTYuNzA1LTguODM2LTYuNzA1LTguODM2LTUuNDgtMy43NDguNDEzLTMuNjcuNDEzLTMuNjcgNi4wNjMuNDI1IDkuMjU3IDYuMjIzIDkuMjU3IDYuMjIzIDUuMzg2IDkuMjMgMTQuMTI3IDYuNTYyIDE3LjU3MyA1LjAyLjU0Mi0zLjkwMyAyLjEwNy02LjU2OCAzLjgzNC04LjA3Ni0xMy40MTMtMS41MjUtMjcuNTE0LTYuNzA0LTI3LjUxNC0yOS44NDMgMC02LjU5MyAyLjM2LTExLjk4IDYuMjIzLTE2LjIxLS42MjgtMS41Mi0yLjY5NS03LjY2Mi41ODQtMTUuOTggMCAwIDUuMDctMS42MjMgMTYuNjEgNi4xOUM1My43IDM1IDU4Ljg2NyAzNC4zMjcgNjQgMzQuMzA0YzUuMTMuMDIzIDEwLjMuNjk0IDE1LjEyNyAyLjAzMyAxMS41MjYtNy44MTMgMTYuNTktNi4xOSAxNi41OS02LjE5IDMuMjg3IDguMzE3IDEuMjIgMTQuNDYuNTkzIDE1Ljk4IDMuODcyIDQuMjMgNi4yMTUgOS42MTcgNi4yMTUgMTYuMjEgMCAyMy4xOTQtMTQuMTI3IDI4LjMtMjcuNTc0IDI5Ljc5NiAyLjE2NyAxLjg3NCA0LjA5NyA1LjU1IDQuMDk3IDExLjE4MyAwIDguMDgtLjA3IDE0LjU4My0uMDcgMTYuNTcyIDAgMS42MDcgMS4wODggMy40OSA0LjE0OCAyLjg5NyAyMy45OC03Ljk5NCA0MS4yNjMtMzAuNjIyIDQxLjI2My01Ny4yOTRDMTI0LjM4OCAzMi4xNCA5Ny4zNSA1LjEwNCA2NCA1LjEwNHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjYuNDg0IDkxLjgwNmMtLjEzMy4zLS42MDUuMzktMS4wMzUuMTg1LS40NC0uMTk2LS42ODUtLjYwNS0uNTQzLS45MDYuMTMtLjMxLjYwMy0uMzk1IDEuMDQtLjE4OC40NC4xOTcuNjkuNjEuNTM3Ljkxem0yLjQ0NiAyLjcyOWMtLjI4Ny4yNjctLjg1LjE0My0xLjIzMi0uMjgtLjM5Ni0uNDItLjQ3LS45ODMtLjE3Ny0xLjI1NC4yOTgtLjI2Ni44NDQtLjE0IDEuMjQuMjguMzk0LjQyNi40NzIuOTg0LjE3IDEuMjU1ek0zMS4zMTIgOTguMDEyYy0uMzcuMjU4LS45NzYuMDE3LTEuMzUtLjUyLS4zNy0uNTM4LS4zNy0xLjE4My4wMS0xLjQ0LjM3My0uMjU4Ljk3LS4wMjUgMS4zNS41MDcuMzY4LjU0NS4zNjggMS4xOS0uMDEgMS40NTJ6bTMuMjYxIDMuMzYxYy0uMzMuMzY1LTEuMDM2LjI2Ny0xLjU1Mi0uMjMtLjUyNy0uNDg3LS42NzQtMS4xOC0uMzQzLTEuNTQ0LjMzNi0uMzY2IDEuMDQ1LS4yNjQgMS41NjQuMjMuNTI3LjQ4Ni42ODYgMS4xOC4zMzMgMS41NDN6bTQuNSAxLjk1MWMtLjE0Ny40NzMtLjgyNS42ODgtMS41MS40ODYtLjY4My0uMjA3LTEuMTMtLjc2LS45OS0xLjIzOC4xNC0uNDc3LjgyMy0uNyAxLjUxMi0uNDg1LjY4My4yMDYgMS4xMy43NTYuOTg4IDEuMjM3em00Ljk0My4zNjFjLjAxNy40OTgtLjU2My45MS0xLjI4LjkyLS43MjMuMDE3LTEuMzA4LS4zODctMS4zMTUtLjg3NyAwLS41MDMuNTY4LS45MSAxLjI5LS45MjQuNzE3LS4wMTMgMS4zMDYuMzg3IDEuMzA2Ljg4em00LjU5OC0uNzgyYy4wODYuNDg1LS40MTMuOTg0LTEuMTI2IDEuMTE3LS43LjEzLTEuMzUtLjE3Mi0xLjQ0LS42NTMtLjA4Ni0uNDk4LjQyMi0uOTk3IDEuMTIyLTEuMTI2LjcxNC0uMTIzIDEuMzU0LjE3IDEuNDQ0LjY2M3ptMCAwXCI+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgbXV0ZSwgdG9nZ2xlTXV0ZSwgdXNlciB9OiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIlRvcGljc1wiIGxvY2F0aW9uPVwiL2xlYXJuXCIgLz5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiUGF0aHNcIiBsb2NhdGlvbj1cIi9wYXRoc1wiIC8+XG4gICAgICB7LyogPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJMb2dpblwiIGxvY2F0aW9uPVwiL2xvZ2luXCIgLz4gKi99XG4gICAgICA8R2l0aHViIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50ICBhY3RpdmU6Ym9yZGVyLXN0b25lLTIwMCBob3Zlcjpib3JkZXItc3RvbmUtMjAwIHB4LTQgcHktWy4yNXJlbV0gcm91bmRlZFwiPlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RvZ2dsZU11dGV9IGNsYXNzTmFtZT1cInRleHQtMnhsIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICB7bXV0ZSA/ICdcdUQ4M0RcdUREMDcnIDogJ1x1RDgzRFx1REQwOCd9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPExhbmd1YWdlU2VsZWN0b3IgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNiBweS0yICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwbGFjZS1pdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUvNjAgIHJvdW5kZWQtbWQgZHJvcC1zaGFkb3ctbWQgIGZvY3VzLXdpdGhpbjo6Ymctc2xhdGUtNTAvNSBmb2N1cy13aXRoaW46OmJvcmRlci13aGl0ZSBob3ZlcjpiZy1zbGF0ZS01MC81IGhvdmVyOmJvcmRlci13aGl0ZSBcIj5cbiAgICAgICAgICAgIDxzcGFuPntjYXBpdGFsaXplRmlyc3RMZXR0ZXIodXNlci51c2VybmFtZSl9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTYgcHktMiAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlLzYwICByb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kICBmb2N1cy13aXRoaW46OmJnLXNsYXRlLTUwLzUgZm9jdXMtd2l0aGluOjpib3JkZXItd2hpdGUgaG92ZXI6Ymctc2xhdGUtNTAvNSBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgICAgICAgIDxzcGFuPkxvZ2luPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uRWxlbWVudCA9ICh7IG5hbWUsIGxvY2F0aW9uIH06IE5hdkVsZW1lbnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIgcm91bmRlZC14bCBob3Zlcjp0ZXh0LWFjY2VudC1waW5rICBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGZvbnQtc2VtaWJvbGQgZm9jdXMtd2l0aGluOnRleHQtYWNjZW50LXBpbmsgXCJcbiAgICAgIHRvPXtsb2NhdGlvbn1cbiAgICA+XG4gICAgICB7bmFtZX1cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHsgdXNlciB9OiBhbnkpID0+IHtcbiAgY29uc3QgdmFsdWVzID0gdXNlU291bmQoKTtcbiAgY29uc3QgeyBtdXRlLCB0b2dnbGVNdXRlIH06IGFueSA9IHZhbHVlcztcbiAgY29uc29sZS5sb2codXNlcik7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJweC02IGxnOnB4LTEyIHB5LTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgaGVhZGVyICBiZy1bIzAwMDAwMDM4XVwiPlxuICAgICAgPExvZ28gLz5cblxuICAgICAgPE5hdmlnYXRpb24gdXNlcj17dXNlcn0gbXV0ZT17bXV0ZX0gdG9nZ2xlTXV0ZT17dG9nZ2xlTXV0ZX0gLz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcih3b3JkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHdvcmRbMF0udG9Mb2NhbGVVcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyaW5nKDEpO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuLy8gdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBkZXZlbG9wbWVudCB3ZSBkb24ndCB3YW50IHRvIHJlc3RhcnRcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24gdG8gdGhlIERCIHdpdGggZXZlcnkgY2hhbmdlIGVpdGhlci5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIGRiID0gZ2xvYmFsLl9fZGI7XG59XG5cbmV4cG9ydCB7IGRiIH07XG4iLCAiaW1wb3J0IHsgZGIgfSBmcm9tICcuL2RiLnNlcnZlcic7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5cbnR5cGUgTG9naW5Gb3JtID0ge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyB1c2VybmFtZSB9LFxuICB9KTtcbiAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XG4gIGlmICghaXNDb3JyZWN0UGFzc3dvcmQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB7IGlkOiB1c2VyLmlkLCB1c2VybmFtZSB9O1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHJldHVybiBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldCgndXNlcklkJyk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldCgndXNlcklkJyk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbWydyZWRpcmVjdFRvJywgcmVkaXJlY3RUb11dKTtcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmNvbnN0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVDtcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1NFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0Jyk7XG59XG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnX19zZXNzaW9uJyxcbiAgICAvLyBub3JtYWxseSB5b3Ugd2FudCB0aGlzIHRvIGJlIGBzZWN1cmU6IHRydWVgXG4gICAgLy8gYnV0IHRoYXQgZG9lc24ndCB3b3JrIG9uIGxvY2FsaG9zdCBmb3IgU2FmYXJpXG4gICAgLy8gaHR0cHM6Ly93ZWIuZGV2L3doZW4tdG8tdXNlLWxvY2FsLWh0dHBzL1xuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgIHBhdGg6ICcvJyxcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICB9LFxufSk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbigpO1xuICBzZXNzaW9uLnNldCgndXNlcklkJywgdXNlcklkKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJvdXRlLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBjb25zb2xlLmxvZyhgdXNlcklkIGlzICR7dXNlcklkfWApO1xuXG4gIGlmICh0eXBlb2YgdXNlcklkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgdXNlcm5hbWU6IHRydWUgfSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICByZXR1cm4gdXNlcjtcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbG9nb3V0KHJlcXVlc3QpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XG4gIHJldHVybiByZWRpcmVjdCgnL2xvZ2luJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZXMoKSB7XG4gIHJldHVybiA8c3Bhbj5UaGlzIGlzIHRoZSBQYXRocyBzZWN0aW9uPC9zcGFuPjtcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICd+L2NvbXBvbmVudHMvZm9ybWF0dGVkLWlucHV0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBtLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTEyIFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNlwiPlNpZ24gVXA8L3NwYW4+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW5hIC4uLiBEYXJ0aCBWYWRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZhZGVyQGRlYXRoc3Rhci5zaXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhhblNob3RGaXJzdFwiXG4gICAgICAgICAgICB0b2dnbGVTaG93SGlkZT17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgYWNjZW50LWFjY2VudC1waW5rXCJcbiAgICAgICAgICAgICAgbmFtZT1cImFncmVlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1sZ1wiIGh0bWxGb3I9XCJhZ3JlZVwiPlxuICAgICAgICAgICAgICBJIGFncmVlIHRvIHRoZXsnICd9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtYWNjZW50LXBpbmtcIj5UZXJtczwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTcgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyICBweS00IHB4LTggYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci10cmFuc3BhcmVudCBiZy1hY2NlbnQtcGluayByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci13aGl0ZSBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBcIj5DcmVhdGUgQWNjb3VudDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTggdy1mdWxsIGZsZXgganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1xuICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQtYWNjZW50LXBpbmsgY3Vyc29yLXBvaW50ZXJcIj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGh0bWxGb3I6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgYXV0b0NvbXBsZXRlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICB0b2dnbGVTaG93SGlkZT86IGJvb2xlYW47XG4gIGhhc0Vycm9yPzogYm9vbGVhbjtcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xuICBvbkNoYW5nZT86IGFueTtcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtYXR0ZWRJbnB1dCh7XG4gIGh0bWxGb3IsXG4gIGxhYmVsLFxuICBpZCxcbiAgYXV0b0NvbXBsZXRlLFxuICBuYW1lLFxuICB0eXBlLFxuICBwbGFjZWhvbGRlcixcbiAgdG9nZ2xlU2hvd0hpZGUgPSBmYWxzZSxcbiAgaGFzRXJyb3IgPSBmYWxzZSxcbiAgZXJyb3JNZXNzYWdlID0gJ0ludmFsaWQgRW1haWwnLFxuICBvbkNoYW5nZSxcbiAgZGVmYXVsdFZhbHVlLFxufTogSVByb3BzKSB7XG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoaGFzRXJyb3IpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctODAgbWItNiAgZmxleC1jb2xcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtodG1sRm9yfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LXhsIG1iLTFcIlxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHctZnVsbCBib3JkZXItMiBib3JkZXItc29saWQgICR7XG4gICAgICAgICAgZXJyb3IgPyAnYm9yZGVyLXJlZC00MDAnIDogJ2JvcmRlci1ncmF5LTYwMCdcbiAgICAgICAgfSBmb2N1cy13aXRoaW46Ym9yZGVyLXdoaXRlICByb3VuZGVkLWxnIGhvdmVyOnNoYWRvdy0yeGwgcmVsYXRpdmVgfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgdHlwZT17XG4gICAgICAgICAgICB0b2dnbGVTaG93SGlkZSAmJiBzaG93UGFzc3dvcmRcbiAgICAgICAgICAgICAgPyAndGV4dCdcbiAgICAgICAgICAgICAgOiB0b2dnbGVTaG93SGlkZSAmJiAhc2hvd1Bhc3N3b3JkXG4gICAgICAgICAgICAgID8gJ3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICA6IHR5cGVcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHB4LTIgcHktNCB0ZXh0LXhsICBiZy10cmFuc3BhcmVudCByb3VuZGVkLWxnIGhvdmVyOnNoYWRvdy0yeGwgcmVsYXRpdmUgIFwiXG4gICAgICAgIC8+XG4gICAgICAgIHt0b2dnbGVTaG93SGlkZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAgaW5zZXQteS0wIHJpZ2h0LTAgcHItMyBmbGV4IGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHAtMC41IHctOCBoLTggdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgICR7XG4gICAgICAgICAgICAgICAgc2hvd1Bhc3N3b3JkID8gJ2JnLXdoaXRlJyA6ICdiZy10cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgfSByb3VuZGVkLWZ1bGwgYH1cbiAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPXtzaG93UGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQYXNzd29yZCgocHJldikgPT4gIXByZXYpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gJ1x1RDgzRFx1REU0OScgOiAnXHVEODNEXHVERTQ4J31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IG15LTIgdGV4dC1tZCB0ZXh0LXJlZC00MDBcIj57ZXJyb3JNZXNzYWdlfTwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICd+L2NvbXBvbmVudHMvbWFpbi1jb250ZW50JztcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID1cbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0IHRvcCxcbiAgICAjMWExYTFhLFxuICAgICMxOTE5MWEsXG4gICAgIzE5MTkxYSxcbiAgICAjMTgxODE5LFxuICAgICMxNzE4MTksXG4gICAgIzE5MWUyNCxcbiAgICAjMWIyNDMwLFxuICAgICMxZTJhM2MsXG4gICAgIzJkMzc1OSxcbiAgICAjNDY0MTczLFxuICAgICM2YTQ5OGEsXG4gICAgIzkzNGQ5YVxuICApYDtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS40JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE1haW5Db250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9tYWluLWNvbnRlbnQuY3NzJztcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICd+L2NvbXBvbmVudHMvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHRhbGtUb1RoZVNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NlcnZlcmNvZGUnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgLy8gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zZXJ2ZXItY29kZScpLnRoZW4oKHJlcykgPT4ge1xuICAgIC8vIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvcm0gPSAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldFswXS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgfTtcblxuICBjb25zdCBMZWZ0Q29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNSBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1mdWxsIHB0LXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctZnVsbCBteS02IFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIFwiPlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdGV4dFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgICcgMCAwIDgwcHggcmdiKDE5MiAyMTkgMjU1IC8gMzAlKSwgMCAwIDMycHggcmdiKDY1IDEyMCAyNTUgLyAxNSUpJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1bNHJlbV0gbGVhZGluZy1bNC41cmVtXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNoYXJlZCBrbm93bGVkZ2UgPGJyIC8+IGZyb20gdGhlIHRvcCBtaW5kcyBpbiB0aGUgcHJvZ3JhbW1pbmdcbiAgICAgICAgICAgICAgaW5kdXN0cnlcbiAgICAgICAgICAgICAgPGJyIC8+IC0gYWxsIGZvciBmcmVlIVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LTN4bCAgcHQtcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy03LzExIG15LTYgIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LWxhcmdlciBsZWFkaW5nLTdcIj5cbiAgICAgICAgICAgICAgV2hldGhlciBhIGJlZ2lubmVyLCBsZWFybmluZyB0byBjb2RlLCBvciBhIHNlYXNvbmVkIHZldGVyYW4uIFRha2VcbiAgICAgICAgICAgICAgYSB0b3VyIGJlbG93IHRvIGdldCBzdGFydGVkIVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1mdWxsIHBiLXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctZnVsbCBteS0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBmbGV4IGJnLWFjY2VudC1waW5rIHB5LTQgcHgtMTYgcm91bmRlZC1sZyB0ZXh0LWxnIGJvcmRlci00IG9wYWNpdHktOTAgYm9yZGVyLXRyYW5zcGFyZW50IGZvbnQtYm9sZCBmb2N1cy13aXRoaW46Ym9yZGVyLTQgZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSBmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgIGhvdmVyOmJvcmRlci00IGhvdmVyOmJvcmRlci13aGl0ZSBob3ZlcjpvcGFjaXR5LTEwMCAgIFwiPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXthc3luYyAoKSA9PiB0YWxrVG9UaGVTZXJ2ZXIoKX0+VGFrZSBhIFRvdXI8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ29udGFpbmVyID0gKHsgdGV4dCB9OiBhbnkpID0+IHtcbiAgICBjb25zdCBsaW5rID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17YC4vbGVhcm4vJHtsaW5rfWB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIFxuICAgICAgICByZWxhdGl2ZSBtYi00IG1yLTQgYmxvY2sgaC1hdXRvIHctYXV0byBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgcHgtNlxuICAgICAgICBweS0zIHRyYW5zaXRpb24gdGV4dC1wcmltYXJ5IGJnLXNlY29uZGFyeSBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgXG4gICAgICAgIGJnLVsjNzE3MTcxNTRdIGhvdmVyOmJyaWdodG5lc3MtMTUwIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1hY2NlbnQtcGlua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IENob29zZUFUb3BpYyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHAtOFwiPk9yIGNob29zZSBhIHRvcGljPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgLW1iLTQgLW1yLTQgZmxleCBmbGV4LXdyYXAgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlbWl4XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQ1NTXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIk5leHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiVGVzdGluZ1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKZXN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkFDSURcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0yLzUgcHgtMTZcIj5cbiAgICAgICAgPFNlYXJjaCBoYW5kbGVGb3JtPXtoYW5kbGVGb3JtfSAvPlxuICAgICAgICA8Q2hvb3NlQVRvcGljIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgcHktOCBweC02IGxnOnB4LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPExlZnRDb250ZW50IC8+XG4gICAgICA8UmlnaHRDb250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iLCAiaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGhhbmRsZUZvcm06IEZ1bmN0aW9uO1xuICBzaXplPzogc3RyaW5nO1xufVxuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCB0b3BpYyA9IGZvcm0uZ2V0KCd0b3BpYycpO1xuICBjb25zb2xlLmxvZyh0b3BpYyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9LCAxMjAwMDAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7IGhhbmRsZUZvcm0sIHNpemUgPSAnbGFyZ2UnIH06IElQcm9wcykge1xuICBjb25zdCBzZWFyY2hSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGxhYmVsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6IGFueSkge1xuICAgIGxldCB0b3BpYyA9IGV2ZW50LnRhcmdldFswXS52YWx1ZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvcGljID0gdG9waWMudG9Mb3dlckNhc2UoKTtcbiAgICBuYXZpZ2F0ZShgLi4vbGVhcm4vJHt0b3BpY31gLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gIH1cblxuICAvLyBoYW5kbGUgd2hhdCBoYXBwZW5zIG9uIGtleSBwcmVzc1xuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5tZXRhS2V5ID09PSB0cnVlICYmIGV2ZW50LmtleSA9PT0gJ2snKSB7XG4gICAgICBpZiAoc2VhcmNoUmVmLmN1cnJlbnQgIT09IG51bGwgJiYgbGFiZWxSZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICBzZWFyY2hSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICBsYWJlbFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxuICAgIC8vIHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlS2V5UHJlc3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1zZWFyY2ggZmxleCAgcmVsYXRpdmVgfT5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggJHtcbiAgICAgICAgICBzaXplID09PSAnbGFyZ2UnID8gJ3ctZnVsbCcgOiBzaXplID09PSAnbWVkaXVtJyA/ICd3LTMvNCcgOiAndy0xLzInXG4gICAgICAgIH1gfVxuICAgICAgICAvLyBvblN1Ym1pdD17KGUpID0+IGhhbmRsZUZvcm0oZSl9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e2xhYmVsUmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXhcbiAgICAgICAgICAgICBzbTpmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC1sZWZ0IHNwYWNlLXgtMyBweC00IHNoYWRvdy1zbSByb3VuZGVkLWxnIHRleHQtc2xhdGUtODAwIGRhcms6cmluZy0wIGRhcms6dGV4dC1zbGF0ZS04MDAgZGFyazpoaWdobGlnaHQtd2hpdGUvNSAgXG4gICAgICAgICAgICAgIHotNTAgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIGJnLXdoaXRlIGZvY3VzLXdpdGhpbjpib3JkZXItNCBmb2N1cy13aXRoaW46Ym9yZGVyLXNvbGlkIGZvY3VzLXdpdGhpbjpib3JkZXItYWNjZW50LWdyZWVuXG4gICAgICAgICAgICAgICR7c2l6ZSA9PT0gJ2xhcmdlJyA/ICdoLTE2JyA6IHNpemUgPT09ICdtZWRpdW0nID8gJ2gtMTInIDogJ2gtOCd9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB6LTEwMGB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlx1RDgzRFx1REQwRDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17c2VhcmNoUmVmfVxuICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdG9waWNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHctZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXI6W25vbmVdIGZvY3VzOltvdXRsaW5lOiAwLCBib3JkZXI6IG5vbmVdIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGtiZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWJiclxuICAgICAgICAgICAgICB0aXRsZT1cIkNvbW1hbmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby11bmRlcmxpbmUgdGV4dC1zbGF0ZS0zMDAgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB0ZXh0LXhsXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFx1MjMxOFxuICAgICAgICAgICAgPC9hYmJyPlxuICAgICAgICAgICAgS1xuICAgICAgICAgIDwva2JkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaGlkZGVuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGxpbmtzIGFzIG1haW5Db250ZW50TGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvbWFpbi1jb250ZW50JztcbmltcG9ydCBQb3B1bGFyVG9waWNzIGZyb20gJ34vY29tcG9uZW50cy9wb3B1bGFyLXRvcGljcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFybigpIHtcbiAgY29uc3QgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICdsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICMyZTIyM2UsICMyNzIzM2IsICMyMjIzMzYsICMxZjIzMzEsICMxZTIyMmIsICMxZTIyMmEsICMxZTIxMjksICMxZTIxMjgsICMxZjIxMmIsICMyMjIxMmUsICMyNjIxMzAsICMyYTIwMzEpJztcbiAgICAvLyAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzFhMWExYSwgIzE5MTkxYSwgIzE5MTkxYSwgIzE4MTgxOSwgIzE3MTgxOSwgIzE2MTcxOSwgIzE1MTcxYSwgIzE1MTYxYSwgIzE1MTUxYiwgIzE2MTQxYiwgIzE4MTMxYywgIzFhMTExYiknO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciBweC02IGxnOnB4LTE0IG15LTEwIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPFNlYXJjaCBzaXplPVwibWVkaXVtXCIgaGFuZGxlRm9ybT17KGU6IGFueSkgPT4gY29uc29sZS5sb2coZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cbiAgICAgICAgICAgIDxQb3B1bGFyVG9waWNzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBtci00MFwiPlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00XCI+XG4gICAgICAgICAgPFBvcHVsYXJUb3BpY3MgLz5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBkYXRhID0gW1xuICB7IG5hbWU6ICdTdmVsdGUnLCBpZDogMCB9LFxuICB7IG5hbWU6ICdSZWFjdCcsIGlkOiAxIH0sXG4gIHsgbmFtZTogJ1RhaWx3aW5kJywgaWQ6IDIgfSxcbiAgeyBuYW1lOiAnUnVzdCcsIGlkOiAzIH0sXG4gIHsgbmFtZTogJ1B5dGhvbicsIGlkOiA0IH0sXG4gIHsgbmFtZTogJ1JlbWl4JywgaWQ6IDUgfSxcbiAgeyBuYW1lOiAnQ1NTJywgaWQ6IDYgfSxcbiAgeyBuYW1lOiAnTm9kZScsIGlkOiA3IH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3B1bGFyVG9waWNzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtci0xMCB3LTgwXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgc2l6ZSB0ZXh0LTJ4bFwiPlBvcHVsYXIgVG9waWNzPC9zcGFuPlxuICAgICAgPD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlVGl0bGUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXktMVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz17YC4vJHtsb3dlckNhc2VUaXRsZX1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBjdXJzb3ItcG9pbnRlciBweC01IHB5LTIgXG4gICAgICAgICAgICAgICAgcm91bmRlZC14bFxuICAgICAgICAgICAgICAgIGJnLXNlY29uZGFyeSBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgXG4gICAgICAgIGJnLVsjNzE3MTcxNTRdIGhvdmVyOmJyaWdodG5lc3MtMTUwIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1hY2NlbnQtcGlua1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1sZyBcIj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGpzb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgVG9waWNDYXJkLCB7IGJhc2VBcnRpY2xlIH0gZnJvbSAnfi9jb21wb25lbnRzL3RvcGljLWNhcmQnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyB1c2VTb3VuZCB9IGZyb20gJ34vY29udGV4dHMvc291bmQtY29udGV4dCc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xudHlwZSBEYXRhID0ge1xuICBuYW1lOiBzdHJpbmc7XG59O1xuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBuYW1lID0gcGFyYW1zPy50b3BpY0lkID8/ICcnO1xuXG4gIHJldHVybiBqc29uKHsgbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYXJuKCkge1xuICBjb25zdCB7IG5hbWUgfSA9IHVzZUxvYWRlckRhdGE8RGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNnhsIG1iLTMgY2FwaXRhbGl6ZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRTaGFkb3c6XG4gICAgICAgICAgICAgICdyZ2JhKDE5MiwgMjE5LCAyNTUsIDAuMykgMHB4IDBweCA4MHB4LCByZ2JhKDY1LCAxMjAsIDI1NSwgMC4xNSkgMHB4IDBweCAzMnB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgey8qIFRPRE86IE1PVkUgVEhFIEFVRElPIFRPR0dMRSBUTyBUSEUgTkFWICovfVxuICAgICAgICB7LyogPHNwYW4gb25DbGljaz17dG9nZ2xlQXVkaW99IGNsYXNzTmFtZT1cIm1sLTEyIHRleHQtMnhsIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAge211dGUgPyAnXHVEODNEXHVERDA3JyA6ICdcdUQ4M0RcdUREMDgnfVxuICAgICAgICA8L3NwYW4+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29udGVudC1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE5ld0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL25ldy1jYXJkJztcbmltcG9ydCBUb3BpY0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL3RvcGljLWNhcmQnO1xuaW1wb3J0IHsgdXNlU291bmQgfSBmcm9tICd+L2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnfi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuXG50eXBlIGJvdGhEYXRhID0ge1xuICAvLyBvZiB0eXBlIExvYWRlckRhdGFcbiAgZGF0YTogTG9hZGVyRGF0YTtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBhcnRpY2xlUG9zdHM6IEFycmF5PHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGF1dGhvck9mUG9zdDogc3RyaW5nO1xuICAgIGF1dGhvclR3aXR0ZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcG9pbnRzPzogbnVtYmVyIHwgbnVsbDtcbiAgICB0b3BpY05hbWU6IHN0cmluZztcbiAgfT47XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgeyBpZCwgX2FjdGlvbiB9ID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcblxuICBjb25zb2xlLmxvZyhfYWN0aW9uKTtcbiAgaWYgKF9hY3Rpb24gPT09ICdkb3dudm90ZScpIHtcbiAgICAvLyBTZXQgaW4gREJcbiAgICBjb25zb2xlLmxvZyhgRGlzbGlrZWQgcG9zdCB3aXRoIGlkICR7aWR9YCk7XG4gIH1cbiAgaWYgKF9hY3Rpb24gPT09ICd1cHZvdGUnKSB7XG4gICAgLy8gU2V0IGluIERCXG4gICAgY29uc29sZS5sb2coYExpa2VkIHBvc3Qgd2l0aCBpZDogJHtpZH1gKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtcy50b3BpY0lkO1xuXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgYXJ0aWNsZVBvc3RzOiBhd2FpdCBkYi5wb3N0LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRvcGljTmFtZTogbmFtZSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH07XG4gIHJldHVybiBqc29uKHsgZGF0YSwgbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGRhdGEsIG5hbWUgfSA9IHVzZUxvYWRlckRhdGE8Ym90aERhdGE+KCk7XG5cbiAgY29uc3QgZm9ybWF0dGVkVG9waWNOYW1lID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG5hbWUpO1xuXG4gIGNvbnN0IHsgbXV0ZSB9OiBhbnkgPSB1c2VTb3VuZCgpO1xuXG4gIGZ1bmN0aW9uIGdldFBvc3RVcmwodXJsOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICB9XG5cbiAgY29uc3QgeyBhcnRpY2xlUG9zdHMgfSA9IGRhdGE7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LVs2MDBweF1cIj5cbiAgICAgICAge2FydGljbGVQb3N0cy5sZW5ndGggPj0gMSAmJlxuICAgICAgICAgIGFydGljbGVQb3N0c1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IChhLnBvaW50cyEgPCBiLnBvaW50cyEgPyAxIDogLTEpKVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmFuayA9IGluZGV4ICsgMTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUb3BpY0NhcmRcbiAgICAgICAgICAgICAgICAgIHRvcGljPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgZ2V0UG9zdFVybD17Z2V0UG9zdFVybH1cbiAgICAgICAgICAgICAgICAgIG11dGU9e211dGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yT2ZQb3N0fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBsaW5rPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgIHVwdm90ZXM9e2l0ZW0ucG9pbnRzID8/IDB9XG4gICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgIHJhbms9e3Jhbmt9XG4gICAgICAgICAgICAgICAgICB0d2l0dGVySGFuZGxlPXtpdGVtLmF1dGhvclR3aXR0ZXIgPz8gJyd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuXG4gICAgICAgIHthcnRpY2xlUG9zdHMubGVuZ3RoID8gKFxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4XCIgdG89e3sgcGF0aG5hbWU6ICcuL25ldycgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY29udGVudC1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGJnLVsjZmZmZmZmMGFdIHJvdW5kZWQtbGcgIHAtOCBib3JkZXItWzFweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1zdG9uZS00MDAgdy1mdWxsIGZsZXgtY29sIHRleHQteGwgbXQtOFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBweC02IG15LTYgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgTG92ZSBhbiBhcnRpY2xlIHRoYXQgeW91IGRvbid0IHNlZSBmb3Ige2Zvcm1hdHRlZFRvcGljTmFtZX0/XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgbXktNCB0ZXh0LWdyYXktMzAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICBBZGQgaXQgYmVsb3chXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS02IHB4LTYgcHktMiByb3VuZGVkLWxnIGJvcmRlci00ICAgYm9yZGVyLWFjY2VudC1waW5rIGJnLWFjY2VudC1waW5rLWJnIHRyYW5zaXRpb24gaG92ZXI6YnJpZ2h0bmVzcy03NVwiPlxuICAgICAgICAgICAgICAgIEFkZCBBcnRpY2xlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4XCIgdG89e3sgcGF0aG5hbWU6ICcuL25ldycgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY3Vyc29yLWRlZmF1bHQgY29udGVudC1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGJnLVsjZmZmZmZmMGFdIHJvdW5kZWQtbGcgIHAtOCBib3JkZXItWzFweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1zdG9uZS00MDAgdy1mdWxsIGZsZXgtY29sIHRleHQteGwgbXQtOFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBweC02IG15LTZcIj5cbiAgICAgICAgICAgICAgICBcdUQ4M0RcdURFMTQgTm8gYXJ0aWNsZXMgZm9yIHtmb3JtYXR0ZWRUb3BpY05hbWV9LCB5ZXQhXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgbXktNFwiPkFkZCBvbmUgYmVsb3chPC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm15LTYgcHgtNiBweS0yIHJvdW5kZWQtbGcgYm9yZGVyLTQgICBib3JkZXItYWNjZW50LXBpbmsgYmctYWNjZW50LXBpbmstYmcgdHJhbnNpdGlvbiBob3ZlcjpicmlnaHRuZXNzLTc1XCI+XG4gICAgICAgICAgICAgICAgQWRkIEFydGljbGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBGb3JtIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNvdW5kIGZyb20gJ3VzZS1zb3VuZCc7XG5pbXBvcnQgcGxvcCBmcm9tICcuLi8uLi9wdWJsaWMvc291bmRzL3Bsb3AtdHJpbW1lZC5tcDMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIGJhc2VBcnRpY2xlIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgdXB2b3RlczogbnVtYmVyO1xuICBpbWFnZT86IHN0cmluZztcbiAgdHdpdHRlckhhbmRsZT86IHN0cmluZztcbiAgZ2V0UG9zdFVybDogRnVuY3Rpb247XG4gIHRvcGljOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgQXJ0aWNsZSBleHRlbmRzIGJhc2VBcnRpY2xlIHtcbiAgcmFuaz86IG51bWJlcjtcbiAgbXV0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9waWNDYXJkKHtcbiAgdGl0bGUsXG4gIGF1dGhvcixcbiAgbGluayA9ICcvJyxcbiAgdXB2b3RlcyxcbiAgcmFuayxcbiAgaW1hZ2UsXG4gIHR3aXR0ZXJIYW5kbGUsXG4gIG11dGUsXG4gIGdldFBvc3RVcmwsXG4gIHRvcGljLFxuICBpZCxcbn06IEFydGljbGUpIHtcbiAgY29uc3QgW3Vwdm90ZSwgc2V0VXB2b3RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rvd252b3RlLCBzZXREb3dudm90ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUodXB2b3RlcyA/PyAwKTtcbiAgY29uc3QgW3ZhbGlkTGluaywgc2V0VmFsaWRMaW5rXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xpbmtFcnJvciwgc2V0TGlua0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB2b2x1bWU6IG51bWJlciA9IG11dGUgPyAwIDogMC4yO1xuICBjb25zdCBbdXB2b3RlU291bmRdID0gdXNlU291bmQocGxvcCwgeyBzb3VuZEVuYWJsZWQ6ICFtdXRlLCB2b2x1bWU6IHZvbHVtZSB9KTtcbiAgY29uc3QgW2Rvd252b3RlU291bmRdID0gdXNlU291bmQocGxvcCwge1xuICAgIHNvdW5kRW5hYmxlZDogIW11dGUsXG4gICAgcGxheWJhY2tSYXRlOiAwLjY1LFxuICAgIHZvbHVtZTogdm9sdW1lLFxuICAgIC8vIGBpbnRlcnJ1cHRgIGVuc3VyZXMgdGhhdCBpZiB0aGUgc291bmQgc3RhcnRzIGFnYWluIGJlZm9yZSBpdCdzXG4gICAgLy8gZW5kZWQsIGl0IHdpbGwgdHJ1bmNhdGUgaXQuIE90aGVyd2lzZSwgdGhlIHNvdW5kIGNhbiBvdmVybGFwLlxuICAgIGludGVycnVwdDogdHJ1ZSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGluay5sZW5ndGggPiAxMCkge1xuICAgICAgc2V0VmFsaWRMaW5rKHRydWUpO1xuICAgIH1cbiAgfSwgW2xpbmtdKTtcblxuICBjb25zdCBoYW5kbGVVcHZvdGUgPSAoKSA9PiB7XG4gICAgZ2V0UG9zdFVybChsaW5rKTtcbiAgICBpZiAoIXVwdm90ZSkge1xuICAgICAgdXB2b3RlU291bmQoKTtcblxuICAgICAgc2V0VXB2b3RlKHRydWUpO1xuICAgICAgZG93bnZvdGUgJiYgc2V0RG93bnZvdGUoZmFsc2UpO1xuXG4gICAgICBpZiAoZG93bnZvdGUpIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgKyAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVwdm90ZShmYWxzZSk7XG4gICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dudm90ZSA9ICgpID0+IHtcbiAgICBpZiAoIWRvd252b3RlKSB7XG4gICAgICBkb3dudm90ZVNvdW5kKCk7XG5cbiAgICAgIHNldERvd252b3RlKHRydWUpO1xuICAgICAgdXB2b3RlICYmIHNldFVwdm90ZShmYWxzZSk7XG4gICAgICBpZiAodXB2b3RlKSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2IC0gMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXREb3dudm90ZShmYWxzZSk7XG4gICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb3JtYXR0ZWROdW1iZXIgPSBJbnRsLk51bWJlckZvcm1hdCgnZW4tdXMnLCB7XG4gICAgbm90YXRpb246ICdjb21wYWN0JyxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEsXG4gIH0pLmZvcm1hdChjb3VudCk7XG5cbiAgY29uc3QgTGlua1RvQXJ0aWNsZSA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xuICAgIHJldHVybiB2YWxpZExpbmsgPyAoXG4gICAgICA8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApIDogKFxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRMaW5rRXJyb3IodHJ1ZSl9PntjaGlsZHJlbn08L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEVycm9yUG9wdXAgPSAoZXJyb3I6IGFueSkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TGlua0Vycm9yKGZhbHNlKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi03MDAgYWJzb2x1dGUgdy0zMCBiZy1ibGFjayBtbC0xMCBtdC00ICR7XG4gICAgICAgICAgZXJyb3IgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCdcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TGlua0Vycm9yKGZhbHNlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBweC0yIHB5LTAuMjUgdGV4dC14bCB0b3AtMCByaWdodC0wIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHhcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LTMwIGJnLWVycm9yLWJnIHRleHQtZXJyb3IgcC0xMCBiZy1hY2NlbnQtZXJyb3ItYmcgdGV4dC1hY2NlbnQtZXJyb3IgIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWNjZW50LWVycm9yIHotMTBcIj5cbiAgICAgICAgICBMaW5rIGlzIGludmFsaWQgXHVEODNEXHVERTE0XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggdy0zMCBteS04IHNoYWRvdy1sZyAgIHJvdW5kZWQtMnhsICBib3JkZXItMiBib3JkZXItc29saWQgYmctWyM2YzZjNmMxMF0gICBweS04IHJlbGF0aXZlIFxuICAgICAgXG4gICAgICAke1xuICAgICAgICB1cHZvdGVcbiAgICAgICAgICA/ICdib3JkZXItZ3JlZW4tNDAwIHNoYWRvdy1bIzhlZjc4ZTcyXSdcbiAgICAgICAgICA6IGRvd252b3RlXG4gICAgICAgICAgPyAnYm9yZGVyLXJlZC00MDAgc2hhZG93LVsjZGM3MDcwNjVdJ1xuICAgICAgICAgIDogJyBzaGFkb3ctc3RvbmUtOTAwIGJvcmRlci1bIzZjNmM2YzI0XSdcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtMTAgbWItYXV0byB0ZXh0LTN4bFwiPlxuICAgICAgICAgIHtyYW5rfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmtUb0FydGljbGU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZSBkZWNvcmF0aW9uLXdoaXRlIGRlY29yYXRpb24tIGhvdmVyOnRleHQtYWNjZW50LXBpbmsgbWItNCB0ZXh0LTJ4bCBtYXgtdy1tZCBmb250LWJvbGQgXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L0xpbmtUb0FydGljbGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG15LThcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIFwiPnthdXRob3J9PC9zcGFuPlxuICAgICAgICAgICAge3R3aXR0ZXJIYW5kbGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyOmJnLVsjMWRhMGYyNThdIG1sLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0xIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3R3aXR0ZXJIYW5kbGV9YH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNHB4IFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMURBMUYyXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjIuMjMgNS45MjRhOC4yMTIgOC4yMTIgMCAwMS0yLjM1Ny42NDYgNC4xMTUgNC4xMTUgMCAwMDEuODA0LTIuMjcgOC4yMjEgOC4yMjEgMCAwMS0yLjYwNi45OTYgNC4xMDMgNC4xMDMgMCAwMC02Ljk5MSAzLjc0MiAxMS42NDcgMTEuNjQ3IDAgMDEtOC40NTctNC4yODcgNC4wODcgNC4wODcgMCAwMC0uNTU2IDIuMDYzIDQuMSA0LjEgMCAwMDEuODI1IDMuNDE1IDQuMDkgNC4wOSAwIDAxLTEuODU5LS41MTN2LjA1MmE0LjEwNCA0LjEwNCAwIDAwMy4yOTIgNC4wMjMgNC4wOTkgNC4wOTkgMCAwMS0xLjg1My4wNyA0LjExIDQuMTEgMCAwMDMuODMzIDIuODUgOC4yMzYgOC4yMzYgMCAwMS01LjA5NiAxLjc1NiA4LjMzIDguMzMgMCAwMS0uOTc5LS4wNTcgMTEuNjE3IDExLjYxNyAwIDAwNi4yOSAxLjg0M2M3LjU0NyAwIDExLjY3NS02LjI1MiAxMS42NzUtMTEuNjc1IDAtLjE3OC0uMDA0LS4zNTUtLjAxMi0uNTMxYTguMjk4IDguMjk4IDAgMDAyLjA0Ny0yLjEyM3pcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC04ICBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHB4LTQgcHktMiBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOmJnLXppbmMtOTAwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPExpbmtUb0FydGljbGU+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgUmVhZCBBcnRpY2xlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbmtUb0FydGljbGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHB5LTEgbXgtMTAgcm91bmRlZC0yeGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICBtbC1hdXRvXCJcbiAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPXsnaGlkZGVuJ30gbmFtZT1cImlkXCIgdmFsdWU9e2lkfSAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwidXB2b3RlXCIgbmFtZT1cIl9hY3Rpb25cIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXB2b3RlfVxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICB1cHZvdGUgPyAnc3Ryb2tlLWdyZWVuLTQwMCcgOiAnc3Ryb2tlLXdoaXRlJ1xuICAgICAgICAgICAgICB9IGhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uIGB9XG4gICAgICAgICAgICAgIHdpZHRoPVwiNDRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjYgMTUgMTIgOSAxOCAxNVwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xIHRleHQtbGcgZm9udC1ib2xkICR7XG4gICAgICAgICAgICAgIHVwdm90ZVxuICAgICAgICAgICAgICAgID8gJ3RleHQtZ3JlZW4tNDAwJ1xuICAgICAgICAgICAgICAgIDogZG93bnZvdGVcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXJlZC01MDAnXG4gICAgICAgICAgICAgICAgOiAndGV4dC13aGl0ZSdcbiAgICAgICAgICAgIH0gIGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvdW50ID4gOTk5ID8gZm9ybWF0dGVkTnVtYmVyIDogY291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiZG93bnZvdGVcIiBuYW1lPVwiX2FjdGlvblwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dudm90ZX1cbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgZG93bnZvdGUgPyAnc3Ryb2tlLXJlZC01MDAnIDogJ3N0cm9rZS13aGl0ZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgd2lkdGg9XCI0NFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ0XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiNiA5IDEyIDE1IDE4IDlcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAge2xpbmtFcnJvciAmJiA8RXJyb3JQb3B1cCBlcnJvcj17bGlua0Vycm9yfSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IHJlZGlyZWN0LCBqc29uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcic7XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZHM/OiB7IHVybD86IHN0cmluZzsgdGl0bGU/OiBzdHJpbmc7IGF1dGhvck9mUG9zdD86IHN0cmluZyB9O1xuICBmaWVsZEVycm9ycz86IHsgdXJsPzogc3RyaW5nOyB0aXRsZT86IHN0cmluZzsgYXV0aG9yT2ZQb3N0Pzogc3RyaW5nIH07XG59O1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpID0+IGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVVcmwodXJsOiBzdHJpbmcpIHtcbiAgbGV0IHJlZ0V4ID1cbiAgICAvXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP1stYS16QS1aMC05QDolLl9cXCt+Iz1dezEsMjU2fVxcLlthLXpBLVowLTkoKV17MSw2fVxcYihbLWEtekEtWjAtOSgpQDolX1xcKy5+Iz8mLy89XSopJC9nbTtcblxuICBjb25zdCBpc1ZhbGlkID0gcmVnRXgudGVzdCh1cmwpO1xuICBpZiAoIWlzVmFsaWQpIHtcbiAgICByZXR1cm4gJ1VybCBtdXN0IGJlIHZhbGlkJztcbiAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gIGlmICh0aXRsZS5sZW5ndGggPCA0KSB7XG4gICAgcmV0dXJuICdUaXRsZSBtdXN0IGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBdXRob3IoYXV0aG9yOiBzdHJpbmcpIHtcbiAgaWYgKGF1dGhvci5sZW5ndGggPCA0KSB7XG4gICAgcmV0dXJuICdBdXRob3IgbXVzdCBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMnO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuXG4gIGxldCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zb2xlLmxvZyhmb3JtKTtcbiAgbGV0IHRvcGljID0gZm9ybS5nZXQoJ3RvcGljJyk7XG4gIGxldCB1cmwgPSBmb3JtLmdldCgndXJsJyk7XG4gIGxldCB0aXRsZSA9IGZvcm0uZ2V0KCd0aXRsZScpO1xuICBsZXQgYXV0aG9yT2ZQb3N0ID0gZm9ybS5nZXQoJ2F1dGhvcicpO1xuXG4gIC8vIFZhbGlkYXRpb24gaGVyZSBmb3IgZm9ybWF0IG9mIGZpZWxkczpcbiAgaWYgKFxuICAgIHR5cGVvZiB0b3BpYyAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB0aXRsZSAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgYXV0aG9yT2ZQb3N0ICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmb3JtRXJyb3I6ICdGb3JtIHN1Ym1pdHRlZCBpbmNvcnJlY3RseScsXG4gICAgfSk7XG4gIH1cblxuICBsZXQgZmllbGRFcnJvcnMgPSB7XG4gICAgdXJsOiB2YWxpZGF0ZVVybCh1cmwpLFxuICAgIHRpdGxlOiB2YWxpZGF0ZVRpdGxlKHRpdGxlKSxcbiAgICBhdXRob3JPZlBvc3Q6IHZhbGlkYXRlQXV0aG9yKGF1dGhvck9mUG9zdCksXG4gIH07XG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzOiB7IHVybCwgdGl0bGUsIGF1dGhvck9mUG9zdCB9IH0pO1xuICB9XG5cbiAgLy8gVmFsaWRhdGlvbiBmb3IgZXhpc3RpbmcgdXJsIGluIGRhdGFiYXNlXG4gIGNvbnN0IGV4aXN0cyA9IGF3YWl0IGRiLnBvc3QuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgdG9waWM6IHRvcGljLFxuICAgICAgdXJsOiB1cmwsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gVGhlIHRvcGljcyBpbiB0aGUgZGF0YWJhc2UgYXJlIGxvd2VyY2FzZVxuICB0b3BpYyA9IHRvcGljLnRvTG93ZXJDYXNlKCk7XG5cbiAgY29uc3QgZmllbGRzID0geyB0b3BpYywgdXJsLCB0aXRsZSwgYXV0aG9yT2ZQb3N0IH07XG5cbiAgaWYgKCFleGlzdHMpIHtcbiAgICBhd2FpdCBkYi5wb3N0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7IC4uLmZpZWxkcywgcG9zdGVySWQ6IHVzZXJJZCB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZWRpcmVjdChgL2xlYXJuLyR7dG9waWN9YCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBcnRpY2xlIGFscmVhZHkgZXhpc3RzJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldygpIHtcbiAgbGV0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XG4gIGNvbnNvbGUubG9nKGFjdGlvbkRhdGEpO1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgbGV0IHRvcGljID0gcGFyYW1zLnRvcGljSWQ7XG4gIHRvcGljID0gdG9waWMgJiYgdG9waWNbMF0udG9VcHBlckNhc2UoKSArIHRvcGljLnN1YnN0cmluZygxKTtcblxuICBpbnRlcmZhY2UgSUZvcm1JbnB1dCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIC8vIHZhbHVlOiBzdHJpbmc7XG4gICAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gRm9ybUlucHV0KHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIHR5cGUsXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIHBsYWNlaG9sZGVyLFxuICB9OiBJRm9ybUlucHV0KSB7XG4gICAgY29uc3QgZXJyb3IgPSAhIWRlZmF1bHRWYWx1ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIGNsYXNzTmFtZT17YGJnLXRyYW5zcGFyZW50IHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwICByb3VuZGVkIHctZnVsbCBweS00IHB4LTMgdGV4dC1ncmF5LTIwMCBsZWFkaW5nLXRpZ2h0IFxuICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgXG4gICAgICAgICAgZm9jdXM6Ym9yZGVyLXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZVxuICAgICAgICBcbiAgICAgICAgJHtlcnJvciAmJiAnYm9yZGVyLXJlZC02MDAnfWB9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgLy8gV2UgbmVlZCB0byBzaG93IHRoZSB3b3JkIGFzIGNhcGl0YWxpemVkXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXcteHNcIj5cbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInNoYWRvdy1tZCByb3VuZGVkIHB0LTQgcGItOCBtYi00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwb2ludGVyLWV2ZW50cy1ub25lICB0ZXh0LWxnIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgaHRtbEZvcj1cInRvcGljXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVG9waWNcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2hhZG93IGJvcmRlci0yIGJnLXRyYW5zcGFyZW50IGJvcmRlci1ncmF5LTYwMCB0ZXh0LWdyYXktMjAwIGFwcGVhcmFuY2Utbm9uZSAgcm91bmRlZCB3LWZ1bGwgcHktNCBweC0zICBsZWFkaW5nLXRpZ2h0XG4gICAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSBmb2N1czpib3JkZXItd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXG4gICAgICAgICAgICAgICAgJHt0b3BpYyAmJiAnIGN1cnNvci1ub3QtYWxsb3dlZCd9IGB9XG4gICAgICAgICAgICAgIGlkPVwidG9waWNcIlxuICAgICAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0b3BpY31cbiAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlPXshIXRvcGljfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHBvaW50ZXItZXZlbnRzLW5vbmUgdGV4dC1sZyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJ1cmxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBVUkxcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy51cmx9XG4gICAgICAgICAgICAgIGlkPVwidXJsXCJcbiAgICAgICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vb3ZlcnJlYWN0ZWQuaW8vXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXJsID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwICB0ZXh0LW1kXCI+XG4gICAgICAgICAgICAgICAgICBcdTI3NTdcdUZFMEYge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51cmx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggcG9pbnRlci1ldmVudHMtbm9uZSAgdGV4dC1sZyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJ0aXRsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFydGljbGUgVGl0bGVcbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnRpdGxlfVxuICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoeSBSZWFjdCBob29rcyBhcmUgYXdlc29tZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy50aXRsZSA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LW1kXCI+XG4gICAgICAgICAgICAgICAgICBcdTI3NTdcdUZFMEYge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHBvaW50ZXItZXZlbnRzLW5vbmUgdGV4dC1sZyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJhdXRob3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBdXRob3JcbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LmF1dGhvck9mUG9zdH1cbiAgICAgICAgICAgICAgaWQ9XCJhdXRob3JcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJhdXRob3JcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhbiBBYnJhbW92XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmF1dGhvck9mUG9zdCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LW1kXCI+XG4gICAgICAgICAgICAgICAgICBcdTI3NTdcdUZFMEYge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5hdXRob3JPZlBvc3R9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtNFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYmctYWNjZW50LXBpbmsgdy1mdWxsIGhvdmVyOmJyaWdodG5lc3MtMTEwIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWNjZW50LXBpbmsgaG92ZXI6Ym9yZGVyLXdoaXRlIGFjdGl2ZTpib3JkZXItd2hpdGUgdGV4dC13aGl0ZSBmb250LWJvbGQgbXQtOCBweS00IHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdCBBcnRpY2xlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3KCkge1xuICByZXR1cm4gPHNwYW4+c2FkYmFpb3VuYW9zaWRuYW9zZG5hc29uIE5FVzwvc3Bhbj47XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IE91dGxldCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTIwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNHhsXCI+XG4gICAgICAgIFdhbnQgdG8gbGVhcm4gc29tZXRoaW5nIG5ldz9cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTIwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtM3hsXCI+XG4gICAgICAgIENob29zZSBhIHRvcGljIFx1MkIwNVx1RkUwRlxuICAgICAgPC9zcGFuPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1hdHRlZElucHV0IGZyb20gJ34vY29tcG9uZW50cy9mb3JtYXR0ZWQtaW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlVXNlclNlc3Npb24sIGxvZ2luIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcic7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGpzb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluaywgdXNlQWN0aW9uRGF0YSwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgdXNlcm5hbWUgIT09ICdzdHJpbmcnIHx8IHVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm4gYFVzZXJuYW1lcyBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycyBsb25nYDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09ICdzdHJpbmcnIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICByZXR1cm4gYFBhc3N3b3JkcyBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nYDtcbiAgfVxufVxuXG50eXBlIEFjdGlvbkRhdGEgPSB7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xuICB9O1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkcz86IHtcbiAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgfTtcbn07XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSkgPT4ge1xuICByZXR1cm4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldCgncGFzc3dvcmQnKT8udG9TdHJpbmcoKTtcbiAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldCgndXNlcm5hbWUnKT8udG9TdHJpbmcoKTtcblxuICBjb25zdCBmaWVsZHMgPSB7IHVzZXJuYW1lLCBwYXNzd29yZCB9O1xuXG4gIGNvbnNvbGUubG9nKGZpZWxkcyk7XG5cbiAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhc3N3b3JkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgIHVzZXJuYW1lOiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lKSxcbiAgICBwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCksXG4gIH07XG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKVxuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG5cbiAgY29uc29sZS5sb2codXNlcik7XG5cbiAgY29uc29sZS5sb2coIXVzZXIpO1xuXG4gIC8vIFRoYXQgaXNuJ3QgYSB2YWxpZCBhY2NvdW50IHdpdGggY3JlZGVudGlhbHMgc3VwcGxpZWRcbiAgaWYgKCF1c2VyKSB7XG4gICAgY29uc29sZS5sb2coJ0V4ZWN1dGluZyBoZXJlJyk7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZmllbGRzLFxuICAgICAgZm9ybUVycm9yOiAnVXNlcm5hbWUvIHBhc3N3b3JkIGlzIGluY29ycmVjdCcsXG4gICAgfSk7XG4gIH1cblxuICAvLyBpdCBpcyBhIHZhbGlkIHVzZXJcbiAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsICcvJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUFjdGlvbkRhdGE8QWN0aW9uRGF0YT4oKTtcbiAgLy8gY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTEyIFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMTBcIj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAge2RhdGE/LmZvcm1FcnJvciAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC00IG15LTQgYmctWyNlZjQ0NDQ0NV0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1yZWQtNTAwICBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1yZWQtNTAwXCI+XG4gICAgICAgICAgICAgIHtkYXRhPy5mb3JtRXJyb3IgPz8gJ0ludmFsaWQgRW1haWwgb3IgcGFzc3dvcmQnfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdFRvXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KCdyZWRpcmVjdFRvJykgPz8gdW5kZWZpbmVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgICAgICBodG1sRm9yPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhcnRoIFNpZGl1c1wiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGE/LmZpZWxkcz8udXNlcm5hbWV9XG4gICAgICAgICAgICBoYXNFcnJvcj17ISFkYXRhPy5maWVsZEVycm9ycz8udXNlcm5hbWV9XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9XCJpbnZhbGlkIHVzZXJuYW1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIYW5TaG90Rmlyc3RcIlxuICAgICAgICAgICAgdG9nZ2xlU2hvd0hpZGU9e3RydWV9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XG4gICAgICAgICAgICBoYXNFcnJvcj17ISFkYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmR9XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9XCJpbnZhbGlkIHBhc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IG1yLWF1dG8gdGV4dC1uZXV0cmFsLTMwMCB0ZXh0LW1kIGhvdmVyOnRleHQtYWNjZW50LXBpbmsgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRFcnJvcih0cnVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTcgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyICBweS00IHB4LTggYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci10cmFuc3BhcmVudCBiZy1hY2NlbnQtcGluayByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci13aGl0ZSBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkxvZ2luPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtNCBmbGV4IHctZnVsbCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P1xuICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ251cFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSB0ZXh0LWFjY2VudC1waW5rIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2MwZDFlM2NmJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1YV1RHVDNHTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRU1NQklMM0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Qk83NEZXTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtSldFSzNGUkEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTZOQlFLQUJKLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUdaTFlNWlNULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UNkpCVFBFUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVUyQzVVV1BHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybic6eydpZCc6J3JvdXRlcy9sZWFybicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsZWFybicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi1YN1hLRUE2VS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVDZKQlRQRVAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1VMkM1VVdQRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybicsJ3BhdGgnOic6dG9waWNJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC1BT1o2R0xPQy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleC1HN0dGRFczVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMzZKTjI0NFkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02TkJRS0FCSi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldyc6eydpZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZCcsJ3BhdGgnOiduZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3LTJRTUpYTDdLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HSzU2Q1pKRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTM2Sk4yNDRZLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleCc6eydpZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4LVZaTEpSWkNXLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvbGVhcm4vaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybicsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi9pbmRleC1HV1dMWVpYSS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLVIzUFRCUUNHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HSzU2Q1pKRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVSRFFTWlBTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVTJDNVVXUEcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF0aHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcGF0aHMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncGF0aHMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BhdGhzL2luZGV4LTdCNFVITUFYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VMkM1VVdQRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2lnbnVwJzp7J2lkJzoncm91dGVzL3NpZ251cCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaWdudXAnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2lnbnVwLUNMQkdLWUYyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUkRRU1pQUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVUyQzVVV1BHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtQzBEMUUzQ0YuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFlBQXVCOzs7QUNEdkIscUJBQW9CO0FBQ3BCLHlCQUF3QjtBQUN4QixvQkFBbUI7QUFDbkIsc0JBQXFDOzs7QUNIckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG1CQUE0QjtBQUM1QixvQkFBK0I7QUFFaEIsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsTUFBSSxTQUFTLGtDQUNYLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUU87QUFDUCxtQkFBb0Q7Ozs7OztBQ1RwRCxvQkFBK0Q7QUFPL0QsSUFBTSxlQUFlLGlDQUF3QztBQUV0RCxvQkFBb0I7QUFDekIsU0FBTyw4QkFBVztBQUFBO0FBR0wsdUJBQXVCLEVBQUUsWUFBaUI7QUFDdkQsUUFBTSxDQUFDLE1BQU0sV0FBVyw0QkFBa0I7QUFFMUMsK0JBQVUsTUFBTTtBQUNkLFVBQU0sU0FBUyxhQUFhLFFBQVEsV0FBVztBQUMvQyxZQUFRLE9BQU8sV0FBVyxjQUFjLEtBQUssTUFBTSxVQUFVO0FBQUEsS0FDNUQ7QUFZSCwrQkFBVSxNQUFNO0FBQ2QsaUJBQWEsUUFBUSxRQUFRLEtBQUssVUFBVTtBQUFBLEtBQzNDLENBQUM7QUFFSix3QkFBc0I7QUFDcEIsWUFBUSxJQUFJLHdCQUF3QjtBQUNwQyxZQUFRLENBQUMsU0FBUyxDQUFDO0FBQUE7QUFHckIsUUFBTSxTQUFTLEVBQUUsTUFBTTtBQUN2QixTQUNFLG9DQUFDLGFBQWEsVUFBZDtBQUFBLElBQXVCLE9BQU87QUFBQSxLQUFTO0FBQUE7OztBQzFDcEMsSUFBTSxPQUFPLE1BQU07QUFDeEIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBYSw0Q0FFM0Isb0NBQUMsS0FBRDtBQUFBLElBQ0UsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLElBQ0osTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1g7QUFBQTtBQVNiLElBQU8sZUFBUTs7O0FDbkJmLG9CQUFvQzs7O0FDRjdCLCtCQUErQixNQUFjO0FBQ2xELFNBQU8sS0FBSyxHQUFHLHNCQUFzQixLQUFLLFVBQVU7QUFBQTs7O0FEU3RELElBQU0sT0FBTyxNQUFNO0FBQ2pCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUk7QUFBQSxLQUNSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUF1QjtBQUFBO0FBcUMvQyxJQUFNLFNBQVMsTUFBTTtBQUNuQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxJQUNQLEtBQUk7QUFBQSxJQUNKLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxLQUVSLG9DQUFDLEtBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxVQUFTO0FBQUEsSUFDVCxVQUFTO0FBQUEsSUFDVCxHQUFFO0FBQUEsTUFFSixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUE7QUFBQTtBQVFwQixJQUFNLGFBQWEsQ0FBQyxFQUFFLE1BQU0sWUFBWSxXQUFnQjtBQUN0RCxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLG1CQUFEO0FBQUEsSUFBbUIsTUFBSztBQUFBLElBQVMsVUFBUztBQUFBLE1BQzFDLG9DQUFDLG1CQUFEO0FBQUEsSUFBbUIsTUFBSztBQUFBLElBQVEsVUFBUztBQUFBLE1BRXpDLG9DQUFDLFFBQUQsT0FDQSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUztBQUFBLElBQVksV0FBVTtBQUFBLEtBQ2xDLE9BQU8sY0FBTyxnQkFNckIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osT0FDQyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsb0NBQUMsUUFBRCxNQUFPLHNCQUFzQixLQUFLLGNBR3BDLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FDUCxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsb0NBQUMsUUFBRCxNQUFNO0FBQUE7QUFTcEIsSUFBTSxvQkFBb0IsQ0FBQyxFQUFFLE1BQU0sZUFBZ0M7QUFDakUsU0FDRSxvQ0FBQyxvQkFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsSUFBSTtBQUFBLEtBRUg7QUFBQTtBQUtBLElBQU0sU0FBUyxDQUFDLEVBQUUsV0FBZ0I7QUFDdkMsUUFBTSxTQUFTO0FBQ2YsUUFBTSxFQUFFLE1BQU0sZUFBb0I7QUFDbEMsVUFBUSxJQUFJO0FBQ1osU0FDRSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsb0NBQUMsTUFBRCxPQUVBLG9DQUFDLFlBQUQ7QUFBQSxJQUFZO0FBQUEsSUFBWTtBQUFBLElBQVk7QUFBQTtBQUFBOzs7QUVwSTFDLG9CQUE2QjtBQUU3QixJQUFJO0FBU0osSUFBSSxPQUF1QztBQUN6QyxPQUFLLElBQUk7QUFBQSxPQUNKO0FBQ0wsTUFBSSxDQUFDLE9BQU8sTUFBTTtBQUNoQixXQUFPLE9BQU8sSUFBSTtBQUFBO0FBRXBCLE9BQUssT0FBTztBQUFBOzs7QUNoQmQsc0JBQW1CO0FBQ25CLGtCQUFxRDtBQU9yRCxxQkFBNEIsRUFBRSxVQUFVLFlBQXVCO0FBQzdELFFBQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxXQUFXO0FBQUEsSUFDcEMsT0FBTyxFQUFFO0FBQUE7QUFFWCxNQUFJLENBQUM7QUFBTSxXQUFPO0FBRWxCLFFBQU0sb0JBQW9CLE1BQU0sd0JBQU8sUUFBUSxVQUFVLEtBQUs7QUFDOUQsTUFBSSxDQUFDO0FBQW1CLFdBQU87QUFFL0IsU0FBTyxFQUFFLElBQUksS0FBSyxJQUFJO0FBQUE7QUFHeEIsd0JBQXdCLFNBQWtCO0FBQ3hDLFNBQU8sUUFBUSxXQUFXLFFBQVEsUUFBUSxJQUFJO0FBQUE7QUFHaEQseUJBQWdDLFNBQWtCO0FBQ2hELFFBQU0sVUFBVSxNQUFNLGVBQWU7QUFDckMsUUFBTSxTQUFTLFFBQVEsSUFBSTtBQUMzQixNQUFJLENBQUMsVUFBVSxPQUFPLFdBQVc7QUFBVSxXQUFPO0FBQ2xELFNBQU87QUFBQTtBQUdULDZCQUNFLFNBQ0EsYUFBcUIsSUFBSSxJQUFJLFFBQVEsS0FBSyxVQUMxQztBQUNBLFFBQU0sVUFBVSxNQUFNLGVBQWU7QUFDckMsUUFBTSxTQUFTLFFBQVEsSUFBSTtBQUMzQixNQUFJLENBQUMsVUFBVSxPQUFPLFdBQVcsVUFBVTtBQUN6QyxVQUFNLGVBQWUsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLGNBQWM7QUFDekQsVUFBTSwwQkFBUyxVQUFVO0FBQUE7QUFFM0IsU0FBTztBQUFBO0FBR1QsSUFBTSxnQkFBZ0IsUUFBUSxJQUFJO0FBQ2xDLElBQUksQ0FBQyxlQUFlO0FBQ2xCLFFBQU0sSUFBSSxNQUFNO0FBQUE7QUFFbEIsSUFBTSxVQUFVLDRDQUEyQjtBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUlOLFFBQVE7QUFBQSxJQUNSLFNBQVMsQ0FBQztBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLLEtBQUssS0FBSztBQUFBLElBQ3ZCLFVBQVU7QUFBQTtBQUFBO0FBR2QsaUNBQXdDLFFBQWdCLE9BQWU7QUFDckUsUUFBTSxVQUFVLE1BQU0sUUFBUTtBQUM5QixVQUFRLElBQUksVUFBVTtBQUN0QixTQUFPLDBCQUFTLE9BQU87QUFBQSxJQUNyQixTQUFTO0FBQUEsTUFDUCxjQUFjLE1BQU0sUUFBUSxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBS2hELHVCQUE4QixTQUFrQjtBQUM5QyxRQUFNLFNBQVMsTUFBTSxVQUFVO0FBQy9CLFVBQVEsSUFBSSxhQUFhO0FBRXpCLE1BQUksT0FBTyxXQUFXLFVBQVU7QUFDOUIsV0FBTztBQUFBO0FBR1QsTUFBSTtBQUNGLFVBQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxXQUFXO0FBQUEsTUFDcEMsT0FBTyxFQUFFLElBQUk7QUFBQSxNQUNiLFFBQVEsRUFBRSxJQUFJLE1BQU0sVUFBVTtBQUFBO0FBRWhDLFlBQVEsSUFBSTtBQUNaLFdBQU87QUFBQSxVQUNQO0FBQ0EsVUFBTSxPQUFPO0FBQUE7QUFBQTtBQUlqQixzQkFBNkIsU0FBa0I7QUFDN0MsUUFBTSxVQUFVLE1BQU0sZUFBZTtBQUNyQyxTQUFPLDBCQUFTLFVBQVU7QUFBQSxJQUN4QixTQUFTO0FBQUEsTUFDUCxjQUFjLE1BQU0sUUFBUSxlQUFlO0FBQUE7QUFBQTtBQUFBOzs7QU5oRjFDLElBQU0sUUFBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRzlCLElBQU0sT0FBcUIsTUFBTztBQUFBLEVBQ3ZDLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQTtBQVFMLElBQU0sU0FBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixVQUFRLElBQUk7QUFDWixTQUFPLHVCQUFLO0FBQUE7QUFHQyxlQUFlO0FBQzVCLFFBQU0sUUFBTztBQUNiLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsUUFFRixvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBO0FBQUEsS0FHZCxvQ0FBQyxlQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWTtBQUFBO0FBQUEsS0FHZCxvQ0FBQyxjQUFELFFBRUYsb0NBQUMsUUFBRDtBQUFBLElBQVEsTUFBTTtBQUFBLE1BQ2Qsb0NBQUMsc0JBQUQsT0FDQSxvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQ0Esb0NBQUMsMEJBQUQ7QUFBQTs7O0FPcEVaO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQUdPLElBQU0sU0FBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBR3RCLG1CQUFtQjtBQUNoQyxTQUFPLG9DQUFDLFFBQUQsTUFBTTtBQUFBOzs7QUNSZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Esb0JBQXFCOzs7QUNEckIsb0JBQXlCO0FBZ0JWLHdCQUF3QjtBQUFBLEVBQ3JDO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxFQUNqQixXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxHQUNTO0FBQ1QsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLDRCQUFTO0FBQ2pELFFBQU0sQ0FBQyxPQUFPLFlBQVksNEJBQVM7QUFFbkMsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0EsV0FBVTtBQUFBLEtBRVQsUUFFSCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFXLHNDQUNULFFBQVEsbUJBQW1CO0FBQUEsS0FHN0Isb0NBQUMsU0FBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLE1BQ0Usa0JBQWtCLGVBQ2QsU0FDQSxrQkFBa0IsQ0FBQyxlQUNuQixhQUNBO0FBQUEsSUFFTjtBQUFBLElBQ0E7QUFBQSxJQUNBLFdBQVU7QUFBQSxNQUVYLGtCQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVcsK0RBQ1QsZUFBZSxhQUFhO0FBQUEsSUFFOUIsZ0JBQWM7QUFBQSxJQUNkLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7QUFBQSxLQUV6QyxlQUFlLGNBQU8sZ0JBSzlCLFNBQ0Msb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQWtDO0FBQUE7OztBRHpFbkQsSUFBTSxTQUF1QixNQUFNO0FBQ3hDLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFHdEIsaUJBQWlCO0FBQzlCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQTBCLFlBQzFDLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxnQkFBRDtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsT0FBTTtBQUFBLElBQ04sSUFBRztBQUFBLElBQ0gsY0FBYTtBQUFBLElBQ2IsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLE1BRWQsb0NBQUMsZ0JBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxJQUNOLElBQUc7QUFBQSxJQUNILGNBQWE7QUFBQSxJQUNiLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxNQUVkLG9DQUFDLGdCQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixJQUFHO0FBQUEsSUFDSCxjQUFhO0FBQUEsSUFDYixNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixnQkFBZ0I7QUFBQSxNQUVsQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsTUFFUCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsSUFBZSxTQUFRO0FBQUEsS0FBUSxrQkFDL0IsS0FDZixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBa0MsWUFJdEQsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFhLHFCQUlqQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBaUMsNEJBRS9DLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FDUCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBdUM7QUFBQTs7O0FFL0RuRTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNHQSxvQkFBcUI7OztBQ0hyQixvQkFBK0M7QUFFL0MsOEJBQTRCO0FBZWIsZ0JBQWdCLEVBQUUsWUFBWSxPQUFPLFdBQW1CO0FBQ3JFLFFBQU0sWUFBWSwwQkFBeUI7QUFDM0MsUUFBTSxXQUFXLDBCQUF1QjtBQUN4QyxNQUFJLFdBQVc7QUFFZiw4QkFBNEIsT0FBWTtBQUN0QyxRQUFJLFFBQVEsTUFBTSxPQUFPLEdBQUc7QUFDNUIsVUFBTTtBQUNOLFlBQVEsTUFBTTtBQUNkLGFBQVMsWUFBWSxTQUFTLEVBQUUsU0FBUztBQUFBO0FBSTNDLFFBQU0saUJBQWlCLCtCQUFZLENBQUMsVUFBVTtBQUM1QyxRQUFJLE1BQU0sWUFBWSxRQUFRLE1BQU0sUUFBUSxLQUFLO0FBQy9DLFVBQUksVUFBVSxZQUFZLFFBQVEsU0FBUyxZQUFZLE1BQU07QUFDM0Qsa0JBQVUsUUFBUTtBQUNsQixpQkFBUyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBR3BCO0FBRUgsK0JBQVUsTUFBTTtBQUVkLGFBQVMsaUJBQWlCLFdBQVc7QUFHckMsV0FBTyxNQUFNO0FBQ1gsZUFBUyxvQkFBb0IsV0FBVztBQUFBO0FBQUEsS0FFekMsQ0FBQztBQUVKLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVztBQUFBLEtBQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQ0UsVUFBVTtBQUFBLElBQ1YsV0FBVyxRQUNULFNBQVMsVUFBVSxXQUFXLFNBQVMsV0FBVyxVQUFVO0FBQUEsS0FJOUQsb0NBQUMsT0FBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsV0FBVztBQUFBO0FBQUE7QUFBQSxnQkFHTCxTQUFTLFVBQVUsU0FBUyxTQUFTLFdBQVcsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUkvRCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBVyxjQUMzQixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixPQUFPLEVBQUUsU0FBUztBQUFBLElBQ2xCLFdBQVU7QUFBQSxNQUVaLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxLQU1WLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLE9BQU07QUFBQSxJQUNOLFdBQVU7QUFBQSxLQUtYLFdBRU0sTUFHVCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxRQUFNO0FBQUE7QUFBQTs7O0FEdEY5QixJQUFNLGNBQWMsTUFBTTtBQUMvQixRQUFNLGtCQUFrQixZQUFZO0FBQ2xDLFFBQUk7QUFDRixZQUFNLFdBQVcsTUFBTSxNQUFNO0FBQzdCLFlBQU0sUUFBTyxNQUFNLFNBQVM7QUFBQSxhQUNyQixLQUFQO0FBQUE7QUFBQTtBQU1KLFFBQU0sYUFBYSxDQUFDLE1BQVc7QUFDN0IsTUFBRTtBQUNGLFVBQU0sT0FBTyxFQUFFLE9BQU8sR0FBRztBQUN6QixZQUFRLElBQUk7QUFBQTtBQUdkLFFBQU0sY0FBYyxNQUFNO0FBQ3hCLFdBQ0Usb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsTUFBRDtBQUFBLE1BQ0UsT0FBTztBQUFBLFFBQ0wsWUFDRTtBQUFBO0FBQUEsTUFFSixXQUFVO0FBQUEsT0FDWCxxQkFDa0Isb0NBQUMsTUFBRCxPQUFNLG1EQUV2QixvQ0FBQyxNQUFELE9BQU0sdUJBSVosb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQXVDLHFHQU0zRCxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxVQUFEO0FBQUEsTUFBUSxXQUFVO0FBQUEsT0FDaEIsb0NBQUMsUUFBRDtBQUFBLE1BQU0sU0FBUyxZQUFZO0FBQUEsT0FBbUI7QUFBQTtBQVExRCxRQUFNLGlCQUFpQixDQUFDLEVBQUUsV0FBZ0I7QUFDeEMsVUFBTSxPQUFPLEtBQUs7QUFDbEIsV0FDRSxvQ0FBQyxvQkFBRDtBQUFBLE1BQU0sSUFBSSxXQUFXO0FBQUEsT0FDbkIsb0NBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE9BS1Ysb0NBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQWM7QUFBQTtBQU10QyxRQUFNLGVBQWUsTUFBTTtBQUN6QixXQUNFLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxPQUFXLHNCQUMzQixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQTtBQUFBO0FBTTdCLFFBQU0sZUFBZSxNQUFNO0FBQ3pCLFdBQ0Usb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsUUFBRDtBQUFBLE1BQVE7QUFBQSxRQUNSLG9DQUFDLGNBQUQ7QUFBQTtBQUtOLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsYUFBRCxPQUNBLG9DQUFDLGNBQUQ7QUFBQTtBQUlOLElBQU8sdUJBQVE7OztBRDdHZixvQkFBMkM7QUFFcEMsSUFBTSxTQUF1QixNQUFNO0FBQUEsRUFDeEMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRWQsaUJBQWlCO0FBQzlCLFFBQU0sNEJBQ0osT0FBTyxXQUFXLGNBQWMsZ0NBQWtCO0FBQ3BELDRCQUEwQixNQUFNO0FBQzlCLGFBQVMsS0FBSyxNQUFNLGtCQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVyQztBQUNILFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBO0FBQUEsS0FHZCxvQ0FBQyxzQkFBRDtBQUFBOzs7QUduQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF1Qjs7O0FDQXZCLCtCQUFxQjtBQUVyQixJQUFNLE9BQU87QUFBQSxFQUNYLEVBQUUsTUFBTSxVQUFVLElBQUk7QUFBQSxFQUN0QixFQUFFLE1BQU0sU0FBUyxJQUFJO0FBQUEsRUFDckIsRUFBRSxNQUFNLFlBQVksSUFBSTtBQUFBLEVBQ3hCLEVBQUUsTUFBTSxRQUFRLElBQUk7QUFBQSxFQUNwQixFQUFFLE1BQU0sVUFBVSxJQUFJO0FBQUEsRUFDdEIsRUFBRSxNQUFNLFNBQVMsSUFBSTtBQUFBLEVBQ3JCLEVBQUUsTUFBTSxPQUFPLElBQUk7QUFBQSxFQUNuQixFQUFFLE1BQU0sUUFBUSxJQUFJO0FBQUE7QUFHUCx5QkFBeUI7QUFDdEMsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBMEIsbUJBQzFDLDBEQUNHLEtBQUssSUFBSSxDQUFDLFNBQVM7QUFDbEIsVUFBTSxpQkFBaUIsS0FBSyxLQUFLO0FBQ2pDLFdBQ0Usb0NBQUMsT0FBRDtBQUFBLE1BQUssS0FBSyxLQUFLO0FBQUEsTUFBSSxXQUFVO0FBQUEsT0FDM0Isb0NBQUMsK0JBQUQ7QUFBQSxNQUFNLElBQUksS0FBSztBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE9BU1Ysb0NBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQTJCLEtBQUs7QUFBQTtBQUFBOzs7QUQzQmxFLHFCQUEyQztBQUVwQyxJQUFNLFNBQXVCLE1BQU07QUFDeEMsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUd0QixpQkFBaUI7QUFDOUIsUUFBTSw0QkFDSixPQUFPLFdBQVcsY0FBYyxpQ0FBa0I7QUFDcEQsNEJBQTBCLE1BQU07QUFDOUIsYUFBUyxLQUFLLE1BQU0sa0JBQ2xCO0FBQUEsS0FFRDtBQUNILFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQVEsTUFBSztBQUFBLElBQVMsWUFBWSxDQUFDLE1BQVcsUUFBUSxJQUFJO0FBQUEsT0FFNUQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsZUFBRCxTQUdKLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLHVCQUFEO0FBQUE7OztBRWhDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxtQkFBcUI7QUFDckIscUJBQXNDO0FBTy9CLElBQU0sU0FBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBSzlCLElBQU0sVUFBeUIsT0FBTyxFQUFFLGFBQWE7QUFDMUQsUUFBTSxPQUFPLGtDQUFRLFlBQVc7QUFFaEMsU0FBTyx1QkFBSyxFQUFFO0FBQUE7QUFHRCxrQkFBaUI7QUFDOUIsUUFBTSxFQUFFLFNBQVM7QUFFakIsU0FDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsTUFDTCxZQUNFO0FBQUE7QUFBQSxLQUdILFFBT0wsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsdUJBQUQ7QUFBQTs7O0FDMUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFxRDtBQUNyRCxxQkFBOEI7QUFDOUIsK0JBQXFCOzs7QUNGckIscUJBQXFCO0FBQ3JCLHFCQUFvQztBQUNwQyx1QkFBcUI7Ozs7OztBQW1CTixtQkFBbUI7QUFBQSxFQUNoQztBQUFBLEVBQ0E7QUFBQSxFQUNBLE9BQU87QUFBQSxFQUNQO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEdBQ1U7QUFDVixRQUFNLENBQUMsUUFBUSxhQUFhLDZCQUFTO0FBQ3JDLFFBQU0sQ0FBQyxVQUFVLGVBQWUsNkJBQVM7QUFDekMsUUFBTSxDQUFDLE9BQU8sWUFBWSw2QkFBUyxXQUFXO0FBQzlDLFFBQU0sQ0FBQyxXQUFXLGdCQUFnQiw2QkFBUztBQUMzQyxRQUFNLENBQUMsV0FBVyxnQkFBZ0IsNkJBQVM7QUFFM0MsUUFBTSxTQUFpQixPQUFPLElBQUk7QUFDbEMsUUFBTSxDQUFDLGVBQWUsOEJBQVMsc0JBQU0sRUFBRSxjQUFjLENBQUMsTUFBTTtBQUM1RCxRQUFNLENBQUMsaUJBQWlCLDhCQUFTLHNCQUFNO0FBQUEsSUFDckMsY0FBYyxDQUFDO0FBQUEsSUFDZixjQUFjO0FBQUEsSUFDZDtBQUFBLElBR0EsV0FBVztBQUFBO0FBR2IsZ0NBQVUsTUFBTTtBQUNkLFFBQUksS0FBSyxTQUFTLElBQUk7QUFDcEIsbUJBQWE7QUFBQTtBQUFBLEtBRWQsQ0FBQztBQUVKLFFBQU0sZUFBZSxNQUFNO0FBQ3pCLGVBQVc7QUFDWCxRQUFJLENBQUMsUUFBUTtBQUNYO0FBRUEsZ0JBQVU7QUFDVixrQkFBWSxZQUFZO0FBRXhCLFVBQUksVUFBVTtBQUNaLGlCQUFTLENBQUMsU0FBUyxPQUFPO0FBQUEsYUFDckI7QUFDTCxpQkFBUyxDQUFDLFNBQVMsT0FBTztBQUFBO0FBQUEsV0FFdkI7QUFDTCxnQkFBVTtBQUNWLGVBQVMsQ0FBQyxTQUFTLE9BQU87QUFBQTtBQUFBO0FBSTlCLFFBQU0saUJBQWlCLE1BQU07QUFDM0IsUUFBSSxDQUFDLFVBQVU7QUFDYjtBQUVBLGtCQUFZO0FBQ1osZ0JBQVUsVUFBVTtBQUNwQixVQUFJLFFBQVE7QUFDVixpQkFBUyxDQUFDLFNBQVMsT0FBTztBQUFBLGFBQ3JCO0FBQ0wsaUJBQVMsQ0FBQyxTQUFTLE9BQU87QUFBQTtBQUFBLFdBRXZCO0FBQ0wsa0JBQVk7QUFDWixlQUFTLENBQUMsU0FBUyxPQUFPO0FBQUE7QUFBQTtBQUk5QixRQUFNLGtCQUFrQixLQUFLLGFBQWEsU0FBUztBQUFBLElBQ2pELFVBQVU7QUFBQSxJQUNWLHVCQUF1QjtBQUFBLEtBQ3RCLE9BQU87QUFFVixRQUFNLGdCQUFnQixDQUFDLEVBQUUsZUFBb0I7QUFDM0MsV0FBTyxZQUNMLG9DQUFDLEtBQUQ7QUFBQSxNQUFHLE1BQU07QUFBQSxNQUFNLFFBQU87QUFBQSxNQUFTLEtBQUk7QUFBQSxPQUNoQyxZQUdILG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFNBQVMsTUFBTSxhQUFhO0FBQUEsT0FBUTtBQUFBO0FBSTdDLFFBQU0sYUFBYSxDQUFDLFVBQWU7QUFDakMsa0NBQVUsTUFBTTtBQUNkLGlCQUFXLE1BQU07QUFDZixxQkFBYTtBQUFBLFNBQ1o7QUFBQSxPQUNGO0FBRUgsV0FDRSxvQ0FBQyxPQUFEO0FBQUEsTUFDRSxXQUFXLHFFQUNULFFBQVEsZ0JBQWdCO0FBQUEsT0FHMUIsb0NBQUMsUUFBRDtBQUFBLE1BQ0UsU0FBUyxNQUFNLGFBQWE7QUFBQSxNQUM1QixXQUFVO0FBQUEsT0FDWCxNQUdELG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUF5SDtBQUFBO0FBTzlJLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVztBQUFBO0FBQUEsUUFHVCxTQUNJLHdDQUNBLFdBQ0Esc0NBQ0E7QUFBQTtBQUFBO0FBQUEsS0FLTixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDYixPQUVILG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxlQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2IsU0FHTCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBYSxTQUM1QixpQkFDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFDRSxNQUFNLHVCQUF1QjtBQUFBLElBQzdCLFFBQU87QUFBQSxJQUNQLEtBQUk7QUFBQSxLQUVKLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU07QUFBQSxJQUNOLFFBQU87QUFBQSxJQUNQLE9BQU07QUFBQSxJQUNOLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxLQUVSLG9DQUFDLEtBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsV0FRcEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsZUFBRCxNQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFrQyxxQkFRMUQsb0NBQUMscUJBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFFBQU87QUFBQSxLQUVQLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQU07QUFBQSxJQUFVLE1BQUs7QUFBQSxJQUFLLE9BQU87QUFBQSxNQUN4QyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsSUFBUyxPQUFNO0FBQUEsSUFBUyxNQUFLO0FBQUEsS0FDeEMsb0NBQUMsT0FBRDtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsT0FBTTtBQUFBLElBQ04sV0FBVyxrQkFDVCxTQUFTLHFCQUFxQjtBQUFBLElBRWhDLE9BQU07QUFBQSxJQUNOLFFBQU87QUFBQSxJQUNQLFNBQVE7QUFBQSxJQUNSLGFBQVk7QUFBQSxJQUNaLE1BQUs7QUFBQSxJQUNMLGVBQWM7QUFBQSxJQUNkLGdCQUFlO0FBQUEsS0FFZixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBTyxHQUFFO0FBQUEsSUFBZ0IsTUFBSztBQUFBLE1BQzNDLG9DQUFDLFlBQUQ7QUFBQSxJQUFVLFFBQU87QUFBQSxRQUlyQixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFXLDBCQUNULFNBQ0ksbUJBQ0EsV0FDQSxpQkFDQTtBQUFBLEtBR0wsUUFBUSxNQUFNLGtCQUFrQixRQUVuQyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsSUFBUyxPQUFNO0FBQUEsSUFBVyxNQUFLO0FBQUEsS0FDMUMsb0NBQUMsT0FBRDtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsT0FBTTtBQUFBLElBQ04sV0FBVyxrQkFDVCxXQUFXLG1CQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNaEMsT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsYUFBWTtBQUFBLElBQ1osTUFBSztBQUFBLElBQ0wsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxLQUVmLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxJQUFPLEdBQUU7QUFBQSxJQUFnQixNQUFLO0FBQUEsTUFDM0Msb0NBQUMsWUFBRDtBQUFBLElBQVUsUUFBTztBQUFBLFVBS3hCLGFBQWEsb0NBQUMsWUFBRDtBQUFBLElBQVksT0FBTztBQUFBO0FBQUE7OztBRHJPaEMsSUFBTSxTQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxRQUFNLFdBQVcsTUFBTSxRQUFRO0FBQy9CLFFBQU0sRUFBRSxJQUFJLFlBQVksT0FBTyxZQUFZO0FBRTNDLFVBQVEsSUFBSTtBQUNaLE1BQUksWUFBWSxZQUFZO0FBRTFCLFlBQVEsSUFBSSx5QkFBeUI7QUFBQTtBQUV2QyxNQUFJLFlBQVksVUFBVTtBQUV4QixZQUFRLElBQUksdUJBQXVCO0FBQUE7QUFFckMsU0FBTztBQUFBO0FBR0YsSUFBTSxVQUF5QixPQUFPLEVBQUUsYUFBYTtBQUMxRCxRQUFNLE9BQU8sT0FBTztBQUVwQixRQUFNLFFBQW1CO0FBQUEsSUFDdkIsY0FBYyxNQUFNLEdBQUcsS0FBSyxTQUFTO0FBQUEsTUFDbkMsT0FBTztBQUFBLFFBQ0wsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUlqQixTQUFPLHVCQUFLLEVBQUUsYUFBTTtBQUFBO0FBR1Asa0JBQWlCO0FBQzlCLFFBQU0sRUFBRSxhQUFNLFNBQVM7QUFFdkIsUUFBTSxxQkFBcUIsc0JBQXNCO0FBRWpELFFBQU0sRUFBRSxTQUFjO0FBRXRCLHNCQUFvQixLQUFhO0FBQy9CLFlBQVEsSUFBSTtBQUFBO0FBR2QsUUFBTSxFQUFFLGlCQUFpQjtBQUN6QixTQUNFLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLGFBQWEsVUFBVSxLQUN0QixhQUNHLEtBQUssQ0FBQyxHQUFHLE1BQU8sRUFBRSxTQUFVLEVBQUUsU0FBVSxJQUFJLElBQzVDLElBQUksQ0FBQyxNQUFNLFVBQVU7QUFDcEIsVUFBTSxPQUFPLFFBQVE7QUFFckIsV0FDRSxvQ0FBQyxXQUFEO0FBQUEsTUFDRSxPQUFPO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBLFFBQVEsS0FBSztBQUFBLE1BQ2IsT0FBTyxLQUFLO0FBQUEsTUFDWixNQUFNLEtBQUs7QUFBQSxNQUNYLFNBQVMsS0FBSyxVQUFVO0FBQUEsTUFDeEIsSUFBSSxLQUFLO0FBQUEsTUFDVCxLQUFLLEtBQUs7QUFBQSxNQUNWO0FBQUEsTUFDQSxlQUFlLEtBQUssaUJBQWlCO0FBQUE7QUFBQSxNQUs5QyxhQUFhLFNBQ1osb0NBQUMsK0JBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUFjLElBQUksRUFBRSxVQUFVO0FBQUEsS0FDNUMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQStCLDJDQUNMLG9CQUFtQixNQUU3RCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBNEMsa0JBRzVELG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUEyRyxtQkFNakksb0NBQUMsK0JBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUFjLElBQUksRUFBRSxVQUFVO0FBQUEsS0FDNUMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXFCLDhCQUNmLG9CQUFtQixXQUV6QyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBZ0IsbUJBQ2hDLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUEyRztBQUFBOzs7QUVuSDNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxtQkFBK0I7QUFFL0IscUJBQXlDO0FBU3pDLElBQU0sYUFBYSxDQUFDLFVBQXFCLHVCQUFLLE9BQU0sRUFBRSxRQUFRO0FBRTlELHFCQUFxQixLQUFhO0FBQ2hDLE1BQUksUUFDRjtBQUVGLFFBQU0sVUFBVSxNQUFNLEtBQUs7QUFDM0IsTUFBSSxDQUFDLFNBQVM7QUFDWixXQUFPO0FBQUE7QUFBQTtBQUdYLHVCQUF1QixPQUFlO0FBQ3BDLE1BQUksTUFBTSxTQUFTLEdBQUc7QUFDcEIsV0FBTztBQUFBO0FBQUE7QUFJWCx3QkFBd0IsUUFBZ0I7QUFDdEMsTUFBSSxPQUFPLFNBQVMsR0FBRztBQUNyQixXQUFPO0FBQUE7QUFBQTtBQUlKLElBQUksVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDekQsUUFBTSxTQUFTLE1BQU0sY0FBYztBQUVuQyxNQUFJLE9BQU8sTUFBTSxRQUFRO0FBQ3pCLFVBQVEsSUFBSTtBQUNaLE1BQUksUUFBUSxLQUFLLElBQUk7QUFDckIsTUFBSSxNQUFNLEtBQUssSUFBSTtBQUNuQixNQUFJLFFBQVEsS0FBSyxJQUFJO0FBQ3JCLE1BQUksZUFBZSxLQUFLLElBQUk7QUFHNUIsTUFDRSxPQUFPLFVBQVUsWUFDakIsT0FBTyxRQUFRLFlBQ2YsT0FBTyxVQUFVLFlBQ2pCLE9BQU8saUJBQWlCLFVBQ3hCO0FBQ0EsV0FBTyxXQUFXO0FBQUEsTUFDaEIsV0FBVztBQUFBO0FBQUE7QUFJZixNQUFJLGNBQWM7QUFBQSxJQUNoQixLQUFLLFlBQVk7QUFBQSxJQUNqQixPQUFPLGNBQWM7QUFBQSxJQUNyQixjQUFjLGVBQWU7QUFBQTtBQUUvQixNQUFJLE9BQU8sT0FBTyxhQUFhLEtBQUssVUFBVTtBQUM1QyxXQUFPLFdBQVcsRUFBRSxhQUFhLFFBQVEsRUFBRSxLQUFLLE9BQU87QUFBQTtBQUl6RCxRQUFNLFNBQVMsTUFBTSxHQUFHLEtBQUssVUFBVTtBQUFBLElBQ3JDLE9BQU87QUFBQSxNQUNMO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFLSixVQUFRLE1BQU07QUFFZCxRQUFNLFNBQVMsRUFBRSxPQUFPLEtBQUssT0FBTztBQUVwQyxNQUFJLENBQUMsUUFBUTtBQUNYLFVBQU0sR0FBRyxLQUFLLE9BQU87QUFBQSxNQUNuQixNQUFNLGlDQUFLLFNBQUwsRUFBYSxVQUFVO0FBQUE7QUFFL0IsV0FBTywyQkFBUyxVQUFVO0FBQUEsU0FDckI7QUFDTCxVQUFNLElBQUksTUFBTTtBQUFBO0FBQUE7QUFJTCxlQUFlO0FBekY5QjtBQTBGRSxNQUFJLGFBQWE7QUFDakIsVUFBUSxJQUFJO0FBQ1osUUFBTSxTQUFTO0FBQ2YsTUFBSSxRQUFRLE9BQU87QUFDbkIsVUFBUSxTQUFTLE1BQU0sR0FBRyxnQkFBZ0IsTUFBTSxVQUFVO0FBVzFELHFCQUFtQjtBQUFBLElBQ2pCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEtBQ2E7QUFDYixVQUFNLFFBQVEsQ0FBQyxDQUFDO0FBRWhCLFdBQ0Usb0NBQUMsU0FBRDtBQUFBLE1BQ0U7QUFBQSxNQUNBLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlULFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQU9OLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzVCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxLQUNULFVBR0Qsb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVztBQUFBO0FBQUEsa0JBRVAsU0FBUztBQUFBLElBQ2IsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsVUFBUTtBQUFBLElBQ1IsaUJBQWlCLENBQUMsQ0FBQztBQUFBLE9BR3ZCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxLQUNULFFBR0Qsb0NBQUMsV0FBRDtBQUFBLElBQ0UsY0FBYywrQ0FBWSxXQUFaLG1CQUFvQjtBQUFBLElBQ2xDLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxNQUdiLGdEQUFZLGdCQUFaLG1CQUF5QixPQUN4QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBd0IsaUJBQ2xDLCtDQUFZLGdCQUFaLG1CQUF5QixRQUcvQixPQUVOLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxLQUNULGtCQUlELG9DQUFDLFdBQUQ7QUFBQSxJQUNFLGNBQWMsK0NBQVksV0FBWixtQkFBb0I7QUFBQSxJQUNsQyxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsTUFFYixnREFBWSxnQkFBWixtQkFBeUIsU0FDeEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXVCLGlCQUNqQywrQ0FBWSxnQkFBWixtQkFBeUIsVUFHL0IsT0FHTixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsS0FDVCxXQUlELG9DQUFDLFdBQUQ7QUFBQSxJQUNFLGNBQWMsK0NBQVksV0FBWixtQkFBb0I7QUFBQSxJQUNsQyxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsTUFFYixnREFBWSxnQkFBWixtQkFBeUIsZ0JBQ3hCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUF1QixpQkFDakMsK0NBQVksZ0JBQVosbUJBQXlCLGlCQUcvQixPQUdOLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxLQUNOO0FBQUE7OztBQ3RPYjtBQUFBO0FBQUE7QUFBQTtBQUFlLGdCQUFlO0FBQzVCLFNBQU8sb0NBQUMsUUFBRCxNQUFNO0FBQUE7OztBQ0RmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJTyxJQUFNLFNBQXVCLE1BQU07QUFDeEMsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUd0QixrQkFBaUI7QUFDOUIsU0FDRSwwREFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBa0QsaUNBR2xFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFrRDtBQUFBOzs7QUNkeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXlCO0FBSXpCLG1CQUFxQjtBQUNyQixxQkFBcUQ7QUFHOUMsSUFBTSxTQUF1QixNQUFNO0FBQ3hDLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFHckMsMEJBQTBCLFVBQW1CO0FBQzNDLE1BQUksT0FBTyxhQUFhLFlBQVksU0FBUyxTQUFTLEdBQUc7QUFDdkQsV0FBTztBQUFBO0FBQUE7QUFJWCwwQkFBMEIsVUFBbUI7QUFDM0MsTUFBSSxPQUFPLGFBQWEsWUFBWSxTQUFTLFNBQVMsR0FBRztBQUN2RCxXQUFPO0FBQUE7QUFBQTtBQWdCWCxJQUFNLGNBQWEsQ0FBQyxVQUFxQjtBQUN2QyxTQUFPLHVCQUFLLE9BQU0sRUFBRSxRQUFRO0FBQUE7QUFHdkIsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQXhDN0Q7QUF5Q0UsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixRQUFNLFdBQVcsV0FBSyxJQUFJLGdCQUFULG1CQUFzQjtBQUN2QyxRQUFNLFdBQVcsV0FBSyxJQUFJLGdCQUFULG1CQUFzQjtBQUV2QyxRQUFNLFNBQVMsRUFBRSxVQUFVO0FBRTNCLFVBQVEsSUFBSTtBQUVaLE1BQUksT0FBTyxhQUFhLFlBQVksT0FBTyxhQUFhLFVBQVU7QUFDaEUsV0FBTyxZQUFXO0FBQUEsTUFDaEIsV0FBVztBQUFBO0FBQUE7QUFJZixRQUFNLGNBQWM7QUFBQSxJQUNsQixVQUFVLGlCQUFpQjtBQUFBLElBQzNCLFVBQVUsaUJBQWlCO0FBQUE7QUFFN0IsTUFBSSxPQUFPLE9BQU8sYUFBYSxLQUFLO0FBQ2xDLFdBQU8sWUFBVyxFQUFFLGFBQWE7QUFFbkMsUUFBTSxPQUFPLE1BQU0sTUFBTSxFQUFFLFVBQVU7QUFFckMsVUFBUSxJQUFJO0FBRVosVUFBUSxJQUFJLENBQUM7QUFHYixNQUFJLENBQUMsTUFBTTtBQUNULFlBQVEsSUFBSTtBQUNaLFdBQU8sWUFBVztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxXQUFXO0FBQUE7QUFBQTtBQUtmLFNBQU8sa0JBQWtCLEtBQUssSUFBSTtBQUFBO0FBR3JCLGtCQUFpQjtBQWpGaEM7QUFrRkUsUUFBTSxRQUFPO0FBRWIsUUFBTSxDQUFDLE9BQU8sWUFBWSw2QkFBUztBQUNuQyxRQUFNLENBQUMsZ0JBQWdCO0FBRXZCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQTJCLFVBQzFDLGdDQUFNLGNBQ0wsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2IsZ0NBQU0sY0FBYSwrQkFJMUIsb0NBQUMsUUFBRDtBQUFBLElBQU0sUUFBTztBQUFBLEtBQ1gsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTyxhQUFhLElBQUksaUJBQWlCO0FBQUEsTUFFM0Msb0NBQUMsZ0JBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxJQUNOLElBQUc7QUFBQSxJQUNILGNBQWE7QUFBQSxJQUNiLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLGNBQWMscUNBQU0sV0FBTixtQkFBYztBQUFBLElBQzVCLFVBQVUsQ0FBQyxDQUFDLHNDQUFNLGdCQUFOLG1CQUFtQjtBQUFBLElBQy9CLGNBQWE7QUFBQSxNQUVmLG9DQUFDLGdCQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixJQUFHO0FBQUEsSUFDSCxjQUFhO0FBQUEsSUFDYixNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixnQkFBZ0I7QUFBQSxJQUNoQixjQUFjLHFDQUFNLFdBQU4sbUJBQWM7QUFBQSxJQUM1QixVQUFVLENBQUMsQ0FBQyxzQ0FBTSxnQkFBTixtQkFBbUI7QUFBQSxJQUMvQixjQUFhO0FBQUEsTUFFZixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBOEUscUJBR2hHLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLGFBQWEsTUFBTSxTQUFTO0FBQUEsSUFDNUIsV0FBVTtBQUFBLEtBRVYsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQVksWUFJaEMsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQWlDLDBCQUUvQyxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQ1Asb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXVDO0FBQUE7OztBQ2hKbkUsSUFBTywwQkFBUSxFQUFDLFdBQVUsWUFBVyxTQUFRLEVBQUMsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLG9DQUFtQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxTQUFRLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHlCQUF3QixFQUFDLE1BQUsseUJBQXdCLFlBQVcsZ0JBQWUsUUFBTyxZQUFXLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDRDQUEyQyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTywrQkFBOEIsRUFBQyxNQUFLLCtCQUE4QixZQUFXLHlCQUF3QixRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsa0RBQWlELFdBQVUsQ0FBQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sNkJBQTRCLEVBQUMsTUFBSyw2QkFBNEIsWUFBVyx5QkFBd0IsUUFBTyxPQUFNLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLGdEQUErQyxXQUFVLENBQUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLG1DQUFrQyxFQUFDLE1BQUssbUNBQWtDLFlBQVcsNkJBQTRCLFFBQU8sUUFBVSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyxzREFBcUQsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sc0JBQXFCLEVBQUMsTUFBSyxzQkFBcUIsWUFBVyxnQkFBZSxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMseUNBQXdDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxTQUFRLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxzQkFBcUIsRUFBQyxNQUFLLHNCQUFxQixZQUFXLFFBQU8sUUFBTyxTQUFRLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLHlDQUF3QyxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUJBQWdCLEVBQUMsTUFBSyxpQkFBZ0IsWUFBVyxRQUFPLFFBQU8sVUFBUyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvQ0FBbUMsV0FBVSxDQUFDLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsV0FBUSxPQUFNOzs7QXhCY3JySCxJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosc0JBQXNCO0FBQUEsSUFDbEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQkFBaUI7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix5QkFBeUI7QUFBQSxJQUNyQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLCtCQUErQjtBQUFBLElBQzNCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosNkJBQTZCO0FBQUEsSUFDekIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixtQ0FBbUM7QUFBQSxJQUMvQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHNCQUFzQjtBQUFBLElBQ2xCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEaEdkLElBQU0sTUFBTTtBQUVaLElBQUksSUFBSTtBQUdSLElBQUksUUFBUTtBQUdaLElBQUksSUFDRixVQUNBLHVCQUFRLE9BQU8sZ0JBQWdCLEVBQUUsV0FBVyxNQUFNLFFBQVE7QUFLNUQsSUFBSSxJQUFJLHVCQUFRLE9BQU8sVUFBVSxFQUFFLFFBQVE7QUFFM0MsSUFBSSxJQUFJLDJCQUFPO0FBRWYsSUFBSSxJQUNGLEtBQ0EsMENBQXFCO0FBQUEsRUFDbkIsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBO0FBSVYsSUFBSSxJQUFJLGVBQWUsQ0FBQyxLQUFLLFFBQVE7QUFDbkMsVUFBUSxJQUFJO0FBQ1osTUFBSSxLQUFLO0FBQUE7QUFHWCxJQUFNLE9BQU8sUUFBUSxJQUFJLFFBQVE7QUFFakMsSUFBSSxPQUFPLE1BQU0sTUFBTTtBQUNyQixVQUFRLElBQUksc0NBQStCO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
