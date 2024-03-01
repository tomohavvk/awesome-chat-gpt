const { app, BrowserWindow, BrowserView, screen } = require("electron");

let mainWindow;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const windowWidth = Math.round(width * 0.7);
  const windowHeight = Math.round(height * 0.7);

  mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    icon: __dirname + "logo.png",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const view = new BrowserView();
  view.setBounds({ x: 0, y: 0, width: windowWidth, height: windowHeight });
  view.webContents.loadURL("https://chat.openai.com/");

  mainWindow.setBrowserView(view);

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  mainWindow.on("resize", () => {
    const { width, height } = mainWindow.getContentBounds();
    view.setBounds({ x: 0, y: 0, width, height });
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
