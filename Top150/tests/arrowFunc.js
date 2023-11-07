const obj = {
    name: 'deeecode',
    age: 200,
    print: function() {
      const print2 = () => {
        console.log(this)
      }
      
      print2()
    }
  }
  
  obj.print()
  // {
  //   name: 'deeecode',
  //   age: 200,
  //   print: [Function: print]
  // }