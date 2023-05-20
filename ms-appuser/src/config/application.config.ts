import { registerAs } from "@nestjs/config";

export default registerAs('application', () => ({
   name: "ADB",
}));