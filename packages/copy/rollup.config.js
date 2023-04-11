import clear from "rollup-plugin-clear"
import { terser } from "rollup-plugin-terser"
export default {
  input: "./src/index.js",
  output: [
    {
      file: "dist/bundle.es.js",
      format: "es"
    },
    {
      format: "cjs",
      file: "dist/bundle.cjs.js"
    }
  ],
  plugins: [
    clear({
      // required, point out which directories should be clear.
      targets: ["dist"]
      // optional, whether clear the directores when rollup recompile on --watch mode.
      // watch: true, // default: false
    }),
    // uglify(), 不支持es6+ 使用terser替换
    terser()
  ]
}
