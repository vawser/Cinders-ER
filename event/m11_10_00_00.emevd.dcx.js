// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    // DEBUG WARP
    //WarpPlayer(60, 42, 35, 0, 1042353200, -1);
    //SetPlayerRespawnPoint(1042353200);
    
    // ------------------
    // Graces
    // ------------------
    RegisterBonfire(11100000, 11101950, 0, 0, 0, 1);
    RegisterBonfire(11100001, 11101951, 0, 0, 0, 5);
    
    InitializeEvent(0, 11100020, 0);
    InitializeEvent(0, 11100030, 0);
    InitializeEvent(0, 11100031, 0);
    
    // ------------------
    // Mad Tongue Alberich
    // ------------------
    InitializeCommonEvent(0, 90005790, 0, 11100180, 11102180, 11102181, 11100785, 23, 11102385, 11102386, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005791, 11100180, 11102180, 11102181, 11100785);
    InitializeCommonEvent(0, 90005792, 11100180, 11102180, 11102181, 11100785, 11100800, 0);
    
    
    InitializeEvent(0, 11102600, 0); // Lower Area Monitor
    
    InitializeEvent(0, 11102602, 0); 
    InitializeEvent(0, 11102605, 0); // Dung Eater Door - Open automatically when he is present
    InitializeEvent(0, 11102606, 0); // Ofnir Door - Open automatically when he is present
    
    // Warp Beacon after Mad Tongue Alberich
    // InitializeEvent(0, 11102620, 11100180, 11102621, 11102622, 11101620, 11102620, 2571);
    
    // Enable Lower Door after Mad Tongue Alberich is dead
    InitializeEvent(0, 11102623, 0);
    
    // ------------------
    // Stonesword Key
    // ------------------
    InitializeCommonEvent(0, 90005620, 11100570, 11101570, 11101571, 0, 11102570, 11102571, 11102572);
    InitializeCommonEvent(0, 90005621, 11100570, 11101573);
    InitializeCommonEvent(0, 90005620, 11100575, 11101575, 11101576, 11101577, 11102575, 11102576, 11102577);
    InitializeCommonEvent(0, 90005621, 11100575, 11101578);
    
    // ------------------
    // Hewg
    // ------------------
    InitializeEvent(0, 11103700, 11100715);
    InitializeCommonEvent(0, 11103702, 0);
    InitializeCommonEvent(0, 11103703, 0);
    
    // ------------------
    // Finger Reader Enia
    // ------------------
    // Character State based on progression
    InitializeEvent(0, 11103705, 11100705);
    InitializeCommonEvent(0, 90005708, 11100705, 3480, 0);
    InitializeEvent(0, 11103706, 11100720); // Two Fingers - Award Gesture
    InitializeEvent(0, 11103707, 11100720); // Two Fingers
    InitializeCommonEvent(0, 90005708, 11100705, 11109355, 0);
    
    // ------------------
    // Roderika
    // ------------------
    InitializeEvent(0, 11103710, 11100710);
    InitializeEvent(0, 11103711, 11100711);
    InitializeEvent(0, 11103712, 11100712);
    InitializeEvent(0, 11103713, 0);
    InitializeEvent(0, 11103714, 11100711);
    
    // 
    InitializeEvent(0, 11100704, 0);
    
    // ------------------
    // Knight Diallos
    // ------------------
    InitializeEvent(0, 11103715, 11100725);
    InitializeEvent(0, 11103716, 11100726);
    
    // ------------------
    // Yura, Hunter of Bloody Fingers
    // ------------------
    InitializeEvent(0, 11103720, 11100730);
    
    // ------------------
    // D, Hunter of the Dead
    // ------------------
    InitializeEvent(0, 11100730, 11100735, 11101730);
    InitializeEvent(0, 11100731, 11100736, 11101717, 11101562);
    InitializeEvent(0, 11100732, 0);
    InitializeCommonEvent(0, 90005708, 11100735, 4110, 0);
    InitializeCommonEvent(0, 90005750, 11101716, 4110, 103400, 400349, 400349, 4048, 0);
    InitializeCommonEvent(0, 90005775, 81463900, 1045399206, -1082130432);
    
    // ------------------
    // Fia
    // ------------------
    InitializeEvent(0, 11100735, 11100740);
    InitializeEvent(0, 11100736, 11100741); // Character State
    InitializeCommonEvent(0, 90005740, 11102845, 11102846, 11102847, 11100740, 702, 11101741, 702, 1053609165, 90300, 90302, -1, 1067869798);
    InitializeCommonEvent(0, 90005741, 11102848, 11102849, 11102847, 11100740, 90320, 0, 90322, -1, 1056964608);
    InitializeEvent(0, 11100737, 11100741); // Player Hug
    
    // 
    InitializeCommonEvent(0, 90005733, 11102844);
    
    // ------------------
    // Sorcerer Rogier
    // ------------------
    // Normal Form
    InitializeEvent(0, 11100750, 11100755, 11101715);
    InitializeCommonEvent(0, 90005708, 11100755, 3900, 0);
    InitializeCommonEvent(0, 90005708, 11100755, 3903, 0);
    
    // Asset Form
    InitializeCommonEvent(0, 90005750, 11101755, 4110, 103590, 400359, 400359, 3909, 0);
    InitializeCommonEvent(0, 90005750, 11101755, 4110, 103580, 400356, 400358, 400359, 0);
    
    // ------------------
    // Sir Gideon Ofnir
    // ------------------
    // Initial Welcome
    InitializeEvent(0, 11100740, 11100750);
    
    // Study
    InitializeEvent(0, 11100741, 11100751);
    
    // Show Map Point: Grand Lift of Rold
    InitializeCommonEvent(0, 90005775, 85495300, 11109687, -1082130432);
    
    // ------------------
    // Brother Corhyn
    // ------------------
    InitializeEvent(0, 11100745, 11100770);
    
    // ------------------
    // Dung Eater
    // ------------------
    // State 1
    InitializeEvent(0, 11100755, 11100745);
    
    // State 2
    InitializeEvent(0, 11100756, 11100746);
    
    // ------------------
    // Nepheli Loux
    // ------------------
    // Upper Hold
    InitializeEvent(0, 11100760, 11100780);
    
    // Lower Hold
    InitializeEvent(0, 11100761, 11100781);
    
    // ------------------
    // Ensha of the Royal Remains
    // ------------------
    // Character state
    InitializeEvent(0, 11100765, 11100765); 
    // Clinging Bone Reward
    InitializeCommonEvent(0, 90005774, 11109656, 11100900, 11107900); 
    // Common Reward on Death
    InitializeCommonEvent(0, 90005750, 11101765, 4110, 104900, 400490, 400490, 11109656, 0);
    //
    InitializeEvent(0, 11102680, 0);
    
    // ------------------
    // Misc
    // ------------------
    // 
    InitializeCommonEvent(0, 11103770, 0);
    InitializeCommonEvent(0, 11103771, 0);
    InitializeCommonEvent(0, 11103772, 0);
    
    // 
    InitializeEvent(0, 11103775, 0);
    
    // 
    InitializeEvent(0, 11100790, 0);
    
    // Twin Maiden Husk - Item Notifies
    InitializeEvent(0, 11100791, 400282, 11109770);
    InitializeEvent(1, 11100791, 400283, 11109771);
    InitializeEvent(2, 11100791, 68210, 11109772);
    InitializeEvent(3, 11100791, 400285, 11109773);
    
    //
    InitializeEvent(0, 11100795, 0);
    
    //
    InitializeEvent(0, 11100796, 0);
    
    //
    InitializeEvent(0, 11100797, 0);
    
    // Tutorial: About Hunter Multiplayer
    InitializeEvent(0, 11102651, 710700, 1700, 9125, 69250);
    
    // Tutorial: About Requesting Help from Hunters
    InitializeEvent(0, 11102650, 710720, 1720, 9128, 69280);
    
    // Tutorial: About Roundtable Hold
    InitializeEvent(0, 11102652, 710780, 1780, 9132, 69320);
    
    //----------------------------
    // Training Dummies
    //----------------------------

    // Training Dummy - Character State
    InitializeEvent(0, 11100850, 0); 
    
    // Dummy Placement - Black Knife Assassin
    InitializeEvent(0, 11100851, 11100786, 11100787, 11100788, 11100789, 11100790, 11100791, 11100792, 11100793, 1047610711, 11105781); 

    // Dummy Placement - Imp
    InitializeEvent(1, 11100851, 11100810, 11100811, 11100812, 11100813, 11100814, 11100815, 11100816, 11100817, 1047610713, 11105783); 
    
    // Dummy Placement - Rune Bear
    InitializeEvent(0, 11100852, 11100800, 11100801, 11100802, 11100803, 11100804, 11100805, 11100806, 11100807, 1047610712, 11105782); 
    
    // Dummy Placement - Player
    InitializeEvent(0, 11100853, 11100820, 11100821, 11100822, 11100823, 11100824, 11100825, 11100826, 11100827, 1047610714, 11105784); 
    
    //----------------------------
    // Misc
    //----------------------------
    // Prevent softlock in Roundtable Hold
    SetEventFlagID(71801, ON);
    SetEventFlagID(76101, ON);
    
    // Jar of Rebirth
    InitializeCommonEvent(0, 9005994, 11100760);
    
    // Mysterious Shinobi
    InitializeCommonEvent(1, 9005994, 11100742);
    
    // Master Jarwright
    InitializeCommonEvent(2, 9005994, 11100743);
    
    // Apprentice Frasca
    InitializeCommonEvent(4, 9005994, 11100747);
    
    // Emissary of Mohgwyn
    InitializeCommonEvent(3, 9005994, 11100744);
    InitializeCommonEvent(0, 9005998, 11100744, 90050);

    
});

$Event(50, Default, function() {
    SetCharacterBackreadState(11100705, true);
    SetCharacterBackreadState(11100710, true);
    SetCharacterBackreadState(11100711, true);
    SetCharacterBackreadState(11100715, true);
    SetCharacterBackreadState(11100725, true);
    SetCharacterBackreadState(11100726, true);
    SetCharacterBackreadState(11100735, true);
    SetCharacterBackreadState(11100736, true);
    SetCharacterBackreadState(11100740, true);
    SetCharacterBackreadState(11100741, true);
    SetCharacterBackreadState(11100745, true);
    SetCharacterBackreadState(11100746, true);
    SetCharacterBackreadState(11100750, true);
    SetCharacterBackreadState(11100751, true);
    SetCharacterBackreadState(11100755, true);
    SetCharacterBackreadState(11100765, true);
    SetCharacterBackreadState(11100766, true);
    SetCharacterBackreadState(11100770, true);
    SetCharacterBackreadState(11100780, true);
    SetCharacterBackreadState(11100781, true);
    SetCharacterBackreadState(11100785, true);
    EnableAssetInvunerability(11101715);
    EnableAssetInvunerability(11101730);
    InitializeEvent(0, 11002548, 0);
    InitializeEvent(0, 11100680, 0); // Ensha of the Royal Remains - Invasion
    InitializeEvent(0, 11102100, 0);
});

$Event(11100020, Default, function() {
    EndIf(ThisEventSlot());
    WaitFor(PlayerIsInOwnWorld() && PlayerInMap(11, 10, 0, 0));
    SetEventFlagID(71190, ON);
    OpenWorldMapPoint(111000, 100);
    SetEventFlagID(105, ON);
});

$Event(11100030, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(3001));
    SetEventFlagID(30, ON);
});

$Event(11100031, Default, function() {
    EndIf(!EventFlag(120));
    EndIf(EventFlag(121));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(120));
    SetEventFlagID(71900, OFF);
    SetEventFlagID(121, ON);
});

$Event(11102100, Default, function() {
    GotoIf(L1, EventFlag(302));
    GotoIf(L0, !EventFlag(300));
    ChangeWeather(Weather.WindyPuffyClouds, -1, true);
    DeleteMapSFX(11102100, false);
    EndEvent();
L1:
    ChangeWeather(Weather.Cloudless, -1, true);
L0:
    DeleteMapSFX(11102101, false);
    DeleteMapSFX(11102110, false);
    DeleteMapSFX(11102111, false);
    DeleteMapSFX(11102112, false);
    DeleteMapSFX(11102113, false);
    DeleteMapSFX(11102114, false);
    DeleteMapSFX(11102115, false);
    DeleteMapSFX(11102116, false);
    DeleteMapSFX(11102117, false);
    DeleteMapSFX(11102118, false);
    DeleteMapSFX(11102119, false);
    DeleteMapSFX(11102120, false);
    DeleteMapSFX(11102121, false);
    DeleteMapSFX(11102122, false);
    DeleteMapSFX(11102123, false);
    DeleteMapSFX(11102124, false);
    DeleteMapSFX(11102125, false);
    DeleteMapSFX(11102126, false);
    DeleteMapSFX(11102127, false);
    DeleteMapSFX(11102128, false);
    DeleteMapSFX(11102129, false);
    DeleteMapSFX(11102130, false);
    DeleteMapSFX(11102131, false);
    DeleteMapSFX(11102132, false);
    DeleteMapSFX(11102133, false);
    DeleteMapSFX(11102134, false);
    DeleteMapSFX(11102135, false);
    DeleteMapSFX(11102136, false);
    DeleteMapSFX(11102137, false);
    DeleteMapSFX(11102138, false);
    DeleteMapSFX(11102139, false);
    DeleteMapSFX(11102140, false);
    DeleteMapSFX(11102141, false);
    DeleteMapSFX(11102142, false);
    DeleteMapSFX(11102143, false);
    DeleteMapSFX(11102144, false);
    DeleteMapSFX(11102145, false);
    DeleteMapSFX(11102146, false);
    DeleteMapSFX(11102147, false);
    EndEvent();
});

$Event(11002548, Restart, function() {
    EndIf(EventFlag(11108548));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(181));
    SetEventFlagID(11108548, ON);
});

// Lower Area Monitor
$Event(11102600, Restart, function() {
    DisableNetworkSync();
    ClearSpEffect(10000, 9621);
    
    // Player is in Roundtable Hold, not in the lower area, and has not triggered Ashen Leyndell
    WaitFor(PlayerInMap(11, 10, 0, 0) && !InArea(10000, 11102600) && !CeremonyActive(20));
    
    SetSpEffect(10000, 9621);
    
    WaitFixedTimeSeconds(1);
    
    
    // Player is in Roundtable Hold, not in the lower area, and has not triggered Ashen Leyndell
    WaitFor(!(PlayerInMap(11, 10, 0, 0) && !InArea(10000, 11102600) && !CeremonyActive(20)));
    RestartEvent();
});

$Event(11102602, Restart, function() {
    EndIf(!PlayerInMap(11, 10, 0, 0));
    SetPlayerPositionDisplay(Disabled, true, 11, 10, 0, 0, -305.7, -20.58, -298.1);
});

$Event(11102605, Restart, function() {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 3063);
    ReproduceAssetAnimation(11101560, 2);
    EndEvent();
});

$Event(11102606, Restart, function() {
    WaitFor(
        EventFlag(11109358)
            || (EventFlag(11109659) && EventFlag(3966))
            || (EventFlag(11109358) && EventFlag(11109660) && EventFlag(3967))
            || (EventFlag(110) && EventFlag(3967)));
    ReproduceAssetAnimation(11101750, 2);
    EndEvent();
});

// Warp Beacon
$Event(11102620, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_1, X21_1, X22_1, X23_1) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X4_4, OFF);
    SetEventFlagID(X8_4, OFF);
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X0_4));
    if (!ThisEventSlot()) {
        CreateAssetfollowingSFX(X12_4, 190, 1300);
    }
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.MultiplayerPending)
            || HasMultiplayerState(MultiplayerState.Multiplayer))
            && ActionButtonInArea(9290, X12_4));
    DisplayGenericDialogAndSetEventFlags(4100, PromptType.YESNO, NumberofOptions.TwoButtons, X12_4, 3, X4_4, X8_4, X8_4);
    if (!EventFlag(X4_4)) {
        SetEventFlagID(X8_4, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L1:
    RotateCharacter(10000, 11101620, -1, true);
    ForceAnimationPlayback(10000, 60460, false, false, false);
    WaitFixedTimeSeconds(2.5);
    WarpPlayer(X20_1, X21_1, X22_1, X23_1, X16_4, -11100);
});

// Lower Door
$Event(11102623, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    
    EnableAsset(11101549);
    EnableAsset(11101550);
    
    WaitFor(EventFlag(11100180))
    
    DisableAsset(11101549);
    DisableAsset(11101550);
});

$Event(11102650, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 104)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X0_4, ON);
    ShowTutorialPopup(X4_4, true, true);
    EndIf(EventFlag(X12_4));
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X0_4, 1);
    SetEventFlagID(X12_4, ON);
});

$Event(11102651, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 105)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X0_4, ON);
    ShowTutorialPopup(X4_4, true, true);
    EndIf(EventFlag(X12_4));
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X0_4, 1);
    SetEventFlagID(X12_4, ON);
});

// Tutorial Prompt
// X0_4 - Flag
// X4_4 - Tutorial Param ID
// X8_4 - Tutorial Item Param ID
// x12_4 - Flag
$Event(11102652, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && !EventFlag(X0_4)
            && PlayerInMap(11, 10, 0, 0)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X0_4, ON);
    WaitFixedTimeSeconds(2);
    ShowTutorialPopup(X4_4, true, true);
    EndIf(EventFlag(X12_4));
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X0_4, 1);
    SetEventFlagID(X12_4, ON);
});

// Ensha of the Royal Remains - Invasion
$Event(11100680, Default, function() {
    EndIf(!CeremonyActive(20)); // Not triggered Ashen Leyndell
    EndIf(EventFlag(11109656));
    DisableCharacterHPBarDisplay(11100140); // Two Fingers
    ActivateGparamOverride(1, 0);
    SetCharacterTeamType(11100766, TeamType.Enemy); // Ensha of the Royal Remains
    ReproduceAssetAnimation(1110548, 0);
    WaitFor(CharacterDead(11100766)); // Ensha of the Royal Remains
    SetEventFlagID(11109656, ON);
    DisplayBanner(TextBannerType.GreatEnemyFelled);
    SetEventFlagID(1035429211, OFF);
    SetPsuedoMultiplayerReturnPosition(11102766);
    SetSpEffect(20000, 4820);
    IssueEndOfPseudoMultiplayerNotification(true);
});

$Event(11102680, Default, function() {
    EndIf(!CeremonyActive(20));
    EndIf(EventFlag(11109656));
    SetCharacterBackreadState(11100766, false);
    DisableCharacterAI(11100766);
    WaitFor(
        !InArea(10000, 11102681)
            || ElapsedSeconds(5)
            || HasDamageType(11100766, 10000, DamageType.Unspecified)
            || CharacterHasStateInfo(11000766, 6)
            || CharacterHasStateInfo(11000766, 2)
            || CharacterHasStateInfo(11000766, 436)
            || CharacterHasStateInfo(11000766, 260));
    EnableCharacterAI(11100766);
});

$Event(11103700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3220)) {
            SetEventFlagID(11009248, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(11101740);
    DisableAsset(11101742);
    GotoIf(L5, EventFlag(3225) || EventFlag(3226) || EventFlag(3227) || EventFlag(3228));
    WaitFor(EventFlag(3225) || EventFlag(3226) || EventFlag(3227) || EventFlag(3228));
    RestartEvent();
    SetCharacterTalkRange(X0_4, 50);
L5:
    GotoIf(L1, EventFlag(3220));
    GotoIf(L2, EventFlag(3221));
    GotoIf(L4, EventFlag(3223));
L1:
    if (!(CeremonyActive(20) && EventFlag(1035429211))) {
        DeleteAssetfollowingSFX(11101702, true);
        CreateAssetfollowingSFX(11101702, 100, 803450);
        if (EventFlag(110)) {
            EnableAsset(11101742);
        }
        if (!EventFlag(110)) {
            EnableAsset(11101740);
        }
    }
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    if (EventFlag(3225) && EventFlag(11109205) && !EventFlag(11109209) && EventFlag(11109206)) {
        ForceAnimationPlayback(X0_4, 930013, false, false, false);
    }
    if (EventFlag(3225) && EventFlag(11109209) && !EventFlag(11109339) && EventFlag(11109340)) {
        ForceAnimationPlayback(X0_4, 930015, false, false, false);
    }
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    ForceAnimationPlayback(X0_4, 920015, false, false, false);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3225) || EventFlag(3226) || EventFlag(3227) || EventFlag(3228)));
    RestartEvent();
});

$Event(11103702, Restart, function() {
    WaitFor(
        EventFlag(3225)
            && EventFlag(11109205)
            && !EventFlag(11102702)
            && !EventFlag(11109209)
            && EventFlag(11109206)
            && (InArea(10000, 11102700) || EntityInRadiusOfEntity(10000, 11100715, 8, 1)));
    SetNetworkconnectedEventFlagID(11102704, ON);
    EndEvent();
});

$Event(11103703, Restart, function() {
    WaitFor(
        EventFlag(3225)
            && EventFlag(11109205)
            && !EventFlag(11102702)
            && EventFlag(11109209)
            && !EventFlag(11109339)
            && EventFlag(11109340)
            && (InArea(10000, 11102700) || EntityInRadiusOfEntity(10000, 11100715, 8, 1)));
    SetNetworkconnectedEventFlagID(11102708, ON);
    EndEvent();
});

$Event(11100704, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(11109213));
    WaitFor(EventFlag(11109213));
    SetEventFlagID(10007450, ON);
    SetEventFlagID(10007452, OFF);
});

// Finger Reader Enia - Character State based on progression
$Event(11103705, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3480)) {
            SetEventFlagID(11109355, OFF);
        }
    }
L10:
    if (!EventFlag(3489)) {
        if (!(EventFlag(3485) || EventFlag(3486) || EventFlag(3487) || EventFlag(3488))) {
            DisableCharacter(X0_4);
            SetCharacterBackreadState(X0_4, true);
            WaitFor(
                EventFlag(3485)
                    || EventFlag(3486)
                    || EventFlag(3487)
                    || EventFlag(3488)
                    || EventFlag(3489));
            RestartEvent();
        }
L5:
        GotoIf(L1, EventFlag(3480));
        GotoIf(L2, EventFlag(3481));
        GotoIf(L3, EventFlag(3482));
        GotoIf(L4, EventFlag(3483));
L1:
        SetCharacterBackreadState(X0_4, false);
        EnableCharacter(X0_4);
        GotoIf(L20, mainGroupAbuse);
L2:
        SetCharacterBackreadState(X0_4, false);
        EnableCharacter(X0_4);
        SetCharacterTeamType(X0_4, TeamType.HostileNPC);
        Goto(L20);
L3:
        SetCharacterBackreadState(X0_4, false);
        EnableCharacter(X0_4);
        SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    } else {
L4:
        EnableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, false);
        ForceAnimationPlayback(X0_4, 930010, false, false, false);
        Goto(L20);
    }
L20:
    WaitFor(
        !(EventFlag(3485)
            || EventFlag(3486)
            || EventFlag(3487)
            || EventFlag(3488)
            || EventFlag(3489)));
    RestartEvent();
});

// Two Fingers - Award Gesture
$Event(11103706, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(60843));
    WaitFor(ActionButtonInArea(6321, X0_4));
    SetEventFlagID(60843, ON);
    AwardGesture(102);
    EndEvent();
});

$Event(11103707, Restart, function(X0_4) {
    ForceAnimationPlayback(X0_4, 930001, false, false, false);
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(3485));
    EndIf(EventFlag(3486));
    ForceAnimationPlayback(X0_4, 930000, false, false, false);
    EndEvent();
});

$Event(11103710, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3707)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3707));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3700));
    GotoIf(L2, EventFlag(3701));
    GotoIf(L4, EventFlag(3703));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90103, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3707));
    RestartEvent();
});

$Event(11103711, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!(EventFlag(3708) || (EventFlag(3709) && EventFlag(11109279)))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        if (!(EventFlag(3709) && !EventFlag(11109279))) {
            DisableAsset(11101720);
        }
        EndEvent();
    }
L6:
    GotoIf(L1, EventFlag(3700));
    GotoIf(L2, EventFlag(3701));
    GotoIf(L4, EventFlag(3703));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    EnableAsset(11101720);
    ForceAnimationPlayback(X0_4, 90104, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3708) && !EventFlag(3709));
    RestartEvent();
});

$Event(11103712, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!(EventFlag(3709) && !EventFlag(11109279))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
L6:
    GotoIf(L1, EventFlag(3700));
    GotoIf(L2, EventFlag(3701));
    GotoIf(L4, EventFlag(3703));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90103, false, false, false);
    SetNetworkconnectedEventFlagID(11102719, ON);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3709));
    RestartEvent();
});

$Event(11103713, Restart, function() {
    EndIf(EventFlag(11109266));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1041389415);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 10903, 1041389417, 10);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 10913, 1041389427, 10);
    SetEventFlagID(1041389415, OFF);
    SetEventFlagID(1041389416, ON);
    RestartEvent();
});

$Event(11103714, Restart, function(X0_4) {
    EndIf(!EventFlag(11109265));
    EndIf(EventFlag(11109266) && !EventFlag(11109267));
    EndIf(!EventFlag(1041389411));
    EndIf(EventFlag(3063) && !EventFlag(11109268));
    EndIf(EventFlag(11109268) && !EventFlag(35009306));
    EndIf(EventFlag(11109268) && EventFlag(4247) && !EventFlag(11109270));
    EndIf(EventFlag(11109268) && EventFlag(4248) && !EventFlag(11109272));
    EndIf(EventFlag(11109272) && EventFlag(4249) && !EventFlag(11109271));
    WaitFor(
        (EventFlag(3708) && InArea(10000, 11102700))
            || (EventFlag(3709) && EventFlag(11109279) && InArea(10000, 11102700)));
    RandomlySetEventFlagInRange(11102710, 11102716, ON);
    GotoIf(L1, EventFlag(11102710));
    GotoIf(L2, EventFlag(11102711));
    GotoIf(L3, EventFlag(11102712));
    GotoIf(L20, AnyBatchEventFlags(11102713, 11102716));
L1:
    ForceAnimationPlayback(X0_4, 90202, false, false, false);
    Goto(L20);
L2:
    ForceAnimationPlayback(X0_4, 90203, false, false, false);
    Goto(L20);
L3:
    ForceAnimationPlayback(X0_4, 90204, false, false, false);
    Goto(L20);
L20:
    EndEvent();
});

$Event(11103715, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3440) && EventFlag(11109405)) {
            SetEventFlagID(11109405, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(3445)) {
        WaitFor(EventFlag(3445));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3440));
    GotoIf(L2, EventFlag(3441));
    GotoIf(L3, EventFlag(3442));
    GotoIf(L4, EventFlag(3443));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3445));
    RestartEvent();
});

$Event(11103716, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3440) && EventFlag(11109405)) {
            SetEventFlagID(11109405, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(3447)) {
        WaitFor(EventFlag(3447));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3440));
    GotoIf(L2, EventFlag(3441));
    GotoIf(L3, EventFlag(3442));
    GotoIf(L4, EventFlag(3443));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3447));
    RestartEvent();
});

$Event(11103720, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
});

$Event(11100730, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(4047)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAssetInvunerability(X4_4);
        DisableAsset(X4_4);
        WaitFor(EventFlag(4047));
        RestartEvent();
    }
L7:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    RequestAssetRestoration(X4_4);
    EnableAssetInvunerability(X4_4);
    EnableAsset(X4_4);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4047));
    RestartEvent();
});

$Event(11100731, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(4048)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(EventFlag(4048));
        RestartEvent();
    }
L8:
    ForceAnimationPlayback(X8_4, 2, false, false, false);
    if (!AllBatchEventFlags(400349, 400349)) {
        EnableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, false);
        DisableCharacterCollision(X0_4);
        ForceAnimationPlayback(X0_4, 90104, false, false, false);
        EnableAsset(X4_4);
    } else {
L3:
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        Goto(L20);
    }
L20:
    WaitFor(!EventFlag(4048));
    RestartEvent();
});

$Event(11100732, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(11109609));
    WaitFor(EventFlag(4046));
    SetEventFlagID(11109609, ON);
    SetEventFlagID(4058, ON);
});

$Event(11100735, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(4125)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4125));
        RestartEvent();
    }
L5:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4125));
    RestartEvent();
});

$Event(11100736, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(4126)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4126));
        RestartEvent();
    }
L6:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4126));
    RestartEvent();
});

$Event(11100737, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(4126) && EventFlag(11109015) && PlayerIsInOwnWorld());
    ForceAnimationPlayback(X0_4, 90207, false, false, false);
});

$Event(11100740, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3965)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3965));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3960));
    GotoIf(L2, EventFlag(3961));
    GotoIf(L4, EventFlag(3963));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3965));
    RestartEvent();
});

$Event(11100741, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!(EventFlag(3966) || EventFlag(3967))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3966) || EventFlag(3967));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3960));
    GotoIf(L2, EventFlag(3961));
    GotoIf(L4, EventFlag(3963));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3966) && !EventFlag(3967));
    RestartEvent();
});

$Event(11100745, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(4205)) {
        WaitFor(EventFlag(4205));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(4200));
    GotoIf(L2, EventFlag(4201));
    GotoIf(L4, EventFlag(4203));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4205));
    RestartEvent();
});

$Event(11100750, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(11109527)) {
            SetEventFlagID(11109529, ON);
        }
        if (EventFlag(11109535)) {
            IncrementEventValue(11109545, 5, 2);
        }
    }
L19:
    GotoIf(L7, EventFlag(3907));
    GotoIf(L8, EventFlag(3908));
    GotoIf(L9, EventFlag(3909));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAssetInvunerability(X4_4);
    DisableAsset(X4_4);
    WaitFor(AnyBatchEventFlags(3907, 3909));
    RestartEvent();
L7:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    RequestAssetRestoration(X4_4);
    EnableAssetInvunerability(X4_4);
    EnableAsset(X4_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3907));
    RestartEvent();
L8:
L9:
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(11109522)) {
            SetEventFlagID(400356, ON);
        }
    }
    if (!AllBatchEventFlags(400356, 400359)) {
        EnableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, false);
        ForceAnimationPlayback(X0_4, 90106, false, false, false);
        RequestAssetRestoration(X4_4);
        EnableAssetInvunerability(X4_4);
        EnableAsset(X4_4);
    } else {
L3:
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAssetInvunerability(X4_4);
        DisableAsset(X4_4);
        Goto(L20);
    }
L20:
    WaitFor(!AnyBatchEventFlags(3908, 3909));
    RestartEvent();
});

$Event(11100755, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!(EventFlag(4245) || (EventFlag(4246) && !EventFlag(35009315)))) {
        WaitFor(EventFlag(4245) || (EventFlag(4246) && !EventFlag(35009315)));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(4240));
    GotoIf(L2, EventFlag(4241));
    GotoIf(L4, EventFlag(4243));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L4:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(4245) || (EventFlag(4246) && !EventFlag(35009315))));
    RestartEvent();
});

$Event(11100756, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(4248)) {
        WaitFor(EventFlag(4248));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(4240));
    GotoIf(L2, EventFlag(4241));
    GotoIf(L4, EventFlag(4243));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L4:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4248));
    RestartEvent();
});

$Event(11100760, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    GotoIf(L6, EventFlag(4226) && (EventFlag(3966) || EventFlag(3967)));
    GotoIf(L4, EventFlag(4226) && EventFlag(4223));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    WaitFor((EventFlag(3966) || EventFlag(3967)) && EventFlag(4226));
    RestartEvent();
L6:
    GotoIf(L1, EventFlag(4220));
    GotoIf(L2, EventFlag(4221));
    GotoIf(L4, EventFlag(4223));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
L20:
    WaitFor(!((EventFlag(3966) || EventFlag(3967)) && EventFlag(4226)));
    RestartEvent();
});

$Event(11100761, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(4228)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4228));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4220));
    GotoIf(L2, EventFlag(4221));
    GotoIf(L4, EventFlag(4223));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4228));
    RestartEvent();
});

// Ensha of the Royal Remains - Character State
$Event(11100765, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    WaitFor(!(EventFlag(110) || EventFlag(11109656)));
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    EndEvent();
});

$Event(11103770, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(11109340) && EventFlag(11109558));
    WaitFor(AnyBatchEventFlags(71100, 71108) || AnyBatchEventFlags(73500, 73504));
    SetNetworkconnectedEventFlagID(11109340, ON);
    SetNetworkconnectedEventFlagID(11109558, ON);
    EndEvent();
});

$Event(11103771, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(11109559));
    WaitFor(AnyBatchEventFlags(71500, 71508));
    SetNetworkconnectedEventFlagID(11109559, ON);
    EndEvent();
});

$Event(11103772, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(11109560));
    WaitFor(AnyBatchEventFlags(71250, 71253));
    SetNetworkconnectedEventFlagID(11109560, ON);
    EndEvent();
});

$Event(11103775, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(11109786)) {
        SetEventFlagID(11109786, OFF);
        EndEvent();
    }
    EndIf(CeremonyActive(20));
    EndIf(!EntityInRadiusOfEntity(10000, 11102020, 1, 1));
    WaitFixedTimeSeconds(0.1);
    flag = EventFlag(1034509254);
    WaitFor(flag || EventFlag(11109785));
    if (!flag.Passed) {
        SetEventFlagID(11109785, OFF);
        DisplayGenericDialog(30120, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 5);
        EndEvent();
    }
L0:
    SetEventFlagID(1034509254, OFF);
    DisplayGenericDialog(30130, PromptType.YESNO, NumberofOptions.NoButtons, 0, 5);
    EndEvent();
});

// Table of Lost Grace - Controls the change to the grace action button in ESD
$Event(11100790, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    
    WaitFor(InArea(10000, 11102151, 1));
    
    SetNetworkconnectedEventFlagID(11102790, ON);
    
    WaitFor(!InArea(10000, 11102151, 1));
    
    SetNetworkconnectedEventFlagID(11102790, OFF);
    
    RestartEvent();
});

$Event(11100791, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(X4_4));
    WaitFor(EventFlag(3968) || EventFlag(X0_4));
    if (EventFlag(3968)) {
        if (!EventFlag(X0_4)) {
            SetEventFlagID(X4_4, ON);
            SetEventFlagID(11109785, ON);
        }
    }
    EndEvent();
});

$Event(11100795, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterHasSpEffect(10000, 9614) && !CharacterHasSpEffect(10000, 9615));
    ForceAnimationPlayback(10000, 60540, false, false, false);
    WaitFixedTimeSeconds(0.2);
    RestartEvent();
});

$Event(11100796, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(182));
    if (!EventFlag(60020) && !EventFlag(11109774)) {
        SetEventFlagID(11109774, ON);
        SetEventFlagID(11109785, ON);
    }
    if (!EventFlag(60120) && !EventFlag(11109775)) {
        SetEventFlagID(11109775, ON);
        SetEventFlagID(11109785, ON);
    }
    if (!EventFlag(60130) && !EventFlag(11109776)) {
        SetEventFlagID(11109776, ON);
        SetEventFlagID(11109785, ON);
    }
    EndEvent();
});

$Event(11100797, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeRealFrames(1);
    EndIf(!(AnyBatchEventFlags(3487, 3489) && !EventFlag(60500) && !EventFlag(11109777)));
    SetEventFlagID(11109777, ON);
    SetEventFlagID(11109785, ON);
    EndEvent();
});

// Training Dummy - Character State
$Event(11100850, Restart, function() {
    // Disable all dummies by default
    DisableCharacter(11105780);
    DisableCharacterAI(11105780);
    DisableCharacterGravity(11105780);
    
    SetEventFlagID(1047610803, OFF);  // Hostility
    
    // Dummy Flag Default Setup
    if(!EventFlag(1047610800))
    {
        SetEventFlagID(1047610701, ON);  // Single
        SetEventFlagID(1047610711, ON);  // Default Type
        
        SetEventFlagID(1047610801, ON);  // Enable HP Regen
        SetEventFlagID(1047610802, ON);  // Enable Stagger
        SetEventFlagID(1047610804, ON);  // Enable Aux Inflict
        SetEventFlagID(1047610805, ON);  // Enable Backstab
        SetEventFlagID(1047610806, ON);  // Enable Damage
        
        SetEventFlagID(1047610812, ON);  // HP 10000
        
        SetEventFlagID(1047610800, ON);
    }
    
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(11100180)); // Mad Tongue Alberich is still alive
    
    // Core
    InitializeEvent(0, 11100860, 11105780, 1047610803); // Hostility
    
    InitializeCommonEvent(0, 9005992, 11105780, 1047610802, 9502011); // Enable Stagger
    InitializeCommonEvent(1, 9005992, 11105780, 1047610804, 9502013); // Enable Aux Inflict
    InitializeCommonEvent(2, 9005992, 11105780, 1047610805, 9502014); // Enable Backstab
    
    InitializeCommonEvent(0, 9005991, 11105780, 1047610801, 9502010); // Enable HP Regen
    InitializeCommonEvent(1, 9005991, 11105780, 1047610806, 9502015); // Enable Damage
    
    // HP
    InitializeCommonEvent(1, 9005991, 11105780, 1047610801, 9502100); // 2000
    InitializeCommonEvent(2, 9005991, 11105780, 1047610811, 9502101); // 5000
    InitializeCommonEvent(3, 9005991, 11105780, 1047610812, 9502102); // 10000
    InitializeCommonEvent(4, 9005991, 11105780, 1047610813, 9502103); // 20000
    InitializeCommonEvent(5, 9005991, 11105780, 1047610814, 9502104); // 50000
    InitializeCommonEvent(6, 9005991, 11105780, 1047610815, 9502105); // 100000
    
    // Standard ABS
    InitializeCommonEvent(7, 9005991, 11105780, 1047610821, 9502240); // +20%
    InitializeCommonEvent(8, 9005991, 11105780, 1047610822, 9502241); // +40%
    InitializeCommonEvent(9, 9005991, 11105780, 1047610823, 9502242); // +60%
    InitializeCommonEvent(9, 9005991, 11105780, 1047610824, 9502243); // +80%
    InitializeCommonEvent(10, 9005991, 11105780, 1047610825, 9502244); // +100%
    
    // Slash ABS
    InitializeCommonEvent(11, 9005991, 11105780, 1047610871, 9502250); // +20%
    InitializeCommonEvent(12, 9005991, 11105780, 1047610872, 9502251); // +40%
    InitializeCommonEvent(13, 9005991, 11105780, 1047610873, 9502252); // +60%
    InitializeCommonEvent(14, 9005991, 11105780, 1047610874, 9502253); // +80%
    InitializeCommonEvent(15, 9005991, 11105780, 1047610875, 9502254); // +100%
    
    // Strike ABS
    InitializeCommonEvent(16, 9005991, 11105780, 1047610881, 9502260); // +20%
    InitializeCommonEvent(17, 9005991, 11105780, 1047610882, 9502261); // +40%
    InitializeCommonEvent(18, 9005991, 11105780, 1047610883, 9502262); // +60%
    InitializeCommonEvent(19, 9005991, 11105780, 1047610884, 9502263); // +80%
    InitializeCommonEvent(20, 9005991, 11105780, 1047610885, 9502264); // +100%
    
    // Thrust ABS
    InitializeCommonEvent(21, 9005991, 11105780, 1047610891, 9502270); // +20%
    InitializeCommonEvent(22, 9005991, 11105780, 1047610892, 9502271); // +40%
    InitializeCommonEvent(23, 9005991, 11105780, 1047610893, 9502272); // +60%
    InitializeCommonEvent(24, 9005991, 11105780, 1047610894, 9502273); // +80%
    InitializeCommonEvent(25, 9005991, 11105780, 1047610895, 9502274); // +100%
    
    // Magic ABS
    InitializeCommonEvent(26, 9005991, 11105780, 1047610831, 9502200); // +20%
    InitializeCommonEvent(27, 9005991, 11105780, 1047610832, 9502201); // +40%
    InitializeCommonEvent(28, 9005991, 11105780, 1047610833, 9502202); // +60%
    InitializeCommonEvent(29, 9005991, 11105780, 1047610834, 9502203); // +80%
    InitializeCommonEvent(30, 9005991, 11105780, 1047610835, 9502204); // +100%
    
    // Fire ABS
    InitializeCommonEvent(31, 9005991, 11105780, 1047610841, 9502210); // +20%
    InitializeCommonEvent(32, 9005991, 11105780, 1047610842, 9502211); // +40%
    InitializeCommonEvent(33, 9005991, 11105780, 1047610843, 9502212); // +60%
    InitializeCommonEvent(34, 9005991, 11105780, 1047610844, 9502213); // +80%
    InitializeCommonEvent(35, 9005991, 11105780, 1047610845, 9502214); // +100%
    
    // Lightning ABS
    InitializeCommonEvent(36, 9005991, 11105780, 1047610851, 9502220); // +20%
    InitializeCommonEvent(37, 9005991, 11105780, 1047610852, 9502221); // +40%
    InitializeCommonEvent(38, 9005991, 11105780, 1047610853, 9502222); // +60%
    InitializeCommonEvent(39, 9005991, 11105780, 1047610854, 9502223); // +80%
    InitializeCommonEvent(40, 9005991, 11105780, 1047610855, 9502224); // +100%
    
    // Holy ABS
    InitializeCommonEvent(41, 9005991, 11105780, 1047610861, 9502230); // +20%
    InitializeCommonEvent(42, 9005991, 11105780, 1047610862, 9502231); // +40%
    InitializeCommonEvent(43, 9005991, 11105780, 1047610863, 9502232); // +60%
    InitializeCommonEvent(44, 9005991, 11105780, 1047610864, 9502233); // +80%
    InitializeCommonEvent(45, 9005991, 11105780, 1047610865, 9502234); // +100%
});

// Training Dummy - Formation for Type
$Event(11100851, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) 
{
    // Wait for spawn update
    WaitFor(EventFlag(1047610700));
    SetEventFlagID(1047610700, OFF);
    
    // Disable enemy
    ChangeCharacterEnableState(X36_4, Disabled);
    DisableCharacterGravity(X36_4);
        
    // Type check
    WaitFor(EventFlag(X32_4));
    
    // Single
    if(EventFlag(1047610701))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Disabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102391, 0, X0_4);
    }
    // Triangle Triple
    if(EventFlag(1047610702))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Enabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102392, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102393, 0, X4_4);
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, 11102394, 0, X8_4);
    }
    // Square Quad
    if(EventFlag(1047610703))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Enabled);
        ChangeCharacterEnableState(X12_4, Enabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102400, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102401, 0, X4_4);
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, 11102402, 0, X8_4);
        WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Area, 11102403, 0, X12_4);
    }
    // Parallel Duo
    if(EventFlag(1047610704))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102410, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102411, 0, X4_4);
    }
    // Clustered Mass
    if(EventFlag(1047610705))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Enabled);
        ChangeCharacterEnableState(X12_4, Enabled);
        ChangeCharacterEnableState(X16_4, Enabled);
        ChangeCharacterEnableState(X20_4, Enabled);
        ChangeCharacterEnableState(X24_4, Enabled);
        ChangeCharacterEnableState(X28_4, Enabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102430, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102431, 0, X4_4);
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, 11102432, 0, X8_4);
        WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Area, 11102433, 0, X12_4);
        WarpCharacterAndCopyFloor(X16_4, TargetEntityType.Area, 11102434, 0, X16_4);
        WarpCharacterAndCopyFloor(X20_4, TargetEntityType.Area, 11102435, 0, X20_4);
        WarpCharacterAndCopyFloor(X24_4, TargetEntityType.Area, 11102436, 0, X24_4);
        WarpCharacterAndCopyFloor(X28_4, TargetEntityType.Area, 11102437, 0, X28_4);
    }

    RestartEvent();
});

// Training Dummy - Formation for Large Type
$Event(11100852, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) 
{
    // Wait for spawn update
    WaitFor(EventFlag(1047610700));
    SetEventFlagID(1047610700, OFF);
    
    // Disable enemy
    ChangeCharacterEnableState(X36_4, Disabled);
    DisableCharacterGravity(X36_4);
        
    // Type check
    WaitFor(EventFlag(X32_4));
    
    // Single
    if(EventFlag(1047610701))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Disabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102440, 0, X0_4);
    }
    // Triangle Triple
    if(EventFlag(1047610702))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Enabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102450, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102451, 0, X4_4);
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, 11102452, 0, X8_4);
    }
    // Square Quad
    if(EventFlag(1047610703))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Enabled);
        ChangeCharacterEnableState(X12_4, Enabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102460, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102461, 0, X4_4);
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, 11102462, 0, X8_4);
        WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Area, 11102463, 0, X12_4);
    }
    // Parallel Duo
    if(EventFlag(1047610704))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102470, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102471, 0, X4_4);
    }
    // Clustered Mass
    if(EventFlag(1047610705))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Enabled);
        ChangeCharacterEnableState(X12_4, Enabled);
        ChangeCharacterEnableState(X16_4, Enabled);
        ChangeCharacterEnableState(X20_4, Enabled);
        ChangeCharacterEnableState(X24_4, Enabled);
        ChangeCharacterEnableState(X28_4, Enabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102480, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102481, 0, X4_4);
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, 11102482, 0, X8_4);
        WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Area, 11102483, 0, X12_4);
        WarpCharacterAndCopyFloor(X16_4, TargetEntityType.Area, 11102484, 0, X16_4);
        WarpCharacterAndCopyFloor(X20_4, TargetEntityType.Area, 11102485, 0, X20_4);
        WarpCharacterAndCopyFloor(X24_4, TargetEntityType.Area, 11102486, 0, X24_4);
        WarpCharacterAndCopyFloor(X28_4, TargetEntityType.Area, 11102487, 0, X28_4);
    }
    
    RestartEvent();
});

// Training Dummy - Formation for Player Type
$Event(11100853, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) 
{
    // Wait for spawn update
    WaitFor(EventFlag(1047610700));
    SetEventFlagID(1047610700, OFF);
    
    // Disable enemy
    ChangeCharacterEnableState(X36_4, Disabled);
    DisableCharacterGravity(X36_4);
    
    // Copy player character
    if(EventFlag(1047610715))
    {
        CopyCharacterDataFromOnlinePlayers(0, 23000, X0_4);
        CopyCharacterDataFromOnlinePlayers(0, 23010, X4_4);
        CopyCharacterDataFromOnlinePlayers(0, 23040, X8_4);
        CopyCharacterDataFromOnlinePlayers(0, 23070, X12_4);
        CopyCharacterDataFromOnlinePlayers(0, 23090, X16_4);
        CopyCharacterDataFromOnlinePlayers(0, 23100, X20_4);
        CopyCharacterDataFromOnlinePlayers(0, 23140, X24_4);
        CopyCharacterDataFromOnlinePlayers(0, 23184, X28_4);
    }
    else
    {
        CopyPlayerCharacterData(10000, X0_4);
        CopyPlayerCharacterData(10000, X4_4);
        CopyPlayerCharacterData(10000, X8_4);
        CopyPlayerCharacterData(10000, X12_4);
        CopyPlayerCharacterData(10000, X16_4);
        CopyPlayerCharacterData(10000, X20_4);
        CopyPlayerCharacterData(10000, X24_4);
        CopyPlayerCharacterData(10000, X28_4);
    }
    
    WaitFixedTimeSeconds(1.0);
    
    // Type check
    WaitFor(EventFlag(X32_4) || EventFlag(1047610715));
    
    // Single
    if(EventFlag(1047610701))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Disabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102391, 0, X0_4);
    }
    // Triangle Triple
    if(EventFlag(1047610702))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Enabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102392, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102393, 0, X4_4);
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, 11102394, 0, X8_4);
    }
    // Square Quad
    if(EventFlag(1047610703))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Enabled);
        ChangeCharacterEnableState(X12_4, Enabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102400, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102401, 0, X4_4);
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, 11102402, 0, X8_4);
        WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Area, 11102403, 0, X12_4);
    }
    // Parallel Duo
    if(EventFlag(1047610704))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X16_4, Disabled);
        ChangeCharacterEnableState(X20_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102410, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102411, 0, X4_4);
    }
    // Clustered Mass
    if(EventFlag(1047610705))
    {
        ChangeCharacterEnableState(X0_4, Enabled);
        ChangeCharacterEnableState(X4_4, Enabled);
        ChangeCharacterEnableState(X8_4, Enabled);
        ChangeCharacterEnableState(X12_4, Enabled);
        ChangeCharacterEnableState(X16_4, Enabled);
        ChangeCharacterEnableState(X20_4, Enabled);
        ChangeCharacterEnableState(X24_4, Enabled);
        ChangeCharacterEnableState(X28_4, Enabled);
        EnableCharacterGravity(X36_4);
        
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 11102430, 0, X0_4);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 11102431, 0, X4_4);
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, 11102432, 0, X8_4);
        WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Area, 11102433, 0, X12_4);
        WarpCharacterAndCopyFloor(X16_4, TargetEntityType.Area, 11102434, 0, X16_4);
        WarpCharacterAndCopyFloor(X20_4, TargetEntityType.Area, 11102435, 0, X20_4);
        WarpCharacterAndCopyFloor(X24_4, TargetEntityType.Area, 11102436, 0, X24_4);
        WarpCharacterAndCopyFloor(X28_4, TargetEntityType.Area, 11102437, 0, X28_4);
    }

    RestartEvent();
});

// Training Dummy - Hostility
$Event(11100860, Restart, function(X0_4, X4_4) {
    if(EventFlag(X4_4))
    {
        SetCharacterAIState(X0_4, Enabled);
    }
    else
    {
        SetCharacterAIState(X0_4, Disabled);
    }
    
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
