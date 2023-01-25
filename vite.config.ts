import { kitql } from "@kitql/all-in";
import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    kitql({
      projectName: "init",
      // prismaFileForEnums: './prisma/schema.prisma'
    }),
    sveltekit(),
  ],
};

export default config;
