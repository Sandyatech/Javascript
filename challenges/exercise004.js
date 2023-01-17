export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
    return (nums.filter(num => { return num < 1; }));
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
    return (names.filter(name => {if(name.charAt(0)==char) return name }));
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
    return (words.filter(word => { if (word.substr(0,3) == "to ") return word }));
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
    return (nums.filter(num => { if (Number.isInteger(num)) return num }));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
    var city=[];
    for (var i = 0; i < users.length; i++)
        city.push(users[i]["data"]["city"]["displayName"]);
    return city;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
    //console.log(Math.sqrt(36));
    //console.log(nums.filter(num => { return (Math.sqrt(num)) }));
    //return (nums.filter(num => {return(Math.sqrt(num)) }));
    var num=[];
    for (var i = 0; i < nums.length; i++)
        num.push(Math.round(Math.sqrt(nums[i])*100)/100);
    return num;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
    return (sentences.filter(sentence => {if(sentence.toLowerCase().includes(str)) return sentence }));
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
    // Your code here
    var side = [];
    for (var i = 0; i < triangles.length; i++) {
        const max = triangles[i].reduce((a, b) => Math.max(a, b), -Infinity);
        side.push(max);
    }
        
    return side;
}
