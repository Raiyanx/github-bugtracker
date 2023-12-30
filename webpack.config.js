import { resolve } from "path"

export const resolve = {
  alias: {
    Backend: resolve(__dirname, 'backend/'),
    Components: resolve(__dirname, 'app/components/'),
    Lib: resolve(__dirname, 'app/lib/'),
    Styles: resolve(__dirname, 'app/styles/')
  }
}