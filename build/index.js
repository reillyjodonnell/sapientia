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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
var import_react5 = require("@remix-run/react");
var import_node2 = require("@remix-run/node");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-FOVEUNER.css";

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
var import_react4 = require("react");
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
    className: "cursor-pointer flex justify-center items-center  px-5 py-2 rounded-xl  hover:text-accent-pink  hover:opacity-100 font-semibold focus-within:text-accent-pink "
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/reillyjodonnell/sapientia",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "focus-within:opacity-100 "
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
  const [openDropdown, setOpenDropdown] = (0, import_react4.useState)(false);
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
  }, user ? /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "px-6 py-2  flex justify-center items-center place-items-center border border-solid border-white/60  rounded-md drop-shadow-md  focus-within::bg-slate-50/5 focus-within::border-white hover:bg-slate-50/5 hover:border-white "
  }, /* @__PURE__ */ React.createElement("span", null, capitalizeFirstLetter(user.username))), /* @__PURE__ */ React.createElement("div", {
    onClick: () => setOpenDropdown((prev) => !prev),
    className: "flex relative justify-center items-center ml-2"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: openDropdown ? { transform: "rotate(180deg)" } : void 0,
    className: "icon icon-tabler icon-tabler-chevron-down",
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    strokeWidth: "3",
    stroke: "white",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })), openDropdown && /* @__PURE__ */ React.createElement("div", {
    className: "z-10 absolute top-12 right-0 rounded-lg border-2 p-8 bg-[#1b1b2a]  border-[#ffffff48]  shadow-normal "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-6 flex justify-start items-center py-4 rounded-xl transition-all hover:bg-[#75757521]"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-settings mr-4",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "#bebebe",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })), /* @__PURE__ */ React.createElement("span", null, "Settings")), /* @__PURE__ */ React.createElement("div", {
    className: "px-6 flex justify-start items-center py-4 rounded-xl transition-all hover:bg-[#75757521]"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-language mr-4",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "#bebebe",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 5h7"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 3v2c0 4.418 -2.239 8 -5 8"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 9c-.003 2.144 2.952 3.908 6.7 4"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 20l4 -9l4 9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.1 18h-6.2"
  })), /* @__PURE__ */ React.createElement("span", null, "Languages")), /* @__PURE__ */ React.createElement("div", {
    onClick: () => window.alert("logged out"),
    className: "px-6 flex justify-start items-center py-4 rounded-xl transition-all hover:bg-[#75757521]"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-logout mr-4",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "#bebebe",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 12h14l-3 -3m0 6l3 -3"
  })), /* @__PURE__ */ React.createElement("span", null, "Logout"))))) : /* @__PURE__ */ React.createElement(import_react3.Link, {
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
    className: "relative px-6 lg:px-12 py-6 flex justify-between items-center text-white header  bg-[#00000038]"
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
  console.log(`requireUserId: ${userId}`);
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
  const user = await getUser(request);
  return (0, import_node2.json)(user);
};
function App() {
  const data2 = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react5.Meta, null), /* @__PURE__ */ React.createElement(import_react5.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
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
  }), /* @__PURE__ */ React.createElement(import_react5.Outlet, null), /* @__PURE__ */ React.createElement(import_react5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react5.Scripts, null), /* @__PURE__ */ React.createElement(import_react5.LiveReload, null)))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/paths/index.tsx
var paths_exports = {};
__export(paths_exports, {
  default: () => Courses,
  links: () => links2
});

// app/styles/index.css
var styles_default = "/build/_assets/index-OECAOOPJ.css";

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
var import_react7 = require("@remix-run/react");

// app/components/formatted-input.tsx
var import_react6 = require("react");
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
  const [showPassword, setShowPassword] = (0, import_react6.useState)(false);
  const [error, setError] = (0, import_react6.useState)(hasError);
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
  }, "Already have an account?", /* @__PURE__ */ React.createElement(import_react7.Link, {
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
var import_react9 = require("@remix-run/react");

// app/components/search.tsx
var import_react8 = require("react");
var import_react_router_dom = require("react-router-dom");
function Search({ size = "large" }) {
  const searchRef = (0, import_react8.useRef)(null);
  const labelRef = (0, import_react8.useRef)(null);
  let navigate = (0, import_react_router_dom.useNavigate)();
  async function handleSubmit(event) {
    let topic = event.target[0].value;
    event.preventDefault();
    topic = topic.toLowerCase();
    navigate(`../learn/${topic}`, { replace: true });
  }
  const handleKeyPress = (0, import_react8.useCallback)((event) => {
    if (event.metaKey === true && event.key === "k") {
      if (searchRef.current !== null && labelRef.current !== null) {
        searchRef.current.focus();
        labelRef.current.focus();
      }
    }
  }, []);
  (0, import_react8.useEffect)(() => {
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
              border-4 border-white bg-white focus-within:border-4 focus-within:border-solid focus-within:border-accent-green
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
      className: " cursor-pointer flex bg-accent-pink py-4 px-16 rounded-lg text-lg border-4 border-transparent font-bold focus-within:border-4 focus-within:border-white focus-within:opacity-100  hover:border-4 hover:border-white hover:opacity-100   "
    }, /* @__PURE__ */ React.createElement("span", {
      onClick: async () => talkToTheServer()
    }, "Take a Tour")))));
  };
  const TopicContainer = ({ text }) => {
    const link = text.toLowerCase();
    return /* @__PURE__ */ React.createElement(import_react9.Link, {
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
    }, /* @__PURE__ */ React.createElement(Search, null), /* @__PURE__ */ React.createElement(ChooseATopic, null));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "main-content py-8 px-6 lg:px-12 flex justify-center items-center "
  }, /* @__PURE__ */ React.createElement(LeftContent, null), /* @__PURE__ */ React.createElement(RightContent, null));
};
var main_content_default = MainContent;

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/index.tsx
var import_react10 = require("react");
var links4 = () => [
  { rel: "stylesheet", href: styles_default }
];
function Index() {
  const useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react10.useLayoutEffect : import_react10.useEffect;
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
var import_react12 = require("react");
var links5 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Learn() {
  const useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react12.useLayoutEffect : import_react12.useEffect;
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
    size: "medium"
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
  links: () => links6,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var import_react13 = require("@remix-run/react");
var links6 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var loader2 = async ({ params }) => {
  const name = (params == null ? void 0 : params.topicId) ?? "";
  return (0, import_node3.json)({ name });
};
function Learn2() {
  const { name } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-6xl mb-3 capitalize",
    style: {
      textShadow: "rgba(192, 219, 255, 0.3) 0px 0px 80px, rgba(65, 120, 255, 0.15) 0px 0px 32px"
    }
  }, name)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col content-center items-center w-full"
  }, /* @__PURE__ */ React.createElement(import_react13.Outlet, null)));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId/index.tsx
var topicId_exports2 = {};
__export(topicId_exports2, {
  action: () => action,
  default: () => Index2,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node");
var import_react16 = require("@remix-run/react");
var import_react_router_dom3 = require("react-router-dom");

// app/components/topic-card.tsx
var import_react14 = require("@remix-run/react");
var import_react15 = require("react");
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
  id,
  liked
}) {
  const [upvote, setUpvote] = (0, import_react15.useState)(liked);
  const [downvote, setDownvote] = (0, import_react15.useState)(false);
  const [count, setCount] = (0, import_react15.useState)(upvotes ?? 0);
  const [validLink, setValidLink] = (0, import_react15.useState)(false);
  const [linkError, setLinkError] = (0, import_react15.useState)(false);
  const volume = mute ? 0 : 0.2;
  const [upvoteSound] = (0, import_use_sound.default)(plop_trimmed_default, { soundEnabled: !mute, volume });
  const [downvoteSound] = (0, import_use_sound.default)(plop_trimmed_default, {
    soundEnabled: !mute,
    playbackRate: 0.65,
    volume,
    interrupt: true
  });
  (0, import_react15.useEffect)(() => {
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
    (0, import_react15.useEffect)(() => {
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
  }, "Read Article"))))), /* @__PURE__ */ React.createElement(import_react14.Form, {
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
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const { id, _action } = Object.fromEntries(formData);
  const fields = {
    postId: id.toString(),
    userId: userId.toString()
  };
  const hasLiked = await db.like.findFirst({
    where: {
      userId: fields.userId,
      postId: fields.postId
    }
  });
  const hasDisliked = await db.dislike.findFirst({
    where: {
      userId: fields.userId,
      postId: fields.postId
    }
  });
  if (_action === "downvote") {
    if (!hasDisliked) {
      console.log(__spreadValues({}, fields));
      await db.dislike.create({
        data: __spreadValues({}, fields)
      });
    }
  }
  if (_action === "upvote") {
    if (!hasLiked) {
      console.log(__spreadValues({}, fields));
      await db.like.create({
        data: __spreadValues({}, fields)
      });
    }
  }
  return null;
};
var loader3 = async ({ params }) => {
  var _e, _h;
  const name = params.topicId;
  const data2 = {
    articlePosts: await db.post.findMany({
      where: {
        topicName: name
      }
    })
  };
  const postIds = data2.articlePosts.map((_a) => {
    var _b = _a, { id } = _b, rest = __objRest(_b, ["id"]);
    return id;
  });
  const likedPostsArray = {
    likedPosts: await db.like.findMany({
      where: {
        postId: {
          in: postIds
        }
      }
    })
  };
  const likedPostIds = (_e = likedPostsArray.likedPosts) == null ? void 0 : _e.map((_c) => {
    var _d = _c, { postId } = _d, rest = __objRest(_d, ["postId"]);
    return postId;
  });
  const dislikedPostsArray = {
    dislikedPosts: await db.dislike.findMany({
      where: {
        postId: {
          in: postIds
        }
      }
    })
  };
  const dislikedPostIds = (_h = dislikedPostsArray.dislikedPosts) == null ? void 0 : _h.map((_f) => {
    var _g = _f, { postId } = _g, rest = __objRest(_g, ["postId"]);
    return postId;
  });
  return (0, import_node4.json)({ dislikedPostIds, likedPostIds, data: data2, name });
};
function Index2() {
  const { likedPostIds, data: data2, name } = (0, import_react16.useLoaderData)();
  const formattedTopicName = capitalizeFirstLetter(name);
  const { mute } = useSound();
  function getPostUrl(url) {
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
      liked: likedPostIds.includes(item.id),
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
var import_react17 = require("@remix-run/react");
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
      topicName: topic,
      url
    }
  });
  topic = topic.toLowerCase();
  const fields = { topicName: topic, url, title, authorOfPost };
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
  let actionData = (0, import_react17.useActionData)();
  const params = (0, import_react17.useParams)();
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
var import_react18 = require("react");
var import_node6 = require("@remix-run/node");
var import_react19 = require("@remix-run/react");
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
  if (!user) {
    return badRequest2({
      fields,
      formError: "Username/ password is incorrect"
    });
  }
  return createUserSession(user.id, "/");
};
function Login2() {
  var _a, _b, _c, _d;
  const data2 = (0, import_react19.useActionData)();
  const [error, setError] = (0, import_react18.useState)(false);
  const [searchParams] = (0, import_react19.useSearchParams)();
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
  }, "Don't have an account?", /* @__PURE__ */ React.createElement(import_react19.Link, {
    to: "/signup"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "ml-1 text-accent-pink cursor-pointer"
  }, "Sign Up")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "e39a6533", "entry": { "module": "/build/entry.client-XWTGT3GO.js", "imports": ["/build/_shared/chunk-EMMBIL3A.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-44PO4N4A.js", "imports": ["/build/_shared/chunk-FEMA6QVS.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-ZF5Q6YTK.js", "imports": ["/build/_shared/chunk-X3T3H65L.js", "/build/_shared/chunk-7YJ2GFBM.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn": { "id": "routes/learn", "parentId": "root", "path": "learn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn-NDMUXF4E.js", "imports": ["/build/_shared/chunk-X3T3H65L.js", "/build/_shared/chunk-7YJ2GFBM.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId": { "id": "routes/learn/$topicId", "parentId": "routes/learn", "path": ":topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId-S6QEL5NC.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/index": { "id": "routes/learn/$topicId/index", "parentId": "routes/learn/$topicId", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/index-DJNGXZBA.js", "imports": ["/build/_shared/chunk-36JN244Y.js", "/build/_shared/chunk-GK56CZJG.js", "/build/_shared/chunk-FEMA6QVS.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new": { "id": "routes/learn/$topicId/new", "parentId": "routes/learn/$topicId", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new-NNW3ZRYI.js", "imports": ["/build/_shared/chunk-36JN244Y.js", "/build/_shared/chunk-GK56CZJG.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId/new/index": { "id": "routes/learn/$topicId/new/index", "parentId": "routes/learn/$topicId/new", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId/new/index-VZLJRZCW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/index": { "id": "routes/learn/index", "parentId": "routes/learn", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/index-Y7YTSXDN.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-VDEEAAGS.js", "imports": ["/build/_shared/chunk-ERDQSZPS.js", "/build/_shared/chunk-7YJ2GFBM.js", "/build/_shared/chunk-GK56CZJG.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths/index": { "id": "routes/paths/index", "parentId": "root", "path": "paths", "index": true, "caseSensitive": void 0, "module": "/build/routes/paths/index-ZU56TSHK.js", "imports": ["/build/_shared/chunk-7YJ2GFBM.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup": { "id": "routes/signup", "parentId": "root", "path": "signup", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/signup-5BASFOME.js", "imports": ["/build/_shared/chunk-ERDQSZPS.js", "/build/_shared/chunk-7YJ2GFBM.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E39A6533.js" };

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
  res.send("BOOM");
});
var port = process.env.PORT || 4e3;
app.listen(port, () => {
  console.log(`\u{1F680} live at http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29udGV4dHMvc291bmQtY29udGV4dC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbW90ZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsICIuLi9hcHAvaGVscGVyL2hlbHBlci50cyIsICIuLi9hcHAvdXRpbHMvZGIuc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcGF0aHMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9zaWdudXAudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1hdHRlZC1pbnB1dC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRlbnQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NlYXJjaC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9wb3B1bGFyLXRvcGljcy50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3RvcGljLWNhcmQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9leHByZXNzJztcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICAnL2J1aWxkJyxcbiAgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYy9idWlsZCcsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6ICcxeScgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycsIHsgbWF4QWdlOiAnMWgnIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oJ3RpbnknKSk7XG5cbmFwcC5hbGwoXG4gICcqJyxcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmFwcC5nZXQoJy9zZXJ2ZXJjb2RlJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKCdCT09NJyk7XG59KTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBcdUQ4M0RcdURFODAgbGl2ZSBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3BhdGhzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvc2lnbnVwLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLyR0b3BpY0lkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3BhdGhzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXRocy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYXRoc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NpZ251cFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2lnbnVwXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNpZ251cFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxlYXJuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFyblwiLFxuICAgICAgcGF0aDogXCI6dG9waWNJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuLyR0b3BpY0lkXCIsXG4gICAgICBwYXRoOiBcIm5ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZC9uZXdcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFyblwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB7IGpzb24sIExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGFpbHdpbmQuY3NzJztcbmltcG9ydCBTb3VuZFByb3ZpZGVyIGZyb20gJy4vY29udGV4dHMvc291bmQtY29udGV4dCc7XG5pbXBvcnQgTW90ZCBmcm9tICcuL2NvbXBvbmVudHMvbW90ZCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICcuL3V0aWxzL3Nlc3Npb24uc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiAndXRmLTgnLFxuICB0aXRsZTogJ1NhcGllbnRpYScsXG4gIHZpZXdwb3J0OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScsXG59KTtcblxudHlwZSBVc2VyID0ge1xuICBpZDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdCk7XG4gIHJldHVybiBqc29uKHVzZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxVc2VyPigpO1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS40JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNvdW5kUHJvdmlkZXI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TW90ZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8SGVhZGVyIHVzZXI9e2RhdGF9IC8+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgICAgIDwvU291bmRQcm92aWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIFNvdW5kQ29udGV4dFN0YXRlID0ge1xuICBtdXRlOiBib29sZWFuO1xuICB0b2dnbGVNdXRlOiBGdW5jdGlvbjtcbn07XG5cbmNvbnN0IFNvdW5kQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U291bmRDb250ZXh0U3RhdGUgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNvdW5kKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChTb3VuZENvbnRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb3VuZFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogYW55KSB7XG4gIGNvbnN0IFttdXRlLCBzZXRNdXRlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlJykgPz8gJ2ZhbHNlJztcbiAgICBzZXRNdXRlKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gSlNPTi5wYXJzZShyZXN1bHQpIDogZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAvLyByZXRyaWV2ZSBpbiBsb2NhbFN0b3JhZ2VcbiAgLy8gICBjb25zdCBpc011dGVkU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211dGUnKTtcblxuICAvLyAgIGNvbnN0IGlzTXV0ZWQgPSAhIWlzTXV0ZWRTdHJpbmc7XG5cbiAgLy8gICBzZXRNdXRlKGlzTXV0ZWQpO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gRXZlcnl0aW1lIHRoZSB2YWx1ZSBvZiBtdXRlIGNoYW5nZXMgb3ZlcnJpZGUgdGhlIGxvY2FsIHN0b3JhZ2UgdmFsdWVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXV0ZScsIEpTT04uc3RyaW5naWZ5KG11dGUpKTtcbiAgfSwgW211dGVdKTtcblxuICBmdW5jdGlvbiB0b2dnbGVNdXRlKCkge1xuICAgIHNldE11dGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IHsgbXV0ZSwgdG9nZ2xlTXV0ZSB9O1xuICByZXR1cm4gKFxuICAgIDxTb3VuZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlc30+e2NoaWxkcmVufTwvU291bmRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIiwgImV4cG9ydCBjb25zdCBNb3RkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWRhcmstbW9kZS1iZyByb3VuZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHB4LTIwICBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFjY2VudC1waW5rIHctZnVsbCB0ZXh0LWNlbnRlciByb3VuZGVkXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgV2Ugc3RhbmQgd2l0aCBVa3JhaW5lIFx1RDgzQ1x1RERGQVx1RDgzQ1x1RERFNlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3Jhem9tZm9ydWtyYWluZS5vcmcvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtMiBjdXJzb3ItcG9pbnRlciBmb250LWJvbGQgdGV4dC1wcmltYXJ5LXRleHQgZm9jdXMtd2l0aGluOnRleHQtYWNjZW50LXBpbmsgaG92ZXI6dGV4dC1hY2NlbnQtcGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERvbmF0ZSBoZXJlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vdGQ7XG4iLCAiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgdXNlU291bmQgfSBmcm9tICd+L2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnfi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcic7XG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGUgfV07XG59O1xuXG5jb25zdCBMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHNwYWNlLXgtMSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgPExpbmsgdG89eycvJ30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCAgXCI+U2FwaWVudGlhPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gY29uc3QgTGFuZ3VhZ2VTZWxlY3RvciA9ICgpID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4vLyAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMS41IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuLy8gICAgICAgICA8c3ZnXG4vLyAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1sYW5ndWFnZSBoLTYgdy02IHN0cm9rZS13aGl0ZVwiXG4vLyAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4vLyAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuLy8gICAgICAgICAgIGZpbGw9XCJub25lXCJcbi8vICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuLy8gICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuLy8gICAgICAgICAgIDxwYXRoIGQ9XCJNNCA1aDdcIiAvPlxuLy8gICAgICAgICAgIDxwYXRoIGQ9XCJNOSAzdjJjMCA0LjQxOCAtMi4yMzkgOCAtNSA4XCIgLz5cbi8vICAgICAgICAgICA8cGF0aCBkPVwiTTUgOWMtLjAwMyAyLjE0NCAyLjk1MiAzLjkwOCA2LjcgNFwiIC8+XG4vLyAgICAgICAgICAgPHBhdGggZD1cIk0xMiAyMGw0IC05bDQgOVwiIC8+XG4vLyAgICAgICAgICAgPHBhdGggZD1cIk0xOS4xIDE4aC02LjJcIiAvPlxuLy8gICAgICAgICA8L3N2Zz5cbi8vICAgICAgICAgPHNwYW4+RW5nbGlzaDwvc3Bhbj5cbi8vICAgICAgIDwvYnV0dG9uPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxudHlwZSBOYXZFbGVtZW50UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IEdpdGh1YiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBweC01IHB5LTIgcm91bmRlZC14bCAgaG92ZXI6dGV4dC1hY2NlbnQtcGluayAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVpbGx5am9kb25uZWxsL3NhcGllbnRpYVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgXCJcbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPXsnMzBweCd9XG4gICAgICAgICAgaGVpZ2h0PXsnMzBweCd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGZpbGwtcHJpbWFyeS10ZXh0IFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk02NCA1LjEwM2MtMzMuMzQ3IDAtNjAuMzg4IDI3LjAzNS02MC4zODggNjAuMzg4IDAgMjYuNjgyIDE3LjMwMyA0OS4zMTcgNDEuMjk3IDU3LjMwMyAzLjAxNy41NiA0LjEyNS0xLjMxIDQuMTI1LTIuOTA1IDAtMS40NC0uMDU2LTYuMTk3LS4wODItMTEuMjQzLTE2LjggMy42NTMtMjAuMzQ1LTcuMTI1LTIwLjM0NS03LjEyNS0yLjc0Ny02Ljk4LTYuNzA1LTguODM2LTYuNzA1LTguODM2LTUuNDgtMy43NDguNDEzLTMuNjcuNDEzLTMuNjcgNi4wNjMuNDI1IDkuMjU3IDYuMjIzIDkuMjU3IDYuMjIzIDUuMzg2IDkuMjMgMTQuMTI3IDYuNTYyIDE3LjU3MyA1LjAyLjU0Mi0zLjkwMyAyLjEwNy02LjU2OCAzLjgzNC04LjA3Ni0xMy40MTMtMS41MjUtMjcuNTE0LTYuNzA0LTI3LjUxNC0yOS44NDMgMC02LjU5MyAyLjM2LTExLjk4IDYuMjIzLTE2LjIxLS42MjgtMS41Mi0yLjY5NS03LjY2Mi41ODQtMTUuOTggMCAwIDUuMDctMS42MjMgMTYuNjEgNi4xOUM1My43IDM1IDU4Ljg2NyAzNC4zMjcgNjQgMzQuMzA0YzUuMTMuMDIzIDEwLjMuNjk0IDE1LjEyNyAyLjAzMyAxMS41MjYtNy44MTMgMTYuNTktNi4xOSAxNi41OS02LjE5IDMuMjg3IDguMzE3IDEuMjIgMTQuNDYuNTkzIDE1Ljk4IDMuODcyIDQuMjMgNi4yMTUgOS42MTcgNi4yMTUgMTYuMjEgMCAyMy4xOTQtMTQuMTI3IDI4LjMtMjcuNTc0IDI5Ljc5NiAyLjE2NyAxLjg3NCA0LjA5NyA1LjU1IDQuMDk3IDExLjE4MyAwIDguMDgtLjA3IDE0LjU4My0uMDcgMTYuNTcyIDAgMS42MDcgMS4wODggMy40OSA0LjE0OCAyLjg5NyAyMy45OC03Ljk5NCA0MS4yNjMtMzAuNjIyIDQxLjI2My01Ny4yOTRDMTI0LjM4OCAzMi4xNCA5Ny4zNSA1LjEwNCA2NCA1LjEwNHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjYuNDg0IDkxLjgwNmMtLjEzMy4zLS42MDUuMzktMS4wMzUuMTg1LS40NC0uMTk2LS42ODUtLjYwNS0uNTQzLS45MDYuMTMtLjMxLjYwMy0uMzk1IDEuMDQtLjE4OC40NC4xOTcuNjkuNjEuNTM3Ljkxem0yLjQ0NiAyLjcyOWMtLjI4Ny4yNjctLjg1LjE0My0xLjIzMi0uMjgtLjM5Ni0uNDItLjQ3LS45ODMtLjE3Ny0xLjI1NC4yOTgtLjI2Ni44NDQtLjE0IDEuMjQuMjguMzk0LjQyNi40NzIuOTg0LjE3IDEuMjU1ek0zMS4zMTIgOTguMDEyYy0uMzcuMjU4LS45NzYuMDE3LTEuMzUtLjUyLS4zNy0uNTM4LS4zNy0xLjE4My4wMS0xLjQ0LjM3My0uMjU4Ljk3LS4wMjUgMS4zNS41MDcuMzY4LjU0NS4zNjggMS4xOS0uMDEgMS40NTJ6bTMuMjYxIDMuMzYxYy0uMzMuMzY1LTEuMDM2LjI2Ny0xLjU1Mi0uMjMtLjUyNy0uNDg3LS42NzQtMS4xOC0uMzQzLTEuNTQ0LjMzNi0uMzY2IDEuMDQ1LS4yNjQgMS41NjQuMjMuNTI3LjQ4Ni42ODYgMS4xOC4zMzMgMS41NDN6bTQuNSAxLjk1MWMtLjE0Ny40NzMtLjgyNS42ODgtMS41MS40ODYtLjY4My0uMjA3LTEuMTMtLjc2LS45OS0xLjIzOC4xNC0uNDc3LjgyMy0uNyAxLjUxMi0uNDg1LjY4My4yMDYgMS4xMy43NTYuOTg4IDEuMjM3em00Ljk0My4zNjFjLjAxNy40OTgtLjU2My45MS0xLjI4LjkyLS43MjMuMDE3LTEuMzA4LS4zODctMS4zMTUtLjg3NyAwLS41MDMuNTY4LS45MSAxLjI5LS45MjQuNzE3LS4wMTMgMS4zMDYuMzg3IDEuMzA2Ljg4em00LjU5OC0uNzgyYy4wODYuNDg1LS40MTMuOTg0LTEuMTI2IDEuMTE3LS43LjEzLTEuMzUtLjE3Mi0xLjQ0LS42NTMtLjA4Ni0uNDk4LjQyMi0uOTk3IDEuMTIyLTEuMTI2LjcxNC0uMTIzIDEuMzU0LjE3IDEuNDQ0LjY2M3ptMCAwXCI+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgbXV0ZSwgdG9nZ2xlTXV0ZSwgdXNlciB9OiBhbnkpID0+IHtcbiAgY29uc3QgW29wZW5Ecm9wZG93biwgc2V0T3BlbkRyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIlRvcGljc1wiIGxvY2F0aW9uPVwiL2xlYXJuXCIgLz5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiUGF0aHNcIiBsb2NhdGlvbj1cIi9wYXRoc1wiIC8+XG4gICAgICB7LyogPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJMb2dpblwiIGxvY2F0aW9uPVwiL2xvZ2luXCIgLz4gKi99XG4gICAgICA8R2l0aHViIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50ICBhY3RpdmU6Ym9yZGVyLXN0b25lLTIwMCBob3Zlcjpib3JkZXItc3RvbmUtMjAwIHB4LTQgcHktWy4yNXJlbV0gcm91bmRlZFwiPlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RvZ2dsZU11dGV9IGNsYXNzTmFtZT1cInRleHQtMnhsIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICB7bXV0ZSA/ICdcdUQ4M0RcdUREMDcnIDogJ1x1RDgzRFx1REQwOCd9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPExhbmd1YWdlU2VsZWN0b3IgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNiBweS0yICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwbGFjZS1pdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUvNjAgIHJvdW5kZWQtbWQgZHJvcC1zaGFkb3ctbWQgIGZvY3VzLXdpdGhpbjo6Ymctc2xhdGUtNTAvNSBmb2N1cy13aXRoaW46OmJvcmRlci13aGl0ZSBob3ZlcjpiZy1zbGF0ZS01MC81IGhvdmVyOmJvcmRlci13aGl0ZSBcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e2NhcGl0YWxpemVGaXJzdExldHRlcih1c2VyLnVzZXJuYW1lKX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbkRyb3Bkb3duKChwcmV2KSA9PiAhcHJldil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggcmVsYXRpdmUganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1sLTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgb3BlbkRyb3Bkb3duID8geyB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScgfSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWNoZXZyb24tZG93blwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNlwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjZcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCI2IDkgMTIgMTUgMTggOVwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICB7b3BlbkRyb3Bkb3duICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgYWJzb2x1dGUgdG9wLTEyIHJpZ2h0LTAgcm91bmRlZC1sZyBib3JkZXItMiBwLTggYmctWyMxYjFiMmFdICBib3JkZXItWyNmZmZmZmY0OF0gIHNoYWRvdy1ub3JtYWwgXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBweS00IHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctWyM3NTc1NzUyMV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItc2V0dGluZ3MgbXItNFwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzJcIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjYmViZWJlXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjMyNSA0LjMxN2MuNDI2IC0xLjc1NiAyLjkyNCAtMS43NTYgMy4zNSAwYTEuNzI0IDEuNzI0IDAgMCAwIDIuNTczIDEuMDY2YzEuNTQzIC0uOTQgMy4zMSAuODI2IDIuMzcgMi4zN2ExLjcyNCAxLjcyNCAwIDAgMCAxLjA2NSAyLjU3MmMxLjc1NiAuNDI2IDEuNzU2IDIuOTI0IDAgMy4zNWExLjcyNCAxLjcyNCAwIDAgMCAtMS4wNjYgMi41NzNjLjk0IDEuNTQzIC0uODI2IDMuMzEgLTIuMzcgMi4zN2ExLjcyNCAxLjcyNCAwIDAgMCAtMi41NzIgMS4wNjVjLS40MjYgMS43NTYgLTIuOTI0IDEuNzU2IC0zLjM1IDBhMS43MjQgMS43MjQgMCAwIDAgLTIuNTczIC0xLjA2NmMtMS41NDMgLjk0IC0zLjMxIC0uODI2IC0yLjM3IC0yLjM3YTEuNzI0IDEuNzI0IDAgMCAwIC0xLjA2NSAtMi41NzJjLTEuNzU2IC0uNDI2IC0xLjc1NiAtMi45MjQgMCAtMy4zNWExLjcyNCAxLjcyNCAwIDAgMCAxLjA2NiAtMi41NzNjLS45NCAtMS41NDMgLjgyNiAtMy4zMSAyLjM3IC0yLjM3YzEgLjYwOCAyLjI5NiAuMDcgMi41NzIgLTEuMDY1elwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNldHRpbmdzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBweS00IHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctWyM3NTc1NzUyMV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItbGFuZ3VhZ2UgbXItNFwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzJcIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjYmViZWJlXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQgNWg3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkgM3YyYzAgNC40MTggLTIuMjM5IDggLTUgOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01IDljLS4wMDMgMi4xNDQgMi45NTIgMy45MDggNi43IDRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMjBsNCAtOWw0IDlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuMSAxOGgtNi4yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkxhbmd1YWdlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuYWxlcnQoJ2xvZ2dlZCBvdXQnKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHB5LTQgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1bIzc1NzU3NTIxXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWxvZ291dCBtci00XCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMyXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNiZWJlYmVcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQgOHYtMmEyIDIgMCAwIDAgLTIgLTJoLTdhMiAyIDAgMCAwIC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg3YTIgMiAwIDAgMCAyIC0ydi0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTcgMTJoMTRsLTMgLTNtMCA2bDMgLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9nb3V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC02IHB5LTIgIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbkVsZW1lbnQgPSAoeyBuYW1lLCBsb2NhdGlvbiB9OiBOYXZFbGVtZW50UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yIHJvdW5kZWQteGwgaG92ZXI6dGV4dC1hY2NlbnQtcGluayAgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkIGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIFwiXG4gICAgICB0bz17bG9jYXRpb259XG4gICAgPlxuICAgICAge25hbWV9XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7IHVzZXIgfTogYW55KSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IHVzZVNvdW5kKCk7XG4gIGNvbnN0IHsgbXV0ZSwgdG9nZ2xlTXV0ZSB9OiBhbnkgPSB2YWx1ZXM7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC02IGxnOnB4LTEyIHB5LTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgaGVhZGVyICBiZy1bIzAwMDAwMDM4XVwiPlxuICAgICAgPExvZ28gLz5cbiAgICAgIDxOYXZpZ2F0aW9uIHVzZXI9e3VzZXJ9IG11dGU9e211dGV9IHRvZ2dsZU11dGU9e3RvZ2dsZU11dGV9IC8+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuIiwgImV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIod29yZDogc3RyaW5nKSB7XG4gIHJldHVybiB3b3JkWzBdLnRvTG9jYWxlVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKTtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBkYjogUHJpc21hQ2xpZW50O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gZGV2ZWxvcG1lbnQgd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0XG4vLyB0aGUgc2VydmVyIHdpdGggZXZlcnkgY2hhbmdlLCBidXQgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Rcbi8vIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uIHRvIHRoZSBEQiB3aXRoIGV2ZXJ5IGNoYW5nZSBlaXRoZXIuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLl9fZGIpIHtcbiAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBkYiA9IGdsb2JhbC5fX2RiO1xufVxuXG5leHBvcnQgeyBkYiB9O1xuIiwgImltcG9ydCB7IGRiIH0gZnJvbSAnLi9kYi5zZXJ2ZXInO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuXG50eXBlIExvZ2luRm9ybSA9IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgdXNlcm5hbWUgfSxcbiAgfSk7XG4gIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4geyBpZDogdXNlci5pZCwgdXNlcm5hbWUgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICByZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoJ3VzZXJJZCcpO1xuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSAnc3RyaW5nJykgcmV0dXJuIG51bGw7XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoJ3VzZXJJZCcpO1xuICBjb25zb2xlLmxvZyhgcmVxdWlyZVVzZXJJZDogJHt1c2VySWR9YCk7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbWydyZWRpcmVjdFRvJywgcmVkaXJlY3RUb11dKTtcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmNvbnN0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVDtcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1NFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0Jyk7XG59XG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnX19zZXNzaW9uJyxcbiAgICAvLyBub3JtYWxseSB5b3Ugd2FudCB0aGlzIHRvIGJlIGBzZWN1cmU6IHRydWVgXG4gICAgLy8gYnV0IHRoYXQgZG9lc24ndCB3b3JrIG9uIGxvY2FsaG9zdCBmb3IgU2FmYXJpXG4gICAgLy8gaHR0cHM6Ly93ZWIuZGV2L3doZW4tdG8tdXNlLWxvY2FsLWh0dHBzL1xuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgIHBhdGg6ICcvJyxcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICB9LFxufSk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbigpO1xuXG4gIHNlc3Npb24uc2V0KCd1c2VySWQnLCB1c2VySWQpO1xuICByZXR1cm4gcmVkaXJlY3Qocm91dGUsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG5cbiAgaWYgKHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICAgICAgc2VsZWN0OiB7IGlkOiB0cnVlLCB1c2VybmFtZTogdHJ1ZSB9LFxuICAgIH0pO1xuICAgIHJldHVybiB1c2VyO1xuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBsb2dvdXQocmVxdWVzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgcmV0dXJuIHJlZGlyZWN0KCcvbG9naW4nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlcygpIHtcbiAgcmV0dXJuIDxzcGFuPlRoaXMgaXMgdGhlIFBhdGhzIHNlY3Rpb248L3NwYW4+O1xufVxuIiwgImltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IEZvcm1hdHRlZElucHV0IGZyb20gJ34vY29tcG9uZW50cy9mb3JtYXR0ZWQtaW5wdXQnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIG0tMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHgtMTIgXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi02XCI+U2lnbiBVcDwvc3Bhbj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbmEgLi4uIERhcnRoIFZhZGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmFkZXJAZGVhdGhzdGFyLnNpdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFuU2hvdEZpcnN0XCJcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlPXt0cnVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBhY2NlbnQtYWNjZW50LXBpbmtcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWdyZWVcIlxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNCB0ZXh0LWxnXCIgaHRtbEZvcj1cImFncmVlXCI+XG4gICAgICAgICAgICAgIEkgYWdyZWUgdG8gdGhleycgJ31cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1hY2NlbnQtcGlua1wiPlRlcm1zPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNyBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHB5LTQgcHgtOCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IGJnLWFjY2VudC1waW5rIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIFwiPkNyZWF0ZSBBY2NvdW50PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtOCB3LWZ1bGwgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XG4gICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1hY2NlbnQtcGluayBjdXJzb3ItcG9pbnRlclwiPkxvZ2luPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgaHRtbEZvcjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBhdXRvQ29tcGxldGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHRvZ2dsZVNob3dIaWRlPzogYm9vbGVhbjtcbiAgaGFzRXJyb3I/OiBib29sZWFuO1xuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XG4gIG9uQ2hhbmdlPzogYW55O1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1hdHRlZElucHV0KHtcbiAgaHRtbEZvcixcbiAgbGFiZWwsXG4gIGlkLFxuICBhdXRvQ29tcGxldGUsXG4gIG5hbWUsXG4gIHR5cGUsXG4gIHBsYWNlaG9sZGVyLFxuICB0b2dnbGVTaG93SGlkZSA9IGZhbHNlLFxuICBoYXNFcnJvciA9IGZhbHNlLFxuICBlcnJvck1lc3NhZ2UgPSAnSW52YWxpZCBFbWFpbCcsXG4gIG9uQ2hhbmdlLFxuICBkZWZhdWx0VmFsdWUsXG59OiBJUHJvcHMpIHtcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShoYXNFcnJvcik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy04MCBtYi02ICBmbGV4LWNvbFwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e2h0bWxGb3J9XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQteGwgbWItMVwiXG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggdy1mdWxsIGJvcmRlci0yIGJvcmRlci1zb2xpZCAgJHtcbiAgICAgICAgICBlcnJvciA/ICdib3JkZXItcmVkLTQwMCcgOiAnYm9yZGVyLWdyYXktNjAwJ1xuICAgICAgICB9IGZvY3VzLXdpdGhpbjpib3JkZXItd2hpdGUgIHJvdW5kZWQtbGcgaG92ZXI6c2hhZG93LTJ4bCByZWxhdGl2ZWB9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICB0eXBlPXtcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlICYmIHNob3dQYXNzd29yZFxuICAgICAgICAgICAgICA/ICd0ZXh0J1xuICAgICAgICAgICAgICA6IHRvZ2dsZVNob3dIaWRlICYmICFzaG93UGFzc3dvcmRcbiAgICAgICAgICAgICAgPyAncGFzc3dvcmQnXG4gICAgICAgICAgICAgIDogdHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgcHgtMiBweS00IHRleHQteGwgIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtbGcgaG92ZXI6c2hhZG93LTJ4bCByZWxhdGl2ZSAgXCJcbiAgICAgICAgLz5cbiAgICAgICAge3RvZ2dsZVNob3dIaWRlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlICBpbnNldC15LTAgcmlnaHQtMCBwci0zIGZsZXggaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgcC0wLjUgdy04IGgtOCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgJHtcbiAgICAgICAgICAgICAgICBzaG93UGFzc3dvcmQgPyAnYmctd2hpdGUnIDogJ2JnLXRyYW5zcGFyZW50J1xuICAgICAgICAgICAgICB9IHJvdW5kZWQtZnVsbCBgfVxuICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9e3Nob3dQYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Bhc3N3b3JkKChwcmV2KSA9PiAhcHJldil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyAnXHVEODNEXHVERTQ5JyA6ICdcdUQ4M0RcdURFNDgnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggbXktMiB0ZXh0LW1kIHRleHQtcmVkLTQwMFwiPntlcnJvck1lc3NhZ2V9PC9zcGFuPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJ34vY29tcG9uZW50cy9tYWluLWNvbnRlbnQnO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPVxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQgdG9wLFxuICAgICMxYTFhMWEsXG4gICAgIzE5MTkxYSxcbiAgICAjMTkxOTFhLFxuICAgICMxODE4MTksXG4gICAgIzE3MTgxOSxcbiAgICAjMTkxZTI0LFxuICAgICMxYjI0MzAsXG4gICAgIzFlMmEzYyxcbiAgICAjMmQzNzU5LFxuICAgICM0NjQxNzMsXG4gICAgIzZhNDk4YSxcbiAgICAjOTM0ZDlhXG4gIClgO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjQnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TWFpbkNvbnRlbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL21haW4tY29udGVudC5jc3MnO1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlIH1dO1xufTtcbmV4cG9ydCBjb25zdCBNYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgdGFsa1RvVGhlU2VydmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc2VydmVyY29kZScpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAvLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NlcnZlci1jb2RlJykudGhlbigocmVzKSA9PiB7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgY29uc3QgTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzUgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LWZ1bGwgbXktNiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBcIj5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAnIDAgMCA4MHB4IHJnYigxOTIgMjE5IDI1NSAvIDMwJSksIDAgMCAzMnB4IHJnYig2NSAxMjAgMjU1IC8gMTUlKScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtWzRyZW1dIGxlYWRpbmctWzQuNXJlbV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaGFyZWQga25vd2xlZGdlIDxiciAvPiBmcm9tIHRoZSB0b3AgbWluZHMgaW4gdGhlIHByb2dyYW1taW5nXG4gICAgICAgICAgICAgIGluZHVzdHJ5XG4gICAgICAgICAgICAgIDxiciAvPiAtIGFsbCBmb3IgZnJlZSFcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC0zeGwgIHB0LXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctNy8xMSBteS02ICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1sYXJnZXIgbGVhZGluZy03XCI+XG4gICAgICAgICAgICAgIFdoZXRoZXIgYSBiZWdpbm5lciwgbGVhcm5pbmcgdG8gY29kZSwgb3IgYSBzZWFzb25lZCB2ZXRlcmFuLiBUYWtlXG4gICAgICAgICAgICAgIGEgdG91ciBiZWxvdyB0byBnZXQgc3RhcnRlZCFcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBwYi1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LWZ1bGwgbXktMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgZmxleCBiZy1hY2NlbnQtcGluayBweS00IHB4LTE2IHJvdW5kZWQtbGcgdGV4dC1sZyBib3JkZXItNCBib3JkZXItdHJhbnNwYXJlbnQgZm9udC1ib2xkIGZvY3VzLXdpdGhpbjpib3JkZXItNCBmb2N1cy13aXRoaW46Ym9yZGVyLXdoaXRlIGZvY3VzLXdpdGhpbjpvcGFjaXR5LTEwMCAgaG92ZXI6Ym9yZGVyLTQgaG92ZXI6Ym9yZGVyLXdoaXRlIGhvdmVyOm9wYWNpdHktMTAwICAgXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2FzeW5jICgpID0+IHRhbGtUb1RoZVNlcnZlcigpfT5UYWtlIGEgVG91cjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDb250YWluZXIgPSAoeyB0ZXh0IH06IGFueSkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPXtgLi9sZWFybi8ke2xpbmt9YH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCIgXG4gICAgICAgIHJlbGF0aXZlIG1iLTQgbXItNCBibG9jayBoLWF1dG8gdy1hdXRvIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBweC02XG4gICAgICAgIHB5LTMgdHJhbnNpdGlvbiB0ZXh0LXByaW1hcnkgYmctc2Vjb25kYXJ5IGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCBcbiAgICAgICAgYmctWyM3MTcxNzE1NF0gaG92ZXI6YnJpZ2h0bmVzcy0xNTAgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6Ym9yZGVyLWFjY2VudC1waW5rXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57dGV4dH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgQ2hvb3NlQVRvcGljID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggcC04XCI+T3IgY2hvb3NlIGEgdG9waWM8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tZnVsbCAtbWItNCAtbXItNCBmbGV4IGZsZXgtd3JhcCBsZzpjb2wtc3Bhbi0xMFwiPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiUmVhY3RcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiUmVtaXhcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiSmF2YVNjcmlwdFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJDU1NcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiTmV4dFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJUZXN0aW5nXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkplc3RcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQUNJRFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBSaWdodENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTIvNSBweC0xNlwiPlxuICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgIDxDaG9vc2VBVG9waWMgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudCBweS04IHB4LTYgbGc6cHgtMTIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICA8TGVmdENvbnRlbnQgLz5cbiAgICAgIDxSaWdodENvbnRlbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudDtcbiIsICJpbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgc2l6ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgdG9waWMgPSBmb3JtLmdldCgndG9waWMnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIDEyMDAwMDApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHsgc2l6ZSA9ICdsYXJnZScgfTogSVByb3BzKSB7XG4gIGNvbnN0IHNlYXJjaFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbGFiZWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDogYW55KSB7XG4gICAgbGV0IHRvcGljID0gZXZlbnQudGFyZ2V0WzBdLnZhbHVlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9waWMgPSB0b3BpYy50b0xvd2VyQ2FzZSgpO1xuICAgIG5hdmlnYXRlKGAuLi9sZWFybi8ke3RvcGljfWAsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8vIGhhbmRsZSB3aGF0IGhhcHBlbnMgb24ga2V5IHByZXNzXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHRydWUgJiYgZXZlbnQua2V5ID09PSAnaycpIHtcbiAgICAgIGlmIChzZWFyY2hSZWYuY3VycmVudCAhPT0gbnVsbCAmJiBsYWJlbFJlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHNlYXJjaFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIGxhYmVsUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG4gICAgLy8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVLZXlQcmVzc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BtYWluLXNlYXJjaCBmbGV4ICByZWxhdGl2ZWB9PlxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCAke1xuICAgICAgICAgIHNpemUgPT09ICdsYXJnZScgPyAndy1mdWxsJyA6IHNpemUgPT09ICdtZWRpdW0nID8gJ3ctMy80JyA6ICd3LTEvMidcbiAgICAgICAgfWB9XG4gICAgICAgIC8vIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlRm9ybShlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17bGFiZWxSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleFxuICAgICAgICAgICAgIHNtOmZsZXggaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LWxlZnQgc3BhY2UteC0zIHB4LTQgc2hhZG93LXNtIHJvdW5kZWQtbGcgdGV4dC1zbGF0ZS04MDAgZGFyazpyaW5nLTAgZGFyazp0ZXh0LXNsYXRlLTgwMCBkYXJrOmhpZ2hsaWdodC13aGl0ZS81ICBcbiAgICAgICAgICAgICAgYm9yZGVyLTQgYm9yZGVyLXdoaXRlIGJnLXdoaXRlIGZvY3VzLXdpdGhpbjpib3JkZXItNCBmb2N1cy13aXRoaW46Ym9yZGVyLXNvbGlkIGZvY3VzLXdpdGhpbjpib3JkZXItYWNjZW50LWdyZWVuXG4gICAgICAgICAgICAgICR7c2l6ZSA9PT0gJ2xhcmdlJyA/ICdoLTE2JyA6IHNpemUgPT09ICdtZWRpdW0nID8gJ2gtMTInIDogJ2gtOCd9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB6LTEwMGB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlx1RDgzRFx1REQwRDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17c2VhcmNoUmVmfVxuICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdG9waWNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHctZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXI6W25vbmVdIGZvY3VzOltvdXRsaW5lOiAwLCBib3JkZXI6IG5vbmVdIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGtiZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWJiclxuICAgICAgICAgICAgICB0aXRsZT1cIkNvbW1hbmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby11bmRlcmxpbmUgdGV4dC1zbGF0ZS0zMDAgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB0ZXh0LXhsXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFx1MjMxOFxuICAgICAgICAgICAgPC9hYmJyPlxuICAgICAgICAgICAgS1xuICAgICAgICAgIDwva2JkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaGlkZGVuIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGxpbmtzIGFzIG1haW5Db250ZW50TGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvbWFpbi1jb250ZW50JztcbmltcG9ydCBQb3B1bGFyVG9waWNzIGZyb20gJ34vY29tcG9uZW50cy9wb3B1bGFyLXRvcGljcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFybigpIHtcbiAgY29uc3QgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICdsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICMyZTIyM2UsICMyNzIzM2IsICMyMjIzMzYsICMxZjIzMzEsICMxZTIyMmIsICMxZTIyMmEsICMxZTIxMjksICMxZTIxMjgsICMxZjIxMmIsICMyMjIxMmUsICMyNjIxMzAsICMyYTIwMzEpJztcbiAgICAvLyAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzFhMWExYSwgIzE5MTkxYSwgIzE5MTkxYSwgIzE4MTgxOSwgIzE3MTgxOSwgIzE2MTcxOSwgIzE1MTcxYSwgIzE1MTYxYSwgIzE1MTUxYiwgIzE2MTQxYiwgIzE4MTMxYywgIzFhMTExYiknO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciBweC02IGxnOnB4LTE0IG15LTEwIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPFNlYXJjaCBzaXplPVwibWVkaXVtXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNFwiPlxuICAgICAgICAgICAgPFBvcHVsYXJUb3BpY3MgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIG1yLTQwXCI+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cbiAgICAgICAgICA8UG9wdWxhclRvcGljcyAvPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgbmFtZTogJ1N2ZWx0ZScsIGlkOiAwIH0sXG4gIHsgbmFtZTogJ1JlYWN0JywgaWQ6IDEgfSxcbiAgeyBuYW1lOiAnVGFpbHdpbmQnLCBpZDogMiB9LFxuICB7IG5hbWU6ICdSdXN0JywgaWQ6IDMgfSxcbiAgeyBuYW1lOiAnUHl0aG9uJywgaWQ6IDQgfSxcbiAgeyBuYW1lOiAnUmVtaXgnLCBpZDogNSB9LFxuICB7IG5hbWU6ICdDU1MnLCBpZDogNiB9LFxuICB7IG5hbWU6ICdOb2RlJywgaWQ6IDcgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcHVsYXJUb3BpY3MoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1yLTEwIHctODBcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBzaXplIHRleHQtMnhsXCI+UG9wdWxhciBUb3BpY3M8L3NwYW4+XG4gICAgICA8PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlckNhc2VUaXRsZSA9IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBteS0xXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgLi8ke2xvd2VyQ2FzZVRpdGxlfWB9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGN1cnNvci1wb2ludGVyIHB4LTUgcHktMiBcbiAgICAgICAgICAgICAgICByb3VuZGVkLXhsXG4gICAgICAgICAgICAgICAgYmctc2Vjb25kYXJ5IGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCBcbiAgICAgICAgYmctWyM3MTcxNzE1NF0gaG92ZXI6YnJpZ2h0bmVzcy0xNTAgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6Ym9yZGVyLWFjY2VudC1waW5rXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWxnIFwiPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZUxvYWRlckRhdGEgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZztcbn07XG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbXM/LnRvcGljSWQgPz8gJyc7XG5cbiAgcmV0dXJuIGpzb24oeyBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhcm4oKSB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gdXNlTG9hZGVyRGF0YTxEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC02eGwgbWItMyBjYXBpdGFsaXplXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dFNoYWRvdzpcbiAgICAgICAgICAgICAgJ3JnYmEoMTkyLCAyMTksIDI1NSwgMC4zKSAwcHggMHB4IDgwcHgsIHJnYmEoNjUsIDEyMCwgMjU1LCAwLjE1KSAwcHggMHB4IDMycHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29udGVudC1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE5ld0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL25ldy1jYXJkJztcbmltcG9ydCBUb3BpY0NhcmQgZnJvbSAnfi9jb21wb25lbnRzL3RvcGljLWNhcmQnO1xuaW1wb3J0IHsgdXNlU291bmQgfSBmcm9tICd+L2NvbnRleHRzL3NvdW5kLWNvbnRleHQnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnfi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0VXNlcklkLCByZXF1aXJlVXNlcklkIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcic7XG5cbnR5cGUgYm90aERhdGEgPSB7XG4gIC8vIG9mIHR5cGUgTG9hZGVyRGF0YVxuICBkYXRhOiBMb2FkZXJEYXRhO1xuICBuYW1lOiBzdHJpbmc7XG4gIGxpa2VkUG9zdElkczogQXJyYXk8U3RyaW5nPjtcbn07XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgYXJ0aWNsZVBvc3RzOiBBcnJheTx7XG4gICAgaWQ6IHN0cmluZztcbiAgICBhdXRob3JPZlBvc3Q6IHN0cmluZztcbiAgICBhdXRob3JUd2l0dGVyPzogc3RyaW5nIHwgbnVsbDtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHBvaW50cz86IG51bWJlciB8IG51bGw7XG4gICAgdG9waWNOYW1lOiBzdHJpbmc7XG4gIH0+O1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgLy8gVG9kbyBtYWtlIHN1cmUgdGhlIHVzZXIgaXMgbG9nZ2VkIGluIGFuZCBwYXNzIHRoZWlyIHVzZXJJZCBiZWxvd1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCB7IGlkLCBfYWN0aW9uIH0gPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuXG4gIGNvbnN0IGZpZWxkcyA9IHtcbiAgICBwb3N0SWQ6IGlkLnRvU3RyaW5nKCksXG4gICAgdXNlcklkOiB1c2VySWQudG9TdHJpbmcoKSxcbiAgICAvLyB1c2VySWQ6ICdmNzM2ZmVlMi02MWYyLTQ5N2UtYWJjOS0wNWNlZWU4N2Y3OGMnLFxuICB9O1xuXG4gIGNvbnN0IGhhc0xpa2VkID0gYXdhaXQgZGIubGlrZS5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7XG4gICAgICB1c2VySWQ6IGZpZWxkcy51c2VySWQsXG4gICAgICBwb3N0SWQ6IGZpZWxkcy5wb3N0SWQsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgaGFzRGlzbGlrZWQgPSBhd2FpdCBkYi5kaXNsaWtlLmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJJZDogZmllbGRzLnVzZXJJZCxcbiAgICAgIHBvc3RJZDogZmllbGRzLnBvc3RJZCxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoX2FjdGlvbiA9PT0gJ2Rvd252b3RlJykge1xuICAgIC8vIG1ha2Ugc3VyZSB0aGV5IGhhdmVuJ3QgYWxyZWFkeSBkaXNsaWtlZFxuICAgIGlmICghaGFzRGlzbGlrZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgLi4uZmllbGRzIH0pO1xuICAgICAgYXdhaXQgZGIuZGlzbGlrZS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7IC4uLmZpZWxkcyB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIG1ha2Ugc3VyZSBpdCdzIG5vdCBsaWtlZCBpZiguLi4pXG4gIH1cbiAgaWYgKF9hY3Rpb24gPT09ICd1cHZvdGUnKSB7XG4gICAgLy8gbWFrZSBzdXJlIHRoZXkgaGF2ZW4ndCBhbHJlYWR5IGxpa2VkXG4gICAgaWYgKCFoYXNMaWtlZCkge1xuICAgICAgY29uc29sZS5sb2coeyAuLi5maWVsZHMgfSk7XG5cbiAgICAgIGF3YWl0IGRiLmxpa2UuY3JlYXRlKHtcbiAgICAgICAgZGF0YTogeyAuLi5maWVsZHMgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGlmKGhhc0xpa2VkKXtcbiAgICAvLyAgIGF3YWl0IGRiLmxpa2UuZGVsZXRlKHtcbiAgICAvLyAgICAgd2hlcmU6IHtcbiAgICAvLyAgICAgICB1c2VySWQ6IGZpZWxkcy51c2VySWQsXG4gICAgLy8gICAgICAgcG9zdElkOiBmaWVsZHMucG9zdElkLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSk7XG4gICAgLy8gbWFrZSBzdXJlIGl0J3Mgbm90IGRpc2xpa2VkIGlmKC4uLi4pXG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbXMudG9waWNJZDtcblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIC8vIElmIHRoZXJlJ3MgYSB1c2VyIGNoZWNrIGlmIHRoZXkndmUgbGlrZWQvIGRpc2xpa2VkIGFueSBvZiB0aGUgcG9zdHNcbiAgICBhcnRpY2xlUG9zdHM6IGF3YWl0IGRiLnBvc3QuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdG9waWNOYW1lOiBuYW1lLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfTtcblxuICBjb25zdCBwb3N0SWRzID0gZGF0YS5hcnRpY2xlUG9zdHMubWFwKCh7IGlkLCAuLi5yZXN0IH0pID0+IHtcbiAgICByZXR1cm4gaWQ7XG4gIH0pO1xuXG4gIHR5cGUgTGlrZWRQb3N0cyA9IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIHBvc3RJZDogc3RyaW5nO1xuICB9O1xuXG4gIHR5cGUgTGlrZVBvc3RzQXJyYXkgPSB7XG4gICAgbGlrZWRQb3N0czogQXJyYXk8TGlrZWRQb3N0cz4gfCBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGxpa2VkUG9zdHNBcnJheTogTGlrZVBvc3RzQXJyYXkgPSB7XG4gICAgbGlrZWRQb3N0czogYXdhaXQgZGIubGlrZS5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBwb3N0SWQ6IHtcbiAgICAgICAgICBpbjogcG9zdElkcyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH07XG5cbiAgLy8gV2Ugb25seSBjYXJlIGFib3V0IHRoZSBwb3N0SWRcbiAgY29uc3QgbGlrZWRQb3N0SWRzID0gbGlrZWRQb3N0c0FycmF5Lmxpa2VkUG9zdHM/Lm1hcChcbiAgICAoeyBwb3N0SWQsIC4uLnJlc3QgfTogTGlrZWRQb3N0cykgPT4ge1xuICAgICAgcmV0dXJuIHBvc3RJZDtcbiAgICB9XG4gICk7XG5cbiAgdHlwZSBEaXNsaWtlZFBvc3RzID0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgcG9zdElkOiBzdHJpbmc7XG4gIH07XG5cbiAgdHlwZSBEaXNsaWtlUG9zdHNBcnJheSA9IHtcbiAgICBkaXNsaWtlZFBvc3RzOiBBcnJheTxEaXNsaWtlZFBvc3RzPiB8IG51bGw7XG4gIH07XG5cbiAgY29uc3QgZGlzbGlrZWRQb3N0c0FycmF5OiBEaXNsaWtlUG9zdHNBcnJheSA9IHtcbiAgICBkaXNsaWtlZFBvc3RzOiBhd2FpdCBkYi5kaXNsaWtlLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHBvc3RJZDoge1xuICAgICAgICAgIGluOiBwb3N0SWRzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgfTtcblxuICAvLyBXZSBvbmx5IGNhcmUgYWJvdXQgdGhlIHBvc3RJZFxuICBjb25zdCBkaXNsaWtlZFBvc3RJZHMgPSBkaXNsaWtlZFBvc3RzQXJyYXkuZGlzbGlrZWRQb3N0cz8ubWFwKFxuICAgICh7IHBvc3RJZCwgLi4ucmVzdCB9OiBEaXNsaWtlZFBvc3RzKSA9PiB7XG4gICAgICByZXR1cm4gcG9zdElkO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4ganNvbih7IGRpc2xpa2VkUG9zdElkcywgbGlrZWRQb3N0SWRzLCBkYXRhLCBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgbGlrZWRQb3N0SWRzLCBkYXRhLCBuYW1lIH0gPSB1c2VMb2FkZXJEYXRhPGJvdGhEYXRhPigpO1xuXG4gIGNvbnN0IGZvcm1hdHRlZFRvcGljTmFtZSA9IGNhcGl0YWxpemVGaXJzdExldHRlcihuYW1lKTtcblxuICBjb25zdCB7IG11dGUgfTogYW55ID0gdXNlU291bmQoKTtcblxuICBmdW5jdGlvbiBnZXRQb3N0VXJsKHVybDogc3RyaW5nKSB7fVxuXG4gIGNvbnN0IHsgYXJ0aWNsZVBvc3RzIH0gPSBkYXRhO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bNjAwcHhdXCI+XG4gICAgICAgIHthcnRpY2xlUG9zdHMubGVuZ3RoID49IDEgJiZcbiAgICAgICAgICBhcnRpY2xlUG9zdHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS5wb2ludHMhIDwgYi5wb2ludHMhID8gMSA6IC0xKSlcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJhbmsgPSBpbmRleCArIDE7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VG9waWNDYXJkXG4gICAgICAgICAgICAgICAgICB0b3BpYz17bmFtZX1cbiAgICAgICAgICAgICAgICAgIGdldFBvc3RVcmw9e2dldFBvc3RVcmx9XG4gICAgICAgICAgICAgICAgICBtdXRlPXttdXRlfVxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvck9mUG9zdH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgbGluaz17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICB1cHZvdGVzPXtpdGVtLnBvaW50cyA/PyAwfVxuICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICBsaWtlZD17bGlrZWRQb3N0SWRzLmluY2x1ZGVzKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgcmFuaz17cmFua31cbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGU9e2l0ZW0uYXV0aG9yVHdpdHRlciA/PyAnJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG5cbiAgICAgICAge2FydGljbGVQb3N0cy5sZW5ndGggPyAoXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXhcIiB0bz17eyBwYXRobmFtZTogJy4vbmV3JyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgYmctWyNmZmZmZmYwYV0gcm91bmRlZC1sZyAgcC04IGJvcmRlci1bMXB4XSBib3JkZXItc29saWQgYm9yZGVyLXN0b25lLTQwMCB3LWZ1bGwgZmxleC1jb2wgdGV4dC14bCBtdC04XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIHB4LTYgbXktNiBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICBMb3ZlIGFuIGFydGljbGUgdGhhdCB5b3UgZG9uJ3Qgc2VlIGZvciB7Zm9ybWF0dGVkVG9waWNOYW1lfT9cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBteS00IHRleHQtZ3JheS0zMDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIEFkZCBpdCBiZWxvdyFcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm15LTYgcHgtNiBweS0yIHJvdW5kZWQtbGcgYm9yZGVyLTQgICBib3JkZXItYWNjZW50LXBpbmsgYmctYWNjZW50LXBpbmstYmcgdHJhbnNpdGlvbiBob3ZlcjpicmlnaHRuZXNzLTc1XCI+XG4gICAgICAgICAgICAgICAgQWRkIEFydGljbGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXhcIiB0bz17eyBwYXRobmFtZTogJy4vbmV3JyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItZGVmYXVsdCBjb250ZW50LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgYmctWyNmZmZmZmYwYV0gcm91bmRlZC1sZyAgcC04IGJvcmRlci1bMXB4XSBib3JkZXItc29saWQgYm9yZGVyLXN0b25lLTQwMCB3LWZ1bGwgZmxleC1jb2wgdGV4dC14bCBtdC04XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIHB4LTYgbXktNlwiPlxuICAgICAgICAgICAgICAgIFx1RDgzRFx1REUxNCBObyBhcnRpY2xlcyBmb3Ige2Zvcm1hdHRlZFRvcGljTmFtZX0sIHlldCFcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBteS00XCI+QWRkIG9uZSBiZWxvdyE8L3NwYW4+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXktNiBweC02IHB5LTIgcm91bmRlZC1sZyBib3JkZXItNCAgIGJvcmRlci1hY2NlbnQtcGluayBiZy1hY2NlbnQtcGluay1iZyB0cmFuc2l0aW9uIGhvdmVyOmJyaWdodG5lc3MtNzVcIj5cbiAgICAgICAgICAgICAgICBBZGQgQXJ0aWNsZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0gfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU291bmQgZnJvbSAndXNlLXNvdW5kJztcbmltcG9ydCBwbG9wIGZyb20gJy4uLy4uL3B1YmxpYy9zb3VuZHMvcGxvcC10cmltbWVkLm1wMyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgYmFzZUFydGljbGUge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICB1cHZvdGVzOiBudW1iZXI7XG4gIGltYWdlPzogc3RyaW5nO1xuICB0d2l0dGVySGFuZGxlPzogc3RyaW5nO1xuICBnZXRQb3N0VXJsOiBGdW5jdGlvbjtcbiAgdG9waWM6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgbGlrZWQ6IGJvb2xlYW47XG59XG5pbnRlcmZhY2UgQXJ0aWNsZSBleHRlbmRzIGJhc2VBcnRpY2xlIHtcbiAgcmFuaz86IG51bWJlcjtcbiAgbXV0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9waWNDYXJkKHtcbiAgdGl0bGUsXG4gIGF1dGhvcixcbiAgbGluayA9ICcvJyxcbiAgdXB2b3RlcyxcbiAgcmFuayxcbiAgaW1hZ2UsXG4gIHR3aXR0ZXJIYW5kbGUsXG4gIG11dGUsXG4gIGdldFBvc3RVcmwsXG4gIHRvcGljLFxuICBpZCxcbiAgbGlrZWQsXG59OiBBcnRpY2xlKSB7XG4gIGNvbnN0IFt1cHZvdGUsIHNldFVwdm90ZV0gPSB1c2VTdGF0ZShsaWtlZCk7XG4gIGNvbnN0IFtkb3dudm90ZSwgc2V0RG93bnZvdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKHVwdm90ZXMgPz8gMCk7XG4gIGNvbnN0IFt2YWxpZExpbmssIHNldFZhbGlkTGlua10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsaW5rRXJyb3IsIHNldExpbmtFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgdm9sdW1lOiBudW1iZXIgPSBtdXRlID8gMCA6IDAuMjtcbiAgY29uc3QgW3Vwdm90ZVNvdW5kXSA9IHVzZVNvdW5kKHBsb3AsIHsgc291bmRFbmFibGVkOiAhbXV0ZSwgdm9sdW1lOiB2b2x1bWUgfSk7XG4gIGNvbnN0IFtkb3dudm90ZVNvdW5kXSA9IHVzZVNvdW5kKHBsb3AsIHtcbiAgICBzb3VuZEVuYWJsZWQ6ICFtdXRlLFxuICAgIHBsYXliYWNrUmF0ZTogMC42NSxcbiAgICB2b2x1bWU6IHZvbHVtZSxcbiAgICAvLyBgaW50ZXJydXB0YCBlbnN1cmVzIHRoYXQgaWYgdGhlIHNvdW5kIHN0YXJ0cyBhZ2FpbiBiZWZvcmUgaXQnc1xuICAgIC8vIGVuZGVkLCBpdCB3aWxsIHRydW5jYXRlIGl0LiBPdGhlcndpc2UsIHRoZSBzb3VuZCBjYW4gb3ZlcmxhcC5cbiAgICBpbnRlcnJ1cHQ6IHRydWUsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxpbmsubGVuZ3RoID4gMTApIHtcbiAgICAgIHNldFZhbGlkTGluayh0cnVlKTtcbiAgICB9XG4gIH0sIFtsaW5rXSk7XG5cbiAgY29uc3QgaGFuZGxlVXB2b3RlID0gKCkgPT4ge1xuICAgIGdldFBvc3RVcmwobGluayk7XG4gICAgaWYgKCF1cHZvdGUpIHtcbiAgICAgIHVwdm90ZVNvdW5kKCk7XG5cbiAgICAgIHNldFVwdm90ZSh0cnVlKTtcbiAgICAgIGRvd252b3RlICYmIHNldERvd252b3RlKGZhbHNlKTtcblxuICAgICAgaWYgKGRvd252b3RlKSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVcHZvdGUoZmFsc2UpO1xuICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG93bnZvdGUgPSAoKSA9PiB7XG4gICAgaWYgKCFkb3dudm90ZSkge1xuICAgICAgZG93bnZvdGVTb3VuZCgpO1xuXG4gICAgICBzZXREb3dudm90ZSh0cnVlKTtcbiAgICAgIHVwdm90ZSAmJiBzZXRVcHZvdGUoZmFsc2UpO1xuICAgICAgaWYgKHVwdm90ZSkge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RG93bnZvdGUoZmFsc2UpO1xuICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0dGVkTnVtYmVyID0gSW50bC5OdW1iZXJGb3JtYXQoJ2VuLXVzJywge1xuICAgIG5vdGF0aW9uOiAnY29tcGFjdCcsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxLFxuICB9KS5mb3JtYXQoY291bnQpO1xuXG4gIGNvbnN0IExpbmtUb0FydGljbGUgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcbiAgICByZXR1cm4gdmFsaWRMaW5rID8gKFxuICAgICAgPGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TGlua0Vycm9yKHRydWUpfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBFcnJvclBvcHVwID0gKGVycm9yOiBhbnkpID0+IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExpbmtFcnJvcihmYWxzZSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNzAwIGFic29sdXRlIHctMzAgYmctYmxhY2sgbWwtMTAgbXQtNCAke1xuICAgICAgICAgIGVycm9yID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExpbmtFcnJvcihmYWxzZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcHgtMiBweS0wLjI1IHRleHQteGwgdG9wLTAgcmlnaHQtMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICB4XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy0zMCBiZy1lcnJvci1iZyB0ZXh0LWVycm9yIHAtMTAgYmctYWNjZW50LWVycm9yLWJnIHRleHQtYWNjZW50LWVycm9yICBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFjY2VudC1lcnJvciB6LTEwXCI+XG4gICAgICAgICAgTGluayBpcyBpbnZhbGlkIFx1RDgzRFx1REUxNFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BmbGV4IHctMzAgbXktOCBzaGFkb3ctbGcgICByb3VuZGVkLTJ4bCAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJnLVsjNmM2YzZjMTBdICAgcHktOCByZWxhdGl2ZSBcbiAgICAgIFxuICAgICAgJHtcbiAgICAgICAgdXB2b3RlXG4gICAgICAgICAgPyAnYm9yZGVyLWdyZWVuLTQwMCBzaGFkb3ctWyM4ZWY3OGU3Ml0nXG4gICAgICAgICAgOiBkb3dudm90ZVxuICAgICAgICAgID8gJ2JvcmRlci1yZWQtNDAwIHNoYWRvdy1bI2RjNzA3MDY1XSdcbiAgICAgICAgICA6ICcgc2hhZG93LXN0b25lLTkwMCBib3JkZXItWyM2YzZjNmMyNF0nXG4gICAgICB9XG4gICAgICBcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LTEwIG1iLWF1dG8gdGV4dC0zeGxcIj5cbiAgICAgICAgICB7cmFua31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rVG9BcnRpY2xlPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUgZGVjb3JhdGlvbi13aGl0ZSBkZWNvcmF0aW9uLSBob3Zlcjp0ZXh0LWFjY2VudC1waW5rIG1iLTQgdGV4dC0yeGwgbWF4LXctbWQgZm9udC1ib2xkIFwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rVG9BcnRpY2xlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBteS04XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC14bCBcIj57YXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgICAgIHt0d2l0dGVySGFuZGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlcjpiZy1bIzFkYTBmMjU4XSBtbC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vJHt0d2l0dGVySGFuZGxlfWB9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRweCBcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzFEQTFGMlwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyLjIzIDUuOTI0YTguMjEyIDguMjEyIDAgMDEtMi4zNTcuNjQ2IDQuMTE1IDQuMTE1IDAgMDAxLjgwNC0yLjI3IDguMjIxIDguMjIxIDAgMDEtMi42MDYuOTk2IDQuMTAzIDQuMTAzIDAgMDAtNi45OTEgMy43NDIgMTEuNjQ3IDExLjY0NyAwIDAxLTguNDU3LTQuMjg3IDQuMDg3IDQuMDg3IDAgMDAtLjU1NiAyLjA2MyA0LjEgNC4xIDAgMDAxLjgyNSAzLjQxNSA0LjA5IDQuMDkgMCAwMS0xLjg1OS0uNTEzdi4wNTJhNC4xMDQgNC4xMDQgMCAwMDMuMjkyIDQuMDIzIDQuMDk5IDQuMDk5IDAgMDEtMS44NTMuMDcgNC4xMSA0LjExIDAgMDAzLjgzMyAyLjg1IDguMjM2IDguMjM2IDAgMDEtNS4wOTYgMS43NTYgOC4zMyA4LjMzIDAgMDEtLjk3OS0uMDU3IDExLjYxNyAxMS42MTcgMCAwMDYuMjkgMS44NDNjNy41NDcgMCAxMS42NzUtNi4yNTIgMTEuNjc1LTExLjY3NSAwLS4xNzgtLjAwNC0uMzU1LS4wMTItLjUzMWE4LjI5OCA4LjI5OCAwIDAwMi4wNDctMi4xMjN6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtOCAgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci13aGl0ZSBweC00IHB5LTIgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBob3ZlcjpiZy16aW5jLTkwMCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxMaW5rVG9BcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIFJlYWQgQXJ0aWNsZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rVG9BcnRpY2xlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBweS0xIG14LTEwIHJvdW5kZWQtMnhsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgbWwtYXV0b1wiXG4gICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT17J2hpZGRlbid9IG5hbWU9XCJpZFwiIHZhbHVlPXtpZH0gLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInVwdm90ZVwiIG5hbWU9XCJfYWN0aW9uXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwdm90ZX1cbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgdXB2b3RlID8gJ3N0cm9rZS1ncmVlbi00MDAnIDogJ3N0cm9rZS13aGl0ZSdcbiAgICAgICAgICAgICAgfSBob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbiBgfVxuICAgICAgICAgICAgICB3aWR0aD1cIjQ0XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDRcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCI2IDE1IDEyIDkgMTggMTVcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMSB0ZXh0LWxnIGZvbnQtYm9sZCAke1xuICAgICAgICAgICAgICB1cHZvdGVcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LWdyZWVuLTQwMCdcbiAgICAgICAgICAgICAgICA6IGRvd252b3RlXG4gICAgICAgICAgICAgICAgPyAndGV4dC1yZWQtNTAwJ1xuICAgICAgICAgICAgICAgIDogJ3RleHQtd2hpdGUnXG4gICAgICAgICAgICB9ICBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb3VudCA+IDk5OSA/IGZvcm1hdHRlZE51bWJlciA6IGNvdW50fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImRvd252b3RlXCIgbmFtZT1cIl9hY3Rpb25cIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRG93bnZvdGV9XG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgIGRvd252b3RlID8gJ3N0cm9rZS1yZWQtNTAwJyA6ICdzdHJva2Utd2hpdGUnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIHdpZHRoPVwiNDRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjYgOSAxMiAxNSAxOCA5XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaW5rRXJyb3IgJiYgPEVycm9yUG9wdXAgZXJyb3I9e2xpbmtFcnJvcn0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyByZWRpcmVjdCwganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJztcbmltcG9ydCB7IHVzZUFjdGlvbkRhdGEsIHVzZVBhcmFtcyB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuXG50eXBlIEFjdGlvbkRhdGEgPSB7XG4gIGZvcm1FcnJvcj86IHN0cmluZztcbiAgZmllbGRzPzogeyB1cmw/OiBzdHJpbmc7IHRpdGxlPzogc3RyaW5nOyBhdXRob3JPZlBvc3Q/OiBzdHJpbmcgfTtcbiAgZmllbGRFcnJvcnM/OiB7IHVybD86IHN0cmluZzsgdGl0bGU/OiBzdHJpbmc7IGF1dGhvck9mUG9zdD86IHN0cmluZyB9O1xufTtcblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBBY3Rpb25EYXRhKSA9PiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXJsKHVybDogc3RyaW5nKSB7XG4gIGxldCByZWdFeCA9XG4gICAgL15odHRwcz86XFwvXFwvKD86d3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsxLDI1Nn1cXC5bYS16QS1aMC05KCldezEsNn1cXGIoWy1hLXpBLVowLTkoKUA6JV9cXCsufiM/Ji8vPV0qKSQvZ207XG5cbiAgY29uc3QgaXNWYWxpZCA9IHJlZ0V4LnRlc3QodXJsKTtcbiAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgcmV0dXJuICdVcmwgbXVzdCBiZSB2YWxpZCc7XG4gIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGl0bGUodGl0bGU6IHN0cmluZykge1xuICBpZiAodGl0bGUubGVuZ3RoIDwgNCkge1xuICAgIHJldHVybiAnVGl0bGUgbXVzdCBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXV0aG9yKGF1dGhvcjogc3RyaW5nKSB7XG4gIGlmIChhdXRob3IubGVuZ3RoIDwgNCkge1xuICAgIHJldHVybiAnQXV0aG9yIG11c3QgYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzJztcbiAgfVxufVxuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcblxuICBsZXQgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgbGV0IHRvcGljID0gZm9ybS5nZXQoJ3RvcGljJyk7XG4gIGxldCB1cmwgPSBmb3JtLmdldCgndXJsJyk7XG4gIGxldCB0aXRsZSA9IGZvcm0uZ2V0KCd0aXRsZScpO1xuICBsZXQgYXV0aG9yT2ZQb3N0ID0gZm9ybS5nZXQoJ2F1dGhvcicpO1xuXG4gIC8vIFZhbGlkYXRpb24gaGVyZSBmb3IgZm9ybWF0IG9mIGZpZWxkczpcbiAgaWYgKFxuICAgIHR5cGVvZiB0b3BpYyAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB0aXRsZSAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgYXV0aG9yT2ZQb3N0ICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmb3JtRXJyb3I6ICdGb3JtIHN1Ym1pdHRlZCBpbmNvcnJlY3RseScsXG4gICAgfSk7XG4gIH1cblxuICBsZXQgZmllbGRFcnJvcnMgPSB7XG4gICAgdXJsOiB2YWxpZGF0ZVVybCh1cmwpLFxuICAgIHRpdGxlOiB2YWxpZGF0ZVRpdGxlKHRpdGxlKSxcbiAgICBhdXRob3JPZlBvc3Q6IHZhbGlkYXRlQXV0aG9yKGF1dGhvck9mUG9zdCksXG4gIH07XG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzOiB7IHVybCwgdGl0bGUsIGF1dGhvck9mUG9zdCB9IH0pO1xuICB9XG5cbiAgLy8gVmFsaWRhdGlvbiBmb3IgZXhpc3RpbmcgdXJsIGluIGRhdGFiYXNlXG4gIGNvbnN0IGV4aXN0cyA9IGF3YWl0IGRiLnBvc3QuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgdG9waWNOYW1lOiB0b3BpYyxcbiAgICAgIHVybDogdXJsLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIFRoZSB0b3BpY3MgaW4gdGhlIGRhdGFiYXNlIGFyZSBsb3dlcmNhc2VcbiAgdG9waWMgPSB0b3BpYy50b0xvd2VyQ2FzZSgpO1xuXG4gIGNvbnN0IGZpZWxkcyA9IHsgdG9waWNOYW1lOiB0b3BpYywgdXJsLCB0aXRsZSwgYXV0aG9yT2ZQb3N0IH07XG5cbiAgaWYgKCFleGlzdHMpIHtcbiAgICBhd2FpdCBkYi5wb3N0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7IC4uLmZpZWxkcywgcG9zdGVySWQ6IHVzZXJJZCB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZWRpcmVjdChgL2xlYXJuLyR7dG9waWN9YCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBcnRpY2xlIGFscmVhZHkgZXhpc3RzJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldygpIHtcbiAgbGV0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuICBsZXQgdG9waWMgPSBwYXJhbXMudG9waWNJZDtcbiAgdG9waWMgPSB0b3BpYyAmJiB0b3BpY1swXS50b1VwcGVyQ2FzZSgpICsgdG9waWMuc3Vic3RyaW5nKDEpO1xuXG4gIGludGVyZmFjZSBJRm9ybUlucHV0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgLy8gdmFsdWU6IHN0cmluZztcbiAgICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBGb3JtSW5wdXQoe1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgdHlwZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgcGxhY2Vob2xkZXIsXG4gIH06IElGb3JtSW5wdXQpIHtcbiAgICBjb25zdCBlcnJvciA9ICEhZGVmYXVsdFZhbHVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtgYmctdHJhbnNwYXJlbnQgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS02MDAgIHJvdW5kZWQgdy1mdWxsIHB5LTQgcHgtMyB0ZXh0LWdyYXktMjAwIGxlYWRpbmctdGlnaHQgXG4gICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSBcbiAgICAgICAgICBmb2N1czpib3JkZXItd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXG4gICAgICAgIFxuICAgICAgICAke2Vycm9yICYmICdib3JkZXItcmVkLTYwMCd9YH1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy14c1wiPlxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwic2hhZG93LW1kIHJvdW5kZWQgcHQtNCBwYi04IG1iLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHBvaW50ZXItZXZlbnRzLW5vbmUgIHRleHQtbGcgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICBodG1sRm9yPVwidG9waWNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUb3BpY1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzaGFkb3cgYm9yZGVyLTIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLWdyYXktNjAwIHRleHQtZ3JheS0yMDAgYXBwZWFyYW5jZS1ub25lICByb3VuZGVkIHctZnVsbCBweS00IHB4LTMgIGxlYWRpbmctdGlnaHRcbiAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGZvY3VzOmJvcmRlci13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcbiAgICAgICAgICAgICAgICAke3RvcGljICYmICcgY3Vyc29yLW5vdC1hbGxvd2VkJ30gYH1cbiAgICAgICAgICAgICAgaWQ9XCJ0b3BpY1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0b3BpY1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RvcGljfVxuICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGU9eyEhdG9waWN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggcG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LWxnIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgaHRtbEZvcj1cInVybFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFVSTFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnVybH1cbiAgICAgICAgICAgICAgaWQ9XCJ1cmxcIlxuICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9vdmVycmVhY3RlZC5pby9cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51cmwgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgIHRleHQtbWRcIj5cbiAgICAgICAgICAgICAgICAgIFx1Mjc1N1x1RkUwRiB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnVybH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwb2ludGVyLWV2ZW50cy1ub25lICB0ZXh0LWxnIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgaHRtbEZvcj1cInRpdGxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQXJ0aWNsZSBUaXRsZVxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udGl0bGV9XG4gICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2h5IFJlYWN0IGhvb2tzIGFyZSBhd2Vzb21lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnRpdGxlID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtbWRcIj5cbiAgICAgICAgICAgICAgICAgIFx1Mjc1N1x1RkUwRiB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggcG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LWxnIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgaHRtbEZvcj1cImF1dGhvclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEF1dGhvclxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8uYXV0aG9yT2ZQb3N0fVxuICAgICAgICAgICAgICBpZD1cImF1dGhvclwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImF1dGhvclwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGFuIEFicmFtb3ZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uYXV0aG9yT2ZQb3N0ID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtbWRcIj5cbiAgICAgICAgICAgICAgICAgIFx1Mjc1N1x1RkUwRiB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmF1dGhvck9mUG9zdH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBiZy1hY2NlbnQtcGluayB3LWZ1bGwgaG92ZXI6YnJpZ2h0bmVzcy0xMTAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtcGluayBob3Zlcjpib3JkZXItd2hpdGUgYWN0aXZlOmJvcmRlci13aGl0ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtdC04IHB5LTQgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItd2hpdGUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0IEFydGljbGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXcoKSB7XG4gIHJldHVybiA8c3Bhbj5zYWRiYWlvdW5hb3NpZG5hb3NkbmFzb24gTkVXPC9zcGFuPjtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtMjAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC00eGxcIj5cbiAgICAgICAgV2FudCB0byBsZWFybiBzb21ldGhpbmcgbmV3P1xuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtMjAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC0zeGxcIj5cbiAgICAgICAgQ2hvb3NlIGEgdG9waWMgXHUyQjA1XHVGRTBGXG4gICAgICA8L3NwYW4+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybWF0dGVkSW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2Zvcm1hdHRlZC1pbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiwgbG9naW4gfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJztcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rLCB1c2VBY3Rpb25EYXRhLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWU6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gJ3N0cmluZycgfHwgdXNlcm5hbWUubGVuZ3RoIDwgMykge1xuICAgIHJldHVybiBgVXNlcm5hbWVzIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gJ3N0cmluZycgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgIHJldHVybiBgUGFzc3dvcmRzIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZmllbGRFcnJvcnM/OiB7XG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIH07XG4gIGZvcm1FcnJvcj86IHN0cmluZztcbiAgZmllbGRzPzoge1xuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xuICB9O1xufTtcblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBBY3Rpb25EYXRhKSA9PiB7XG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KCdwYXNzd29yZCcpPy50b1N0cmluZygpO1xuICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KCd1c2VybmFtZScpPy50b1N0cmluZygpO1xuXG4gIGNvbnN0IGZpZWxkcyA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH07XG5cbiAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhc3N3b3JkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgIHVzZXJuYW1lOiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lKSxcbiAgICBwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCksXG4gIH07XG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKVxuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG5cbiAgLy8gVGhhdCBpc24ndCBhIHZhbGlkIGFjY291bnQgd2l0aCBjcmVkZW50aWFscyBzdXBwbGllZFxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmaWVsZHMsXG4gICAgICBmb3JtRXJyb3I6ICdVc2VybmFtZS8gcGFzc3dvcmQgaXMgaW5jb3JyZWN0JyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGl0IGlzIGEgdmFsaWQgdXNlclxuICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgJy8nKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBkYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuICAvLyBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG0tMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHgtMTIgXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0xMFwiPkxvZ2luPC9zcGFuPlxuICAgICAgICB7ZGF0YT8uZm9ybUVycm9yICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTQgbXktNCBiZy1bI2VmNDQ0NDQ1XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXJlZC01MDAgIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXJlZC01MDBcIj5cbiAgICAgICAgICAgICAge2RhdGE/LmZvcm1FcnJvciA/PyAnSW52YWxpZCBFbWFpbCBvciBwYXNzd29yZCd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VG8nKSA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGFydGggU2lkaXVzXCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YT8uZmllbGRzPy51c2VybmFtZX1cbiAgICAgICAgICAgIGhhc0Vycm9yPXshIWRhdGE/LmZpZWxkRXJyb3JzPy51c2VybmFtZX1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cImludmFsaWQgdXNlcm5hbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhhblNob3RGaXJzdFwiXG4gICAgICAgICAgICB0b2dnbGVTaG93SGlkZT17dHJ1ZX1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YT8uZmllbGRzPy5wYXNzd29yZH1cbiAgICAgICAgICAgIGhhc0Vycm9yPXshIWRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZH1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cImludmFsaWQgcGFzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggbXItYXV0byB0ZXh0LW5ldXRyYWwtMzAwIHRleHQtbWQgaG92ZXI6dGV4dC1hY2NlbnQtcGluayBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldEVycm9yKHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNyBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHB5LTQgcHgtOCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IGJnLWFjY2VudC1waW5rIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TG9naW48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC00IGZsZXggdy1mdWxsIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/XG4gICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQtYWNjZW50LXBpbmsgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZTM5YTY1MzMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVhXVEdUM0dPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FTU1CSUwzQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZCTzc0RldPLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC00NFBPNE40QS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRkVNQTZRVlMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtWkY1UTZZVEsuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVgzVDNINjVMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN1lKMkdGQk0uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuJzp7J2lkJzoncm91dGVzL2xlYXJuJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xlYXJuJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLU5ETVVYRjRFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YM1QzSDY1TC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTdZSjJHRkJNLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi8kdG9waWNJZCc6eydpZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuJywncGF0aCc6Jzp0b3BpY0lkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLyR0b3BpY0lkLVM2UUVMNU5DLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleCc6eydpZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuLyR0b3BpY0lkJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLyR0b3BpY0lkL2luZGV4LURKTkdYWkJBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zNkpOMjQ0WS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdLNTZDWkpHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRkVNQTZRVlMuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3JywncGFyZW50SWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQnLCdwYXRoJzonbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy1OTlczWlJZSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMzZKTjI0NFkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HSzU2Q1pKRy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi8kdG9waWNJZC9uZXcvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3L2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQvbmV3JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLyR0b3BpY0lkL25ldy9pbmRleC1WWkxKUlpDVy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuL2luZGV4Jzp7J2lkJzoncm91dGVzL2xlYXJuL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvbGVhcm4nLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4vaW5kZXgtWTdZVFNYRE4uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1WREVFQUFHUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVJEUVNaUFMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03WUoyR0ZCTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdLNTZDWkpHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BhdGhzL2luZGV4Jzp7J2lkJzoncm91dGVzL3BhdGhzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BhdGhzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXRocy9pbmRleC1aVTU2VFNISy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1lKMkdGQk0uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NpZ251cCc6eydpZCc6J3JvdXRlcy9zaWdudXAnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2lnbnVwJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NpZ251cC01QkFTRk9NRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVJEUVNaUFMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03WUoyR0ZCTS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUUzOUE2NTMzLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
