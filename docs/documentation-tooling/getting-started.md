# Getting Started with Hoppscotch

Hoppscotch provides multiple ways to access its API testing capabilities, allowing you to choose the platform that best fits your workflow. You can use Hoppscotch through:

- **CLI** – Command-line interface for terminal-based workflows
- **Web** – Browser-based client accessible at https://hoppscotch.io
- **Desktop** – Native desktop application for offline use

This guide focuses on setting up Hoppscotch locally using the **CLI** approach, which gives you full control over the development environment and allows you to contribute to the project or customize it for your needs.

## Prerequisites

Before installing Hoppscotch locally, ensure you have the following tools installed on your system:

- **Node.js (>= 18)** – JavaScript runtime required to run the application
- **Yarn or npm** – Package manager for installing dependencies
- **Git** – Version control system for cloning the repository

## Installation Steps

Follow the steps below to set up Hoppscotch on your local machine:

**1. Clone the repository**

First, download the Hoppscotch source code from GitHub by cloning the repository:

```bash
git clone https://github.com/hoppscotch/hoppscotch.git
cd hoppscotch
```

**2. Install dependencies**

Next, install all the required packages and libraries. You can use either Yarn or npm:

```bash
yarn install
```

Or, if you prefer npm:

```bash
npm install
```

This process may take a few minutes as it downloads all necessary dependencies.

**3. Start the development server**

Once the dependencies are installed, launch the local development server:

```bash
yarn dev
```

Or with npm:

```bash
npm run dev
```

The server will compile the application and start running. You should see output in your terminal indicating that the build was successful.

**4. Access Hoppscotch**

Once the development server is running, open your web browser and navigate to:

**http://localhost:3000**

You should now see the Hoppscotch interface and be ready to start testing APIs locally.