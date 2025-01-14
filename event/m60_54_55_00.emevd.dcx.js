// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

Event(0, Default, function() {
    RegisterBonfire(1054550000, 1054551950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76510, 76505, 1054551980, 77500, 4, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    InitializeEvent(0, 1054552200, 1054555200);
    InitializeCommonEvent(0, 90005630, 65545500, 1054551500, 119);
    InitializeCommonEvent(0, 90005771, 1054550950, 1054552700);
    InitializeCommonEvent(0, 90005771, 1054550950, 1054552701);
    
    // Warp Gate: Mountaintops of the Giants -> Consecrated Snowfields
    InitializeEvent(0, 1054552210, 1054551960, 1054551961, 1054551962, 1054551963);
});

Event(1054552200, Restart, function(X0_4) {
    ChangeCharacterCollisionState(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    EndUnconditionally(EventEndType.End);
});

// Warp Gate - Setup
$Event(1054552210, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    
    if (!ThisEventSlot()) {
        DeleteAssetfollowingSFX(X0_4, true);
        WaitFixedTimeFrames(1);
    }
    
    CreateAssetfollowingSFX(X0_4, 200, 806870);
    
    WaitFor(ActionButtonInArea(9140, X0_4);)
    
    WaitFixedTimeSeconds(0.033);
   
    DisplayGenericDialogAndSetEventFlags(4307, PromptType.YESNO, NumberofOptions.TwoButtons, X0_4, 3, X4_4, X8_4, X12_4);
    
    if (!EventFlag(X4_4)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }

    RotateCharacter(10000, X0_4, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    
    WaitFixedTimeSeconds(3);
    
    // m60_48_54_00 - Consecrated Snowfield
    WarpPlayer(60, 48, 54, 0, 1048540980, -1);
});
