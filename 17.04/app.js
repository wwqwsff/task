const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]
m = 3
n = 3
const merge = (nums1,m, nums2,n)=>{
 nums1.splice(m,n,...nums2)
 nums1.sort((a,b)=>a-b)
 return nums1
}

console.log(merge(nums1, m, nums2, n))

const nums = [3,2,2,5,3,1,7,3,3,3]
val  = 3
const removeElement = (nums,val)=>{
  const del = nums.filter(a=>a!==val)
  nums.length  = 0
  nums.push(...del)
  return nums.length
}
console.log(removeElement(nums,val))