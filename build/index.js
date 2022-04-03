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
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-24DK26GS.css";

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
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/main-content.tsx
var main_content_exports = {};
__export(main_content_exports, {
  MainContent: () => MainContent,
  default: () => main_content_default2,
  links: () => links2
});
var import_react3 = __toESM(require("react"));

// app/styles/main-content.css
var main_content_default = "/build/_assets/main-content-RSU65OSM.css";

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/main-content.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: main_content_default }];
};
var MainContent = () => {
  const searchBar = (0, import_react3.useRef)(null);
  const labelRef = (0, import_react3.useRef)(null);
  const handleKeyPress = (0, import_react3.useCallback)((event) => {
    if (event.metaKey === true && event.key === "k") {
      if (searchBar.current !== null && labelRef.current !== null) {
        searchBar.current.focus();
        labelRef.current.focus();
      }
    }
  }, []);
  (0, import_react3.useEffect)(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  const LeftContent = () => {
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "w-3/5 "
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
      className: " h-full pt-py-12 flex justify-start items-center  w-full my-6 "
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "w-full "
    }, /* @__PURE__ */ import_react3.default.createElement("h1", {
      style: {
        textShadow: " 0 0 80px rgb(192 219 255 / 30%), 0 0 32px rgb(65 120 255 / 15%)"
      },
      className: "font-extrabold text-[4rem] leading-[4.5rem]"
    }, "Shared knowledge ", /* @__PURE__ */ import_react3.default.createElement("br", null), " from the top minds in the programming industry", /* @__PURE__ */ import_react3.default.createElement("br", null), " - all for free!"))), /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "text-gray-400 text-3xl  pt-py-12 flex justify-start items-center  w-7/11 my-6  "
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "w-2/3 "
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "font-extrabold text-larger leading-7"
    }, "Whether a beginner, learning to code, or a seasoned veteran. Take a tour below to get started!"))), /* @__PURE__ */ import_react3.default.createElement("div", {
      className: " h-full pb-py-12 flex justify-start items-center  w-full my-10"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
      className: ""
    }, /* @__PURE__ */ import_react3.default.createElement("button", {
      className: " opacity-80 cursor-pointer flex bg-accent-pink py-4 px-16 rounded-lg text-lg font-bold focus-within:opacity-100 hover:opacity-100"
    }, /* @__PURE__ */ import_react3.default.createElement("span", null, "Take a Tour")))));
  };
  const SearchBar = () => {
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "main-search  mx-15 flex  relative"
    }, /* @__PURE__ */ import_react3.default.createElement("form", {
      className: "flex w-full"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
      ref: labelRef,
      className: "flex\n             sm:flex items-center w-full text-left\n              space-x-3 px-4 \n               shadow-sm rounded-lg text-slate-800\n              dark:ring-0 dark:text-slate-800\n              dark:highlight-white/5  \n              z-50\n               border-4 border-white\n               bg-white\n              focus-within:border-4 focus-within:border-solid focus-within:border-accent-green\n              h-16\n              z-100\n              \n              \n              "
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "text-2xl"
    }, "\u{1F50D}"), /* @__PURE__ */ import_react3.default.createElement("input", {
      ref: searchBar,
      placeholder: "Search a topic",
      style: { outline: "none" },
      className: "text-xl\n                \n                \n                \n                \n                \n                w-full bg-transparent border:[none] focus:[outline: 0, border: none] focus:border-transparent"
    }), /* @__PURE__ */ import_react3.default.createElement("kbd", {
      className: "font-sans font-semibold dark:text-slate-500\n              \n              \n              text-xl\n              "
    }, /* @__PURE__ */ import_react3.default.createElement("abbr", {
      title: "Command",
      className: "no-underline text-slate-300 dark:text-slate-500\n                  \n                  text-xl\n                  \n                  "
    }, "\u2318"), "K"))));
  };
  const TopicContainer = ({ text, link }) => {
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      className: " \n        relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6\n        py-3 transition text-primary bg-secondary bg-gray-700 opacity-25 hover:opacity-100"
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "text-white"
    }, text));
  };
  const ChooseATopic = () => {
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "flex justify-center items-center text-center flex-col"
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "flex p-8"
    }, "Or choose one below"), /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "col-span-full -mb-4 -mr-4 flex flex-wrap lg:col-span-10"
    }, /* @__PURE__ */ import_react3.default.createElement(TopicContainer, {
      text: "React"
    }), /* @__PURE__ */ import_react3.default.createElement(TopicContainer, {
      text: "Remix"
    }), /* @__PURE__ */ import_react3.default.createElement(TopicContainer, {
      text: "JavaScript"
    }), /* @__PURE__ */ import_react3.default.createElement(TopicContainer, {
      text: "CSS"
    }), /* @__PURE__ */ import_react3.default.createElement(TopicContainer, {
      text: "Next"
    }), /* @__PURE__ */ import_react3.default.createElement(TopicContainer, {
      text: "Testing"
    }), /* @__PURE__ */ import_react3.default.createElement(TopicContainer, {
      text: "Jest"
    })));
  };
  const RightContent = () => {
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "flex flex-col w-2/5 px-16"
    }, /* @__PURE__ */ import_react3.default.createElement(SearchBar, null));
  };
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "main-content py-8 px-6 lg:px-12 flex justify-center items-center "
  }, /* @__PURE__ */ import_react3.default.createElement(LeftContent, null), /* @__PURE__ */ import_react3.default.createElement(RightContent, null));
};
var main_content_default2 = MainContent;

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/header.tsx
var header_exports = {};
__export(header_exports, {
  Header: () => Header,
  links: () => links3
});

// app/styles/header.css
var header_default = "/build/_assets/header-4BCO7CKP.css";

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/header.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: header_default }];
};
var Logo = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " space-x-1 cursor-pointer"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold  "
  }, "Sapientia"));
};
var LanguageSelector = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " cursor-pointer ml-2 sm:ml-4 "
  }, /* @__PURE__ */ React.createElement("button", {
    className: "p-1.5 flex justify-center items-center place-items-center border border-solid border-white/60  rounded-md drop-shadow-md  focus-within::bg-slate-50/5 focus-within::border-white hover:bg-slate-50/5 hover:border-white "
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-language h-6 w-6 stroke-white",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
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
  })), /* @__PURE__ */ React.createElement("span", null, "English")));
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
var Navigation = () => {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement(NavigationElement, {
    name: "Courses",
    location: "/courses"
  }), /* @__PURE__ */ React.createElement(NavigationElement, {
    name: "Paths",
    location: "/paths"
  }), /* @__PURE__ */ React.createElement(NavigationElement, {
    name: "Login",
    location: "/login"
  }), /* @__PURE__ */ React.createElement(Github, null), /* @__PURE__ */ React.createElement(LanguageSelector, null));
};
var NavigationElement = ({ name, location }) => {
  return /* @__PURE__ */ React.createElement("a", {
    className: " mx-2 sm:mx-4 opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink hover:text-accent-pink",
    href: location
  }, name);
};
var Header = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "px-6 lg:px-12 py-6 flex justify-between items-center text-white header"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement(Navigation, null));
};

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links6
});

// app/styles/index.css
var styles_default = "/build/_assets/index-GFNWU5UP.css";

// app/routes/header.tsx
var links4 = () => {
  return [{ rel: "stylesheet", href: header_default }];
};
var Logo2 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " space-x-1 cursor-pointer"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold  "
  }, "Sapientia"));
};
var LanguageSelector2 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " cursor-pointer ml-2 sm:ml-4 "
  }, /* @__PURE__ */ React.createElement("button", {
    className: "p-1.5 flex justify-center items-center place-items-center border border-solid border-white/60  rounded-md drop-shadow-md  focus-within::bg-slate-50/5 focus-within::border-white hover:bg-slate-50/5 hover:border-white "
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-language h-6 w-6 stroke-white",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
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
  })), /* @__PURE__ */ React.createElement("span", null, "English")));
};
var Github2 = () => {
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
var Navigation2 = () => {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement(NavigationElement2, {
    name: "Courses",
    location: "/courses"
  }), /* @__PURE__ */ React.createElement(NavigationElement2, {
    name: "Paths",
    location: "/paths"
  }), /* @__PURE__ */ React.createElement(NavigationElement2, {
    name: "Login",
    location: "/login"
  }), /* @__PURE__ */ React.createElement(Github2, null), /* @__PURE__ */ React.createElement(LanguageSelector2, null));
};
var NavigationElement2 = ({ name, location }) => {
  return /* @__PURE__ */ React.createElement("a", {
    className: " mx-2 sm:mx-4 opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink hover:text-accent-pink",
    href: location
  }, name);
};
var Header2 = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "px-6 lg:px-12 py-6 flex justify-between items-center text-white header"
  }, /* @__PURE__ */ React.createElement(Logo2, null), /* @__PURE__ */ React.createElement(Navigation2, null));
};

// app/routes/motd.tsx
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

// app/routes/main-content.tsx
var import_react4 = __toESM(require("react"));
var links5 = () => {
  return [{ rel: "stylesheet", href: main_content_default }];
};
var MainContent2 = () => {
  const searchBar = (0, import_react4.useRef)(null);
  const labelRef = (0, import_react4.useRef)(null);
  const handleKeyPress = (0, import_react4.useCallback)((event) => {
    if (event.metaKey === true && event.key === "k") {
      if (searchBar.current !== null && labelRef.current !== null) {
        searchBar.current.focus();
        labelRef.current.focus();
      }
    }
  }, []);
  (0, import_react4.useEffect)(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  const LeftContent = () => {
    return /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "w-3/5 "
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
      className: " h-full pt-py-12 flex justify-start items-center  w-full my-6 "
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "w-full "
    }, /* @__PURE__ */ import_react4.default.createElement("h1", {
      style: {
        textShadow: " 0 0 80px rgb(192 219 255 / 30%), 0 0 32px rgb(65 120 255 / 15%)"
      },
      className: "font-extrabold text-[4rem] leading-[4.5rem]"
    }, "Shared knowledge ", /* @__PURE__ */ import_react4.default.createElement("br", null), " from the top minds in the programming industry", /* @__PURE__ */ import_react4.default.createElement("br", null), " - all for free!"))), /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "text-gray-400 text-3xl  pt-py-12 flex justify-start items-center  w-7/11 my-6  "
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "w-2/3 "
    }, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "font-extrabold text-larger leading-7"
    }, "Whether a beginner, learning to code, or a seasoned veteran. Take a tour below to get started!"))), /* @__PURE__ */ import_react4.default.createElement("div", {
      className: " h-full pb-py-12 flex justify-start items-center  w-full my-10"
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
      className: ""
    }, /* @__PURE__ */ import_react4.default.createElement("button", {
      className: " opacity-80 cursor-pointer flex bg-accent-pink py-4 px-16 rounded-lg text-lg font-bold focus-within:opacity-100 hover:opacity-100"
    }, /* @__PURE__ */ import_react4.default.createElement("span", null, "Take a Tour")))));
  };
  const SearchBar = () => {
    return /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "main-search  mx-15 flex  relative"
    }, /* @__PURE__ */ import_react4.default.createElement("form", {
      className: "flex w-full"
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
      ref: labelRef,
      className: "flex\n             sm:flex items-center w-full text-left\n              space-x-3 px-4 \n               shadow-sm rounded-lg text-slate-800\n              dark:ring-0 dark:text-slate-800\n              dark:highlight-white/5  \n              z-50\n               border-4 border-white\n               bg-white\n              focus-within:border-4 focus-within:border-solid focus-within:border-accent-green\n              h-16\n              z-100\n              \n              \n              "
    }, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "text-2xl"
    }, "\u{1F50D}"), /* @__PURE__ */ import_react4.default.createElement("input", {
      ref: searchBar,
      placeholder: "Search a topic",
      style: { outline: "none" },
      className: "text-xl\n                \n                \n                \n                \n                \n                w-full bg-transparent border:[none] focus:[outline: 0, border: none] focus:border-transparent"
    }), /* @__PURE__ */ import_react4.default.createElement("kbd", {
      className: "font-sans font-semibold dark:text-slate-500\n              \n              \n              text-xl\n              "
    }, /* @__PURE__ */ import_react4.default.createElement("abbr", {
      title: "Command",
      className: "no-underline text-slate-300 dark:text-slate-500\n                  \n                  text-xl\n                  \n                  "
    }, "\u2318"), "K"))));
  };
  const TopicContainer = ({ text, link }) => {
    return /* @__PURE__ */ import_react4.default.createElement("div", {
      className: " \n        relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6\n        py-3 transition text-primary bg-secondary bg-gray-700 opacity-25 hover:opacity-100"
    }, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "text-white"
    }, text));
  };
  const ChooseATopic = () => {
    return /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "flex justify-center items-center text-center flex-col"
    }, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "flex p-8"
    }, "Or choose one below"), /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "col-span-full -mb-4 -mr-4 flex flex-wrap lg:col-span-10"
    }, /* @__PURE__ */ import_react4.default.createElement(TopicContainer, {
      text: "React"
    }), /* @__PURE__ */ import_react4.default.createElement(TopicContainer, {
      text: "Remix"
    }), /* @__PURE__ */ import_react4.default.createElement(TopicContainer, {
      text: "JavaScript"
    }), /* @__PURE__ */ import_react4.default.createElement(TopicContainer, {
      text: "CSS"
    }), /* @__PURE__ */ import_react4.default.createElement(TopicContainer, {
      text: "Next"
    }), /* @__PURE__ */ import_react4.default.createElement(TopicContainer, {
      text: "Testing"
    }), /* @__PURE__ */ import_react4.default.createElement(TopicContainer, {
      text: "Jest"
    })));
  };
  const RightContent = () => {
    return /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "flex flex-col w-2/5 px-16"
    }, /* @__PURE__ */ import_react4.default.createElement(SearchBar, null));
  };
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "main-content py-8 px-6 lg:px-12 flex justify-center items-center "
  }, /* @__PURE__ */ import_react4.default.createElement(LeftContent, null), /* @__PURE__ */ import_react4.default.createElement(RightContent, null));
};

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/index.tsx
var links6 = () => [
  ...links4(),
  ...links5(),
  { rel: "stylesheet", href: styles_default }
];
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.4"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /* @__PURE__ */ React.createElement(motd_default, null)), /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement(MainContent2, null));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/motd.tsx
var motd_exports = {};
__export(motd_exports, {
  Motd: () => Motd2,
  default: () => motd_default2
});
var Motd2 = () => {
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
var motd_default2 = Motd2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "1afeea86", "entry": { "module": "/build/entry.client-KE5UJTOS.js", "imports": ["/build/_shared/chunk-4IAQ2FIA.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-FGA4WRLJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/header": { "id": "routes/header", "parentId": "root", "path": "header", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/header-2V7VEWBY.js", "imports": ["/build/_shared/chunk-VA5UEVGC.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-ADJETCKA.js", "imports": ["/build/_shared/chunk-F4DCXV2Q.js", "/build/_shared/chunk-VA5UEVGC.js", "/build/_shared/chunk-Z3HESHUI.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/main-content": { "id": "routes/main-content", "parentId": "root", "path": "main-content", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/main-content-WRWAZNGM.js", "imports": ["/build/_shared/chunk-F4DCXV2Q.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/motd": { "id": "routes/motd", "parentId": "root", "path": "motd", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/motd-VY4R3GJT.js", "imports": ["/build/_shared/chunk-Z3HESHUI.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-1AFEEA86.js" };

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
  "routes/main-content": {
    id: "routes/main-content",
    parentId: "root",
    path: "main-content",
    index: void 0,
    caseSensitive: void 0,
    module: main_content_exports
  },
  "routes/header": {
    id: "routes/header",
    parentId: "root",
    path: "header",
    index: void 0,
    caseSensitive: void 0,
    module: header_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/motd": {
    id: "routes/motd",
    parentId: "root",
    path: "motd",
    index: void 0,
    caseSensitive: void 0,
    module: motd_exports
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
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbWFpbi1jb250ZW50LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaGVhZGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9yb3V0ZXMvaGVhZGVyLnRzeCIsICIuLi9hcHAvcm91dGVzL21vdGQudHN4IiwgIi4uL2FwcC9yb3V0ZXMvbWFpbi1jb250ZW50LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbW90ZC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbWFpbi1jb250ZW50LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaGVhZGVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9tb3RkLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWFpbi1jb250ZW50XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tYWluLWNvbnRlbnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9oZWFkZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hlYWRlclwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJoZWFkZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL21vdGRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21vdGRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibW90ZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfVxuICB9OyIsICJpbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGFpbHdpbmQuY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiAndXRmLTgnLFxuICB0aXRsZTogJ1NhcGllbnRpYScsXG4gIHZpZXdwb3J0OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL21haW4tY29udGVudC5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbGFiZWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIC8vIGhhbmRsZSB3aGF0IGhhcHBlbnMgb24ga2V5IHByZXNzXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHRydWUgJiYgZXZlbnQua2V5ID09PSAnaycpIHtcbiAgICAgIGlmIChzZWFyY2hCYXIuY3VycmVudCAhPT0gbnVsbCAmJiBsYWJlbFJlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHNlYXJjaEJhci5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIGxhYmVsUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG4gICAgLy8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVLZXlQcmVzc10pO1xuXG4gIGNvbnN0IExlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy81IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcHQtcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTYgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgXCI+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OlxuICAgICAgICAgICAgICAgICAgJyAwIDAgODBweCByZ2IoMTkyIDIxOSAyNTUgLyAzMCUpLCAwIDAgMzJweCByZ2IoNjUgMTIwIDI1NSAvIDE1JSknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LVs0cmVtXSBsZWFkaW5nLVs0LjVyZW1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hhcmVkIGtub3dsZWRnZSA8YnIgLz4gZnJvbSB0aGUgdG9wIG1pbmRzIGluIHRoZSBwcm9ncmFtbWluZ1xuICAgICAgICAgICAgICBpbmR1c3RyeVxuICAgICAgICAgICAgICA8YnIgLz4gLSBhbGwgZm9yIGZyZWUhXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtM3hsICBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LTcvMTEgbXktNiAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtbGFyZ2VyIGxlYWRpbmctN1wiPlxuICAgICAgICAgICAgICBXaGV0aGVyIGEgYmVnaW5uZXIsIGxlYXJuaW5nIHRvIGNvZGUsIG9yIGEgc2Vhc29uZWQgdmV0ZXJhbi4gVGFrZVxuICAgICAgICAgICAgICBhIHRvdXIgYmVsb3cgdG8gZ2V0IHN0YXJ0ZWQhXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcGItcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIG9wYWNpdHktODAgY3Vyc29yLXBvaW50ZXIgZmxleCBiZy1hY2NlbnQtcGluayBweS00IHB4LTE2IHJvdW5kZWQtbGcgdGV4dC1sZyBmb250LWJvbGQgZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwIGhvdmVyOm9wYWNpdHktMTAwXCI+XG4gICAgICAgICAgICAgIDxzcGFuPlRha2UgYSBUb3VyPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgLy9wYWRkaW5nLXJpZ2h0IHdhcyAxNlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2VhcmNoICBteC0xNSBmbGV4ICByZWxhdGl2ZVwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17bGFiZWxSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4XG4gICAgICAgICAgICAgc206ZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdFxuICAgICAgICAgICAgICBzcGFjZS14LTMgcHgtNCBcbiAgICAgICAgICAgICAgIHNoYWRvdy1zbSByb3VuZGVkLWxnIHRleHQtc2xhdGUtODAwXG4gICAgICAgICAgICAgIGRhcms6cmluZy0wIGRhcms6dGV4dC1zbGF0ZS04MDBcbiAgICAgICAgICAgICAgZGFyazpoaWdobGlnaHQtd2hpdGUvNSAgXG4gICAgICAgICAgICAgIHotNTBcbiAgICAgICAgICAgICAgIGJvcmRlci00IGJvcmRlci13aGl0ZVxuICAgICAgICAgICAgICAgYmctd2hpdGVcbiAgICAgICAgICAgICAgZm9jdXMtd2l0aGluOmJvcmRlci00IGZvY3VzLXdpdGhpbjpib3JkZXItc29saWQgZm9jdXMtd2l0aGluOmJvcmRlci1hY2NlbnQtZ3JlZW5cbiAgICAgICAgICAgICAgaC0xNlxuICAgICAgICAgICAgICB6LTEwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cdUQ4M0RcdUREMEQ8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtzZWFyY2hCYXJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdG9waWNcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHctZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXI6W25vbmVdIGZvY3VzOltvdXRsaW5lOiAwLCBib3JkZXI6IG5vbmVdIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxrYmRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFiYnJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbW1hbmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXVuZGVybGluZSB0ZXh0LXNsYXRlLTMwMCBkYXJrOnRleHQtc2xhdGUtNTAwXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFx1MjMxOFxuICAgICAgICAgICAgICA8L2FiYnI+XG4gICAgICAgICAgICAgIEtcbiAgICAgICAgICAgIDwva2JkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ29udGFpbmVyID0gKHsgdGV4dCwgbGluayB9OiBhbnkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCIgXG4gICAgICAgIHJlbGF0aXZlIG1iLTQgbXItNCBibG9jayBoLWF1dG8gdy1hdXRvIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBweC02XG4gICAgICAgIHB5LTMgdHJhbnNpdGlvbiB0ZXh0LXByaW1hcnkgYmctc2Vjb25kYXJ5IGJnLWdyYXktNzAwIG9wYWNpdHktMjUgaG92ZXI6b3BhY2l0eS0xMDBcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDaG9vc2VBVG9waWMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBwLThcIj5PciBjaG9vc2Ugb25lIGJlbG93PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgLW1iLTQgLW1yLTQgZmxleCBmbGV4LXdyYXAgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlbWl4XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQ1NTXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIk5leHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiVGVzdGluZ1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKZXN0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFJpZ2h0Q29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMi81IHB4LTE2XCI+XG4gICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgey8qIDxDaG9vc2VBVG9waWMgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgcHktOCBweC02IGxnOnB4LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPExlZnRDb250ZW50IC8+XG4gICAgICA8UmlnaHRDb250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iLCAiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5cbmNvbnN0IExvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgc3BhY2UteC0xIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgIFwiPlNhcGllbnRpYTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExhbmd1YWdlU2VsZWN0b3IgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgbWwtMiBzbTptbC00IFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTEuNSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwbGFjZS1pdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUvNjAgIHJvdW5kZWQtbWQgZHJvcC1zaGFkb3ctbWQgIGZvY3VzLXdpdGhpbjo6Ymctc2xhdGUtNTAvNSBmb2N1cy13aXRoaW46OmJvcmRlci13aGl0ZSBob3ZlcjpiZy1zbGF0ZS01MC81IGhvdmVyOmJvcmRlci13aGl0ZSBcIj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItbGFuZ3VhZ2UgaC02IHctNiBzdHJva2Utd2hpdGVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTQgNWg3XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTkgM3YyYzAgNC40MTggLTIuMjM5IDggLTUgOFwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk01IDljLS4wMDMgMi4xNDQgMi45NTIgMy45MDggNi43IDRcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMjBsNCAtOWw0IDlcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuMSAxOGgtNi4yXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzcGFuPkVuZ2xpc2g8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgTmF2RWxlbWVudFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59O1xuXG5jb25zdCBHaXRodWIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgbXgtMiBzbTpteC00IG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZWlsbHlqb2Rvbm5lbGwvc2FwaWVudGlhXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvY3VzLXdpdGhpbjpvcGFjaXR5LTEwMCBvcGFjaXR5LTgwXCJcbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPXsnMzBweCd9XG4gICAgICAgICAgaGVpZ2h0PXsnMzBweCd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGZpbGwtcHJpbWFyeS10ZXh0IFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk02NCA1LjEwM2MtMzMuMzQ3IDAtNjAuMzg4IDI3LjAzNS02MC4zODggNjAuMzg4IDAgMjYuNjgyIDE3LjMwMyA0OS4zMTcgNDEuMjk3IDU3LjMwMyAzLjAxNy41NiA0LjEyNS0xLjMxIDQuMTI1LTIuOTA1IDAtMS40NC0uMDU2LTYuMTk3LS4wODItMTEuMjQzLTE2LjggMy42NTMtMjAuMzQ1LTcuMTI1LTIwLjM0NS03LjEyNS0yLjc0Ny02Ljk4LTYuNzA1LTguODM2LTYuNzA1LTguODM2LTUuNDgtMy43NDguNDEzLTMuNjcuNDEzLTMuNjcgNi4wNjMuNDI1IDkuMjU3IDYuMjIzIDkuMjU3IDYuMjIzIDUuMzg2IDkuMjMgMTQuMTI3IDYuNTYyIDE3LjU3MyA1LjAyLjU0Mi0zLjkwMyAyLjEwNy02LjU2OCAzLjgzNC04LjA3Ni0xMy40MTMtMS41MjUtMjcuNTE0LTYuNzA0LTI3LjUxNC0yOS44NDMgMC02LjU5MyAyLjM2LTExLjk4IDYuMjIzLTE2LjIxLS42MjgtMS41Mi0yLjY5NS03LjY2Mi41ODQtMTUuOTggMCAwIDUuMDctMS42MjMgMTYuNjEgNi4xOUM1My43IDM1IDU4Ljg2NyAzNC4zMjcgNjQgMzQuMzA0YzUuMTMuMDIzIDEwLjMuNjk0IDE1LjEyNyAyLjAzMyAxMS41MjYtNy44MTMgMTYuNTktNi4xOSAxNi41OS02LjE5IDMuMjg3IDguMzE3IDEuMjIgMTQuNDYuNTkzIDE1Ljk4IDMuODcyIDQuMjMgNi4yMTUgOS42MTcgNi4yMTUgMTYuMjEgMCAyMy4xOTQtMTQuMTI3IDI4LjMtMjcuNTc0IDI5Ljc5NiAyLjE2NyAxLjg3NCA0LjA5NyA1LjU1IDQuMDk3IDExLjE4MyAwIDguMDgtLjA3IDE0LjU4My0uMDcgMTYuNTcyIDAgMS42MDcgMS4wODggMy40OSA0LjE0OCAyLjg5NyAyMy45OC03Ljk5NCA0MS4yNjMtMzAuNjIyIDQxLjI2My01Ny4yOTRDMTI0LjM4OCAzMi4xNCA5Ny4zNSA1LjEwNCA2NCA1LjEwNHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjYuNDg0IDkxLjgwNmMtLjEzMy4zLS42MDUuMzktMS4wMzUuMTg1LS40NC0uMTk2LS42ODUtLjYwNS0uNTQzLS45MDYuMTMtLjMxLjYwMy0uMzk1IDEuMDQtLjE4OC40NC4xOTcuNjkuNjEuNTM3Ljkxem0yLjQ0NiAyLjcyOWMtLjI4Ny4yNjctLjg1LjE0My0xLjIzMi0uMjgtLjM5Ni0uNDItLjQ3LS45ODMtLjE3Ny0xLjI1NC4yOTgtLjI2Ni44NDQtLjE0IDEuMjQuMjguMzk0LjQyNi40NzIuOTg0LjE3IDEuMjU1ek0zMS4zMTIgOTguMDEyYy0uMzcuMjU4LS45NzYuMDE3LTEuMzUtLjUyLS4zNy0uNTM4LS4zNy0xLjE4My4wMS0xLjQ0LjM3My0uMjU4Ljk3LS4wMjUgMS4zNS41MDcuMzY4LjU0NS4zNjggMS4xOS0uMDEgMS40NTJ6bTMuMjYxIDMuMzYxYy0uMzMuMzY1LTEuMDM2LjI2Ny0xLjU1Mi0uMjMtLjUyNy0uNDg3LS42NzQtMS4xOC0uMzQzLTEuNTQ0LjMzNi0uMzY2IDEuMDQ1LS4yNjQgMS41NjQuMjMuNTI3LjQ4Ni42ODYgMS4xOC4zMzMgMS41NDN6bTQuNSAxLjk1MWMtLjE0Ny40NzMtLjgyNS42ODgtMS41MS40ODYtLjY4My0uMjA3LTEuMTMtLjc2LS45OS0xLjIzOC4xNC0uNDc3LjgyMy0uNyAxLjUxMi0uNDg1LjY4My4yMDYgMS4xMy43NTYuOTg4IDEuMjM3em00Ljk0My4zNjFjLjAxNy40OTgtLjU2My45MS0xLjI4LjkyLS43MjMuMDE3LTEuMzA4LS4zODctMS4zMTUtLjg3NyAwLS41MDMuNTY4LS45MSAxLjI5LS45MjQuNzE3LS4wMTMgMS4zMDYuMzg3IDEuMzA2Ljg4em00LjU5OC0uNzgyYy4wODYuNDg1LS40MTMuOTg0LTEuMTI2IDEuMTE3LS43LjEzLTEuMzUtLjE3Mi0xLjQ0LS42NTMtLjA4Ni0uNDk4LjQyMi0uOTk3IDEuMTIyLTEuMTI2LjcxNC0uMTIzIDEuMzU0LjE3IDEuNDQ0LjY2M3ptMCAwXCI+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiQ291cnNlc1wiIGxvY2F0aW9uPVwiL2NvdXJzZXNcIiAvPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJQYXRoc1wiIGxvY2F0aW9uPVwiL3BhdGhzXCIgLz5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiTG9naW5cIiBsb2NhdGlvbj1cIi9sb2dpblwiIC8+XG4gICAgICA8R2l0aHViIC8+XG4gICAgICA8TGFuZ3VhZ2VTZWxlY3RvciAvPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbkVsZW1lbnQgPSAoeyBuYW1lLCBsb2NhdGlvbiB9OiBOYXZFbGVtZW50UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgY2xhc3NOYW1lPVwiIG14LTIgc206bXgtNCBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGZvbnQtc2VtaWJvbGQgZm9jdXMtd2l0aGluOnRleHQtYWNjZW50LXBpbmsgaG92ZXI6dGV4dC1hY2NlbnQtcGlua1wiXG4gICAgICBocmVmPXtsb2NhdGlvbn1cbiAgICA+XG4gICAgICB7bmFtZX1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicHgtNiBsZzpweC0xMiBweS02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGhlYWRlclwiPlxuICAgICAgPExvZ28gLz5cblxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IEhlYWRlciwgbGlua3MgYXMgaGVhZGVyTGlua3MgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgTW90ZCBmcm9tICcuL21vdGQnO1xuaW1wb3J0IHsgTWFpbkNvbnRlbnQsIGxpbmtzIGFzIG1haW5Db250ZW50TGlua3MgfSBmcm9tICcuL21haW4tY29udGVudCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgLi4uaGVhZGVyTGlua3MoKSxcbiAgLi4ubWFpbkNvbnRlbnRMaW5rcygpLFxuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxNb3RkIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICA8TWFpbkNvbnRlbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL2hlYWRlci5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlIH1dO1xufTtcblxuY29uc3QgTG9nbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS14LTEgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCAgXCI+U2FwaWVudGlhPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGFuZ3VhZ2VTZWxlY3RvciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMS41IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1sYW5ndWFnZSBoLTYgdy02IHN0cm9rZS13aGl0ZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNCA1aDdcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNOSAzdjJjMCA0LjQxOCAtMi4yMzkgOCAtNSA4XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUgOWMtLjAwMyAyLjE0NCAyLjk1MiAzLjkwOCA2LjcgNFwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMiAyMGw0IC05bDQgOVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xOS4xIDE4aC02LjJcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4+RW5nbGlzaDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHlwZSBOYXZFbGVtZW50UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IEdpdGh1YiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBteC0yIHNtOm14LTQgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JlaWxseWpvZG9ubmVsbC9zYXBpZW50aWFcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwIG9wYWNpdHktODBcIlxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9eyczMHB4J31cbiAgICAgICAgICBoZWlnaHQ9eyczMHB4J31cbiAgICAgICAgICBjbGFzc05hbWU9XCIgZmlsbC1wcmltYXJ5LXRleHQgXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTY0IDUuMTAzYy0zMy4zNDcgMC02MC4zODggMjcuMDM1LTYwLjM4OCA2MC4zODggMCAyNi42ODIgMTcuMzAzIDQ5LjMxNyA0MS4yOTcgNTcuMzAzIDMuMDE3LjU2IDQuMTI1LTEuMzEgNC4xMjUtMi45MDUgMC0xLjQ0LS4wNTYtNi4xOTctLjA4Mi0xMS4yNDMtMTYuOCAzLjY1My0yMC4zNDUtNy4xMjUtMjAuMzQ1LTcuMTI1LTIuNzQ3LTYuOTgtNi43MDUtOC44MzYtNi43MDUtOC44MzYtNS40OC0zLjc0OC40MTMtMy42Ny40MTMtMy42NyA2LjA2My40MjUgOS4yNTcgNi4yMjMgOS4yNTcgNi4yMjMgNS4zODYgOS4yMyAxNC4xMjcgNi41NjIgMTcuNTczIDUuMDIuNTQyLTMuOTAzIDIuMTA3LTYuNTY4IDMuODM0LTguMDc2LTEzLjQxMy0xLjUyNS0yNy41MTQtNi43MDQtMjcuNTE0LTI5Ljg0MyAwLTYuNTkzIDIuMzYtMTEuOTggNi4yMjMtMTYuMjEtLjYyOC0xLjUyLTIuNjk1LTcuNjYyLjU4NC0xNS45OCAwIDAgNS4wNy0xLjYyMyAxNi42MSA2LjE5QzUzLjcgMzUgNTguODY3IDM0LjMyNyA2NCAzNC4zMDRjNS4xMy4wMjMgMTAuMy42OTQgMTUuMTI3IDIuMDMzIDExLjUyNi03LjgxMyAxNi41OS02LjE5IDE2LjU5LTYuMTkgMy4yODcgOC4zMTcgMS4yMiAxNC40Ni41OTMgMTUuOTggMy44NzIgNC4yMyA2LjIxNSA5LjYxNyA2LjIxNSAxNi4yMSAwIDIzLjE5NC0xNC4xMjcgMjguMy0yNy41NzQgMjkuNzk2IDIuMTY3IDEuODc0IDQuMDk3IDUuNTUgNC4wOTcgMTEuMTgzIDAgOC4wOC0uMDcgMTQuNTgzLS4wNyAxNi41NzIgMCAxLjYwNyAxLjA4OCAzLjQ5IDQuMTQ4IDIuODk3IDIzLjk4LTcuOTk0IDQxLjI2My0zMC42MjIgNDEuMjYzLTU3LjI5NEMxMjQuMzg4IDMyLjE0IDk3LjM1IDUuMTA0IDY0IDUuMTA0elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yNi40ODQgOTEuODA2Yy0uMTMzLjMtLjYwNS4zOS0xLjAzNS4xODUtLjQ0LS4xOTYtLjY4NS0uNjA1LS41NDMtLjkwNi4xMy0uMzEuNjAzLS4zOTUgMS4wNC0uMTg4LjQ0LjE5Ny42OS42MS41MzcuOTF6bTIuNDQ2IDIuNzI5Yy0uMjg3LjI2Ny0uODUuMTQzLTEuMjMyLS4yOC0uMzk2LS40Mi0uNDctLjk4My0uMTc3LTEuMjU0LjI5OC0uMjY2Ljg0NC0uMTQgMS4yNC4yOC4zOTQuNDI2LjQ3Mi45ODQuMTcgMS4yNTV6TTMxLjMxMiA5OC4wMTJjLS4zNy4yNTgtLjk3Ni4wMTctMS4zNS0uNTItLjM3LS41MzgtLjM3LTEuMTgzLjAxLTEuNDQuMzczLS4yNTguOTctLjAyNSAxLjM1LjUwNy4zNjguNTQ1LjM2OCAxLjE5LS4wMSAxLjQ1MnptMy4yNjEgMy4zNjFjLS4zMy4zNjUtMS4wMzYuMjY3LTEuNTUyLS4yMy0uNTI3LS40ODctLjY3NC0xLjE4LS4zNDMtMS41NDQuMzM2LS4zNjYgMS4wNDUtLjI2NCAxLjU2NC4yMy41MjcuNDg2LjY4NiAxLjE4LjMzMyAxLjU0M3ptNC41IDEuOTUxYy0uMTQ3LjQ3My0uODI1LjY4OC0xLjUxLjQ4Ni0uNjgzLS4yMDctMS4xMy0uNzYtLjk5LTEuMjM4LjE0LS40NzcuODIzLS43IDEuNTEyLS40ODUuNjgzLjIwNiAxLjEzLjc1Ni45ODggMS4yMzd6bTQuOTQzLjM2MWMuMDE3LjQ5OC0uNTYzLjkxLTEuMjguOTItLjcyMy4wMTctMS4zMDgtLjM4Ny0xLjMxNS0uODc3IDAtLjUwMy41NjgtLjkxIDEuMjktLjkyNC43MTctLjAxMyAxLjMwNi4zODcgMS4zMDYuODh6bTQuNTk4LS43ODJjLjA4Ni40ODUtLjQxMy45ODQtMS4xMjYgMS4xMTctLjcuMTMtMS4zNS0uMTcyLTEuNDQtLjY1My0uMDg2LS40OTguNDIyLS45OTcgMS4xMjItMS4xMjYuNzE0LS4xMjMgMS4zNTQuMTcgMS40NDQuNjYzem0wIDBcIj48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJDb3Vyc2VzXCIgbG9jYXRpb249XCIvY291cnNlc1wiIC8+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIlBhdGhzXCIgbG9jYXRpb249XCIvcGF0aHNcIiAvPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJMb2dpblwiIGxvY2F0aW9uPVwiL2xvZ2luXCIgLz5cbiAgICAgIDxHaXRodWIgLz5cbiAgICAgIDxMYW5ndWFnZVNlbGVjdG9yIC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uRWxlbWVudCA9ICh7IG5hbWUsIGxvY2F0aW9uIH06IE5hdkVsZW1lbnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBjbGFzc05hbWU9XCIgbXgtMiBzbTpteC00IG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCJcbiAgICAgIGhyZWY9e2xvY2F0aW9ufVxuICAgID5cbiAgICAgIHtuYW1lfVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJweC02IGxnOnB4LTEyIHB5LTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgaGVhZGVyXCI+XG4gICAgICA8TG9nbyAvPlxuXG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcbiIsICJleHBvcnQgY29uc3QgTW90ZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1kYXJrLW1vZGUtYmcgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBweC0yMCAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtcGluayB3LWZ1bGwgdGV4dC1jZW50ZXIgcm91bmRlZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIFdlIHN0YW5kIHdpdGggVWtyYWluZSBcdUQ4M0NcdURERkFcdUQ4M0NcdURERTZcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXpvbWZvcnVrcmFpbmUub3JnL1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgY3Vyc29yLXBvaW50ZXIgZm9udC1ib2xkIHRleHQtcHJpbWFyeS10ZXh0IGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb25hdGUgaGVyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb3RkO1xuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL21haW4tY29udGVudC5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbGFiZWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIC8vIGhhbmRsZSB3aGF0IGhhcHBlbnMgb24ga2V5IHByZXNzXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHRydWUgJiYgZXZlbnQua2V5ID09PSAnaycpIHtcbiAgICAgIGlmIChzZWFyY2hCYXIuY3VycmVudCAhPT0gbnVsbCAmJiBsYWJlbFJlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHNlYXJjaEJhci5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIGxhYmVsUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG4gICAgLy8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVLZXlQcmVzc10pO1xuXG4gIGNvbnN0IExlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy81IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcHQtcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTYgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgXCI+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OlxuICAgICAgICAgICAgICAgICAgJyAwIDAgODBweCByZ2IoMTkyIDIxOSAyNTUgLyAzMCUpLCAwIDAgMzJweCByZ2IoNjUgMTIwIDI1NSAvIDE1JSknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LVs0cmVtXSBsZWFkaW5nLVs0LjVyZW1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hhcmVkIGtub3dsZWRnZSA8YnIgLz4gZnJvbSB0aGUgdG9wIG1pbmRzIGluIHRoZSBwcm9ncmFtbWluZ1xuICAgICAgICAgICAgICBpbmR1c3RyeVxuICAgICAgICAgICAgICA8YnIgLz4gLSBhbGwgZm9yIGZyZWUhXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtM3hsICBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LTcvMTEgbXktNiAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtbGFyZ2VyIGxlYWRpbmctN1wiPlxuICAgICAgICAgICAgICBXaGV0aGVyIGEgYmVnaW5uZXIsIGxlYXJuaW5nIHRvIGNvZGUsIG9yIGEgc2Vhc29uZWQgdmV0ZXJhbi4gVGFrZVxuICAgICAgICAgICAgICBhIHRvdXIgYmVsb3cgdG8gZ2V0IHN0YXJ0ZWQhXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcGItcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIG9wYWNpdHktODAgY3Vyc29yLXBvaW50ZXIgZmxleCBiZy1hY2NlbnQtcGluayBweS00IHB4LTE2IHJvdW5kZWQtbGcgdGV4dC1sZyBmb250LWJvbGQgZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwIGhvdmVyOm9wYWNpdHktMTAwXCI+XG4gICAgICAgICAgICAgIDxzcGFuPlRha2UgYSBUb3VyPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgLy9wYWRkaW5nLXJpZ2h0IHdhcyAxNlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2VhcmNoICBteC0xNSBmbGV4ICByZWxhdGl2ZVwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17bGFiZWxSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4XG4gICAgICAgICAgICAgc206ZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdFxuICAgICAgICAgICAgICBzcGFjZS14LTMgcHgtNCBcbiAgICAgICAgICAgICAgIHNoYWRvdy1zbSByb3VuZGVkLWxnIHRleHQtc2xhdGUtODAwXG4gICAgICAgICAgICAgIGRhcms6cmluZy0wIGRhcms6dGV4dC1zbGF0ZS04MDBcbiAgICAgICAgICAgICAgZGFyazpoaWdobGlnaHQtd2hpdGUvNSAgXG4gICAgICAgICAgICAgIHotNTBcbiAgICAgICAgICAgICAgIGJvcmRlci00IGJvcmRlci13aGl0ZVxuICAgICAgICAgICAgICAgYmctd2hpdGVcbiAgICAgICAgICAgICAgZm9jdXMtd2l0aGluOmJvcmRlci00IGZvY3VzLXdpdGhpbjpib3JkZXItc29saWQgZm9jdXMtd2l0aGluOmJvcmRlci1hY2NlbnQtZ3JlZW5cbiAgICAgICAgICAgICAgaC0xNlxuICAgICAgICAgICAgICB6LTEwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cdUQ4M0RcdUREMEQ8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtzZWFyY2hCYXJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdG9waWNcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHctZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXI6W25vbmVdIGZvY3VzOltvdXRsaW5lOiAwLCBib3JkZXI6IG5vbmVdIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxrYmRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFiYnJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbW1hbmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXVuZGVybGluZSB0ZXh0LXNsYXRlLTMwMCBkYXJrOnRleHQtc2xhdGUtNTAwXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFx1MjMxOFxuICAgICAgICAgICAgICA8L2FiYnI+XG4gICAgICAgICAgICAgIEtcbiAgICAgICAgICAgIDwva2JkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ29udGFpbmVyID0gKHsgdGV4dCwgbGluayB9OiBhbnkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCIgXG4gICAgICAgIHJlbGF0aXZlIG1iLTQgbXItNCBibG9jayBoLWF1dG8gdy1hdXRvIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBweC02XG4gICAgICAgIHB5LTMgdHJhbnNpdGlvbiB0ZXh0LXByaW1hcnkgYmctc2Vjb25kYXJ5IGJnLWdyYXktNzAwIG9wYWNpdHktMjUgaG92ZXI6b3BhY2l0eS0xMDBcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDaG9vc2VBVG9waWMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBwLThcIj5PciBjaG9vc2Ugb25lIGJlbG93PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgLW1iLTQgLW1yLTQgZmxleCBmbGV4LXdyYXAgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlbWl4XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQ1NTXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIk5leHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiVGVzdGluZ1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKZXN0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFJpZ2h0Q29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMi81IHB4LTE2XCI+XG4gICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgey8qIDxDaG9vc2VBVG9waWMgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgcHktOCBweC02IGxnOnB4LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPExlZnRDb250ZW50IC8+XG4gICAgICA8UmlnaHRDb250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iLCAiZXhwb3J0IGNvbnN0IE1vdGQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZGFyay1tb2RlLWJnIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcHgtMjAgIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWNjZW50LXBpbmsgdy1mdWxsIHRleHQtY2VudGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBXZSBzdGFuZCB3aXRoIFVrcmFpbmUgXHVEODNDXHVEREZBXHVEODNDXHVEREU2XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmF6b21mb3J1a3JhaW5lLm9yZy9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC0yIGN1cnNvci1wb2ludGVyIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnktdGV4dCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRG9uYXRlIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW90ZDtcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicxYWZlZWE4NicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtS0U1VUpUT1MuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJQVEyRklBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVlSSVE2UEkuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUZHQTRXUkxKLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaGVhZGVyJzp7J2lkJzoncm91dGVzL2hlYWRlcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidoZWFkZXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaGVhZGVyLTJWN1ZFV0JZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1WQTVVRVZHQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtQURKRVRDS0EuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUY0RENYVjJRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVkE1VUVWR0MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aM0hFU0hVSS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWFpbi1jb250ZW50Jzp7J2lkJzoncm91dGVzL21haW4tY29udGVudCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtYWluLWNvbnRlbnQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWFpbi1jb250ZW50LVdSV0FaTkdNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GNERDWFYyUS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbW90ZCc6eydpZCc6J3JvdXRlcy9tb3RkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21vdGQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbW90ZC1WWTRSM0dKVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWjNIRVNIVUkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0xQUZFRUE4Ni5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFlBQXVCOzs7QUNEdkIscUJBQW9CO0FBQ3BCLHlCQUF3QjtBQUN4QixvQkFBbUI7QUFDbkIsc0JBQXFDOzs7QUNIckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG1CQUE0QjtBQUM1QixvQkFBK0I7QUFFaEIsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsTUFBSSxTQUFTLGtDQUNYLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU9POzs7Ozs7QUFLQSxJQUFNLFFBQXVCLE1BQU07QUFDeEMsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUc5QixJQUFNLE9BQXFCLE1BQU87QUFBQSxFQUN2QyxTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUE7QUFHRyxlQUFlO0FBQzVCLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsUUFFRixvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsc0JBQUQsT0FDQSxvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQ0Esb0NBQUMsMEJBQUQ7QUFBQTs7O0FDakNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFzRDs7Ozs7O0FBRy9DLElBQU0sU0FBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRTlCLElBQU0sY0FBYyxNQUFNO0FBQy9CLFFBQU0sWUFBWSwwQkFBeUI7QUFDM0MsUUFBTSxXQUFXLDBCQUF1QjtBQUd4QyxRQUFNLGlCQUFpQiwrQkFBWSxDQUFDLFVBQVU7QUFDNUMsUUFBSSxNQUFNLFlBQVksUUFBUSxNQUFNLFFBQVEsS0FBSztBQUMvQyxVQUFJLFVBQVUsWUFBWSxRQUFRLFNBQVMsWUFBWSxNQUFNO0FBQzNELGtCQUFVLFFBQVE7QUFDbEIsaUJBQVMsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUdwQjtBQUVILCtCQUFVLE1BQU07QUFFZCxhQUFTLGlCQUFpQixXQUFXO0FBR3JDLFdBQU8sTUFBTTtBQUNYLGVBQVMsb0JBQW9CLFdBQVc7QUFBQTtBQUFBLEtBRXpDLENBQUM7QUFFSixRQUFNLGNBQWMsTUFBTTtBQUN4QixXQUNFLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLE1BQUQ7QUFBQSxNQUNFLE9BQU87QUFBQSxRQUNMLFlBQ0U7QUFBQTtBQUFBLE1BRUosV0FBVTtBQUFBLE9BQ1gscUJBQ2tCLG9EQUFDLE1BQUQsT0FBTSxtREFFdkIsb0RBQUMsTUFBRCxPQUFNLHVCQUlaLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxPQUF1QyxxR0FNM0Qsb0RBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0RBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0RBQUMsVUFBRDtBQUFBLE1BQVEsV0FBVTtBQUFBLE9BQ2hCLG9EQUFDLFFBQUQsTUFBTTtBQUFBO0FBUWxCLFFBQU0sWUFBWSxNQUFNO0FBRXRCLFdBQ0Usb0RBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0RBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQ2Qsb0RBQUMsT0FBRDtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsV0FBVTtBQUFBLE9BZ0JWLG9EQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxPQUFXLGNBQzNCLG9EQUFDLFNBQUQ7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLGFBQVk7QUFBQSxNQUNaLE9BQU8sRUFBRSxTQUFTO0FBQUEsTUFDbEIsV0FBVTtBQUFBLFFBUVosb0RBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE9BTVYsb0RBQUMsUUFBRDtBQUFBLE1BQ0UsT0FBTTtBQUFBLE1BQ04sV0FBVTtBQUFBLE9BS1gsV0FFTTtBQUFBO0FBU25CLFFBQU0saUJBQWlCLENBQUMsRUFBRSxNQUFNLFdBQWdCO0FBQzlDLFdBQ0Usb0RBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE9BSVYsb0RBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQWM7QUFBQTtBQUtwQyxRQUFNLGVBQWUsTUFBTTtBQUN6QixXQUNFLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxPQUFXLHdCQUMzQixvREFBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQTtBQUFBO0FBTTdCLFFBQU0sZUFBZSxNQUFNO0FBQ3pCLFdBQ0Usb0RBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0RBQUMsV0FBRDtBQUFBO0FBTU4sU0FDRSxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvREFBQyxhQUFELE9BQ0Esb0RBQUMsY0FBRDtBQUFBO0FBSU4sSUFBTyx3QkFBUTs7O0FDN0tmO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQUdPLElBQU0sU0FBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBR3JDLElBQU0sT0FBTyxNQUFNO0FBQ2pCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXVCO0FBQUE7QUFLN0MsSUFBTSxtQkFBbUIsTUFBTTtBQUM3QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUNoQixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsSUFDUixhQUFZO0FBQUEsSUFDWixNQUFLO0FBQUEsSUFDTCxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLEtBRWYsb0NBQUMsUUFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQU8sR0FBRTtBQUFBLElBQWdCLE1BQUs7QUFBQSxNQUMzQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsTUFDUixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsTUFDUixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsTUFDUixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsTUFDUixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsT0FFVixvQ0FBQyxRQUFELE1BQU07QUFBQTtBQVdkLElBQU0sU0FBUyxNQUFNO0FBQ25CLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLElBQ0osV0FBVTtBQUFBLEtBRVYsb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsV0FBVTtBQUFBLElBQ1YsU0FBUTtBQUFBLEtBRVIsb0NBQUMsS0FBRCxNQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFVBQVM7QUFBQSxJQUNULFVBQVM7QUFBQSxJQUNULEdBQUU7QUFBQSxNQUVKLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQTtBQUFBO0FBUXBCLElBQU0sYUFBYSxNQUFNO0FBQ3ZCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsbUJBQUQ7QUFBQSxJQUFtQixNQUFLO0FBQUEsSUFBVSxVQUFTO0FBQUEsTUFDM0Msb0NBQUMsbUJBQUQ7QUFBQSxJQUFtQixNQUFLO0FBQUEsSUFBUSxVQUFTO0FBQUEsTUFDekMsb0NBQUMsbUJBQUQ7QUFBQSxJQUFtQixNQUFLO0FBQUEsSUFBUSxVQUFTO0FBQUEsTUFDekMsb0NBQUMsUUFBRCxPQUNBLG9DQUFDLGtCQUFEO0FBQUE7QUFLTixJQUFNLG9CQUFvQixDQUFDLEVBQUUsTUFBTSxlQUFnQztBQUNqRSxTQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxLQUVMO0FBQUE7QUFLQSxJQUFNLFNBQVMsTUFBTTtBQUMxQixTQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUNoQixvQ0FBQyxNQUFELE9BRUEsb0NBQUMsWUFBRDtBQUFBOzs7QUN2R047QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FDR08sSUFBTSxTQUF1QixNQUFNO0FBQ3hDLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFHckMsSUFBTSxRQUFPLE1BQU07QUFDakIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBdUI7QUFBQTtBQUs3QyxJQUFNLG9CQUFtQixNQUFNO0FBQzdCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU07QUFBQSxJQUNOLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxJQUNSLGFBQVk7QUFBQSxJQUNaLE1BQUs7QUFBQSxJQUNMLGVBQWM7QUFBQSxJQUNkLGdCQUFlO0FBQUEsS0FFZixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBTyxHQUFFO0FBQUEsSUFBZ0IsTUFBSztBQUFBLE1BQzNDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUNSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUNSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUNSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUNSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxPQUVWLG9DQUFDLFFBQUQsTUFBTTtBQUFBO0FBV2QsSUFBTSxVQUFTLE1BQU07QUFDbkIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsSUFDUCxLQUFJO0FBQUEsSUFDSixXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsS0FFUixvQ0FBQyxLQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQ0UsVUFBUztBQUFBLElBQ1QsVUFBUztBQUFBLElBQ1QsR0FBRTtBQUFBLE1BRUosb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBO0FBQUE7QUFRcEIsSUFBTSxjQUFhLE1BQU07QUFDdkIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxvQkFBRDtBQUFBLElBQW1CLE1BQUs7QUFBQSxJQUFVLFVBQVM7QUFBQSxNQUMzQyxvQ0FBQyxvQkFBRDtBQUFBLElBQW1CLE1BQUs7QUFBQSxJQUFRLFVBQVM7QUFBQSxNQUN6QyxvQ0FBQyxvQkFBRDtBQUFBLElBQW1CLE1BQUs7QUFBQSxJQUFRLFVBQVM7QUFBQSxNQUN6QyxvQ0FBQyxTQUFELE9BQ0Esb0NBQUMsbUJBQUQ7QUFBQTtBQUtOLElBQU0scUJBQW9CLENBQUMsRUFBRSxNQUFNLGVBQWdDO0FBQ2pFLFNBQ0Usb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLEtBRUw7QUFBQTtBQUtBLElBQU0sVUFBUyxNQUFNO0FBQzFCLFNBQ0Usb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLG9DQUFDLE9BQUQsT0FFQSxvQ0FBQyxhQUFEO0FBQUE7OztBQ3ZHQyxJQUFNLE9BQU8sTUFBTTtBQUN4QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFhLDRDQUUzQixvQ0FBQyxLQUFEO0FBQUEsSUFDRSxRQUFPO0FBQUEsSUFDUCxLQUFJO0FBQUEsSUFDSixNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsS0FDWDtBQUFBO0FBU2IsSUFBTyxlQUFROzs7QUNyQmYsb0JBQXNEO0FBRy9DLElBQU0sU0FBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRTlCLElBQU0sZUFBYyxNQUFNO0FBQy9CLFFBQU0sWUFBWSwwQkFBeUI7QUFDM0MsUUFBTSxXQUFXLDBCQUF1QjtBQUd4QyxRQUFNLGlCQUFpQiwrQkFBWSxDQUFDLFVBQVU7QUFDNUMsUUFBSSxNQUFNLFlBQVksUUFBUSxNQUFNLFFBQVEsS0FBSztBQUMvQyxVQUFJLFVBQVUsWUFBWSxRQUFRLFNBQVMsWUFBWSxNQUFNO0FBQzNELGtCQUFVLFFBQVE7QUFDbEIsaUJBQVMsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUdwQjtBQUVILCtCQUFVLE1BQU07QUFFZCxhQUFTLGlCQUFpQixXQUFXO0FBR3JDLFdBQU8sTUFBTTtBQUNYLGVBQVMsb0JBQW9CLFdBQVc7QUFBQTtBQUFBLEtBRXpDLENBQUM7QUFFSixRQUFNLGNBQWMsTUFBTTtBQUN4QixXQUNFLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLE1BQUQ7QUFBQSxNQUNFLE9BQU87QUFBQSxRQUNMLFlBQ0U7QUFBQTtBQUFBLE1BRUosV0FBVTtBQUFBLE9BQ1gscUJBQ2tCLG9EQUFDLE1BQUQsT0FBTSxtREFFdkIsb0RBQUMsTUFBRCxPQUFNLHVCQUlaLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxPQUF1QyxxR0FNM0Qsb0RBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0RBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0RBQUMsVUFBRDtBQUFBLE1BQVEsV0FBVTtBQUFBLE9BQ2hCLG9EQUFDLFFBQUQsTUFBTTtBQUFBO0FBUWxCLFFBQU0sWUFBWSxNQUFNO0FBRXRCLFdBQ0Usb0RBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0RBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQ2Qsb0RBQUMsT0FBRDtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsV0FBVTtBQUFBLE9BZ0JWLG9EQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxPQUFXLGNBQzNCLG9EQUFDLFNBQUQ7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLGFBQVk7QUFBQSxNQUNaLE9BQU8sRUFBRSxTQUFTO0FBQUEsTUFDbEIsV0FBVTtBQUFBLFFBUVosb0RBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE9BTVYsb0RBQUMsUUFBRDtBQUFBLE1BQ0UsT0FBTTtBQUFBLE1BQ04sV0FBVTtBQUFBLE9BS1gsV0FFTTtBQUFBO0FBU25CLFFBQU0saUJBQWlCLENBQUMsRUFBRSxNQUFNLFdBQWdCO0FBQzlDLFdBQ0Usb0RBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE9BSVYsb0RBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQWM7QUFBQTtBQUtwQyxRQUFNLGVBQWUsTUFBTTtBQUN6QixXQUNFLG9EQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9EQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxPQUFXLHdCQUMzQixvREFBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvREFBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQTtBQUFBO0FBTTdCLFFBQU0sZUFBZSxNQUFNO0FBQ3pCLFdBQ0Usb0RBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0RBQUMsV0FBRDtBQUFBO0FBTU4sU0FDRSxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvREFBQyxhQUFELE9BQ0Esb0RBQUMsY0FBRDtBQUFBOzs7QUhuS0MsSUFBTSxTQUF1QixNQUFNO0FBQUEsRUFDeEMsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRWQsaUJBQWlCO0FBQzlCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBO0FBQUEsS0FHZCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxnQkFBZ0I7QUFBQSxNQUNoQixZQUFZO0FBQUE7QUFBQSxLQUdkLG9DQUFDLGNBQUQsUUFHRixvQ0FBQyxTQUFELE9BRUEsb0NBQUMsY0FBRDtBQUFBOzs7QUloQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU0sUUFBTyxNQUFNO0FBQ3hCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQWEsNENBRTNCLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFFBQU87QUFBQSxJQUNQLEtBQUk7QUFBQSxJQUNKLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUNYO0FBQUE7QUFTYixJQUFPLGdCQUFROzs7QUNyQmYsSUFBTywwQkFBUSxFQUFDLFdBQVUsWUFBVyxTQUFRLEVBQUMsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLG9DQUFtQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUJBQWdCLEVBQUMsTUFBSyxpQkFBZ0IsWUFBVyxRQUFPLFFBQU8sVUFBUyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvQ0FBbUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx1QkFBc0IsRUFBQyxNQUFLLHVCQUFzQixZQUFXLFFBQU8sUUFBTyxnQkFBZSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywwQ0FBeUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGVBQWMsRUFBQyxNQUFLLGVBQWMsWUFBVyxRQUFPLFFBQU8sUUFBTyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxrQ0FBaUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBVlF4b0QsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHVCQUF1QjtBQUFBLElBQ25CLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaUJBQWlCO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixlQUFlO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEMUNkLElBQU0sTUFBTTtBQUVaLElBQUksSUFBSTtBQUdSLElBQUksUUFBUTtBQUdaLElBQUksSUFDRixVQUNBLHVCQUFRLE9BQU8sZ0JBQWdCLEVBQUUsV0FBVyxNQUFNLFFBQVE7QUFLNUQsSUFBSSxJQUFJLHVCQUFRLE9BQU8sVUFBVSxFQUFFLFFBQVE7QUFFM0MsSUFBSSxJQUFJLDJCQUFPO0FBRWYsSUFBSSxJQUNGLEtBQ0EsMENBQXFCO0FBQUEsRUFDbkIsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBO0FBSVYsSUFBTSxPQUFPLFFBQVEsSUFBSSxRQUFRO0FBRWpDLElBQUksT0FBTyxNQUFNLE1BQU07QUFDckIsVUFBUSxJQUFJLG9DQUFvQztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
