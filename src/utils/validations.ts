export const isValidEmail = (email: string): boolean => {
  const match = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    return !!match;
};

export const errorMsg = (status:number,msg:string):any=>{
  return JSON.stringify({
    message: msg,
  }), {
    status: status,
    headers: { "Content-Type": "application/json" },
  }
}
