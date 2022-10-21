import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://api-sa-east-1.hygraph.com/v2/cl9d46lep001h01ui1ojrc3eu/master",
  documents: ["./src/graphql/**/*.graphql"],
  generates: {
    "./src/graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config:{
        withHooks: true,
        withHOC: false,
        withCompoment: false,
      }
    },
  },
};
export default config;
