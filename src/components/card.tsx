import React from "react";

export const Card = ({ item }: any) => {
  const languageColor: any = {
    ABAP: "#E8274B",
    ActionScript: "#882B0F",
    Ada: "#02f88c",
    Agda: "#315665",
    "AGS Script": "#B9D9FF",
    Alloy: "#64C800",
    AMPL: "#E6EFBB",
    ANTLR: "#9DC3FF",
    "API Blueprint": "#2ACCA8",
    APL: "#5A8164",
    Arc: "#aa2afe",
    Arduino: "#bd79d1",
    ASP: "#6a40fd",
    AspectJ: "#a957b0",
    Assembly: "#6E4C13",
    ATS: "#1ac620",
    AutoHotkey: "#6594b9",
    AutoIt: "#1C3552",
    BlitzMax: "#cd6400",
    Boo: "#d4bec1",
    Brainfuck: "#2F2530",
    "C Sharp": "#178600",
    C: "#555555",
    Chapel: "#8dc63f",
    Cirru: "#ccccff",
    Clarion: "#db901e",
    Clean: "#3F85AF",
    Click: "#E4E6F3",
    Clojure: "#db5855",
    CoffeeScript: "#244776",
    "ColdFusion CFC": "#ed2cd6",
    ColdFusion: "#ed2cd6",
    "Common Lisp": "#3fb68b",
    "Component Pascal": "#b0ce4e",
    cpp: "#f34b7d",
    Crystal: "#776791",
    CSS: "#563d7c",
    D: "#ba595e",
    Dart: "#00B4AB",
    Diff: "#88dddd",
    DM: "#447265",
    Dogescript: "#cca760",
    Dylan: "#6c616e",
    E: "#ccce35",
    Eagle: "#814C05",
    eC: "#913960",
    ECL: "#8a1267",
    edn: "#db5855",
    Eiffel: "#946d57",
    Elixir: "#6e4a7e",
    Elm: "#60B5CC",
    "Emacs Lisp": "#c065db",
    EmberScript: "#FFF4F3",
    Erlang: "#B83998",
    "F#": "#b845fc",
    Factor: "#636746",
    Fancy: "#7b9db4",
    Fantom: "#dbded5",
    FLUX: "#88ccff",
    Forth: "#341708",
    FORTRAN: "#4d41b1",
    FreeMarker: "#0050b2",
    Frege: "#00cafe",
    "Game Maker Language": "#8fb200",
    Glyph: "#e4cc98",
    Gnuplot: "#f0a9f0",
    Go: "#375eab",
    Golo: "#88562A",
    Gosu: "#82937f",
    "Grammatical Framework": "#79aa7a",
    Groovy: "#e69f56",
    Handlebars: "#01a9d6",
    Harbour: "#0e60e3",
    Haskell: "#29b544",
    Haxe: "#df7900",
    HTML: "#e44b23",
    Hy: "#7790B2",
    IDL: "#a3522f",
    Io: "#a9188d",
    Ioke: "#078193",
    Isabelle: "#FEFE00",
    J: "#9EEDFF",
    Java: "#b07219",
    JavaScript: "#f1e05a",
    JFlex: "#DBCA00",
    JSONiq: "#40d47e",
    Julia: "#a270ba",
    "Jupyter Notebook": "#DA5B0B",
    Kotlin: "#F18E33",
    KRL: "#28431f",
    Lasso: "#999999",
    Latte: "#A8FF97",
    Lex: "#DBCA00",
    LFE: "#004200",
    LiveScript: "#499886",
    LOLCODE: "#cc9900",
    LookML: "#652B81",
    LSL: "#3d9970",
    Lua: "#000080",
    Makefile: "#427819",
    Mask: "#f97732",
    Matlab: "#bb92ac",
    Max: "#c4a79c",
    MAXScript: "#00a6a6",
    Mercury: "#ff2b2b",
    Metal: "#8f14e9",
    Mirah: "#c7a938",
    MTML: "#b7e1f4",
    NCL: "#28431f",
    Nemerle: "#3d3c6e",
    nesC: "#94B0C7",
    NetLinx: "#0aa0ff",
    "NetLinx+ERB": "#747faa",
    NetLogo: "#ff6375",
    NewLisp: "#87AED7",
    Nimrod: "#37775b",
    Nit: "#009917",
    Nix: "#7e7eff",
    Nu: "#c9df40",
    "Objective-C": "#438eff",
    "Objective-C++": "#6866fb",
    "Objective-J": "#ff0c5a",
    OCaml: "#3be133",
    Omgrofl: "#cabbff",
    ooc: "#b0b77e",
    Opal: "#f7ede0",
    Oxygene: "#cdd0e3",
    Oz: "#fab738",
    Pan: "#cc0000",
    Papyrus: "#6600cc",
    Parrot: "#f3ca0a",
    Pascal: "#b0ce4e",
    PAWN: "#dbb284",
    Perl: "#0298c3",
    Perl6: "#0000fb",
    PHP: "#4F5D95",
    PigLatin: "#fcd7de",
    Pike: "#005390",
    PLSQL: "#dad8d8",
    PogoScript: "#d80074",
    Processing: "#0096D8",
    Prolog: "#74283c",
    "Propeller Spin": "#7fa2a7",
    Puppet: "#302B6D",
    "Pure Data": "#91de79",
    PureBasic: "#5a6986",
    PureScript: "#1D222D",
    Python: "#3572A5",
    QML: "#44a51c",
    R: "#198ce7",
    Racket: "#22228f",
    "Ragel in Ruby Host": "#9d5200",
    RAML: "#77d9fb",
    Rebol: "#358a5b",
    Red: "#ee0000",
    "Ren'Py": "#ff7f7f",
    Rouge: "#cc0088",
    Ruby: "#701516",
    Rust: "#dea584",
    SaltStack: "#646464",
    SAS: "#B34936",
    Scala: "#DC322F",
    Scheme: "#1e4aec",
    Self: "#0579aa",
    Shell: "#89e051",
    Shen: "#120F14",
    Slash: "#007eff",
    Slim: "#ff8f77",
    Smalltalk: "#596706",
    SourcePawn: "#5c7611",
    SQF: "#3F3F3F",
    Squirrel: "#800000",
    Stan: "#b2011d",
    "Standard ML": "#dc566d",
    SuperCollider: "#46390b",
    Swift: "#ffac45",
    SystemVerilog: "#DAE1C2",
    Tcl: "#e4cc98",
    TeX: "#3D6117",
    Turing: "#45f715",
    TypeScript: "#2b7489",
    "Unified Parallel C": "#4e3617",
    "Unity3D Asset": "#ab69a1",
    UnrealScript: "#a54c4d",
    Vala: "#fbe5cd",
    Verilog: "#b2b7f8",
    VHDL: "#adb2cb",
    VimL: "#199f4b",
    "Visual Basic": "#945db7",
    Volt: "#1F1F1F",
    Vue: "#2c3e50",
    "Web Ontology Language": "#9cc9dd",
    wisp: "#7582D1",
    X10: "#4B6BEF",
    xBase: "#403a40",
    XC: "#99DA07",
    XQuery: "#5232e7",
    Zephir: "#118f9e",
  };
  return (
    <a
      href={item?.html_url}
      className="card shadow-lg compact bg-base-100 cursor-pointer"
    >
      <div className="flex justify-between flex-col p-8 h-full w-full">
        <div>
          <div className="flex items-center">
            <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="my-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
              </svg>
              <span className="capitalize">{item?.name}</span>
            </div>
          </div>
          <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
            🚀 Create a dynamic portfolio by just providing your GitHub
            username.
          </p>
        </div>
        <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
          <div className="flex flex-grow">
            <span className="mr-3 flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="mr-0.5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
              </svg>
              <span>{item?.stargazers_count}</span>
            </span>
            <span className="flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="mr-0.5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
              </svg>
              <span>{item?.forks_count}</span>
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-1 opacity-60"
                style={{
                  background: languageColor[item?.language],
                }}
              ></div>
              <span>{item?.language}</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};
