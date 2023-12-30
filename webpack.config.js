import { resolve } from "path"

export const resolve = {
  alias: {
    Backend: resolve(__dirname, 'backend/'),
    Components: resolve(__dirname, 'app/components/'),
    Styles: resolve(__dirname, 'lib/styles/'),
    Store: resolve(__dirname, 'lib/store/')
  }
}