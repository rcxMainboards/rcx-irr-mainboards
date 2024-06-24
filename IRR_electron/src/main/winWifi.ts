
// //@ts-nocheck
// const {ipcMain} = require("electron");

// const {
//   WiFiAdapter,
//   WiFiReconnectionKind,
// } = require("@nodert-win11-22h2/windows.devices.wifi");
// const {
//   PasswordCredential,
// } = require("@nodert-win11-22h2/windows.security.credentials");

// const isThereAnyAdapter = (adapters) => {
//   return adapters.length > 0;
// };



// //TODO
// // 1. Buscar adaptadores WiFi disponibles
// // 2. Conectarse a una red WiFi o varias redes wifi
// // 3. Desconectarse de una red WiFi
// // 4. Obtener información de la red WiFi a la que se está conectado


// const configB = () => {
//   return new Promise((resolve, reject) => {
//     WiFiAdapter.findAllAdaptersAsync((error, adapters) => {
//       if (error) {
//         console.error("Ocurrió un error al buscar adaptadores WiFi:", error);
//         reject("Ocurrió un error al buscar adaptadores WiFi: " + error);
//         return;
//       }

//       const success = isThereAnyAdapter(adapters);

//       if (!success) {
//         const message = "No se encontraron adaptadores WiFi disponibles.";
//         console.log(message);
//         reject(message);
//         return;
//       }

//       const adapter = adapters[0];
//       console.log(`Adaptador encontrado -> ${adapter}`);

//       const networkReport = adapter.networkReport;
//       const availableNetworks = networkReport.availableNetworks;

//       if (availableNetworks.size <= 0) {
//         const message = "El adaptador de wifi esta desactivado o no hay redes disponibles.";
//         console.log(message);
//         reject(message);
//         return;
//       }

//       let listaRedes = [null, null];

//       for (let i = 0; i < availableNetworks.size; i++) {
//       const network = availableNetworks.getAt(i);
//       if (network.ssid === "TEST-Electron") {
//           listaRedes[0] = network;
//       } else if (network.ssid === "TEST-Electron_5G") {
//           listaRedes[1] = network;
//       }
//       }

//       if(listaRedes[0] === null || listaRedes[1] === null){
//       reject("Una o ambas redes de prueba no se encuentran disponibles");
//       }

//       const passwordCredential = new PasswordCredential();
//       passwordCredential.password = "Electron24@";
      
//       adapter.connectAsync(
//         listaRedes[0],
//         WiFiReconnectionKind.manual,
//         passwordCredential,
//         (err, result) => {
//           if (err) {
//             console.error("Ocurrió un error al intentar conectarse:", err);
//             reject("Ocurrió un error al intentar conectarse: " + err);
//             return;
//           }

//           console.log(result.connectionStatus);

//           if(result.connectionStatus === 1){
//             console.log("Se pudo lograr una conexion con TEST-Electron");
//             const secondPasswordCredential = new PasswordCredential();
//             secondPasswordCredential.password = "Electron05@";
//               adapter.connectAsync(
//                   listaRedes[1],
//                   WiFiReconnectionKind.manual,
//                   secondPasswordCredential,
//                   (err, result) => {
//                   if (err) {
//                       console.error("Ocurrió un error al intentar conectarse:", err);
//                       reject("Ocurrió un error al intentar conectarse: " + err);
//                       return;
//                   }
          
//                   console.log(result.connectionStatus);
          
//                   if(result.connectionStatus === 1){
//                       console.log("Se pudo lograr una conexion con TEST-Electron_5G")
//                       // Desconectarse de la red
//                       adapter.disconnect();
//                       resolve("Se pudo lograr una conexion con ambas redes de prueba");
//                   } else {
//                       const message = "ocurrio un error conectandose a TEST-Electron_5G";
//                       console.log(message);
//                       reject(message);
//                   }
//                   }
//               );
//           } else {
//             const message = "ocurrio un error conectandose a TEST-Electron";
//             console.log(message);
//             reject(message);
//           }
//         }
//       );
//     });
//   });
// }



// const configC = () => {
//   return new Promise((resolve, reject) => {
//     WiFiAdapter.findAllAdaptersAsync((error, adapters) => {
//       if (error) {
//         console.error("Ocurrió un error al buscar adaptadores WiFi:", error);
//         reject("Ocurrió un error al buscar adaptadores WiFi: " + error);
//         return;
//       }

//       const success = isThereAnyAdapter(adapters);

//       if (!success) {
//         const message = "No se encontraron adaptadores WiFi disponibles.";
//         console.log(message);
//         reject(message);
//         return;
//       }

//       const adapter = adapters[0];
//       console.log(`Adaptador encontrado -> ${adapter}`);

//       const networkReport = adapter.networkReport;
//       const availableNetworks = networkReport.availableNetworks;

//       if (availableNetworks.size <= 0) {
//         const message = "El adaptador de wifi esta desactivado o no hay redes disponibles.";
//         console.log(message);
//         reject(message);
//         return;
//       }

//       let listaRedes = [null, null, null];

//       for (let i = 0; i < availableNetworks.size; i++) {
//       const network = availableNetworks.getAt(i);
//       if (network.ssid === "TEST-Electron") {
//           listaRedes[0] = network;
//       } else if (network.ssid === "TEST-Electron_5G") {
//           listaRedes[1] = network;
//       } else if (network.ssid === "TEST-Electron_6G") {
//           listaRedes[2] = network;
//       }
//       }

//       if(listaRedes[0] === null || listaRedes[1] === null || listaRedes[2] === null){
//       reject("Una o algunas de redes para probar no esta disponible");
//       }

//       const passwordCredential = new PasswordCredential();
//       passwordCredential.password = "Electron24@";
      
//       adapter.connectAsync(
//         listaRedes[0],
//         WiFiReconnectionKind.manual,
//         passwordCredential,
//         (err, result) => {
//           if (err) {
//             console.error("Ocurrió un error al intentar conectarse:", err);
//             reject("Ocurrió un error al intentar conectarse: " + err);
//             return;
//           }

//           console.log(result.connectionStatus);

//           if(result.connectionStatus === 1){
//             console.log("Se pudo lograr una conexion con TEST-Electron");
//             const secondPasswordCredential = new PasswordCredential();
//             secondPasswordCredential.password = "Electron05@";
//               adapter.connectAsync(
//                   listaRedes[1],
//                   WiFiReconnectionKind.manual,
//                   secondPasswordCredential,
//                   (err, result) => {
//                   if (err) {
//                       console.error("Ocurrió un error al intentar conectarse:", err);
//                       reject("Ocurrió un error al intentar conectarse: " + err);
//                       return;
//                   }
          
//                   console.log(result.connectionStatus);
          
//                   if(result.connectionStatus === 1){
//                       console.log("Se pudo lograr una conexion con TEST-Electron_5G")
//                       // Desconectarse de la red
//                       adapter.disconnect();
//                       const secondPasswordCredential = new PasswordCredential();
//                       secondPasswordCredential.password = "Electron06@";
//                       adapter.connectAsync(
//                             listaRedes[2],
//                             WiFiReconnectionKind.manual,
//                             secondPasswordCredential,
//                             (err, result) => {
//                             if (err) {
//                                 console.error("Ocurrió un error al intentar conectarse:", err);
//                                 reject("Ocurrió un error al intentar conectarse: " + err);
//                                 return;
//                             }
                    
//                             console.log(result.connectionStatus);
                    
//                             if(result.connectionStatus === 1){
//                                 console.log("Se pudo lograr una conexion con TEST-Electron_6G")
//                                 // Desconectarse de la red
//                                 adapter.disconnect();
//                                 resolve("Se pudo lograr una conexion con todas las redes de prueba");
//                             } else {
//                                 const message = "ocurrio un error conectandose a TEST-Electron_6G";
//                                 console.log(message);
//                                 reject(message);
//                             }
//                             }
//                         );
//                   } else {
//                       const message = "ocurrio un error conectandose a TEST-Electron_5G";
//                       console.log(message);
//                       reject(message);
//                   }
//                   }
//               );
//           } else {
//             const message = "ocurrio un error conectandose a TEST-Electron";
//             console.log(message);
//             reject(message);
//           }
//         }
//       );
//     });
//   });
// }



// const startWifiTest = (config) => {
//   if(config === 'b') {
//     return configB()
//   } else if (config === 'c') {
//     return configC()
//   }
// }

// // startWifiTest()

// ipcMain.handle("win:wifi", (event, config) => startWifiTest(config));