import { gsap } from "gsap";

/* ---------------------------- SIDEBAR ANIMATION --------------------------- */

const menuRef = (ref < HTMLDivElement) | (null > null);

//  const state = Flip.getState(menu.value);
console.log(menuRef);
var menu = menuRef.value;
console.log(menu);
const m = gsap.utils.selector(menuRef);
const nav = m(".nav");
const node = m(".node");
const nodecontent = m(".nodecontent");
const nodelabel = m(".nodelabel");
const nodeicon = m(".nodeicon");
const nodechildren = m(".nodechildren");
const nodetogglebutton = m(".nodetogglebutton");
const rootchildren = m(".rootchildren");
const hideThese = [...nodechildren, ...nodetogglebutton, ...nodelabel];

function toggleMenu() {
  var tl = gsap.timeline();

  tl.from(hideThese, {
    opacity: 0,
    duration: 0.25,
    onComplete: function () {
      this.targets().forEach((elem) => elem.classList.add("hidden"));
    },
  });
  tl.from(menu, { gridTemplateColumns: "80px auto", duration: 1 }, "<");
  tl.to(nav, { borderRadius: "20px", paddingLeft: "3px", duration: 1 }, "<");
  tl.to(
    nodeicon,
    {
      margin: 0,
      width: "1.35rem",
      height: "1.35rem",
      alignSelf: "center",
      opacity: "0.8",
      duration: 1,
    },
    "<"
  );
  tl.to(node, { margin: "0.7rem 0", justifyContent: "center", justifyItems: "center", display: "flex", duration: 1 }, "<");
}

export default {
  mounted() {
    nextTick(() => {
      console.log(menuRef);
      let m = gsap.utils.selector(menuRef);

      toggleMenu();
    });
  },
};
