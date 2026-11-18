Game.FileSymlinkExclusions = ["xinput1_4.dll"];
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = false;
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.KeepSymLinkOnExit = false;
Game.ForceUserProfileConfigCopy = false;
Game.SupportsKeyboard = true;
Game.ExecutableName = "devilutionx.exe";
Game.SteamID = "";
Game.GUID = "Diablo 1";
Game.GameName = "devilutionx";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.LauncherTitle = "DevilutionX";
Game.HideTaskbar = true;
Game.HookFocus = true;
//Game.RefreshWindowAfterStart = true;
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = true;
Game.XInputPlusDll = ["xinput1_4.dll"];
Game.Hook.CustomDllEnabled = false;
Game.FakeFocus = true;
Game.FakeFocusInterval = 8000;
Game.SendFakeFocusMsg = true;
Game.UserProfileConfigPath = "AppData\\Roaming\\diasurgical\\devilution";
Game.Description = "You must first configure your IP, go to https://github.com/diasurgical/devilutionX/wiki/Multiplayer#client-server-tcp for instructions. Proceed to diablo.ini in Appdata/Roaming/diasurgical/devilution and change fullscreen and fit to screen to 0 and change your height to half that of your monitors height";
Game.PauseBetweenStarts = 20;

// Ask for the original Diablo data folder once and save it for future sessions.
Game.CustomUserGeneralPrompts = [
    "Enter the full path to your Diablo folder (the folder containing diabdat.mpq)"
];
Game.SaveCustomUserGeneralValues = true;


Game.Play = function () {
	var PlayerData = Context.EnvironmentPlayer + "DevilutionX\\";

	var ConfigDir = Context.EnvironmentPlayer + Context.UserProfileConfigPath;
	var SaveDir = PlayerData + "Saves";

    System.IO.Directory.CreateDirectory(ConfigDir);
    System.IO.Directory.CreateDirectory(SaveDir);

    var DataDir = Context.CustomUserGeneralValues[0];

    if (!System.IO.File.Exists(System.IO.Path.Combine(DataDir, "diabdat.mpq"))) {
        throw new Error("Invalid Diablo data folder. The selected folder must contain diabdat.mpq.");
    }

    Context.StartArguments =
        '--data-dir "' + DataDir + '"' +
        ' --controller ' + Context.PlayerID +
        ' --config-dir "' + ConfigDir + '"' +
        ' --save-dir "' + SaveDir + '"';

    var VideoConfig = ConfigDir + "\\diablo.ini";

	Context.ModifySaveFile(VideoConfig, VideoConfig, Nucleus.SaveType.INI, [
		new Nucleus.IniSaveInfo("Graphics", "Width", Context.Width.toString()),
		new Nucleus.IniSaveInfo("Graphics", "Height", Context.Height.toString()),
		new Nucleus.IniSaveInfo("Graphics", "Fullscreen", "0")
]);
}
