// Attack Button
let Attack = document.getElementById('AttackText');
Attack.value = '0';

// Accuracy Button
let Accuracy = document.getElementById('AccuracyText');
Accuracy.value = '100';

// Power Button
let Power = document.getElementById('PowerText');
Power.value = '0';

// Attack Lank
let AttackLank = document.getElementById('AttackLank');
AttackLank.options[6].selected = true;

// STAB
let STAB = document.getElementById('Stab');

// Critical Lank
let CriticalLank = document.getElementById('CriticalLank');
CriticalLank.options[3].selected = true;

// Weather
let Weather = document.getElementById('Weather');
Weather.options[1].selected = true;

// Field
let Field = document.getElementById('Field');
Field.options[3].selected = true;

// Attack burned
let AttackBurned = document.getElementById('AttackBurned');

// Attack Item
let AttackItem = document.getElementById('AttackItem');
AttackItem.options[0].selected = true;

// Attack Ability
let AttackAbility = document.getElementById('AttackAbility');
AttackAbility.options[0].selected = true;

// Defence HP
let HP = document.getElementById('HpText');
HP.value = '0';

// Defence Button
let Defence = document.getElementById('DefenceText');
Defence.value = '0';

// Defence Lank
let DefenceLank = document.getElementById('DefenceLank');
DefenceLank.options[6].selected = true;

// Dynamax
let Dynamax = document.getElementById('Dynamax');

// Reflect
let Reflect = document.getElementById('Reflect');

// Status Ailment
let StatusAilment = document.getElementById('StatusAilment');
StatusAilment.options[0].selected = true;

// Protect
let Protect = document.getElementById('Protect');

// Defence Item
let DefenceItem = document.getElementById('DefenceItem');
DefenceItem.options[0].selected = true;

// Defence Ability
let DefenceAbility = document.getElementById('DefenceAbility');
DefenceAbility.options[0].selected = true;

// Type Chart
let TypeChart = document.getElementById('TypeChart');
TypeChart.options[2].selected = true;

// Message output
let msg = document.getElementById('msg');

// Execution Button
let ExecutionButton = document.getElementById('ExecutionButton');
ExecutionButton.addEventListener('click', DamageCalculationExecution);

// Reset Button
let ResetButton = document.getElementById('ResetButton');
ResetButton.addEventListener('click', ResetAll);

function CountStaticExecutionTimes () {
  if (!('StaticExecutionTimes' in CountStaticExecutionTimes)) {
      CountStaticExecutionTimes.StaticExecutionTimes = 0;
  }
  CountStaticExecutionTimes.StaticExecutionTimes++;
  return CountStaticExecutionTimes.StaticExecutionTimes;
}

function FiveWaste (value) {
  let ReturnValue;
  let DecimalPart = value - Math.floor (value);
  if (DecimalPart > 0.5) {
    ReturnValue = Math.ceil (value);
  }
  else {
    ReturnValue = Math.floor (value);
  }
  return ReturnValue;
}

function DamageCalculation () {
  let AttackValue = Number (Attack.value);
  let AttackLankValue = Number (AttackLank.value);
  let StabValue = Boolean (STAB.checked);
  let CriticalLankValue = Number (CriticalLank.value);
  let WeatherValue = Number (Weather.value);
  let FieldValue = Number (Field.value);
  let AttackBurnedValue = Boolean (AttackBurned.checked);
  let AttackItemValue = Number (AttackItem.value);
  let AttackAbilityValue = Number (AttackAbility.value);
  let PowerValue = Number (Power.value);
  let DefenceValue = Number (Defence.value);
  let DefenceLankValue = Number (DefenceLank.value);
  let ReflectValue = Boolean (Reflect.checked);
  let ProtectValue = Boolean (Protect.checked);
  let DefenceItemValue = Number (DefenceItem.value);
  let DefenceAbilityValue = Number (DefenceAbility.value);
  let TypeChartValue = Number (TypeChart.value);

  let AttackCorrection = 4096;
  let PowerCorrection = 4096;
  let DefenceCorrection = 4096;
  let DamageCorrection = 4096;

  if (AttackLankValue > 0) {
    AttackValue = Math.floor (AttackValue * ((2 + AttackLankValue) / 2));
  }
  else if (AttackLankValue < 0) {
    AttackValue = Math.floor (AttackValue * (2 / (2 - AttackLankValue)));
  }

  if (AttackAbilityValue == 7) {
    AttackCorrection = Math.round (AttackCorrection * 6144 / 4096);
  }
  else if (AttackAbilityValue == 9) {
    AttackCorrection = Math.round (AttackCorrection * 8192 / 4096);
  }
  else if (AttackAbilityValue == 12) {
    AttackCorrection = Math.round (AttackCorrection * 2048 / 4096);
  }

  if (AttackItemValue == 6) {
    AttackCorrection = Math.round (AttackCorrection * 6144 / 4096);
  }

  if (DefenceAbilityValue == 6) {
    AttackCorrection = Math.round (AttackCorrection * 2048 / 4096);
  }

  AttackValue = FiveWaste (AttackValue * AttackCorrection / 4096);
  if (AttackValue < 1) {
    AttackValue = 1;
  }

  if (FieldValue == 3) {
    PowerCorrection = Math.round (Math.round (PowerCorrection * 8192 / 4096) * 5325 / 4096)
  }
  else if (FieldValue == 2) {
    PowerCorrection = Math.round (Math.round (PowerCorrection * 6114 / 4096) * 5325 / 4096)
  }
  else if (FieldValue == 1) {
    PowerCorrection = Math.round (PowerCorrection * 5325 / 4096)
  }
  else if (FieldValue == -1) {
    PowerCorrection = Math.round (PowerCorrection * 2048 / 4096)
  }

  if (AttackItemValue == 1) {
    PowerCorrection = Math.round (PowerCorrection * 4505 / 4096)
  }
  else if (AttackItemValue == 2) {
    PowerCorrection = Math.round (PowerCorrection * 4915 / 4096)
  }
  else if (AttackItemValue == 4) {
    PowerCorrection = Math.round (PowerCorrection * 5325 / 4096)
  }
  else if (AttackItemValue == 7) {
    PowerCorrection = Math.floor (PowerCorrection * 2)
  }

  if (AttackAbilityValue == 1) {
    PowerCorrection = Math.round (PowerCorrection * 4915 / 4096);
  }
  else if (AttackAbilityValue == 3) {
    PowerCorrection = Math.round (PowerCorrection * 5120 / 4096);
  }
  else if (AttackAbilityValue == 4) {
    PowerCorrection = Math.round (PowerCorrection * 5325 / 4096);
  }
  else if (AttackAbilityValue == 5) {
    PowerCorrection = Math.round (PowerCorrection * 5448 / 4096);
  }
  else if (AttackAbilityValue == 6) {
    PowerCorrection = Math.round (PowerCorrection * 6114 / 4096);
  }
  else if (AttackAbilityValue == 8) {
    PowerCorrection = Math.floor (PowerCorrection * 2);
  }
  else if (AttackAbilityValue == 11) {
    PowerCorrection = Math.round (PowerCorrection * 3072 / 4096);
  }

  if (DefenceAbilityValue == 1) {
    PowerCorrection = Math.round (PowerCorrection * 5120 / 4096)
  }
  else if (DefenceAbilityValue == 5) {
    PowerCorrection = Math.round (PowerCorrection * 2048 / 4096)
  }

  PowerValue = FiveWaste (PowerValue * PowerCorrection / 4096);
  if (PowerValue < 1) {
    PowerValue = 1;
  }

  if (DefenceLankValue > 0) {
    DefenceValue = Math.floor (DefenceValue * ((2 + DefenceLankValue) / 2));
  }
  else if (DefenceLankValue < 0) {
    DefenceValue = Math.floor (DefenceValue * (2 / (2 - DefenceLankValue)));
  }

  if (DefenceItemValue == 3 || DefenceItemValue == 5 || DefenceItemValue == 6) {
    DefenceCorrection = Math.round (DefenceCorrection * 6144 / 4096)
  }
  
  if (DefenceAbilityValue == 2) {
    DefenceCorrection = Math.round (DefenceCorrection * 6144 / 4096)
  }
  else if (DefenceAbilityValue == 3) {
    DefenceCorrection = Math.round (DefenceCorrection * 8192 / 4096)
  }

  DefenceValue = FiveWaste (DefenceValue * DefenceCorrection / 4096);
  if (DefenceValue < 1) {
    DefenceValue = 1;
  }

  if (ReflectValue) {
    DamageCorrection = Math.round (DamageCorrection * 2048 / 4096);
  }
  if (AttackAbilityValue == 2) {
    DamageCorrection = Math.round (DamageCorrection * 5120 / 4096);
  }
  if (AttackAbilityValue == 10 && TypeChartValue < 0) {
    DamageCorrection = Math.round (DamageCorrection * 8192 / 4096);
  }
  if (DefenceAbilityValue == 4) {
    DamageCorrection = Math.round (DamageCorrection * 8192 / 4096);
  }
  if (DefenceAbilityValue == 7) {
    DamageCorrection = Math.round (DamageCorrection * 2048 / 4096);
  }
  if (DefenceAbilityValue == 10 && TypeChartValue > 0) {
    DamageCorrection = Math.round (DamageCorrection * 3072 / 4096);
  }
  if (AttackItemValue == 3 && TypeChartValue > 0) {
    DamageCorrection = Math.round (DamageCorrection * 4915 / 4096);
  }
  if (AttackItemValue == 5) {
    DamageCorrection = Math.round (DamageCorrection * 5324 / 4096);
  }
  if (DefenceItemValue == 7 && TypeChartValue > 0) {
    DamageCorrection = Math.round (DamageCorrection * 2048 / 4096);
  }

  let OriginalDamage = Math.floor (50 * 2 / 5 + 2);
  OriginalDamage = Math.floor (OriginalDamage * PowerValue * AttackValue / DefenceValue);
  OriginalDamage = Math.floor (OriginalDamage / 50 + 2);
  if (WeatherValue == -1) {
    OriginalDamage = FiveWaste (OriginalDamage * 2048 / 4096);
  }
  else if (WeatherValue == 1) {
    OriginalDamage = FiveWaste (OriginalDamage * 6144 / 4096);
  }

  let CriticalDamage = FiveWaste (OriginalDamage * 6144 / 4096)
  let OriginalDamageWithCritical = [];
  let CriticalPossibility;
  if (CriticalLankValue >= 0) {
    if (CriticalLankValue == 0) {
      CriticalPossibility = 24;
    }
    else if (CriticalLankValue == 1) {
      CriticalPossibility = 8;
    }
    else if (CriticalLankValue == 2) {
      CriticalPossibility = 2;
    }
    else if (CriticalLankValue == 3) {
      CriticalPossibility = 1;
    }

    for (let i = 0; i < CriticalPossibility - 1; i++) {
      OriginalDamageWithCritical.push (OriginalDamage);
    }
    OriginalDamageWithCritical.push (CriticalDamage);
  }
  else if (CriticalLankValue == -1) {
    OriginalDamageWithCritical.push (OriginalDamage)
  }

  let Damage = [];
  for (let i = 0; i < OriginalDamageWithCritical.length; i++) {
    for (let j = 0; j < 16; j++) {
      Damage.push (Math.floor (OriginalDamageWithCritical[i] * (0.85 + j / 100)));
    }
  }

  let DamageLength = Damage.length;

  if (StabValue) {
    if (AttackAbilityValue == 13) { 
      for (let i = 0; i < DamageLength; i++) {
        Damage[i] = FiveWaste (Damage[i] * 8192 / 4096);
      }
    } 
    else {
      for (let i = 0; i < DamageLength; i++) {
        Damage[i] = FiveWaste (Damage[i] * 6144 / 4096);
      }
    }
  }

  if (TypeChartValue == 2) {
    for (let i = 0; i < DamageLength; i++) {
      Damage[i] = Damage[i] * 4;
    }
  }
  else if (TypeChartValue == 1) {
    for (let i = 0; i < DamageLength; i++) {
      Damage[i] = Damage[i] * 2;
    }
  }
  else if (TypeChartValue == -1) {
    for (let i = 0; i < DamageLength; i++) {
      Damage[i] = Math.floor (Damage[i] * 0.5);
    }
  }
  else if (TypeChartValue == -1) {
    for (let i = 0; i < DamageLength; i++) {
      Damage[i] = Math.floor (Damage[i] * 0.25);
    }
  }

  if (AttackBurnedValue) {
    for (let i = 0; i < DamageLength; i++) {
      Damage[i] = FiveWaste (Damage[i] * 2048 / 4096);
    }
  }

  for (let i = 0; i < DamageLength; i++) {
    Damage[i] = FiveWaste (Damage[i] * DamageCorrection / 4096);
  }
  
  if (ProtectValue) {
    for (let i = 0; i < DamageLength; i++) {
      Damage[i] = FiveWaste (Damage[i] * 1024 / 4096);
    }
  }

  for (let i = 0; i < DamageLength; i++) {
    if (Damage[i] < 1) {
      Damage[i] = 1;
    }
  }

  return Damage;
}

function LeftHpCalculation (Damage) {
  let HpValue = Number (HP.value);
  if (!('LeftHp' in LeftHpCalculation)) {
    LeftHpCalculation.LeftHp = [[HpValue, 1]];
  }
  if (!('StaticDynamax' in LeftHpCalculation)) {
    LeftHpCalculation.StaticDynamax = Boolean (Dynamax.checked);
  }

  let DamagePattern = [];
  for (let i = 0; i < Damage.length; i++) {
    DamagePattern.push ([Damage[i], 1])
  }

  DamagePattern =  DamagePattern.sort (function(a,b){return(a[0] - b[0]);});

  let DamagePatternLength = DamagePattern.length;
  let index = 0;
  for (let i = 0; i < DamagePatternLength - 1; i++) {
    if (DamagePattern[index][0] != DamagePattern[index+1][0]) {
      index++;
    }
    else {
      DamagePattern[index][1] += DamagePattern[index+1][1];
      DamagePattern.splice (index+1, 1);
    }
  }

  let AccuracyValue = Number (Accuracy.value);
  if (AccuracyValue != 100) {
    let DamagePatternSum = 0;
    DamagePatternLength = DamagePattern.length
    for (let i = 0; i < DamagePatternLength; i++) {
      DamagePatternSum += DamagePattern[i][1];
      DamagePattern[i][1] *= AccuracyValue;
    }
    DamagePattern.unshift ([0, DamagePatternSum * (100 - AccuracyValue)]);
  }

  let CurrentDynamax = Boolean (Dynamax.checked);
  if ((LeftHpCalculation.StaticDynamax == false && CurrentDynamax == true) || (LeftHpCalculation.StaticDynamax == true && CountStaticExecutionTimes.StaticExecutionTimes == 1)) {
    for (let i = 0; i < LeftHpCalculation.LeftHp.length; i++) {
      LeftHpCalculation.LeftHp[i][0] *= 2;
    }
  }
  else if (LeftHpCalculation.StaticDynamax == true && CurrentDynamax == false) {
    for (let i = 0; i < LeftHpCalculation.LeftHp.length; i++) {
      LeftHpCalculation.LeftHp[i][0] = Math.ceil (LeftHpCalculation.LeftHp[i][0] * 0.5);
    }
  }
  LeftHpCalculation.StaticDynamax = CurrentDynamax;

  let NewLeftHp = [];
  let LeftHpLength = LeftHpCalculation.LeftHp.length;
  DamagePatternLength = DamagePattern.length;
  for (let i = 0; i < LeftHpLength; i++) {
    for (let j = 0; j < DamagePatternLength; j++) {
      if (LeftHpCalculation.LeftHp[i][0] - DamagePattern[j][0] >= 0) {
        if (LeftHpCalculation.LeftHp[i].length == 2) {
          NewLeftHp.push ([LeftHpCalculation.LeftHp[i][0] - DamagePattern[j][0], LeftHpCalculation.LeftHp[i][1] * DamagePattern[j][1]]);
        }
        else if (LeftHpCalculation.LeftHp[i].length == 3) {
          NewLeftHp.push ([LeftHpCalculation.LeftHp[i][0] - DamagePattern[j][0], LeftHpCalculation.LeftHp[i][1] * DamagePattern[j][1], LeftHpCalculation.LeftHp[i][2]]);
        }
      }
      else {
        if (LeftHpCalculation.LeftHp[i].length == 2) {
          NewLeftHp.push ([0, LeftHpCalculation.LeftHp[i][1] * DamagePattern[j][1]]);
        }
        else if (LeftHpCalculation.LeftHp[i].length == 3) {
          NewLeftHp.push ([0, LeftHpCalculation.LeftHp[i][1] * DamagePattern[j][1], LeftHpCalculation.LeftHp[i][2]]);
        }
      }
    }
  }

  NewLeftHp =  NewLeftHp.sort (function(a,b) {
                                if (a[0] != b[0]) {
                                  return(a[0] - b[0]);
                                }
                                else {
                                  return (a[2] - b[2]);
                                }
                              });

  index = 0;
  let NewLeftHpLength = NewLeftHp.length;
  for (let i = 0; i < NewLeftHpLength - 1; i++) {
    if (NewLeftHp[index].length == 2) {
      if (NewLeftHp[index][0] != NewLeftHp[index+1][0]) {
        index++;
      }
      else {
        NewLeftHp[index][1] += NewLeftHp[index+1][1];
        NewLeftHp.splice (index+1, 1);
      }
    }
    else if (NewLeftHp[index].length == 3) {
      if (NewLeftHp[index][0] != NewLeftHp[index+1][0] || NewLeftHp[index][2] != NewLeftHp[index+1][2]) {
        index++;
      }
      else {
        NewLeftHp[index][1] += NewLeftHp[index+1][1];
        NewLeftHp.splice (index+1, 1);
      }
    }
  }

  let DefenceItemValue = Number (DefenceItem.value);
  let DefenceAbilityValue = Number (DefenceAbility.value);
  let StatusAilmentValue = Number (StatusAilment.value);

  // Berrys
  if (DefenceItemValue == 1) {
    if (CountStaticExecutionTimes.StaticExecutionTimes == 1) {
      for (let i = 0; i < NewLeftHp.length; i++) {
        NewLeftHp[i].push (0);
      }
    }

    let RecoveryValue = Math.floor (HpValue / 3);
    let RecoveryBoader;
    if (CurrentDynamax == false) {
      RecoveryBoader = Math.floor (HpValue / 4);
    }
    else {
      RecoveryBoader = Math.floor (Hpvalue * 2 / 4);
    }
    for (let i = 0; i < NewLeftHp.length; i++) {
      if (NewLeftHp[i][2] == 0 && NewLeftHp[i][0] != 0 && NewLeftHp [i][0] <= RecoveryBoader) {
        NewLeftHp[i][0] += RecoveryValue;
        NewLeftHp[i][2] = 1;
      }
    }
  }
  else if (DefenceItemValue == 2) {
    if (CountStaticExecutionTimes.StaticExecutionTimes == 1) {
      for (let i = 0; i < NewLeftHp.length; i++) {
        NewLeftHp[i].push (0);
      }
    }
    let RecoveryValue = Math.floor (HpValue / 4);
    let RecoveryBoader;
    if (CurrentDynamax == false) {
      RecoveryBoader = Math.floor (HpValue / 2);
    }
    else {
      RecoveryBoader = Math.floor (Hpvalue * 2 / 2);
    }
    for (let i = 0; i < NewLeftHp.length; i++) {
      if (NewLeftHp[i][2] == 0 && NewLeftHp[i][0] != 0 && NewLeftHp [i][0] <= RecoveryBoader) {
        NewLeftHp[i][0] += RecoveryValue;
        NewLeftHp[i][2] = 1;
      }
    }
  }

  if (DefenceAbilityValue == 11) {
    let DamageValue = Math.floor (HpValue / 8);
    for (let i = 0; i < NewLeftHp.length; i++) {
      if (NewLeftHp [i][0] != 0) {
        NewLeftHp[i][0] -= DamageValue;
        if (NewLeftHp < 0) {
          NewLeftHp = 0;
        }
      }
    }
  }
  else if (DefenceAbilityValue == 8) {
    let RecoveryValue = Math.floor (HpValue / 16);
    for (let i = 0; i < NewLeftHp.length; i++) {
      if (NewLeftHp [i][0] != 0) {
        NewLeftHp[i][0] += RecoveryValue;
      }
    }
  }

  if (DefenceItemValue == 4) {
    let RecoveryValue = Math.floor (HpValue / 16);
    for (let i = 0; i < NewLeftHp.length; i++) {
      if (NewLeftHp [i][0] != 0) {
        NewLeftHp[i][0] += RecoveryValue;
      }
    }
  }

  if (StatusAilmentValue == 2) {
    let DamageValue = Math.floor (HpValue / 8);
    for (let i = 0; i < NewLeftHp.length; i++) {
      if (NewLeftHp [i][0] != 0) {
        NewLeftHp[i][0] -= DamageValue;
        if (NewLeftHp < 0) {
          NewLeftHp = 0;
        }
      }
    }
  }
  else if (StatusAilmentValue == 3) {
    let DamageValue = Math.floor (HpValue * CountStaticExecutionTimes.StaticExecutionTimes / 16);
    for (let i = 0; i < NewLeftHp.length; i++) {
      if (NewLeftHp [i][0] != 0) {
        NewLeftHp[i][0] -= DamageValue;
        if (NewLeftHp < 0) {
          NewLeftHp = 0;
        }
      }
    }
  }

  if (DefenceAbilityValue == 9) {
    let RecoveryValue = Math.floor (HpValue / 8);
    for (let i = 0; i < NewLeftHp.length; i++) {
      if (NewLeftHp [i][0] != 0) {
        NewLeftHp[i][0] += RecoveryValue;
      }
    }
  }

  if (StatusAilmentValue == 1) {
    let DamageValue = Math.floor (HpValue / 16);
    for (let i = 0; i < NewLeftHp.length; i++) {
      if (NewLeftHp [i][0] != 0) {
        NewLeftHp[i][0] -= DamageValue;
        if (NewLeftHp < 0) {
          NewLeftHp = 0;
        }
      }
    }
  }

  NewLeftHp =  NewLeftHp.sort (function(a,b) {
                              if (a[0] != b[0]) {
                                return(a[0] - b[0]);
                              }
                              else {
                                return (a[2] - b[2]);
                              }
                            });

  index = 0;
  NewLeftHpLength = NewLeftHp.length;
  for (let i = 0; i < NewLeftHpLength - 1; i++) {
    if (NewLeftHp[index].length == 2) {
      if (NewLeftHp[index][0] != NewLeftHp[index+1][0]) {
        index++;
      }
      else {
        NewLeftHp[index][1] += NewLeftHp[index+1][1];
        NewLeftHp.splice (index+1, 1);
      }
    }
    else if (NewLeftHp[index].length == 3) {
      if (NewLeftHp[index][0] != NewLeftHp[index+1][0] || NewLeftHp[index][2] != NewLeftHp[index+1][2]) {
        index++;
      }
      else {
        NewLeftHp[index][1] += NewLeftHp[index+1][1];
        NewLeftHp.splice (index+1, 1);
      }
    }
  }

  LeftHpCalculation.LeftHp.splice (0);
  for (let i = 0; i < NewLeftHp.length; i++) {
    LeftHpCalculation.LeftHp.push (NewLeftHp[i]);
  }
}

function FaintPossibilityCalculation () {
  let FaintPatterns = 0;
  let NotFaintPatterns = 0;

  for (let i = 0; i < LeftHpCalculation.LeftHp.length; i++) {
    if (LeftHpCalculation.LeftHp[i][0] == 0) {
      FaintPatterns += LeftHpCalculation.LeftHp[i][1];
    }
    else {
      NotFaintPatterns += LeftHpCalculation.LeftHp[i][1];
    }
  }

  return FaintPatterns / (FaintPatterns + NotFaintPatterns);
}

function PrintMsg (ExecutionTimes, FaintPossibility) {
  let HpValue = Number (HP.value);
  let DynamaxValue = Boolean (Dynamax.checked);
  if (DynamaxValue == true) {
    HpValue *= 2;
  }
  let MaxDamage = HpValue - LeftHpCalculation.LeftHp[0][0];
  let MinDamage = HpValue - LeftHpCalculation.LeftHp[LeftHpCalculation.LeftHp.length - 1][0];

  let AttackValue = Number (Attack.value);
  let PowerValue = Number (Power.value);
  let DefenceValue = Number (Defence.value);
  if (ExecutionTimes >= 2) {
    msg.innerText = msg.innerText + '\n\n' + '-----------------------------------------' + '\n\n';
  }
  msg.innerText = 
    msg.innerText + 
    ExecutionTimes + "ターン目" + "\n\n" +
    "攻撃力：" + AttackValue + "\n" +
    "技威力：" + PowerValue + "\n" +
    "防御力：" + DefenceValue + "\n" +
    "合計ダメージ：" + MinDamage + "~" + MaxDamage + "\n" +
    "このターンまでの瀕死率：" + (Math.round (FaintPossibility * 1000)) / 10 + "%";
}

// Execution Button
function DamageCalculationExecution(){
  let ExecutionTimes = CountStaticExecutionTimes();
  HP.disabled = true;
  AttackItem.disabled = true;
  AttackAbility.disabled = true;
  DefenceItem.disabled = true;
  DefenceAbility.disabled = true;
  Damage = DamageCalculation ();
  LeftHpCalculation (Damage);
  FaintPossibility = FaintPossibilityCalculation ();
  PrintMsg (ExecutionTimes, FaintPossibility);
} 

function ResetAll () {
  msg.innerText = null;
  if ('StaticExecutionTimes' in CountStaticExecutionTimes) {
    CountStaticExecutionTimes.StaticExecutionTimes = 0;
  }
  if ('LeftHp' in LeftHpCalculation) {
    let HpValue = Number (HP.value);
    LeftHpCalculation.LeftHp = [[HpValue, 1]];
  }
  HP.disabled = false;
  AttackItem.disabled = false;
  AttackAbility.disabled = false;
  DefenceItem.disabled = false;
  DefenceAbility.disabled = false;

  if ('StaticDynamax' in LeftHpCalculation) {
    LeftHpCalculation.StaticDynamax = false;
  }
}


