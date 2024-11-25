function daysRemainingInYear(dateString) {
    // 任意の日付を解析（入力がない場合は今日の日付を使用）
    let currentDate = dateString ? new Date(dateString) : new Date();
    
    // 今年の最後の日付を計算
    let endOfYear = new Date(currentDate.getFullYear(), 11, 31); // 12月31日
    
    // 日付の差を計算（ミリ秒単位を日数に変換）
    let timeDifference = endOfYear - currentDate;
    let remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
    return remainingDays;
}

// 使用例
console.log("今年はあと " + daysRemainingInYear() + " 日です。"); // 今日基準
console.log("2024-12-01 の時点で今年はあと " + daysRemainingInYear("2024-12-01") + " 日です。"); // 指定日基準
