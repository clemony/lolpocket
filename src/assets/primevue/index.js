import accordion from "../aura/accordion";
import accordioncontent from "../aura/accordioncontent";
import accordionheader from "../aura/accordionheader";
import accordionpanel from "../aura/accordionpanel";
import autocomplete from "../aura/autocomplete";
import avatar from "../aura/avatar";
import avatargroup from "../aura/avatargroup";
import badge from "../aura/badge";
import badgedirective from "../aura/badgedirective";
import blockui from "../aura/blockui";
import breadcrumb from "../aura/breadcrumb";
import button from "../aura/button";
import buttongroup from "../aura/buttongroup";
import card from "../aura/card";
import carousel from "../aura/carousel";
import cascadeselect from "../aura/cascadeselect";
import checkbox from "../aura/checkbox";
import chip from "../aura/chip";
import colorpicker from "../aura/colorpicker";
import confirmdialog from "../aura/confirmdialog";
import confirmpopup from "../aura/confirmpopup";
import contextmenu from "../aura/contextmenu";
import datatable from "../aura/datatable";
import dataview from "../aura/dataview";
import datepicker from "../aura/datepicker";
import deferred from "../aura/deferred";
import dialog from "../aura/dialog";
import divider from "../aura/divider";
import dock from "../aura/dock";
import drawer from "../aura/drawer";
import fieldset from "../aura/fieldset";
import fileupload from "../aura/fileupload";
import floatlabel from "../aura/floatlabel";
import galleria from "../aura/galleria";
import global from "./global";
import iconfield from "../aura/iconfield";
import image from "../aura/image";
import inplace from "../aura/inplace";
import inputgroup from "../aura/inputgroup";
import inputgroupaddon from "../aura/inputgroupaddon";
import inputmask from "../aura/inputmask";
import inputnumber from "../aura/inputnumber";
import inputotp from "../aura/inputotp";
import inputtext from "../aura/inputtext";
import knob from "../aura/knob";
import listbox from "../aura/listbox";
import megamenu from "../aura/megamenu";
import menu from "../aura/menu";
import menubar from "../aura/menubar";
import message from "../aura/message";
import metergroup from "../aura/metergroup";
import multiselect from "../aura/multiselect";
import orderlist from "../aura/orderlist";
import organizationchart from "../aura/organizationchart";
import overlaybadge from "../aura/overlaybadge";
import paginator from "../aura/paginator";
import panel from "../aura/panel";
import panelmenu from "../aura/panelmenu";
import password from "../aura/password";
import picklist from "../aura/picklist";
import popover from "../aura/popover";
import progressbar from "../aura/progressbar";
import progressspinner from "../aura/progressspinner";
import radiobutton from "../aura/radiobutton";
import rating from "../aura/rating";
import ripple from "../aura/ripple";
import scrollpanel from "../aura/scrollpanel";
import scrolltop from "../aura/scrolltop";
import select from "../aura/select";
import selectbutton from "../aura/selectbutton";
import skeleton from "../aura/skeleton";
import slider from "../aura/slider";
import speeddial from "../aura/speeddial";
import splitbutton from "../aura/splitbutton";
import splitter from "../aura/splitter";
import splitterpanel from "./splitterpanel";
import step from "../aura/step";
import stepitem from "../aura/stepitem";
import steplist from "../aura/steplist";
import steppanels from "../aura/steppanels";
import stepper from "../aura/stepper";
import steps from "../aura/steps";
import tab from "../aura/tab";
import tablist from "../aura/tablist";
import tabmenu from "../aura/tabmenu";
import tabpanel from "../aura/tabpanel";
import tabpanels from "../aura/tabpanels";
import tabs from "../aura/tabs";
import tabview from "../aura/tabview";
import tag from "../aura/tag";
import terminal from "../aura/terminal";
import textarea from "../aura/textarea";
import tieredmenu from "../aura/tieredmenu";
import timeline from "../aura/timeline";
import toast from "../aura/toast";
import togglebutton from "../aura/togglebutton";
import toggleswitch from "../aura/toggleswitch";
import toolbar from "../aura/toolbar";
import tooltip from "../aura/tooltip";
import tree from "../aura/tree";
import treeselect from "../aura/treeselect";
import treetable from "../aura/treetable";

export default {
  global,
  directives: {
    badge: badgedirective,
    ripple,
    tooltip,
  },

  //forms
  autocomplete,
  select,
  dropdown: select,
  inputnumber,
  inputtext,
  datepicker,
  calendar: datepicker,
  checkbox,
  radiobutton,
  toggleswitch,
  inputswitch: toggleswitch,
  selectbutton,
  slider,
  rating,
  multiselect,
  togglebutton,
  cascadeselect,
  listbox,
  colorpicker,
  inputgroup,
  inputgroupaddon,
  inputmask,
  knob,
  treeselect,
  textarea,
  password,
  iconfield,
  floatlabel,
  inputotp,

  //buttons
  button,
  buttongroup,
  splitbutton,
  speeddial,

  //data
  paginator,
  datatable,
  tree,
  dataview,
  organizationchart,
  orderlist,
  picklist,
  treetable,
  timeline,

  //panels
  accordion,
  accordionpanel,
  accordionheader,
  accordioncontent,
  panel,
  fieldset,
  card,
  tabview,
  divider,
  toolbar,
  scrollpanel,
  splitter,
  splitterpanel,
  stepper,
  steplist,
  step,
  stepitem,
  steppanels,
  deferred,
  tab,
  tabs,
  tablist,
  tabpanels,
  tabpanel,

  //file
  fileupload,

  //menu
  contextmenu,
  menu,
  menubar,
  steps,
  tieredmenu,
  breadcrumb,
  panelmenu,
  megamenu,
  dock,
  tabmenu,

  //overlays
  dialog,
  popover,
  sidebar: popover,
  drawer,
  overlaypanel: drawer,
  confirmpopup,
  confirmdialog,

  //messages
  message,
  toast,

  //media
  carousel,
  galleria,
  image,

  //misc
  badge,
  overlaybadge,
  avatar,
  avatargroup,
  tag,
  chip,
  progressbar,
  skeleton,
  scrolltop,
  terminal,
  blockui,
  metergroup,
  inplace,
  progressspinner,
};
