function twoSum(nums: number[], target: number): number[] {

    let indexes = []
    let aux
    let bool: boolean;
    let index

    nums.map((value, i) => {
        bool = false
        aux = value
        index = i

        nums.map((value, i) => {
            if (index != i && aux + value == target) {
                bool = true
            }
        })

        if (bool) {
            indexes.push(i)
        }
    })

    console.log(indexes)
    return indexes
};
