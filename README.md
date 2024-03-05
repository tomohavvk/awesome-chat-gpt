<p align="center">
  <img width="180" src="src/icons/logo.png" alt="ChatGPT">
  <h1 align="center">ChatGPT Desktop</h1>
  <p align="center">Awesome ChatGPT Desktop Application (Supporting Mac, Windows, and Linux)</p>
</p>
An application that simple wraps the ChatGPT website, providing a seamless interaction experience in a standalone desktop environment.

## Features

- Access ChatGPT in a dedicated desktop application.
- Interact with ChatGPT seamlessly in an isolated environment.
- Cross-platform support: Windows, macOS, and Linux.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

Clone the repository:

```
git clone https://github.com/tomohavvk/awesome-chatgpt.git
cd awesome-chatgpt
```

Install dependencies:

```
npm install
```

### Usage

To start the application in local environment:

```
npm run start
```

### Building

To build the desktop application for platform:

- macOS:

  ```
  npm run package --mac
  ```

- Windows:

  ```
  npm run package --win
  ```

- Linux (AppImage):

  ```
  npm run package --linux
  ```

The packaged application will be available in the `dist` directory.
