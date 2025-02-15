// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 10012682, 0);
    InitializeEvent(0, 10012800, 0);
    InitializeEvent(0, 10012810, 0);
    InitializeEvent(0, 10012811, 0);
    InitializeEvent(0, 10012849, 0);
    InitializeEvent(0, 10012500, 0);
    InitializeEvent(0, 10010790, 0);
    InitializeEvent(0, 10010791, 0);
    InitializeEvent(0, 10010792, 0);
    
    InitializeEvent(0, 10012504, 0);
    
    // Jar of Promise
    InitializeCommonEvent(0, 9005994, 10011702);
    
    InitializeEvent(0, 10012901, 0); // Starting Items
    InitializeEvent(0, 10012902, 0); // Custom Loadout
    InitializeEvent(0, 10012903, 0); // Custom Loadout - Cleanup
    
    // Custom Loadout Kits
    InitializeEvent(0, 10012910, 0); // Aromatic Kit
    InitializeEvent(0, 10012911, 0); // Cracked Pot Kit
    InitializeEvent(0, 10012912, 0); // Ritual Pot Kit
    
    // Enforced Boundries
    InitializeEvent(0, 10012920, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(10011700, true);
    InitializeEvent(0, 10010020, 0);
    InitializeEvent(0, 10010030, 0);
    InitializeEvent(0, 10010031, 0);
    InitializeEvent(0, 10012502, 0);
    InitializeEvent(0, 10012560, 0);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(100));
    EndIf(EventFlag(102));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    SetCurrentTime(23, 45, 0, false, false, false, 0, 0, 0);
});

$Event(10010020, Restart, function() {
    EndIf(ThisEventSlot());
    EndIf(!PlayerInMap(10, 1, 0, 0));
    DisableAreaWelcomeMessage();
    ForceAnimationPlayback(10000, 0, false, false, false);
    SetWindSFX(-1);
    SetCharacterFaceParamOverride(10000, 0, -1);
    SetCharacterFaceParamOverride(10000, 1, -1);
    PlayCutsceneToPlayerWithWeatherAndTime(10000040, CutscenePlayMode.Skippable, 10000, false, Weather.Default, 0, true, 23, 45, 0);
    WaitFixedTimeRealFrames(1);
L0:
    SetPlayerRespawnPoint(10012020);
    SaveRequest();
    SetThisEventSlot(ON);
    SetEventFlagID(100, ON);
});

$Event(10010030, Default, function() {
    EndIf(ThisEventSlot() && EventFlag(101));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    hp = CharacterHPValue(10010800) > 0 && CharacterHPValue(10000) == 1;
    chr = CharacterDead(10000);
    WaitFor(PlayerIsInOwnWorld() && EventFlag(10010801) && (hp || chr));
    SetPlayerRespawnPoint(18002020);
    SaveRequest();
    DisableTextOnLoadingScreen();
    EndIf(chr.Passed);
    if (!ThisEventSlot()) {
        WaitFixedTimeSeconds(1);
    }
    SetSpEffect(10000, 4790);
    SetEventFlagID(9021, ON);
    SetBossBGM(920900, BossBGMState.Stop2);
    PlayCutsceneToPlayerAndWarpWithWeatherAndTime(10010000, CutscenePlayMode.Skippable, 18002020, 18000000, 10000, 10010, false, true, Weather.Default, -1, true, 10, 30, 0);
    WaitFixedTimeRealFrames(1);
});

$Event(10010031, Default, function() {
    EndIf(!PlayerInMap(10, 1, 0, 0));
    EndIf(EventFlag(101));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(10012805));
    EnableCharacterImmortality(10000);
    WaitFor(!InArea(10000, 10012031) || CharacterDead(10010800));
    DisableCharacterImmortality(10000);
});

$Event(10012500, Restart, function() {
    if (EventFlag(10010500)) {
        DisableAsset(10011500);
        DisableAsset(10011501);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 10012500));
    RequestAssetDestruction(10011500, 1);
    SetEventFlagID(10010500, ON);
});

$Event(10012501, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(100));
    EndIf(EventFlag(102));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    SetWindSFX(808004);
    SetSpEffect(10000, 4200);
});

$Event(10012502, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(10010502));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    DisableAreaWelcomeMessage();
    WaitFor(PlayerIsInOwnWorld() && !InArea(10000, 10012502));
    EnableAreaWelcomeMessage();
    DisplayAreaWelcomeMessage(10010);
    SetEventFlagID(10010502, ON);
});

$Event(10012504, Restart, function() {
    //EndIf(EventFlag(10018540));
    //EndIf(EventFlag(60210));
    DisableObjAct(10011540, -1);
    
    WaitFor(EventFlag(1047610150)); // Journey Type selected
    //WaitFor(EventFlag(60210)); // Tarnished Finger pickup
    
    EnableObjAct(10011540, -1);
});

$Event(10012560, Restart, function() {
    if (!EventFlag(10018560)) {
        WaitFor(PlayerIsInOwnWorld() && EventFlag(102));
        SetEventFlagID(10018560, ON);
    }
L0:
    DisableObjActAssignIdx(10011560, 2219000, 0);
    DisableObjActAssignIdx(10011560, 2219000, 1);
    DisableObjActAssignIdx(10011560, 2219000, 2);
    DisableObjActAssignIdx(10011560, 2219000, 3);
});

$Event(10012680, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(18000020));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(10010020) && InArea(10000, 10012680));
    SetEventFlagID(710000, ON);
    ShowTutorialPopup(1000, true, true);
    WaitFor(!InArea(10000, 10012680));
    ShowTutorialPopup(1000, false, true);
});

$Event(10012682, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(18000020));
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 10012682));
    SetEventFlagID(710000, ON);
    ShowTutorialPopup(1000, true, true);
});

$Event(10012800, Restart, function() {
    EndIf(EventFlag(10010800));
    WaitFor(CharacterHPValue(10010800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(10018000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(10010800));
    HandleBossDefeatAndDisplayBanner(10010800, TextBannerType.EnemyFelled);
    SetEventFlagID(10010800, ON);
    SetEventFlagID(9103, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61103, ON);
    }
});

$Event(10012810, Restart, function() {
    if (EventFlag(10010800)) {
        DisableCharacter(10010800);
        DisableCharacterCollision(10010800);
        ForceCharacterDeath(10010800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(10010800);
    if (!EventFlag(10010801)) {
        ForceAnimationPlayback(10010800, 30003, false, false, false);
        DisableCharacterHPBarDisplay(10010800);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 10012801))
                || HasDamageType(10010800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(10010801, ON);
        SetNetworkUpdateRate(10010800, true, CharacterUpdateFrequency.AlwaysUpdate);
        ForceAnimationPlayback(10010800, 20003, false, false, false);
        WaitFixedTimeSeconds(4);
    } else {
L1:
        DisableCharacterCollision(10010800);
        IssueShortWarpRequest(10010800, TargetEntityType.Area, 10012810, -1);
        WaitFor(EventFlag(10012805) && InArea(10000, 10012800));
        EnableCharacterCollision(10010800);
    }
L2:
    SetNetworkUpdateRate(10010800, true, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacterAI(10010800);
    DisplayBossHealthBar(Enabled, 10010800, 0, 904690000);
    EndIf(EventFlag(10010030));
    SetSpEffect(10000, 4290);
});

$Event(10012811, Restart, function() {
    EndIf(EventFlag(10010800));
    WaitFor(CharacterHasSpEffect(10010800, 16265));
    SetEventFlagID(10012802, ON);
});

$Event(10012849, Restart, function() {
    if (!EventFlag(101)) {
        InitializeCommonEvent(0, 9005800, 10010800, 10011800, 10012800, 10012805, 10015800, 10000, 10010801, 10012801);
    } else {
        InitializeCommonEvent(0, 9005800, 10010800, 10011801, 10012800, 10012805, 10015800, 10000, 10010801, 10012801);
    }
    
    // Tutorial Side
    //InitializeCommonEvent(0, 9005800, 10010800, 10011800, 10012800, 10012805, 10015800, 10000, 10010801, 10012801); // Boss Setup
    InitializeCommonEvent(0, 9005811, 10010800, 10011800, 16, 10010801); // Fog-gate Setup
    
    // Return Side
    //InitializeCommonEvent(1, 9005800, 10010800, 10011801, 10012800, 10012805, 10015800, 10000, 10010801, 10012801); // Boss Setup
    //InitializeCommonEvent(0, 9005801, 10010800, 10011801, 10012800, 10012805, 10012806, 10000); // Fog-gate Setup
    InitializeCommonEvent(1, 9005811, 10010800, 10011801, 16, 10010801); // Fog-gate Passthrough Setup
    
    InitializeCommonEvent(0, 9005822, 10010800, 920900, 10012805, 10012806, 0, 10012802, 0, 0); // BGM
});

$Event(10010790, Restart, function() {
    SetCharacterBackreadState(10011700, false);
    EnableCharacter(10011700);
    ForceAnimationPlayback(10011700, 90100, false, false, false);
    DisableCharacterCollision(10011700);
});

$Event(10010791, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(400033));
    EndIf(!EventFlag(400031));
    WaitFor(ActionButtonInArea(6471, 10011700));
    RemoveItemFromPlayer(ItemType.Goods, 8154, 1);
    AwardItemLot(100330);
    EndEvent();
});

$Event(10010792, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(50));
    EndIf(EventFlag(10019200));
    WaitFor(PlayerHasItem(ItemType.Goods, 9500) || ElapsedSeconds(5));
    WaitFixedTimeFrames(1);
    if (PlayerHasItem(ItemType.Goods, 9500)) {
        SetEventFlagID(66150, ON);
        SetEventFlagID(66170, ON);
        SetEventFlagID(66180, ON);
    }
    SetEventFlagID(10019200, ON);
    EndEvent();
});

$Event(10012900, Default, function() {
    WaitFor(EventFlag(10010900));
    IncrementEventValue(10010910, 32, 999999999);
    RestartEvent();
});

// Starting Items
$Event(10012901, Default, function() {
    // Flasks already given
    EndIf(EventFlag(1047610012))
    
    WaitFixedTimeSeconds(1.0);
    
    AwardItemsIncludingClients(2000);
    
    SetEventFlagID(1047610012, ON);
});

// Custom Loadout
$Event(10012902, Default, function() {
    EndIf(GameCycle() >= 1) // Don't apply in NG+1 or above
    
    WaitFixedTimeSeconds(3.0);
    
    if(PlayerHasItem(ItemType.Goods, 3715))
    {
        if(!EventFlag(1047610200))
        {
            SetEventFlagID(1047610200, ON);
            AwardItemLot(3100);
        } 
    }
});

// Custom Loadout - Cleanup
$Event(10012903, Default, function() {
    EndIf(GameCycle() >= 1) // Don't apply in NG+1 or above
    
    EndIf(EventFlag(1047610230))
    
    WaitFor(InArea(10000, 10012695, 1));
    
    SetEventFlagID(1047610231, ON);
});

// Custom Loadout - Perfume Bottle
$Event(10012910, Default, function() {
    WaitFor(PlayerHasItem(ItemType.Goods, 3716))
    RemoveItemFromPlayer(ItemType.Goods, 3716, -99);
    AwardItemLot(400);
});

// Custom Loadout - Cracked Pot
$Event(10012911, Default, function() {
    WaitFor(PlayerHasItem(ItemType.Goods, 3717))
    RemoveItemFromPlayer(ItemType.Goods, 3717, -99);
    AwardItemLot(410);
});

// Custom Loadout - Ritual Pot
$Event(10012912, Default, function() {
    WaitFor(PlayerHasItem(ItemType.Goods, 3718))
    RemoveItemFromPlayer(ItemType.Goods, 3718, -99);
    AwardItemLot(420);
});

// Enforced Boundries
$Event(10012920, Default, function() {
    EndIf(EventFlag(1047610150));
    
    
    InitializeCommonEvent(0, 90006200, 10012696, 10012020);
});
