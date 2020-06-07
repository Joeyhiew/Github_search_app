export const checkFound =(userFound)=> {
    if (userFound==true){
      return true;
    }
    else{
      return false;
    }
}

export const checkNull =(data) => {
  if (data==undefined){
    return true;
  }
  else if (data.length==0){
    return true
  }
  else{
    return false
  }
}