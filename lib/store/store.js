import { init } from "@rematch/core";

import sidebarModel from "./models/sidebar"
import userModel from "./models/user"

const store = init({
  models: {
    sidebar: sidebarModel,
    user: userModel
  }
})

export default store;