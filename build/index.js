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
var tailwind_default = "/build/_assets/tailwind-BB4J7OW3.css";

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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/courses/index.tsx
var courses_exports = {};
__export(courses_exports, {
  default: () => index
});

// app/styles/header.css
var header_default = "/build/_assets/header-4BCO7CKP.css";

// app/routes/header.tsx
var import_react3 = require("@remix-run/react");
var links2 = () => {
  return [{ rel: "stylesheet", href: header_default }];
};
var Logo = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " space-x-1 cursor-pointer"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold  "
  }, "Sapientia")));
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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/courses/index.tsx
function index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: " bg-black"
  }, /* @__PURE__ */ React.createElement(Header, null), ";", /* @__PURE__ */ React.createElement("span", null, "This is the courses section"));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/main-content.tsx
var main_content_exports = {};
__export(main_content_exports, {
  MainContent: () => MainContent,
  default: () => main_content_default2,
  links: () => links3
});
var import_react4 = require("react");

// app/styles/main-content.css
var main_content_default = "/build/_assets/main-content-RSU65OSM.css";

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/main-content.tsx
var import_react5 = require("@remix-run/react");
var links3 = () => {
  return [{ rel: "stylesheet", href: main_content_default }];
};
var MainContent = () => {
  const searchBar = (0, import_react4.useRef)(null);
  const labelRef = (0, import_react4.useRef)(null);
  const talkToTheServer = async () => {
    console.log("Fetching now");
    try {
      const response = await fetch("http://localhost:4000/servercode");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
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
  const SearchBar = () => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "main-search  mx-15 flex  relative"
    }, /* @__PURE__ */ React.createElement("form", {
      className: "flex w-full"
    }, /* @__PURE__ */ React.createElement("div", {
      ref: labelRef,
      className: "flex\n             sm:flex items-center w-full text-left\n              space-x-3 px-4 \n               shadow-sm rounded-lg text-slate-800\n              dark:ring-0 dark:text-slate-800\n              dark:highlight-white/5  \n              z-50\n               border-4 border-white\n               bg-white\n              focus-within:border-4 focus-within:border-solid focus-within:border-accent-green\n              h-16\n              z-100\n              \n              \n              "
    }, /* @__PURE__ */ React.createElement("span", {
      className: "text-2xl"
    }, "\u{1F50D}"), /* @__PURE__ */ React.createElement("input", {
      ref: searchBar,
      placeholder: "Search a topic",
      style: { outline: "none" },
      className: "text-xl\n                \n                \n                \n                \n                \n                w-full bg-transparent border:[none] focus:[outline: 0, border: none] focus:border-transparent"
    }), /* @__PURE__ */ React.createElement("kbd", {
      className: "font-sans font-semibold dark:text-slate-500\n              \n              \n              text-xl\n              "
    }, /* @__PURE__ */ React.createElement("abbr", {
      title: "Command",
      className: "no-underline text-slate-300 dark:text-slate-500\n                  \n                  text-xl\n                  \n                  "
    }, "\u2318"), "K"))));
  };
  const TopicContainer = ({ text }) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: " \n        relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6\n        py-3 transition text-primary bg-secondary border-2 border-transparent \n        bg-[#71717154] hover:brightness-150 hover:border-2 hover:border-accent-pink"
    }, /* @__PURE__ */ React.createElement(import_react5.Link, {
      to: `./learn/${text}`
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
    }, /* @__PURE__ */ React.createElement(SearchBar, null), /* @__PURE__ */ React.createElement(ChooseATopic, null));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "main-content py-8 px-6 lg:px-12 flex justify-center items-center "
  }, /* @__PURE__ */ React.createElement(LeftContent, null), /* @__PURE__ */ React.createElement(RightContent, null));
};
var main_content_default2 = MainContent;

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/header.tsx
var header_exports = {};
__export(header_exports, {
  Header: () => Header2,
  links: () => links4
});
var import_react6 = require("@remix-run/react");
var links4 = () => {
  return [{ rel: "stylesheet", href: header_default }];
};
var Logo2 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " space-x-1 cursor-pointer"
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold  "
  }, "Sapientia")));
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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links6
});

// app/styles/index.css
var styles_default = "/build/_assets/index-MYRUKXOG.css";

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
var import_react7 = require("react");
var import_react8 = require("@remix-run/react");
var links5 = () => {
  return [{ rel: "stylesheet", href: main_content_default }];
};
var MainContent2 = () => {
  const searchBar = (0, import_react7.useRef)(null);
  const labelRef = (0, import_react7.useRef)(null);
  const talkToTheServer = async () => {
    console.log("Fetching now");
    try {
      const response = await fetch("http://localhost:4000/servercode");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleKeyPress = (0, import_react7.useCallback)((event) => {
    if (event.metaKey === true && event.key === "k") {
      if (searchBar.current !== null && labelRef.current !== null) {
        searchBar.current.focus();
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
  const SearchBar = () => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "main-search  mx-15 flex  relative"
    }, /* @__PURE__ */ React.createElement("form", {
      className: "flex w-full"
    }, /* @__PURE__ */ React.createElement("div", {
      ref: labelRef,
      className: "flex\n             sm:flex items-center w-full text-left\n              space-x-3 px-4 \n               shadow-sm rounded-lg text-slate-800\n              dark:ring-0 dark:text-slate-800\n              dark:highlight-white/5  \n              z-50\n               border-4 border-white\n               bg-white\n              focus-within:border-4 focus-within:border-solid focus-within:border-accent-green\n              h-16\n              z-100\n              \n              \n              "
    }, /* @__PURE__ */ React.createElement("span", {
      className: "text-2xl"
    }, "\u{1F50D}"), /* @__PURE__ */ React.createElement("input", {
      ref: searchBar,
      placeholder: "Search a topic",
      style: { outline: "none" },
      className: "text-xl\n                \n                \n                \n                \n                \n                w-full bg-transparent border:[none] focus:[outline: 0, border: none] focus:border-transparent"
    }), /* @__PURE__ */ React.createElement("kbd", {
      className: "font-sans font-semibold dark:text-slate-500\n              \n              \n              text-xl\n              "
    }, /* @__PURE__ */ React.createElement("abbr", {
      title: "Command",
      className: "no-underline text-slate-300 dark:text-slate-500\n                  \n                  text-xl\n                  \n                  "
    }, "\u2318"), "K"))));
  };
  const TopicContainer = ({ text }) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: " \n        relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6\n        py-3 transition text-primary bg-secondary border-2 border-transparent \n        bg-[#71717154] hover:brightness-150 hover:border-2 hover:border-accent-pink"
    }, /* @__PURE__ */ React.createElement(import_react8.Link, {
      to: `./learn/${text}`
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
    }, /* @__PURE__ */ React.createElement(SearchBar, null), /* @__PURE__ */ React.createElement(ChooseATopic, null));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "main-content py-8 px-6 lg:px-12 flex justify-center items-center "
  }, /* @__PURE__ */ React.createElement(LeftContent, null), /* @__PURE__ */ React.createElement(RightContent, null));
};

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/index.tsx
var links6 = () => [
  ...links2(),
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
  }, /* @__PURE__ */ React.createElement(motd_default, null)), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(MainContent2, null));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn.tsx
var learn_exports = {};
__export(learn_exports, {
  default: () => index2
});
var import_react9 = require("@remix-run/react");

// public/chevron-up.svg
var chevron_up_default = "/build/_assets/chevron-up-GNUORI6P.svg";

// public/chevron-down.svg
var chevron_down_default = "/build/_assets/chevron-down-OXW42BS3.svg";

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn.tsx
var import_react10 = require("react");
var ResourceLink = () => {
  const [upvote, setUpvote] = (0, import_react10.useState)(false);
  const [downvote, setDownvote] = (0, import_react10.useState)(false);
  let count = 10;
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full bg-green-100 p-10 justify-center items-center"
  }, /* @__PURE__ */ React.createElement("span", null, "Rank"), /* @__PURE__ */ React.createElement("span", null, "Article Title"), /* @__PURE__ */ React.createElement("span", null, "Author"), /* @__PURE__ */ React.createElement("span", null, "URL"), /* @__PURE__ */ React.createElement("div", {
    className: "flex bg-yellow-200 py-1 px-4 rounded-2xl flex-col items-center justify-center cursor-pointer"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    onClick: () => setUpvote((prev) => !prev),
    src: chevron_up_default
  })), /* @__PURE__ */ React.createElement("span", {
    className: `px-1 font-bold ${upvote ? "text-green-400" : downvote ? "text-red-400" : "text-black"} `
  }, count), /* @__PURE__ */ React.createElement("div", {
    className: "",
    onClick: () => setDownvote((prev) => !prev)
  }, /* @__PURE__ */ React.createElement("img", {
    src: chevron_down_default
  }))));
};
function index2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: " bg-black"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("span", null, "This is the Learn section")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center content-center flex-col p-10"
  }, /* @__PURE__ */ React.createElement(import_react9.Outlet, null), /* @__PURE__ */ React.createElement(ResourceLink, null)));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId.tsx
var topicId_exports = {};
__export(topicId_exports, {
  default: () => JokeRoute,
  loader: () => loader
});
var import_node = require("@remix-run/node");
var import_react11 = require("@remix-run/react");
var loader = async ({ params }) => {
  const topic = { name: params.topicId };
  return (0, import_node.json)(topic);
};
function JokeRoute() {
  const topic = (0, import_react11.useLoaderData)();
  const name = topic.name;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "text-3xl"
  }, "Here's your topic:"), /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-4xl"
  }, name)), /* @__PURE__ */ React.createElement("span", null, "Trending Articles"));
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
var assets_manifest_default = { "version": "14ac4177", "entry": { "module": "/build/entry.client-BR4IG6WZ.js", "imports": ["/build/_shared/chunk-GQO7ZHV7.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-JG7UMZ3D.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/courses/index": { "id": "routes/courses/index", "parentId": "root", "path": "courses", "index": true, "caseSensitive": void 0, "module": "/build/routes/courses/index-DJLPHHL6.js", "imports": ["/build/_shared/chunk-AGP4SG4G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/header": { "id": "routes/header", "parentId": "root", "path": "header", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/header-AKRB35G3.js", "imports": ["/build/_shared/chunk-AGP4SG4G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UGDV3TWJ.js", "imports": ["/build/_shared/chunk-OLJMUS4D.js", "/build/_shared/chunk-XZBCD3DL.js", "/build/_shared/chunk-AGP4SG4G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn": { "id": "routes/learn", "parentId": "root", "path": "learn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn-GGELKA2I.js", "imports": ["/build/_shared/chunk-AGP4SG4G.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId": { "id": "routes/learn/$topicId", "parentId": "routes/learn", "path": ":topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId-MT2MGZGU.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/main-content": { "id": "routes/main-content", "parentId": "root", "path": "main-content", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/main-content-G5NZKLIN.js", "imports": ["/build/_shared/chunk-XZBCD3DL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/motd": { "id": "routes/motd", "parentId": "root", "path": "motd", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/motd-BKY5Z4XS.js", "imports": ["/build/_shared/chunk-OLJMUS4D.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-14AC4177.js" };

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
  "routes/courses/index": {
    id: "routes/courses/index",
    parentId: "root",
    path: "courses",
    index: true,
    caseSensitive: void 0,
    module: courses_exports
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
app.get("/servercode", (req, res) => {
  console.log("SERVER CODE EXECUTED!");
  res.send("BOOM");
});
var port = process.env.PORT || 4e3;
app.listen(port, () => {
  console.log(`\u{1F680} live at http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvY291cnNlcy9pbmRleC50c3giLCAiLi4vYXBwL3JvdXRlcy9oZWFkZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9tYWluLWNvbnRlbnQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9oZWFkZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vYXBwL3JvdXRlcy9tb3RkLnRzeCIsICIuLi9hcHAvcm91dGVzL21haW4tY29udGVudC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9tb3RkLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9leHByZXNzJztcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICAnL2J1aWxkJyxcbiAgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYy9idWlsZCcsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6ICcxeScgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycsIHsgbWF4QWdlOiAnMWgnIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oJ3RpbnknKSk7XG5cbmFwcC5hbGwoXG4gICcqJyxcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmFwcC5nZXQoJy9zZXJ2ZXJjb2RlJywgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdTRVJWRVIgQ09ERSBFWEVDVVRFRCEnKTtcbiAgcmVzLnNlbmQoJ0JPT00nKTtcbn0pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFx1RDgzRFx1REU4MCBsaXZlIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvY291cnNlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL21haW4tY29udGVudC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2hlYWRlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL21vdGQudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9jb3Vyc2VzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jb3Vyc2VzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvdXJzZXNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9tYWluLWNvbnRlbnRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21haW4tY29udGVudFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtYWluLWNvbnRlbnRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2hlYWRlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaGVhZGVyXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImhlYWRlclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxlYXJuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFyblwiLFxuICAgICAgcGF0aDogXCI6dG9waWNJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvbW90ZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbW90ZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtb3RkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9XG4gIH07IiwgImltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90YWlsd2luZC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6ICd1dGYtOCcsXG4gIHRpdGxlOiAnU2FwaWVudGlhJyxcbiAgdmlld3BvcnQ6ICd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vaGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgYmctYmxhY2tcIj5cbiAgICAgIDxIZWFkZXIgLz47PHNwYW4+VGhpcyBpcyB0aGUgY291cnNlcyBzZWN0aW9uPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvaGVhZGVyLmNzcyc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGUgfV07XG59O1xuXG5jb25zdCBMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHNwYWNlLXgtMSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgPExpbmsgdG89eycvJ30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCAgXCI+U2FwaWVudGlhPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGFuZ3VhZ2VTZWxlY3RvciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMS41IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1sYW5ndWFnZSBoLTYgdy02IHN0cm9rZS13aGl0ZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNCA1aDdcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNOSAzdjJjMCA0LjQxOCAtMi4yMzkgOCAtNSA4XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUgOWMtLjAwMyAyLjE0NCAyLjk1MiAzLjkwOCA2LjcgNFwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMiAyMGw0IC05bDQgOVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xOS4xIDE4aC02LjJcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4+RW5nbGlzaDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHlwZSBOYXZFbGVtZW50UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IEdpdGh1YiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBteC0yIHNtOm14LTQgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JlaWxseWpvZG9ubmVsbC9zYXBpZW50aWFcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwIG9wYWNpdHktODBcIlxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9eyczMHB4J31cbiAgICAgICAgICBoZWlnaHQ9eyczMHB4J31cbiAgICAgICAgICBjbGFzc05hbWU9XCIgZmlsbC1wcmltYXJ5LXRleHQgXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTY0IDUuMTAzYy0zMy4zNDcgMC02MC4zODggMjcuMDM1LTYwLjM4OCA2MC4zODggMCAyNi42ODIgMTcuMzAzIDQ5LjMxNyA0MS4yOTcgNTcuMzAzIDMuMDE3LjU2IDQuMTI1LTEuMzEgNC4xMjUtMi45MDUgMC0xLjQ0LS4wNTYtNi4xOTctLjA4Mi0xMS4yNDMtMTYuOCAzLjY1My0yMC4zNDUtNy4xMjUtMjAuMzQ1LTcuMTI1LTIuNzQ3LTYuOTgtNi43MDUtOC44MzYtNi43MDUtOC44MzYtNS40OC0zLjc0OC40MTMtMy42Ny40MTMtMy42NyA2LjA2My40MjUgOS4yNTcgNi4yMjMgOS4yNTcgNi4yMjMgNS4zODYgOS4yMyAxNC4xMjcgNi41NjIgMTcuNTczIDUuMDIuNTQyLTMuOTAzIDIuMTA3LTYuNTY4IDMuODM0LTguMDc2LTEzLjQxMy0xLjUyNS0yNy41MTQtNi43MDQtMjcuNTE0LTI5Ljg0MyAwLTYuNTkzIDIuMzYtMTEuOTggNi4yMjMtMTYuMjEtLjYyOC0xLjUyLTIuNjk1LTcuNjYyLjU4NC0xNS45OCAwIDAgNS4wNy0xLjYyMyAxNi42MSA2LjE5QzUzLjcgMzUgNTguODY3IDM0LjMyNyA2NCAzNC4zMDRjNS4xMy4wMjMgMTAuMy42OTQgMTUuMTI3IDIuMDMzIDExLjUyNi03LjgxMyAxNi41OS02LjE5IDE2LjU5LTYuMTkgMy4yODcgOC4zMTcgMS4yMiAxNC40Ni41OTMgMTUuOTggMy44NzIgNC4yMyA2LjIxNSA5LjYxNyA2LjIxNSAxNi4yMSAwIDIzLjE5NC0xNC4xMjcgMjguMy0yNy41NzQgMjkuNzk2IDIuMTY3IDEuODc0IDQuMDk3IDUuNTUgNC4wOTcgMTEuMTgzIDAgOC4wOC0uMDcgMTQuNTgzLS4wNyAxNi41NzIgMCAxLjYwNyAxLjA4OCAzLjQ5IDQuMTQ4IDIuODk3IDIzLjk4LTcuOTk0IDQxLjI2My0zMC42MjIgNDEuMjYzLTU3LjI5NEMxMjQuMzg4IDMyLjE0IDk3LjM1IDUuMTA0IDY0IDUuMTA0elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yNi40ODQgOTEuODA2Yy0uMTMzLjMtLjYwNS4zOS0xLjAzNS4xODUtLjQ0LS4xOTYtLjY4NS0uNjA1LS41NDMtLjkwNi4xMy0uMzEuNjAzLS4zOTUgMS4wNC0uMTg4LjQ0LjE5Ny42OS42MS41MzcuOTF6bTIuNDQ2IDIuNzI5Yy0uMjg3LjI2Ny0uODUuMTQzLTEuMjMyLS4yOC0uMzk2LS40Mi0uNDctLjk4My0uMTc3LTEuMjU0LjI5OC0uMjY2Ljg0NC0uMTQgMS4yNC4yOC4zOTQuNDI2LjQ3Mi45ODQuMTcgMS4yNTV6TTMxLjMxMiA5OC4wMTJjLS4zNy4yNTgtLjk3Ni4wMTctMS4zNS0uNTItLjM3LS41MzgtLjM3LTEuMTgzLjAxLTEuNDQuMzczLS4yNTguOTctLjAyNSAxLjM1LjUwNy4zNjguNTQ1LjM2OCAxLjE5LS4wMSAxLjQ1MnptMy4yNjEgMy4zNjFjLS4zMy4zNjUtMS4wMzYuMjY3LTEuNTUyLS4yMy0uNTI3LS40ODctLjY3NC0xLjE4LS4zNDMtMS41NDQuMzM2LS4zNjYgMS4wNDUtLjI2NCAxLjU2NC4yMy41MjcuNDg2LjY4NiAxLjE4LjMzMyAxLjU0M3ptNC41IDEuOTUxYy0uMTQ3LjQ3My0uODI1LjY4OC0xLjUxLjQ4Ni0uNjgzLS4yMDctMS4xMy0uNzYtLjk5LTEuMjM4LjE0LS40NzcuODIzLS43IDEuNTEyLS40ODUuNjgzLjIwNiAxLjEzLjc1Ni45ODggMS4yMzd6bTQuOTQzLjM2MWMuMDE3LjQ5OC0uNTYzLjkxLTEuMjguOTItLjcyMy4wMTctMS4zMDgtLjM4Ny0xLjMxNS0uODc3IDAtLjUwMy41NjgtLjkxIDEuMjktLjkyNC43MTctLjAxMyAxLjMwNi4zODcgMS4zMDYuODh6bTQuNTk4LS43ODJjLjA4Ni40ODUtLjQxMy45ODQtMS4xMjYgMS4xMTctLjcuMTMtMS4zNS0uMTcyLTEuNDQtLjY1My0uMDg2LS40OTguNDIyLS45OTcgMS4xMjItMS4xMjYuNzE0LS4xMjMgMS4zNTQuMTcgMS40NDQuNjYzem0wIDBcIj48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJDb3Vyc2VzXCIgbG9jYXRpb249XCIvY291cnNlc1wiIC8+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIlBhdGhzXCIgbG9jYXRpb249XCIvcGF0aHNcIiAvPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJMb2dpblwiIGxvY2F0aW9uPVwiL2xvZ2luXCIgLz5cbiAgICAgIDxHaXRodWIgLz5cbiAgICAgIDxMYW5ndWFnZVNlbGVjdG9yIC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uRWxlbWVudCA9ICh7IG5hbWUsIGxvY2F0aW9uIH06IE5hdkVsZW1lbnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBjbGFzc05hbWU9XCIgbXgtMiBzbTpteC00IG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCJcbiAgICAgIGhyZWY9e2xvY2F0aW9ufVxuICAgID5cbiAgICAgIHtuYW1lfVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJweC02IGxnOnB4LTEyIHB5LTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgaGVhZGVyXCI+XG4gICAgICA8TG9nbyAvPlxuXG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL21haW4tY29udGVudC5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbGFiZWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHRhbGtUb1RoZVNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgbm93Jyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zZXJ2ZXJjb2RlJyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cblxuICAgIC8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc2VydmVyLWNvZGUnKS50aGVuKChyZXMpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgLy8gaGFuZGxlIHdoYXQgaGFwcGVucyBvbiBrZXkgcHJlc3NcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSAmJiBldmVudC5rZXkgPT09ICdrJykge1xuICAgICAgaWYgKHNlYXJjaEJhci5jdXJyZW50ICE9PSBudWxsICYmIGxhYmVsUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgc2VhcmNoQmFyLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgbGFiZWxSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZUtleVByZXNzXSk7XG5cbiAgY29uc3QgTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzUgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LWZ1bGwgbXktNiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBcIj5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAnIDAgMCA4MHB4IHJnYigxOTIgMjE5IDI1NSAvIDMwJSksIDAgMCAzMnB4IHJnYig2NSAxMjAgMjU1IC8gMTUlKScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtWzRyZW1dIGxlYWRpbmctWzQuNXJlbV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaGFyZWQga25vd2xlZGdlIDxiciAvPiBmcm9tIHRoZSB0b3AgbWluZHMgaW4gdGhlIHByb2dyYW1taW5nXG4gICAgICAgICAgICAgIGluZHVzdHJ5XG4gICAgICAgICAgICAgIDxiciAvPiAtIGFsbCBmb3IgZnJlZSFcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC0zeGwgIHB0LXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctNy8xMSBteS02ICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1sYXJnZXIgbGVhZGluZy03XCI+XG4gICAgICAgICAgICAgIFdoZXRoZXIgYSBiZWdpbm5lciwgbGVhcm5pbmcgdG8gY29kZSwgb3IgYSBzZWFzb25lZCB2ZXRlcmFuLiBUYWtlXG4gICAgICAgICAgICAgIGEgdG91ciBiZWxvdyB0byBnZXQgc3RhcnRlZCFcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBwYi1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LWZ1bGwgbXktMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgZmxleCBiZy1hY2NlbnQtcGluayBweS00IHB4LTE2IHJvdW5kZWQtbGcgdGV4dC1sZyBib3JkZXItNCBvcGFjaXR5LTkwIGJvcmRlci10cmFuc3BhcmVudCBmb250LWJvbGQgZm9jdXMtd2l0aGluOmJvcmRlci00IGZvY3VzLXdpdGhpbjpib3JkZXItd2hpdGUgZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwICBob3Zlcjpib3JkZXItNCBob3Zlcjpib3JkZXItd2hpdGUgaG92ZXI6b3BhY2l0eS0xMDAgICBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17YXN5bmMgKCkgPT4gdGFsa1RvVGhlU2VydmVyKCl9PlRha2UgYSBUb3VyPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgLy9wYWRkaW5nLXJpZ2h0IHdhcyAxNlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2VhcmNoICBteC0xNSBmbGV4ICByZWxhdGl2ZVwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17bGFiZWxSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4XG4gICAgICAgICAgICAgc206ZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdFxuICAgICAgICAgICAgICBzcGFjZS14LTMgcHgtNCBcbiAgICAgICAgICAgICAgIHNoYWRvdy1zbSByb3VuZGVkLWxnIHRleHQtc2xhdGUtODAwXG4gICAgICAgICAgICAgIGRhcms6cmluZy0wIGRhcms6dGV4dC1zbGF0ZS04MDBcbiAgICAgICAgICAgICAgZGFyazpoaWdobGlnaHQtd2hpdGUvNSAgXG4gICAgICAgICAgICAgIHotNTBcbiAgICAgICAgICAgICAgIGJvcmRlci00IGJvcmRlci13aGl0ZVxuICAgICAgICAgICAgICAgYmctd2hpdGVcbiAgICAgICAgICAgICAgZm9jdXMtd2l0aGluOmJvcmRlci00IGZvY3VzLXdpdGhpbjpib3JkZXItc29saWQgZm9jdXMtd2l0aGluOmJvcmRlci1hY2NlbnQtZ3JlZW5cbiAgICAgICAgICAgICAgaC0xNlxuICAgICAgICAgICAgICB6LTEwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cdUQ4M0RcdUREMEQ8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtzZWFyY2hCYXJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdG9waWNcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHctZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXI6W25vbmVdIGZvY3VzOltvdXRsaW5lOiAwLCBib3JkZXI6IG5vbmVdIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxrYmRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFiYnJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbW1hbmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXVuZGVybGluZSB0ZXh0LXNsYXRlLTMwMCBkYXJrOnRleHQtc2xhdGUtNTAwXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFx1MjMxOFxuICAgICAgICAgICAgICA8L2FiYnI+XG4gICAgICAgICAgICAgIEtcbiAgICAgICAgICAgIDwva2JkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ29udGFpbmVyID0gKHsgdGV4dCB9OiBhbnkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCIgXG4gICAgICAgIHJlbGF0aXZlIG1iLTQgbXItNCBibG9jayBoLWF1dG8gdy1hdXRvIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBweC02XG4gICAgICAgIHB5LTMgdHJhbnNpdGlvbiB0ZXh0LXByaW1hcnkgYmctc2Vjb25kYXJ5IGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCBcbiAgICAgICAgYmctWyM3MTcxNzE1NF0gaG92ZXI6YnJpZ2h0bmVzcy0xNTAgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6Ym9yZGVyLWFjY2VudC1waW5rXCJcbiAgICAgID5cbiAgICAgICAgPExpbmsgdG89e2AuL2xlYXJuLyR7dGV4dH1gfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IENob29zZUFUb3BpYyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHAtOFwiPk9yIGNob29zZSBhIHRvcGljPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgLW1iLTQgLW1yLTQgZmxleCBmbGV4LXdyYXAgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlbWl4XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQ1NTXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIk5leHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiVGVzdGluZ1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKZXN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkFDSURcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0yLzUgcHgtMTZcIj5cbiAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8Q2hvb3NlQVRvcGljIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgcHktOCBweC02IGxnOnB4LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPExlZnRDb250ZW50IC8+XG4gICAgICA8UmlnaHRDb250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iLCAiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5cbmNvbnN0IExvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgc3BhY2UteC0xIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICA8TGluayB0bz17Jy8nfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkICBcIj5TYXBpZW50aWE8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMYW5ndWFnZVNlbGVjdG9yID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIG1sLTIgc206bWwtNCBcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0xLjUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlLzYwICByb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kICBmb2N1cy13aXRoaW46OmJnLXNsYXRlLTUwLzUgZm9jdXMtd2l0aGluOjpib3JkZXItd2hpdGUgaG92ZXI6Ymctc2xhdGUtNTAvNSBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWxhbmd1YWdlIGgtNiB3LTYgc3Ryb2tlLXdoaXRlXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk00IDVoN1wiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk05IDN2MmMwIDQuNDE4IC0yLjIzOSA4IC01IDhcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNSA5Yy0uMDAzIDIuMTQ0IDIuOTUyIDMuOTA4IDYuNyA0XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEyIDIwbDQgLTlsNCA5XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE5LjEgMThoLTYuMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3Bhbj5FbmdsaXNoPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIE5hdkVsZW1lbnRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufTtcblxuY29uc3QgR2l0aHViID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIG14LTIgc206bXgtNCBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVpbGx5am9kb25uZWxsL3NhcGllbnRpYVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgb3BhY2l0eS04MFwiXG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD17JzMwcHgnfVxuICAgICAgICAgIGhlaWdodD17JzMwcHgnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBmaWxsLXByaW1hcnktdGV4dCBcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNNjQgNS4xMDNjLTMzLjM0NyAwLTYwLjM4OCAyNy4wMzUtNjAuMzg4IDYwLjM4OCAwIDI2LjY4MiAxNy4zMDMgNDkuMzE3IDQxLjI5NyA1Ny4zMDMgMy4wMTcuNTYgNC4xMjUtMS4zMSA0LjEyNS0yLjkwNSAwLTEuNDQtLjA1Ni02LjE5Ny0uMDgyLTExLjI0My0xNi44IDMuNjUzLTIwLjM0NS03LjEyNS0yMC4zNDUtNy4xMjUtMi43NDctNi45OC02LjcwNS04LjgzNi02LjcwNS04LjgzNi01LjQ4LTMuNzQ4LjQxMy0zLjY3LjQxMy0zLjY3IDYuMDYzLjQyNSA5LjI1NyA2LjIyMyA5LjI1NyA2LjIyMyA1LjM4NiA5LjIzIDE0LjEyNyA2LjU2MiAxNy41NzMgNS4wMi41NDItMy45MDMgMi4xMDctNi41NjggMy44MzQtOC4wNzYtMTMuNDEzLTEuNTI1LTI3LjUxNC02LjcwNC0yNy41MTQtMjkuODQzIDAtNi41OTMgMi4zNi0xMS45OCA2LjIyMy0xNi4yMS0uNjI4LTEuNTItMi42OTUtNy42NjIuNTg0LTE1Ljk4IDAgMCA1LjA3LTEuNjIzIDE2LjYxIDYuMTlDNTMuNyAzNSA1OC44NjcgMzQuMzI3IDY0IDM0LjMwNGM1LjEzLjAyMyAxMC4zLjY5NCAxNS4xMjcgMi4wMzMgMTEuNTI2LTcuODEzIDE2LjU5LTYuMTkgMTYuNTktNi4xOSAzLjI4NyA4LjMxNyAxLjIyIDE0LjQ2LjU5MyAxNS45OCAzLjg3MiA0LjIzIDYuMjE1IDkuNjE3IDYuMjE1IDE2LjIxIDAgMjMuMTk0LTE0LjEyNyAyOC4zLTI3LjU3NCAyOS43OTYgMi4xNjcgMS44NzQgNC4wOTcgNS41NSA0LjA5NyAxMS4xODMgMCA4LjA4LS4wNyAxNC41ODMtLjA3IDE2LjU3MiAwIDEuNjA3IDEuMDg4IDMuNDkgNC4xNDggMi44OTcgMjMuOTgtNy45OTQgNDEuMjYzLTMwLjYyMiA0MS4yNjMtNTcuMjk0QzEyNC4zODggMzIuMTQgOTcuMzUgNS4xMDQgNjQgNS4xMDR6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI2LjQ4NCA5MS44MDZjLS4xMzMuMy0uNjA1LjM5LTEuMDM1LjE4NS0uNDQtLjE5Ni0uNjg1LS42MDUtLjU0My0uOTA2LjEzLS4zMS42MDMtLjM5NSAxLjA0LS4xODguNDQuMTk3LjY5LjYxLjUzNy45MXptMi40NDYgMi43MjljLS4yODcuMjY3LS44NS4xNDMtMS4yMzItLjI4LS4zOTYtLjQyLS40Ny0uOTgzLS4xNzctMS4yNTQuMjk4LS4yNjYuODQ0LS4xNCAxLjI0LjI4LjM5NC40MjYuNDcyLjk4NC4xNyAxLjI1NXpNMzEuMzEyIDk4LjAxMmMtLjM3LjI1OC0uOTc2LjAxNy0xLjM1LS41Mi0uMzctLjUzOC0uMzctMS4xODMuMDEtMS40NC4zNzMtLjI1OC45Ny0uMDI1IDEuMzUuNTA3LjM2OC41NDUuMzY4IDEuMTktLjAxIDEuNDUyem0zLjI2MSAzLjM2MWMtLjMzLjM2NS0xLjAzNi4yNjctMS41NTItLjIzLS41MjctLjQ4Ny0uNjc0LTEuMTgtLjM0My0xLjU0NC4zMzYtLjM2NiAxLjA0NS0uMjY0IDEuNTY0LjIzLjUyNy40ODYuNjg2IDEuMTguMzMzIDEuNTQzem00LjUgMS45NTFjLS4xNDcuNDczLS44MjUuNjg4LTEuNTEuNDg2LS42ODMtLjIwNy0xLjEzLS43Ni0uOTktMS4yMzguMTQtLjQ3Ny44MjMtLjcgMS41MTItLjQ4NS42ODMuMjA2IDEuMTMuNzU2Ljk4OCAxLjIzN3ptNC45NDMuMzYxYy4wMTcuNDk4LS41NjMuOTEtMS4yOC45Mi0uNzIzLjAxNy0xLjMwOC0uMzg3LTEuMzE1LS44NzcgMC0uNTAzLjU2OC0uOTEgMS4yOS0uOTI0LjcxNy0uMDEzIDEuMzA2LjM4NyAxLjMwNi44OHptNC41OTgtLjc4MmMuMDg2LjQ4NS0uNDEzLjk4NC0xLjEyNiAxLjExNy0uNy4xMy0xLjM1LS4xNzItMS40NC0uNjUzLS4wODYtLjQ5OC40MjItLjk5NyAxLjEyMi0xLjEyNi43MTQtLjEyMyAxLjM1NC4xNyAxLjQ0NC42NjN6bTAgMFwiPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIkNvdXJzZXNcIiBsb2NhdGlvbj1cIi9jb3Vyc2VzXCIgLz5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiUGF0aHNcIiBsb2NhdGlvbj1cIi9wYXRoc1wiIC8+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIkxvZ2luXCIgbG9jYXRpb249XCIvbG9naW5cIiAvPlxuICAgICAgPEdpdGh1YiAvPlxuICAgICAgPExhbmd1YWdlU2VsZWN0b3IgLz5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdmlnYXRpb25FbGVtZW50ID0gKHsgbmFtZSwgbG9jYXRpb24gfTogTmF2RWxlbWVudFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGNsYXNzTmFtZT1cIiBteC0yIHNtOm14LTQgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkIGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgaHJlZj17bG9jYXRpb259XG4gICAgPlxuICAgICAge25hbWV9XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInB4LTYgbGc6cHgtMTIgcHktNiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBoZWFkZXJcIj5cbiAgICAgIDxMb2dvIC8+XG5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuIiwgImltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBIZWFkZXIsIGxpbmtzIGFzIGhlYWRlckxpbmtzIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IE1vdGQgZnJvbSAnLi9tb3RkJztcbmltcG9ydCB7IE1haW5Db250ZW50LCBsaW5rcyBhcyBtYWluQ29udGVudExpbmtzIH0gZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG4gIC4uLmhlYWRlckxpbmtzKCksXG4gIC4uLm1haW5Db250ZW50TGlua3MoKSxcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjQnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TW90ZCAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPE1haW5Db250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGNvbnN0IE1vdGQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZGFyay1tb2RlLWJnIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcHgtMjAgIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWNjZW50LXBpbmsgdy1mdWxsIHRleHQtY2VudGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBXZSBzdGFuZCB3aXRoIFVrcmFpbmUgXHVEODNDXHVEREZBXHVEODNDXHVEREU2XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmF6b21mb3J1a3JhaW5lLm9yZy9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC0yIGN1cnNvci1wb2ludGVyIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnktdGV4dCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRG9uYXRlIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW90ZDtcbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL21haW4tY29udGVudC5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbGFiZWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHRhbGtUb1RoZVNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgbm93Jyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zZXJ2ZXJjb2RlJyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cblxuICAgIC8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc2VydmVyLWNvZGUnKS50aGVuKChyZXMpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgLy8gaGFuZGxlIHdoYXQgaGFwcGVucyBvbiBrZXkgcHJlc3NcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSAmJiBldmVudC5rZXkgPT09ICdrJykge1xuICAgICAgaWYgKHNlYXJjaEJhci5jdXJyZW50ICE9PSBudWxsICYmIGxhYmVsUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgc2VhcmNoQmFyLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgbGFiZWxSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZUtleVByZXNzXSk7XG5cbiAgY29uc3QgTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzUgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LWZ1bGwgbXktNiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBcIj5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAnIDAgMCA4MHB4IHJnYigxOTIgMjE5IDI1NSAvIDMwJSksIDAgMCAzMnB4IHJnYig2NSAxMjAgMjU1IC8gMTUlKScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtWzRyZW1dIGxlYWRpbmctWzQuNXJlbV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaGFyZWQga25vd2xlZGdlIDxiciAvPiBmcm9tIHRoZSB0b3AgbWluZHMgaW4gdGhlIHByb2dyYW1taW5nXG4gICAgICAgICAgICAgIGluZHVzdHJ5XG4gICAgICAgICAgICAgIDxiciAvPiAtIGFsbCBmb3IgZnJlZSFcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC0zeGwgIHB0LXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctNy8xMSBteS02ICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1sYXJnZXIgbGVhZGluZy03XCI+XG4gICAgICAgICAgICAgIFdoZXRoZXIgYSBiZWdpbm5lciwgbGVhcm5pbmcgdG8gY29kZSwgb3IgYSBzZWFzb25lZCB2ZXRlcmFuLiBUYWtlXG4gICAgICAgICAgICAgIGEgdG91ciBiZWxvdyB0byBnZXQgc3RhcnRlZCFcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBwYi1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LWZ1bGwgbXktMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgZmxleCBiZy1hY2NlbnQtcGluayBweS00IHB4LTE2IHJvdW5kZWQtbGcgdGV4dC1sZyBib3JkZXItNCBvcGFjaXR5LTkwIGJvcmRlci10cmFuc3BhcmVudCBmb250LWJvbGQgZm9jdXMtd2l0aGluOmJvcmRlci00IGZvY3VzLXdpdGhpbjpib3JkZXItd2hpdGUgZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwICBob3Zlcjpib3JkZXItNCBob3Zlcjpib3JkZXItd2hpdGUgaG92ZXI6b3BhY2l0eS0xMDAgICBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17YXN5bmMgKCkgPT4gdGFsa1RvVGhlU2VydmVyKCl9PlRha2UgYSBUb3VyPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgLy9wYWRkaW5nLXJpZ2h0IHdhcyAxNlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2VhcmNoICBteC0xNSBmbGV4ICByZWxhdGl2ZVwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17bGFiZWxSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4XG4gICAgICAgICAgICAgc206ZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdFxuICAgICAgICAgICAgICBzcGFjZS14LTMgcHgtNCBcbiAgICAgICAgICAgICAgIHNoYWRvdy1zbSByb3VuZGVkLWxnIHRleHQtc2xhdGUtODAwXG4gICAgICAgICAgICAgIGRhcms6cmluZy0wIGRhcms6dGV4dC1zbGF0ZS04MDBcbiAgICAgICAgICAgICAgZGFyazpoaWdobGlnaHQtd2hpdGUvNSAgXG4gICAgICAgICAgICAgIHotNTBcbiAgICAgICAgICAgICAgIGJvcmRlci00IGJvcmRlci13aGl0ZVxuICAgICAgICAgICAgICAgYmctd2hpdGVcbiAgICAgICAgICAgICAgZm9jdXMtd2l0aGluOmJvcmRlci00IGZvY3VzLXdpdGhpbjpib3JkZXItc29saWQgZm9jdXMtd2l0aGluOmJvcmRlci1hY2NlbnQtZ3JlZW5cbiAgICAgICAgICAgICAgaC0xNlxuICAgICAgICAgICAgICB6LTEwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cdUQ4M0RcdUREMEQ8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtzZWFyY2hCYXJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdG9waWNcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHctZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXI6W25vbmVdIGZvY3VzOltvdXRsaW5lOiAwLCBib3JkZXI6IG5vbmVdIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxrYmRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFiYnJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbW1hbmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXVuZGVybGluZSB0ZXh0LXNsYXRlLTMwMCBkYXJrOnRleHQtc2xhdGUtNTAwXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFx1MjMxOFxuICAgICAgICAgICAgICA8L2FiYnI+XG4gICAgICAgICAgICAgIEtcbiAgICAgICAgICAgIDwva2JkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ29udGFpbmVyID0gKHsgdGV4dCB9OiBhbnkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCIgXG4gICAgICAgIHJlbGF0aXZlIG1iLTQgbXItNCBibG9jayBoLWF1dG8gdy1hdXRvIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBweC02XG4gICAgICAgIHB5LTMgdHJhbnNpdGlvbiB0ZXh0LXByaW1hcnkgYmctc2Vjb25kYXJ5IGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCBcbiAgICAgICAgYmctWyM3MTcxNzE1NF0gaG92ZXI6YnJpZ2h0bmVzcy0xNTAgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6Ym9yZGVyLWFjY2VudC1waW5rXCJcbiAgICAgID5cbiAgICAgICAgPExpbmsgdG89e2AuL2xlYXJuLyR7dGV4dH1gfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IENob29zZUFUb3BpYyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHAtOFwiPk9yIGNob29zZSBhIHRvcGljPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgLW1iLTQgLW1yLTQgZmxleCBmbGV4LXdyYXAgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlbWl4XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQ1NTXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIk5leHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiVGVzdGluZ1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKZXN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkFDSURcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0yLzUgcHgtMTZcIj5cbiAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8Q2hvb3NlQVRvcGljIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgcHktOCBweC02IGxnOnB4LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPExlZnRDb250ZW50IC8+XG4gICAgICA8UmlnaHRDb250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iLCAiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgY2hldnJvblVwIGZyb20gJy4uLy4uL3B1YmxpYy9jaGV2cm9uLXVwLnN2Zyc7XG5pbXBvcnQgY2hldnJvbkRvd24gZnJvbSAnLi4vLi4vcHVibGljL2NoZXZyb24tZG93bi5zdmcnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJlc291cmNlTGluayA9ICgpID0+IHtcbiAgY29uc3QgW3Vwdm90ZSwgc2V0VXB2b3RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rvd252b3RlLCBzZXREb3dudm90ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IGNvdW50ID0gMTA7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBiZy1ncmVlbi0xMDAgcC0xMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxzcGFuPlJhbms8L3NwYW4+XG4gICAgICA8c3Bhbj5BcnRpY2xlIFRpdGxlPC9zcGFuPlxuICAgICAgPHNwYW4+QXV0aG9yPC9zcGFuPlxuICAgICAgPHNwYW4+VVJMPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLXllbGxvdy0yMDAgcHktMSBweC00IHJvdW5kZWQtMnhsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgb25DbGljaz17KCkgPT4gc2V0VXB2b3RlKChwcmV2KSA9PiAhcHJldil9IHNyYz17Y2hldnJvblVwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2BweC0xIGZvbnQtYm9sZCAke1xuICAgICAgICAgICAgdXB2b3RlID8gJ3RleHQtZ3JlZW4tNDAwJyA6IGRvd252b3RlID8gJ3RleHQtcmVkLTQwMCcgOiAndGV4dC1ibGFjaydcbiAgICAgICAgICB9IGB9XG4gICAgICAgID5cbiAgICAgICAgICB7Y291bnR9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXsoKSA9PiBzZXREb3dudm90ZSgocHJldikgPT4gIXByZXYpfT5cbiAgICAgICAgICA8aW1nIHNyYz17Y2hldnJvbkRvd259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctYmxhY2tcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8c3Bhbj5UaGlzIGlzIHRoZSBMZWFybiBzZWN0aW9uPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyIGZsZXgtY29sIHAtMTBcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8UmVzb3VyY2VMaW5rIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGpzb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHRvcGljID0geyBuYW1lOiBwYXJhbXMudG9waWNJZCB9O1xuICByZXR1cm4ganNvbih0b3BpYyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2tlUm91dGUoKSB7XG4gIGNvbnN0IHRvcGljID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCBuYW1lID0gdG9waWMubmFtZTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPkhlcmUncyB5b3VyIHRvcGljOjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsXCI+e25hbWV9PC9zcGFuPlxuICAgICAgPC8+XG4gICAgICA8c3Bhbj5UcmVuZGluZyBBcnRpY2xlczwvc3Bhbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJleHBvcnQgY29uc3QgTW90ZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1kYXJrLW1vZGUtYmcgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBweC0yMCAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtcGluayB3LWZ1bGwgdGV4dC1jZW50ZXIgcm91bmRlZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIFdlIHN0YW5kIHdpdGggVWtyYWluZSBcdUQ4M0NcdURERkFcdUQ4M0NcdURERTZcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXpvbWZvcnVrcmFpbmUub3JnL1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgY3Vyc29yLXBvaW50ZXIgZm9udC1ib2xkIHRleHQtcHJpbWFyeS10ZXh0IGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb25hdGUgaGVyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb3RkO1xuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzE0YWM0MTc3JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1CUjRJRzZXWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR1FPN1pIVjcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Qk83NEZXTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtSkc3VU1aM0QuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jb3Vyc2VzL2luZGV4Jzp7J2lkJzoncm91dGVzL2NvdXJzZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY291cnNlcycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY291cnNlcy9pbmRleC1ESkxQSEhMNi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQUdQNFNHNEcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2hlYWRlcic6eydpZCc6J3JvdXRlcy9oZWFkZXInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaGVhZGVyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hlYWRlci1BS1JCMzVHMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQUdQNFNHNEcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVVHRFYzVFdKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PTEpNVVM0RC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVhaQkNEM0RMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQUdQNFNHNEcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuJzp7J2lkJzoncm91dGVzL2xlYXJuJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xlYXJuJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLUdHRUxLQTJJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1BR1A0U0c0Ry5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybicsJ3BhdGgnOic6dG9waWNJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC1NVDJNR1pHVS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWFpbi1jb250ZW50Jzp7J2lkJzoncm91dGVzL21haW4tY29udGVudCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtYWluLWNvbnRlbnQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWFpbi1jb250ZW50LUc1TlpLTElOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YWkJDRDNETC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbW90ZCc6eydpZCc6J3JvdXRlcy9tb3RkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21vdGQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbW90ZC1CS1k1WjRYUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstT0xKTVVTNEQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0xNEFDNDE3Ny5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFlBQXVCOzs7QUNEdkIscUJBQW9CO0FBQ3BCLHlCQUF3QjtBQUN4QixvQkFBbUI7QUFDbkIsc0JBQXFDOzs7QUNIckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG1CQUE0QjtBQUM1QixvQkFBK0I7QUFFaEIsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsTUFBSSxTQUFTLGtDQUNYLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFR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
