# Building DevilutionX with Controller Selection

These instructions explain how to build the modified DevilutionX executable used by this Nucleus Co-op handler.

The included controller-selection patch targets **DevilutionX 1.5.5**.

## Requirements

- Windows 10 or later
- Git
- CMake
- Visual Studio 2022 or later
- Visual Studio's **Desktop development with C++** workload
- A Windows SDK

## 1. Clone the Correct DevilutionX Version

Open a terminal and clone the official DevilutionX repository:

```powershell
git clone --branch 1.5.5 --depth 1 https://github.com/diasurgical/DevilutionX.git
```

Enter the repository:

```powershell
cd DevilutionX
```

Verify that you have the expected source revision:

```powershell
git rev-parse HEAD
```

Expected commit:

```text
7223eeac9e8274fbf665b4de86fda26d3b22c52f
```

The patch is designed for this specific revision. Applying it to other versions may fail or require modifications.

## 2. Apply the Controller-Selection Patch

Copy `controller-selection.patch` from this project's `Patches` directory into the root of the DevilutionX source directory.

Check that the patch applies cleanly:

```powershell
git apply --check controller-selection.patch
```

Apply it:

```powershell
git apply controller-selection.patch
```

The patch adds the `--controller <#>` command-line option, allowing each DevilutionX instance to select a controller from 0 through 3.

## 3. Configure the Build

From the DevilutionX source directory, run:

```powershell
cmake -S . -B build
```

This configures the project using CMake.

## 4. Compile

Build the Release configuration:

```powershell
cmake --build build --config Release --parallel
```

When the build completes, the executable should be located at:

```text
build/Release/devilutionx.exe
```

## 5. Verify Controller Selection

Run:

```powershell
.\build\Release\devilutionx.exe --help
```

The help output should include:

```text
--controller <#>     Select controller (0-3)
```

## 6. Use with Nucleus Co-op

Configure Nucleus Co-op to use the directory containing the modified `devilutionx.exe`.

The original Diablo data directory is separate. The handler will prompt for the directory containing `diabdat.mpq`.

## Additional Information

- Original project: https://github.com/diasurgical/DevilutionX
- Target version: 1.5.5
- Target commit: `7223eeac9e8274fbf665b4de86fda26d3b22c52f`
- Patch location in this repository: `Patches/controller-selection.patch`

The original DevilutionX license is included separately as `LICENSE-DEVILUTIONX.md`. Review and follow its terms when building or distributing modified versions.