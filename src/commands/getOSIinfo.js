import { EOL, cpus, homedir, userInfo, arch } from "os";
export const getOSInfo = (params) => {
  const command = params.replace("--", "");
  switch (command) {
    case "EOL":
      console.log("EOL:", EOL === "\n" ? "\\n" : "\\r\\n");
      break;
    case "cpus":
      const cpuInfo = cpus();
      console.log("total number of processors:", cpuInfo.length);
      console.table(
        cpuInfo.map(({ model, speed }) => ({
          model,
          speed,
        }))
      );
      break;
    case "homedir":
      console.log("homedir:", homedir());
      break;
    case "username":
      console.log("username:", userInfo().username);
      break;
    case "architecture":
      console.log("CPU architecture:", arch());
      break;

    default:
      console.log("Invalid input");
  }
};
