function superbowlWin(record){
 const result = record.find(obj => obj.result === "W")
if (result)

 return result.year
 else 
 return result
}
 
//(record.find(({record}) => record === "1969"))