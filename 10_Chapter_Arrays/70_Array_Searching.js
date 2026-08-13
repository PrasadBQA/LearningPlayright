// Array Searching

let result = ["pass", "fail", "pass", "error", "fail"];

// indexOf - returns first index, or -1 if not found.

result.indexOf("fail"); // 1
result.indexOf("Skip"); // -1 BCZ "skip" is not available/not found

// lastIndefOf - searches from the end
result.lastIndexOf("fail"); // 4  searches from the end

// include - returns boolean
result.includes("error");
