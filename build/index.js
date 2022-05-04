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
var tailwind_default = "/build/_assets/tailwind-G52KU43G.css";

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
      const data4 = await response.json();
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
    name: "Topics",
    location: "/learn"
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
      const data4 = await response.json();
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
    name: "Topics",
    location: "/learn"
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
    className: "px-6 lg:px-12 py-6 flex justify-between items-center text-white header  bg-black"
  }, /* @__PURE__ */ React.createElement(Logo2, null), /* @__PURE__ */ React.createElement(Navigation2, null));
};

// app/styles/index.css
var styles_default = "/build/_assets/index-CZMZE6CS.css";

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
var import_react9 = require("@remix-run/react");
function Login2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full flex flex-col justify-center items-center  m-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center px-12 "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold mb-6"
  }, "Sign Up"), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-80 flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "flex justify-start items-center w-full text-xl mb-1"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    id: "name",
    autoComplete: "name",
    type: "text",
    name: "email",
    placeholder: "Ana.. Darth Vader",
    className: "flex w-full px-2 mb-6 py-4 border-2 border-solid border-gray-600 focus-within:border-white  bg-black rounded-lg hover:shadow-2xl "
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-80 flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "flex justify-start items-center w-full text-xl mb-1"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    id: "email",
    autoComplete: "email",
    type: "email",
    name: "email",
    placeholder: "Vader@deathstar.sit",
    className: "flex w-full px-2 mb-6 py-4 border-2 border-solid border-gray-600 focus-within:border-white  bg-black rounded-lg hover:shadow-2xl "
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-80 flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "flex justify-start items-center w-full text-xl mb-1"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "current-password",
    autoComplete: "current-password",
    name: "password",
    type: "password",
    placeholder: "HanShotFirst",
    className: "flex w-full px-2 py-4 border-2 border-solid border-gray-600 focus-within:border-white  bg-black rounded-lg hover:shadow-2xl "
  })), /* @__PURE__ */ React.createElement("div", {
    className: "my-8 flex justify-start items-center"
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
  }, "Already have an account?", /* @__PURE__ */ React.createElement(import_react9.Link, {
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
var import_react10 = require("@remix-run/react");
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
  }, /* @__PURE__ */ React.createElement(motd_default, null)), /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement(import_react10.Outlet, null), /* @__PURE__ */ React.createElement(MainContent2, null));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn.tsx
var learn_exports = {};
__export(learn_exports, {
  default: () => index,
  links: () => links8
});
var import_react11 = require("@remix-run/react");

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
  }, /* @__PURE__ */ React.createElement(PopularTopics2, null))), /* @__PURE__ */ React.createElement(import_react11.Outlet, null)));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId.tsx
var topicId_exports = {};
__export(topicId_exports, {
  default: () => JokeRoute,
  loader: () => loader
});
var import_node = require("@remix-run/node");
var import_react12 = require("@remix-run/react");
var import_react13 = require("react");
var import_use_sound = __toESM(require("use-sound"));

// public/sounds/plop-trimmed.mp3
var plop_trimmed_default = "/build/_assets/plop-trimmed-3SO2LLWD.mp3";

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/learn/$topicId.tsx
var loader = async ({ params }) => {
  const topic = { name: params.topicId };
  return (0, import_node.json)(topic);
};
var data3 = [
  {
    title: "React Fundamentals: Props vs State",
    author: "Kent C. Dodds",
    link: "https://kentcdodds.com/blog/props-vs-state",
    id: 0,
    upvotes: 69,
    twitterHandle: "kentcdodds"
  },
  {
    title: "When to useMemo and useCallback",
    author: "Kent C. Dodds",
    link: "https://kentcdodds.com/blog/usememo-and-usecallback",
    id: 1,
    upvotes: 426,
    twitterHandle: "kentcdodds"
  },
  {
    title: "How to React \u269B\uFE0F",
    author: "Kent C. Dodds",
    link: "https://kentcdodds.com/blog/how-to-react",
    id: 2,
    upvotes: 780,
    twitterHandle: "kentcdodds"
  },
  {
    title: "How to use React Context effectively",
    author: "Kent C. Dodds",
    link: "https://kentcdodds.com/blog/how-to-use-react-context-effectively",
    id: 3,
    upvotes: 820,
    twitterHandle: "kentcdodds"
  },
  {
    title: "A Complete Guide To useEffect",
    author: "Dan Abramov",
    link: "https://overreacted.io/a-complete-guide-to-useeffect/",
    id: 4,
    upvotes: 70382,
    twitterHandle: "dan_abramov"
  },
  {
    title: "React Fundamentals: Props vs State",
    author: "Kent C. Dodds",
    link: "https://kentcdodds.com/blog/props-vs-state",
    id: 5,
    upvotes: 69949,
    twitterHandle: "kentcdodds"
  },
  {
    title: "Heres an uneccessarily long title wihosanoinasd oinsdfoinsdf",
    author: "anonymous",
    link: "",
    id: 6,
    upvotes: 69420
  },
  {
    title: "Exactly 1000 upvotes",
    author: "anonymous",
    link: "",
    id: 7,
    upvotes: 1e3
  }
];
var ResourceLink = ({
  title,
  author,
  link = "/",
  upvotes,
  rank,
  image,
  twitterHandle,
  mute
}) => {
  const [upvote, setUpvote] = (0, import_react13.useState)(false);
  const [downvote, setDownvote] = (0, import_react13.useState)(false);
  const [count, setCount] = (0, import_react13.useState)(upvotes ?? 0);
  const [validLink, setValidLink] = (0, import_react13.useState)(false);
  const [linkError, setLinkError] = (0, import_react13.useState)(false);
  const volume = mute ? 0 : 0.25;
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
    className: "flex w-30 my-8 shadow-lg shadow-stone-900 rounded-2xl  border-2 border-solid  border-stone-800 py-8  relative"
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
    className: "flex justify-center items-center border-2 border-white px-4 py-1\n            \n            \n            hover:border-accent-pink\n            \n            \n            cursor-pointer rounded-lg"
  }, /* @__PURE__ */ React.createElement(LinkToArticle, null, /* @__PURE__ */ React.createElement("span", {
    className: "flex justify-start items-center"
  }, "Read Article"))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex py-1 px-4 rounded-2xl flex-col items-center justify-center  ml-auto"
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
    className: `px-1 font-bold ${upvote ? "text-green-400" : downvote ? "text-red-500" : "text-white"} `
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
};
function JokeRoute() {
  const [mute, setMute] = (0, import_react13.useState)(false);
  const topic = (0, import_react12.useLoaderData)();
  const name = topic.name;
  (0, import_react13.useEffect)(() => {
    const mute2 = localStorage.getItem("mute");
    const isMuted = mute2 !== null && JSON.parse(mute2);
    setMute(isMuted);
  }, []);
  const toggleAudio = () => {
    mute ? localStorage.setItem("mute", "false") : localStorage.setItem("mute", "true");
    setMute((prev) => !prev);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center flex-col "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-6xl mb-3 capitalize",
    style: {
      textShadow: "rgba(192, 219, 255, 0.3) 0px 0px 80px, rgba(65, 120, 255, 0.15) 0px 0px 32px"
    }
  }, name), /* @__PURE__ */ React.createElement("span", {
    onClick: toggleAudio,
    className: "ml-12 text-2xl cursor-pointer"
  }, mute ? "\u{1F507}" : "\u{1F508}")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col "
  }, data3.sort((a, b) => a.upvotes < b.upvotes ? 1 : -1).map((item, index3) => {
    const rank = index3 + 1;
    return /* @__PURE__ */ React.createElement(ResourceLink, {
      mute,
      author: item.author,
      title: item.title,
      link: item.link,
      upvotes: item.upvotes,
      key: item.id,
      rank,
      twitterHandle: item.twitterHandle
    });
  })));
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
var import_react14 = require("@remix-run/react");
var links9 = () => [
  ...links5(),
  ...links4(),
  { rel: "stylesheet", href: styles_default }
];
function Login3() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement(import_react14.Outlet, null));
}

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/login/index.tsx
var login_exports2 = {};
__export(login_exports2, {
  default: () => Login4
});
var import_react15 = require("@remix-run/react");
function Login4() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full flex flex-col justify-center items-center m-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center px-12 "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl font-bold mb-10"
  }, "Login"), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-80 flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "flex justify-start items-center w-full text-xl mb-1"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    id: "email",
    autoComplete: "email",
    type: "email",
    name: "email",
    placeholder: "Vader@deathstar.sit",
    className: "flex w-full px-2 mb-6 py-4 border-2 border-solid border-gray-600 focus-within:border-white  bg-black rounded-lg hover:shadow-2xl "
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-80 flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "flex justify-start items-center w-full text-xl mb-1"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "current-password",
    autoComplete: "current-password",
    name: "password",
    type: "password",
    placeholder: "HanShotFirst",
    className: "flex w-full px-2 py-4 border-2 border-solid border-gray-600 focus-within:border-white  bg-black rounded-lg hover:shadow-2xl "
  })), /* @__PURE__ */ React.createElement("button", {
    className: "flex mr-auto text-stone-300 my-1 hover:text-accent-pink cursor-pointer"
  }, "Forgot password?"), /* @__PURE__ */ React.createElement("button", {
    className: "mt-7 flex w-full justify-center items-center text-center  py-4 px-8 border-2 border-solid border-transparent bg-accent-pink rounded-lg cursor-pointer hover:border-white "
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

// route:/Users/reilly/Programming/on-the-shoulders-of-giants/app/routes/paths.tsx
var paths_exports = {};
__export(paths_exports, {
  default: () => index2,
  links: () => links10
});
var import_react16 = require("@remix-run/react");
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
  }, /* @__PURE__ */ React.createElement(PopularTopics2, null))), /* @__PURE__ */ React.createElement(import_react16.Outlet, null)));
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
var assets_manifest_default = { "version": "698bdef9", "entry": { "module": "/build/entry.client-CKYURYPD.js", "imports": ["/build/_shared/chunk-BNY3RXL4.js", "/build/_shared/chunk-HRPSGLSN.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-WZWY4C6F.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/header": { "id": "routes/header", "parentId": "root", "path": "header", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/header-6JL6OXUQ.js", "imports": ["/build/_shared/chunk-O7KEXV6R.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-7U6TMBC5.js", "imports": ["/build/_shared/chunk-OLJMUS4D.js", "/build/_shared/chunk-W5BFMURT.js", "/build/_shared/chunk-ECIV5Q27.js", "/build/_shared/chunk-O7KEXV6R.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn": { "id": "routes/learn", "parentId": "root", "path": "learn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn-IOBR7J7A.js", "imports": ["/build/_shared/chunk-GMU7YJ66.js", "/build/_shared/chunk-W5BFMURT.js", "/build/_shared/chunk-ECIV5Q27.js", "/build/_shared/chunk-O7KEXV6R.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/$topicId": { "id": "routes/learn/$topicId", "parentId": "routes/learn", "path": ":topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/$topicId-RLF7E223.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/index": { "id": "routes/learn/index", "parentId": "routes/learn", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/learn/index-M3ZMYIIR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/learn/toolbar": { "id": "routes/learn/toolbar", "parentId": "routes/learn", "path": "toolbar", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/learn/toolbar-4OF77FF3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-F5PFEDU3.js", "imports": ["/build/_shared/chunk-W5BFMURT.js", "/build/_shared/chunk-ECIV5Q27.js", "/build/_shared/chunk-O7KEXV6R.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "routes/login", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-XKYECE6X.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/main-content": { "id": "routes/main-content", "parentId": "root", "path": "main-content", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/main-content-RDIEFQUN.js", "imports": ["/build/_shared/chunk-ECIV5Q27.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/motd": { "id": "routes/motd", "parentId": "root", "path": "motd", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/motd-BKY5Z4XS.js", "imports": ["/build/_shared/chunk-OLJMUS4D.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths": { "id": "routes/paths", "parentId": "root", "path": "paths", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/paths-IPRMQ6IZ.js", "imports": ["/build/_shared/chunk-GMU7YJ66.js", "/build/_shared/chunk-W5BFMURT.js", "/build/_shared/chunk-ECIV5Q27.js", "/build/_shared/chunk-O7KEXV6R.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/paths/index": { "id": "routes/paths/index", "parentId": "routes/paths", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/paths/index-WXEDQHAH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/popular-topics": { "id": "routes/popular-topics", "parentId": "root", "path": "popular-topics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/popular-topics-S6Y4EUU5.js", "imports": ["/build/_shared/chunk-GMU7YJ66.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup": { "id": "routes/signup", "parentId": "root", "path": "signup", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/signup-T7DRNCQL.js", "imports": ["/build/_shared/chunk-W5BFMURT.js", "/build/_shared/chunk-ECIV5Q27.js", "/build/_shared/chunk-O7KEXV6R.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/signup/index": { "id": "routes/signup/index", "parentId": "routes/signup", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/signup/index-2C3GGTPG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-698BDEF9.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL3NlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcG9wdWxhci10b3BpY3MudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9tYWluLWNvbnRlbnQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NlYXJjaC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2hlYWRlci50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3NpZ251cC50c3giLCAiLi4vYXBwL3JvdXRlcy9tYWluLWNvbnRlbnQudHN4IiwgIi4uL2FwcC9yb3V0ZXMvaGVhZGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvc2lnbnVwL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9yb3V0ZXMvbW90ZC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuLnRzeCIsICIuLi9hcHAvcm91dGVzL3BvcHVsYXItdG9waWNzLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vJHRvcGljSWQudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi90b29sYmFyLnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xvZ2luL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcGF0aHMudHN4IiwgInJvdXRlOi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9wYXRocy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL21vdGQudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdAcmVtaXgtcnVuL2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgc2VydmVyQnVpbGQgZnJvbSAnQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gICcvYnVpbGQnLFxuICBleHByZXNzLnN0YXRpYygncHVibGljL2J1aWxkJywgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogJzF5JyB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJywgeyBtYXhBZ2U6ICcxaCcgfSkpO1xuXG5hcHAudXNlKG1vcmdhbigndGlueScpKTtcblxuYXBwLmFsbChcbiAgJyonLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KVxuKTtcblxuYXBwLmdldCgnL3NlcnZlcmNvZGUnLCAocmVxLCByZXMpID0+IHtcbiAgY29uc29sZS5sb2coJ1NFUlZFUiBDT0RFIEVYRUNVVEVEIScpO1xuICByZXMuc2VuZCgnQk9PTScpO1xufSk7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgXHVEODNEXHVERTgwIGxpdmUgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9wb3B1bGFyLXRvcGljcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL21haW4tY29udGVudC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2hlYWRlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3NpZ251cC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL3NpZ251cC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9yZWlsbHkvUHJvZ3JhbW1pbmcvb24tdGhlLXNob3VsZGVycy1vZi1naWFudHMvYXBwL3JvdXRlcy9sZWFybi8kdG9waWNJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL3JlaWxseS9Qcm9ncmFtbWluZy9vbi10aGUtc2hvdWxkZXJzLW9mLWdpYW50cy9hcHAvcm91dGVzL2xlYXJuL3Rvb2xiYXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbGVhcm4vaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbG9naW4vaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcGF0aHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvcGF0aHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCIvVXNlcnMvcmVpbGx5L1Byb2dyYW1taW5nL29uLXRoZS1zaG91bGRlcnMtb2YtZ2lhbnRzL2FwcC9yb3V0ZXMvbW90ZC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3BvcHVsYXItdG9waWNzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3B1bGFyLXRvcGljc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb3B1bGFyLXRvcGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWFpbi1jb250ZW50XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tYWluLWNvbnRlbnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWFpbi1jb250ZW50XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9oZWFkZXJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hlYWRlclwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJoZWFkZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3NpZ251cFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2lnbnVwXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNpZ251cFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2lnbnVwL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaWdudXAvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaWdudXBcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9sZWFyblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVhcm5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibGVhcm5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2xlYXJuLyR0b3BpY0lkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi8kdG9waWNJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2xlYXJuXCIsXG4gICAgICBwYXRoOiBcIjp0b3BpY0lkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9sZWFybi90b29sYmFyXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sZWFybi90b29sYmFyXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbGVhcm5cIixcbiAgICAgIHBhdGg6IFwidG9vbGJhclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGVhcm4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xlYXJuL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbGVhcm5cIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGF0aHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BhdGhzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBhdGhzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGF0aHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BhdGhzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvcGF0aHNcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvbW90ZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbW90ZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtb3RkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfVxuICB9OyIsICJpbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGFpbHdpbmQuY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiAndXRmLTgnLFxuICB0aXRsZTogJ1NhcGllbnRpYScsXG4gIHZpZXdwb3J0OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgZGF0YSA9IFtcbiAgeyBuYW1lOiAnU3ZlbHRlJywgaWQ6IDAgfSxcbiAgeyBuYW1lOiAnVGFpbHdpbmQnLCBpZDogMSB9LFxuICB7IG5hbWU6ICdSdXN0JywgaWQ6IDIgfSxcbiAgeyBuYW1lOiAnUHl0aG9uJywgaWQ6IDMgfSxcbiAgeyBuYW1lOiAndXNlRWZmZWN0JywgaWQ6IDQgfSxcbiAgeyBuYW1lOiAnUGFnaW5hdGlvbicsIGlkOiA1IH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3B1bGFyVG9waWNzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtci0xMCB3LTgwXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgc2l6ZSB0ZXh0LTJ4bFwiPlBvcHVsYXIgVG9waWNzPC9zcGFuPlxuICAgICAgPD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlVGl0bGUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXktMC41XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AuLyR7bG93ZXJDYXNlVGl0bGV9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBjdXJzb3ItcG9pbnRlciBweC01IHB5LTIgcm91bmRlZC14bCBob3ZlcjpiZy1zdG9uZS05MDAgaG92ZXI6dGV4dC1hY2NlbnQtcGlua1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1sZyBcIj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL21haW4tY29udGVudC5jc3MnO1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlIH1dO1xufTtcbmV4cG9ydCBjb25zdCBNYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgdGFsa1RvVGhlU2VydmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc2VydmVyY29kZScpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAvLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NlcnZlci1jb2RlJykudGhlbigocmVzKSA9PiB7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9ybSA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0WzBdLnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICB9O1xuXG4gIGNvbnN0IExlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy81IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcHQtcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTYgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgXCI+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OlxuICAgICAgICAgICAgICAgICAgJyAwIDAgODBweCByZ2IoMTkyIDIxOSAyNTUgLyAzMCUpLCAwIDAgMzJweCByZ2IoNjUgMTIwIDI1NSAvIDE1JSknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LVs0cmVtXSBsZWFkaW5nLVs0LjVyZW1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hhcmVkIGtub3dsZWRnZSA8YnIgLz4gZnJvbSB0aGUgdG9wIG1pbmRzIGluIHRoZSBwcm9ncmFtbWluZ1xuICAgICAgICAgICAgICBpbmR1c3RyeVxuICAgICAgICAgICAgICA8YnIgLz4gLSBhbGwgZm9yIGZyZWUhXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtM3hsICBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LTcvMTEgbXktNiAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtbGFyZ2VyIGxlYWRpbmctN1wiPlxuICAgICAgICAgICAgICBXaGV0aGVyIGEgYmVnaW5uZXIsIGxlYXJuaW5nIHRvIGNvZGUsIG9yIGEgc2Vhc29uZWQgdmV0ZXJhbi4gVGFrZVxuICAgICAgICAgICAgICBhIHRvdXIgYmVsb3cgdG8gZ2V0IHN0YXJ0ZWQhXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcGItcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGZsZXggYmctYWNjZW50LXBpbmsgcHktNCBweC0xNiByb3VuZGVkLWxnIHRleHQtbGcgYm9yZGVyLTQgb3BhY2l0eS05MCBib3JkZXItdHJhbnNwYXJlbnQgZm9udC1ib2xkIGZvY3VzLXdpdGhpbjpib3JkZXItNCBmb2N1cy13aXRoaW46Ym9yZGVyLXdoaXRlIGZvY3VzLXdpdGhpbjpvcGFjaXR5LTEwMCAgaG92ZXI6Ym9yZGVyLTQgaG92ZXI6Ym9yZGVyLXdoaXRlIGhvdmVyOm9wYWNpdHktMTAwICAgXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2FzeW5jICgpID0+IHRhbGtUb1RoZVNlcnZlcigpfT5UYWtlIGEgVG91cjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDb250YWluZXIgPSAoeyB0ZXh0IH06IGFueSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17YC4vbGVhcm4vJHt0ZXh0fWB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIFxuICAgICAgICByZWxhdGl2ZSBtYi00IG1yLTQgYmxvY2sgaC1hdXRvIHctYXV0byBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgcHgtNlxuICAgICAgICBweS0zIHRyYW5zaXRpb24gdGV4dC1wcmltYXJ5IGJnLXNlY29uZGFyeSBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgXG4gICAgICAgIGJnLVsjNzE3MTcxNTRdIGhvdmVyOmJyaWdodG5lc3MtMTUwIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1hY2NlbnQtcGlua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IENob29zZUFUb3BpYyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHAtOFwiPk9yIGNob29zZSBhIHRvcGljPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgLW1iLTQgLW1yLTQgZmxleCBmbGV4LXdyYXAgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlbWl4XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQ1NTXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIk5leHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiVGVzdGluZ1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKZXN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkFDSURcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0yLzUgcHgtMTZcIj5cbiAgICAgICAgPFNlYXJjaCBoYW5kbGVGb3JtPXtoYW5kbGVGb3JtfSAvPlxuICAgICAgICA8Q2hvb3NlQVRvcGljIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgcHktOCBweC02IGxnOnB4LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPExlZnRDb250ZW50IC8+XG4gICAgICA8UmlnaHRDb250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iLCAiaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGhhbmRsZUZvcm06IEZ1bmN0aW9uO1xuICBzaXplOiBzdHJpbmc7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goeyBoYW5kbGVGb3JtLCBzaXplID0gJ2xhcmdlJyB9OiBJUHJvcHMpIHtcbiAgY29uc3Qgc2VhcmNoUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBsYWJlbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgLy8gaGFuZGxlIHdoYXQgaGFwcGVucyBvbiBrZXkgcHJlc3NcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSAmJiBldmVudC5rZXkgPT09ICdrJykge1xuICAgICAgaWYgKHNlYXJjaFJlZi5jdXJyZW50ICE9PSBudWxsICYmIGxhYmVsUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgc2VhcmNoUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgbGFiZWxSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZUtleVByZXNzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1haW4tc2VhcmNoIGZsZXggIHJlbGF0aXZlYH0+XG4gICAgICA8Zm9ybVxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4ICR7XG4gICAgICAgICAgc2l6ZSA9PT0gJ2xhcmdlJyA/ICd3LWZ1bGwnIDogc2l6ZSA9PT0gJ21lZGl1bScgPyAndy0zLzQnIDogJ3ctMS8yJ1xuICAgICAgICB9YH1cbiAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVGb3JtKGUpfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtsYWJlbFJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4XG4gICAgICAgICAgICAgc206ZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdCBzcGFjZS14LTMgcHgtNCBzaGFkb3ctc20gcm91bmRlZC1sZyB0ZXh0LXNsYXRlLTgwMCBkYXJrOnJpbmctMCBkYXJrOnRleHQtc2xhdGUtODAwIGRhcms6aGlnaGxpZ2h0LXdoaXRlLzUgIFxuICAgICAgICAgICAgICB6LTUwIGJvcmRlci00IGJvcmRlci13aGl0ZSBiZy13aGl0ZSBmb2N1cy13aXRoaW46Ym9yZGVyLTQgZm9jdXMtd2l0aGluOmJvcmRlci1zb2xpZCBmb2N1cy13aXRoaW46Ym9yZGVyLWFjY2VudC1ncmVlblxuICAgICAgICAgICAgICAke3NpemUgPT09ICdsYXJnZScgPyAnaC0xNicgOiBzaXplID09PSAnbWVkaXVtJyA/ICdoLTEyJyA6ICdoLTgnfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgei0xMDBgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cdUQ4M0RcdUREMEQ8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3NlYXJjaFJlZn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgdG9waWNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogJ25vbmUnIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdy1mdWxsIGJnLXRyYW5zcGFyZW50IGJvcmRlcjpbbm9uZV0gZm9jdXM6W291dGxpbmU6IDAsIGJvcmRlcjogbm9uZV0gZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8a2JkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNhbnMgZm9udC1zZW1pYm9sZCBkYXJrOnRleHQtc2xhdGUtNTAwXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGV4dC14bFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhYmJyXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ29tbWFuZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXVuZGVybGluZSB0ZXh0LXNsYXRlLTMwMCBkYXJrOnRleHQtc2xhdGUtNTAwXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRleHQteGxcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgXHUyMzE4XG4gICAgICAgICAgICA8L2FiYnI+XG4gICAgICAgICAgICBLXG4gICAgICAgICAgPC9rYmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvaGVhZGVyLmNzcyc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGUgfV07XG59O1xuXG5jb25zdCBMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHNwYWNlLXgtMSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgPExpbmsgdG89eycvJ30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCAgXCI+U2FwaWVudGlhPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGFuZ3VhZ2VTZWxlY3RvciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBtbC0yIHNtOm1sLTQgXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMS41IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZS82MCAgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCAgZm9jdXMtd2l0aGluOjpiZy1zbGF0ZS01MC81IGZvY3VzLXdpdGhpbjo6Ym9yZGVyLXdoaXRlIGhvdmVyOmJnLXNsYXRlLTUwLzUgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1sYW5ndWFnZSBoLTYgdy02IHN0cm9rZS13aGl0ZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNCA1aDdcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNOSAzdjJjMCA0LjQxOCAtMi4yMzkgOCAtNSA4XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUgOWMtLjAwMyAyLjE0NCAyLjk1MiAzLjkwOCA2LjcgNFwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMiAyMGw0IC05bDQgOVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xOS4xIDE4aC02LjJcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4+RW5nbGlzaDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHlwZSBOYXZFbGVtZW50UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IEdpdGh1YiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBteC0yIHNtOm14LTQgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JlaWxseWpvZG9ubmVsbC9zYXBpZW50aWFcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXMtd2l0aGluOm9wYWNpdHktMTAwIG9wYWNpdHktODBcIlxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9eyczMHB4J31cbiAgICAgICAgICBoZWlnaHQ9eyczMHB4J31cbiAgICAgICAgICBjbGFzc05hbWU9XCIgZmlsbC1wcmltYXJ5LXRleHQgXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTY0IDUuMTAzYy0zMy4zNDcgMC02MC4zODggMjcuMDM1LTYwLjM4OCA2MC4zODggMCAyNi42ODIgMTcuMzAzIDQ5LjMxNyA0MS4yOTcgNTcuMzAzIDMuMDE3LjU2IDQuMTI1LTEuMzEgNC4xMjUtMi45MDUgMC0xLjQ0LS4wNTYtNi4xOTctLjA4Mi0xMS4yNDMtMTYuOCAzLjY1My0yMC4zNDUtNy4xMjUtMjAuMzQ1LTcuMTI1LTIuNzQ3LTYuOTgtNi43MDUtOC44MzYtNi43MDUtOC44MzYtNS40OC0zLjc0OC40MTMtMy42Ny40MTMtMy42NyA2LjA2My40MjUgOS4yNTcgNi4yMjMgOS4yNTcgNi4yMjMgNS4zODYgOS4yMyAxNC4xMjcgNi41NjIgMTcuNTczIDUuMDIuNTQyLTMuOTAzIDIuMTA3LTYuNTY4IDMuODM0LTguMDc2LTEzLjQxMy0xLjUyNS0yNy41MTQtNi43MDQtMjcuNTE0LTI5Ljg0MyAwLTYuNTkzIDIuMzYtMTEuOTggNi4yMjMtMTYuMjEtLjYyOC0xLjUyLTIuNjk1LTcuNjYyLjU4NC0xNS45OCAwIDAgNS4wNy0xLjYyMyAxNi42MSA2LjE5QzUzLjcgMzUgNTguODY3IDM0LjMyNyA2NCAzNC4zMDRjNS4xMy4wMjMgMTAuMy42OTQgMTUuMTI3IDIuMDMzIDExLjUyNi03LjgxMyAxNi41OS02LjE5IDE2LjU5LTYuMTkgMy4yODcgOC4zMTcgMS4yMiAxNC40Ni41OTMgMTUuOTggMy44NzIgNC4yMyA2LjIxNSA5LjYxNyA2LjIxNSAxNi4yMSAwIDIzLjE5NC0xNC4xMjcgMjguMy0yNy41NzQgMjkuNzk2IDIuMTY3IDEuODc0IDQuMDk3IDUuNTUgNC4wOTcgMTEuMTgzIDAgOC4wOC0uMDcgMTQuNTgzLS4wNyAxNi41NzIgMCAxLjYwNyAxLjA4OCAzLjQ5IDQuMTQ4IDIuODk3IDIzLjk4LTcuOTk0IDQxLjI2My0zMC42MjIgNDEuMjYzLTU3LjI5NEMxMjQuMzg4IDMyLjE0IDk3LjM1IDUuMTA0IDY0IDUuMTA0elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yNi40ODQgOTEuODA2Yy0uMTMzLjMtLjYwNS4zOS0xLjAzNS4xODUtLjQ0LS4xOTYtLjY4NS0uNjA1LS41NDMtLjkwNi4xMy0uMzEuNjAzLS4zOTUgMS4wNC0uMTg4LjQ0LjE5Ny42OS42MS41MzcuOTF6bTIuNDQ2IDIuNzI5Yy0uMjg3LjI2Ny0uODUuMTQzLTEuMjMyLS4yOC0uMzk2LS40Mi0uNDctLjk4My0uMTc3LTEuMjU0LjI5OC0uMjY2Ljg0NC0uMTQgMS4yNC4yOC4zOTQuNDI2LjQ3Mi45ODQuMTcgMS4yNTV6TTMxLjMxMiA5OC4wMTJjLS4zNy4yNTgtLjk3Ni4wMTctMS4zNS0uNTItLjM3LS41MzgtLjM3LTEuMTgzLjAxLTEuNDQuMzczLS4yNTguOTctLjAyNSAxLjM1LjUwNy4zNjguNTQ1LjM2OCAxLjE5LS4wMSAxLjQ1MnptMy4yNjEgMy4zNjFjLS4zMy4zNjUtMS4wMzYuMjY3LTEuNTUyLS4yMy0uNTI3LS40ODctLjY3NC0xLjE4LS4zNDMtMS41NDQuMzM2LS4zNjYgMS4wNDUtLjI2NCAxLjU2NC4yMy41MjcuNDg2LjY4NiAxLjE4LjMzMyAxLjU0M3ptNC41IDEuOTUxYy0uMTQ3LjQ3My0uODI1LjY4OC0xLjUxLjQ4Ni0uNjgzLS4yMDctMS4xMy0uNzYtLjk5LTEuMjM4LjE0LS40NzcuODIzLS43IDEuNTEyLS40ODUuNjgzLjIwNiAxLjEzLjc1Ni45ODggMS4yMzd6bTQuOTQzLjM2MWMuMDE3LjQ5OC0uNTYzLjkxLTEuMjguOTItLjcyMy4wMTctMS4zMDgtLjM4Ny0xLjMxNS0uODc3IDAtLjUwMy41NjgtLjkxIDEuMjktLjkyNC43MTctLjAxMyAxLjMwNi4zODcgMS4zMDYuODh6bTQuNTk4LS43ODJjLjA4Ni40ODUtLjQxMy45ODQtMS4xMjYgMS4xMTctLjcuMTMtMS4zNS0uMTcyLTEuNDQtLjY1My0uMDg2LS40OTguNDIyLS45OTcgMS4xMjItMS4xMjYuNzE0LS4xMjMgMS4zNTQuMTcgMS40NDQuNjYzem0wIDBcIj48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJUb3BpY3NcIiBsb2NhdGlvbj1cIi9sZWFyblwiIC8+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIlBhdGhzXCIgbG9jYXRpb249XCIvcGF0aHNcIiAvPlxuICAgICAgPE5hdmlnYXRpb25FbGVtZW50IG5hbWU9XCJMb2dpblwiIGxvY2F0aW9uPVwiL2xvZ2luXCIgLz5cbiAgICAgIDxHaXRodWIgLz5cbiAgICAgIDxMYW5ndWFnZVNlbGVjdG9yIC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uRWxlbWVudCA9ICh7IG5hbWUsIGxvY2F0aW9uIH06IE5hdkVsZW1lbnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBjbGFzc05hbWU9XCIgbXgtMiBzbTpteC00IG9wYWNpdHktODAgaG92ZXI6b3BhY2l0eS0xMDAgZm9udC1zZW1pYm9sZCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCJcbiAgICAgIGhyZWY9e2xvY2F0aW9ufVxuICAgID5cbiAgICAgIHtuYW1lfVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJweC02IGxnOnB4LTEyIHB5LTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgaGVhZGVyICBiZy1ibGFja1wiPlxuICAgICAgPExvZ28gLz5cblxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBNb3RkIGZyb20gJy4vbW90ZCc7XG5pbXBvcnQgeyBsaW5rcyBhcyBtYWluQ29udGVudExpbmtzIH0gZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xuaW1wb3J0IHsgSGVhZGVyLCBsaW5rcyBhcyBoZWFkZXJMaW5rcyB9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICAuLi5oZWFkZXJMaW5rcygpLFxuICAuLi5tYWluQ29udGVudExpbmtzKCksXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL21haW4tY29udGVudC5jc3MnO1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9zZWFyY2gnO1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlIH1dO1xufTtcbmV4cG9ydCBjb25zdCBNYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgdGFsa1RvVGhlU2VydmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc2VydmVyY29kZScpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAvLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NlcnZlci1jb2RlJykudGhlbigocmVzKSA9PiB7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9ybSA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0WzBdLnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICB9O1xuXG4gIGNvbnN0IExlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy81IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcHQtcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTYgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgXCI+XG4gICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OlxuICAgICAgICAgICAgICAgICAgJyAwIDAgODBweCByZ2IoMTkyIDIxOSAyNTUgLyAzMCUpLCAwIDAgMzJweCByZ2IoNjUgMTIwIDI1NSAvIDE1JSknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LVs0cmVtXSBsZWFkaW5nLVs0LjVyZW1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hhcmVkIGtub3dsZWRnZSA8YnIgLz4gZnJvbSB0aGUgdG9wIG1pbmRzIGluIHRoZSBwcm9ncmFtbWluZ1xuICAgICAgICAgICAgICBpbmR1c3RyeVxuICAgICAgICAgICAgICA8YnIgLz4gLSBhbGwgZm9yIGZyZWUhXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtM3hsICBwdC1weS0xMiBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICB3LTcvMTEgbXktNiAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtbGFyZ2VyIGxlYWRpbmctN1wiPlxuICAgICAgICAgICAgICBXaGV0aGVyIGEgYmVnaW5uZXIsIGxlYXJuaW5nIHRvIGNvZGUsIG9yIGEgc2Vhc29uZWQgdmV0ZXJhbi4gVGFrZVxuICAgICAgICAgICAgICBhIHRvdXIgYmVsb3cgdG8gZ2V0IHN0YXJ0ZWQhXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgcGItcHktMTIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciAgdy1mdWxsIG15LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGZsZXggYmctYWNjZW50LXBpbmsgcHktNCBweC0xNiByb3VuZGVkLWxnIHRleHQtbGcgYm9yZGVyLTQgb3BhY2l0eS05MCBib3JkZXItdHJhbnNwYXJlbnQgZm9udC1ib2xkIGZvY3VzLXdpdGhpbjpib3JkZXItNCBmb2N1cy13aXRoaW46Ym9yZGVyLXdoaXRlIGZvY3VzLXdpdGhpbjpvcGFjaXR5LTEwMCAgaG92ZXI6Ym9yZGVyLTQgaG92ZXI6Ym9yZGVyLXdoaXRlIGhvdmVyOm9wYWNpdHktMTAwICAgXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2FzeW5jICgpID0+IHRhbGtUb1RoZVNlcnZlcigpfT5UYWtlIGEgVG91cjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9waWNDb250YWluZXIgPSAoeyB0ZXh0IH06IGFueSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17YC4vbGVhcm4vJHt0ZXh0fWB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIFxuICAgICAgICByZWxhdGl2ZSBtYi00IG1yLTQgYmxvY2sgaC1hdXRvIHctYXV0byBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgcHgtNlxuICAgICAgICBweS0zIHRyYW5zaXRpb24gdGV4dC1wcmltYXJ5IGJnLXNlY29uZGFyeSBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgXG4gICAgICAgIGJnLVsjNzE3MTcxNTRdIGhvdmVyOmJyaWdodG5lc3MtMTUwIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1hY2NlbnQtcGlua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IENob29zZUFUb3BpYyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHAtOFwiPk9yIGNob29zZSBhIHRvcGljPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGwgLW1iLTQgLW1yLTQgZmxleCBmbGV4LXdyYXAgbGc6Y29sLXNwYW4tMTBcIj5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlYWN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIlJlbWl4XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkphdmFTY3JpcHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiQ1NTXCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIk5leHRcIiAvPlxuICAgICAgICAgIDxUb3BpY0NvbnRhaW5lciB0ZXh0PVwiVGVzdGluZ1wiIC8+XG4gICAgICAgICAgPFRvcGljQ29udGFpbmVyIHRleHQ9XCJKZXN0XCIgLz5cbiAgICAgICAgICA8VG9waWNDb250YWluZXIgdGV4dD1cIkFDSURcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgUmlnaHRDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0yLzUgcHgtMTZcIj5cbiAgICAgICAgPFNlYXJjaCBoYW5kbGVGb3JtPXtoYW5kbGVGb3JtfSAvPlxuICAgICAgICA8Q2hvb3NlQVRvcGljIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQgcHktOCBweC02IGxnOnB4LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPExlZnRDb250ZW50IC8+XG4gICAgICA8UmlnaHRDb250ZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7XG4iLCAiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZSB9XTtcbn07XG5cbmNvbnN0IExvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgc3BhY2UteC0xIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICA8TGluayB0bz17Jy8nfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkICBcIj5TYXBpZW50aWE8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMYW5ndWFnZVNlbGVjdG9yID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIG1sLTIgc206bWwtNCBcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0xLjUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlLzYwICByb3VuZGVkLW1kIGRyb3Atc2hhZG93LW1kICBmb2N1cy13aXRoaW46OmJnLXNsYXRlLTUwLzUgZm9jdXMtd2l0aGluOjpib3JkZXItd2hpdGUgaG92ZXI6Ymctc2xhdGUtNTAvNSBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWxhbmd1YWdlIGgtNiB3LTYgc3Ryb2tlLXdoaXRlXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk00IDVoN1wiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk05IDN2MmMwIDQuNDE4IC0yLjIzOSA4IC01IDhcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNSA5Yy0uMDAzIDIuMTQ0IDIuOTUyIDMuOTA4IDYuNyA0XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEyIDIwbDQgLTlsNCA5XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE5LjEgMThoLTYuMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3Bhbj5FbmdsaXNoPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIE5hdkVsZW1lbnRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufTtcblxuY29uc3QgR2l0aHViID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIG14LTIgc206bXgtNCBvcGFjaXR5LTgwIGhvdmVyOm9wYWNpdHktMTAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVpbGx5am9kb25uZWxsL3NhcGllbnRpYVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb2N1cy13aXRoaW46b3BhY2l0eS0xMDAgb3BhY2l0eS04MFwiXG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD17JzMwcHgnfVxuICAgICAgICAgIGhlaWdodD17JzMwcHgnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBmaWxsLXByaW1hcnktdGV4dCBcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNNjQgNS4xMDNjLTMzLjM0NyAwLTYwLjM4OCAyNy4wMzUtNjAuMzg4IDYwLjM4OCAwIDI2LjY4MiAxNy4zMDMgNDkuMzE3IDQxLjI5NyA1Ny4zMDMgMy4wMTcuNTYgNC4xMjUtMS4zMSA0LjEyNS0yLjkwNSAwLTEuNDQtLjA1Ni02LjE5Ny0uMDgyLTExLjI0My0xNi44IDMuNjUzLTIwLjM0NS03LjEyNS0yMC4zNDUtNy4xMjUtMi43NDctNi45OC02LjcwNS04LjgzNi02LjcwNS04LjgzNi01LjQ4LTMuNzQ4LjQxMy0zLjY3LjQxMy0zLjY3IDYuMDYzLjQyNSA5LjI1NyA2LjIyMyA5LjI1NyA2LjIyMyA1LjM4NiA5LjIzIDE0LjEyNyA2LjU2MiAxNy41NzMgNS4wMi41NDItMy45MDMgMi4xMDctNi41NjggMy44MzQtOC4wNzYtMTMuNDEzLTEuNTI1LTI3LjUxNC02LjcwNC0yNy41MTQtMjkuODQzIDAtNi41OTMgMi4zNi0xMS45OCA2LjIyMy0xNi4yMS0uNjI4LTEuNTItMi42OTUtNy42NjIuNTg0LTE1Ljk4IDAgMCA1LjA3LTEuNjIzIDE2LjYxIDYuMTlDNTMuNyAzNSA1OC44NjcgMzQuMzI3IDY0IDM0LjMwNGM1LjEzLjAyMyAxMC4zLjY5NCAxNS4xMjcgMi4wMzMgMTEuNTI2LTcuODEzIDE2LjU5LTYuMTkgMTYuNTktNi4xOSAzLjI4NyA4LjMxNyAxLjIyIDE0LjQ2LjU5MyAxNS45OCAzLjg3MiA0LjIzIDYuMjE1IDkuNjE3IDYuMjE1IDE2LjIxIDAgMjMuMTk0LTE0LjEyNyAyOC4zLTI3LjU3NCAyOS43OTYgMi4xNjcgMS44NzQgNC4wOTcgNS41NSA0LjA5NyAxMS4xODMgMCA4LjA4LS4wNyAxNC41ODMtLjA3IDE2LjU3MiAwIDEuNjA3IDEuMDg4IDMuNDkgNC4xNDggMi44OTcgMjMuOTgtNy45OTQgNDEuMjYzLTMwLjYyMiA0MS4yNjMtNTcuMjk0QzEyNC4zODggMzIuMTQgOTcuMzUgNS4xMDQgNjQgNS4xMDR6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI2LjQ4NCA5MS44MDZjLS4xMzMuMy0uNjA1LjM5LTEuMDM1LjE4NS0uNDQtLjE5Ni0uNjg1LS42MDUtLjU0My0uOTA2LjEzLS4zMS42MDMtLjM5NSAxLjA0LS4xODguNDQuMTk3LjY5LjYxLjUzNy45MXptMi40NDYgMi43MjljLS4yODcuMjY3LS44NS4xNDMtMS4yMzItLjI4LS4zOTYtLjQyLS40Ny0uOTgzLS4xNzctMS4yNTQuMjk4LS4yNjYuODQ0LS4xNCAxLjI0LjI4LjM5NC40MjYuNDcyLjk4NC4xNyAxLjI1NXpNMzEuMzEyIDk4LjAxMmMtLjM3LjI1OC0uOTc2LjAxNy0xLjM1LS41Mi0uMzctLjUzOC0uMzctMS4xODMuMDEtMS40NC4zNzMtLjI1OC45Ny0uMDI1IDEuMzUuNTA3LjM2OC41NDUuMzY4IDEuMTktLjAxIDEuNDUyem0zLjI2MSAzLjM2MWMtLjMzLjM2NS0xLjAzNi4yNjctMS41NTItLjIzLS41MjctLjQ4Ny0uNjc0LTEuMTgtLjM0My0xLjU0NC4zMzYtLjM2NiAxLjA0NS0uMjY0IDEuNTY0LjIzLjUyNy40ODYuNjg2IDEuMTguMzMzIDEuNTQzem00LjUgMS45NTFjLS4xNDcuNDczLS44MjUuNjg4LTEuNTEuNDg2LS42ODMtLjIwNy0xLjEzLS43Ni0uOTktMS4yMzguMTQtLjQ3Ny44MjMtLjcgMS41MTItLjQ4NS42ODMuMjA2IDEuMTMuNzU2Ljk4OCAxLjIzN3ptNC45NDMuMzYxYy4wMTcuNDk4LS41NjMuOTEtMS4yOC45Mi0uNzIzLjAxNy0xLjMwOC0uMzg3LTEuMzE1LS44NzcgMC0uNTAzLjU2OC0uOTEgMS4yOS0uOTI0LjcxNy0uMDEzIDEuMzA2LjM4NyAxLjMwNi44OHptNC41OTgtLjc4MmMuMDg2LjQ4NS0uNDEzLjk4NC0xLjEyNiAxLjExNy0uNy4xMy0xLjM1LS4xNzItMS40NC0uNjUzLS4wODYtLjQ5OC40MjItLjk5NyAxLjEyMi0xLjEyNi43MTQtLjEyMyAxLjM1NC4xNyAxLjQ0NC42NjN6bTAgMFwiPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIlRvcGljc1wiIGxvY2F0aW9uPVwiL2xlYXJuXCIgLz5cbiAgICAgIDxOYXZpZ2F0aW9uRWxlbWVudCBuYW1lPVwiUGF0aHNcIiBsb2NhdGlvbj1cIi9wYXRoc1wiIC8+XG4gICAgICA8TmF2aWdhdGlvbkVsZW1lbnQgbmFtZT1cIkxvZ2luXCIgbG9jYXRpb249XCIvbG9naW5cIiAvPlxuICAgICAgPEdpdGh1YiAvPlxuICAgICAgPExhbmd1YWdlU2VsZWN0b3IgLz5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdmlnYXRpb25FbGVtZW50ID0gKHsgbmFtZSwgbG9jYXRpb24gfTogTmF2RWxlbWVudFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGNsYXNzTmFtZT1cIiBteC0yIHNtOm14LTQgb3BhY2l0eS04MCBob3ZlcjpvcGFjaXR5LTEwMCBmb250LXNlbWlib2xkIGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgaHJlZj17bG9jYXRpb259XG4gICAgPlxuICAgICAge25hbWV9XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInB4LTYgbGc6cHgtMTIgcHktNiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBoZWFkZXIgIGJnLWJsYWNrXCI+XG4gICAgICA8TG9nbyAvPlxuXG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBtLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTEyIFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNlwiPlNpZ24gVXA8L3NwYW4+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTgwIGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LXhsIG1iLTFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW5hLi4gRGFydGggVmFkZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBweC0yIG1iLTYgcHktNCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItd2hpdGUgIGJnLWJsYWNrIHJvdW5kZWQtbGcgaG92ZXI6c2hhZG93LTJ4bCBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy04MCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQteGwgbWItMVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmFkZXJAZGVhdGhzdGFyLnNpdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHB4LTIgbWItNiBweS00IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSAgYmctYmxhY2sgcm91bmRlZC1sZyBob3ZlcjpzaGFkb3ctMnhsIFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTgwIGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC14bCBtYi0xXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFuU2hvdEZpcnN0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgcHgtMiBweS00IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSAgYmctYmxhY2sgcm91bmRlZC1sZyBob3ZlcjpzaGFkb3ctMnhsIFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS04IGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGFjY2VudC1hY2NlbnQtcGlua1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJhZ3JlZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtbC00IHRleHQtbGdcIiBodG1sRm9yPVwiYWdyZWVcIj5cbiAgICAgICAgICAgICAgSSBhZ3JlZSB0byB0aGV7JyAnfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWFjY2VudC1waW5rXCI+VGVybXM8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC03IGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciAgcHktNCBweC04IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgYmctYWNjZW50LXBpbmsgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItd2hpdGUgXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgXCI+Q3JlYXRlIEFjY291bnQ8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBmbGV4IGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSB0ZXh0LWFjY2VudC1waW5rIGN1cnNvci1wb2ludGVyXCI+TG9naW48L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgSGVhZGVyLCBsaW5rcyBhcyBoZWFkZXJMaW5rcyB9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBNb3RkIGZyb20gJy4vbW90ZCc7XG5pbXBvcnQgeyBNYWluQ29udGVudCwgbGlua3MgYXMgbWFpbkNvbnRlbnRMaW5rcyB9IGZyb20gJy4vbWFpbi1jb250ZW50JztcbmltcG9ydCB7IE91dGxldCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG4gIC4uLmhlYWRlckxpbmtzKCksXG4gIC4uLm1haW5Db250ZW50TGlua3MoKSxcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjQnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TW90ZCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgICA8TWFpbkNvbnRlbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgY29uc3QgTW90ZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1kYXJrLW1vZGUtYmcgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBweC0yMCAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1hY2NlbnQtcGluayB3LWZ1bGwgdGV4dC1jZW50ZXIgcm91bmRlZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIFdlIHN0YW5kIHdpdGggVWtyYWluZSBcdUQ4M0NcdURERkFcdUQ4M0NcdURERTZcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yYXpvbWZvcnVrcmFpbmUub3JnL1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgY3Vyc29yLXBvaW50ZXIgZm9udC1ib2xkIHRleHQtcHJpbWFyeS10ZXh0IGZvY3VzLXdpdGhpbjp0ZXh0LWFjY2VudC1waW5rIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb25hdGUgaGVyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb3RkO1xuIiwgImltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7IE91dGxldCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGxpbmtzIGFzIG1haW5Db250ZW50TGlua3MgfSBmcm9tICcuL21haW4tY29udGVudCc7XG5pbXBvcnQgUG9wdWxhclRvcGljcyBmcm9tICcuL3BvcHVsYXItdG9waWNzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnfi9jb21wb25lbnRzL3NlYXJjaCc7XG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG4gIC4uLm1haW5Db250ZW50TGlua3MoKSxcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbnRlbnQtY2VudGVyIHB4LTYgbGc6cHgtMTQgbXktMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8U2VhcmNoIHNpemU9XCJtZWRpdW1cIiBoYW5kbGVGb3JtPXsoZTogYW55KSA9PiBjb25zb2xlLmxvZyhlKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNFwiPlxuICAgICAgICAgICAgPFBvcHVsYXJUb3BpY3MgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cbiAgICAgICAgICA8UG9wdWxhclRvcGljcyAvPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgbmFtZTogJ1N2ZWx0ZScsIGlkOiAwIH0sXG4gIHsgbmFtZTogJ1RhaWx3aW5kJywgaWQ6IDEgfSxcbiAgeyBuYW1lOiAnUnVzdCcsIGlkOiAyIH0sXG4gIHsgbmFtZTogJ1B5dGhvbicsIGlkOiAzIH0sXG4gIHsgbmFtZTogJ3VzZUVmZmVjdCcsIGlkOiA0IH0sXG4gIHsgbmFtZTogJ1BhZ2luYXRpb24nLCBpZDogNSB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9wdWxhclRvcGljcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXItMTAgdy04MFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHNpemUgdGV4dC0yeGxcIj5Qb3B1bGFyIFRvcGljczwvc3Bhbj5cbiAgICAgIDw+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZVRpdGxlID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG15LTAuNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgLi8ke2xvd2VyQ2FzZVRpdGxlfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggY3Vyc29yLXBvaW50ZXIgcHgtNSBweS0yIHJvdW5kZWQteGwgaG92ZXI6Ymctc3RvbmUtOTAwIGhvdmVyOnRleHQtYWNjZW50LXBpbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtbGcgXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU291bmQgZnJvbSAndXNlLXNvdW5kJztcbmltcG9ydCBwbG9wIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9zb3VuZHMvcGxvcC10cmltbWVkLm1wMyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdG9waWMgPSB7IG5hbWU6IHBhcmFtcy50b3BpY0lkIH07XG4gIHJldHVybiBqc29uKHRvcGljKTtcbn07XG5cbmludGVyZmFjZSBBcnRpY2xlRGF0YSBleHRlbmRzIGJhc2VBcnRpY2xlIHtcbiAgaWQ6IG51bWJlcjtcbn1cbmludGVyZmFjZSBiYXNlQXJ0aWNsZSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcjogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG4gIHVwdm90ZXM6IG51bWJlcjtcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIHR3aXR0ZXJIYW5kbGU/OiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgQXJ0aWNsZSBleHRlbmRzIGJhc2VBcnRpY2xlIHtcbiAgcmFuaz86IG51bWJlcjtcbiAgbXV0ZTogYm9vbGVhbjtcbn1cblxuY29uc3QgZGF0YTogQXJyYXk8QXJ0aWNsZURhdGE+ID0gW1xuICB7XG4gICAgdGl0bGU6ICdSZWFjdCBGdW5kYW1lbnRhbHM6IFByb3BzIHZzIFN0YXRlJyxcbiAgICBhdXRob3I6ICdLZW50IEMuIERvZGRzJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9rZW50Y2RvZGRzLmNvbS9ibG9nL3Byb3BzLXZzLXN0YXRlJyxcbiAgICBpZDogMCxcbiAgICB1cHZvdGVzOiA2OSxcbiAgICB0d2l0dGVySGFuZGxlOiAna2VudGNkb2RkcycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1doZW4gdG8gdXNlTWVtbyBhbmQgdXNlQ2FsbGJhY2snLFxuICAgIGF1dGhvcjogJ0tlbnQgQy4gRG9kZHMnLFxuICAgIGxpbms6ICdodHRwczovL2tlbnRjZG9kZHMuY29tL2Jsb2cvdXNlbWVtby1hbmQtdXNlY2FsbGJhY2snLFxuICAgIGlkOiAxLFxuICAgIHVwdm90ZXM6IDQyNixcbiAgICB0d2l0dGVySGFuZGxlOiAna2VudGNkb2RkcycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0hvdyB0byBSZWFjdCBcdTI2OUJcdUZFMEYnLFxuICAgIGF1dGhvcjogJ0tlbnQgQy4gRG9kZHMnLFxuICAgIGxpbms6ICdodHRwczovL2tlbnRjZG9kZHMuY29tL2Jsb2cvaG93LXRvLXJlYWN0JyxcbiAgICBpZDogMixcbiAgICB1cHZvdGVzOiA3ODAsXG4gICAgdHdpdHRlckhhbmRsZTogJ2tlbnRjZG9kZHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIb3cgdG8gdXNlIFJlYWN0IENvbnRleHQgZWZmZWN0aXZlbHknLFxuICAgIGF1dGhvcjogJ0tlbnQgQy4gRG9kZHMnLFxuICAgIGxpbms6ICdodHRwczovL2tlbnRjZG9kZHMuY29tL2Jsb2cvaG93LXRvLXVzZS1yZWFjdC1jb250ZXh0LWVmZmVjdGl2ZWx5JyxcbiAgICBpZDogMyxcbiAgICB1cHZvdGVzOiA4MjAsXG4gICAgdHdpdHRlckhhbmRsZTogJ2tlbnRjZG9kZHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBIENvbXBsZXRlIEd1aWRlIFRvIHVzZUVmZmVjdCcsXG4gICAgYXV0aG9yOiAnRGFuIEFicmFtb3YnLFxuICAgIGxpbms6ICdodHRwczovL292ZXJyZWFjdGVkLmlvL2EtY29tcGxldGUtZ3VpZGUtdG8tdXNlZWZmZWN0LycsXG4gICAgaWQ6IDQsXG4gICAgdXB2b3RlczogNzAzODIsXG4gICAgdHdpdHRlckhhbmRsZTogJ2Rhbl9hYnJhbW92JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUmVhY3QgRnVuZGFtZW50YWxzOiBQcm9wcyB2cyBTdGF0ZScsXG4gICAgYXV0aG9yOiAnS2VudCBDLiBEb2RkcycsXG4gICAgbGluazogJ2h0dHBzOi8va2VudGNkb2Rkcy5jb20vYmxvZy9wcm9wcy12cy1zdGF0ZScsXG4gICAgaWQ6IDUsXG4gICAgdXB2b3RlczogNjk5NDksXG4gICAgdHdpdHRlckhhbmRsZTogJ2tlbnRjZG9kZHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIZXJlcyBhbiB1bmVjY2Vzc2FyaWx5IGxvbmcgdGl0bGUgd2lob3Nhbm9pbmFzZCBvaW5zZGZvaW5zZGYnLFxuICAgIGF1dGhvcjogJ2Fub255bW91cycsXG4gICAgbGluazogJycsXG4gICAgaWQ6IDYsXG4gICAgdXB2b3RlczogNjk0MjAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0V4YWN0bHkgMTAwMCB1cHZvdGVzJyxcbiAgICBhdXRob3I6ICdhbm9ueW1vdXMnLFxuICAgIGxpbms6ICcnLFxuICAgIGlkOiA3LFxuICAgIHVwdm90ZXM6IDEwMDAsXG4gIH0sXG5dO1xuXG5jb25zdCBSZXNvdXJjZUxpbmsgPSAoe1xuICB0aXRsZSxcbiAgYXV0aG9yLFxuICBsaW5rID0gJy8nLFxuICB1cHZvdGVzLFxuICByYW5rLFxuICBpbWFnZSxcbiAgdHdpdHRlckhhbmRsZSxcbiAgbXV0ZSxcbn06IEFydGljbGUpID0+IHtcbiAgY29uc3QgW3Vwdm90ZSwgc2V0VXB2b3RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rvd252b3RlLCBzZXREb3dudm90ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUodXB2b3RlcyA/PyAwKTtcbiAgY29uc3QgW3ZhbGlkTGluaywgc2V0VmFsaWRMaW5rXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xpbmtFcnJvciwgc2V0TGlua0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgdm9sdW1lOiBudW1iZXIgPSBtdXRlID8gMCA6IDAuMjU7XG4gIGNvbnN0IFt1cHZvdGVTb3VuZF0gPSB1c2VTb3VuZChwbG9wLCB7IHNvdW5kRW5hYmxlZDogIW11dGUsIHZvbHVtZTogdm9sdW1lIH0pO1xuICBjb25zdCBbZG93bnZvdGVTb3VuZF0gPSB1c2VTb3VuZChwbG9wLCB7XG4gICAgc291bmRFbmFibGVkOiAhbXV0ZSxcbiAgICBwbGF5YmFja1JhdGU6IDAuNjUsXG4gICAgdm9sdW1lOiB2b2x1bWUsXG4gICAgLy8gYGludGVycnVwdGAgZW5zdXJlcyB0aGF0IGlmIHRoZSBzb3VuZCBzdGFydHMgYWdhaW4gYmVmb3JlIGl0J3NcbiAgICAvLyBlbmRlZCwgaXQgd2lsbCB0cnVuY2F0ZSBpdC4gT3RoZXJ3aXNlLCB0aGUgc291bmQgY2FuIG92ZXJsYXAuXG4gICAgaW50ZXJydXB0OiB0cnVlLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsaW5rLmxlbmd0aCA+IDEwKSB7XG4gICAgICBzZXRWYWxpZExpbmsodHJ1ZSk7XG4gICAgfVxuICB9LCBbbGlua10pO1xuXG4gIGNvbnN0IGhhbmRsZVVwdm90ZSA9ICgpID0+IHtcbiAgICBpZiAoIXVwdm90ZSkge1xuICAgICAgdXB2b3RlU291bmQoKTtcblxuICAgICAgc2V0VXB2b3RlKHRydWUpO1xuICAgICAgZG93bnZvdGUgJiYgc2V0RG93bnZvdGUoZmFsc2UpO1xuXG4gICAgICBpZiAoZG93bnZvdGUpIHtcbiAgICAgICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgKyAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVwdm90ZShmYWxzZSk7XG4gICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dudm90ZSA9ICgpID0+IHtcbiAgICBpZiAoIWRvd252b3RlKSB7XG4gICAgICBkb3dudm90ZVNvdW5kKCk7XG5cbiAgICAgIHNldERvd252b3RlKHRydWUpO1xuICAgICAgdXB2b3RlICYmIHNldFVwdm90ZShmYWxzZSk7XG4gICAgICBpZiAodXB2b3RlKSB7XG4gICAgICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2IC0gMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiAtIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXREb3dudm90ZShmYWxzZSk7XG4gICAgICBzZXRDb3VudCgocHJldikgPT4gcHJldiArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb3JtYXR0ZWROdW1iZXIgPSBJbnRsLk51bWJlckZvcm1hdCgnZW4tdXMnLCB7XG4gICAgbm90YXRpb246ICdjb21wYWN0JyxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEsXG4gIH0pLmZvcm1hdChjb3VudCk7XG5cbiAgY29uc3QgTGlua1RvQXJ0aWNsZSA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xuICAgIHJldHVybiB2YWxpZExpbmsgPyAoXG4gICAgICA8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApIDogKFxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRMaW5rRXJyb3IodHJ1ZSl9PntjaGlsZHJlbn08L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEVycm9yUG9wdXAgPSAoZXJyb3I6IGFueSkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TGlua0Vycm9yKGZhbHNlKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi03MDAgYWJzb2x1dGUgdy0zMCBiZy1ibGFjayBtbC0xMCBtdC00ICR7XG4gICAgICAgICAgZXJyb3IgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCdcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TGlua0Vycm9yKGZhbHNlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBweC0yIHB5LTAuMjUgdGV4dC14bCB0b3AtMCByaWdodC0wIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHhcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LTMwIGJnLWVycm9yLWJnIHRleHQtZXJyb3IgcC0xMCBiZy1hY2NlbnQtZXJyb3ItYmcgdGV4dC1hY2NlbnQtZXJyb3IgIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWNjZW50LWVycm9yIHotMTBcIj5cbiAgICAgICAgICBMaW5rIGlzIGludmFsaWQgXHVEODNEXHVERTE0XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTMwIG15LTggc2hhZG93LWxnIHNoYWRvdy1zdG9uZS05MDAgcm91bmRlZC0yeGwgIGJvcmRlci0yIGJvcmRlci1zb2xpZCAgYm9yZGVyLXN0b25lLTgwMCBweS04ICByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LTEwIG1iLWF1dG8gdGV4dC0zeGxcIj5cbiAgICAgICAgICB7cmFua31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rVG9BcnRpY2xlPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUgZGVjb3JhdGlvbi13aGl0ZSBkZWNvcmF0aW9uLSBob3Zlcjp0ZXh0LWFjY2VudC1waW5rIG1iLTQgdGV4dC0yeGwgbWF4LXctbWQgZm9udC1ib2xkIFwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rVG9BcnRpY2xlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBteS04XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC14bCBcIj57YXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgICAgIHt0d2l0dGVySGFuZGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlcjpiZy1bIzFkYTBmMjU4XSBtbC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vJHt0d2l0dGVySGFuZGxlfWB9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRweCBcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzFEQTFGMlwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyLjIzIDUuOTI0YTguMjEyIDguMjEyIDAgMDEtMi4zNTcuNjQ2IDQuMTE1IDQuMTE1IDAgMDAxLjgwNC0yLjI3IDguMjIxIDguMjIxIDAgMDEtMi42MDYuOTk2IDQuMTAzIDQuMTAzIDAgMDAtNi45OTEgMy43NDIgMTEuNjQ3IDExLjY0NyAwIDAxLTguNDU3LTQuMjg3IDQuMDg3IDQuMDg3IDAgMDAtLjU1NiAyLjA2MyA0LjEgNC4xIDAgMDAxLjgyNSAzLjQxNSA0LjA5IDQuMDkgMCAwMS0xLjg1OS0uNTEzdi4wNTJhNC4xMDQgNC4xMDQgMCAwMDMuMjkyIDQuMDIzIDQuMDk5IDQuMDk5IDAgMDEtMS44NTMuMDcgNC4xMSA0LjExIDAgMDAzLjgzMyAyLjg1IDguMjM2IDguMjM2IDAgMDEtNS4wOTYgMS43NTYgOC4zMyA4LjMzIDAgMDEtLjk3OS0uMDU3IDExLjYxNyAxMS42MTcgMCAwMDYuMjkgMS44NDNjNy41NDcgMCAxMS42NzUtNi4yNTIgMTEuNjc1LTExLjY3NSAwLS4xNzgtLjAwNC0uMzU1LS4wMTItLjUzMWE4LjI5OCA4LjI5OCAwIDAwMi4wNDctMi4xMjN6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtOCAgXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci13aGl0ZSBweC00IHB5LTFcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBob3Zlcjpib3JkZXItYWNjZW50LXBpbmtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIGhvdmVyOmJvcmRlci1hY2NlbnQtcGluayBob3ZlcjpiZy1hY2NlbnQtcGluay1iZ1xuICAgICAgICAgICAgICBob3Zlcjp0ZXh0LWFjY2VudC1waW5rICovfVxuICAgICAgICAgICAgICA8TGlua1RvQXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBSZWFkIEFydGljbGVcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGlua1RvQXJ0aWNsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1sLWF1dG9cIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTMwIGgtMjBcIiBzcmM9e2Ake2ltYWdlID8gaW1hZ2UgOiBXYXZlc31gfSAvPlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS0xIHB4LTQgcm91bmRlZC0yeGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICBtbC1hdXRvXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXB2b3RlfVxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICB1cHZvdGUgPyAnc3Ryb2tlLWdyZWVuLTQwMCcgOiAnc3Ryb2tlLXdoaXRlJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgd2lkdGg9XCI0NFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ0XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiNiAxNSAxMiA5IDE4IDE1XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xIGZvbnQtYm9sZCAke1xuICAgICAgICAgICAgICB1cHZvdGVcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LWdyZWVuLTQwMCdcbiAgICAgICAgICAgICAgICA6IGRvd252b3RlXG4gICAgICAgICAgICAgICAgPyAndGV4dC1yZWQtNTAwJ1xuICAgICAgICAgICAgICAgIDogJ3RleHQtd2hpdGUnXG4gICAgICAgICAgICB9IGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvdW50ID4gOTk5ID8gZm9ybWF0dGVkTnVtYmVyIDogY291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd252b3RlfVxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBkb3dudm90ZSA/ICdzdHJva2UtcmVkLTUwMCcgOiAnc3Ryb2tlLXdoaXRlJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICB3aWR0aD1cIjQ0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjQ0XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCI2IDkgMTIgMTUgMTggOVwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7bGlua0Vycm9yICYmIDxFcnJvclBvcHVwIGVycm9yPXtsaW5rRXJyb3J9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9rZVJvdXRlKCkge1xuICBjb25zdCBbbXV0ZSwgc2V0TXV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvcGljID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCBuYW1lOiBzdHJpbmcgPSB0b3BpYy5uYW1lO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbXV0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlJyk7XG4gICAgY29uc3QgaXNNdXRlZCA9IG11dGUgIT09IG51bGwgJiYgSlNPTi5wYXJzZShtdXRlKTtcbiAgICBzZXRNdXRlKGlzTXV0ZWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlQXVkaW8gPSAoKSA9PiB7XG4gICAgbXV0ZVxuICAgICAgPyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXV0ZScsICdmYWxzZScpXG4gICAgICA6IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXRlJywgJ3RydWUnKTtcblxuICAgIHNldE11dGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNnhsIG1iLTMgY2FwaXRhbGl6ZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRTaGFkb3c6XG4gICAgICAgICAgICAgICdyZ2JhKDE5MiwgMjE5LCAyNTUsIDAuMykgMHB4IDBweCA4MHB4LCByZ2JhKDY1LCAxMjAsIDI1NSwgMC4xNSkgMHB4IDBweCAzMnB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gb25DbGljaz17dG9nZ2xlQXVkaW99IGNsYXNzTmFtZT1cIm1sLTEyIHRleHQtMnhsIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAge211dGUgPyAnXHVEODNEXHVERDA3JyA6ICdcdUQ4M0RcdUREMDgnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIFwiPlxuICAgICAgICB7ZGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS51cHZvdGVzIDwgYi51cHZvdGVzID8gMSA6IC0xKSlcbiAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmFuayA9IGluZGV4ICsgMTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFJlc291cmNlTGlua1xuICAgICAgICAgICAgICAgIG11dGU9e211dGV9XG4gICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICBsaW5rPXtpdGVtLmxpbmt9XG4gICAgICAgICAgICAgICAgdXB2b3Rlcz17aXRlbS51cHZvdGVzfVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICByYW5rPXtyYW5rfVxuICAgICAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGU9e2l0ZW0udHdpdHRlckhhbmRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sYmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTU2IG1yLTEwICB0ZXh0LWJsYWNrIG1sLWF1dG8gcHgtOCBweS0gMTIgcmlnaHQtMjhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdy0yNCBoLTU2IG1yLTEwIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItc3RvbmUtNDAwIHRleHQtYmxhY2sgbWwtYXV0byBweC04IHB5LSAxMiByaWdodC0yOFwiPlxuICAgICAgICBUaGlzIGlzIHRoZSB0b29sYmFyXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFybigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+SGVyZSdzIHNvbWUgZXhhbXBsZSB0b3BpY3M8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBNb3RkIGZyb20gJy4vbW90ZCc7XG5pbXBvcnQgeyBsaW5rcyBhcyBtYWluQ29udGVudExpbmtzIH0gZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xuaW1wb3J0IHsgSGVhZGVyLCBsaW5rcyBhcyBoZWFkZXJMaW5rcyB9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvaW5kZXguY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICAuLi5oZWFkZXJMaW5rcygpLFxuICAuLi5tYWluQ29udGVudExpbmtzKCksXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG0tMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHgtMTIgXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0xMFwiPkxvZ2luPC9zcGFuPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy04MCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQteGwgbWItMVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmFkZXJAZGVhdGhzdGFyLnNpdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHB4LTIgbWItNiBweS00IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSAgYmctYmxhY2sgcm91bmRlZC1sZyBob3ZlcjpzaGFkb3ctMnhsIFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTgwIGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC14bCBtYi0xXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFuU2hvdEZpcnN0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgcHgtMiBweS00IGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci13aGl0ZSAgYmctYmxhY2sgcm91bmRlZC1sZyBob3ZlcjpzaGFkb3ctMnhsIFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBtci1hdXRvIHRleHQtc3RvbmUtMzAwIG15LTEgaG92ZXI6dGV4dC1hY2NlbnQtcGluayBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNyBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgIHB5LTQgcHgtOCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IGJnLWFjY2VudC1waW5rIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXdoaXRlIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TG9naW48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC00IGZsZXggdy1mdWxsIGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/XG4gICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQtYWNjZW50LXBpbmsgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgbGlua3MgYXMgbWFpbkNvbnRlbnRMaW5rcyB9IGZyb20gJy4vbWFpbi1jb250ZW50JztcbmltcG9ydCBQb3B1bGFyVG9waWNzIGZyb20gJy4vcG9wdWxhci10b3BpY3MnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICd+L2NvbXBvbmVudHMvc2VhcmNoJztcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgLi4ubWFpbkNvbnRlbnRMaW5rcygpLFxuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY29udGVudC1jZW50ZXIgcHgtNiBsZzpweC0xNCBteS0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggc2l6ZT1cIm1lZGl1bVwiIGhhbmRsZUZvcm09eyhlOiBhbnkpID0+IGNvbnNvbGUubG9nKGUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00XCI+XG4gICAgICAgICAgICA8UG9wdWxhclRvcGljcyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VzKCkge1xuICByZXR1cm4gPHNwYW4+VGhpcyBpcyB0aGUgUGF0aHMgc2VjdGlvbjwvc3Bhbj47XG59XG4iLCAiZXhwb3J0IGNvbnN0IE1vdGQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZGFyay1tb2RlLWJnIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcHgtMjAgIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItYWNjZW50LXBpbmsgdy1mdWxsIHRleHQtY2VudGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBXZSBzdGFuZCB3aXRoIFVrcmFpbmUgXHVEODNDXHVEREZBXHVEODNDXHVEREU2XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmF6b21mb3J1a3JhaW5lLm9yZy9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC0yIGN1cnNvci1wb2ludGVyIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnktdGV4dCBmb2N1cy13aXRoaW46dGV4dC1hY2NlbnQtcGluayBob3Zlcjp0ZXh0LWFjY2VudC1waW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRG9uYXRlIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW90ZDtcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic2OThiZGVmOScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtQ0tZVVJZUEQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJOWTNSWEw0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSFJQU0dMU04uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Qk83NEZXTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtV1pXWTRDNkYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9oZWFkZXInOnsnaWQnOidyb3V0ZXMvaGVhZGVyJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2hlYWRlcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9oZWFkZXItNkpMNk9YVVEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU83S0VYVjZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC03VTZUTUJDNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstT0xKTVVTNEQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XNUJGTVVSVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVDSVY1UTI3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzdLRVhWNlIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuJzp7J2lkJzoncm91dGVzL2xlYXJuJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xlYXJuJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlYXJuLUlPQlI3SjdBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HTVU3WUo2Ni5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVc1QkZNVVJULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUNJVjVRMjcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PN0tFWFY2Ui5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vJHRvcGljSWQnOnsnaWQnOidyb3V0ZXMvbGVhcm4vJHRvcGljSWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybicsJ3BhdGgnOic6dG9waWNJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi8kdG9waWNJZC1STEY3RTIyMy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGVhcm4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvbGVhcm4vaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9sZWFybicsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sZWFybi9pbmRleC1NM1pNWUlJUi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlYXJuL3Rvb2xiYXInOnsnaWQnOidyb3V0ZXMvbGVhcm4vdG9vbGJhcicsJ3BhcmVudElkJzoncm91dGVzL2xlYXJuJywncGF0aCc6J3Rvb2xiYXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGVhcm4vdG9vbGJhci00T0Y3N0ZGMy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLUY1UEZFRFUzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XNUJGTVVSVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVDSVY1UTI3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzdLRVhWNlIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luL2luZGV4Jzp7J2lkJzoncm91dGVzL2xvZ2luL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvbG9naW4nLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4vaW5kZXgtWEtZRUNFNlguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tYWluLWNvbnRlbnQnOnsnaWQnOidyb3V0ZXMvbWFpbi1jb250ZW50JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21haW4tY29udGVudCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tYWluLWNvbnRlbnQtUkRJRUZRVU4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVDSVY1UTI3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tb3RkJzp7J2lkJzoncm91dGVzL21vdGQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbW90ZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tb3RkLUJLWTVaNFhTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PTEpNVVM0RC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGF0aHMnOnsnaWQnOidyb3V0ZXMvcGF0aHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncGF0aHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGF0aHMtSVBSTVE2SVouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdNVTdZSjY2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVzVCRk1VUlQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FQ0lWNVEyNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU83S0VYVjZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYXRocy9pbmRleCc6eydpZCc6J3JvdXRlcy9wYXRocy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL3BhdGhzJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BhdGhzL2luZGV4LVdYRURRSEFILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9wdWxhci10b3BpY3MnOnsnaWQnOidyb3V0ZXMvcG9wdWxhci10b3BpY3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9wdWxhci10b3BpY3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9wdWxhci10b3BpY3MtUzZZNEVVVTUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdNVTdZSjY2LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaWdudXAnOnsnaWQnOidyb3V0ZXMvc2lnbnVwJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NpZ251cCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaWdudXAtVDdEUk5DUUwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVc1QkZNVVJULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUNJVjVRMjcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PN0tFWFY2Ui5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2lnbnVwL2luZGV4Jzp7J2lkJzoncm91dGVzL3NpZ251cC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL3NpZ251cCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaWdudXAvaW5kZXgtMkMzR0dUUEcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNjk4QkRFRjkuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxZQUF1Qjs7O0FDRHZCLHFCQUFvQjtBQUNwQix5QkFBd0I7QUFDeEIsb0JBQW1CO0FBQ25CLHNCQUFxQzs7O0FD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
