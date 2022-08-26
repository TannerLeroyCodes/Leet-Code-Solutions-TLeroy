# @param {Integer[]} nums
# @return {Integer[]}
def sorted_squares(nums)
    
new_array = []
    
nums.each do |number|
   new_array << number**2
end 
    
new_array.sort {|a,b| a <=> b}
    
    
end