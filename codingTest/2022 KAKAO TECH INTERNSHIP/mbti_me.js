// My answer
function solution(survey, choices) {
    const typeList = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']]; // 성격 유형 지표
    const typeResList =  typeList.map(type => { return {[type[0]] : 0 , [type[1]] : 0 } }); //  성격유형 결과 정리 배열

    for(let index in survey) {
        if(4 === choices[index]) continue;
        
        const choice = choices[index];
        const type = survey[index][choice < 4 ? 0 : 1];

        typeList.forEach((typeInfo, arrIndex) => {
            if(!typeInfo.includes(type)) return;

            typeResList[arrIndex][type] += Math.abs(choice - 4);
        })
    }

    const answer = typeResList.map(typeObj => Object.keys(typeObj).find(key => Math.max(...Object.values(typeObj)) === typeObj[key]));

    return answer.join('')
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]))
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]))