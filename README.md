# DevilutionX Nucleus Co-op Handler

A [Nucleus Co-op](https://github.com/SplitScreen-Me/NucleusCoop) handler for [DevilutionX](https://github.com/diasurgical/DevilutionX), enabling local split-screen multiplayer with up to four players.

This project includes a modified DevilutionX executable that allows each game instance to select its own controller.

## Features

- Supports up to four local players.
- Automatically assigns a separate controller to each instance.
- Dynamic split-screen layouts based on player count and display resolution.
- Independent player configurations, characters, saves, and stashes.
- Remembers the location of your original Diablo game data.
- Uses DevilutionX's built-in TCP multiplayer functionality.

## Installation

### Recommended: Download a Release

1. Visit the **Releases** section of this GitHub repository.
2. Download the latest `DevilutionX-NucleusCoop` ZIP package.
3. Extract the package.
4. Copy `Handler/DevilutionX.js` into your Nucleus Co-op `handlers` directory.
5. In Nucleus Co-op, configure the game directory to point to the extracted `Game` folder.
6. Launch the handler.
7. When prompted, select your original Diablo data directory containing `diabdat.mpq`.

The package includes the modified DevilutionX executable and its required runtime DLLs. You do not need to compile anything yourself.

### Multiplayer Networking

DevilutionX uses TCP networking for multiplayer. Configure your multiplayer connection using the [official multiplayer instructions](https://github.com/diasurgical/devilutionX/wiki/Multiplayer#client-server-tcp).

## Requirements

- Windows
- Nucleus Co-op
- A legally obtained copy of Diablo and its required game data.
- A working network configuration for DevilutionX multiplayer.

## Building from Source

Advanced users can build their own modified DevilutionX executable using the included controller-selection patch.

See [BUILDING.md](BUILDING.md).

The patch targets DevilutionX 1.5.5, based on commit:

`7223eeac9e8274fbf665b4de86fda26d3b22c52f`

## Save Files

Each player receives an independent configuration and save directory through Nucleus Co-op's per-player environment. Characters and stashes are kept separate between instances.

## Important Notes

- No Diablo game data is included.
- The included executable is a modified DevilutionX 1.5.5 build.
- The original DevilutionX license and modification notice are included in the release package.
- The controller-selection patch and its upstream licensing information are included in this repository.

## Credits

- [DevilutionX](https://github.com/diasurgical/DevilutionX) — Diablo engine.
- [Nucleus Co-op](https://github.com/SplitScreen-Me/NucleusCoop) — Local multiplayer framework.

