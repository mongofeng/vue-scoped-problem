/* eslint-disable */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "windi.css";

import "./public-path"; // @ts-ignore

import {
  Radio,
  Card,
  Tabs,
  Button,
  Table,
  Form,
  Input,
  InputNumber,
  Select,
  Breadcrumb,
  Typography,
  Descriptions,
  Modal,
  Steps,
  ConfigProvider,
  DatePicker,
  Collapse,
  Pagination,
  Row,
  Col,
  Transfer,
  Divider,
  Spin,
  Tooltip,
  Empty,
  Slider,
  message,
} from "ant-design-vue";
import { actions } from "xag-ai-utils";

import XagUi from "xag-ai-ui";
import "xag-ai-ui/dist/style.css";
import { Router } from "vue-router";

let app: any;
export let navStore: any;
export let rootRouter: Router | null = null;
export let iamStore: any;

function render(props?: any) {
  const { container } = props || {};
  const plugins = [
    XagUi,
    Radio,
    Card,
    Tabs,
    Button,
    Table,
    Form,
    Input,
    InputNumber,
    Select,
    Modal,
    Breadcrumb,
    Typography,
    Descriptions,
    Steps,
    ConfigProvider,
    DatePicker,
    Collapse,
    Pagination,
    Row,
    Col,
    Transfer,
    Divider,
    Spin,
    Tooltip,
    Empty,
    Slider,
  ];
  app = createApp(App).use(store).use(router);
  app.config.globalProperties.$modal = Modal;
  app.config.globalProperties.$message = message;
  plugins.forEach((plugin) => app.use(plugin));

  if (props) {
    app.config.globalProperties.$rootRouter = props.router;
    app.config.globalProperties.$navStore = props.navStore;
    app.config.globalProperties.$iamStore = props.iamStore;
    app.config.globalProperties.$headerStore = props.headerStore;
    app.config.globalProperties.$operateAdd = props.operateAdd;
  }

  app.mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.warn("xag-ai-common=>bootstrap");
}

export async function mount(props: any) {
  console.warn("xag-ai-common=>mount");
  actions.setActions(props); //注入actions实例
  rootRouter = props.router;
  navStore = props.navStore;
  iamStore = props.iamStore;
  render(props);
}
export async function unmount() {
  console.warn("xag-ai-common=>unmount");
  app.unmount();
  rootRouter = null;
  navStore = rootRouter = null;
  //   app.$el.innerHTML = "";
  app = null;
}
