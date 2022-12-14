Index = function () { }
Index.NONE = -1;

Option = function () { }
Option.ALPHABET_SETUP = 0;
Option.RANDOM_SETUP = 1;

State = function () { }
State.READY = 0;
State.PLAYING = 1;

Phase = function () { }
Phase.NONE = -1;
Phase.SETUP_SETTLEMENT1 = 0;
Phase.SETUP_ROAD1 = 1;
Phase.SETUP_SETTLEMENT2 = 2;
Phase.SETUP_ROAD2 = 3;
Phase.DICE = 4;
Phase.BURST = 5;
Phase.ROBBER1 = 6;
Phase.ROBBER2 = 7;
Phase.MAIN = 8;
Phase.BUILD_ROAD = 9;
Phase.BUILD_SETTLEMENT = 10;
Phase.BUILD_CITY = 11;
Phase.DOMESTIC_TRADE1 = 12;
Phase.DOMESTIC_TRADE2 = 13;
Phase.INTERNATIONAL_TRADE = 14;
Phase.SOLDIER1 = 15;
Phase.SOLDIER2 = 16;
Phase.ROAD_BUILDING1 = 17;
Phase.ROAD_BUILDING2 = 18;
Phase.YEAR_OF_PLENTY1 = 19;
Phase.YEAR_OF_PLENTY2 = 20;
Phase.MONOPOLY = 21;
Phase.DOMESTIC_TRADE3 = 22;

Land = function () { }
Land.DESERT = -1;

Resource = function () { }
Resource.BRICK = 0;
Resource.WOOL = 1;
Resource.ORE = 2;
Resource.GRAIN = 3;
Resource.LUMBER = 4;

SettlementRank = function () { }
SettlementRank.NONE = 0x0000;
SettlementRank.SETTLEMENT = 0x0100;
SettlementRank.CITY = 0x0200;

Card = function () { }
Card.SOLDIER = 0;
Card.VICTORY_POINT = 1;
Card.ROAD_BUILDING = 2;
Card.YEAR_OF_PLENTY = 3;
Card.MONOPOLY = 4;

Harbor = function () { }
Harbor.GENERIC = 0;
Harbor.BRICK = 1;
Harbor.WOOL = 2;
Harbor.ORE = 3;
Harbor.GRAIN = 4;
Harbor.LUMBER = 5;

FONT_COLOR = [
      'red'
    , 'dodgerblue'
    , 'yellow'
    , 'lime'
];

COLOR_NAME = [
      '��'
    , '��'
    , '��'
    , '��'
];

RESOURCE_NAME = [
      '�y'
    , '�r'
    , '�S'
    , '��'
    , '��'
];

SETTLEMENT_LINK = [
      [0, 6]        // 0
    , [0, 1]        // 1
    , [1, 2, 7]     // 2
    , [2, 3]        // 3
    , [3, 4, 8]     // 4
    , [4, 5]        // 5
    , [5, 9]        // 6
    , [10, 18]      // 7
    , [6, 10, 11]   // 8
    , [11, 12, 19]  // 9
    , [7, 12, 13]   // 10
    , [13, 14, 20]  // 11
    , [8, 14, 15]   // 12
    , [15, 16, 21]  // 13
    , [9, 16, 17]   // 14
    , [17, 22]      // 15
    , [23, 33]      // 16
    , [18, 23, 24]  // 17
    , [24, 25, 34]  // 18
    , [19, 25, 26]  // 19
    , [26, 27, 35]  // 20
    , [20, 27, 28]  // 21
    , [28, 29, 36]  // 22
    , [21, 29, 30]  // 23
    , [30, 31, 37]  // 24
    , [22, 31, 32]  // 25
    , [32, 38]      // 26
    , [33, 39]      // 27
    , [39, 40, 49]  // 28
    , [34, 40, 41]  // 29
    , [41, 42, 50]  // 30
    , [35, 42, 43]  // 31
    , [43, 44, 51]  // 32
    , [36, 44, 45]  // 33
    , [45, 46, 52]  // 34
    , [37, 46, 47]  // 35
    , [47, 48, 53]  // 36
    , [38, 48]      // 37
    , [49, 54]      // 38
    , [54, 55, 62]  // 39
    , [50, 55, 56]  // 40
    , [56, 57, 63]  // 41
    , [51, 57, 58]  // 42
    , [58, 59, 64]  // 43
    , [52, 59, 60]  // 44
    , [60, 61, 65]  // 45
    , [53, 61]      // 46
    , [62, 66]      // 47
    , [66, 67]      // 48
    , [63, 67, 68]  // 49
    , [68, 69]      // 50
    , [64, 69, 70]  // 51
    , [70, 71]      // 52
    , [65, 71]      // 53
];

ROAD_LINK = [
      [1, 0]    // 0
    , [1, 2]    // 1
    , [2, 3]    // 2
    , [3, 4]    // 3
    , [4, 5]    // 4
    , [5, 6]    // 5
    , [0, 8]    // 6
    , [2, 10]   // 7
    , [4, 12]   // 8
    , [6, 14]   // 9
    , [7, 8]    // 10
    , [8, 9]    // 11
    , [9, 10]   // 12
    , [10, 11]  // 13
    , [11, 12]  // 14
    , [12, 13]  // 15
    , [13, 14]  // 16
    , [14, 15]  // 17
    , [7, 17]   // 18
    , [9, 19]   // 19
    , [11, 21]  // 20
    , [13, 23]  // 21
    , [15, 25]  // 22
    , [16, 17]  // 23
    , [17, 18]  // 24
    , [18, 19]  // 25
    , [19, 20]  // 26
    , [20, 21]  // 27
    , [21, 22]  // 28
    , [22, 23]  // 29
    , [23, 24]  // 30
    , [24, 25]  // 31
    , [25, 26]  // 32
    , [16, 27]  // 33
    , [18, 29]  // 34
    , [20, 31]  // 35
    , [22, 33]  // 36
    , [24, 35]  // 37
    , [26, 37]  // 38
    , [27, 28]  // 39
    , [28, 29]  // 40
    , [29, 30]  // 41
    , [30, 31]  // 42
    , [31, 32]  // 43
    , [32, 33]  // 44
    , [33, 34]  // 45
    , [34, 35]  // 46
    , [35, 36]  // 47
    , [36, 37]  // 48
    , [28, 38]  // 49
    , [30, 40]  // 50
    , [32, 42]  // 51
    , [34, 44]  // 52
    , [36, 46]  // 53
    , [38, 39]  // 54
    , [39, 40]  // 55
    , [40, 41]  // 56
    , [41, 42]  // 57
    , [42, 43]  // 58
    , [43, 44]  // 59
    , [44, 45]  // 60
    , [45, 46]  // 61
    , [39, 47]  // 62
    , [41, 49]  // 63
    , [43, 51]  // 64
    , [45, 53]  // 65
    , [47, 48]  // 66
    , [48, 49]  // 67
    , [49, 50]  // 68
    , [50, 51]  // 69
    , [51, 52]  // 70
    , [52, 53]  // 71
];

LAND_LINK = [
      [0, 1, 2, 8, 9, 10]       // 0
    , [2, 3, 4, 10, 11, 12]     // 1
    , [4, 5, 6, 12, 13, 14]     // 2
    , [7, 8, 9, 17, 18, 19]     // 3
    , [9, 10, 11, 19, 20, 21]   // 4
    , [11, 12, 13, 21, 22, 23]  // 5
    , [13, 14, 15, 23, 24, 25]  // 6
    , [16, 17, 18, 27, 28, 29]  // 7
    , [18, 19, 20, 29, 30, 31]  // 8
    , [20, 21, 22, 31, 32, 33]  // 9
    , [22, 23, 24, 33, 34, 35]  // 10
    , [24, 25, 26, 35, 36, 37]  // 11
    , [28, 29, 30, 38, 39, 40]  // 12
    , [30, 31, 32, 40, 41, 42]  // 13
    , [32, 33, 34, 42, 43, 44]  // 14
    , [34, 35, 36, 44, 45, 46]  // 15
    , [39, 40, 41, 47, 48, 49]  // 16
    , [41, 42, 43, 49, 50, 51]  // 17
    , [43, 44, 45, 51, 52, 53]  // 18
];