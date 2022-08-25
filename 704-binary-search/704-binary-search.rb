# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    high = nums.length-1
    low = 0
    while low<= high do
        med = (high+low)/2
        if nums[med] > target
            high = med-1;
        elsif nums[med] < target
            low= med+1;
        else 
            return med;
        end
    end
    return -1;
end