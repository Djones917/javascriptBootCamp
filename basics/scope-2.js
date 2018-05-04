// Global 
    // Local
      // Local
    // Local  

//let name = 'Derek';    

if (true) {
   // let name = 'Mike';  // You can redefine a variable again if you are working in a scope. But not if its just a varibable. Check Variable lesson! This is call "Variable Shadowing in javascript"
    if (true) {
      let name = 'Jen';  // "Leaked Global" Since there is no let it goes to root and can't find anything so Javascript declares it. Always use let to declair a variable!
      console.log(name);
    }
}

if (true) {
   console.log(name);
}




