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
var tailwind_default = "/build/_assets/tailwind-RTKUMLL5.css";

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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/popular-topics.tsx
var popular_topics_exports = {};
__export(popular_topics_exports, {
  default: () => PopularTopics
});
var import_react_router_dom = require("react-router-dom");
var data = [
  { name: "Svelte", id: 0 },
  { name: "Tailwind", id: 1 },
  { name: "Rust", id: 2 },
  { name: "Python", id: 3 },
  { name: "useEffect", id: 4 },
  { name: "Pagination", id: 5 }
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
    }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
      to: `./${lowerCaseTitle}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "w-full flex cursor-pointer px-5 py-2 rounded-xl hover:bg-stone-900 hover:text-accent-pink"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "cursor-pointer text-lg "
    }, item.name))));
  })));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/main-content.tsx
var main_content_exports = {};
__export(main_content_exports, {
  MainContent: () => MainContent,
  default: () => main_content_default2,
  links: () => links2
});

// app/styles/main-content.css
var main_content_default = "/build/_assets/main-content-RSU65OSM.css";

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/main-content.tsx
var import_react4 = require("@remix-run/react");

// app/components/search.tsx
var import_react3 = require("react");
function Search({ handleForm, size = "large" }) {
  const searchRef = (0, import_react3.useRef)(null);
  const labelRef = (0, import_react3.useRef)(null);
  const handleKeyPress = (0, import_react3.useCallback)((event) => {
    if (event.metaKey === true && event.key === "k") {
      if (searchRef.current !== null && labelRef.current !== null) {
        searchRef.current.focus();
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
  return /* @__PURE__ */ React.createElement("div", {
    className: `main-search flex  relative`
  }, /* @__PURE__ */ React.createElement("form", {
    className: `flex ${size === "large" ? "w-full" : size === "medium" ? "w-3/4" : "w-1/2"}`,
    onSubmit: (e) => handleForm(e)
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
    placeholder: "Search a topic",
    style: { outline: "none" },
    className: "text-xl\n                \n                \n                \n                \n                \n                w-full bg-transparent border:[none] focus:[outline: 0, border: none] focus:border-transparent"
  }), /* @__PURE__ */ React.createElement("kbd", {
    className: "font-sans font-semibold dark:text-slate-500\n              \n              \n              text-xl\n              "
  }, /* @__PURE__ */ React.createElement("abbr", {
    title: "Command",
    className: "no-underline text-slate-300 dark:text-slate-500\n                  \n                  text-xl\n                  \n                  "
  }, "\u2318"), "K"))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/main-content.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: main_content_default }];
};
var MainContent = () => {
  const talkToTheServer = async () => {
    try {
      const response = await fetch("http://localhost:4000/servercode");
      const data3 = await response.json();
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
    return /* @__PURE__ */ React.createElement(import_react4.Link, {
      to: `./learn/${text}`
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
var import_react5 = require("@remix-run/react");
var links3 = () => {
  return [{ rel: "stylesheet", href: header_default }];
};
var Logo = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " space-x-1 cursor-pointer"
  }, /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold  "
  }, "Sapientia")));
};
var NavigationLoginElement = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " cursor-pointer ml-2 sm:ml-4 "
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/login"
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
var Navigation = () => {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement(NavigationElement, {
    name: "Topics",
    location: "/learn"
  }), /* @__PURE__ */ React.createElement(NavigationElement, {
    name: "Paths",
    location: "/paths"
  }), /* @__PURE__ */ React.createElement(Github, null), /* @__PURE__ */ React.createElement(NavigationLoginElement, null));
};
var NavigationElement = ({ name, location }) => {
  return /* @__PURE__ */ React.createElement("a", {
    className: " mx-2 sm:mx-4 opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink hover:text-accent-pink",
    href: location
  }, name);
};
var Header = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "px-6 lg:px-12 py-6 flex justify-between items-center text-white header  bg-black"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement(Navigation, null));
};

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  default: () => Login,
  links: () => links6
});
var import_react8 = require("@remix-run/react");

// app/routes/main-content.tsx
var import_react6 = require("@remix-run/react");
var links4 = () => {
  return [{ rel: "stylesheet", href: main_content_default }];
};
var MainContent2 = () => {
  const talkToTheServer = async () => {
    try {
      const response = await fetch("http://localhost:4000/servercode");
      const data3 = await response.json();
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
    return /* @__PURE__ */ React.createElement(import_react6.Link, {
      to: `./learn/${text}`
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

// app/routes/header.tsx
var import_react7 = require("@remix-run/react");
var links5 = () => {
  return [{ rel: "stylesheet", href: header_default }];
};
var Logo2 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " space-x-1 cursor-pointer"
  }, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold  "
  }, "Sapientia")));
};
var NavigationLoginElement2 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " cursor-pointer ml-2 sm:ml-4 "
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/login"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "px-6 py-2  flex justify-center items-center place-items-center border border-solid border-white/60  rounded-md drop-shadow-md  focus-within::bg-slate-50/5 focus-within::border-white hover:bg-slate-50/5 hover:border-white "
  }, /* @__PURE__ */ React.createElement("span", null, "Login"))));
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
    name: "Topics",
    location: "/learn"
  }), /* @__PURE__ */ React.createElement(NavigationElement2, {
    name: "Paths",
    location: "/paths"
  }), /* @__PURE__ */ React.createElement(Github2, null), /* @__PURE__ */ React.createElement(NavigationLoginElement2, null));
};
var NavigationElement2 = ({ name, location }) => {
  return /* @__PURE__ */ React.createElement("a", {
    className: " mx-2 sm:mx-4 opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink hover:text-accent-pink",
    href: location
  }, name);
};
var Header2 = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "px-6 lg:px-12 py-6 flex justify-between items-center text-white header  bg-black"
  }, /* @__PURE__ */ React.createElement(Logo2, null), /* @__PURE__ */ React.createElement(Navigation2, null));
};

// app/styles/index.css
var styles_default = "/build/_assets/index-V3Z762II.css";

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/signup.tsx
var links6 = () => [
  ...links5(),
  ...links4(),
  { rel: "stylesheet", href: styles_default }
];
function Login() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement(import_react8.Outlet, null));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/signup/index.tsx
var signup_exports2 = {};
__export(signup_exports2, {
  default: () => Login2
});
var import_react10 = require("@remix-run/react");

// app/components/formatted-input.tsx
var import_react9 = require("react");
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
  const [showPassword, setShowPassword] = (0, import_react9.useState)(false);
  const [error, setError] = (0, import_react9.useState)(hasError);
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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/signup/index.tsx
function Login2() {
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
  }, "Already have an account?", /* @__PURE__ */ React.createElement(import_react10.Link, {
    to: "/login"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "ml-1 text-accent-pink cursor-pointer"
  }, "Login")))));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links7
});

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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/index.tsx
var import_react11 = require("@remix-run/react");
var links7 = () => [
  ...links5(),
  ...links4(),
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
  }, /* @__PURE__ */ React.createElement(motd_default, null)), /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement(import_react11.Outlet, null), /* @__PURE__ */ React.createElement(MainContent2, null));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn.tsx
var learn_exports = {};
__export(learn_exports, {
  default: () => index,
  links: () => links8
});
var import_react12 = require("@remix-run/react");

// app/routes/popular-topics.tsx
var import_react_router_dom2 = require("react-router-dom");
var data2 = [
  { name: "Svelte", id: 0 },
  { name: "Tailwind", id: 1 },
  { name: "Rust", id: 2 },
  { name: "Python", id: 3 },
  { name: "useEffect", id: 4 },
  { name: "Pagination", id: 5 }
];
function PopularTopics2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col mr-10 w-80"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold size text-2xl"
  }, "Popular Topics"), /* @__PURE__ */ React.createElement(React.Fragment, null, data2.map((item) => {
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
var links8 = () => [
  ...links4(),
  { rel: "stylesheet", href: styles_default }
];
function index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement("div", {
    className: "flex content-center px-6 lg:px-14 my-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement(Search, {
    size: "medium",
    handleForm: (e) => console.log(e)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-4"
  }, /* @__PURE__ */ React.createElement(PopularTopics2, null))), /* @__PURE__ */ React.createElement(import_react12.Outlet, null)));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId.tsx
var topicId_exports = {};
__export(topicId_exports, {
  default: () => JokeRoute,
  loader: () => loader
});
var import_node = require("@remix-run/node");
var import_react14 = require("@remix-run/react");
var import_react15 = require("react");

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
var db2;
if (false) {
  db2 = new import_client.PrismaClient();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
  }
  db2 = global.__db;
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId.tsx
var loader = async ({ params }) => {
  const name = params.topicId;
  const data3 = {
    articlePosts: await db2.post.findMany({
      where: {
        topic: name
      }
    })
  };
  return (0, import_node.json)({ data: data3, name });
};
function JokeRoute() {
  const [mute, setMute] = (0, import_react15.useState)(false);
  const { data: data3, name } = (0, import_react14.useLoaderData)();
  const { articlePosts } = data3;
  console.log(articlePosts);
  (0, import_react15.useEffect)(() => {
    const mute2 = localStorage.getItem("mute");
    const isMuted = mute2 !== null && JSON.parse(mute2);
    setMute(isMuted);
  }, []);
  const toggleAudio = () => {
    mute ? localStorage.setItem("mute", "false") : localStorage.setItem("mute", "true");
    setMute((prev) => !prev);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center flex-col ml-20 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-6xl mb-3 capitalize",
    style: {
      textShadow: "rgba(192, 219, 255, 0.3) 0px 0px 80px, rgba(65, 120, 255, 0.15) 0px 0px 32px"
    }
  }, name)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col text-xl mt-8"
  }, /* @__PURE__ */ React.createElement("button", {
    className: " px-10 py-4 rounded-lg border-4 border-white hover:border-accent-pink hover:bg-accent-pink-bg active:border-accent-pink active:bg-accent-pink-bg "
  }, "+ Add Article")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col "
  }, articlePosts.length ? articlePosts.sort((a, b) => a.points < b.points ? 1 : -1).map((item, index3) => {
    const rank = index3 + 1;
    return /* @__PURE__ */ React.createElement(TopicCard, {
      mute,
      author: item.authorOfPost,
      title: item.title,
      link: item.url,
      upvotes: item.points,
      key: item.id,
      rank,
      twitterHandle: item.authorTwitter ?? ""
    });
  }) : /* @__PURE__ */ React.createElement("span", null, "\u{1F614} No articles for this topic, yet!")));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/toolbar.tsx
var toolbar_exports = {};
__export(toolbar_exports, {
  default: () => Toolbar
});
function Toolbar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-24 h-56 mr-10  text-black ml-auto px-8 py- 12 right-28"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "fixed w-24 h-56 mr-10 border-2 border-solid border-stone-400 text-black ml-auto px-8 py- 12 right-28"
  }, "This is the toolbar"));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/index.tsx
var learn_exports2 = {};
__export(learn_exports2, {
  default: () => Learn
});
function Learn() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Here's some example topics"));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login3,
  links: () => links9
});
var import_react16 = require("@remix-run/react");
var links9 = () => [
  ...links5(),
  ...links4(),
  { rel: "stylesheet", href: styles_default }
];
function Login3() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement(import_react16.Outlet, null));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/login/index.tsx
var login_exports2 = {};
__export(login_exports2, {
  action: () => action,
  default: () => Login4
});
var import_react17 = require("react");
var import_react18 = require("@remix-run/react");
var action = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = validateUrl(form.get("redirectTo") || "/jokes");
  if (typeof loginType !== "string" || typeof username !== "string" || typeof password !== "string" || typeof redirectTo !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`
    });
  }
  const fields = { loginType, username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  switch (loginType) {
    case "login": {
      return badRequest({
        fields,
        formError: "Not implemented"
      });
    }
    case "register": {
      const userExists = await db.user.findFirst({
        where: { username }
      });
      if (userExists) {
        return badRequest({
          fields,
          formError: `User with username ${username} already exists`
        });
      }
      return badRequest({
        fields,
        formError: "Not implemented"
      });
    }
    default: {
      return badRequest({
        fields,
        formError: `Login type invalid`
      });
    }
  }
};
function Login4() {
  const [showPassword, setShowPassword] = (0, import_react17.useState)(false);
  const [error, setError] = (0, import_react17.useState)(false);
  const [searchParams] = (0, import_react18.useSearchParams)();
  function test(e) {
    console.log(e.target.value);
  }
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
    errorMessage: "invalid pass",
    onChange: test
  }), /* @__PURE__ */ React.createElement("button", {
    className: "flex mr-auto text-neutral-300 text-md hover:text-accent-pink cursor-pointer"
  }, "Forgot password?"), /* @__PURE__ */ React.createElement("button", {
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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/paths.tsx
var paths_exports = {};
__export(paths_exports, {
  default: () => index2,
  links: () => links10
});
var import_react19 = require("@remix-run/react");
var links10 = () => [
  ...links4(),
  { rel: "stylesheet", href: styles_default }
];
function index2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement("div", {
    className: "flex content-center px-6 lg:px-14 my-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement(Search, {
    size: "medium",
    handleForm: (e) => console.log(e)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-4"
  }, /* @__PURE__ */ React.createElement(PopularTopics2, null))), /* @__PURE__ */ React.createElement(import_react19.Outlet, null)));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/paths/index.tsx
var paths_exports2 = {};
__export(paths_exports2, {
  default: () => Courses
});
function Courses() {
  return /* @__PURE__ */ React.createElement("span", null, "This is the Paths section");
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
var assets_manifest_default = { "version": "d80653d7", "entry": { "module": "/build/entry.client-WKLSOQGX.js", "imports": ["/build/_shared/chunk-WQOFST22.js", "/build/_shared/chunk-4L2ADKRZ.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-5J7LHIN7.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/header": { "id": "routes/header", "parentId": "root", "path": "header", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/header-JAHET4FC.js", "imports": ["/build/_shared/chunk-MOSV43PN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-T2DPQEUB.js", "imports": ["/build/_shared/chunk-OLJMUS4D.js", "/build/_shared/chunk-5AYWNGIG.js", "/build/_shared/chunk-S46GVM6M.js", "/build/_shared/chunk-MOSV43PN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn": { "id": "routes/learn", "parentId": "root", "path": "learn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn-7IMIDI7Q.js", "imports": ["/build/_shared/chunk-YNDYY5BD.js", "/build/_shared/chunk-5AYWNGIG.js", "/build/_shared/chunk-S46GVM6M.js", "/build/_shared/chunk-MOSV43PN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId": { "id": "routes/learn/$topicId", "parentId": "routes/learn", "path": ":topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId-MX3FXRAP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/index": { "id": "routes/learn/index", "parentId": "routes/learn", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/index-M3ZMYIIR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/toolbar": { "id": "routes/learn/toolbar", "parentId": "routes/learn", "path": "toolbar", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/toolbar-4OF77FF3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-L5DQONXE.js", "imports": ["/build/_shared/chunk-5AYWNGIG.js", "/build/_shared/chunk-S46GVM6M.js", "/build/_shared/chunk-MOSV43PN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "routes/login", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-DVJZFM5V.js", "imports": ["/build/_shared/chunk-DX6OIDIL.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/main-content": { "id": "routes/main-content", "parentId": "root", "path": "main-content", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/main-content-IL4TCC6F.js", "imports": ["/build/_shared/chunk-S46GVM6M.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/motd": { "id": "routes/motd", "parentId": "root", "path": "motd", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/motd-BKY5Z4XS.js", "imports": ["/build/_shared/chunk-OLJMUS4D.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths": { "id": "routes/paths", "parentId": "root", "path": "paths", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/paths-EHDQL2V4.js", "imports": ["/build/_shared/chunk-YNDYY5BD.js", "/build/_shared/chunk-5AYWNGIG.js", "/build/_shared/chunk-S46GVM6M.js", "/build/_shared/chunk-MOSV43PN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths/index": { "id": "routes/paths/index", "parentId": "routes/paths", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/paths/index-WXEDQHAH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/popular-topics": { "id": "routes/popular-topics", "parentId": "root", "path": "popular-topics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/popular-topics-5YUTKRRP.js", "imports": ["/build/_shared/chunk-YNDYY5BD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup": { "id": "routes/signup", "parentId": "root", "path": "signup", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/signup-SQCDQIKL.js", "imports": ["/build/_shared/chunk-5AYWNGIG.js", "/build/_shared/chunk-S46GVM6M.js", "/build/_shared/chunk-MOSV43PN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup/index": { "id": "routes/signup/index", "parentId": "routes/signup", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/signup/index-Q6RQ26GO.js", "imports": ["/build/_shared/chunk-DX6OIDIL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D80653D7.js" };

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
  "routes/popular-topics": {
    id: "routes/popular-topics",
    parentId: "root",
    path: "popular-topics",
    index: void 0,
    caseSensitive: void 0,
    module: popular_topics_exports
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
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/signup/index": {
    id: "routes/signup/index",
    parentId: "routes/signup",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: signup_exports2
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
  "routes/learn/toolbar": {
    id: "routes/learn/toolbar",
    parentId: "routes/learn",
    path: "toolbar",
    index: void 0,
    caseSensitive: void 0,
    module: toolbar_exports
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
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "routes/login",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: login_exports2
  },
  "routes/paths": {
    id: "routes/paths",
    parentId: "root",
    path: "paths",
    index: void 0,
    caseSensitive: void 0,
    module: paths_exports
  },
  "routes/paths/index": {
    id: "routes/paths/index",
    parentId: "routes/paths",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: paths_exports2
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcG9wdWxhci10b3BpY3MudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9tYWluLWNvbnRlbnQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NlYXJjaC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2hlYWRlci50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3NpZ251cC50c3giLCAiLi4vYXBwL3JvdXRlcy9tYWluLWNvbnRlbnQudHN4IiwgIi4uL2FwcC9yb3V0ZXMvaGVhZGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvc2lnbnVwL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3JtYXR0ZWQtaW5wdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vYXBwL3JvdXRlcy9tb3RkLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4udHN4IiwgIi4uL2FwcC9yb3V0ZXMvcG9wdWxhci10b3BpY3MudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdG9waWMtY2FyZC50c3giLCAiLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vdG9vbGJhci50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbG9naW4udHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sb2dpbi9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3BhdGhzLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcGF0aHMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9tb3RkLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9leHByZXNzJztcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICAnL2J1aWxkJyxcbiAgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYy9idWlsZCcsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6ICcxeScgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycsIHsgbWF4QWdlOiAnMWgnIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oJ3RpbnknKSk7XG5cbmFwcC5hbGwoXG4gICcqJyxcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmFwcC5nZXQoJy9zZXJ2ZXJjb2RlJywgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdTRVJWRVIgQ09ERSBFWEVDVVRFRCEnKTtcbiAgcmVzLnNlbmQoJ0JPT00nKTtcbn0pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFx1RDgzRFx1REU4MCBsaXZlIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcG9wdWxhci10b3BpY3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9tYWluLWNvbnRlbnQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9oZWFkZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9zaWdudXAudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9zaWdudXAvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi90b29sYmFyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xvZ2luL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3BhdGhzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3BhdGhzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL21vdGQudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9wb3B1bGFyLXRvcGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9wdWxhci10b3BpY3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9wdWxhci10b3BpY3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL21haW4tY29udGVudFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWFpbi1jb250ZW50XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1haW4tY29udGVudFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaGVhZGVyXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9oZWFkZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaGVhZGVyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9zaWdudXBcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NpZ251cFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaWdudXBcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3NpZ251cC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2lnbnVwL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2lnbnVwXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxlYXJuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vJHRvcGljSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9sZWFyblwiLFxuICAgICAgcGF0aDogXCI6dG9waWNJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm4vdG9vbGJhclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm4vdG9vbGJhclwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiBcInRvb2xiYXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL3BhdGhzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXRoc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYXRoc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL3BhdGhzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wYXRocy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3BhdGhzXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL21vdGRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21vdGRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibW90ZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogJ3V0Zi04JyxcbiAgdGl0bGU6ICdTYXBpZW50aWEnLFxuICB2aWV3cG9ydDogJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgbmFtZTogJ1N2ZWx0ZScsIGlkOiAwIH0sXG4gIHsgbmFtZTogJ1RhaWx3aW5kJywgaWQ6IDEgfSxcbiAgeyBuYW1lOiAnUnVzdCcsIGlkOiAyIH0sXG4gIHsgbmFtZTogJ1B5dGhvbicsIGlkOiAzIH0sXG4gIHsgbmFtZTogJ3VzZUVmZmVjdCcsIGlkOiA0IH0sXG4gIHsgbmFtZTogJ1BhZ2luYXRpb24nLCBpZDogNSB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9wdWxhclRvcGljcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXItMTAgdy04MFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHNpemUgdGV4dC0yeGxcIj5Qb3B1bGFyIFRvcGljczwvc3Bhbj5cbiAgICAgIDw+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZVRpdGxlID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG15LTAuNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgLi8ke2xvd2VyQ2FzZVRpdGxlfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggY3Vyc29yLXBvaW50ZXIgcHgtNSBweS0yIHJvdW5kZWQteGwgaG92ZXI6Ymctc3RvbmUtOTAwIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtbGcgXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9tYWluLWNvbnRlbnQuY3NzJztcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICd+L2NvbXBvbmVudHMvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHRhbGtUb1RoZVNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NlcnZlcmNvZGUnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgLy8gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zZXJ2ZXItY29kZScpLnRoZW4oKHJlcykgPT4ge1xuICAgIC8vIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvcm0gPSAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldFswXS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgfTtcblxuICBjb25zdCBMZWZ0Q29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNSBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1mdWxsIHB0LXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctZnVsbCBteS02IFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIFwiPlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdGV4dFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgICcgMCAwIDgwcHggcmdiKDE5MiAyMTkgMjU1IC8gMzAlKSwgMCAwIDMycHggcmdiKDY1IDEyMCAyNTUgLyAxNSUpJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1bNHJlbV0gbGVhZGluZy1bNC41cmVtXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNoYXJlZCBrbm93bGVkZ2UgPGJyIC8+IGZyb20gdGhlIHRvcCBtaW5kcyBpbiB0aGUgcHJvZ3JhbW1pbmdcbiAgICAgICAgICAgICAgaW5kdXN0cnlcbiAgICAgICAgICAgICAgPGJyIC8+IC0gYWxsIGZvciBmcmVlIVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LTN4bCAgcHQtcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy03LzExIG15LTYgIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LWxhcmdlciBsZWFkaW5nLTdcIj5cbiAgICAgICAgICAgICAgV2hldGhlciBhIGJlZ2lubmVyLCBsZWFybmluZyB0byBjb2RlLCBvciBhIHNlYXNvbmVkIHZldGVyYW4uIFRha2VcbiAgICAgICAgICAgICAgYSB0b3VyIGJlbG93IHRvIGdldCBzdGFydGVkIVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1mdWxsIHBiLXB5LTEyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIHctZnVsbCBteS0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBmbGV4IGJnLWFjY2VudC1waW5rIHB5LTQgcHgtMTYgcm91bmRlZC1sZyB0ZXh0LWxnIGJvcmRlci00IG9wYWNpdHktOTAgYm9yZGVyLXRyYW5zcGFyZW50IGZvbnQtYm9sZCBmb2N1cy13aXRoaW46Ym9yZGVyLTQgZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSBmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgIGhvdmVyOmJvcmRlci00IGhvdmVyOmJvcmRlci13aGl0ZSBob3ZlcjpvcGFjaXR5LTEwMCAgIFwiPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXthc3luYyAoKSA9PiB0YWxrVG9UaGVTZXJ2ZXIoKX0+VGFrZSBhIFRvdXI8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvcGljQ29udGFpbmVyID0gKHsgdGV4dCB9OiBhbnkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgdG89e2AuL2xlYXJuLyR7dGV4dH1gfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBcbiAgICAgICAgcmVsYXRpdmUgbWItNCBtci00IGJsb2NrIGgtYXV0byB3LWF1dG8gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIHB4LTZcbiAgICAgICAgcHktMyB0cmFuc2l0aW9uIHRleHQtcHJpbWFyeSBiZy1zZWNvbmRhcnkgYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IFxuICAgICAgICBiZy1bIzcxNzE3MTU0XSBob3ZlcjpicmlnaHRuZXNzLTE1MCBob3Zlcjpib3JkZXItMiBob3Zlcjpib3JkZXItYWNjZW50LXBpbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDaG9vc2VBVG9waWMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBwLThcIj5PciBjaG9vc2UgYSB0b3BpYzwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi1mdWxsIC1tYi00IC1tci00IGZsZXggZmxleC13cmFwIGxnOmNvbC1zcGFuLTEwXCI+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJSZWFjdFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJSZW1peFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKYXZhU2NyaXB0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkNTU1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJOZXh0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlRlc3RpbmdcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiSmVzdFwiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJBQ0lEXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFJpZ2h0Q29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMi81IHB4LTE2XCI+XG4gICAgICAgIDxTZWFyY2ggaGFuZGxlRm9ybT17aGFuZGxlRm9ybX0gLz5cbiAgICAgICAgPENob29zZUFUb3BpYyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IHB5LTggcHgtNiBsZzpweC0xMiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgIDxMZWZ0Q29udGVudCAvPlxuICAgICAgPFJpZ2h0Q29udGVudCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50O1xuIiwgImltcG9ydCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmludGVyZmFjZSBJUHJvcHMge1xuICBoYW5kbGVGb3JtOiBGdW5jdGlvbjtcbiAgc2l6ZTogc3RyaW5nO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHsgaGFuZGxlRm9ybSwgc2l6ZSA9ICdsYXJnZScgfTogSVByb3BzKSB7XG4gIGNvbnN0IHNlYXJjaFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbGFiZWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIC8vIGhhbmRsZSB3aGF0IGhhcHBlbnMgb24ga2V5IHByZXNzXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHRydWUgJiYgZXZlbnQua2V5ID09PSAnaycpIHtcbiAgICAgIGlmIChzZWFyY2hSZWYuY3VycmVudCAhPT0gbnVsbCAmJiBsYWJlbFJlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHNlYXJjaFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIGxhYmVsUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG4gICAgLy8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVLZXlQcmVzc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BtYWluLXNlYXJjaCBmbGV4ICByZWxhdGl2ZWB9PlxuICAgICAgPGZvcm1cbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCAke1xuICAgICAgICAgIHNpemUgPT09ICdsYXJnZScgPyAndy1mdWxsJyA6IHNpemUgPT09ICdtZWRpdW0nID8gJ3ctMy80JyA6ICd3LTEvMidcbiAgICAgICAgfWB9XG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlRm9ybShlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17bGFiZWxSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleFxuICAgICAgICAgICAgIHNtOmZsZXggaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LWxlZnQgc3BhY2UteC0zIHB4LTQgc2hhZG93LXNtIHJvdW5kZWQtbGcgdGV4dC1zbGF0ZS04MDAgZGFyazpyaW5nLTAgZGFyazp0ZXh0LXNsYXRlLTgwMCBkYXJrOmhpZ2hsaWdodC13aGl0ZS81ICBcbiAgICAgICAgICAgICAgei01MCBib3JkZXItNCBib3JkZXItd2hpdGUgYmctd2hpdGUgZm9jdXMtd2l0aGluOmJvcmRlci00IGZvY3VzLXdpdGhpbjpib3JkZXItc29saWQgZm9jdXMtd2l0aGluOmJvcmRlci1hY2NlbnQtZ3JlZW5cbiAgICAgICAgICAgICAgJHtzaXplID09PSAnbGFyZ2UnID8gJ2gtMTYnIDogc2l6ZSA9PT0gJ21lZGl1bScgPyAnaC0xMicgOiAnaC04J31cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHotMTAwYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+XHVEODNEXHVERDBEPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtzZWFyY2hSZWZ9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhIHRvcGljXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6ICdub25lJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHctZnVsbCBiZy10cmFuc3BhcmVudCBib3JkZXI6W25vbmVdIGZvY3VzOltvdXRsaW5lOiAwLCBib3JkZXI6IG5vbmVdIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGtiZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWJiclxuICAgICAgICAgICAgICB0aXRsZT1cIkNvbW1hbmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby11bmRlcmxpbmUgdGV4dC1zbGF0ZS0zMDAgZGFyazp0ZXh0LXNsYXRlLTUwMFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB0ZXh0LXhsXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFx1MjMxOFxuICAgICAgICAgICAgPC9hYmJyPlxuICAgICAgICAgICAgS1xuICAgICAgICAgIDwva2JkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL2hlYWRlci5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlIH1dO1xufTtcblxuY29uc3QgTG9nbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS14LTEgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgIDxMaW5rIHRvPXsnLyd9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgIFwiPlNhcGllbnRpYTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExhbmd1YWdlU2VsZWN0b3IgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgbWwtMiBzbTptbC00IFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTEuNSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwbGFjZS1pdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUvNjAgIHJvdW5kZWQtbWQgZHJvcC1zaGFkb3ctbWQgIGZvY3VzLXdpdGhpbjo6Ymctc2xhdGUtNTAvNSBmb2N1cy13aXRoaW46OmJvcmRlci13aGl0ZSBob3ZlcjpiZy1zbGF0ZS01MC81IGhvdmVyOmJvcmRlci13aGl0ZSBcIj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItbGFuZ3VhZ2UgaC02IHctNiBzdHJva2Utd2hpdGVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTQgNWg3XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTkgM3YyYzAgNC40MTggLTIuMjM5IDggLTUgOFwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk01IDljLS4wMDMgMi4xNDQgMi45NTIgMy45MDggNi43IDRcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMjBsNCAtOWw0IDlcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTkuMSAxOGgtNi4yXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzcGFuPkVuZ2xpc2g8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdmlnYXRpb25Mb2dpbkVsZW1lbnQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgbWwtMiBzbTptbC00IFwiPlxuICAgICAgPGEgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTYgcHktMiAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlLzYwICByb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kICBmb2N1cy13aXRoaW46OmJnLXNsYXRlLTUwLzUgZm9jdXMtd2l0aGluOjpib3JkZXItd2hpdGUgaG92ZXI6Ymctc2xhdGUtNTAvNSBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgICAgey8qIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWxhbmd1YWdlIGgtNiB3LTYgc3Ryb2tlLXdoaXRlXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICAgIHN0cm9rZT1cIiNmZmZmZmZcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xNCA4di0yYTIgMiAwIDAgMCAtMiAtMmgtN2EyIDIgMCAwIDAgLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDdhMiAyIDAgMCAwIDIgLTJ2LTJcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMTJoLTEzbDMgLTNtMCA2bC0zIC0zXCIgLz5cbiAgICAgICAgPC9zdmc+ICovfVxuICAgICAgICAgIDxzcGFuPkxvZ2luPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgTmF2RWxlbWVudFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59O1xuXG5jb25zdCBHaXRodWIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgbXgtMiBzbTpteC00IG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZWlsbHlqb2Rvbm5lbGwvc2FwaWVudGlhXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvY3VzLXdpdGhpbjpvcGFjaXR5LTEwMCBvcGFjaXR5LTgwXCJcbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPXsnMzBweCd9XG4gICAgICAgICAgaGVpZ2h0PXsnMzBweCd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGZpbGwtcHJpbWFyeS10ZXh0IFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk02NCA1LjEwM2MtMzMuMzQ3IDAtNjAuMzg4IDI3LjAzNS02MC4zODggNjAuMzg4IDAgMjYuNjgyIDE3LjMwMyA0OS4zMTcgNDEuMjk3IDU3LjMwMyAzLjAxNy41NiA0LjEyNS0xLjMxIDQuMTI1LTIuOTA1IDAtMS40NC0uMDU2LTYuMTk3LS4wODItMTEuMjQzLTE2LjggMy42NTMtMjAuMzQ1LTcuMTI1LTIwLjM0NS03LjEyNS0yLjc0Ny02Ljk4LTYuNzA1LTguODM2LTYuNzA1LTguODM2LTUuNDgtMy43NDguNDEzLTMuNjcuNDEzLTMuNjcgNi4wNjMuNDI1IDkuMjU3IDYuMjIzIDkuMjU3IDYuMjIzIDUuMzg2IDkuMjMgMTQuMTI3IDYuNTYyIDE3LjU3MyA1LjAyLjU0Mi0zLjkwMyAyLjEwNy02LjU2OCAzLjgzNC04LjA3Ni0xMy40MTMtMS41MjUtMjcuNTE0LTYuNzA0LTI3LjUxNC0yOS44NDMgMC02LjU5MyAyLjM2LTExLjk4IDYuMjIzLTE2LjIxLS42MjgtMS41Mi0yLjY5NS03LjY2Mi41ODQtMTUuOTggMCAwIDUuMDctMS42MjMgMTYuNjEgNi4xOUM1My43IDM1IDU4Ljg2NyAzNC4zMjcgNjQgMzQuMzA0YzUuMTMuMDIzIDEwLjMuNjk0IDE1LjEyNyAyLjAzMyAxMS41MjYtNy44MTMgMTYuNTktNi4xOSAxNi41OS02LjE5IDMuMjg3IDguMzE3IDEuMjIgMTQuNDYuNTkzIDE1Ljk4IDMuODcyIDQuMjMgNi4yMTUgOS42MTcgNi4yMTUgMTYuMjEgMCAyMy4xOTQtMTQuMTI3IDI4LjMtMjcuNTc0IDI5Ljc5NiAyLjE2NyAxLjg3NCA0LjA5NyA1LjU1IDQuMDk3IDExLjE4MyAwIDguMDgtLjA3IDE0LjU4My0uMDcgMTYuNTcyIDAgMS42MDcgMS4wODggMy40OSA0LjE0OCAyLjg5NyAyMy45OC03Ljk5NCA0MS4yNjMtMzAuNjIyIDQxLjI2My01Ny4yOTRDMTI0LjM4OCAzMi4xNCA5Ny4zNSA1LjEwNCA2NCA1LjEwNHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjYuNDg0IDkxLjgwNmMtLjEzMy4zLS42MDUuMzktMS4wMzUuMTg1LS40NC0uMTk2LS42ODUtLjYwNS0uNTQzLS45MDYuMTMtLjMxLjYwMy0uMzk1IDEuMDQtLjE4OC40NC4xOTcuNjkuNjEuNTM3Ljkxem0yLjQ0NiAyLjcyOWMtLjI4Ny4yNjctLjg1LjE0My0xLjIzMi0uMjgtLjM5Ni0uNDItLjQ3LS45ODMtLjE3Ny0xLjI1NC4yOTgtLjI2Ni44NDQtLjE0IDEuMjQuMjguMzk0LjQyNi40NzIuOTg0LjE3IDEuMjU1ek0zMS4zMTIgOTguMDEyYy0uMzcuMjU4LS45NzYuMDE3LTEuMzUtLjUyLS4zNy0uNTM4LS4zNy0xLjE4My4wMS0xLjQ0LjM3My0uMjU4Ljk3LS4wMjUgMS4zNS41MDcuMzY4LjU0NS4zNjggMS4xOS0uMDEgMS40NTJ6bTMuMjYxIDMuMzYxYy0uMzMuMzY1LTEuMDM2LjI2Ny0xLjU1Mi0uMjMtLjUyNy0uNDg3LS42NzQtMS4xOC0uMzQzLTEuNTQ0LjMzNi0uMzY2IDEuMDQ1LS4yNjQgMS41NjQuMjMuNTI3LjQ4Ni42ODYgMS4xOC4zMzMgMS41NDN6bTQuNSAxLjk1MWMtLjE0Ny40NzMtLjgyNS42ODgtMS41MS40ODYtLjY4My0uMjA3LTEuMTMtLjc2LS45OS0xLjIzOC4xNC0uNDc3LjgyMy0uNyAxLjUxMi0uNDg1LjY4My4yMDYgMS4xMy43NTYuOTg4IDEuMjM3em00Ljk0My4zNjFjLjAxNy40OTgtLjU2My45MS0xLjI4LjkyLS43MjMuMDE3LTEuMzA4LS4zODctMS4zMTUtLjg3NyAwLS41MDMuNTY4LS45MSAxLjI5LS45MjQuNzE3LS4wMTMgMS4zMDYuMzg3IDEuMzA2Ljg4em00LjU5OC0uNzgyYy4wODYuNDg1LS40MTMuOTg0LTEuMTI2IDEuMTE3LS43LjEzLTEuMzUtLjE3Mi0xLjQ0LS42NTMtLjA4Ni0uNDk4LjQyMi0uOTk3IDEuMTIyLTEuMTI2LjcxNC0uMTIzIDEuMzU0LjE3IDEuNDQ0LjY2M3ptMCAwXCI+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiVG9waWNzXCIgbG9jYXRpb249XCIvbGVhcm5cIiAvPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJQYXRoc1wiIGxvY2F0aW9uPVwiL3BhdGhzXCIgLz5cbiAgICAgIHsvKiA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIkxvZ2luXCIgbG9jYXRpb249XCIvbG9naW5cIiAvPiAqL31cbiAgICAgIDxHaXRodWIgLz5cbiAgICAgIHsvKiA8TGFuZ3VhZ2VTZWxlY3RvciAvPiAqL31cbiAgICAgIDxOYXZpZ2F0aW9uTG9naW5FbGVtZW50IC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uRWxlbWVudCA9ICh7IG5hbWUsIGxvY2F0aW9uIH06IE5hdkVsZW1lbnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBjbGFzc05hbWU9XCIgbXgtMiBzbTpteC00IG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCJcbiAgICAgIGhyZWY9e2xvY2F0aW9ufVxuICAgID5cbiAgICAgIHtuYW1lfVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJweC02IGxnOnB4LTEyIHB5LTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgaGVhZGVyICBiZy1ibGFja1wiPlxuICAgICAgPExvZ28gLz5cblxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBNb3RkIGZyb20gJy4vbW90ZCc7XG5pbXBvcnQgeyBsaW5rcyBhcyBtYWluQ29udGVudExpbmtzIH0gZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xuaW1wb3J0IHsgSGVhZGVyLCBsaW5rcyBhcyBoZWFkZXJMaW5rcyB9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICAuLi5oZWFkZXJMaW5rcygpLFxuICAuLi5tYWluQ29udGVudExpbmtzKCksXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL21haW4tY29udGVudC5jc3MnO1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlIH1dO1xufTtcbmV4cG9ydCBjb25zdCBNYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgdGFsa1RvVGhlU2VydmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc2VydmVyY29kZScpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAvLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NlcnZlci1jb2RlJykudGhlbigocmVzKSA9PiB7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9ybSA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0WzBdLnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICB9O1xuXG4gIGNvbnN0IExlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy81IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcHQtcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTYgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgXCI+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OlxuICAgICAgICAgICAgICAgICAgJyAwIDAgODBweCByZ2IoMTkyIDIxOSAyNTUgLyAzMCUpLCAwIDAgMzJweCByZ2IoNjUgMTIwIDI1NSAvIDE1JSknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LVs0cmVtXSBsZWFkaW5nLVs0LjVyZW1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hhcmVkIGtub3dsZWRnZSA8YnIgLz4gZnJvbSB0aGUgdG9wIG1pbmRzIGluIHRoZSBwcm9ncmFtbWluZ1xuICAgICAgICAgICAgICBpbmR1c3RyeVxuICAgICAgICAgICAgICA8YnIgLz4gLSBhbGwgZm9yIGZyZWUhXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtM3hsICBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LTcvMTEgbXktNiAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtbGFyZ2VyIGxlYWRpbmctN1wiPlxuICAgICAgICAgICAgICBXaGV0aGVyIGEgYmVnaW5uZXIsIGxlYXJuaW5nIHRvIGNvZGUsIG9yIGEgc2Vhc29uZWQgdmV0ZXJhbi4gVGFrZVxuICAgICAgICAgICAgICBhIHRvdXIgYmVsb3cgdG8gZ2V0IHN0YXJ0ZWQhXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcGItcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGZsZXggYmctYWNjZW50LXBpbmsgcHktNCBweC0xNiByb3VuZGVkLWxnIHRleHQtbGcgYm9yZGVyLTQgb3BhY2l0eS05MCBib3JkZXItdHJhbnNwYXJlbnQgZm9udC1ib2xkIGZvY3VzLXdpdGhpbjpib3JkZXItNCBmb2N1cy13aXRoaW46Ym9yZGVyLXdoaXRlIGZvY3VzLXdpdGhpbjpvcGFjaXR5LTEwMCAgaG92ZXI6Ym9yZGVyLTQgaG92ZXI6Ym9yZGVyLXdoaXRlIGhvdmVyOm9wYWNpdHktMTAwICAgXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2FzeW5jICgpID0+IHRhbGtUb1RoZVNlcnZlcigpfT5UYWtlIGEgVG91cjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDb250YWluZXIgPSAoeyB0ZXh0IH06IGFueSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17YC4vbGVhcm4vJHt0ZXh0fWB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIFxuICAgICAgICByZWxhdGl2ZSBtYi00IG1yLTQgYmxvY2sgaC1hdXRvIHctYXV0byBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgcHgtNlxuICAgICAgICBweS0zIHRyYW5zaXRpb24gdGV4dC1wcmltYXJ5IGJnLXNlY29uZGFyeSBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgXG4gICAgICAgIGJnLVsjNzE3MTcxNTRdIGhvdmVyOmJyaWdodG5lc3MtMTUwIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1hY2NlbnQtcGlua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IENob29zZUFUb3BpYyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHAtOFwiPk9yIGNob29zZSBhIHRvcGljPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgLW1iLTQgLW1yLTQgZmxleCBmbGV4LXdyYXAgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlbWl4XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQ1NTXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIk5leHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiVGVzdGluZ1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKZXN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkFDSURcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0yLzUgcHgtMTZcIj5cbiAgICAgICAgPFNlYXJjaCBoYW5kbGVGb3JtPXtoYW5kbGVGb3JtfSAvPlxuICAgICAgICA8Q2hvb3NlQVRvcGljIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgcHktOCBweC02IGxnOnB4LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPExlZnRDb250ZW50IC8+XG4gICAgICA8UmlnaHRDb250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iLCAiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5cbmNvbnN0IExvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgc3BhY2UteC0xIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICA8TGluayB0bz17Jy8nfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkICBcIj5TYXBpZW50aWE8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMYW5ndWFnZVNlbGVjdG9yID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIG1sLTIgc206bWwtNCBcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0xLjUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlLzYwICByb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kICBmb2N1cy13aXRoaW46OmJnLXNsYXRlLTUwLzUgZm9jdXMtd2l0aGluOjpib3JkZXItd2hpdGUgaG92ZXI6Ymctc2xhdGUtNTAvNSBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWxhbmd1YWdlIGgtNiB3LTYgc3Ryb2tlLXdoaXRlXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk00IDVoN1wiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk05IDN2MmMwIDQuNDE4IC0yLjIzOSA4IC01IDhcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNSA5Yy0uMDAzIDIuMTQ0IDIuOTUyIDMuOTA4IDYuNyA0XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEyIDIwbDQgLTlsNCA5XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE5LjEgMThoLTYuMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3Bhbj5FbmdsaXNoPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uTG9naW5FbGVtZW50ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIG1sLTIgc206bWwtNCBcIj5cbiAgICAgIDxhIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC02IHB5LTIgIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICAgIHsvKiA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1sYW5ndWFnZSBoLTYgdy02IHN0cm9rZS13aGl0ZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgICBzdHJva2U9XCIjZmZmZmZmXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTQgOHYtMmEyIDIgMCAwIDAgLTIgLTJoLTdhMiAyIDAgMCAwIC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg3YTIgMiAwIDAgMCAyIC0ydi0yXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTIwIDEyaC0xM2wzIC0zbTAgNmwtMyAtM1wiIC8+XG4gICAgICAgIDwvc3ZnPiAqL31cbiAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIE5hdkVsZW1lbnRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufTtcblxuY29uc3QgR2l0aHViID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIG14LTIgc206bXgtNCBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVpbGx5am9kb25uZWxsL3NhcGllbnRpYVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgb3BhY2l0eS04MFwiXG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD17JzMwcHgnfVxuICAgICAgICAgIGhlaWdodD17JzMwcHgnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBmaWxsLXByaW1hcnktdGV4dCBcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNNjQgNS4xMDNjLTMzLjM0NyAwLTYwLjM4OCAyNy4wMzUtNjAuMzg4IDYwLjM4OCAwIDI2LjY4MiAxNy4zMDMgNDkuMzE3IDQxLjI5NyA1Ny4zMDMgMy4wMTcuNTYgNC4xMjUtMS4zMSA0LjEyNS0yLjkwNSAwLTEuNDQtLjA1Ni02LjE5Ny0uMDgyLTExLjI0My0xNi44IDMuNjUzLTIwLjM0NS03LjEyNS0yMC4zNDUtNy4xMjUtMi43NDctNi45OC02LjcwNS04LjgzNi02LjcwNS04LjgzNi01LjQ4LTMuNzQ4LjQxMy0zLjY3LjQxMy0zLjY3IDYuMDYzLjQyNSA5LjI1NyA2LjIyMyA5LjI1NyA2LjIyMyA1LjM4NiA5LjIzIDE0LjEyNyA2LjU2MiAxNy41NzMgNS4wMi41NDItMy45MDMgMi4xMDctNi41NjggMy44MzQtOC4wNzYtMTMuNDEzLTEuNTI1LTI3LjUxNC02LjcwNC0yNy41MTQtMjkuODQzIDAtNi41OTMgMi4zNi0xMS45OCA2LjIyMy0xNi4yMS0uNjI4LTEuNTItMi42OTUtNy42NjIuNTg0LTE1Ljk4IDAgMCA1LjA3LTEuNjIzIDE2LjYxIDYuMTlDNTMuNyAzNSA1OC44NjcgMzQuMzI3IDY0IDM0LjMwNGM1LjEzLjAyMyAxMC4zLjY5NCAxNS4xMjcgMi4wMzMgMTEuNTI2LTcuODEzIDE2LjU5LTYuMTkgMTYuNTktNi4xOSAzLjI4NyA4LjMxNyAxLjIyIDE0LjQ2LjU5MyAxNS45OCAzLjg3MiA0LjIzIDYuMjE1IDkuNjE3IDYuMjE1IDE2LjIxIDAgMjMuMTk0LTE0LjEyNyAyOC4zLTI3LjU3NCAyOS43OTYgMi4xNjcgMS44NzQgNC4wOTcgNS41NSA0LjA5NyAxMS4xODMgMCA4LjA4LS4wNyAxNC41ODMtLjA3IDE2LjU3MiAwIDEuNjA3IDEuMDg4IDMuNDkgNC4xNDggMi44OTcgMjMuOTgtNy45OTQgNDEuMjYzLTMwLjYyMiA0MS4yNjMtNTcuMjk0QzEyNC4zODggMzIuMTQgOTcuMzUgNS4xMDQgNjQgNS4xMDR6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI2LjQ4NCA5MS44MDZjLS4xMzMuMy0uNjA1LjM5LTEuMDM1LjE4NS0uNDQtLjE5Ni0uNjg1LS42MDUtLjU0My0uOTA2LjEzLS4zMS42MDMtLjM5NSAxLjA0LS4xODguNDQuMTk3LjY5LjYxLjUzNy45MXptMi40NDYgMi43MjljLS4yODcuMjY3LS44NS4xNDMtMS4yMzItLjI4LS4zOTYtLjQyLS40Ny0uOTgzLS4xNzctMS4yNTQuMjk4LS4yNjYuODQ0LS4xNCAxLjI0LjI4LjM5NC40MjYuNDcyLjk4NC4xNyAxLjI1NXpNMzEuMzEyIDk4LjAxMmMtLjM3LjI1OC0uOTc2LjAxNy0xLjM1LS41Mi0uMzctLjUzOC0uMzctMS4xODMuMDEtMS40NC4zNzMtLjI1OC45Ny0uMDI1IDEuMzUuNTA3LjM2OC41NDUuMzY4IDEuMTktLjAxIDEuNDUyem0zLjI2MSAzLjM2MWMtLjMzLjM2NS0xLjAzNi4yNjctMS41NTItLjIzLS41MjctLjQ4Ny0uNjc0LTEuMTgtLjM0My0xLjU0NC4zMzYtLjM2NiAxLjA0NS0uMjY0IDEuNTY0LjIzLjUyNy40ODYuNjg2IDEuMTguMzMzIDEuNTQzem00LjUgMS45NTFjLS4xNDcuNDczLS44MjUuNjg4LTEuNTEuNDg2LS42ODMtLjIwNy0xLjEzLS43Ni0uOTktMS4yMzguMTQtLjQ3Ny44MjMtLjcgMS41MTItLjQ4NS42ODMuMjA2IDEuMTMuNzU2Ljk4OCAxLjIzN3ptNC45NDMuMzYxYy4wMTcuNDk4LS41NjMuOTEtMS4yOC45Mi0uNzIzLjAxNy0xLjMwOC0uMzg3LTEuMzE1LS44NzcgMC0uNTAzLjU2OC0uOTEgMS4yOS0uOTI0LjcxNy0uMDEzIDEuMzA2LjM4NyAxLjMwNi44OHptNC41OTgtLjc4MmMuMDg2LjQ4NS0uNDEzLjk4NC0xLjEyNiAxLjExNy0uNy4xMy0xLjM1LS4xNzItMS40NC0uNjUzLS4wODYtLjQ5OC40MjItLjk5NyAxLjEyMi0xLjEyNi43MTQtLjEyMyAxLjM1NC4xNyAxLjQ0NC42NjN6bTAgMFwiPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIlRvcGljc1wiIGxvY2F0aW9uPVwiL2xlYXJuXCIgLz5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiUGF0aHNcIiBsb2NhdGlvbj1cIi9wYXRoc1wiIC8+XG4gICAgICB7LyogPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJMb2dpblwiIGxvY2F0aW9uPVwiL2xvZ2luXCIgLz4gKi99XG4gICAgICA8R2l0aHViIC8+XG4gICAgICB7LyogPExhbmd1YWdlU2VsZWN0b3IgLz4gKi99XG4gICAgICA8TmF2aWdhdGlvbkxvZ2luRWxlbWVudCAvPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbkVsZW1lbnQgPSAoeyBuYW1lLCBsb2NhdGlvbiB9OiBOYXZFbGVtZW50UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgY2xhc3NOYW1lPVwiIG14LTIgc206bXgtNCBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGZvbnQtc2VtaWJvbGQgZm9jdXMtd2l0aGluOnRleHQtYWNjZW50LXBpbmsgaG92ZXI6dGV4dC1hY2NlbnQtcGlua1wiXG4gICAgICBocmVmPXtsb2NhdGlvbn1cbiAgICA+XG4gICAgICB7bmFtZX1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicHgtNiBsZzpweC0xMiBweS02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGhlYWRlciAgYmctYmxhY2tcIj5cbiAgICAgIDxMb2dvIC8+XG5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICd+L2NvbXBvbmVudHMvZm9ybWF0dGVkLWlucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIG0tMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHgtMTIgXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi02XCI+U2lnbiBVcDwvc3Bhbj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbmEgLi4uIERhcnRoIFZhZGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmFkZXJAZGVhdGhzdGFyLnNpdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFuU2hvdEZpcnN0XCJcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlPXt0cnVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBhY2NlbnQtYWNjZW50LXBpbmtcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWdyZWVcIlxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNCB0ZXh0LWxnXCIgaHRtbEZvcj1cImFncmVlXCI+XG4gICAgICAgICAgICAgIEkgYWdyZWUgdG8gdGhleycgJ31cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1hY2NlbnQtcGlua1wiPlRlcm1zPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNyBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHB5LTQgcHgtOCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IGJnLWFjY2VudC1waW5rIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIFwiPkNyZWF0ZSBBY2NvdW50PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtOCB3LWZ1bGwgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XG4gICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1hY2NlbnQtcGluayBjdXJzb3ItcG9pbnRlclwiPkxvZ2luPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRm9ybUV2ZW50SGFuZGxlciwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmludGVyZmFjZSBJUHJvcHMge1xuICBodG1sRm9yOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIGF1dG9Db21wbGV0ZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgdG9nZ2xlU2hvd0hpZGU/OiBib29sZWFuO1xuICBoYXNFcnJvcj86IGJvb2xlYW47XG4gIGVycm9yTWVzc2FnZT86IHN0cmluZztcbiAgb25DaGFuZ2U/OiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1hdHRlZElucHV0KHtcbiAgaHRtbEZvcixcbiAgbGFiZWwsXG4gIGlkLFxuICBhdXRvQ29tcGxldGUsXG4gIG5hbWUsXG4gIHR5cGUsXG4gIHBsYWNlaG9sZGVyLFxuICB0b2dnbGVTaG93SGlkZSA9IGZhbHNlLFxuICBoYXNFcnJvciA9IGZhbHNlLFxuICBlcnJvck1lc3NhZ2UgPSAnSW52YWxpZCBFbWFpbCcsXG4gIG9uQ2hhbmdlLFxufTogSVByb3BzKSB7XG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoaGFzRXJyb3IpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctODAgbWItNiAgZmxleC1jb2xcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtodG1sRm9yfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LXhsIG1iLTFcIlxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHctZnVsbCBib3JkZXItMiBib3JkZXItc29saWQgICR7XG4gICAgICAgICAgZXJyb3IgPyAnYm9yZGVyLXJlZC00MDAnIDogJ2JvcmRlci1ncmF5LTYwMCdcbiAgICAgICAgfSBmb2N1cy13aXRoaW46Ym9yZGVyLXdoaXRlICBiZy1ibGFjayByb3VuZGVkLWxnIGhvdmVyOnNoYWRvdy0yeGwgcmVsYXRpdmVgfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgdHlwZT17XG4gICAgICAgICAgICB0b2dnbGVTaG93SGlkZSAmJiBzaG93UGFzc3dvcmRcbiAgICAgICAgICAgICAgPyAndGV4dCdcbiAgICAgICAgICAgICAgOiB0b2dnbGVTaG93SGlkZSAmJiAhc2hvd1Bhc3N3b3JkXG4gICAgICAgICAgICAgID8gJ3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICA6IHR5cGVcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHB4LTIgcHktNCB0ZXh0LXhsICBiZy1ibGFjayByb3VuZGVkLWxnIGhvdmVyOnNoYWRvdy0yeGwgcmVsYXRpdmUgIFwiXG4gICAgICAgIC8+XG4gICAgICAgIHt0b2dnbGVTaG93SGlkZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAgaW5zZXQteS0wIHJpZ2h0LTAgcHItMyBmbGV4IGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHAtMC41IHctOCBoLTggdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgICR7XG4gICAgICAgICAgICAgICAgc2hvd1Bhc3N3b3JkID8gJ2JnLXdoaXRlJyA6ICdiZy10cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgfSByb3VuZGVkLWZ1bGwgYH1cbiAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPXtzaG93UGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQYXNzd29yZCgocHJldikgPT4gIXByZXYpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gJ1x1RDgzRFx1REU0OScgOiAnXHVEODNEXHVERTQ4J31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IG15LTIgdGV4dC1tZCB0ZXh0LXJlZC00MDBcIj57ZXJyb3JNZXNzYWdlfTwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IEhlYWRlciwgbGlua3MgYXMgaGVhZGVyTGlua3MgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgTW90ZCBmcm9tICcuL21vdGQnO1xuaW1wb3J0IHsgTWFpbkNvbnRlbnQsIGxpbmtzIGFzIG1haW5Db250ZW50TGlua3MgfSBmcm9tICcuL21haW4tY29udGVudCc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICAuLi5oZWFkZXJMaW5rcygpLFxuICAuLi5tYWluQ29udGVudExpbmtzKCksXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS40JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE1vdGQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE91dGxldCAvPlxuICAgICAgPE1haW5Db250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGNvbnN0IE1vdGQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZGFyay1tb2RlLWJnIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcHgtMjAgIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWNjZW50LXBpbmsgdy1mdWxsIHRleHQtY2VudGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBXZSBzdGFuZCB3aXRoIFVrcmFpbmUgXHVEODNDXHVEREZBXHVEODNDXHVEREU2XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmF6b21mb3J1a3JhaW5lLm9yZy9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC0yIGN1cnNvci1wb2ludGVyIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnktdGV4dCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRG9uYXRlIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW90ZDtcbiIsICJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBsaW5rcyBhcyBtYWluQ29udGVudExpbmtzIH0gZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xuaW1wb3J0IFBvcHVsYXJUb3BpY3MgZnJvbSAnLi9wb3B1bGFyLXRvcGljcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICAuLi5tYWluQ29udGVudExpbmtzKCksXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciBweC02IGxnOnB4LTE0IG15LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPFNlYXJjaCBzaXplPVwibWVkaXVtXCIgaGFuZGxlRm9ybT17KGU6IGFueSkgPT4gY29uc29sZS5sb2coZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cbiAgICAgICAgICAgIDxQb3B1bGFyVG9waWNzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00XCI+XG4gICAgICAgICAgPFBvcHVsYXJUb3BpY3MgLz5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBkYXRhID0gW1xuICB7IG5hbWU6ICdTdmVsdGUnLCBpZDogMCB9LFxuICB7IG5hbWU6ICdUYWlsd2luZCcsIGlkOiAxIH0sXG4gIHsgbmFtZTogJ1J1c3QnLCBpZDogMiB9LFxuICB7IG5hbWU6ICdQeXRob24nLCBpZDogMyB9LFxuICB7IG5hbWU6ICd1c2VFZmZlY3QnLCBpZDogNCB9LFxuICB7IG5hbWU6ICdQYWdpbmF0aW9uJywgaWQ6IDUgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcHVsYXJUb3BpY3MoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1yLTEwIHctODBcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBzaXplIHRleHQtMnhsXCI+UG9wdWxhciBUb3BpY3M8L3NwYW4+XG4gICAgICA8PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlckNhc2VUaXRsZSA9IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBteS0wLjVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGluayB0bz17YC4vJHtsb3dlckNhc2VUaXRsZX1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGN1cnNvci1wb2ludGVyIHB4LTUgcHktMiByb3VuZGVkLXhsIGhvdmVyOmJnLXN0b25lLTkwMCBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWxnIFwiPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvcGljQ2FyZCwgeyBiYXNlQXJ0aWNsZSB9IGZyb20gJ34vY29tcG9uZW50cy90b3BpYy1jYXJkJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuXG50eXBlIGJvdGhEYXRhID0ge1xuICAvLyBvZiB0eXBlIExvYWRlckRhdGFcbiAgZGF0YTogTG9hZGVyRGF0YTtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBhcnRpY2xlUG9zdHM6IEFycmF5PHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGF1dGhvck9mUG9zdDogc3RyaW5nO1xuICAgIGF1dGhvclR3aXR0ZXI6IHN0cmluZyB8IG51bGw7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBwb2ludHM6IG51bWJlcjtcbiAgICB0b3BpYzogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdDogRGF0ZTtcbiAgfT47XG59O1xuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBuYW1lID0gcGFyYW1zLnRvcGljSWQ7XG5cbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICBhcnRpY2xlUG9zdHM6IGF3YWl0IGRiLnBvc3QuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdG9waWM6IG5hbWUsXG4gICAgICB9LFxuICAgIH0pLFxuICB9O1xuICByZXR1cm4ganNvbih7IGRhdGEsIG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2tlUm91dGUoKSB7XG4gIGNvbnN0IFttdXRlLCBzZXRNdXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBkYXRhLCBuYW1lIH0gPSB1c2VMb2FkZXJEYXRhPGJvdGhEYXRhPigpO1xuXG4gIGNvbnN0IHsgYXJ0aWNsZVBvc3RzIH0gPSBkYXRhO1xuICBjb25zb2xlLmxvZyhhcnRpY2xlUG9zdHMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbXV0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlJyk7XG4gICAgY29uc3QgaXNNdXRlZCA9IG11dGUgIT09IG51bGwgJiYgSlNPTi5wYXJzZShtdXRlKTtcbiAgICBzZXRNdXRlKGlzTXV0ZWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlQXVkaW8gPSAoKSA9PiB7XG4gICAgbXV0ZVxuICAgICAgPyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXV0ZScsICdmYWxzZScpXG4gICAgICA6IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXRlJywgJ3RydWUnKTtcblxuICAgIHNldE11dGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgbWwtMjAgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNnhsIG1iLTMgY2FwaXRhbGl6ZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRTaGFkb3c6XG4gICAgICAgICAgICAgICdyZ2JhKDE5MiwgMjE5LCAyNTUsIDAuMykgMHB4IDBweCA4MHB4LCByZ2JhKDY1LCAxMjAsIDI1NSwgMC4xNSkgMHB4IDBweCAzMnB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgey8qIFRPRE86IE1PVkUgVEhFIEFVRElPIFRPR0dMRSBUTyBUSEUgTkFWICovfVxuICAgICAgICB7LyogPHNwYW4gb25DbGljaz17dG9nZ2xlQXVkaW99IGNsYXNzTmFtZT1cIm1sLTEyIHRleHQtMnhsIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAge211dGUgPyAnXHVEODNEXHVERDA3JyA6ICdcdUQ4M0RcdUREMDgnfVxuICAgICAgICA8L3NwYW4+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC14bCBtdC04XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIHB4LTEwIHB5LTQgcm91bmRlZC1sZyBib3JkZXItNCBib3JkZXItd2hpdGUgaG92ZXI6Ym9yZGVyLWFjY2VudC1waW5rIGhvdmVyOmJnLWFjY2VudC1waW5rLWJnIGFjdGl2ZTpib3JkZXItYWNjZW50LXBpbmsgYWN0aXZlOmJnLWFjY2VudC1waW5rLWJnIFwiPlxuICAgICAgICAgICsgQWRkIEFydGljbGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIFwiPlxuICAgICAgICB7YXJ0aWNsZVBvc3RzLmxlbmd0aCA/IChcbiAgICAgICAgICBhcnRpY2xlUG9zdHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS5wb2ludHMgPCBiLnBvaW50cyA/IDEgOiAtMSkpXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCByYW5rID0gaW5kZXggKyAxO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRvcGljQ2FyZFxuICAgICAgICAgICAgICAgICAgbXV0ZT17bXV0ZX1cbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hdXRob3JPZlBvc3R9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGxpbms9e2l0ZW0udXJsfVxuICAgICAgICAgICAgICAgICAgdXB2b3Rlcz17aXRlbS5wb2ludHN9XG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICByYW5rPXtyYW5rfVxuICAgICAgICAgICAgICAgICAgdHdpdHRlckhhbmRsZT17aXRlbS5hdXRob3JUd2l0dGVyID8/ICcnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxzcGFuPlx1RDgzRFx1REUxNCBObyBhcnRpY2xlcyBmb3IgdGhpcyB0b3BpYywgeWV0ITwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU291bmQgZnJvbSAndXNlLXNvdW5kJztcbmltcG9ydCBwbG9wIGZyb20gJy4uLy4uL3B1YmxpYy9zb3VuZHMvcGxvcC10cmltbWVkLm1wMyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgYmFzZUFydGljbGUge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICB1cHZvdGVzOiBudW1iZXI7XG4gIGltYWdlPzogc3RyaW5nO1xuICB0d2l0dGVySGFuZGxlPzogc3RyaW5nO1xufVxuaW50ZXJmYWNlIEFydGljbGUgZXh0ZW5kcyBiYXNlQXJ0aWNsZSB7XG4gIHJhbms/OiBudW1iZXI7XG4gIG11dGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcGljQ2FyZCh7XG4gIHRpdGxlLFxuICBhdXRob3IsXG4gIGxpbmsgPSAnLycsXG4gIHVwdm90ZXMsXG4gIHJhbmssXG4gIGltYWdlLFxuICB0d2l0dGVySGFuZGxlLFxuICBtdXRlLFxufTogQXJ0aWNsZSkge1xuICBjb25zdCBbdXB2b3RlLCBzZXRVcHZvdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZG93bnZvdGUsIHNldERvd252b3RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSh1cHZvdGVzID8/IDApO1xuICBjb25zdCBbdmFsaWRMaW5rLCBzZXRWYWxpZExpbmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGlua0Vycm9yLCBzZXRMaW5rRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB2b2x1bWU6IG51bWJlciA9IG11dGUgPyAwIDogMC4yO1xuICBjb25zdCBbdXB2b3RlU291bmRdID0gdXNlU291bmQocGxvcCwgeyBzb3VuZEVuYWJsZWQ6ICFtdXRlLCB2b2x1bWU6IHZvbHVtZSB9KTtcbiAgY29uc3QgW2Rvd252b3RlU291bmRdID0gdXNlU291bmQocGxvcCwge1xuICAgIHNvdW5kRW5hYmxlZDogIW11dGUsXG4gICAgcGxheWJhY2tSYXRlOiAwLjY1LFxuICAgIHZvbHVtZTogdm9sdW1lLFxuICAgIC8vIGBpbnRlcnJ1cHRgIGVuc3VyZXMgdGhhdCBpZiB0aGUgc291bmQgc3RhcnRzIGFnYWluIGJlZm9yZSBpdCdzXG4gICAgLy8gZW5kZWQsIGl0IHdpbGwgdHJ1bmNhdGUgaXQuIE90aGVyd2lzZSwgdGhlIHNvdW5kIGNhbiBvdmVybGFwLlxuICAgIGludGVycnVwdDogdHJ1ZSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGluay5sZW5ndGggPiAxMCkge1xuICAgICAgc2V0VmFsaWRMaW5rKHRydWUpO1xuICAgIH1cbiAgfSwgW2xpbmtdKTtcblxuICBjb25zdCBoYW5kbGVVcHZvdGUgPSAoKSA9PiB7XG4gICAgaWYgKCF1cHZvdGUpIHtcbiAgICAgIHVwdm90ZVNvdW5kKCk7XG5cbiAgICAgIHNldFVwdm90ZSh0cnVlKTtcbiAgICAgIGRvd252b3RlICYmIHNldERvd252b3RlKGZhbHNlKTtcblxuICAgICAgaWYgKGRvd252b3RlKSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiArIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVcHZvdGUoZmFsc2UpO1xuICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG93bnZvdGUgPSAoKSA9PiB7XG4gICAgaWYgKCFkb3dudm90ZSkge1xuICAgICAgZG93bnZvdGVTb3VuZCgpO1xuXG4gICAgICBzZXREb3dudm90ZSh0cnVlKTtcbiAgICAgIHVwdm90ZSAmJiBzZXRVcHZvdGUoZmFsc2UpO1xuICAgICAgaWYgKHVwdm90ZSkge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RG93bnZvdGUoZmFsc2UpO1xuICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0dGVkTnVtYmVyID0gSW50bC5OdW1iZXJGb3JtYXQoJ2VuLXVzJywge1xuICAgIG5vdGF0aW9uOiAnY29tcGFjdCcsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxLFxuICB9KS5mb3JtYXQoY291bnQpO1xuXG4gIGNvbnN0IExpbmtUb0FydGljbGUgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcbiAgICByZXR1cm4gdmFsaWRMaW5rID8gKFxuICAgICAgPGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TGlua0Vycm9yKHRydWUpfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBFcnJvclBvcHVwID0gKGVycm9yOiBhbnkpID0+IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExpbmtFcnJvcihmYWxzZSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNzAwIGFic29sdXRlIHctMzAgYmctYmxhY2sgbWwtMTAgbXQtNCAke1xuICAgICAgICAgIGVycm9yID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExpbmtFcnJvcihmYWxzZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcHgtMiBweS0wLjI1IHRleHQteGwgdG9wLTAgcmlnaHQtMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICB4XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy0zMCBiZy1lcnJvci1iZyB0ZXh0LWVycm9yIHAtMTAgYmctYWNjZW50LWVycm9yLWJnIHRleHQtYWNjZW50LWVycm9yICBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWFjY2VudC1lcnJvciB6LTEwXCI+XG4gICAgICAgICAgTGluayBpcyBpbnZhbGlkIFx1RDgzRFx1REUxNFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BmbGV4IHctMzAgbXktOCBzaGFkb3ctbGcgc2hhZG93LXN0b25lLTkwMCByb3VuZGVkLTJ4bCAgYm9yZGVyLTQgYm9yZGVyLXNvbGlkIGJnLVsjMDAwMDAwMWNdICAke1xuICAgICAgICB1cHZvdGVcbiAgICAgICAgICA/ICdib3JkZXItZ3JlZW4tNDAwJ1xuICAgICAgICAgIDogZG93bnZvdGVcbiAgICAgICAgICA/ICdib3JkZXItcmVkLTQwMCdcbiAgICAgICAgICA6ICcgYm9yZGVyLXN0b25lLTgwMCdcbiAgICAgIH0gcHktOCByZWxhdGl2ZWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LTEwIG1iLWF1dG8gdGV4dC0zeGxcIj5cbiAgICAgICAgICB7cmFua31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rVG9BcnRpY2xlPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUgZGVjb3JhdGlvbi13aGl0ZSBkZWNvcmF0aW9uLSBob3Zlcjp0ZXh0LWFjY2VudC1waW5rIG1iLTQgdGV4dC0yeGwgbWF4LXctbWQgZm9udC1ib2xkIFwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rVG9BcnRpY2xlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBteS04XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC14bCBcIj57YXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgICAgIHt0d2l0dGVySGFuZGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlcjpiZy1bIzFkYTBmMjU4XSBtbC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vJHt0d2l0dGVySGFuZGxlfWB9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRweCBcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzFEQTFGMlwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyLjIzIDUuOTI0YTguMjEyIDguMjEyIDAgMDEtMi4zNTcuNjQ2IDQuMTE1IDQuMTE1IDAgMDAxLjgwNC0yLjI3IDguMjIxIDguMjIxIDAgMDEtMi42MDYuOTk2IDQuMTAzIDQuMTAzIDAgMDAtNi45OTEgMy43NDIgMTEuNjQ3IDExLjY0NyAwIDAxLTguNDU3LTQuMjg3IDQuMDg3IDQuMDg3IDAgMDAtLjU1NiAyLjA2MyA0LjEgNC4xIDAgMDAxLjgyNSAzLjQxNSA0LjA5IDQuMDkgMCAwMS0xLjg1OS0uNTEzdi4wNTJhNC4xMDQgNC4xMDQgMCAwMDMuMjkyIDQuMDIzIDQuMDk5IDQuMDk5IDAgMDEtMS44NTMuMDcgNC4xMSA0LjExIDAgMDAzLjgzMyAyLjg1IDguMjM2IDguMjM2IDAgMDEtNS4wOTYgMS43NTYgOC4zMyA4LjMzIDAgMDEtLjk3OS0uMDU3IDExLjYxNyAxMS42MTcgMCAwMDYuMjkgMS44NDNjNy41NDcgMCAxMS42NzUtNi4yNTIgMTEuNjc1LTExLjY3NSAwLS4xNzgtLjAwNC0uMzU1LS4wMTItLjUzMWE4LjI5OCA4LjI5OCAwIDAwMi4wNDctMi4xMjN6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtOCAgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci13aGl0ZSBweC00IHB5LTIgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBob3ZlcjpiZy16aW5jLTkwMCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxMaW5rVG9BcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIFJlYWQgQXJ0aWNsZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rVG9BcnRpY2xlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS0xIG14LTEwIHJvdW5kZWQtMnhsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgbWwtYXV0b1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwdm90ZX1cbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgdXB2b3RlID8gJ3N0cm9rZS1ncmVlbi00MDAnIDogJ3N0cm9rZS13aGl0ZSdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIHdpZHRoPVwiNDRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjYgMTUgMTIgOSAxOCAxNVwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMSB0ZXh0LWxnIGZvbnQtYm9sZCAke1xuICAgICAgICAgICAgICB1cHZvdGVcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LWdyZWVuLTQwMCdcbiAgICAgICAgICAgICAgICA6IGRvd252b3RlXG4gICAgICAgICAgICAgICAgPyAndGV4dC1yZWQtNTAwJ1xuICAgICAgICAgICAgICAgIDogJ3RleHQtd2hpdGUnXG4gICAgICAgICAgICB9IGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvdW50ID4gOTk5ID8gZm9ybWF0dGVkTnVtYmVyIDogY291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd252b3RlfVxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBkb3dudm90ZSA/ICdzdHJva2UtcmVkLTUwMCcgOiAnc3Ryb2tlLXdoaXRlJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICB3aWR0aD1cIjQ0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjQ0XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCI2IDkgMTIgMTUgMTggOVwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7bGlua0Vycm9yICYmIDxFcnJvclBvcHVwIGVycm9yPXtsaW5rRXJyb3J9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuLy8gdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBkZXZlbG9wbWVudCB3ZSBkb24ndCB3YW50IHRvIHJlc3RhcnRcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24gdG8gdGhlIERCIHdpdGggZXZlcnkgY2hhbmdlIGVpdGhlci5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIGRiID0gZ2xvYmFsLl9fZGI7XG59XG5cbmV4cG9ydCB7IGRiIH07XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9vbGJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjQgaC01NiBtci0xMCAgdGV4dC1ibGFjayBtbC1hdXRvIHB4LTggcHktIDEyIHJpZ2h0LTI4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHctMjQgaC01NiBtci0xMCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXN0b25lLTQwMCB0ZXh0LWJsYWNrIG1sLWF1dG8gcHgtOCBweS0gMTIgcmlnaHQtMjhcIj5cbiAgICAgICAgVGhpcyBpcyB0aGUgdG9vbGJhclxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhcm4oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuPkhlcmUncyBzb21lIGV4YW1wbGUgdG9waWNzPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgTW90ZCBmcm9tICcuL21vdGQnO1xuaW1wb3J0IHsgbGlua3MgYXMgbWFpbkNvbnRlbnRMaW5rcyB9IGZyb20gJy4vbWFpbi1jb250ZW50JztcbmltcG9ydCB7IEhlYWRlciwgbGlua3MgYXMgaGVhZGVyTGlua3MgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgLi4uaGVhZGVyTGlua3MoKSxcbiAgLi4ubWFpbkNvbnRlbnRMaW5rcygpLFxuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybWF0dGVkSW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2Zvcm1hdHRlZC1pbnB1dCc7XG5pbXBvcnQgSGlnaGxpZ2h0YWJsZVRleHRJbnB1dCBmcm9tICd+L2NvbXBvbmVudHMvaGlnaGxpZ2h0YWJsZS10ZXh0LWlucHV0JztcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcic7XG5pbXBvcnQgeyBMaW5rLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgbG9naW5UeXBlID0gZm9ybS5nZXQoJ2xvZ2luVHlwZScpO1xuICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KCd1c2VybmFtZScpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KCdwYXNzd29yZCcpO1xuICBjb25zdCByZWRpcmVjdFRvID0gdmFsaWRhdGVVcmwoZm9ybS5nZXQoJ3JlZGlyZWN0VG8nKSB8fCAnL2pva2VzJyk7XG4gIGlmIChcbiAgICB0eXBlb2YgbG9naW5UeXBlICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB1c2VybmFtZSAhPT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgcGFzc3dvcmQgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIHJlZGlyZWN0VG8gIT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGZpZWxkcyA9IHsgbG9naW5UeXBlLCB1c2VybmFtZSwgcGFzc3dvcmQgfTtcbiAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgdXNlcm5hbWU6IHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWUpLFxuICAgIHBhc3N3b3JkOiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSxcbiAgfTtcbiAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpXG4gICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuXG4gIHN3aXRjaCAobG9naW5UeXBlKSB7XG4gICAgY2FzZSAnbG9naW4nOiB7XG4gICAgICAvLyBsb2dpbiB0byBnZXQgdGhlIHVzZXJcbiAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gdXNlciwgcmV0dXJuIHRoZSBmaWVsZHMgYW5kIGEgZm9ybUVycm9yXG4gICAgICAvLyBpZiB0aGVyZSBpcyBhIHVzZXIsIGNyZWF0ZSB0aGVpciBzZXNzaW9uIGFuZCByZWRpcmVjdCB0byAvam9rZXNcbiAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBmb3JtRXJyb3I6ICdOb3QgaW1wbGVtZW50ZWQnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhc2UgJ3JlZ2lzdGVyJzoge1xuICAgICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcm5hbWUgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHVzZXJFeGlzdHMpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICBmb3JtRXJyb3I6IGBVc2VyIHdpdGggdXNlcm5hbWUgJHt1c2VybmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGNyZWF0ZSB0aGUgdXNlclxuICAgICAgLy8gY3JlYXRlIHRoZWlyIHNlc3Npb24gYW5kIHJlZGlyZWN0IHRvIC9qb2tlc1xuICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGZvcm1FcnJvcjogJ05vdCBpbXBsZW1lbnRlZCcsXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGZvcm1FcnJvcjogYExvZ2luIHR5cGUgaW52YWxpZGAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcblxuXG4gIGZ1bmN0aW9uIHRlc3QoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC0xMiBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTEwXCI+TG9naW48L3NwYW4+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VG8nKSA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZhZGVyQGRlYXRoc3Rhci5zaXRcIlxuICAgICAgICAgICAgaGFzRXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiaW52YWxpZCBlbWFpbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFuU2hvdEZpcnN0XCJcbiAgICAgICAgICAgIHRvZ2dsZVNob3dIaWRlPXt0cnVlfVxuICAgICAgICAgICAgaGFzRXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiaW52YWxpZCBwYXNzXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IG1yLWF1dG8gdGV4dC1uZXV0cmFsLTMwMCB0ZXh0LW1kIGhvdmVyOnRleHQtYWNjZW50LXBpbmsgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0RXJyb3IodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS03IGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciAgcHktNCBweC04IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgYmctYWNjZW50LXBpbmsgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItd2hpdGUgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTQgZmxleCB3LWZ1bGwganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1hY2NlbnQtcGluayBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBsaW5rcyBhcyBtYWluQ29udGVudExpbmtzIH0gZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xuaW1wb3J0IFBvcHVsYXJUb3BpY3MgZnJvbSAnLi9wb3B1bGFyLXRvcGljcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICAuLi5tYWluQ29udGVudExpbmtzKCksXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciBweC02IGxnOnB4LTE0IG15LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPFNlYXJjaCBzaXplPVwibWVkaXVtXCIgaGFuZGxlRm9ybT17KGU6IGFueSkgPT4gY29uc29sZS5sb2coZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cbiAgICAgICAgICAgIDxQb3B1bGFyVG9waWNzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZXMoKSB7XG4gIHJldHVybiA8c3Bhbj5UaGlzIGlzIHRoZSBQYXRocyBzZWN0aW9uPC9zcGFuPjtcbn1cbiIsICJleHBvcnQgY29uc3QgTW90ZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1kYXJrLW1vZGUtYmcgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBweC0yMCAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtcGluayB3LWZ1bGwgdGV4dC1jZW50ZXIgcm91bmRlZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIFdlIHN0YW5kIHdpdGggVWtyYWluZSBcdUQ4M0NcdURERkFcdUQ4M0NcdURERTZcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXpvbWZvcnVrcmFpbmUub3JnL1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgY3Vyc29yLXBvaW50ZXIgZm9udC1ib2xkIHRleHQtcHJpbWFyeS10ZXh0IGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb25hdGUgaGVyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb3RkO1xuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2Q4MDY1M2Q3JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1XS0xTT1FHWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV1FPRlNUMjIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00TDJBREtSWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZCTzc0RldPLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC01SjdMSElONy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2hlYWRlcic6eydpZCc6J3JvdXRlcy9oZWFkZXInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaGVhZGVyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hlYWRlci1KQUhFVDRGQy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTU9TVjQzUE4uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVQyRFBRRVVCLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PTEpNVVM0RC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBWVdOR0lHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUzQ2R1ZNNk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NT1NWNDNQTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4nOnsnaWQnOidyb3V0ZXMvbGVhcm4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbGVhcm4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4tN0lNSURJN1EuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVlORFlZNUJELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUFZV05HSUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TNDZHVk02TS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1PU1Y0M1BOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi8kdG9waWNJZCc6eydpZCc6J3JvdXRlcy9sZWFybi8kdG9waWNJZCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuJywncGF0aCc6Jzp0b3BpY0lkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLyR0b3BpY0lkLU1YM0ZYUkFQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sZWFybi9pbmRleCc6eydpZCc6J3JvdXRlcy9sZWFybi9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuL2luZGV4LU0zWk1ZSUlSLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vdG9vbGJhcic6eydpZCc6J3JvdXRlcy9sZWFybi90b29sYmFyJywncGFyZW50SWQnOidyb3V0ZXMvbGVhcm4nLCdwYXRoJzondG9vbGJhcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi90b29sYmFyLTRPRjc3RkYzLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tTDVEUU9OWEUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBWVdOR0lHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUzQ2R1ZNNk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NT1NWNDNQTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvbG9naW4vaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9sb2dpbicsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi9pbmRleC1EVkpaRk01Vi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRFg2T0lESUwuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWFpbi1jb250ZW50Jzp7J2lkJzoncm91dGVzL21haW4tY29udGVudCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtYWluLWNvbnRlbnQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWFpbi1jb250ZW50LUlMNFRDQzZGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1TNDZHVk02TS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbW90ZCc6eydpZCc6J3JvdXRlcy9tb3RkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21vdGQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbW90ZC1CS1k1WjRYUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstT0xKTVVTNEQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BhdGhzJzp7J2lkJzoncm91dGVzL3BhdGhzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BhdGhzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BhdGhzLUVIRFFMMlY0LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZTkRZWTVCRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBWVdOR0lHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUzQ2R1ZNNk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NT1NWNDNQTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF0aHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcGF0aHMvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9wYXRocycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYXRocy9pbmRleC1XWEVEUUhBSC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BvcHVsYXItdG9waWNzJzp7J2lkJzoncm91dGVzL3BvcHVsYXItdG9waWNzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BvcHVsYXItdG9waWNzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BvcHVsYXItdG9waWNzLTVZVVRLUlJQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZTkRZWTVCRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2lnbnVwJzp7J2lkJzoncm91dGVzL3NpZ251cCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaWdudXAnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2lnbnVwLVNRQ0RRSUtMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01QVlXTkdJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVM0NkdWTTZNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTU9TVjQzUE4uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NpZ251cC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaWdudXAvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaWdudXAnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2lnbnVwL2luZGV4LVE2UlEyNkdPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EWDZPSURJTC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUQ4MDY1M0Q3LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsWUFBdUI7OztBQ0R2QixxQkFBb0I7QUFDcEIseUJBQXdCO0FBQ3hCLG9CQUFtQjtBQUNuQixzQkFBcUM7OztBQ0hyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsbUJBQTRCO0FBQzVCLG9CQUErQjtBQUVoQix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxNQUFJLFNBQVMsa0NBQ1gsb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNsQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBT087Ozs7OztBQUtBLElBQU0sUUFBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRzlCLElBQU0sT0FBcUIsTUFBTztBQUFBLEVBQ3ZDLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQTtBQUdHLGVBQWU7QUFDNUIsU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVCxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxxQkFBRCxRQUVGLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxzQkFBRCxPQUNBLG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDQSxvQ0FBQywwQkFBRDtBQUFBOzs7QUNqQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBcUI7QUFFckIsSUFBTSxPQUFPO0FBQUEsRUFDWCxFQUFFLE1BQU0sVUFBVSxJQUFJO0FBQUEsRUFDdEIsRUFBRSxNQUFNLFlBQVksSUFBSTtBQUFBLEVBQ3hCLEVBQUUsTUFBTSxRQUFRLElBQUk7QUFBQSxFQUNwQixFQUFFLE1BQU0sVUFBVSxJQUFJO0FBQUEsRUFDdEIsRUFBRSxNQUFNLGFBQWEsSUFBSTtBQUFBLEVBQ3pCLEVBQUUsTUFBTSxjQUFjLElBQUk7QUFBQTtBQUdiLHlCQUF5QjtBQUN0QyxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUEwQixtQkFDMUMsMERBQ0csS0FBSyxJQUFJLENBQUMsU0FBUztBQUNsQixVQUFNLGlCQUFpQixLQUFLLEtBQUs7QUFDakMsV0FDRSxvQ0FBQyxPQUFEO0FBQUEsTUFDRSxLQUFLLEtBQUs7QUFBQSxNQUNWLFdBQVU7QUFBQSxPQUVWLG9DQUFDLDhCQUFEO0FBQUEsTUFBTSxJQUFJLEtBQUs7QUFBQSxPQUNiLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxPQUEyQixLQUFLO0FBQUE7QUFBQTs7O0FDekJsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQUdBLG9CQUFxQjs7O0FDSHJCLG9CQUErQztBQUtoQyxnQkFBZ0IsRUFBRSxZQUFZLE9BQU8sV0FBbUI7QUFDckUsUUFBTSxZQUFZLDBCQUF5QjtBQUMzQyxRQUFNLFdBQVcsMEJBQXVCO0FBR3hDLFFBQU0saUJBQWlCLCtCQUFZLENBQUMsVUFBVTtBQUM1QyxRQUFJLE1BQU0sWUFBWSxRQUFRLE1BQU0sUUFBUSxLQUFLO0FBQy9DLFVBQUksVUFBVSxZQUFZLFFBQVEsU0FBUyxZQUFZLE1BQU07QUFDM0Qsa0JBQVUsUUFBUTtBQUNsQixpQkFBUyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBR3BCO0FBRUgsK0JBQVUsTUFBTTtBQUVkLGFBQVMsaUJBQWlCLFdBQVc7QUFHckMsV0FBTyxNQUFNO0FBQ1gsZUFBUyxvQkFBb0IsV0FBVztBQUFBO0FBQUEsS0FFekMsQ0FBQztBQUVKLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVztBQUFBLEtBQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVyxRQUNULFNBQVMsVUFBVSxXQUFXLFNBQVMsV0FBVyxVQUFVO0FBQUEsSUFFOUQsVUFBVSxDQUFDLE1BQU0sV0FBVztBQUFBLEtBRTVCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFdBQVc7QUFBQTtBQUFBO0FBQUEsZ0JBR0wsU0FBUyxVQUFVLFNBQVMsU0FBUyxXQUFXLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FJL0Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQVcsY0FDM0Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osT0FBTyxFQUFFLFNBQVM7QUFBQSxJQUNsQixXQUFVO0FBQUEsTUFRWixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsS0FNVixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsS0FLWCxXQUVNO0FBQUE7OztBRHRFWixJQUFNLFNBQXVCLE1BQU07QUFDeEMsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUU5QixJQUFNLGNBQWMsTUFBTTtBQUMvQixRQUFNLGtCQUFrQixZQUFZO0FBQ2xDLFFBQUk7QUFDRixZQUFNLFdBQVcsTUFBTSxNQUFNO0FBQzdCLFlBQU0sUUFBTyxNQUFNLFNBQVM7QUFBQSxhQUNyQixLQUFQO0FBQUE7QUFBQTtBQU1KLFFBQU0sYUFBYSxDQUFDLE1BQVc7QUFDN0IsTUFBRTtBQUNGLFVBQU0sT0FBTyxFQUFFLE9BQU8sR0FBRztBQUN6QixZQUFRLElBQUk7QUFBQTtBQUdkLFFBQU0sY0FBYyxNQUFNO0FBQ3hCLFdBQ0Usb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsTUFBRDtBQUFBLE1BQ0UsT0FBTztBQUFBLFFBQ0wsWUFDRTtBQUFBO0FBQUEsTUFFSixXQUFVO0FBQUEsT0FDWCxxQkFDa0Isb0NBQUMsTUFBRCxPQUFNLG1EQUV2QixvQ0FBQyxNQUFELE9BQU0sdUJBSVosb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQXVDLHFHQU0zRCxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxVQUFEO0FBQUEsTUFBUSxXQUFVO0FBQUEsT0FDaEIsb0NBQUMsUUFBRDtBQUFBLE1BQU0sU0FBUyxZQUFZO0FBQUEsT0FBbUI7QUFBQTtBQVExRCxRQUFNLGlCQUFpQixDQUFDLEVBQUUsV0FBZ0I7QUFDeEMsV0FDRSxvQ0FBQyxvQkFBRDtBQUFBLE1BQU0sSUFBSSxXQUFXO0FBQUEsT0FDbkIsb0NBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE9BS1Ysb0NBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQWM7QUFBQTtBQU10QyxRQUFNLGVBQWUsTUFBTTtBQUN6QixXQUNFLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxPQUFXLHNCQUMzQixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQTtBQUFBO0FBTTdCLFFBQU0sZUFBZSxNQUFNO0FBQ3pCLFdBQ0Usb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsUUFBRDtBQUFBLE1BQVE7QUFBQSxRQUNSLG9DQUFDLGNBQUQ7QUFBQTtBQUtOLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsYUFBRCxPQUNBLG9DQUFDLGNBQUQ7QUFBQTtBQUlOLElBQU8sd0JBQVE7OztBRS9HZjtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFFQSxvQkFBcUI7QUFFZCxJQUFNLFNBQXVCLE1BQU07QUFDeEMsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUdyQyxJQUFNLE9BQU8sTUFBTTtBQUNqQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFJO0FBQUEsS0FDUixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBdUI7QUFBQTtBQWdDL0MsSUFBTSx5QkFBeUIsTUFBTTtBQUNuQyxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUNOLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQWVoQixvQ0FBQyxRQUFELE1BQU07QUFBQTtBQVloQixJQUFNLFNBQVMsTUFBTTtBQUNuQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxJQUNQLEtBQUk7QUFBQSxJQUNKLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxLQUVSLG9DQUFDLEtBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxVQUFTO0FBQUEsSUFDVCxVQUFTO0FBQUEsSUFDVCxHQUFFO0FBQUEsTUFFSixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUE7QUFBQTtBQVFwQixJQUFNLGFBQWEsTUFBTTtBQUN2QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLG1CQUFEO0FBQUEsSUFBbUIsTUFBSztBQUFBLElBQVMsVUFBUztBQUFBLE1BQzFDLG9DQUFDLG1CQUFEO0FBQUEsSUFBbUIsTUFBSztBQUFBLElBQVEsVUFBUztBQUFBLE1BRXpDLG9DQUFDLFFBQUQsT0FFQSxvQ0FBQyx3QkFBRDtBQUFBO0FBS04sSUFBTSxvQkFBb0IsQ0FBQyxFQUFFLE1BQU0sZUFBZ0M7QUFDakUsU0FDRSxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsS0FFTDtBQUFBO0FBS0EsSUFBTSxTQUFTLE1BQU07QUFDMUIsU0FDRSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsb0NBQUMsTUFBRCxPQUVBLG9DQUFDLFlBQUQ7QUFBQTs7O0FDcklOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxvQkFBdUI7OztBQ0V2QixvQkFBcUI7QUFFZCxJQUFNLFNBQXVCLE1BQU07QUFDeEMsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUU5QixJQUFNLGVBQWMsTUFBTTtBQUMvQixRQUFNLGtCQUFrQixZQUFZO0FBQ2xDLFFBQUk7QUFDRixZQUFNLFdBQVcsTUFBTSxNQUFNO0FBQzdCLFlBQU0sUUFBTyxNQUFNLFNBQVM7QUFBQSxhQUNyQixLQUFQO0FBQUE7QUFBQTtBQU1KLFFBQU0sYUFBYSxDQUFDLE1BQVc7QUFDN0IsTUFBRTtBQUNGLFVBQU0sT0FBTyxFQUFFLE9BQU8sR0FBRztBQUN6QixZQUFRLElBQUk7QUFBQTtBQUdkLFFBQU0sY0FBYyxNQUFNO0FBQ3hCLFdBQ0Usb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsTUFBRDtBQUFBLE1BQ0UsT0FBTztBQUFBLFFBQ0wsWUFDRTtBQUFBO0FBQUEsTUFFSixXQUFVO0FBQUEsT0FDWCxxQkFDa0Isb0NBQUMsTUFBRCxPQUFNLG1EQUV2QixvQ0FBQyxNQUFELE9BQU0sdUJBSVosb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQXVDLHFHQU0zRCxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxVQUFEO0FBQUEsTUFBUSxXQUFVO0FBQUEsT0FDaEIsb0NBQUMsUUFBRDtBQUFBLE1BQU0sU0FBUyxZQUFZO0FBQUEsT0FBbUI7QUFBQTtBQVExRCxRQUFNLGlCQUFpQixDQUFDLEVBQUUsV0FBZ0I7QUFDeEMsV0FDRSxvQ0FBQyxvQkFBRDtBQUFBLE1BQU0sSUFBSSxXQUFXO0FBQUEsT0FDbkIsb0NBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE9BS1Ysb0NBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQWM7QUFBQTtBQU10QyxRQUFNLGVBQWUsTUFBTTtBQUN6QixXQUNFLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLFFBQUQ7QUFBQSxNQUFNLFdBQVU7QUFBQSxPQUFXLHNCQUMzQixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQSxRQUNyQixvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLE1BQUs7QUFBQTtBQUFBO0FBTTdCLFFBQU0sZUFBZSxNQUFNO0FBQ3pCLFdBQ0Usb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsUUFBRDtBQUFBLE1BQVE7QUFBQSxRQUNSLG9DQUFDLGNBQUQ7QUFBQTtBQUtOLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsYUFBRCxPQUNBLG9DQUFDLGNBQUQ7QUFBQTs7O0FDekdOLG9CQUFxQjtBQUVkLElBQU0sU0FBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBR3JDLElBQU0sUUFBTyxNQUFNO0FBQ2pCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUk7QUFBQSxLQUNSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUF1QjtBQUFBO0FBZ0MvQyxJQUFNLDBCQUF5QixNQUFNO0FBQ25DLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLEtBQ04sb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBZWhCLG9DQUFDLFFBQUQsTUFBTTtBQUFBO0FBWWhCLElBQU0sVUFBUyxNQUFNO0FBQ25CLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLElBQ0osV0FBVTtBQUFBLEtBRVYsb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsV0FBVTtBQUFBLElBQ1YsU0FBUTtBQUFBLEtBRVIsb0NBQUMsS0FBRCxNQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFVBQVM7QUFBQSxJQUNULFVBQVM7QUFBQSxJQUNULEdBQUU7QUFBQSxNQUVKLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQTtBQUFBO0FBUXBCLElBQU0sY0FBYSxNQUFNO0FBQ3ZCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsb0JBQUQ7QUFBQSxJQUFtQixNQUFLO0FBQUEsSUFBUyxVQUFTO0FBQUEsTUFDMUMsb0NBQUMsb0JBQUQ7QUFBQSxJQUFtQixNQUFLO0FBQUEsSUFBUSxVQUFTO0FBQUEsTUFFekMsb0NBQUMsU0FBRCxPQUVBLG9DQUFDLHlCQUFEO0FBQUE7QUFLTixJQUFNLHFCQUFvQixDQUFDLEVBQUUsTUFBTSxlQUFnQztBQUNqRSxTQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxLQUVMO0FBQUE7QUFLQSxJQUFNLFVBQVMsTUFBTTtBQUMxQixTQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUNoQixvQ0FBQyxPQUFELE9BRUEsb0NBQUMsYUFBRDtBQUFBOzs7Ozs7QUY5SEMsSUFBTSxTQUF1QixNQUFNO0FBQUEsRUFDeEMsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBR2QsaUJBQWlCO0FBQzlCLFNBQ0UsMERBQ0Usb0NBQUMsU0FBRCxPQUNBLG9DQUFDLHNCQUFEO0FBQUE7OztBR2pCTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFxQjs7O0FDQXJCLG9CQUFzRDtBQWV2Qyx3QkFBd0I7QUFBQSxFQUNyQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsRUFDakIsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2Y7QUFBQSxHQUNTO0FBQ1QsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLDRCQUFTO0FBQ2pELFFBQU0sQ0FBQyxPQUFPLFlBQVksNEJBQVM7QUFFbkMsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0EsV0FBVTtBQUFBLEtBRVQsUUFFSCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFXLHNDQUNULFFBQVEsbUJBQW1CO0FBQUEsS0FHN0Isb0NBQUMsU0FBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLE1BQ0Usa0JBQWtCLGVBQ2QsU0FDQSxrQkFBa0IsQ0FBQyxlQUNuQixhQUNBO0FBQUEsSUFFTjtBQUFBLElBQ0EsV0FBVTtBQUFBLE1BRVgsa0JBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVywrREFDVCxlQUFlLGFBQWE7QUFBQSxJQUU5QixnQkFBYztBQUFBLElBQ2QsU0FBUyxNQUFNLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztBQUFBLEtBRXpDLGVBQWUsY0FBTyxnQkFLOUIsU0FDQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBa0M7QUFBQTs7O0FEeEUzQyxrQkFBaUI7QUFDOUIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBMEIsWUFDMUMsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLGdCQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixJQUFHO0FBQUEsSUFDSCxjQUFhO0FBQUEsSUFDYixNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsTUFFZCxvQ0FBQyxnQkFBRDtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsT0FBTTtBQUFBLElBQ04sSUFBRztBQUFBLElBQ0gsY0FBYTtBQUFBLElBQ2IsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLE1BRWQsb0NBQUMsZ0JBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxJQUNOLElBQUc7QUFBQSxJQUNILGNBQWE7QUFBQSxJQUNiLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLE1BRWxCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxNQUVQLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxJQUFlLFNBQVE7QUFBQSxLQUFRLGtCQUMvQixLQUNmLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFrQyxZQUl0RCxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQWEscUJBSWpDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFpQyw0QkFFL0Msb0NBQUMscUJBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUNQLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUF1QztBQUFBOzs7QUV6RG5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FPLElBQU0sT0FBTyxNQUFNO0FBQ3hCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQWEsNENBRTNCLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFFBQU87QUFBQSxJQUNQLEtBQUk7QUFBQSxJQUNKLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUNYO0FBQUE7QUFTYixJQUFPLGVBQVE7OztBRGhCZixxQkFBdUI7QUFFaEIsSUFBTSxTQUF1QixNQUFNO0FBQUEsRUFDeEMsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRWQsaUJBQWlCO0FBQzlCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBO0FBQUEsS0FHZCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxnQkFBZ0I7QUFBQSxNQUNoQixZQUFZO0FBQUE7QUFBQSxLQUdkLG9DQUFDLGNBQUQsUUFFRixvQ0FBQyxTQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDQSxvQ0FBQyxjQUFEO0FBQUE7OztBRWhDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EscUJBQXVCOzs7QUNEdkIsK0JBQXFCO0FBRXJCLElBQU0sUUFBTztBQUFBLEVBQ1gsRUFBRSxNQUFNLFVBQVUsSUFBSTtBQUFBLEVBQ3RCLEVBQUUsTUFBTSxZQUFZLElBQUk7QUFBQSxFQUN4QixFQUFFLE1BQU0sUUFBUSxJQUFJO0FBQUEsRUFDcEIsRUFBRSxNQUFNLFVBQVUsSUFBSTtBQUFBLEVBQ3RCLEVBQUUsTUFBTSxhQUFhLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sY0FBYyxJQUFJO0FBQUE7QUFHYiwwQkFBeUI7QUFDdEMsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBMEIsbUJBQzFDLDBEQUNHLE1BQUssSUFBSSxDQUFDLFNBQVM7QUFDbEIsVUFBTSxpQkFBaUIsS0FBSyxLQUFLO0FBQ2pDLFdBQ0Usb0NBQUMsT0FBRDtBQUFBLE1BQ0UsS0FBSyxLQUFLO0FBQUEsTUFDVixXQUFVO0FBQUEsT0FFVixvQ0FBQywrQkFBRDtBQUFBLE1BQU0sSUFBSSxLQUFLO0FBQUEsT0FDYixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxRQUFEO0FBQUEsTUFBTSxXQUFVO0FBQUEsT0FBMkIsS0FBSztBQUFBO0FBQUE7OztBRGxCM0QsSUFBTSxTQUF1QixNQUFNO0FBQUEsRUFDeEMsR0FBRztBQUFBLEVBQ0gsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBR2QsaUJBQWlCO0FBQzlCLFNBQ0UsMERBQ0Usb0NBQUMsU0FBRCxPQUNBLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFRLE1BQUs7QUFBQSxJQUFTLFlBQVksQ0FBQyxNQUFXLFFBQVEsSUFBSTtBQUFBLE9BRTVELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLGdCQUFELFNBSUosb0NBQUMsdUJBQUQ7QUFBQTs7O0FFMUJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxrQkFBcUI7QUFDckIscUJBQThCO0FBQzlCLHFCQUFvQzs7O0FDSHBDLHFCQUFvQztBQUNwQyx1QkFBcUI7Ozs7OztBQWdCTixtQkFBbUI7QUFBQSxFQUNoQztBQUFBLEVBQ0E7QUFBQSxFQUNBLE9BQU87QUFBQSxFQUNQO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEdBQ1U7QUFDVixRQUFNLENBQUMsUUFBUSxhQUFhLDZCQUFTO0FBQ3JDLFFBQU0sQ0FBQyxVQUFVLGVBQWUsNkJBQVM7QUFDekMsUUFBTSxDQUFDLE9BQU8sWUFBWSw2QkFBUyxXQUFXO0FBQzlDLFFBQU0sQ0FBQyxXQUFXLGdCQUFnQiw2QkFBUztBQUMzQyxRQUFNLENBQUMsV0FBVyxnQkFBZ0IsNkJBQVM7QUFDM0MsUUFBTSxTQUFpQixPQUFPLElBQUk7QUFDbEMsUUFBTSxDQUFDLGVBQWUsOEJBQVMsc0JBQU0sRUFBRSxjQUFjLENBQUMsTUFBTTtBQUM1RCxRQUFNLENBQUMsaUJBQWlCLDhCQUFTLHNCQUFNO0FBQUEsSUFDckMsY0FBYyxDQUFDO0FBQUEsSUFDZixjQUFjO0FBQUEsSUFDZDtBQUFBLElBR0EsV0FBVztBQUFBO0FBR2IsZ0NBQVUsTUFBTTtBQUNkLFFBQUksS0FBSyxTQUFTLElBQUk7QUFDcEIsbUJBQWE7QUFBQTtBQUFBLEtBRWQsQ0FBQztBQUVKLFFBQU0sZUFBZSxNQUFNO0FBQ3pCLFFBQUksQ0FBQyxRQUFRO0FBQ1g7QUFFQSxnQkFBVTtBQUNWLGtCQUFZLFlBQVk7QUFFeEIsVUFBSSxVQUFVO0FBQ1osaUJBQVMsQ0FBQyxTQUFTLE9BQU87QUFBQSxhQUNyQjtBQUNMLGlCQUFTLENBQUMsU0FBUyxPQUFPO0FBQUE7QUFBQSxXQUV2QjtBQUNMLGdCQUFVO0FBQ1YsZUFBUyxDQUFDLFNBQVMsT0FBTztBQUFBO0FBQUE7QUFJOUIsUUFBTSxpQkFBaUIsTUFBTTtBQUMzQixRQUFJLENBQUMsVUFBVTtBQUNiO0FBRUEsa0JBQVk7QUFDWixnQkFBVSxVQUFVO0FBQ3BCLFVBQUksUUFBUTtBQUNWLGlCQUFTLENBQUMsU0FBUyxPQUFPO0FBQUEsYUFDckI7QUFDTCxpQkFBUyxDQUFDLFNBQVMsT0FBTztBQUFBO0FBQUEsV0FFdkI7QUFDTCxrQkFBWTtBQUNaLGVBQVMsQ0FBQyxTQUFTLE9BQU87QUFBQTtBQUFBO0FBSTlCLFFBQU0sa0JBQWtCLEtBQUssYUFBYSxTQUFTO0FBQUEsSUFDakQsVUFBVTtBQUFBLElBQ1YsdUJBQXVCO0FBQUEsS0FDdEIsT0FBTztBQUVWLFFBQU0sZ0JBQWdCLENBQUMsRUFBRSxlQUFvQjtBQUMzQyxXQUFPLFlBQ0wsb0NBQUMsS0FBRDtBQUFBLE1BQUcsTUFBTTtBQUFBLE1BQU0sUUFBTztBQUFBLE1BQVMsS0FBSTtBQUFBLE9BQ2hDLFlBR0gsb0NBQUMsT0FBRDtBQUFBLE1BQUssU0FBUyxNQUFNLGFBQWE7QUFBQSxPQUFRO0FBQUE7QUFJN0MsUUFBTSxhQUFhLENBQUMsVUFBZTtBQUNqQyxrQ0FBVSxNQUFNO0FBQ2QsaUJBQVcsTUFBTTtBQUNmLHFCQUFhO0FBQUEsU0FDWjtBQUFBLE9BQ0Y7QUFFSCxXQUNFLG9DQUFDLE9BQUQ7QUFBQSxNQUNFLFdBQVcscUVBQ1QsUUFBUSxnQkFBZ0I7QUFBQSxPQUcxQixvQ0FBQyxRQUFEO0FBQUEsTUFDRSxTQUFTLE1BQU0sYUFBYTtBQUFBLE1BQzVCLFdBQVU7QUFBQSxPQUNYLE1BR0Qsb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQXlIO0FBQUE7QUFPOUksU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFXLGdHQUNULFNBQ0kscUJBQ0EsV0FDQSxtQkFDQTtBQUFBLEtBR04sb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2IsT0FFSCxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsZUFBRCxNQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNiLFNBR0wsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQWEsU0FDNUIsaUJBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQ0UsTUFBTSx1QkFBdUI7QUFBQSxJQUM3QixRQUFPO0FBQUEsSUFDUCxLQUFJO0FBQUEsS0FFSixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFNO0FBQUEsSUFDTixRQUFPO0FBQUEsSUFDUCxPQUFNO0FBQUEsSUFDTixNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsS0FFUixvQ0FBQyxLQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLFdBUXBCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLGVBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBa0MscUJBUTFELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxTQUFTO0FBQUEsSUFDVCxPQUFNO0FBQUEsSUFDTixXQUFXLGtCQUNULFNBQVMscUJBQXFCO0FBQUEsSUFFaEMsT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsYUFBWTtBQUFBLElBQ1osTUFBSztBQUFBLElBQ0wsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxLQUVmLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxJQUFPLEdBQUU7QUFBQSxJQUFnQixNQUFLO0FBQUEsTUFDM0Msb0NBQUMsWUFBRDtBQUFBLElBQVUsUUFBTztBQUFBLFFBR3JCLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVcsMEJBQ1QsU0FDSSxtQkFDQSxXQUNBLGlCQUNBO0FBQUEsS0FHTCxRQUFRLE1BQU0sa0JBQWtCLFFBRW5DLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFNBQVM7QUFBQSxJQUNULE9BQU07QUFBQSxJQUNOLFdBQVcsa0JBQ1QsV0FBVyxtQkFBbUI7QUFBQSxJQUVoQyxPQUFNO0FBQUEsSUFDTixRQUFPO0FBQUEsSUFDUCxTQUFRO0FBQUEsSUFDUixhQUFZO0FBQUEsSUFDWixNQUFLO0FBQUEsSUFDTCxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLEtBRWYsb0NBQUMsUUFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQU8sR0FBRTtBQUFBLElBQWdCLE1BQUs7QUFBQSxNQUMzQyxvQ0FBQyxZQUFEO0FBQUEsSUFBVSxRQUFPO0FBQUEsU0FJdEIsYUFBYSxvQ0FBQyxZQUFEO0FBQUEsSUFBWSxPQUFPO0FBQUE7QUFBQTs7O0FDeE92QyxvQkFBNkI7QUFFN0IsSUFBSTtBQVNKLElBQUksT0FBdUM7QUFDekMsUUFBSyxJQUFJO0FBQUEsT0FDSjtBQUNMLE1BQUksQ0FBQyxPQUFPLE1BQU07QUFDaEIsV0FBTyxPQUFPLElBQUk7QUFBQTtBQUVwQixRQUFLLE9BQU87QUFBQTs7O0FGUVAsSUFBTSxTQUF5QixPQUFPLEVBQUUsYUFBYTtBQUMxRCxRQUFNLE9BQU8sT0FBTztBQUVwQixRQUFNLFFBQW1CO0FBQUEsSUFDdkIsY0FBYyxNQUFNLElBQUcsS0FBSyxTQUFTO0FBQUEsTUFDbkMsT0FBTztBQUFBLFFBQ0wsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUliLFNBQU8sc0JBQUssRUFBRSxhQUFNO0FBQUE7QUFHUCxxQkFBcUI7QUFDbEMsUUFBTSxDQUFDLE1BQU0sV0FBVyw2QkFBUztBQUNqQyxRQUFNLEVBQUUsYUFBTSxTQUFTO0FBRXZCLFFBQU0sRUFBRSxpQkFBaUI7QUFDekIsVUFBUSxJQUFJO0FBRVosZ0NBQVUsTUFBTTtBQUNkLFVBQU0sUUFBTyxhQUFhLFFBQVE7QUFDbEMsVUFBTSxVQUFVLFVBQVMsUUFBUSxLQUFLLE1BQU07QUFDNUMsWUFBUTtBQUFBLEtBQ1A7QUFFSCxRQUFNLGNBQWMsTUFBTTtBQUN4QixXQUNJLGFBQWEsUUFBUSxRQUFRLFdBQzdCLGFBQWEsUUFBUSxRQUFRO0FBRWpDLFlBQVEsQ0FBQyxTQUFTLENBQUM7QUFBQTtBQUdyQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxNQUNMLFlBQ0U7QUFBQTtBQUFBLEtBR0gsUUFPTCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBb0osbUJBS3hLLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLGFBQWEsU0FDWixhQUNHLEtBQUssQ0FBQyxHQUFHLE1BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxJQUFJLElBQzFDLElBQUksQ0FBQyxNQUFNLFdBQVU7QUFDcEIsVUFBTSxPQUFPLFNBQVE7QUFFckIsV0FDRSxvQ0FBQyxXQUFEO0FBQUEsTUFDRTtBQUFBLE1BQ0EsUUFBUSxLQUFLO0FBQUEsTUFDYixPQUFPLEtBQUs7QUFBQSxNQUNaLE1BQU0sS0FBSztBQUFBLE1BQ1gsU0FBUyxLQUFLO0FBQUEsTUFDZCxLQUFLLEtBQUs7QUFBQSxNQUNWO0FBQUEsTUFDQSxlQUFlLEtBQUssaUJBQWlCO0FBQUE7QUFBQSxPQUs3QyxvQ0FBQyxRQUFELE1BQU07QUFBQTs7O0FHdkdoQjtBQUFBO0FBQUE7QUFBQTtBQUFlLG1CQUFtQjtBQUNoQyxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUF1RztBQUFBOzs7QUNINUg7QUFBQTtBQUFBO0FBQUE7QUFBZSxpQkFBaUI7QUFDOUIsU0FDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsUUFBRCxNQUFNO0FBQUE7OztBQ0haO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFBdUI7QUFNaEIsSUFBTSxTQUF1QixNQUFNO0FBQUEsRUFDeEMsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBR2Qsa0JBQWlCO0FBQzlCLFNBQ0UsMERBQ0Usb0NBQUMsU0FBRCxPQUNBLG9DQUFDLHVCQUFEO0FBQUE7OztBQ2pCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXlCO0FBSXpCLHFCQUFzQztBQUUvQixJQUFNLFNBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQzNELFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsUUFBTSxZQUFZLEtBQUssSUFBSTtBQUMzQixRQUFNLFdBQVcsS0FBSyxJQUFJO0FBQzFCLFFBQU0sV0FBVyxLQUFLLElBQUk7QUFDMUIsUUFBTSxhQUFhLFlBQVksS0FBSyxJQUFJLGlCQUFpQjtBQUN6RCxNQUNFLE9BQU8sY0FBYyxZQUNyQixPQUFPLGFBQWEsWUFDcEIsT0FBTyxhQUFhLFlBQ3BCLE9BQU8sZUFBZSxVQUN0QjtBQUNBLFdBQU8sV0FBVztBQUFBLE1BQ2hCLFdBQVc7QUFBQTtBQUFBO0FBSWYsUUFBTSxTQUFTLEVBQUUsV0FBVyxVQUFVO0FBQ3RDLFFBQU0sY0FBYztBQUFBLElBQ2xCLFVBQVUsaUJBQWlCO0FBQUEsSUFDM0IsVUFBVSxpQkFBaUI7QUFBQTtBQUU3QixNQUFJLE9BQU8sT0FBTyxhQUFhLEtBQUs7QUFDbEMsV0FBTyxXQUFXLEVBQUUsYUFBYTtBQUVuQyxVQUFRO0FBQUEsU0FDRCxTQUFTO0FBSVosYUFBTyxXQUFXO0FBQUEsUUFDaEI7QUFBQSxRQUNBLFdBQVc7QUFBQTtBQUFBO0FBQUEsU0FHVixZQUFZO0FBQ2YsWUFBTSxhQUFhLE1BQU0sR0FBRyxLQUFLLFVBQVU7QUFBQSxRQUN6QyxPQUFPLEVBQUU7QUFBQTtBQUVYLFVBQUksWUFBWTtBQUNkLGVBQU8sV0FBVztBQUFBLFVBQ2hCO0FBQUEsVUFDQSxXQUFXLHNCQUFzQjtBQUFBO0FBQUE7QUFLckMsYUFBTyxXQUFXO0FBQUEsUUFDaEI7QUFBQSxRQUNBLFdBQVc7QUFBQTtBQUFBO0FBQUEsYUFHTjtBQUNQLGFBQU8sV0FBVztBQUFBLFFBQ2hCO0FBQUEsUUFDQSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNSixrQkFBaUI7QUFDOUIsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLDZCQUFTO0FBQ2pELFFBQU0sQ0FBQyxPQUFPLFlBQVksNkJBQVM7QUFDbkMsUUFBTSxDQUFDLGdCQUFnQjtBQUd2QixnQkFBYyxHQUFRO0FBQ3BCLFlBQVEsSUFBSSxFQUFFLE9BQU87QUFBQTtBQUV2QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUEyQixVQUMzQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDWCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFPLGFBQWEsSUFBSSxpQkFBaUI7QUFBQSxNQUUzQyxvQ0FBQyxnQkFBRDtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsT0FBTTtBQUFBLElBQ04sSUFBRztBQUFBLElBQ0gsY0FBYTtBQUFBLElBQ2IsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLElBQ1YsY0FBYTtBQUFBLE1BRWYsb0NBQUMsZ0JBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxJQUNOLElBQUc7QUFBQSxJQUNILGNBQWE7QUFBQSxJQUNiLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLElBQ2hCLFVBQVU7QUFBQSxJQUNWLGNBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUVaLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUE4RSxxQkFHaEcsb0NBQUMsVUFBRDtBQUFBLElBQ0UsYUFBYSxNQUFNLFNBQVM7QUFBQSxJQUM1QixXQUFVO0FBQUEsS0FFVixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBWSxZQUloQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBaUMsMEJBRS9DLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FDUCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBdUM7QUFBQTs7O0FDNUhuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EscUJBQXVCO0FBTWhCLElBQU0sVUFBdUIsTUFBTTtBQUFBLEVBQ3hDLEdBQUc7QUFBQSxFQUNILEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUdkLGtCQUFpQjtBQUM5QixTQUNFLDBEQUNFLG9DQUFDLFNBQUQsT0FDQSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsSUFBUyxZQUFZLENBQUMsTUFBVyxRQUFRLElBQUk7QUFBQSxPQUU1RCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxnQkFBRCxTQUlKLG9DQUFDLHVCQUFEO0FBQUE7OztBQzFCUjtBQUFBO0FBQUE7QUFBQTtBQUFlLG1CQUFtQjtBQUNoQyxTQUFPLG9DQUFDLFFBQUQsTUFBTTtBQUFBOzs7QUNEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTSxRQUFPLE1BQU07QUFDeEIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBYSw0Q0FFM0Isb0NBQUMsS0FBRDtBQUFBLElBQ0UsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLElBQ0osTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1g7QUFBQTtBQVNiLElBQU8sZ0JBQVE7OztBQ3JCZixJQUFPLDBCQUFRLEVBQUMsV0FBVSxZQUFXLFNBQVEsRUFBQyxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUJBQWdCLEVBQUMsTUFBSyxpQkFBZ0IsWUFBVyxRQUFPLFFBQU8sVUFBUyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvQ0FBbUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFNBQVEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx5QkFBd0IsRUFBQyxNQUFLLHlCQUF3QixZQUFXLGdCQUFlLFFBQU8sWUFBVyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyw0Q0FBMkMsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sc0JBQXFCLEVBQUMsTUFBSyxzQkFBcUIsWUFBVyxnQkFBZSxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMseUNBQXdDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHdCQUF1QixFQUFDLE1BQUssd0JBQXVCLFlBQVcsZ0JBQWUsUUFBTyxXQUFVLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDJDQUEwQyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxnQkFBZSxFQUFDLE1BQUssZ0JBQWUsWUFBVyxRQUFPLFFBQU8sU0FBUSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sc0JBQXFCLEVBQUMsTUFBSyxzQkFBcUIsWUFBVyxnQkFBZSxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMseUNBQXdDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx1QkFBc0IsRUFBQyxNQUFLLHVCQUFzQixZQUFXLFFBQU8sUUFBTyxnQkFBZSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywwQ0FBeUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGVBQWMsRUFBQyxNQUFLLGVBQWMsWUFBVyxRQUFPLFFBQU8sUUFBTyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxrQ0FBaUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxTQUFRLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sc0JBQXFCLEVBQUMsTUFBSyxzQkFBcUIsWUFBVyxnQkFBZSxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMseUNBQXdDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHlCQUF3QixFQUFDLE1BQUsseUJBQXdCLFlBQVcsUUFBTyxRQUFPLGtCQUFpQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyw0Q0FBMkMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGlCQUFnQixFQUFDLE1BQUssaUJBQWdCLFlBQVcsUUFBTyxRQUFPLFVBQVMsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsb0NBQW1DLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHVCQUFzQixFQUFDLE1BQUssdUJBQXNCLFlBQVcsaUJBQWdCLFFBQU8sUUFBVSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUywwQ0FBeUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBMUJtQnB3SyxJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoseUJBQXlCO0FBQUEsSUFDckIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix1QkFBdUI7QUFBQSxJQUNuQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGlCQUFpQjtBQUFBLElBQ2IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQkFBaUI7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosdUJBQXVCO0FBQUEsSUFDbkIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHlCQUF5QjtBQUFBLElBQ3JCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosd0JBQXdCO0FBQUEsSUFDcEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQkFBc0I7QUFBQSxJQUNsQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQkFBc0I7QUFBQSxJQUNsQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQkFBc0I7QUFBQSxJQUNsQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGVBQWU7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOzs7QUQ3SWQsSUFBTSxNQUFNO0FBRVosSUFBSSxJQUFJO0FBR1IsSUFBSSxRQUFRO0FBR1osSUFBSSxJQUNGLFVBQ0EsdUJBQVEsT0FBTyxnQkFBZ0IsRUFBRSxXQUFXLE1BQU0sUUFBUTtBQUs1RCxJQUFJLElBQUksdUJBQVEsT0FBTyxVQUFVLEVBQUUsUUFBUTtBQUUzQyxJQUFJLElBQUksMkJBQU87QUFFZixJQUFJLElBQ0YsS0FDQSwwQ0FBcUI7QUFBQSxFQUNuQixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUE7QUFJVixJQUFJLElBQUksZUFBZSxDQUFDLEtBQUssUUFBUTtBQUNuQyxVQUFRLElBQUk7QUFDWixNQUFJLEtBQUs7QUFBQTtBQUdYLElBQU0sT0FBTyxRQUFRLElBQUksUUFBUTtBQUVqQyxJQUFJLE9BQU8sTUFBTSxNQUFNO0FBQ3JCLFVBQVEsSUFBSSxzQ0FBK0I7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
