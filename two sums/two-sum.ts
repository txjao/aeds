function twoSum(nums: number[], target: number): number[] {
    let indexes, values = []

    nums.map((value, index) => {

        console.log("condicional:", values.map(value => value + value == target))
        if (values.map(value => value + value == target)) {
            console.log("vetor", values)
            values.push(nums.find((v, i) => index != i && value + v == target))
        }


        return values
    })

    

    return indexes
};
