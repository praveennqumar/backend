import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = ((req,res)=>{
      res.status(200).json({
        message:"created"
      })
})

// const registerUser = asyncHandler(async (req,res)=>{
//       res.status(200).json({
//         message:"created"
//       })
// })

export {registerUser}