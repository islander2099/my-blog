document.addEventListener('DOMContentLoaded', () => {
    // 전체 로또 당첨 데이터 (사용자 제공 최신본)
    const lottoData = [
        { round: 1218, numbers: [3, 28, 31, 32, 42, 45], bonus: 25 },
        { round: 1217, numbers: [8, 10, 15, 20, 29, 41], bonus: 31 },
        { round: 1216, numbers: [3, 10, 14, 15, 23, 25], bonus: 24 },
        { round: 1215, numbers: [13, 15, 19, 21, 44, 45], bonus: 39 },
        { round: 1214, numbers: [10, 15, 19, 27, 30, 33], bonus: 14 },
        { round: 1213, numbers: [5, 11, 25, 27, 36, 38], bonus: 2 },
        { round: 1212, numbers: [5, 8, 25, 31, 41, 44], bonus: 45 },
        { round: 1211, numbers: [23, 26, 27, 35, 38, 40], bonus: 10 },
        { round: 1210, numbers: [1, 7, 9, 17, 27, 38], bonus: 31 },
        { round: 1209, numbers: [2, 17, 20, 35, 37, 39], bonus: 24 },
        { round: 1208, numbers: [6, 27, 30, 36, 38, 42], bonus: 25 },
        { round: 1207, numbers: [10, 22, 24, 27, 38, 45], bonus: 11 },
        { round: 1206, numbers: [1, 3, 17, 26, 27, 42], bonus: 23 },
        { round: 1205, numbers: [1, 4, 16, 23, 31, 41], bonus: 2 },
        { round: 1204, numbers: [8, 16, 28, 30, 31, 44], bonus: 27 },
        { round: 1203, numbers: [3, 6, 18, 29, 35, 39], bonus: 24 },
        { round: 1202, numbers: [5, 12, 21, 33, 37, 40], bonus: 7 },
        { round: 1201, numbers: [7, 9, 24, 27, 35, 36], bonus: 37 },
        { round: 1200, numbers: [1, 2, 4, 16, 20, 32], bonus: 45 },
        { round: 1199, numbers: [16, 24, 25, 30, 31, 32], bonus: 7 },
        { round: 1198, numbers: [26, 30, 33, 38, 39, 41], bonus: 21 },
        { round: 1197, numbers: [1, 5, 7, 26, 28, 43], bonus: 30 },
        { round: 1196, numbers: [8, 12, 15, 29, 40, 45], bonus: 14 },
        { round: 1195, numbers: [3, 15, 27, 33, 34, 36], bonus: 37 },
        { round: 1194, numbers: [3, 13, 15, 24, 33, 37], bonus: 2 },
        { round: 1193, numbers: [6, 9, 16, 19, 24, 28], bonus: 17 },
        { round: 1192, numbers: [10, 16, 23, 36, 39, 40], bonus: 11 },
        { round: 1191, numbers: [1, 4, 11, 12, 20, 41], bonus: 2 },
        { round: 1190, numbers: [7, 9, 19, 23, 26, 45], bonus: 33 },
        { round: 1189, numbers: [9, 19, 29, 35, 37, 38], bonus: 31 },
        { round: 1188, numbers: [3, 4, 12, 19, 22, 27], bonus: 9 },
        { round: 1187, numbers: [5, 13, 26, 29, 37, 40], bonus: 42 },
        { round: 1186, numbers: [2, 8, 13, 16, 23, 28], bonus: 35 },
        { round: 1185, numbers: [6, 17, 22, 28, 29, 32], bonus: 38 },
        { round: 1184, numbers: [14, 16, 23, 25, 31, 37], bonus: 42 },
        { round: 1183, numbers: [4, 15, 17, 23, 27, 36], bonus: 31 },
        { round: 1182, numbers: [1, 13, 21, 25, 28, 31], bonus: 22 },
        { round: 1181, numbers: [8, 10, 14, 20, 33, 41], bonus: 28 },
        { round: 1180, numbers: [6, 12, 18, 37, 40, 41], bonus: 3 },
        { round: 1179, numbers: [3, 16, 18, 24, 40, 44], bonus: 21 },
        { round: 1178, numbers: [5, 6, 11, 27, 43, 44], bonus: 17 },
        { round: 1177, numbers: [3, 7, 15, 16, 19, 43], bonus: 21 },
        { round: 1176, numbers: [7, 9, 11, 21, 30, 35], bonus: 29 },
        { round: 1175, numbers: [3, 4, 6, 8, 32, 42], bonus: 31 },
        { round: 1174, numbers: [8, 11, 14, 17, 36, 39], bonus: 22 },
        { round: 1173, numbers: [1, 5, 18, 20, 30, 35], bonus: 3 },
        { round: 1172, numbers: [7, 9, 24, 40, 42, 44], bonus: 45 },
        { round: 1171, numbers: [3, 6, 7, 11, 12, 17], bonus: 19 },
        { round: 1170, numbers: [3, 13, 28, 34, 38, 42], bonus: 25 },
        { round: 1169, numbers: [5, 12, 24, 26, 39, 42], bonus: 20 },
        { round: 1168, numbers: [9, 21, 24, 30, 33, 37], bonus: 29 },
        { round: 1167, numbers: [8, 23, 31, 35, 39, 40], bonus: 24 },
        { round: 1166, numbers: [14, 23, 25, 27, 29, 42], bonus: 16 },
        { round: 1165, numbers: [6, 7, 27, 29, 38, 45], bonus: 17 },
        { round: 1164, numbers: [17, 18, 23, 25, 38, 39], bonus: 22 },
        { round: 1163, numbers: [2, 13, 15, 16, 33, 43], bonus: 4 },
        { round: 1162, numbers: [20, 21, 22, 25, 28, 29], bonus: 6 },
        { round: 1161, numbers: [2, 12, 20, 24, 34, 42], bonus: 37 },
        { round: 1160, numbers: [7, 13, 18, 36, 39, 45], bonus: 19 },
        { round: 1159, numbers: [3, 9, 27, 28, 38, 39], bonus: 7 },
        { round: 1158, numbers: [21, 25, 27, 32, 37, 38], bonus: 20 },
        { round: 1157, numbers: [5, 7, 12, 20, 25, 26], bonus: 28 },
        { round: 1156, numbers: [30, 31, 34, 39, 41, 45], bonus: 7 },
        { round: 1155, numbers: [10, 16, 19, 27, 37, 38], bonus: 13 },
        { round: 1154, numbers: [4, 8, 22, 26, 32, 38], bonus: 27 },
        { round: 1153, numbers: [1, 9, 10, 13, 35, 44], bonus: 5 },
        { round: 1152, numbers: [30, 31, 32, 35, 36, 37], bonus: 5 },
        { round: 1151, numbers: [2, 3, 9, 15, 27, 29], bonus: 8 },
        { round: 1150, numbers: [8, 9, 18, 35, 39, 45], bonus: 25 },
        { round: 1149, numbers: [8, 15, 19, 21, 32, 36], bonus: 38 },
        { round: 1148, numbers: [3, 6, 13, 15, 16, 22], bonus: 32 },
        { round: 1147, numbers: [7, 11, 24, 26, 27, 37], bonus: 32 },
        { round: 1146, numbers: [6, 11, 17, 19, 40, 43], bonus: 28 },
        { round: 1145, numbers: [2, 11, 31, 33, 37, 44], bonus: 32 },
        { round: 1144, numbers: [3, 4, 12, 15, 26, 34], bonus: 6 },
        { round: 1143, numbers: [10, 16, 17, 27, 28, 36], bonus: 6 },
        { round: 1142, numbers: [2, 8, 28, 30, 37, 41], bonus: 22 },
        { round: 1141, numbers: [7, 11, 12, 21, 26, 35], bonus: 20 },
        { round: 1140, numbers: [7, 10, 22, 29, 31, 38], bonus: 15 },
        { round: 1139, numbers: [5, 12, 15, 30, 37, 40], bonus: 18 },
        { round: 1138, numbers: [14, 16, 19, 20, 29, 34], bonus: 35 },
        { round: 1137, numbers: [4, 9, 12, 15, 33, 45], bonus: 26 },
        { round: 1136, numbers: [21, 33, 35, 38, 42, 44], bonus: 1 },
        { round: 1135, numbers: [1, 6, 13, 19, 21, 33], bonus: 4 },
        { round: 1134, numbers: [3, 7, 9, 13, 19, 24], bonus: 23 },
        { round: 1133, numbers: [13, 14, 20, 28, 29, 34], bonus: 23 },
        { round: 1132, numbers: [6, 7, 19, 28, 34, 41], bonus: 5 },
        { round: 1131, numbers: [1, 2, 6, 14, 27, 38], bonus: 33 },
        { round: 1130, numbers: [15, 19, 21, 25, 27, 28], bonus: 40 },
        { round: 1129, numbers: [5, 10, 11, 17, 28, 34], bonus: 22 },
        { round: 1128, numbers: [1, 5, 8, 16, 28, 33], bonus: 45 },
        { round: 1127, numbers: [10, 15, 24, 30, 31, 37], bonus: 32 },
        { round: 1126, numbers: [4, 5, 9, 11, 37, 40], bonus: 7 },
        { round: 1125, numbers: [6, 14, 25, 33, 40, 44], bonus: 30 },
        { round: 1124, numbers: [3, 8, 17, 30, 33, 34], bonus: 28 },
        { round: 1123, numbers: [13, 19, 21, 24, 34, 35], bonus: 26 },
        { round: 1122, numbers: [3, 6, 21, 30, 34, 35], bonus: 22 },
        { round: 1121, numbers: [6, 24, 31, 32, 38, 44], bonus: 8 },
        { round: 1120, numbers: [2, 19, 26, 31, 38, 41], bonus: 34 },
        { round: 1119, numbers: [1, 9, 12, 13, 20, 45], bonus: 3 },
        { round: 1118, numbers: [11, 13, 14, 15, 16, 45], bonus: 3 },
        { round: 1117, numbers: [3, 4, 9, 30, 33, 36], bonus: 7 },
        { round: 1116, numbers: [15, 16, 17, 25, 30, 31], bonus: 32 },
        { round: 1115, numbers: [7, 12, 23, 32, 34, 36], bonus: 8 },
        { round: 1114, numbers: [10, 16, 19, 32, 33, 38], bonus: 3 },
        { round: 1113, numbers: [11, 13, 20, 21, 32, 44], bonus: 8 },
        { round: 1112, numbers: [16, 20, 26, 36, 42, 44], bonus: 24 },
        { round: 1111, numbers: [3, 13, 30, 33, 43, 45], bonus: 4 },
        { round: 1110, numbers: [3, 7, 11, 20, 22, 41], bonus: 24 },
        { round: 1109, numbers: [10, 12, 13, 19, 33, 40], bonus: 2 },
        { round: 1108, numbers: [7, 19, 26, 37, 39, 44], bonus: 27 },
        { round: 1107, numbers: [6, 14, 30, 31, 40, 41], bonus: 29 },
        { round: 1106, numbers: [1, 3, 4, 29, 42, 45], bonus: 36 },
        { round: 1105, numbers: [6, 16, 34, 37, 39, 40], bonus: 11 },
        { round: 1104, numbers: [1, 7, 21, 30, 35, 38], bonus: 2 },
        { round: 1103, numbers: [10, 12, 29, 31, 40, 44], bonus: 2 },
        { round: 1102, numbers: [13, 14, 22, 26, 37, 38], bonus: 20 },
        { round: 1101, numbers: [6, 7, 13, 28, 36, 42], bonus: 41 },
        { round: 1100, numbers: [17, 26, 29, 30, 31, 43], bonus: 12 },
        { round: 1099, numbers: [3, 20, 28, 38, 40, 43], bonus: 4 },
        { round: 1098, numbers: [12, 16, 21, 24, 41, 43], bonus: 15 },
        { round: 1097, numbers: [14, 33, 34, 35, 37, 40], bonus: 4 },
        { round: 1096, numbers: [1, 12, 16, 19, 23, 43], bonus: 34 },
        { round: 1095, numbers: [8, 14, 28, 29, 34, 40], bonus: 12 },
        { round: 1094, numbers: [6, 7, 15, 22, 26, 40], bonus: 41 },
        { round: 1093, numbers: [10, 17, 22, 30, 35, 43], bonus: 44 },
        { round: 1092, numbers: [7, 18, 19, 26, 33, 45], bonus: 37 },
        { round: 1091, numbers: [6, 20, 23, 24, 28, 30], bonus: 44 },
        { round: 1090, numbers: [12, 19, 21, 29, 40, 45], bonus: 1 },
        { round: 1089, numbers: [4, 18, 31, 37, 42, 43], bonus: 40 },
        { round: 1088, numbers: [11, 21, 22, 30, 39, 44], bonus: 31 },
        { round: 1087, numbers: [13, 14, 18, 21, 34, 44], bonus: 16 },
        { round: 1086, numbers: [11, 16, 25, 27, 35, 36], bonus: 37 },
        { round: 1085, numbers: [4, 7, 17, 18, 38, 44], bonus: 36 },
        { round: 1084, numbers: [8, 12, 13, 29, 33, 42], bonus: 5 },
        { round: 1083, numbers: [3, 7, 14, 15, 22, 38], bonus: 17 },
        { round: 1082, numbers: [21, 26, 27, 32, 34, 42], bonus: 31 },
        { round: 1081, numbers: [1, 9, 16, 23, 24, 38], bonus: 17 },
        { round: 1080, numbers: [13, 16, 23, 31, 36, 44], bonus: 38 },
        { round: 1079, numbers: [4, 8, 18, 24, 37, 45], bonus: 6 },
        { round: 1078, numbers: [6, 10, 11, 14, 36, 38], bonus: 43 },
        { round: 1077, numbers: [4, 8, 17, 30, 40, 43], bonus: 34 },
        { round: 1076, numbers: [3, 7, 9, 33, 36, 37], bonus: 10 },
        { round: 1075, numbers: [1, 23, 24, 35, 44, 45], bonus: 10 },
        { round: 1074, numbers: [1, 6, 20, 27, 28, 41], bonus: 15 },
        { round: 1073, numbers: [6, 18, 28, 30, 32, 38], bonus: 15 },
        { round: 1072, numbers: [16, 18, 20, 23, 32, 43], bonus: 27 },
        { round: 1071, numbers: [1, 2, 11, 21, 30, 35], bonus: 39 },
        { round: 1070, numbers: [3, 6, 14, 22, 30, 41], bonus: 36 },
        { round: 1069, numbers: [1, 10, 18, 22, 28, 31], bonus: 44 },
        { round: 1068, numbers: [4, 7, 19, 26, 33, 35], bonus: 3 },
        { round: 1067, numbers: [7, 10, 19, 23, 28, 33], bonus: 18 },
        { round: 1066, numbers: [6, 11, 16, 19, 21, 32], bonus: 45 },
        { round: 1065, numbers: [3, 18, 19, 23, 32, 45], bonus: 24 },
        { round: 1064, numbers: [3, 6, 9, 18, 22, 35], bonus: 14 },
        { round: 1063, numbers: [3, 6, 22, 23, 24, 38], bonus: 30 },
        { round: 1062, numbers: [20, 31, 32, 40, 41, 45], bonus: 12 },
        { round: 1061, numbers: [4, 24, 27, 35, 37, 45], bonus: 15 },
        { round: 1060, numbers: [3, 10, 24, 33, 38, 45], bonus: 36 },
        { round: 1059, numbers: [7, 10, 22, 25, 34, 40], bonus: 27 },
        { round: 1058, numbers: [11, 23, 25, 30, 32, 40], bonus: 42 },
        { round: 1057, numbers: [8, 13, 19, 27, 40, 45], bonus: 12 },
        { round: 1056, numbers: [13, 20, 24, 32, 36, 45], bonus: 29 },
        { round: 1055, numbers: [4, 7, 12, 14, 22, 33], bonus: 31 },
        { round: 1054, numbers: [14, 19, 27, 28, 30, 45], bonus: 33 },
        { round: 1053, numbers: [22, 26, 29, 30, 34, 45], bonus: 15 },
        { round: 1052, numbers: [5, 17, 26, 27, 35, 38], bonus: 1 },
        { round: 1051, numbers: [21, 26, 30, 32, 33, 35], bonus: 44 },
        { round: 1050, numbers: [6, 12, 31, 35, 38, 43], bonus: 17 },
        { round: 1049, numbers: [3, 5, 13, 20, 21, 37], bonus: 17 },
        { round: 1048, numbers: [6, 12, 17, 21, 32, 39], bonus: 30 },
        { round: 1047, numbers: [2, 20, 33, 40, 42, 44], bonus: 32 },
        { round: 1046, numbers: [7, 16, 25, 29, 35, 36], bonus: 28 },
        { round: 1045, numbers: [6, 14, 15, 19, 21, 41], bonus: 37 },
        { round: 1044, numbers: [12, 17, 20, 26, 28, 36], bonus: 4 },
        { round: 1043, numbers: [3, 5, 12, 22, 26, 31], bonus: 19 },
        { round: 1042, numbers: [5, 14, 15, 23, 34, 43], bonus: 4 },
        { round: 1041, numbers: [6, 7, 9, 11, 17, 18], bonus: 45 },
        { round: 1040, numbers: [8, 16, 26, 29, 31, 36], bonus: 11 },
        { round: 1039, numbers: [2, 3, 6, 19, 36, 39], bonus: 26 },
        { round: 1038, numbers: [7, 16, 24, 27, 37, 44], bonus: 2 },
        { round: 1037, numbers: [2, 14, 15, 22, 27, 33], bonus: 31 },
        { round: 1036, numbers: [2, 5, 22, 32, 34, 45], bonus: 39 },
        { round: 1035, numbers: [9, 14, 34, 35, 41, 42], bonus: 2 },
        { round: 1034, numbers: [26, 31, 32, 33, 38, 40], bonus: 11 },
        { round: 1033, numbers: [3, 11, 15, 20, 35, 44], bonus: 10 },
        { round: 1032, numbers: [1, 6, 12, 19, 36, 42], bonus: 28 },
        { round: 1031, numbers: [6, 7, 22, 32, 35, 36], bonus: 19 },
        { round: 1030, numbers: [2, 5, 11, 17, 24, 29], bonus: 9 },
        { round: 1029, numbers: [12, 30, 32, 37, 39, 41], bonus: 24 },
        { round: 1028, numbers: [5, 7, 12, 13, 18, 35], bonus: 23 },
        { round: 1027, numbers: [14, 16, 27, 35, 39, 45], bonus: 5 },
        { round: 1026, numbers: [5, 12, 13, 31, 32, 41], bonus: 34 },
        { round: 1025, numbers: [8, 9, 20, 25, 29, 33], bonus: 7 },
        { round: 1024, numbers: [9, 18, 20, 22, 38, 44], bonus: 10 },
        { round: 1023, numbers: [10, 14, 16, 18, 29, 35], bonus: 25 },
        { round: 1022, numbers: [5, 6, 11, 29, 42, 45], bonus: 28 },
        { round: 1021, numbers: [12, 15, 17, 24, 29, 45], bonus: 16 },
        { round: 1020, numbers: [12, 27, 29, 38, 41, 45], bonus: 6 },
        { round: 1019, numbers: [1, 4, 13, 17, 34, 39], bonus: 6 },
        { round: 1018, numbers: [3, 19, 21, 25, 37, 45], bonus: 35 },
        { round: 1017, numbers: [12, 18, 22, 23, 30, 34], bonus: 32 },
        { round: 1016, numbers: [15, 26, 28, 34, 41, 42], bonus: 44 },
        { round: 1015, numbers: [14, 23, 31, 33, 37, 40], bonus: 44 },
        { round: 1014, numbers: [3, 11, 14, 18, 26, 27], bonus: 21 },
        { round: 1013, numbers: [21, 22, 26, 34, 36, 41], bonus: 32 },
        { round: 1012, numbers: [5, 11, 18, 20, 35, 45], bonus: 3 },
        { round: 1011, numbers: [1, 9, 12, 26, 35, 38], bonus: 42 },
        { round: 1010, numbers: [9, 12, 15, 25, 34, 36], bonus: 3 },
        { round: 1009, numbers: [15, 23, 29, 34, 40, 44], bonus: 20 },
        { round: 1008, numbers: [9, 11, 30, 31, 41, 44], bonus: 33 },
        { round: 1007, numbers: [8, 11, 16, 19, 21, 25], bonus: 40 },
        { round: 1006, numbers: [8, 11, 15, 16, 17, 37], bonus: 36 },
        { round: 1005, numbers: [8, 13, 18, 24, 27, 29], bonus: 17 },
        { round: 1004, numbers: [7, 15, 30, 37, 39, 44], bonus: 18 },
        { round: 1003, numbers: [1, 4, 29, 39, 43, 45], bonus: 31 },
        { round: 1002, numbers: [17, 25, 33, 35, 38, 45], bonus: 15 },
        { round: 1001, numbers: [6, 10, 12, 14, 20, 42], bonus: 15 },
        { round: 1000, numbers: [2, 8, 19, 22, 32, 42], bonus: 39 }
    ];

    const generateBtn = document.getElementById('generate-btn');
    const minSumInput = document.getElementById('min-sum');
    const maxSumInput = document.getElementById('max-sum');
    const includeBonusCheckbox = document.getElementById('include-bonus');
    const hotNumbersDiv = document.getElementById('hot-numbers');
    const coldNumbersDiv = document.getElementById('cold-numbers');
    const lottoGamesDiv = document.getElementById('lotto-games');

    let numberStats = {};

    function analyzeNumbers() {
        const includeBonus = includeBonusCheckbox.checked;
        const frequency = new Array(46).fill(0);

        lottoData.forEach(draw => {
            draw.numbers.forEach(num => frequency[num]++);
            if (includeBonus) {
                frequency[draw.bonus]++;
            }
        });

        const stats = [];
        for (let i = 1; i <= 45; i++) {
            stats.push({ number: i, count: frequency[i] });
        }

        stats.sort((a, b) => b.count - a.count);

        // HOT 번호: 전체 데이터에서 상위 출현 빈도 10개
        const hotNumbers = stats.slice(0, 10).map(item => item.number);
        // COLD 번호: 전체 데이터에서 하위 출현 빈도 10개
        const coldNumbers = stats.slice(-10).map(item => item.number);
        
        numberStats = { hot: hotNumbers, cold: coldNumbers, frequency };

        displayAnalysis(hotNumbers, coldNumbers);
    }

    function displayAnalysis(hot, cold) {
        hotNumbersDiv.innerHTML = hot.map(num => `<div class="number-ball hot-number">${num}</div>`).join('');
        coldNumbersDiv.innerHTML = cold.map(num => `<div class="number-ball cold-number">${num}</div>`).join('');
    }

    function generateOptimizedGame() {
        let weightedPool = [];
        for (let i = 1; i <= 45; i++) {
            // 기본 가중치: 모든 번호를 10번씩 추가
            for(let j=0; j < 10; j++) weightedPool.push(i);

            // 출현 횟수에 따른 가중치 추가
            const count = numberStats.frequency[i] || 0;
            for(let j=0; j < count; j++) weightedPool.push(i);
        }
        
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomIndex = Math.floor(Math.random() * weightedPool.length);
            numbers.add(weightedPool[randomIndex]);
        }
        
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function generateLottoGames() {
        const minSum = parseInt(minSumInput.value);
        const maxSum = parseInt(maxSumInput.value);
        lottoGamesDiv.innerHTML = '';

        let attempts = 0;
        const games = [];
        while (games.length < 5 && attempts < 5000) { 
            const newGame = generateOptimizedGame();
            const sum = newGame.reduce((a, b) => a + b, 0);

            if (sum >= minSum && sum <= maxSum) {
                if (!games.some(game => JSON.stringify(game) === JSON.stringify(newGame))){
                    games.push(newGame);
                }
            }
            attempts++;
        }

        if (games.length < 5) {
            lottoGamesDiv.innerHTML = '<div class="error-message">프리미엄 번호를 생성하는 데 실패했습니다. 잠시 후 다시 시도하거나 총합 구간을 조정해주세요.</div>';
        } else {
            displayGames(games);
        }
    }

    function displayGames(games) {
        lottoGamesDiv.innerHTML = games.map((game, index) => {
            return `
                <div class="game">
                    <span class="game-label">게임 ${index + 1}</span>
                    <div class="game-numbers">
                        ${game.map(num => getNumberHTML(num)).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    function getNumberHTML(num) {
        let className = '';
        if (numberStats.hot.includes(num)) {
            className = 'hot-number';
        } else if (numberStats.cold.includes(num)) {
            className = 'cold-number';
        }
        return `<div class="number-ball ${className}">${num}</div>`;
    }

    generateBtn.addEventListener('click', generateLottoGames);
    includeBonusCheckbox.addEventListener('change', analyzeNumbers);

    analyzeNumbers();
    generateLottoGames(); // 페이지 로드 시 바로 번호 생성
});
