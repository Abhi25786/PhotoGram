import { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated"
import { moderateScaleVertical } from "../../styles/responsiveSize"

  export const bottomToTopAnimation =(animatedValue:object,inputRange:[0,1,0],outputRange:Array<number>)=>{
    const placeholderstyle = useAnimatedStyle(()=>{
        let topValue = interpolate(animatedValue.value,[0,1,0],outputRange,Extrapolate.CLAMP)
    return{
        top:topValue,
   
    }
      },[animatedValue.value])
    return placeholderstyle
  }